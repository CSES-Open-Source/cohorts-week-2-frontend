import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <h1>Counter App</h1>
        <p id="count">{count}</p>
        <div className="buttons">
          <button id="decrement" onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          <button id="reset" onClick={() => setCount(0)}>
            Reset
          </button>
          <button id="increment" onClick={() => setCount((count) => count + 1)}>
            +
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
