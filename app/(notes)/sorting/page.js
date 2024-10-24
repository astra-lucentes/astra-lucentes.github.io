import {Codeblock, Pseudocode} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {
  Heading,
  P,
  Par,
  Section,
  Subheading,
  Weak,
  Decl,
} from "@/kit/Typography"
import {Title} from "@/kit/Elements"

export const metadata = {
  title: "Сортировка",
}

export default function Sorting() {
  return (
    <>
      <Title>Сортировка</Title>

      <Section>
        <Par>
          <P>
            Пусть <Math>a_1, a_2, \dots, a_n</Math> -- элементы множества{" "}
            <Math>S</Math>, на котором введено отношение порядка.
          </P>
          <P>
            Задача сортировки этого набора элементов состоит в нахождении их
            перестановки <Math>a_i, a_j, \dots, a_k</Math> такой, что{" "}
            <Math>{`a_i <= a_j <= \\dots <= a_k`}</Math>.
          </P>
        </Par>

        <Par>
          <P>
            <Decl>Теорема о минимальной сложности сортировки.</Decl>
            <br />
            Временная сложность любой сортировки, основанной только на
            сравнениях, равна <Math>\Omega(n \log n)</Math>.
          </P>
          <P>
            Если алгоритм совершает <Math>k</Math> сравнений, то можно получить{" "}
            <Math>2^k</Math> различных ответов на них. Количество перестановок{" "}
            <Math>n</Math> элементов массива равно <Math>n!</Math>.
          </P>
          <P>
            Для того, чтобы можно было сюръективно отобразить множество
            комбинаций ответов на множество перестановок, количество сравнений
            не может быть меньше <Math>\log_2 n!</Math>.
          </P>
          <Display>{`\\log_2 n! = \\log_2 \\bbbl( \\sqrt{2 \\pi n} \\cdot \\l( \\frac{n}{e} \\r)^n \\bbbr) = n \\log_2 n + O(n) = \\Omega(n \\log n)`}</Display>
        </Par>
      </Section>
    </>
  )
}
