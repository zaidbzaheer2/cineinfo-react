import { Card } from "../../components"
import { CardList } from "../../components"
import { useState, useEffect, useCallback } from "react"
import {  PulseLoader as LoadingAnimation } from "react-spinners"
import { useFetch } from "../../Hooks/useFetch"
const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
export const TopRated = () =>{
    const [setURL, data, loading, error] = useFetch(TOP_RATED)
    document.title = "Top Rated"
    return <section className="top-section w-full h-screen">
                <div className="top-container flex flex-col items-center">
                    <h2 className="section-heading text-2xl md:self-start text-blue-700">Top Rated</h2>
                    {data && <CardList data={data}/>}
                    {error && <p>Error Fetching: {error}</p>}
                    {loading && <LoadingAnimation size={15} color={"dodgerblue"} loading={loading}/>}
                </div>
            </section>
}