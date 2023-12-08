import "./header.css"
import { DropDown } from "../Dropdown/dropdown"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export const Header = (props) =>{
    const [toggle, setToggle] = useState(true)
    const urlList = ["","trending/","top-rated/","new-releases/"]
    const btnClass = `nav-btn transition-all ease-in duration-200 border-2 ${toggle? "text-blue-600 border-blue-600":"text-white bg-blue-600" } md:hidden  h-[30px] w-[30px] rounded-lg `
    const {dark, setDark} = props
    const toggleTheme = ()=>{
        setDark(d=>!d)
    }
    return (
        <section className="header-section w-full fixed">
            <header className="header w-full h-[5rem] border-2 bg-white border-none dark:border-black dark:bg-black faded-border flex flex-row justify-between px-2 items-center">
                <Link to={""}><div className="web-logo  w-42 h-[4rem] flex flex-row items-center mt-2">
                    <img className="inline-block" src="../../static/logo.png"/>
                    <span className="text-md sm:text-xl heading">CineInfo</span>
                </div></Link>
                <button onClick={e=>{setToggle(t=>!t)}} className={btnClass}>☰</button>
                <ul className="nav-list w-[35rem] hidden md:inline">
                {["Home", "Trending", "Top Rated", "New Releases"].map((el,i)=> <NavLink key={i} to={urlList[i]}><li className="inline-block  mx-4 px-2 m-auto border-b-2 border-white transition-colors ease-in hover:cursor-pointer hover:text-stone-600 dark:hover:text-stone-300">{el}</li></NavLink>)}
     
                <button onClick={()=>toggleTheme()} className="inline-block w-[30px] h-[30px] ml-[1rem] hover:invert transition-all duration-100 bg-white border-black border-2 rounded-lg  "><img src="../../static/dark.png" className="w-[15px] mx-auto"/></button>
                </ul>   
            </header>
            <DropDown toggle={toggle} setToggle = {setToggle} toggleTheme={toggleTheme} dark={dark}/>
        </section>
    )
}
