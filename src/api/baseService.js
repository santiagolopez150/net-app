import axios from "axios";

export const fetchBaseUrl=()=>{
    return axios.get('https://api.themoviedb.org/3/configuration?api_key=0b32f39ac55ae3bb8aa134234754f67e')
    .then((res)=>{
        console.log("[fetchBaseUrl] res",res)
        return res
    }).catch((err)=>{
        console.log('[fetchBaseUrl] err',err)
    })
}