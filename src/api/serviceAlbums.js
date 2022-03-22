import axios from "axios";

import React from 'react';

export const fetchAlbums= async(skip)=> {
  return await axios.get(`https://jsonplaceholder.typicode.com/albums?start=${skip}&_limit=10`)
  .then((res)=>{
      console.log("fetchAlbums", res)
      return res
  }).catch((err) =>{
      console.log("Error", err)
  })
}

