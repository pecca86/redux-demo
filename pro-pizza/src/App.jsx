import Home from "./ui/pages/Home"
import Menu from "./features/menu/Menu"
import { loader as menuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Order, { loader as orderLoader } from "./features/order/Order"
import CreateOrder, { action as createOrderAction} from "./features/order/CreateOrder"
import AppLayout from "./ui/layout/AppLayout"
import Error from "./exceptions/Error"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { action as updatePrioAction } from "./features/order/UpdateOrder"

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: updatePrioAction
        },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction
        },
        {
          path: '/cart',
          element: <Cart />
        },
      ]
    },
  ]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
