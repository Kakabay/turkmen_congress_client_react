import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, News, Error, NewsInner, Vacancies } from "./pages";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
        errorElement: <Error />,
      },
      {
        element: <News />,
        path: "news",
        errorElement: <Error />,
      },
      {
        element: <NewsInner />,
        path: "news/:id",
        errorElement: <Error />,
      },
      {
        element: <Vacancies />,
        path: "vacancies",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
