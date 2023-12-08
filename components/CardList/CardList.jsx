import { Card } from "../Card/Card"
import { useNavigate } from "react-router-dom"
export const CardList = ({data})=>{
    const navigate = useNavigate()
    return <ul className="card-list w-fit h-full flex flex-wrap flex-col md:flex-row items-center md:items-center justify-center">
            {data && data.results.map((c_obj,i)=>{return c_obj.poster_path &&<li onClick={()=>navigate(`/movie/${c_obj.id}`)} key={i}><Card cdata={c_obj}/></li>})}
        </ul>
}