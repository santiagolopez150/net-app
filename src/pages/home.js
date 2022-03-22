import React, { useEffect, useState } from "react";
import { fetchImages } from "../api/services";
import Layout from "../components/layout";
import Image from "../components/Image"
import Button from "../components/Image/getTen"
import { fetchBaseUrl } from "../api/baseService";

// 
export default function Home() {

  const [photos,setPhotos]=useState([])
  const [base,setBase]=useState([])
   
  const handleFetchImages = async () => {
    let result = await fetchImages();
    console.log(result.status)
    if(result.status === 200){
      // setPhotos(photos.concat(result.data))
      setPhotos(photo=>[...photos,...result.data.results])
      console.log("L")

      
    }
  }

  const handleFetchBurl= async ()=>{
    let baseUrl = await fetchBaseUrl();
    if (baseUrl.status == 200){
      setBase(baseUrl.data.images)
 
    }

  }
  // const button_eve = async ()=>{
  //   let res= await getTenImages()
  //   console.log(res.status)
  //   if(res.status === 200){
  //     setPhotos(photos.concat(res.data))
  //     console.log("L")
  //     console.log(photos)
  //     console.log("oe")

// photos.length
//   }
// }  
  console.log("App state",photos)
  console.log("App state lenght",photos.length)
  console.log("App Url base",base)
  //console.log(base.base_url+base.backdrop_sizes[0])
  const url=base.base_url+'w300'

  useEffect(() => {
    handleFetchImages();
    handleFetchBurl();
  }, []);
  
  return (
    <Layout>
      <h1>Home</h1>
      {photos.map((photo)=> <Image src={url+photo.backdrop_path}/>)}
      <Button button={handleFetchImages}/> 
          

    </Layout>
  );
}
