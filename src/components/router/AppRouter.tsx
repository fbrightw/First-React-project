import {privateRoutes, publicRoutes} from "./index";
import {Route, Routes} from "react-router-dom";

export const AppRouter = () => {
    let auth = false;
    return (
        auth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        // exact={route.exact}
                        element={route.element}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        // exact={route.exact}
                        element={route.element}
                    />
                )}
            </Routes>
    )
}
