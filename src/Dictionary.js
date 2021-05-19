import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"; 

export default function Dictionary(props) {
 let [keyword, setKeyword]=useState(props.defaultKeyword);
 let [results, setResults]=useState(null);
 let [loaded, setLoaded]=useState(false); 

 function handleResponse(response) {
  setResults(response.data[0]);
 }

 function search() {
  //documentation: https://dictionaryapi.dev/
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/`+keyword;
  console.log(apiUrl); 
   axios.get(apiUrl).then(handleResponse).catch((error) => {
     alert("not found, please try again");
   })
 }

 function handleSubmit(event) {
  event.preventDefault();
  search();
 }

 function handleKeywordChange(event) {
  setKeyword(event.target.value); 
 }

 function load() {
  setLoaded(true);
  search();
 }

 if (loaded) {
  return (
   <div className="Dictionary">
    <section>
    <form onSubmit={handleSubmit}>
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
    </section>
    <Results results={results} />
   </div>
  );
 } else {
  load();
  return "Loading.."; 
 }
 }
    
   

