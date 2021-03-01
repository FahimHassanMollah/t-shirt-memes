import './App.css';
import Display from './components/Display/Display';
import Setting from './components/Setting/Setting';

function App() {
  return (
    <div className="container">
       <div className="row">
          <div className="col-md-8">
              <Display></Display>
          </div>
          <div className="col-md-4">
              <Setting></Setting>
          </div>
       </div>
    </div>
  );
}

export default App;
