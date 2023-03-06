import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Icon from '../assets/planet.png';

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="logo flex">
        <img src={Icon} alt="Logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="flex">
        <li>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/mission"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/profile"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
