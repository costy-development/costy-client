import { Routes as ReactRouter, Route } from "react-router-dom";
import routes from "@/config/routes";

const Routes: React.FC = () => {
  return (
    <ReactRouter>
      {routes.map((route) => (
        <Route key={route.title} path={route.path} element={route.element}>
          {route.children.length > 0 ? (
            route.children.map((childRoute) => (
              <Route
                key={childRoute.title}
                path={childRoute.path}
                element={childRoute.element}
              ></Route>
            ))
          ) : (
            <></>
          )}
        </Route>
      ))}
    </ReactRouter>
  );
};

export default Routes;
