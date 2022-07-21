import { Route, Routes } from "react-router-dom";
import { ScreenRoutes } from "../config/routes";

export function Main() {
	return (
		<Routes>
			{ScreenRoutes.map((route: any) => {
				return <Route path={route.path} element={route.element} />;
			})}
		</Routes>
	);
}
