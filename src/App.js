import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Reserve from './components/Reserve';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Confirmation from './components/Confirmation';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/details" element={<Details />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
