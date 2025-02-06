import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const fetchPost = async () => {
  // try {
  const res = await api.get("/posts");

  return res?.status === 200 ? res?.data : [];
  // } catch (error) {
  // console.log(error);
  // }
};
export const FetchIndvPost = async (id) => {
  // try {
  const res = await api.get(`/posts/${id}`);
  res.status === 200 ? res.data : [];
  return res?.data;
  // } catch (error) {
  // console.log(error);
  // }
};
