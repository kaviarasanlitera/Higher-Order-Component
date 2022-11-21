import React from 'react';
import updatedComponent from './HOC';

const Person5 = ({money, handleIncrease}) => {
  return (
    <div>
     <h2>Person 5 is  offering ${money}</h2>
     <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default updatedComponent(Person5);
