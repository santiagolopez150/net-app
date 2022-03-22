import React, { useState, useEffect } from "react";
import { fetchAlbums } from "../api/serviceAlbums";
import Album from "../components/Album";
import Layout from "../components/layout";

export default function Services() {

  const [albums,setAlbums]=useState([])

  const handleFetchAlbums= async()=>{

    let result= await fetchAlbums();
    console.log(result.status)
    console.log(typeof result.status)
  
    if (result.status===200){
      setAlbums([...albums,...result.data]) 
      console.log("Albums ", albums)
      console.log("Estoy entrando")     
    }
  }

  useEffect(()=>{
    handleFetchAlbums();    
  },[])


  return (
    <Layout>
      <h1>SERVICES</h1>
      {albums.map((dat)=><Album userId={dat.userId} title={dat.title} id={dat.id}/>)}
      <p>descirpcion</p>
    </Layout>
  );
}
