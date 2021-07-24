import {BrowserRouter, Route} from 'react-router-dom';
import APOD from './Components/APOD'
import Home from './Components/Home'
import Search from './Components/Search'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact/>
        <Route component={APOD} path="/APOD"/>
        <Route component={Search} path="/Search"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
