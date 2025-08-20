import React from 'react';
import Navbar from './Components/Navbar/navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import About from './Components/About/about.jsx';
import Services from './Components/Services/services.jsx';
import MyWork from './Components/MyWork/mywork.jsx';
import Contact from './Components/Contact/contact.jsx';
import Footer from "./Components/Footer/footer.jsx"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;