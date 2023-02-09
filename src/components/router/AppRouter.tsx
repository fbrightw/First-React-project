import {privateRoutes, publicRoutes} from "./index";
import {Route, Routes} from "react-router-dom";
import {useTypesSelector} from "../../hooks/useTypesSelector";

export const AppRouter = () => {
    const {isAuth} = useTypesSelector(state => state.auth)

    return (
        isAuth ?
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
