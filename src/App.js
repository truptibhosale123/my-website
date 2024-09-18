import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {TrailRunning , Blogs} from './pages/TrailRunning';
import {Mountaineering, Gallery} from './pages/Mountaineering';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './Home';
import MBlogs from './components/MBlogs';
import Blog1 from './components/Blog1';


import Sidebar from './pages/Sidebar';

function App() {
  return (
<Router>
    <div>
      {/* <Topnavbar /> */}
      <Sidebar />
      <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-website" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mountaineering" element={<Mountaineering />} /> 
      <Route path="/mountaineering/blogs" element={<MBlogs />} /> 
      <Route path="/mountaineering/gallery" element={<Gallery />} /> 
      <Route path="/trailrunning" element={<TrailRunning />} />
      <Route path="/trailrunning/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/1" element={<Blog1 />} />
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
