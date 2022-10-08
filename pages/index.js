import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" aboutLink="/about" />
      <br></br>
      <div className="container">
        <TextForm heading="Enter the text here" />
      </div>

    </>
  );
}

export default App;
