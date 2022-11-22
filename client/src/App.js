import logo from './logo.svg';
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

function App() {
  return (
 <Router>
<Navbar> </Navbar>
   <Routes>
     <Route exact path="/" element={<Home></Home>}/>

     
   </Routes>
 </Router>
  );
}

export default App;
