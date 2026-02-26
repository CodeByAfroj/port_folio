// src/Home.jsx
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {


  return (
       <>
       
          <Home/>
          <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
         </>
  );
};

export default App;
