import React from 'react';
import updatedComponent from './HOC';

const Person8 = ({money, handleIncrease}) => {
  return (
    <div>
     <h2>Person 8 is  offering ${money}</h2>
     <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default updatedComponent(Person8);
