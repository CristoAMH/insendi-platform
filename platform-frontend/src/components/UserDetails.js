import React from 'react';

import LatestBlogs from './LatestBlogs.js';

export default function UserDetails() {
  return (
    <div className="user">
      <div className="user__info">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" />
        <h3>Cristo Medina</h3>
        <h4>3 followers ❤️</h4>
      </div>
      <LatestBlogs />
      <style jsx>
        {`
          .user {
            display: flex;
            flex-direction: column;
            text-align: center;
            border-left: 2px solid black;
            border-right: 2px solid black;
          }

          .user__info {
            padding: 2rem;
          }

          img {
            align-self: center;
          }

          h3,
          h4 {
            margin: 0.5rem;
          }
        `}
      </style>
    </div>
  );
}
