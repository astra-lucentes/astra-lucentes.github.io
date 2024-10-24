import sys
import time
import humanize

import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

funcs = []

for i, module in enumerate(sys.argv[1:]):
    if module.isdecimal():
        break
    
    file, func_name = module.rsplit('.', 1)
    funcs.append(getattr(__import__(file), func_name))

step = float(sys.argv[i+1]) if len(sys.argv) >= i + 2 else 100
factor = float(sys.argv[i+2]) if len(sys.argv) >= i + 3 else 1

prev_n = 0
n = 10
x = [[] for _ in range(len(funcs))]
y = [[] for _ in range(len(funcs))]

total_time = 0
prev_delta = 0


try:
    while total_time < 3 * 1e10:
        max_delta = 0
        
        if prev_n >= n:
            n = prev_n + 1
        
        print(f'{humanize.integer(n):>7}', end='  ', flush=True)
        
        for i, func in enumerate(funcs):

            start_time = time.perf_counter_ns()
            func(2 * n)
            delta = time.perf_counter_ns() - start_time
            max_delta = max(delta, max_delta)
            
            print(humanize.number_m(delta, 's').rjust(8), end='  ', flush=True)
            x[i].append(n)
            y[i].append(delta)
        print()

        n *= max((prev_delta or max_delta) / max_delta, 1) * factor
        n += step
        n = int(n)
        
        prev_delta = max_delta
        prev_n = n
        total_time += max_delta
except KeyboardInterrupt:
    pass

for x, y in zip(x, y):
    x = np.array(x)
    y = np.array(y)
    df = pd.DataFrame({'x': x, 'y': y})
    sns.regplot(x='x', y='y', data=df, order=2)

plt.show()
