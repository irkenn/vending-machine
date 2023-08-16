
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';
import Soda from './Soda';
import Sardines from './Sardines';
import Chips from './Chips';
import Home from './Home';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sardines" element={<Sardines />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
