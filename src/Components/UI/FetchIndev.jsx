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
    <section className="w-full flex justify-center my-8">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 space-y-4 border-l-2 border-white max-w-96 flex flex-col justify-center items-center">
        <div className="">
          <h1>individual ID No: {id}</h1>
        </div>
        <div className="px-6 py-4 text-white">
          <p className="font-bold text-xl mb-2 ">{data?.title}</p>
          <p className="text-base">{data?.body}</p>
        </div>
      </div>
    </section>
  );
}

export default FetchIndev;
