import {Code, Codeblock, Pseudocode} from "@/kit/Code"
import {Title} from "@/kit/Elements"
import {BulletList, Item} from "@/kit/Lists"
import {Heading, P, Par, Section} from "@/kit/Typography"
import {Math} from "@/kit/Math"

export default function ArraysAndLists() {
  return (
    <>
      <Title>Массивы и списки. Задания</Title>

      <Par>
        <P>
          Предпочтительнее решать задачи на C. Решения оформляйте в виде
          функций, а не через консоль.
        </P>
        <P>
          Код должен быть простым и понятным. Правильно именуйте переменные,
          следуйте правилам оформления кода. За несоблюдение буду снижать оценки
          и заставлять переделать.
        </P>
      </Par>

      <Section>
        <Heading>Динамический массив</Heading>

        <Par>
          <P>
            Реализуйте динамический массив <b>на C</b> с помощью структуры и
            функций.
          </P>
        </Par>

        <Codeblock language="c">
          {`typedef int T;

typedef struct array
{
    T* head;
    int size;
    int capacity;
} array;
`}
        </Codeblock>

        <Par>
          <P>Нужно реализовать следующие функции</P>

          <BulletList>
            <Item>
              <Code language="pseudocode">get(array* a, int i)</Code> – получить
              значение по индексу <Code>i</Code>
            </Item>
            <Item>
              <Code language="pseudocode">set(array* a, int i, T value)</Code> –
              изменить значение по индексу <Code>i</Code> на <Code>value</Code>
            </Item>
            <Item>
              <Code language="pseudocode">append(array* a, T value)</Code> –
              вставка в конец массива
            </Item>
            <Item>
              <Code language="pseudocode">delete(array* a)</Code> – удаление
              элемента с конца массива
            </Item>
            <Item>
              <Code language="pseudocode">
                insert(array* a, int i, T value)
              </Code>{" "}
              – вставить элемент на место <Code>i</Code>
            </Item>
            <Item>
              <Code language="pseudocode">remove(array* a, int i)</Code> –
              удалить элемент с индексом <Code>i</Code>
            </Item>
          </BulletList>
        </Par>
      </Section>

      <Heading>Удалить дубликаты</Heading>

      <Par>
        <P>
          Дан отсортированный односвязный список (первый его узел). Необходимо
          удалить все дублирующиеся элементы, оставив только уникальные.
        </P>
      </Par>

      <Par>
        <P>
          Например,{" "}
          <Code language="pseudocode">{`2 -> 2 -> 3 -> 4 -> 4 -> 4 -> 5`}</Code>{" "}
          превращаем в <Code language="pseudocode">{`2 -> 3 -> 4 -> 5`}</Code>
        </P>
      </Par>

      <Par>
        <P>Узел связного списка реализован как класс.</P>
      </Par>

      <Codeblock language="python">
        {`class node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next

    def __str__(self):
        return f"{self.value} -> {self.next}"
`}
      </Codeblock>

      <Par>
        <P>
          Решение - функция, которая принимает первый узел списка и возвращает
          первый узел результирующего списка.
        </P>
      </Par>
      <Codeblock language="python">
        {`def solution(a: node) -> node:
    ...`}
      </Codeblock>

      <Par>
        <P>
          Для нашего примера{" "}
          <Code language="pseudocode">
            a = node(2, node(2, node(3, node(4, node(4, node(4, node(5)))))))
          </Code>{" "}
          функция должна вернуть{" "}
          <Code language="pseudocode">node(2, node(3, node(4, node(5))))</Code>
        </P>
      </Par>

      <Heading>Сумма двух</Heading>
      <Par>
        <P>
          Дан массив чисел <Code>a</Code> и число <Code>target</Code>. Найдите в
          массиве <Code>a</Code> два числа, которые в сумме дают{" "}
          <Code>target</Code>. Верните индексы этих чисел.
        </P>
      </Par>

      <Par>
        <P>
          Если таких чисел нет, то вызовете исключение <Code>ValueError</Code>.
          Если их несколько, верните любое.
        </P>
      </Par>

      <Codeblock language="python">
        {`def two_sum(a: list[int], target: int) -> tuple(int, int):
    ...`}
      </Codeblock>

      <Par>
        <P>Например</P>
      </Par>
      <Pseudocode>{`a = [2, 7, 8, 3]; target = 9  ->  (0, 1)
a = [1, 2, 8, 0]; target = 2  ->  (1, 3)
a = [1, 1];       target = 4  ->  ValueError`}</Pseudocode>

      <Heading>Треугольник паскаля</Heading>

      <Par>
        <P>
          Дано натуральное число <Math>n</Math>. Верните <Math>n</Math>-ую
          строку в треугольнике паскаля
        </P>
      </Par>

      <Codeblock language="python">
        {`def pascal_triangle(n: int) -> list[int]:
    ...`}
      </Codeblock>

      <Par>
        <P>Например,</P>
      </Par>

      <Pseudocode>
        {`0 -> [1]
1 -> [1, 1]
2 -> [1, 2, 1]
`}
      </Pseudocode>

      <Par>
        <P>Минимизируйте дополнительную память.</P>
      </Par>

      <Heading>Гидрометцентр</Heading>

      <Par>
        <P>
          Дан список из температур по дням. Верните список <Code>answer</Code>,
          в котором
          <Code>answer[i]</Code> - количество дней, которые надо подождать,
          чтобы после
          <Code>i</Code>-го дня температура стала больше.
        </P>
      </Par>

      <Codeblock language="python">
        {`def hmc(t: list[int]) -> list[int]:
    ...
`}
      </Codeblock>

      <Par>
        <P>Например,</P>
      </Par>

      <Pseudocode>
        {`t = [12, 14, 21, 17, 86, 15, 3]
answer = [1, 1, 2, 1, 0, 0, 0]
`}
      </Pseudocode>

      <Heading>Разворот</Heading>

      <Par>
        <P>
          Дана матрица (двумерный массив) <Math>n \times n</Math>, состоящая из
          чисел. Поверните матрицу на 90 градусов по часовой стрелке,{" "}
          <b>не создавая</b> дополнительных массивов.
        </P>
      </Par>

      <Codeblock language="python">
        {`def rotate(matrix: list[list[int]]) -> list[list[int]]:
    ...`}
      </Codeblock>

      <Par>
        <P>Например,</P>
      </Par>

      <Pseudocode>
        {`matrix = [[1,2,3], 
         [4,5,6], 
         [7,8,9]] 
         
answer = [[7,4,1], 
          [8,5,2],
          [9,6,3]]`}
      </Pseudocode>
    </>
  )
}
