import './App.css';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { UsersList } from './components/UsersList/UsersList';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <nav className="app__nav">
        <NavLink
          to="/"
          className="nav__link"
          style={({ isActive }) => ({
            color: isActive ? '#000' : '#545e6f',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className="nav__link"
          style={({ isActive }) => ({
            color: isActive ? '#000' : '#545e6f',
          })}
        >
          Users
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/" element={<UsersList />}>
          <Route path=":userLogin" element={<UsersList />} />
        </Route>
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
