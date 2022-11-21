import React, { useState } from "react";

function updatedComponent(OriginalComponent) {
  const NewComponent = () => {
    const [money, setMoney] = useState(10);

    const handleIncrease = () => {
      setMoney(money + 200);
    };

    return <OriginalComponent money={money} handleIncrease={handleIncrease} />;
  };

  return NewComponent;
}

export default updatedComponent;
