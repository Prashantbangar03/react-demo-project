import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashboardContainer from '../containers/DashboardContainer';
import ProductList from '../components/ProductListComponent';
import LoginContainer from '../containers/LoginContainer';

const Routes = () =>{
  return(
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <LoginContainer/>
        </Route>
        <Route path="/dashboard" exact= {true}>
          <ProductList/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes