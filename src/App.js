import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import {Routes, Route, Link} from 'react-router-dom'
import { Page2 } from './components/Pages/Page2';
import { Page3 } from './components/Pages/Page3';
import { About } from './components/Pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
        <Routes>
          <Route path = "/Home" element={<Body />}/>
          <Route path = "/Page2" element={<Page2 />}/>
          <Route path = "/Page3" element={<Page3 />}/>
          <Route path = "/About" element={<About />}/>
        </Routes>    
      <Footer/>     
    </div>
  );
}

export default App;

