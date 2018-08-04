import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <div className="centrar">
              <ItemModal/>
            </div>
            <ShoppingList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
