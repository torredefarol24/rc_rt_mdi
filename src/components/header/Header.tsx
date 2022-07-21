import { Link } from "react-router-dom";
import { ScreenRoutes } from "../../config/routes";

export function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{ScreenRoutes.map((route: any) => {
							return (
								<li className="nav-item">
									<Link className="nav-link" to={route.path}>
										{route.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}
