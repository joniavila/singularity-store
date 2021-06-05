import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkHole from './components/DarkHole/DarkHole'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <DarkHole />
      <NavBar />
      <ItemListContainer name="ITEM LIST CONTAINER"/>
    </div>
  );
}

export default App;
