import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
function App() {
  return (
    <RouterProvider router={appRouter}>
      <div className="App">
      </div>
    </RouterProvider>
  );
}

export default App;
