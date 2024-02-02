import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  // const [gif,setGif] = useState('');
  
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const {gif, loading, fetchData}=useGif();
  function clickHandler()
  {
    fetchData();
  }
  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-3xl uppercase underline font-bold">
        Random Gif
      </h1>
      {
        loading?(<Spinner></Spinner>):(<img src={gif} alt="gifImg" width="450" ></img>)
      }
      <button onClick={clickHandler}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
        >
        Generate
      </button>
    </div>
    );
}
