import "./App.css";
import Navbar from "./global_components/Navbar";
import Footer from "./global_components/Footer";
// import Home from "./features/home/Home";
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar />
      
      <Outlet/>
      
      <Footer />
    </>
  );
}

export default App;
