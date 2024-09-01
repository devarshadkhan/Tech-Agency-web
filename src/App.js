import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
        {/* <AnimatedCursor innerSize={8}
      outerSize={8}
      color='#5a2cff'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} /> */}
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
