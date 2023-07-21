import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;
  console.log(id);

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const { title, body } = post;

  const onCLick = () => {
    console.log("from button event");
    navigate("/about");
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={onCLick}>About</button>
    </div>
  );
};

export default Post;
