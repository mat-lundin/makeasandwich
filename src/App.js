import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components and pages
import Navbar from './components/navbar';
import Home from './pages/home';
import Saved from './pages/saved';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/saved' element={<Saved />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
