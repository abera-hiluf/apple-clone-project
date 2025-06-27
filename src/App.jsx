// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Mainjs/Body";
import Mac from "./Pages/Mac";
import Iphone from "./Pages/Iphone";
import Footer from "./components/Footer/Footer";
import Four04 from "./components/Four04/Four04";
import Layout from "./components/LayoutPage/Layout";
import SingleAppleProduct from "./Pages/SingleProduct";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:id" element={<SingleAppleProduct />} />

          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
