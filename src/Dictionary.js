import React, {useState} from "react";
import axios from "axios"; 
import "./Dictionary.css"; 

export default function Dictionary() {
 let [keyword, setKeyword]=useState(null); 
 function search(event) {
  event.preventDefault();
  alert(`searching for definition of ${keyword}...`);
 }

 function handleKeywordChange(event) {
  setKeyword(event.target.value); 
 }

 return (
  <div className="Dictionary">
   <form
    onSubmit={search}
    autoFocus={true}
   >
    <input type="search" onChange={handleKeywordChange} />
   </form>
  </div>
 );
}

