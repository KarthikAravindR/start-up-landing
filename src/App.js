import Startup from './Startup/pages/Startup'
import Toolbar from './shared/Toolbar/Toolbar'
import './App.css'

const App = (props) => {

  return (
    <div className="App">
      <Toolbar />
      <Startup />
    </div>
  );
}


export default App;
