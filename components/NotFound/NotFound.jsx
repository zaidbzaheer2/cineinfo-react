import NotFoundIMG from "../../src/assets/static/NotFound.jpg"
export const NotFound  = () =>{
    return <section className="404-section ">
        <div className="error-container flex flex-col items-center w-full">
            <img src={NotFoundIMG}/>
        </div>
    </section>
}