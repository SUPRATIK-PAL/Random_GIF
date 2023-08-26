import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";


const API_KEY = 'y4J1g2rzEJ4Yx2J2i0Qsu8vF8Gp0NaF1';
export default function Random() {
const[gif, setgif] = useState('');
const[loading, setloading] = useState(false);

async function fetchData(){
  setloading(true);
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&q=potato`;
  const {data} = await axios.get(url);
  const imagesource = data.data.images.downsized_large.url;
  setgif(imagesource);
  setloading(false);
}

useEffect(() => {
  fetchData();
},[]);

function clickHandler(){
  fetchData();
}



  return( 
  <div className="w-1/2 bg-black rounded-lg border border-white flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="text-2xl font-bold font-sans mt-3 text-white">Let's generate any random GIF</h1>

    {
      loading ? (<Spinner />) : (<img src={gif} alt="random" width="450"/>)
    }
    <button className="rounded-lg bg-yellow-500 text-black py-2 text-lg w-10/12 hover:bg-yellow-700 hover:transition my-5 hover:duration-300 hover:text-white"
    onClick={clickHandler}
    >
      Generate
    </button>
  </div>
  )
}
