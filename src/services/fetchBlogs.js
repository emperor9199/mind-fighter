import axios from "axios";

export async function getAllBlogs() {
  const blogs = await axios
    .get("https://mind-fighters.herokuapp.com/blog/")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  return blogs;
}
