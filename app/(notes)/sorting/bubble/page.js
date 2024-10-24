import {Codeblock, Pseudocode} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"
import {Title} from "@/kit/Elements"

export const metadata = {
  title: "Сортировка пузырьком",
}

export default function Sorting() {
  return (
    <>
      <Title>Сортировка пузырьком</Title>
      <Section>
        <Par>
          <P>Сортировка пузырьком -- квадратичная устойчивая сортировка. </P>
          <P>
            Мы сравниваем соседние элементы, и, если порядок в паре неверный, то
            элементы меняют местами. За каждый проход по массиву как минимум
            один элемент встает на свое место, поэтому необходимо совершить не
            более <Math>n-1</Math> проходов. </P>
            <P>Временная сложность реализации в лоб <Math>\Theta(n^2)</Math>, а пространственная <Math>O(1)</Math>.
          </P>
        </Par>
        <Pseudocode>
          {`function bubble_sort(a: list):
    for k = 0, k < n:
        for i = 0, i < n-1:
            if a[i] > a[i+1]:
                a[i], a[i+1] = a[i+1], a[i]`}
        </Pseudocode>
        <Par>
          <P>
            После <Math>k</Math>-той итерации <Math>k</Math> элементов стоят на
            своих местах, поэтому во внутреннем цикле нет необходимости по ним
            проходиться.
          </P>
        </Par>
        <Pseudocode>
          {`function bubble_sort(a: list):
    for k = 0, k < n:
        for i = 0, i < n - i - 1:
            if a[i] > a[i+1]:
                a[i], a[i+1] = a[i+1], a[i]`}
        </Pseudocode>
        <Par>
          <P>
            Если во внутреннем цикле не было сделано ни одного обмена, то список
            уже отсортирован и больше ничего делать не надо.
          </P>
        </Par>
        <Pseudocode>
          {`function bubble_sort(a: list):
    for k = 0, k < n:
        is_swapped = false

        for i = 0, i < n - i - 1:
            if a[i] > a[i+1]:
                a[i], a[i+1] = a[i+1], a[i]
                is_swapped = true
            
        if not is_swapped:
            break`}
        </Pseudocode>
        <Par>
          <P>
            Таким образом временная сложность в лучшем случае составит{" "}
            <Math>\Omega(n)</Math> вместо <Math>\Omega(n^2)</Math>, и итоговая
            временная сложность алгоритма улучшится до{" "}
            <Math>O(n^2) \sect \Omega(n)</Math>.
          </P>
        </Par>
      </Section>
    </>
  )
}
