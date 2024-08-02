import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routers";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.children) {
          return (
            <Route key={index} path={route.path} element={route.element}>
              {route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
            </Route>
          );
        }
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

export default AppRouter;
