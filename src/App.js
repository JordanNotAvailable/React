import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Landing from './pages/Landing/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Landing/>}/>
          <Route path= "/register" element={<Register/>}/>
          <Route path= "/signin" element={<Signin/>}/>
          <Route path= "/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
