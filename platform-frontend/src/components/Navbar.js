import React from 'react';

const Navbar = props => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">User</a>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        li {
          padding-right: 1rem;
        }

        a {
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
