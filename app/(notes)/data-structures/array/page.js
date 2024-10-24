import {Codeblock, Code} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {
  Decl,
  Heading,
  P,
  Par,
  Section,
  Subheading,
  Weak,
} from "@/kit/Typography"
import {Title} from "@/kit/Elements"
import {Pseudocode} from "@/kit/Code/Codeblocks"
import Image from "@/kit/Image"

import array from "./array.svg"

export const metadata = {
  title: "Массив",
}

export default function StaticArray() {
  return (
    <>
      <Title>Массив</Title>

      <Section>
        <Par>
          <P>
            Массив -- непрерывный кусок памяти, хранящий в себе фиксированное
            число элементов одинакового типа. Каждый элемент массива имеет
            индекс -- его порядковый номер.
          </P>
          <P>
            Для всех элементов выделяется одинаковое целое число байт,
            определяемое по типу.
          </P>
          <P>
            Для получения элемента типа <Code language="pseudocode">T</Code> с
            индексом <Math>i</Math> в массиве <Code>a</Code> нужно прочитать{" "}
            <Code language="pseudocode">(size of T)</Code> байт начиная с
            позиции <Code language="pseudocode">a + i * (size of T)</Code>. При
            этом <Code>a</Code> является указателем на начало массива.
          </P>
          <Image image={array} />
          <P>
            Вот пример хранения массива в памяти. Указатель на начало массива{" "}
            <Code language="pseudocode">a = 0x8E53</Code>, в массиве{" "}
            <Math>6</Math> элементов. Если тип элементов{" "}
            <Code language="c">short</Code> (каждый <Math>2</Math> байта), то{" "}
            <Code language="pseudocode">a = [583, 250, 18, 14146, -40, 0]</Code>
            .
          </P>
        </Par>
        <Par>
          <P>
            Получение значения из ячейки памяти и запись значения в ячейку по
            адресу выполняются за <Math>O(1)</Math> времени. Поэтому доступ и
            изменение произвольных элементов выполняется за <Math>O(1)</Math>.
          </P>
        </Par>
      </Section>

      <Section>
        <Heading>Статический массив</Heading>

        <Par>
          <P>
            Статический массив -- массив, у которого привязанный к нему кусок
            памяти неизменен. Таким образом, размер массива тоже остается
            неизменным.
          </P>
          <P>
            Статические массивы должны знать свой размер на момент создания.
            Если массив объявлен статически (например, в глобальной области
            видимости или как статический атрибут), то он размещается в
            статической памяти. Локально объявленные массивы размещаются на
            стеке.
          </P>
        </Par>

        <Subheading>Дополнительное пространство</Subheading>

        <Par>
          <P>
            Можно заранее выделить некоторое количество памяти и постепенно ее
            заполнять. Таким образом длина может быть переменной, но она ни в
            коем случае не может превышать вместимость (то, сколько мы
            изначально выделили). Удаление с конца и вставка в конец здесь будут
            работать за <Math>O(1)</Math>.
          </P>
          <P>
            Статический массив с возможностью ограниченного расширения
            реализовывается так
          </P>
        </Par>

        <Pseudocode>
          {`type static_array:
    T*  head
    int size
    int capacity
    
    constructor(self, capacity):
        self.size = 0
        self.capacity = capacity
        self.head = memory_allocate(capacity, size of T)

    destructor(self):
        memory_free(self.head)

    method append(self, item):
        assert self.size < self.capacity
        *(head + self.size) = item
        self.size++
    
    method delete(self):
        assert self.size > 0
        self.size--
        
    operator self[index]:
        return *(self.head + index)
        
    operator self[index] = value:
        *(self.head + index) = value`}
        </Pseudocode>
      </Section>

      <Section>
        <Heading>Динамический массив</Heading>
      </Section>

      <Section>
        <Heading>Базовые операции</Heading>
        <Par>
          <P>
            <Decl>Вставка.</Decl> Если мы вставляем элемент не в конец массива, а
            в произвольное место, то остальные элементы придется сдвигать.
            Временная сложность этой операции <Math>O(n)</Math>.
          </P>
        </Par>
        <Pseudocode>{`function insert(array a, int index, value):
    assert a.size < a.capacity
    
    for i = a.size, i > index, i--:
        a[i] = a[i-1]
    
    a[index] = value
    a.size++`}</Pseudocode>

        <Par>
          <P>
            <Decl>Удаление.</Decl> Удаление произвольного элемента, аналогично
            вставке, требует сдвига нескольких элементов. Временная сложность
            тоже <Math>O(n)</Math>.
          </P>
        </Par>
        <Pseudocode>{`function remove(array a, int index):
    assert a.size > 0
    
    for i = index, i < a.size:
        a[i] = a[i+1]
    
    a.size--`}</Pseudocode>

        <Par>
          <P>
            <Decl>Поиск.</Decl> Для поиска значения в массиве придется пройтись
            по всему массиву. Сложность <Math>O(n)</Math>.
          </P>
        </Par>
        <Pseudocode>
          {`function find(array a, value):
    for x with index i in a:
        if x == value:
            return i`}
        </Pseudocode>
      </Section>
    </>
  )
}
