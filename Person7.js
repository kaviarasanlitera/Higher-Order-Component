import React from 'react';
import updatedComponent from './HOC';

const Person7 = ({money, handleIncrease}) => {
  return (
    <div>
     <h2>Person 7 is  offering ${money}</h2>
     <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default updatedComponent(Person7);
