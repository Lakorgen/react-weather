import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/shared/index.css";
import "@/shared/normalize.css";
import { RouterProvider } from "react-router";
import { appRouter } from "./appRouter";
import { Provider } from "react-redux";
import { store } from "./appStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
