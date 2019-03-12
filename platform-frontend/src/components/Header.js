import React from 'react';
import Navbar from './Navbar';

const Header = props => {
  return (
    <div className="header">
      <div className="header__bar">
        <h1>Insendi</h1>
        <Navbar />
      </div>
      <style jsx>
        {`
          .header {
            display: grid;
            background-color: #000;
            grid-template-columns: 200px 1fr 200px;
            color: #fff;
          }
          .header__bar {
            grid-column: 2/ 3;
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
