import "./DropDown.css"
import {Link, NavLink} from "react-router-dom"
import {useState, useEffect} from "react"
export const DropDown = ({toggle, setToggle,toggleTheme, dark}) =>{
    const urlList = ["","trending","top-rated","new-releases"]
    return <>
    <div className="dropdown-list">
        <ul style={{"left":`${toggle?"-15rem":"0"}`}}className="drop-list absolute bg-white dark:bg-black dark:text-white w-[15rem] border-2 dark:border-none h-screen leading-[4rem] transition-all ease-in duration-600">
            {["Home", "Trending", "Top Rated", "New Releases"].map((el,i)=> <NavLink key={i} to={urlList[i]}><li onClick={()=> setToggle(pos=>!pos)}  className="w-[80%] mt-1 m-auto px-4 rounded-lg hover:cursor-pointer hover:bg-stone-200 dark:hover:bg-stone-900">{el}</li></NavLink>)}
            <li onClick={()=>{toggleTheme(),setToggle(pos=>!pos)}} className="w-[80%] mt-1 m-auto px-4 rounded-lg hover:cursor-pointer hover:bg-stone-200 dark:hover:bg-stone-900">Switch to {dark?"Light":"Dark"}</li>
        </ul>
    </div>
    </>
}
