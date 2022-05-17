import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PicturePart from './components/PicturePart';
import ContactCard from './components/contactCard';
function App() {
  return (
    <div className="App">
      <Header />
      <PicturePart />
      <div className="contact-card">
        <ContactCard name="Bolmer" type="minion" text="affter you play a battlecry repeat the last battlecry that play" />
        <ContactCard name="brann" type="minion" text="all battlecry play twice" />
        <ContactCard name="volcano burst" type="spell" text="deal 15 damages split among all minion" />
        <ContactCard name="chill wind" type="frost spell" text="freeze a minion and draw a card " />
      </div>
    </div>
  );
}

export default App;
