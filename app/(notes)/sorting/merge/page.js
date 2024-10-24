import {Code, Codeblock, Pseudocode} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {
  P,
  Par,
  Section,
  Subheading,
  Weak,
  Decl,
  Heading,
} from "@/kit/Typography"
import {Title} from "@/kit/Elements"
import {Tabs, Tab} from "@/kit/Tabs"
import {CIcon, PythonIcon} from "@/kit/Icons"
import {Slider} from "@/kit/Slider"

import Example from "./Example"

export const metadata = {
  title: "Сортировка слиянием",
}

export default function Sorting() {
  return (
    <>
      <Title>Сортировка слиянием</Title>
      <Section>
        <Par>
          <P>
            Сортировка слиянием (Merge sort) -- устойчивая сортировка,
            работающая за <Math>\Theta(n \log n)</Math> времени. Работает на
            любых структурах данных последовательного доступа.
          </P>
        </Par>
        <Par>
          <P>
            Основная идея алгоритма -- разделить список на две части,
            отсортировать эти части отдельно этим же алгоритмом, а потом
            соединить их в один отсортированный список. Такая процедура
            соединения называется процедурой слияния.
          </P>
        </Par>

        <Example/>

        <Pseudocode>{`function merge_sort(list a):
    if length of a <= 1:
        return a
    
    left = right = []

    for each x with index i in a:
        if i < (length of a) / 2:
            left.append(x)
        else:
            right.append(x)

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)`}</Pseudocode>

        <Subheading>Слияние</Subheading>
        <Par>
          <P>
            Пусть есть два отсортированных списка <Code>a</Code> и{" "}
            <Code>b</Code>. Надо превратить эти два списка в один
            отсортированный список <Code>c</Code>. Эту задачу решает процедура
            слияния.
          </P>
          <P>
            Мы сравниваем первые (наименьшие) элементы списков <Code>a</Code> и{" "}
            <Code>b</Code>, забираем меньший и добавляем его в список{" "}
            <Code>c</Code>. Проделываем эту операцию, пока элементы в каком-то
            из списков не закончатся. Затем дописываем в <Code>c</Code> все
            оставшиеся элементы непустого списка.
          </P>
        </Par>

        <Pseudocode>{`function merge(list left, list right):
    result = []
    i = j = 0

    while i < length of left and j < length of right:
        if left[i] <= right[j]:
            result.append(left[i])
            i++
        else:
            result.append(right[j])
            j++

    for k = i, left < length of left:
        result.append(left[k])

    for k = j, k < length of right:
        result.append(right[k])

    return result`}</Pseudocode>
      </Section>

      <Section>
        <Heading>Распараллеливание</Heading>

        <Pseudocode>{`function merge_sort(list a):
    if length of a <= 1:
        return a
    
    left = right = []

    for each x with index i in a:
        if i < (length of a) / 2:
            left.append(x)
        else:
            right.append(x)
    
    gather:
        left = fork merge_sort(left)
        right = fork merge_sort(right)

    return merge(left, right)`}</Pseudocode>
      </Section>


      <Section>
        <Heading>Реализация</Heading>
        <Tabs>
          <Tab
            title={
              <>
                <PythonIcon size={1.5} />
                Python
              </>
            }
          >
            <Codeblock language="python">{`def merge(a: list, b: list) -> list:
    result = []
    i = j = 0

    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i])
            i += 1
        else:
            result.append(b[j])
            j += 1

    result.extend(a[i:])
    result.extend(b[j:])

    return result


def merge_sort(a: list) -> list:
    if len(a) <= 1:
        return a

    return merge(
        merge_sort(a[:len(a)//2]),
        merge_sort(a[len(a)//2:])
    )`}</Codeblock>
          </Tab>
          <Tab
            title={
              <>
                <CIcon size={1.5} />C за <Math>O(n)</Math> памяти
              </>
            }
          >
            <Codeblock language="c">{`typedef int T;

void merge(T array[], int left, int mid, int right)
{
    int len_a = mid - left + 1;
    int len_b = right - mid;

    T a[len_a], b[len_b];

    for (int i = 0; i < len_a; i++)
        a[i] = array[left + i];
    
    for (int i = 0; i < len_b; i++)
        b[i] = array[mid + 1 + i];

    int i = 0, j = 0;
    int k = left;

    while (i < len_a && j < len_b) {
        if (a[i] <= b[j]) {
            array[k] = a[i];
            i++;
        } else {
            array[k] = b[j];
            j++;
        }
        k++;
    }

    while (i < len_a) {
        array[k] = a[i];
        i++;
        k++;
    }

    while (j < len_b) {
        array[k] = b[j];
        j++;
        k++;
    }
}

void merge_sort(T array[], int left, int right) {
    if (left < right) {
        int mid = (right + left) / 2;

        merge_sort(array, left, mid);
        merge_sort(array, mid + 1, right);

        merge(array, left, mid, right);
    }
}`}</Codeblock>
          </Tab>
        </Tabs>
      </Section>
    </>
  )
}
