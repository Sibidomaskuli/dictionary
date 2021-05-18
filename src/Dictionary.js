import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"; 

export default function Dictionary() {
 let [keyword, setKeyword]=useState("");
 let [results, setResults]=useState(null); 
 
 function handleResponse(response) {
  setResults(response.data[0]);
 }

 function search(event) {
  //alert(`searching for definition of ${keyword}...`);
  event.preventDefault();

  //documentation: https://dictionaryapi.dev/

  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/`+keyword;
  console.log(apiUrl); 
  axios.get(apiUrl).then(handleResponse); 
 }

 function handleKeywordChange(event) {
  setKeyword(event.target.value); 
 }

 return (
  <div className="Dictionary">
   <form onSubmit={search}>
    <div className="row">
     <div className="col-10">
      <input type="search"
       className="form-control"
       placeholder="Type a word.."
       onChange={handleKeywordChange} />
     </div>
     <div className="col-2">
      <input
       type="submit"
       value="search"
       className="btn btn-outline-danger w-100"
      />
     </div>
    </div>
   </form>
   <Results results={results} />
  </div>
 );
 }
    
   

