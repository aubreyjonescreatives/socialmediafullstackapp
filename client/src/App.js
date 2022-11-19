import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Footer'
import Footer from './components/Navbar'
import HomePage from './pages/HomePage'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'
import Single from './pages/Single'
import Write from './pages/Write'



const Layout = () => {
  return (
  <>
  <Navbar /> 
  <Outlet />
  <Footer />
  
  </>
  
  
  );
  
  
  };



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
      path: "/createaccount",
      element: <CreateAccount/>,
      }, 
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/userdashboard",
        element: <UserDashboard/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
    ]
  },
 
]);







function App() {
  return (
   <div>
    <RouterProvider router={router}/>
    </div>
  );
}



export default App;
