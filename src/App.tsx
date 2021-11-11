import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import "styles/antd.less";
import { dataProvider } from "@pankod/refine-supabase";
import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import { UserList } from "./pages/user";
import { TaskList, TaskShow, TaskCreate, EditTask } from "./pages/task";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

function App() {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      DashboardPage={Dashboard}
      LoginPage={Login}
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            exact: true,
            component: Signup,
            path: "/signup",
          },
        ] as typeof routerProvider.routes,
      }}
      resources={[
        {
          name: "users",
          list: UserList,
        },
        {
          name: "tasks",
          list: TaskList,
          edit: EditTask,
          create: TaskCreate,
          show: TaskShow,
        },
      ]}
    />
  );
}

export default App;
