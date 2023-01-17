import React, { useState } from "react"
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [author, setauthor] = useState("Jazzy");
    const [isPending, setisPending] = useState(false);
    const history = useHistory();
    const handleSubmt = (e) =>{
       e.preventDefault();
      let a = prompt("Enter Admin Code")
       setisPending(true);
      if (a == "jazzy123") {
       const blog = {title, description, author};
       fetch("http://localhost:7000/blogs",{
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        setisPending(false);
        history.push("/");
        alert("Your Blog Has Been Uploded Successfully")
       })
    }
    else{
        alert("your Are Not Allowed To Post");
        history.push("/");
    }
}
    return (
        
    <div className="create">
        {/* <div className="container"> */}
        <h3>
            Add a New Blog
        </h3>
        <form onSubmit={handleSubmt}>
            <label> Blog Title:</label>
            <input 
            type="text"
            required
            value={title}
            onChange ={(e)=>{
                setTitle(e.target.value)
            }}
             />
            <label> Blog Body:</label>
            <textarea
            cols="70" 
            rows="10"
            required
            value={description}
            onChange = {(e)=>{
                setdescription(e.target.value);
                
            }}
            >    
            </textarea>
            <label> Blog Author</label>
            <select 
            required
            value={author}
            onChange = {(e)=>{
                setauthor(e.target.value)
            }}
            >
                <option value="Jazzy">Jazzy</option>
                <option value="harry">Harry</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button>Added Your Blog</button>}
           
        </form>
        </div>
    // </div>
    )
}
export default Create