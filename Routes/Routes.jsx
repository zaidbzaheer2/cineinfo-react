import {Routes, Route} from "react-router-dom"
import { Home, NewReleases, TopRated,NotFoundPage, Trending, Detail, SearchPage, GenresPage } from "../pages"
export const AllRoutes = () =>{
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="trending" element={<Trending/>}/>
            <Route path="new-releases" element={<NewReleases/>}/>
            <Route path="top-rated" element={<TopRated/>}/>
            <Route path="movie/:id" element={<Detail/>}/>
            <Route path="search/" element={<SearchPage/>}/>
            <Route path="genres/" element={<GenresPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}
