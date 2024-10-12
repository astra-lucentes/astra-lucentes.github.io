import {Codeblock, Code} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"
import {Title} from "@/kit/Elements"
import Image from "@/kit/Image"

import domino1 from "./domino-1.svg"
import domino2 from "./domino-2.svg"

export const metadata = {
  title: "Домино 3×N",
}

export default function TaskDomino3N() {
  return (
    <>
      <Title>Домино 3 × N</Title>
      <Section>
        <Par>
          <P>
            Найдите количество всевозможных разбиений прямоугольника{" "}
            <Math>3 \times n</Math> на доминошки <Math>1 \times 2</Math>
          </P>
        </Par>
      </Section>
      <Section>
        <Heading>Решение</Heading>
        <Par>
          <P>
            Обозначим за <Math>f(n)</Math> количество разбиений прямоугольника{" "}
            <Math>3 \times n</Math> на доминошки <Math>1 \times 2</Math>, а за{" "}
            <Math>g(n)</Math> -- количество разбиений прямоугольника{" "}
            <Math>3 \times n</Math> с вырезанным углом на доминошки{" "}
            <Math>1 \times 2</Math>. Попробуем выразить <Math>f(n)</Math> и{" "}
            <Math>g(n)</Math> через предыдущие значения.
          </P>
          <P>
            В данном случае нужно составить <Math>2</Math> рекуррентных
            соотношения
          </P>
        </Par>

        <Image image={domino1} />
        <Display>f(n) = f(n-2) + g(n-1) + g(n-1)</Display>
        <Image image={domino2} />
        <Display>g(n) = f(n-1) + g(n-2)</Display>

        <Par>
          <P>
            Решение в лоб через рекурсию. Его сложность <Math>O(2^n)</Math>{" "}
            времени и <Math>O(1)</Math> памяти.
          </P>
        </Par>
        <Codeblock language="python">
          {`def f(n):
    if n < 2: return 0
    if n == 2: return 3
    return f(n-2) + 2 * g(n-1)
    
def g(n):
    if n <= 1: return n
    return f(n-1) + g(n-2)
    
def solution(n):
    return f(n)`}
        </Codeblock>
        <Par>
          <P>
            Применим динамическое программирование. Заведем два массива{" "}
            <Code>f</Code> и <Code>g</Code>, в которых будем хранить ранее
            вычисленные значения <Math>f(n)</Math> и <Math>g(n)</Math>. Таким
            образом, мы реализуем кеширование и избавимся от рекурсии.
          </P>
        </Par>
        <Codeblock language="python">
          {`def solution(n):
    f = [0] * (n+2)
    g = [0] * (n+1)
    f[2] = 3
    g[1] = 1

    for i in range(3, n+1, 2):
        g[i] = f[i-1] + g[i-2]
        f[i+1] = f[i-1] + 2 * g[i]

    return f[n]`}
        </Codeblock>
        <Par>
          <P>
            Это решение работает за <Math>O(n)</Math> времени и памяти. Оно
            легко оптимизируется до <Math>O(1)</Math> памяти:
          </P>
        </Par>
        <Codeblock language="python">
          {`def solution(n):
    if n % 2: return 0
    
    f, g = 3, 1

    for i in range(n // 2 - 1):
        g = f + g
        f = f + 2 * g

    return f`}
        </Codeblock>
        <Par>
          <P>
            Выразим <Math>f(n)</Math> через ее саму (из двух рекуррент сделаем
            одну). По первой формуле{" "}
          </P>
          <Display>
            f(n) = f(n-2) + 2 \cdot g(n-1) = 2 \cdot \bl( f(n-2) + g(n-3) \br) +
            f(n-2) = 3 \cdot f(n-2) + 2 \cdot g(n-3)
          </Display>
          <P>
            И из первой формулы сдвигом на <Math>2</Math> следует, что{" "}
            <Math>f(n-2) = f(n-4) + 2 \cdot g(n-3)</Math>. Получаем, что
          </P>
          <Display>f(n) = 4 \cdot f(n-2) - f(n-4)</Display>
        </Par>
        <Par>
          <P>
            Теперь можно упростить код, однако на сложность это не повлияет.
          </P>
        </Par>
        <Codeblock language="python">
          {`def solution(n):
    if n % 2: return 0
    
    a, b = 1, 3

    for _ in range(n // 2 - 1):
        a, b = b, 4 * b - a

    return b`}
        </Codeblock>

        <Par>
          <P>
            Продолжаем улучшать решение. И здесь придется отказаться от
            динамического программирования. Давайте выведем явную формулу для{" "}
            <Math>f(n)</Math>.
          </P>
          <P>
            Будем решать рекуррентное соотношение через матрицы. Функция <Math>f(n)</Math> зависит от двух предшествующих. Найдем такую матрицу <Math>A</Math>, что <Math>{`A \\cdot \\pmatrix{f(n)\\\\f(n+2)} = \\pmatrix{f(n+2)\\\\f(n+4)}`}</Math>
          </P>
          <Display>
            {`\\pmatrix{a&b\\\\c&d} \\cdot \\pmatrix{f(n)\\\\f(n+2)} = ` +
              `\\pmatrix{a \\cdot f(n) + b \\cdot f(n+2) \\\\ c \\cdot f(n) + d \\cdot f(n+2)} = ` +
              `\\pmatrix{f(n+2)\\\\4 \\cdot f(n+2) - f(n)} = \\pmatrix{f(n+2)\\\\f(n+4)}`}
          </Display>
          <P>
            Отсюда получаем, что <Math>{`A = \\pmatrix{0&1\\\\-1&4}`}</Math>.
            Значит,{" "}
            <Math>{`\\pmatrix{f(n)\\\\f(n+2)} = \\pmatrix{0&1\\\\-1&4}^{n-1} \\cdot \\pmatrix{1\\\\3}`}</Math>
          </P>
          <P>
            Ответ на задачу -- верхний элемент полученного вектора. Степень матрицы находится за <Math>O(\log n)</Math>.
          </P>
        </Par>

        <Codeblock language="python">{`def matmul(a, b):
    return (
        (a[0][0]*b[0][0] + a[0][1]*b[1][0],
         a[0][0]*b[0][1] + a[0][1]*b[1][1]),
        (a[1][0]*b[0][0] + a[1][1]*b[1][0],
         a[1][0]*b[0][1] + a[1][1]*b[1][1])
    )


def fastpow(a, n):
    result = ((1, 0),
              (0, 1))

    while n:
        if n & 1:
            result = matmul(result, a)
        a = matmul(a, a)
        n >>= 1

    return result


def solution(n):
    if n % 2: return 0

    a = ((0, 1),
         (-1, 4))

    r = fastpow(a, n // 2)
    return r[0][0] + 3 * r[0][1]
`}</Codeblock>

        <Par>
          <P>
            Для этого решения пришлось реализовать матричное умножение (функция{" "}
            <Code>matmul</Code>) и быстрое возведение в степень (функция{" "}
            <Code>fastpow</Code>). Итоговая сложность <Math>O(\log n)</Math>{" "}
            времени и <Math>O(1)</Math> памяти.
          </P>
        </Par>
      </Section>
    </>
  )
}
