import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount( c => c + 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleDecrement() {
    setCount( c => c - 1);
  }
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold p-2 w-full bg-blue-500">Counter Game</h1>
      <div className="sp-font">{count} </div>
      <div className="">
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
