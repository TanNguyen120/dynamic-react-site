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
      <ContactCard />
    </div>
  );
}

export default App;
