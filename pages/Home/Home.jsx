import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import LogoIMG from "/src/assets/static/logo.png"
export const Home = () =>{
    const navigate = useNavigate()
    const inpRef = useRef()
    const handleSubmit = e =>{
        e.preventDefault()
        const queryParam = inpRef.current.value
        if(queryParam.length < 1) return
        return navigate("/search/?q="+queryParam)
    }
    document.title = "Home"
    return <section className="home-section w-full h-screen">
          <div className="home-container flex flex-col items-center">
                    <img src={LogoIMG} className="w-[16rem] "/>
                    <p className="text-3xl text-blue-700  font-semibold">C i n e I n f o</p>
                    <form className="search-form mt-10" action="" onSubmit={e=>handleSubmit(e)}>
                        <input ref={inpRef} type="search" placeholder="Enter a title..." className="outline-none w-[15rem] md:w-[30rem] h-[3rem] rounded-lg p-2 shadow-sm shadow-stone-400"></input>
                        <button type="submit" className="font-bold bg-blue-600 hover:scale-105 transition-transform duration-75 p-3 rounded-lg text-white ml-2">Go!</button>
                    </form>

                </div>
    </section>
}