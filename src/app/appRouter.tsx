import { createBrowserRouter } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { HistoryPage } from "@/pages/history";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
    ],
  },
]);
