import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rocket from './components/Rocket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rocket />} />
          <Route path="/mission" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
