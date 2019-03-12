import React, { useState } from 'react';

const LatestBlogs = props => {
  const [latestBlogs, setLatestBlogs] = useState([
    { id: 1, blog_title: 'Redux vs React Context' },
    { id: 2, blog_title: 'Hooks? The future of React' }
  ]);
  return (
    <div className="blogs-wrapper">
      <h3>Latest Blogs:</h3>
      <ul className="blogs-list">
        {latestBlogs.map(blog => (
          <li>{blog.blog_title}</li>
        ))}
      </ul>
      <style jsx>
        {`
          .blogs-list {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default LatestBlogs;
