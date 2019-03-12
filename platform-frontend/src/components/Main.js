import React from 'react';

import UserDetails from './UserDetails';

const Main = props => {
  return (
    <div className="main">
      <div className="main__content">
        <h1>Contenido Principal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque
          arcu, congue in molestie sit amet, ultrices vitae justo. Praesent at
          lectus a augue vehicula venenatis. Donec ornare nisi odio, at
          pellentesque lectus consequat scelerisque. Cras porta sem nec lectus
          pellentesque, vel fermentum tortor facilisis. Nulla facilisi. Donec
          interdum sagittis justo nec rhoncus. Nullam sed vestibulum ante.
          Integer convallis pretium varius. Maecenas non arcu massa. Vivamus
          viverra quam non rutrum venenatis.
        </p>
        <p>
          In nec eleifend orci, nec fringilla elit. Fusce accumsan eu augue
          pharetra varius. Pellentesque sit amet magna lorem. Nulla aliquam
          metus non placerat auctor. Pellentesque id elit quam. Pellentesque
          augue sapien, elementum vel metus non, imperdiet porttitor tortor.
          Morbi ac elit tempor, auctor nibh vitae, facilisis nibh. Donec eu
          vestibulum mi. Mauris pharetra eget mi et tincidunt. Pellentesque
          luctus sapien ut enim tristique commodo.
        </p>
        <p>
          Etiam consectetur scelerisque pellentesque. Quisque id metus non risus
          fringilla porta non id turpis. Morbi quis orci ac odio egestas
          molestie quis nec tellus. Donec feugiat imperdiet nisi. Etiam nec
          fringilla ante, sed eleifend nulla. Nulla lacus nunc, suscipit sed
          felis facilisis, placerat imperdiet lorem. Suspendisse non porttitor
          risus.
        </p>
      </div>
      <UserDetails />

      <style jsx>{`
        .main {
          display: grid;
          grid-template-columns: 200px 3fr 1fr 200px;
        }

        .main__content {
          grid-column: 2/3;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Main;
