import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkHole from './components/DarkHole/DarkHole'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <DarkHole />
      <BrowserRouter>
      <NavBar />
      <Route path='/itemListContainer'>
      <ItemListContainer name="ITEM LIST CONTAINER"/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
