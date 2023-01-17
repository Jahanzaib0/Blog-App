import Bloglist from "./Bloglist";
import useFetch from "./useFetxh";
const Home = () => {
   const {error, isPending, data: Blogs} = useFetch("http://localhost:7000/blogs")
    return ( 
        <div className="home"> 
        {error && <div> {error} </div> }
            {isPending && <div>loading ...... </div>}
     {Blogs && <Bloglist Blogs = {Blogs} title = "All Blogs!"/>}
      </div>
    
    )
}
 
export default Home;