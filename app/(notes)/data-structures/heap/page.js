import {Codeblock, Pseudocode} from "@/kit/Code"
import Image from "@/kit/Image"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"

import heapExampleImage from "./heap-example.svg"
import {Title} from "@/kit/Elements"

export const metadata = {
  title: "Двоичная куча",
}

export default function Heap() {
  return (
    <>
      <Title>Двоичная куча</Title>
      <Section>
        <Par>
          <P>
            Двоичная куча или пирамида -- полное двоичное дерево, в котором значение
            любой вершины не меньше (или не больше), чем значения её потомков.
          </P>
        </Par>

        <Image image={heapExampleImage}></Image>

        <Pseudocode>
          {`type binary_heap:
              `}
        </Pseudocode>
      </Section>
    </>
  )
}
