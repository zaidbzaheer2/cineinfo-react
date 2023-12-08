import { useSearchParams, useParams } from "react-router-dom"
import { useFetch } from "../../Hooks/useFetch"
import { CardList } from "../../components"
import { NotFound } from "../../components"
import { PulseLoader } from "react-spinners"
export const SearchPage = ()=>{
    const [params] = useSearchParams()
    const query = params.get("q")
    const [setURL, data,loading,error] = useFetch(`https://api.themoviedb.org/3/search/movie?&query=${query}`)
    document.title = "Search Results for "+query
    return <section className="search-section w-full h-screen">
        <div className="search-container flex flex-col items-center">
            <h2 className="section-heading text-2xl md:self-start text-blue-700">Search Results for {"'"+params.get("q")+"'"}</h2>
            {error && <NotFound/>}
            {loading && <PulseLoader loading={loading} size={15} color="dodgerblue"/>}
            {data && <CardList data={data}/>}
            {data?.total_results==0 && <p>No Results Found.</p>}
            </div>
        </section>
}