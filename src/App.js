import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';       /*Import, Here we have imported things*/
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Emotion_recognition from './emotion_recognition';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />                  {/*Render, Here we have rendered the imported things*/}
      <Testimonial />
      <Contact />
      <Footer />
      <Emotion_recognition />
    </div>
  );
}

export default App;
