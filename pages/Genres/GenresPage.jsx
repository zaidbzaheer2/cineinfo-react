import { useSearchParams } from "react-router-dom"
import { useFetch } from "../../Hooks/useFetch"
import { CardList, NotFound } from "../../components"
import { PulseLoader } from "react-spinners"
export const GenresPage = ()=>{
    const [params] = useSearchParams()
    const genres = params.get('genres')
    const g_name = params.get('genre_name')
    const [setURL,data,loading,error] = useFetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=${genres}`)
    document.title = "Category: "+ genres
    console.log(data)
    return <section className="genres-section w-full h-screen">
    <div className="genres-container flex flex-col items-center">
        <h2 className="section-heading text-2xl md:self-start text-blue-700">Category: {g_name}</h2>
        {error && <NotFound/>}
        {loading && <PulseLoader loading={loading} size={15} color="dodgerblue"/>}
        {data && <CardList data={data}/>}
        {data?.total_results==0 && <p>No Results Found.</p>}
        </div>
    </section>
}