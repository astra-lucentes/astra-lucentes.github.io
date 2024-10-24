import {Tabs, Tab} from "@/kit/Tabs";
import {OpenedBookIcon, TaskIcon, TestTubeIcon} from "@/kit/Icons"


export default ({task, tests, solution}) => (
  <div className="task">
    <Tabs>
      {task && <Tab
        title={
          <>
            <TaskIcon size={1.25} color="var(--blue)" />
            Задание
          </>
        }
      >
        {task}
      </Tab>}
      {tests && <Tab title={
        <>
          <TestTubeIcon size={1.25} color="var(--green)" />
          Тесты
        </>
      }
      >
        {tests}
      </Tab>}
      {solution && <Tab title={
        <>
          <OpenedBookIcon size={1.25} color="var(--yellow)" />
          Решение
        </>
      }
      >
        {solution}
      </Tab>}
    </Tabs>
  </div>
)