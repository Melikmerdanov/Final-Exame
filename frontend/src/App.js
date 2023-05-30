import './App.css';
import {BrowserRouter, Routes, Route} from 
"react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Sign from "./pages/Sign/Sign.jsx"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign' element={<Sign/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
