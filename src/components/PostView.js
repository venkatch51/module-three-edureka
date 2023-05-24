import React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {
    const renderTopic = ({topicsdata}) => {
        if(topicsdata != ""){
            return topicsdata.map((item)=> {
                return (
                    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                       <h2>{item.title}</h2>
                       <p>{item.price}</p> 
                       <Link to={`/post/${item.id}`} className="btn btn-info">Details</Link>
                    </div>
                )
            })
        }
    }
    return(
        <div className="">
            {renderTopic(props)}
        </div>
    )
}

export default PostView