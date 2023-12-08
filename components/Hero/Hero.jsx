import { AllRoutes } from "../../Routes/Routes"
import "./Hero.css"
export const Hero = (props) =>{
    const {dark, setDark}= props
    return (
        <section className={"hero-section flex absolute top-[5rem] flex-col justify-center dark:bg-neutral-950 items-center w-full  h-full " + (dark? "black-scroll":"white-scroll")}>
            <div className="hero-container  w-[90%] md:w-[80%]  mt-[3rem] h-screen">
                <AllRoutes/>
            </div>
        </section>
    )
}
