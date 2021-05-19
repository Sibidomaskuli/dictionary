import React from "react";
import "./Phonetic.css"; 
//import ReactAudioPlayer from `react-audio-player`;

export default function Phonetic(props) {
 console.log(props.phonetic); 
 let audio = new Audio(props.phonetic.audio);
 
 const start = () => {
   audio.play()
 }
 
 return (
   < div >
   <button
    onClick={start}
    type="button"
    className="btn btn-outline-warning">Play</button>
   {" "}
   <span>{props.phonetic.text}</span>
   </div >
 );  
}
