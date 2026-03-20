import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	route("/", "routes/layout.tsx", [
		index("routes/home.tsx"),
		route("/header", "routes/header.tsx"),
		route("/latest-from-kotlin", "routes/latest.tsx"),
		route("/start", "routes/start.tsx"),
		route("/usage", "routes/usage.tsx"),
		route("/why-kotlin", "routes/why-kotlin.tsx")
	])
] satisfies RouteConfig;
