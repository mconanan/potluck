// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// possibly hashRouter
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
<Router>
<Navbar/>
   <Routes>
     <Route exact path="/" element={<Home/>}/>
   </Routes>
 </Router>
 </div>
 </div>
  );
}

export default App;
