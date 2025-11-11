import "./App.css";
import Navbar from "./global_components/Navbar";
import Footer from "./global_components/Footer";
import EditEventModal from "./global_components/EditEventModal";
// import Home from "./features/home/Home";
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar />
      
      <Outlet/>
      <EditEventModal />
      <Footer />
    </>
  );
}

export default App;
