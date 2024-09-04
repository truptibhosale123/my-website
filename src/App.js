import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideBar from './SideBar';
import Mountaineering from './Mountaineering';
import TrailRunning from './TrailRunning';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {
  return (
<Router>
    <div className="App">
      <SideBar />

      <div className="content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mountaineering" element={<Mountaineering />} />
        <Route path="/trailrunning" element={<TrailRunning />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
</Router>



    // <div className="App">
    //   <header className="App-header">
    //   <h1>About Me</h1>
    //     <p>Hello! My name is Trupti Bhosale. I am a software developer with 17 years of experience.</p>
    //     <p>I specialize in C#.Net, ASP.Net, .Net Core, React, and SQL Server.</p>
    //     <p>I am also an ultra trail runner.</p>
    //   </header>
    // </div>
  );
}

export default App;
