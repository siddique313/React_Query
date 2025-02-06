import { useQuery } from "@tanstack/react-query";
import { FetchIndvPost } from "../APIS/Api";
import { useParams } from "react-router-dom";

function FetchIndev() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["_posts"],
    queryFn: () => FetchIndvPost(id),
  });
  console.log(data);
  if (isLoading)
    return <h1 className="text-xl text-center py-5">Loading.......</h1>;
  if (isError)
    return (
      <h1 className="text-xl text-center py-5 text-red-500">
        Something went wrong.......
      </h1>
    );
  return (
    <div className="w-full text-center">
      <div className="text-white">
        <h1>individual ID No: {id}</h1>
      </div>
      <div className="text-white">
        <p>{data?.id}</p>
        <p>{data?.title}</p>
        <p>{data?.body}</p>
      </div>
    </div>
  );
}

export default FetchIndev;
