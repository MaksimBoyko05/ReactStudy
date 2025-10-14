import { useState, useEffect } from "react";
import AutoIncrement from "./AutoIncrement";
function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        console.log(prev + 1);
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>{count}</p>
      <AutoIncrement/>
    </>
  );
}
export default AutoCounter;
