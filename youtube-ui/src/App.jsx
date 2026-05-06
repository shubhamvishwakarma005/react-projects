import { useEffect, useState } from "react"
import { GetPost } from "./api"

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    GetPost()
      .then((post) => {
        console.log("ARRAY", post?.data?.data); 

        setData(post?.data?.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5">
  <h1 className="text-2xl font-bold mb-5 text-center">Youtube UI</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.length > 0 ? (
      data.map((e, i) => {
        const video = e.items;
        const snippet = video?.snippet;

        return (
          <div
            key={video?.id ?? i}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <img
              src={snippet?.thumbnails?.medium?.url}
              alt={snippet?.title}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold line-clamp-2">
                {snippet?.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {snippet?.channelTitle}
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <p className="text-gray-500">Loading...</p>
    )}
  </div>
</div>
  )
}

export default App;