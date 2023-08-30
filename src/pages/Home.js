import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <>
      <h2 style={{ justifyContent: "center", textAlign: "center",marginBottom: '25px' }}>
        Blog Posts
      </h2>

      <div style={{ justifyContent: "center",  }}>
        {blogs.map((blog, index) => (
          <Card
            
            key={blog.id}
            text={"black"}
            style={{ width: "50%", 
            justifyContent: "center", 
            position: 'relative',
            top: '50%',
            left: '25%',
            marginBottom: '25px',
            
            className:'mb-2'}}
          >
            <Card.Header><b>Post #{index + 1}</b> </Card.Header>
            <Link
              to={`/blog-details/${blog.id}`}
              style={{ textDecoration: "none", color: "black" , textAlign: "center" }}
            >
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
