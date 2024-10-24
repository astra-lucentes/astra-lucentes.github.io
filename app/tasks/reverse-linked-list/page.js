import {Heading, Par, P, TaskHeading} from "@/kit/Typography"
import TaskContent from "../TaskContent"
import {Difficulty} from "@/kit/Badges"
import {Codeblock} from "@/kit/Code"

const Task = () => (
  <>
    <TaskHeading title="Развернуть односвязный список">
      <Difficulty kind="Basic" />
      Связные списки
    </TaskHeading>

    <Par>
      <P>Дан односвязный список (первый узел односвязного списка). Разверните этот список, изменяя связи его узлов.</P>
    </Par>
  </>
)

const Solution = () => (
  <>
    <Heading>Здесь написано решение</Heading>
    <Par>
      <P>Решение</P>
    </Par>
    <Codeblock language="c">
      {`typedef struct node
{
  int value;
  struct node* next;
} node;

node *reverse(node *head)
{

  node *curr = head, *prev = NULL, *next;

  while (curr != NULL)
  {
    next = curr->next;
    curr->next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}`}
    </Codeblock>
  </>
)

export default function Page() {
  return <TaskContent task={<Task />} solution={<Solution />} />
}
