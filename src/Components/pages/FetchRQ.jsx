import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../APIS/Api";
import { NavLink } from "react-router-dom";

function FetchRQ() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  console.log({ error });

  if (isLoading)
    return <h1 className="text-xl text-center py-5">Loading.......</h1>;
  if (isError)
    return (
      <h1 className="text-xl text-center py-5 text-red-500">
        Something went wrong.......
      </h1>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-black">
      {data?.map((curElem, index) => {
        const { body, title, id } = curElem;
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <NavLink to={`/rq/${id}`}>
              <p className="text-4xl text-center font-mono"> ID No : {id}</p>
              <h1 className="text-2xl font-semibold mb-4">{title}</h1>
              <p className="text-gray-700 text-sm">{body}</p>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default FetchRQ;
