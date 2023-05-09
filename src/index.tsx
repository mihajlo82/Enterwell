import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Quiz from "./components/Quiz";
import QuizPreview from "./components/quizPreview/QuizPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Quiz />,
  },
  {
    path: "/preview/:id",
    element: <QuizPreview />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
