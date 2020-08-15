import React from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import ProductList from './components/ProductListComponent';

function App() {
  return (
    <div className='App'>
      {/* <LoginContainer></LoginContainer> */}
      <ProductList></ProductList>
    </div>
    );
}

export default App;
