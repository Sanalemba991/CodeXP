

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
   
      path:"/",
      element:<Home/>


      }, 
  
  
  
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/Register",
    element:<Register/>,
  },


  



]);
function App() {
  return (
   <div className='app'>
    <div className='container'>
       <RouterProvider router={router}/>
  </div>
   </div>)
}



export default App;