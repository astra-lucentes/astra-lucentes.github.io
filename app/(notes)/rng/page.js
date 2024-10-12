import {Display, Math} from "@/kit/Math"
import {Heading, Section, Par, P} from "@/kit/Typography"

export default function RNG() {
  return (
    <>
      <Section>
        <Heading>Метод инверсии</Heading>
        <Par>
          <P>
            Пусть <Math>F</Math> -- непрерывная функция распределения на{" "}
            <Math>\RR</Math>. Обратная к ней функция
          </P>
          <Display>
            {"F^-1(u) = \\inf_{x \\in \\dom F} \\bl\\{F(x) = u \\br\\}"}
          </Display>
        </Par>

        <Par>
          <P>
            Если <Math>U \sim \uniform</Math>, то <Math>F^-1(U) \sim F</Math>.
            Также, если <Math>X \sim F</Math>, то{" "}
            <Math>F(X) \sim \uniform</Math>.
          </P>
          <P>
            Для генерации <Math>X \sim F</Math> достаточно сгенерировать{" "}
            <Math>U \sim \uniform</Math> и вычислить <Math>F^-1(U)</Math>.
          </P>
        </Par>
      </Section>
    </>
  )
}
