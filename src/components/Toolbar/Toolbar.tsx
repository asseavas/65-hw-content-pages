import { NavLink } from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar bg-light-subtle py-4">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <h4 className="text-uppercase m-0">Countries</h4>
        </NavLink>
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/seoul">
              Seoul
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/paris">
              Paris
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/tokyo">
              Tokyo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/new-york">
              New York
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/shanghai">
              Shanghai
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/moscow">
              Moscow
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/dubai">
              Dubai
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages/admin">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
