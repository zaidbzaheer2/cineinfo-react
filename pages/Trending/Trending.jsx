import { useFetch } from "../../Hooks/useFetch"
import {PulseLoader as LoadingAnimation} from "react-spinners"
import { CardList } from "../../components"
const TRENDING = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

export const Trending = () =>{
    const [setURL, data, loading, error] = useFetch(TRENDING)
    document.title ="Trending"
    return <section className="trending-section w-full h-screen">
          <div className="trending-container flex flex-col items-center">
                    <h2 className="section-heading text-2xl md:self-start text-blue-700">Trending</h2>
                    {data && <CardList data={data}/>}
                    {error && <p>Error Fetching: {error}</p>}
                    {loading && <LoadingAnimation size={15} color={"dodgerblue"} loading={loading}/>}
                </div>
    </section>
}