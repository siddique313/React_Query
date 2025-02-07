import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPost } from "../APIS/Api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function FetchRQ() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPost(pageNumber),
    placeholderData: keepPreviousData,
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
    <section>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-black list-inside list-decimal">
        {data?.map((curElem, index) => {
          const { body, title, id } = curElem;
          return (
            <li
              key={index}
              className="  h-72 bg-gray-800 text-white rounded-lg shadow-lg p-6 space-y-4 border-l-2 border-white  flex flex-col justify-around gap-7 items-center"
            >
              <NavLink to={`/rq/${id}`}>
                <p className="text-4xl text-center font-mono"> ID No : {id}</p>
                <h1 className="text-2xl font-semibold mb-4">{title}</h1>
                <p className=" text-sm">{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ol>
      <div className="w-full flex gap-4 items-center">
        <button
          className={`px-10 py-3 bg-violet-700 rounded-2xl ${
            pageNumber <= 1 ? "bg-lime-500" : false
          }`}
          disabled={pageNumber <= 1 ? true : false}
          onClick={() => setPageNumber((pre) => pre - 3)}
        >
          Prev
        </button>
        <h1>{(pageNumber / 3 + 1).toFixed(0)}</h1>
        <button
          className={`px-10 py-3 bg-violet-700 rounded-2xl  ${
            pageNumber <= 1 ? "bg-lime-500" : "bg-orange-700"
          }`}
          onClick={() => setPageNumber((pre) => pre + 3)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default FetchRQ;
