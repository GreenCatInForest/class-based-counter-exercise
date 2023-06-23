import { Banner } from "./components/Banner";
import { Counter } from "./components/Counter";
import { HooksCounter } from "./components/HooksCounter";

export const App = () => {
  return (
    <div className="App">
      <Banner
        title="React Counter"
        subTitle="Please use the buttons to interact with your counter"
      />
      <Counter />
      <HooksCounter />
    </div>
  );
};
