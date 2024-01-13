import "./App.css";
import News from "./containers/news/news";
import PublicLayout from "./layout/publicLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <News />,
        },
      ],
    },
    {
      path: "*",
      element: <h2>Error 404</h2>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
