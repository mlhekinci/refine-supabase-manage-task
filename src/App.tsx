import { Refine, Resource } from "@pankod/refine";
import "styles/antd.less";
import { dataProvider } from "@pankod/refine-supabase";
import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import { UserList } from "./pages/user";
import { TaskList, TaskShow, TaskCreate, EditTask } from "./pages/task";
import { Dashboard } from './pages/dashboard'

function App() {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      DashboardPage={Dashboard}
      >
      <Resource name="users" list={UserList} />

      <Resource
        name="tasks"
        list={TaskList}
        edit={EditTask}
        create={TaskCreate}
        show={TaskShow}
      />

    </Refine>
  );
}

export default App;
