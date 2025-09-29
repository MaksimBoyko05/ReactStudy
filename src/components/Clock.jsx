import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  useEffect(() => {
    const time = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);
  const formattedTime = time.toLocaleTimeString(undefined, options);
  return (
    <>
      <p>{formattedTime}</p>
    </>
  );
}
export default Clock;
