import './App.css';
import Atributo from './components/Atributo';
import Elegirnos from './components/Elegirnos';
import FooterSec from './components/FooterSec';
import HeaderSec from './components/HeaderSec';
import Jackpot from './components/Jackpot';
import Mass from './components/Mass';
import Nuestra from './components/Nuestra';

function App() {
  return (
    <>
      <HeaderSec />
      <Nuestra/>
      <Atributo/>
      <Jackpot/>
      <Elegirnos/>
      <Mass/>
      {/* <FooterSec /> */}
    </>
  );
}

export default App;
