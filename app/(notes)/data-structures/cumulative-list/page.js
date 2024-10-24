import {Codeblock} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"
import {Title} from "@/kit/Elements"
import {Pseudocode} from "@/kit/Code/Codeblocks"

export const metadata = {
  title: "Кумулятивный список",
}

export default function Heap() {
  return (
    <>
      <Title>Кумулятивный список</Title>
      <Section>
        <Par>
          <P>
            Кумулятивный список позволяет находить значение обратимой функции на
            отрезке списка за <Math>O(1)</Math>, при условии что этот список не
            изменяется. Строится за <Math>O(n)</Math> времени и памяти.
          </P>
          <P>
            Кумулятивный список, построенный на списке{" "}
            <Math>a_0, a_1, a_2, \dots, a_n</Math> -- список{" "}
            <Math>{`s_0, s_1, s_2, \\dots, s_n, s_{n+1}`}</Math>, где
          </P>
          <Display>{`s_{i+1} = f(s_i, a_i) ~\\text{и}~ s_0 = \\mathbf{1} ~\\weak{(\\text{единичный элемент относительно}\\,f)}`}</Display>
        </Par>

        <Pseudocode>
          {`s[0] = *1*
for i = 0, i < len(a):
    s[i+1] = f(s[i], a[i])`}
        </Pseudocode>

        <Par>
          <P>
            Теперь для нахождения значения функции <Math>f</Math> на отрезке{" "}
            <Math>[l, r]</Math>, то есть нахождения значения выражения{" "}
            <Math>{`f(a_l, a_{l+1}, \\dots, a_{r-1}, a_r) = f(a_l, f(a_{l+1}, \\dots, f(a_{r-1}, a_r) \\dots))`}</Math>
            , надо только вычислить <Math>{`f^-1(s_{r+1}, s_l)`}</Math>.
          </P>
        </Par>

        <Pseudocode>
          {`function segment(l, r):
    return f^-1(s[r+1], s[l])`}
        </Pseudocode>
      </Section>

      <Section>
        <Heading>Префиксные суммы</Heading>
        <Par>
          <P>
            Например, для сложения <Math>f(a, b) = a + b</Math> префиксный
            список строится как <Math>{`s_{i+1} = s_i + a_i`}</Math>, и{" "}
            <Math>s_0 = 0</Math>.
          </P>
          <P>
            Для вычисления суммы всех элементов на отрезке <Math>[l, r]</Math>{" "}
            достаточно подсчитать <Math>{`s_{r+1} - s_l`}</Math>
          </P>
        </Par>

        <Par>
          <Codeblock language="python">
            {`a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
s = [0]
for i in range(len(a)):
    s.append(s[i] + a[i])

def sum_segment(l, r):
    return s[r+1] - s[l]`}
          </Codeblock>
        </Par>
      </Section>
    </>
  )
}
