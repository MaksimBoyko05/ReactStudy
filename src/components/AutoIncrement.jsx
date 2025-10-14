import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

function AutoIncrement() {
  const { click, setClick } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setClick((prev) => prev + 1);
      console.log("tick");
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h2>AutoIncrement</h2>
      <p>{click}</p>
    </>
  );
}
export default AutoIncrement;
