import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/about' element={<AboutUs/>} />
    </Routes>
  )
}

export default App;
