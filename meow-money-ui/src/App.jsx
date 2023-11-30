import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        index: true,
      },
    ]
  },
]);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
  )
}

export default App