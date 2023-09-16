import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Wedding from "./pages/Wedding/Wedding";
import Celebration from "./pages/Celebration/Celebration";
import Footer from "./components/Footer/Footer";
import Feavours from "./pages/Feavours/Feavours";
import Menu from "./pages/Menu/Menu";
import Faqs from "./pages/Faqs/Faqs";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/wedding' element={<Wedding/>}/>
            <Route path='/feavours' element={<Feavours/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/faqs' element={<Faqs/>}/>
            <Route path='/celebration' element={<Celebration/>}/>
        </Routes>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
