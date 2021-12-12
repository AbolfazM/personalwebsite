import { useEffect } from 'react';
import AOS from 'aos';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sample from './Components/SampleWorks/Sample';
import Services from './Components/Services/Services';

const App = () => {

  useEffect(() => {
      AOS.init();
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