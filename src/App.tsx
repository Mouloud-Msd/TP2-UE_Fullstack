import { useState } from "react";
import "./App.css";
import Navbar from "./global_components/navbar";
import Footer from "./global_components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
