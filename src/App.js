import { useEffect } from 'react';
import Aos from 'aos';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Sample from './Components/SampleWorks/Sample';
import Services from './Components/Services/Services';

const App = () => {

  useEffect(() => {
    <script>
      AOS.init();
    </script>
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