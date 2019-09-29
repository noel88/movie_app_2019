import React from 'react';
import PropTypes from 'prop-types';

function Food({name , picture, rating}) {
  return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating} / 5.0</h4>
        <img src ={picture} alt={name} />
      </div>
  );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
};

const foodILike = [
    {
        id: 1,
        name:"kimchi",
        image: "",
        rating: 5
    },
    {
        id: 2,
        name:"samgyeopsal",
        image: "",
        rating: 4.9
    },
    {
        id:3,
        name:"bibimbap",
        image: "",
        rating: 4.8
    },
    {
        id:4,
        name:"Doncasu",
        image: "",
        rating: 4.7
    },
    {
        id:5,
        name:"kimbap",
        image: "",
        rating: 4.6
    }

    ];

function renderFood(dish) {
    console.log(dish);
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
      <div>
          {foodILike.map(renderFood)}
      </div>

  );
}

export default App;
