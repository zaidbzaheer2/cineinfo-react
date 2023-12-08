import { useFetch } from "../../Hooks/useFetch"
import {PulseLoader as LoadingAnimation} from "react-spinners"
import { CardList } from "../../components"
const NEW_RELEASES = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"

export const NewReleases = () =>{
    document.title = "New Releases"
    const [setURL, data, loading, error] = useFetch(NEW_RELEASES)
    return <section className="releases-section w-full h-screen">
          <div className="releases-container flex flex-col items-center">
                    <h2 className="section-heading text-2xl md:self-start text-blue-700 ">New Releases</h2>
                    {data && <CardList data={data}/>}
                    {error && <p>Error Fetching: {error}</p>}
                    {loading && <LoadingAnimation size={15} color={"dodgerblue"} loading={loading}/>}
                </div>
    </section>
}