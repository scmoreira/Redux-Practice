import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from '../store'

import Header from './layout/Header';
import Products from './Products';
import NewProduct from './NewProduct';
import EditProduct from './EditProduct'

function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <Header />

        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products/new' component={NewProduct} />
            <Route exact path='/products/edit/:id' component={EditProduct} />
          </Switch>
        </div>
        
      </Provider>
    </Router>
  );
}

export default App;
