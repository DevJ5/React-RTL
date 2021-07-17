import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import OrderEntry from './components/entry/OrderEntry';
import OrderSummary from './components/summary/OrderSummary';

function App() {
  return (
    <div className="main">
      <div className="row">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={OrderEntry}></Route>
            <Route path="/summary" component={OrderSummary}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
