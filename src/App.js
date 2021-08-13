import {BrowserRouter, Route} from 'react-router-dom';
import APOD from './Components/APOD'
import Home from './Components/Home'
import Search from './Components/Search'
import EPIC from './Components/EPIC'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Route component={Home} path="/" exact/>
        <Route component={APOD} path="/APOD"/>
        <Route component={Search} path="/Search"/>
        <Route component={EPIC} path="/EPIC"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
