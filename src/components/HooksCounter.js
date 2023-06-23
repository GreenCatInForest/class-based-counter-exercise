import { useState } from "react";

export const HooksCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border border-2 border-secondary-subtle m-3 p-4 rounded">
      <div className="m-3 text-center">Hooks Counter: {count}</div>

      <div className="m-1 d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-danger" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};
