export const HooksCounter = () => {
  return (
    <div className="border m-3 p-4 rounded">
      <div className="m-3 text-center">Hooks Counter: 0</div>

      <div className="m-1 d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-danger">Decrement</button>
        <button className="btn btn-secondary">Reset</button>
        <button className="btn btn-success">Increment</button>
      </div>
    </div>
  );
};
