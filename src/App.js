import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkHole from './components/DarkHole/DarkHole'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './components/provider/CartProvider';

function App() {
  return (
    <div className="App">
      <DarkHole />
      <BrowserRouter>
      <CartProvider>

      <NavBar />
      <Switch>
      <Route path='/cart'>
        <Cart/>
      </Route>  

      <Route path="/categories/:id">
      <ItemListContainer />
      </Route>

      <Route path='/item/:id'>
      <ItemDetailContainer/>
      </Route>

      <Route path='/'>
      <ItemListContainer/>
      </Route>

      </Switch>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
