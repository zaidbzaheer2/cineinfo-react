import { NotFound } from "../../components"
export const NotFoundPage = () =>{
    document.title= "Not Found"
    return <section className="not-found-page">
        <div className="error-container-page">
            <NotFound/>
        </div>
    </section>
}