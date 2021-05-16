import React from "react";

export default function Meaning(props) {
 return (
  <div className="Meaning"> 
   <h3>{props.meaning.partOfSpeach}</h3>
   {props.meaning.definitions.map(function (definition, index) {
    return (
     <div key={index}>      
      <p>
       {definition.defintion}
       <br />
      <em>{definition.example}</em>
      </p>
     </div>
    )
   })}  
  </div>
 );
}