import { useState } from "react";
import  "./App.scss";
import { Main } from "./main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className = 'main'>
      <Main />
    </div>
  );
}

export default App;
