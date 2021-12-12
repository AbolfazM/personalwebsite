import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sample from './Components/SampleWorks/Sample';
import Services from './Components/Services/Services';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  },[]);
  return (
   <div className="App">
      <Header />
      <Nav />
      <Services />
      <Sample />
   </div>
  );
}

export default App;