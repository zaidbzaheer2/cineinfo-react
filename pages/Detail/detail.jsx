import { DateBuilderHelper } from "../../components/helpers/date_builder"
import { CurrencyFormatter } from "../../components/helpers/currency_formatter"
import { useParams, useNavigate } from "react-router-dom"
import { Card, NotFound } from "../../components"
import { useFetch } from "../../Hooks/useFetch"
import { PulseLoader } from "react-spinners"
export const Detail = (id)=>{
    const params = useParams()
    const navigate = useNavigate()
    const [setURL, data, loading, error] = useFetch(`https://api.themoviedb.org/3/movie/${params.id}?&language=en-US`)
    window.scrollTo({top:0, behavior:'smooth'})
    document.title = data? data.title : "Untitled"
    console.log(data)
 return (
    <section className="detail-section">
        {error && <NotFound/> }
        <div className="detail-container w-full flex flex-col md:flex-row items-center md:items-start h-screen">
        {loading && <div className="w-[5rem] m-auto mt-0"> <PulseLoader loading={loading} size={15} color={"dodgerblue"}/> </div>}
            {data && <><img src={"https://image.tmdb.org/t/p/w500"+data.poster_path} className="w-full m-full max-h-[20rem] max-w-[15rem] md:max-w-[20rem] md:max-h-[25rem] rounded-lg"/>
            <div className="details w-fit ml-5 text-center md:text-left">
                <p className="text-3xl">{data.title}</p>
                <p>★ {data.vote_average}</p>
                <br></br>
                <p className="text-sm">Release Date: {DateBuilderHelper(data.release_date)}</p>
                <p className="text-sm">Revenue: {CurrencyFormatter(data.revenue)}</p>
                <br></br>
                {data.genres.map((el,i)=><span onClick={()=>navigate(`/genres/?genres=${el.id}&genre_name=${el.name}`)} className="bg-stone-200 dark:bg-blue-600 cursor-pointer hover:bg-stone-300 shadow-sm shadow-stone-500 mr-4 p-2  rounded-lg text-sm" key={i}>{el.name}</span>)}
                <br/><br/>
                <p className="text-2xl leading-10">Synopsis</p>
                <p className="md:text-left">{data.overview}</p>
            </div>
            </>}
        </div>
    </section>
 )   
}