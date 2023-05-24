import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "http://localhost:8900/products";

const PostDetails = () => {
  let { topic } = useParams()
  let [details,setDetails] = useState("")

  useEffect(() => {
    fetch(`${url}/${topic}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        setDetails({...data})
    })

  })

  return (
    <div className="container pt-5 mt-3">
      <h3>More Details for this {details.title}</h3>
      <p>{details.price}</p>
    </div>
  );
};

export default PostDetails;
