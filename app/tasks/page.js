import {Codeblock} from "@/kit/Code"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"
import {Title} from "@/kit/Elements"
import {Pseudocode} from "@/kit/Code/Codeblocks"

export const metadata = {
  title: "Префиксный список",
}

export default function Heap() {
  return (
    <>
      <Title>Префиксный список</Title>
      <Section>
        <Par>
          <P>
            Префиксный список позволяет быстро находить значение обратимой
            функции на подотрезке данного списка, при условии что этот список не
            изменяется.
          </P>
        </Par>

        <Pseudocode>{`for each v ∈ V
    dist[v] = ∞
    prev[v] = none

dist[s] = 0

h = min_heap(v)
while h != ⌀
    v = h.pop_min()
    for each (u, v) ∈ E
        if dist[v] > dist[u] + len(u, v):
            prev[v] = u
            h.insert(dist[v], v)
`}</Pseudocode>
      </Section>
    </>
  )
}
