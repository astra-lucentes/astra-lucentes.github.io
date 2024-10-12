import {Codeblock} from "@/kit/Code"
import {Title} from "@/kit/Elements"
import {BulletList, EnumList, Item} from "@/kit/Lists"
import {Display, Math} from "@/kit/Math"
import {Heading, P, Par, Section, Subheading, Weak} from "@/kit/Typography"

export const metadata = {
  title: "Интерполяция",
}

export default function Interpolation() {
  return (
    <>
      <Title>Интерполяция</Title>
      <Par>
        <P>
          <b>Интерполяция</b> -- нахождение функции по заданным значениям в
          некоторых точках (или функции, которая в заданных точках близка к
          заданным значениям).
        </P>
        <P>
          Набор заданных точек называется <b>узлами интерполяции</b>.
        </P>
      </Par>

      <Section>
        <Heading>Интерполяция точным многочленом</Heading>

        <Subheading>Интерполяционный многочлен Лагранжа</Subheading>
        <Par>
          <P>
            Многочлен степени <Math>n</Math>, проходящий через точки{" "}
            <Math>
              (x_0, y_0),\, (x_1, y_1),\, (x_2, y_2),\,\dots, (x_n, y_n)
            </Math>
          </P>
          <Display>{`f(x) = \\sum_{i=0}^n y_i \\cdot \\prod_{\\substack{j=0\\\\i!=j}}^n \\frac{x-x_j}{x_i-x_j}`}</Display>
        </Par>
        <Par>
          <P>
            В точке <Math>x_i</Math> значение многочлена <Math>f(x_i)</Math>{" "}
            действительно равно <Math>y_i</Math>, ведь для <Math>i</Math>-го
            слагаемого внутреннее произведение равно <Math>1</Math>, а для
            остальных <Math>0</Math>.
          </P>
          <P>
            Предположим, что есть два подходящих многочлена <Math>A(x)</Math> и{" "}
            <Math>B(x)</Math>. Тогда в точках <Math>x_0, x_1, \dots x_n</Math>{" "}
            многочлен <Math>A(x) - B(x)</Math> равен <Math>0</Math>, то есть у
            него <Math>n+1</Math> корней. <br />
            Значит <Math>\deg (A+B) = n+1</Math>, но{" "}
            <Math>\deg A = \deg B = n</Math>. Противоречие.
          </P>
        </Par>
        <Codeblock language="python">{`def interpolation_lagrange(points: list[tuple[float, float]], z: float) -> float:
    n = len(points)
    x, y = zip(*points)

    s = 0
    for i in range(n):
        p = 1
        for j in range(n):
            if i == j:
                continue
            p *= (z - x[j]) / (x[i] - x[j])
        s += y[i] * p

    return s`}</Codeblock>

        <Subheading>Канонический многочлен</Subheading>
        <Par>
          <P>
            Когда необходимо многократно вычислять значение многочлена,
            предпочтительнее заранее вычислить все коэффициенты этого многочлена
          </P>
          <P>
            Коэффициенты многочлена{" "}
            <Math>a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \dots + a_n x^n</Math>,
            проходящего через точки{" "}
            <Math>
              (x_0, y_0),\, (x_1, y_1),\, (x_2, y_2),\,\dots, (x_n, y_n)
            </Math>{" "}
            вычисляются по формуле
          </P>
          <Display>
            {`\\pmatrix{a_0 \\\\ a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n} == 
              \\pmatrix{1 & x_0 & x_0^2 & \\cdots & x_0^n\\\\
                        1 & x_1 & x_1^2 & \\cdots & x_1^n \\\\
                        1 & x_2 & x_2^2 & \\cdots & x_2^n \\\\
                        \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\
                        1 & x_n & x_n^2 & \\cdots & x_n^n} ^-1 \\cdot 
              \\pmatrix{y_0 \\\\ y_1 \\\\ y_2 \\\\ \\vdots \\\\ y_n}`}
          </Display>
        </Par>
      </Section>
    </>
  )
}
