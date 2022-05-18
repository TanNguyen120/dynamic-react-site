import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PicturePart from './components/PicturePart';
import ContactCard from './components/contactCard';
function App() {
  const isGood = true;
  return (
    <div className="App">
      <Header />
      {/* <PicturePart /> */}
      <div className="contact-card">
        <ContactCard
          name="Bolmer"
          type="minion"
          text="affter you play a battlecry repeat the last battlecry that play"
          mana-cost={2}
          img='./salamander.jpg'
        />
        <ContactCard
          name="brann"
          type="minion"
          text="all battlecry play twice"
          mana-cost={3}
          img='./salamander.jpg'
        />
      </div>
    </div>
  );
}

export default App;
