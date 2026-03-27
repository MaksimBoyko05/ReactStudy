import {useContext, useState} from 'react';
import Navbar from './components/Navbar';
import {ThemeContext, ThemeProvider} from "./context/ThemeContext";
import Counter from "./components/Counter";

export default function App() {
const {theme} = useContext(ThemeContext)

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', height: '100vh' }}>
      <Navbar />
      <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>Головна сторінка</h1>
      <Counter/>
    </div>
  );
}