import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link to={"/"}><h4 style={{color: 'white'}}>Task List</h4></Link>
    <Link to={"/create-task"}><h4 style={{color: 'yellow'}}>Add Task</h4></Link>
  </nav>
);

export default Navbar;