import React from 'react';
import updatedComponent from './HOC';

const Person3 = ({money, handleIncrease}) => {
  return (
    <div>
     <h2>Person 3 is  offering ${money}</h2>
     <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default updatedComponent(Person3);
