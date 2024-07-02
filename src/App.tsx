import { RouterProvider } from "react-router-dom"
/* =========================================================================
* ROUTER
* ========================================================================= */
import { appRouter } from "@router/appRouter"

function App() {
  return <RouterProvider router={appRouter()} />
}

export default App
