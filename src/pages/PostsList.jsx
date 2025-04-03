import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function PostsList() {
  const [posts, setposts] = useState([])


  useEffect(() => {
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setposts(data)
      })
  }, [])


  return (
    <>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-1 fw-bold">Our posts</h1>
            <p className="col-md-8 fs-4">
              Explore our wide range of posts below. Find something you love and grab it now!
            </p>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              {posts.map(post => (
                <div className="col" key={post.id}>
                  <div className="card h-100">
                    <NavLink to={`/posts/${post.id}`}>
                      <img src={post.image} className="card-img-top" alt={post.title}
                        style={{ aspectRatio: 1, objectFit: 'cover' }} />
                    </NavLink>
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.price}</p>
                      {/* Add a NavLink to navigate to the single post page */}
                      <NavLink to={`/posts/${post.id}`} className="btn btn-primary">
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>


    </>
  )
}