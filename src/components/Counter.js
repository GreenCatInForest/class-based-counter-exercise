import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="border m-3 p-4 rounded">
        <div className="m-3 text-center">Counter: {this.state.count}</div>
        <div className="m-1 d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-secondary" onClick={this.handleReset}>
            Reset
          </button>
          <button className="btn btn-success" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}
