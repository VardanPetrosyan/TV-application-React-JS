import { lazy, Suspense } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import Loader from '../components/ui/Loader'
import { useMemo } from "react"

const Home = lazy(() => import('./Home'))
const NotFound = lazy(() => import('./NotFound'))

const isAuth = true

const pageWithoutAuth = () => {
	const pages = new Map()
	pages.set("", <Home />)
	pages.set("/home", <Navigate to="" replace />)
	pages.set("*", <NotFound />)
	return pages
}
const pageWithAuth = () => {
	const pages = pageWithoutAuth()
    // here are the pages where you need to register
	return pages
}
const createRoutes = isAuth => {
	const pages = isAuth ? pageWithAuth() : pageWithoutAuth();
	return [...pages].reduce((acc, [path, component]) => {
		acc.push({ path, component })
		return acc
	}, [])
}


export default function AppRoutes() {
	const routes = useMemo(() => createRoutes(isAuth), [isAuth])
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{
					routes.map(({ path, component }) => {
						return (
							<Route key={path} path={path} element={component} />
						)
					})
				}
			</Routes>
		</Suspense>
	)
};