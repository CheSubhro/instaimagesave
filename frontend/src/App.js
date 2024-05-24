import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/pages/Header/Header';
import Footer from './components/pages/Footer/Footer';
import Reels from './components/pages/Reels';
import Story  from './components/pages/Story';
import Profile from './components/pages/Profile';
import Audio from './components/pages/Audio'




function App() {
    return (
        <>
            <Router>
				<Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/reels" element={<Reels/>} />
                    <Route exact path ="/story" element={<Story/>} />
                    <Route exact path ="/profile" element={<Profile/>} />
                    <Route exact path ="/audio" element={<Audio/>} />
                </Routes>
				<Footer/>
            </Router>
        </>
    );
}

export default App;
