import { useState, useCallback, useRef, useEffect } from "react"
import { DateBuilderHelper } from "../helpers/date_builder"
export const Card = ({cdata})=>{
    const {title, vote_average:rating, release_date:release, poster_path:thumb} = cdata
    const refA = useRef(null)  
    const refB = useRef(null)  
    const handleHover = val =>{
        refA.current.style.opacity = val? "0":"100"
        refB.current.style.opacity = val? "100":"0"
    }
    useEffect(()=>{
        handleHover(false)
    },[])
    if(!thumb){

    }
    return (
        <>
        <div onMouseOver={()=>handleHover(true)} onMouseOut={()=>handleHover(false)} className="m-card hover:cursor-pointer  w-[15rem] overflow-hidden relative h-[20rem] bg-stone-100 hover:shadow-md hover:shadow-stone-600 rounded-lg mx-5 my-3">
            <img className="w-[16rem] z-10 absolute h-full rounded-lg" src={thumb?"https://image.tmdb.org/t/p/w500"+thumb:"../../static/default_poster.jpg"}alt={"Poster"}/>
            <span ref={refA}  className="font-semibold transition-all ease-in duration-200 text-md absolute rounded-b-lg bottom-0 pl-2 pt-1 h-8 z-20 text-white w-full truncate bg-black bg-opacity-70">{title}</span>
            <div  ref={refB} className="detail-sheet transition-all ease-in duration-200 absolute leading-[3rem] pt-10 text-white text-center top-0 w-[16rem] h-full rounded-t-lg bg-black bg-opacity-70 z-30 ">
                <p className="text-xl max-w-[80%]  m-auto">{title}</p><br/>
                <span>Rating: ★ {rating}</span><br/>
                <span>Release: {DateBuilderHelper(release)}</span><br/>
                
            </div>
        </div>
        </>
    )
}
