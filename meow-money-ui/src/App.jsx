import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Homepage from '../src/pages/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
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