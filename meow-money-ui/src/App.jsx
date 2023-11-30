import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import NavigationBar from './pages/NavigationBar';
import router from "../src/pages/Routes";

function App() {
  return (
      <div className="App">
        {/* <NavigationBar></NavigationBar> */}
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
  )
}

export default App