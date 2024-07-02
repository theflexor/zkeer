import { createBrowserRouter } from "react-router-dom"
/* =========================================================================
 * ROUTER
 * ========================================================================= */
import { ROUTER_PATHS } from "./router_paths"

/* =========================================================================
 * PAGES
 * ========================================================================= */
import { ProductDetailPage } from "@pages/index"

export const appRouter = () =>
  createBrowserRouter([
    {
      path: ROUTER_PATHS.HOME,
      element: <ProductDetailPage />,
    },
  ])
