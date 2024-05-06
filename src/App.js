import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Reserve from './Reserve';
import { Routes, Route } from 'react-router-dom';
import Details from './Details';
import Confirmation from './Confirmation';


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
