import {Codeblock, Code} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"
import {Title} from "@/kit/Elements"

import domino from "./domino.svg"
import Image from "@/kit/Image"

export const metadata = {
  title: "Домино 2×N",
}

export default function TaskDomino2N() {
  return (
    <>
      <Title>Домино 2 × N</Title>
      <Section>
        <Par>
          <P>
            Найдите количество всевозможных разбиений прямоугольника{" "}
            <Math>2 \times n</Math> на доминошки <Math>1 \times 2</Math>
          </P>
        </Par>
      </Section>
      <Section>
        <Heading>Решение</Heading>
        <Par>
          <P>
            Обозначим за <Math>f(n)</Math> количество разбиений прямоугольника{" "}
            <Math>2 \times n</Math> на доминошки <Math>1 \times 2</Math>. Ясно,
            что <Math>f(1) = 1</Math> и <Math>f(2) = 2</Math>. Попробуем
            выразить <Math>f(n)</Math> через предыдущие значения.
          </P>
          <P>
            Для какого-то разбиения большого прямоугольника существует ровно два
            варианта расположения первых доминошек. Отсюда получаем соотношение
          </P>
        </Par>
        <Image image={domino} />
        <Display>f(n) = f(n-1) + f(n-2)</Display>
        <Par>
          <P>
            Получаем, что <Math>{`f(n) = F_{n+1}`}</Math>, а это{" "}
            <Math>n+1</Math> число Фибоначчи.
          </P>
        </Par>
        <Par>
          <P>
            Решение в лоб через рекурсию. Его сложность{" "}
            <Math>\Theta(\varphi^n)</Math> времени и <Math>O(1)</Math> памяти.
          </P>
        </Par>
        <Codeblock language="python">
          {`def f(n):
    if n <= 2: return n
    return f(n-1) + f(n-2)`}
        </Codeblock>
        <Par>
          <P>
            Применим динамическое программирование. Заведем массив{" "}
            <Code>f</Code>, в котором будем хранить ранее вычисленные значения{" "}
            <Math>f(n)</Math>. Таким образом, мы реализуем кеширование и
            избавимся от рекурсии.
          </P>
        </Par>
        <Codeblock language="python">
          {`def solution(n):
    f = [0] * (n+1)
    f[0] = 1
    f[1] = 1

    for i in range(2, n+1):
        f[i] = f[i-1] + f[i-2]

    return f[n]`}
        </Codeblock>
        <Par>
          <P>
            Это решение работает за <Math>O(n)</Math> времени и памяти. Однако,
            мы на самом деле используем только три ячейки: текущий, предыдущий и
            предпредыдущий элементы. Поэтому в этом решении можно оптимизировать
            память.
          </P>
        </Par>
        <Codeblock language="python">
          {`def solution(n):
    a, b = 1, 1

    for _ in range(2, n+1):
        a, b = b, a + b

    return b`}
        </Codeblock>
        <Par>
          <P>
            Оптимизированное решение работает за <Math>O(n)</Math> времени и{" "}
            <Math>O(1)</Math> памяти.
          </P>
        </Par>
        <Par>
          <P>
            Продолжаем улучшать решение. И здесь придется отказаться от
            динамического программирования. Давайте выведем явную формулу для{" "}
            <Math>f(n) = F_n</Math>.
          </P>
          <P>
            Давайте представим два идущих подряд значения <Math>f</Math> как
            вектор <Math>{`\\pmatrix{F_n\\\\F_{n+1}}`}</Math>. <br />
            Теперь найдем такую матрицу <Math>A</Math>, что{" "}
            <Math>{`A \\cdot \\pmatrix{F_n\\\\F_{n+1}} = \\pmatrix{F_{n+1}\\\\F_{n+2}}`}</Math>
          </P>
          <Display>
            {`\\pmatrix{a&b\\\\c&d} \\cdot \\pmatrix{F_n\\\\F_{n+1}} = ` +
              `\\pmatrix{a \\cdot F_n + b \\cdot F_{n+1} \\\\ c \\cdot F_n + d \\cdot F_{n+1}} = ` +
              `\\pmatrix{F_{n+1}\\\\F_n + F_{n+1}} = \\pmatrix{F_{n+1}\\\\F_{n+2}}`}
          </Display>
          <P>
            Отсюда получаем, что <Math>{`A = \\pmatrix{0&1\\\\1&1}`}</Math>.
            Значит,{" "}
            <Math>{`\\pmatrix{F_n\\\\F_{n+1}} = \\pmatrix{0&1\\\\1&1}^n \\cdot \\pmatrix{F_0\\\\F_1}`}</Math>
          </P>
          <P>
            Можно убрать одно умножение, если убрать вектора и записать это как
            степень квадратной матрицы
          </P>
          <Display>
            {`\\pmatrix{F_{n-1} & F_n \\\\ F_n & F_{n+1}} = \\pmatrix{0&1\\\\1&1}^n`}
          </Display>
          <P>
            Ответ на задачу -- правый нижний элемент матрицы <Math>A^n</Math>. А
            степень матрицы находится за <Math>O(\log n)</Math>.
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
    a = ((0, 1), 
         (1, 1))
    
    return fastpow(a, n)[1][1]`}</Codeblock>

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
