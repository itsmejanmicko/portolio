import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

// Lazy-loaded components
const Landingpage = lazy(() => import("../components/pages/Landingpage"));
const Projects = lazy(() => import("../components/pages/Projects"));
const Skills = lazy(() => import("../components/pages/Skills"));

const links = [
  { path: "/", element: <Landingpage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/skills", element: <Skills /> },
];

export default function UserRouter() {
  const userRouter = useRoutes(
    links.map((link) => ({
      path: link.path,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout>{link.element}</MainLayout>
        </Suspense>
      ),
    }))
  );

  return userRouter;
}
