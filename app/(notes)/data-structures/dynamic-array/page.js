import {Codeblock, Code, Pseudocode} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"
import {Title} from "@/kit/Elements"

export const metadata = {
  title: "Динамический массив",
}

export default function StaticArray() {
  return (
    <>
      <Title>Динамический массив</Title>
      <Section>
        <Par>
          <P>
            Динамический массив -- массив, который может изменять свой размер в
            зависимости от количества элементов, которые в нем находятся.
          </P>
          <P>
            Кроме операции доступа и изменения произвольного элемента есть еще
            добавление элемента в конец и удаление элемента из конца, которые
            работают за амортизированное время <Math>O(1)</Math>.
          </P>
        </Par>

        <Par>
          <P>
            В динамическом массиве 3 поля: указатель на первый элемент{" "}
            <Code language="pseudocode">*head</Code> (или статический массив),
            размер динамического массива <Code>size</Code> и его максимальная
            вместимость <Code>capacity</Code>.
          </P>
        </Par>

        <Pseudocode>
          {`type dynamic_array:
   *head
    size: int
    capacity: int`}
        </Pseudocode>

        <Par>
          <P>
            Когда внутренний статический массив полностью заполнен (когда{" "}
            <Code language="pseudocode">size == capacity</Code>), его необходимо
            расширить -- деаллоцировать и заново аллоцировать с большим размером
            памяти.
          </P>
          <P>
            Для достижения амортизированного времени вставки <Math>O(1)</Math>{" "}
            (с учетом расширения), увеличивать вместимость массива необходимо в
            какое-то константное количество раз.
          </P>
        </Par>

        <Pseudocode>
          {`type dynamic_array:
   *head
    size: int
    capacity: int
    
    constructor(self, capacity):
        self.size = 0
        self.capacity = capacity
        self.head = memory_allocate(capacity)

    destructor(self):
        memory_free(self.head)

    method resize(self, capacity):
        self.head = memory_reallocate(self.head, capacity)        
        self.capacity = capacity

    method append(self, item):
        if self.size == self.capacity:
            self.resize(self.capacity * 2)

        *(head + self.size) = item
        self.size++
    
    method delete(self):
        assert self.size > 0
        
        if size * 4 < capacity:
            self.resize(capacity / 2);

        self.size--
        
    operator self[index]:
        return *(self.head + index)
        
    operator self[index] = value:
        *(self.head + index) = value`}
        </Pseudocode>

        <Pseudocode>{`function remove(array, index):
    assert 0 <= index <= array.size
    
    array.size--
    for i = index, i < array.size:
        array[i] = array[i+1]`}</Pseudocode>

        <Pseudocode>{`function insert(array, index, item):
    assert 0 <= index <= array.size
    
    array.size++
    for i = array.size, i > index, i--:
        array[i] = array[i-1]
        
    array[index] = item`}</Pseudocode>
      </Section>

      <Section>
        <Heading>Реализация</Heading>

        <Codeblock language="c">
          {`typedef int T;

typedef struct dynamic_array
{
    T *head;
    int size;
    int capacity;
} dynamic_array;

dynamic_array constructor(int capacity)
{
    dynamic_array array;
    array.size = 0;
    array.capacity = capacity;
    array.head = calloc(capacity, sizeof(T));

    return array;
}

void destructor(dynamic_array *array)
{
    free(array->head);
}

void resize(dynamic_array *array, int capacity)
{
    array->head = realloc(array->head, sizeof(T));
    array->capacity = capacity;
}

void append(dynamic_array *array, T value)
{
    if (array->size == array->capacity)
        resize(array, array->capacity * 2);

    *(array->head + array->size) = value;
    array->size++;
}

void delete(dynamic_array *array)
{
    if (array->size == 0)
        return;
    if (array->size * 4 < array->capacity)
        resize(array, array->capacity / 2);

    array->size--;
}

int get(dynamic_array array, int index)
{
    return *(array.head + index);
}

void set(dynamic_array *array, int index, T value)
{
    *(array->head + index) = value;
}`}
        </Codeblock>
      </Section>
    </>
  )
}
