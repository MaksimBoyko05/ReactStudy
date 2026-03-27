import ThemeButton from './ThemeButton';
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

export default function Navbar() {
const {theme} = useContext(ThemeContext)
  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid gray' }}>
      <h2 style={{ color: theme === 'light' ? '#000' : '#fff' }}>Моє меню</h2>
      <ThemeButton/>
    </nav>
  );
}