import { Contact } from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import { Reservations } from "../components/reservations/Reservations";

export const ScreenRoutes = [
	{
		path: "/",
		element: <Home timestamp={new Date().toISOString()} />,
		name: "Home",
	},
	{
		path: "/reservations",
		element: <Reservations />,
		name: "Reservations",
	},
	{
		path: "/contact",
		element: <Contact />,
		name: "Contact Us",
	},
];
