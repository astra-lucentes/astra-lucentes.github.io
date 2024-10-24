import {Title} from "@/kit/Elements"
import Link from "@/kit/Elements/Link"
import {Article} from "@/kit/Layout"
import {BulletList, Item} from "@/kit/Lists"
import {Subheading, P} from "@/kit/Typography"

export default function Home() {
  return (
    <>
      <Article>
        <Title>Временное решение</Title>
        <P>Я решил пока сделать тупо список страниц</P>

        <Subheading>Сортировки</Subheading>
        <BulletList>
          <Item>
            <Link colorless to="/sorting/bubble">Сортировка пузырьком</Link>
          </Item>
          <Item>
            <Link colorless to="/sorting/merge">Сортировка слиянием</Link>
          </Item>
        </BulletList>

        <Subheading>Массивы</Subheading>
        <BulletList>
          <Item>
            <Link colorless to="/data-structures/array">Массив</Link>
          </Item>
        </BulletList>
      </Article>
    </>
  )
}
