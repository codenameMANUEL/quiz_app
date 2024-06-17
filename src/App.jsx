import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default App;
