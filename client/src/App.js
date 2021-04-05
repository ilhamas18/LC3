import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTaskForm from './pages/addTaskForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/create-task"><AddTaskForm/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
