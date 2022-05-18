import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PicturePart from './components/PicturePart';
import ContactCard from './components/contactCard';
import data from './dummyData'
function App() {
  const prob = data.map(item => {
    return <ContactCard data={item} />
  });
  return (
    <div className="App">
      <Header />
      {/* <PicturePart /> */}
      <div className="contact-card">
        {prob}
      </div>
    </div>
  );
}

export default App;
