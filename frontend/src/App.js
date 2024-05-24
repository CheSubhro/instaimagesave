import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/pages/Header/Header';
import Footer from './components/pages/Footer/Footer';
import Reels from './components/pages/Reels';
import Story  from './components/pages/Story';




function App() {
    return (
        <>
            <Router>
				<Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/reels" element={<Reels/>} />
                    <Route exact path ="/story" element={<Story/>} />
                </Routes>
				<Footer/>
            </Router>
        </>
    );
}

export default App;
