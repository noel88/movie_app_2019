import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>
}


function App() {
  return (
      <div>
        <h2>Hello!</h2>
        <Food fav ="kimchi" />
        <Food fav ="ramen" />

      </div>

  );
}

export default App;
