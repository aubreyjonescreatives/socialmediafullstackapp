import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Home!</div>,
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
