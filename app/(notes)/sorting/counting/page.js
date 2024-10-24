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


export const metadata = {
  title: "Сортировка подсчетом",
}

export default function CountingSort() {
  return (
    <>
      <Title>Сортировка подсчетом</Title>
      <Section>
        <Par>
          <P>
            Сортировка подсчетом (Counting sort) -- сортировка, позволяющая за
            линейное время сортировать массив, элементы которого принадлежат
            небольшому множеству.
          </P>
        </Par>
        <Par>
          <P></P>
        </Par>

        <Pseudocode>
          {`function counting_sort(list a):
    array counter[k] = [0, ..., 0]

    for each x in a:
        counter[x]++

    list result = []
    
    for each n with index i in counter:
        repeat n:
            result.append(i)
    
    return result`}
        </Pseudocode>
      </Section>
    </>
  )
}
