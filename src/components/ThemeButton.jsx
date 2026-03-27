import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

export default function ThemeButton() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
      Поточна тема: {theme}. Змінити
    </button>
  );
}