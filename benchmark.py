import atexit
import linecache
import tracemalloc

from time import perf_counter_ns
from collections import defaultdict
from dataclasses import dataclass

import memory_profiler


@dataclass
class function_benchmark:
    call_count: int = 0
    total_time: int = 0
    max_time: int = 0


@dataclass
class line_benchmark:
    count: int = 0
    memory: int = 0


class CodeBenchmark:
    def __init__(self, filename):
        self.filename = filename

        self.lines: dict[int, line_benchmark] = defaultdict(line_benchmark)
        self.functions: dict[int, function_benchmark] = defaultdict(function_benchmark)
        self.functions_calls: dict[int, list[float]] = defaultdict(list)

        if not tracemalloc.is_tracing():
            tracemalloc.start()

    def __call__(self, frame, event, _):
        co = frame.f_code

        if not co.co_filename == self.filename:
            return

        time = perf_counter_ns()
        # print(time, frame, event)

        match event:
            case 'call':
                self.functions_calls[co.co_name].append(time)
                self.functions[co.co_name].call_count += 1

            case 'return':
                delta = time - self.functions_calls[co.co_name].pop()
                self.functions[co.co_name].total_time += delta
                self.functions[co.co_name].max_time = max(self.functions[co.co_name].max_time, delta)

            case 'line':
                mem, _ = self._get_memory(co.co_filename)

                lineno = frame.f_lineno
                self.lines[lineno].count += 1
                self.lines[lineno].memory = max(self.lines[lineno].memory, mem)

    def _get_memory(self, filename):
        stat = next(filter(lambda item: str(item).startswith(filename),
                           tracemalloc.take_snapshot().statistics('filename')))
        mem = stat.size
        return mem, perf_counter_ns()

    def print(self):
        print('func    calls  total_time  max_time')
        template = '{0:>16}  {1:>4}  {2}  {3}'
        for func_name, bench in self.functions.items():
            print(template.format(func_name, bench.call_count, bench.total_time, bench.max_time)) 
        print()
        
        template = '{2:>6} {3:>6}  {1:>4}  {0:>2}  {4}'
        all_lines = linecache.getlines(self.filename)

        last_memory = 0
        
        for lineno in range(min(self.lines.keys()), max(self.lines.keys()) + 1):
            if lineno in self.lines:
                count = self.lines[lineno].count
                memory = self.lines[lineno].memory
                memory_inc = memory - last_memory
                last_memory = memory
            else:
                count = ''
                memory = ''
                memory_inc = ''

            print(template.format(lineno, count, memory, memory_inc, all_lines[lineno-1][4:-1]))


def set_tracer(__file__):
    import sys

    cb = CodeBenchmark(__file__)

    def _trace(*args):
        cb(*args)
        return _trace

    sys.settrace(_trace)
    atexit.register(lambda: tracemalloc.stop())
    return cb
