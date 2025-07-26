import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";

function App() {
  function AppLayout()  
  {
    return ( <div>
        <Navbar/>
        <Outlet/>
    </div>)
  }
let a=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    },
])


    return (
        <RouterProvider router={a} />
    );
}

export default App;