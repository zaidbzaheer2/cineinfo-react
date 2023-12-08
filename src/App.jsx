import { Header } from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero";
import { useState, useEffect } from "react";
const THEME_KEY = "THEME_DARK"
const App = () =>{
  const [dark, setDark] = useState(()=>{
    const theme_name = localStorage.getItem(THEME_KEY);
    
    return theme_name==='true'
  })
  useEffect(()=>{
    localStorage.setItem(THEME_KEY, dark)
    const htmlEl = document.querySelector('html')
    htmlEl.style.backgroundColor = dark? "black":"white"
  }, [dark, setDark])
  return (
    <main className={(dark? "dark text-white":"")}>
      
      <Header dark={dark} setDark = {setDark}/>
      <Hero dark={dark} setDark={setDark}/>
    </main>
  )
}
export default App;