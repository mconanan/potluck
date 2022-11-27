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
import Footer from './components/Footer';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import Potluck from './pages/Potluck';


function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
 <Router>
<Navbar> </Navbar>
<Footer></Footer>
   <Routes>
     <Route exact path="/" element={<Home></Home>}/>
     <Route exact path="/login" element={<UserLogin></UserLogin>}/>
     <Route exact path="/dashboard" element={<Dashboard></Dashboard>}/>
     <Route exact path="/potluck" element={<Potluck></Potluck>}/>
     </Routes>
 </Router>
 </div>
 </div>
  );
}

export default App;
