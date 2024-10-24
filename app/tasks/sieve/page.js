import {Heading, Par, P, TaskHeading} from "@/kit/Typography"
import TaskContent from "../TaskContent"
import {Difficulty} from "@/kit/Badges"

const Task = () => (
  <>
     <TaskHeading title="Решето Эратосфена">
      <Difficulty kind="Basic" />
      <Difficulty kind="Easy" />
      <Difficulty kind="Medium" />
      <Difficulty kind="Hard" />
      <Difficulty kind="Nightmare" />
      Связные списки
    </TaskHeading>

    <Par>
      <P>Напишите решето эратосфена</P>
    </Par>
  </>
)

const Solution = () => (
  <>
    <Heading>Здесь написано решение</Heading>
    <Par>
      <P>Решение</P>
    </Par>
  </>
)

export default function Page() {
  return <TaskContent task={<Task />} solution={<Solution />} />
}
