import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetxh"
const Blogdetails = () =>{
   const { id } = useParams()
   const {data : blog, isPending, error} = useFetch("http://localhost:7000/blogs/" + id);
  const history = useHistory();
   const handleClick = () =>{
      let a = prompt("Enter Admin Code");
      if (a == "jazzy123") {
    fetch("http://localhost:7000/blogs/" + blog.id, {
      method: "DELETE"
    }).then(()=>{
     history.push("/")
    })
   }
   else{
      alert("your are no Allowed to delete Blog");
   }
   }
   return (
      <div className="container">
     <div className="details">
       {isPending && <div>Loading....</div>}
       {error && <div>{error.message}</div>}
       {
         blog && (
            <article>
               <h2>{blog.title}</h2>
               <p>{blog.author}</p>
               <div>{blog.description}</div>
               <button className="my-3" onClick={handleClick}>Delete</button>
            </article>
            
         )
       }

     </div>
     </div>
   )
}
export default Blogdetails