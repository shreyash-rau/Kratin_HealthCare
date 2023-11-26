import { BrowserRouter, Route, Routes } from 'react-router-dom';


// importing all scss part
import './App.css';


// imporitn all requirements
// import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainHome from './Pages/MainHome';
import About from './Pages/About/About';
import Contact from './Pages/Contact-Us/Contact';
import Review from './Pages/User-review/Review';


// importing all styling part
import "./Styles/Login.scss";
import "./Styles/Register.scss";
import Footer from './Footer/Footer';


function App() {
  return (
    <>
        <div className="App">

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

              <Route path='/home' element={<MainHome />} />

                {/* main home page content */}
                <Route path='/about' element={<About/>}></Route>
                <Route path='/user' element={<Review/>}></Route>
                <Route path = '/contact' element={<Contact/>}></Route>

          </Routes>
<Footer/>
        </BrowserRouter>

        </div>
  
    </>
  );
}

export default App;
