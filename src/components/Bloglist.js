import { Link } from "react-router-dom";
const Bloglist = (props) => {
    const Blogs = props.Blogs;
    const title = props.title;
    return (
        <div className="Home">
        <h1> {title} </h1>
        <div className="row">
        {Blogs.map((Blog)=>{return(
            // <div className="prieview" key={ Blog.id }>
            //     <Link to={`/blogs/${Blog.id}`}>
            //     <h2>{ Blog.title }</h2>
            //     <p>written by { Blog.author }</p>
            //     </Link>
            // </div>)
            <div class="col c2">
            <Link to={`/blogs/${Blog.id}`}>
                <div class="card w-100 h-100 my-3 bg-light col-sm c" key={Blog.id }>
            <div class="card-body text-bg-light p-3 ">
              <h5 class="card-title">{Blog.title}</h5>
              <p>written by { Blog.author }</p>
            </div>
          </div>
              </Link>
          </div>)
           
        
        })}
    </div>
    </div>
    );
  };
  
  export default Bloglist;
  