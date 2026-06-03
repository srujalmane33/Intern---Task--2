import { Link } from "react-router-dom";

function MovieCard({ movie, viewMode }) {
const posterUrl =
  movie.images?.poster?.["1"]?.medium?.film_image;


  // console.log("Poster URL:", posterUrl);
  console.log(movie);
  return (
    <div
      className={
        viewMode === "grid"
          ? "bg-white rounded-xl shadow-lg overflow-hidden"
          : "bg-white rounded-xl shadow-lg overflow-hidden flex"
      }
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300  ">
        <Link to={`/poster/${movie.film_id}`} state={{ posterUrl }}>
          <img
            src={posterUrl}
            alt={movie.film_name}
            className="w-full h-96 object-cover"
          />
        </Link>

        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">{movie.film_name}</h2>

          <p>📅 {movie.release_dates?.[0]?.release_date || "N/A"}</p>

          {/* <p>🆔 {movie.film_id}</p> */}
        </div>
      </div>
    </div>
  );
}
export default MovieCard;

// function MovieCard({ movie }) {
//   return (
//     <div className="movie-card">
//       <img
//         src={movie.images?.poster?.[1]?.medium?.film_image}
//         alt={movie.film_name}
//       />

//       <h2>{movie.film_name}</h2>

//       <p>
//         Rating Data:
//         {JSON.stringify(movie.age_rating)}
//       </p>

//       <p>
//         Release Date:
//         {movie.release_dates?.[0]?.release_date}
//       </p>
//     </div>
//   );
// }

// export default MovieCard;

//___________------________--_--_----------__-_----_-_-

// // function MovieCard({ movie }) {
// //   return (

// //     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
// //       <div className="h-56 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
// //         <img
// //           src={movie.images?.poster?.[1]?.medium?.film_image}
// //           alt={movie.film_name}
// //           className="w-full h-64 object-cover rounded-tl-2xl rounded-tr-2xl"
// //         />
// //       </div>

// //       <div className="p-5">
// //         <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
// //           {movie.film_name}
// //         </h2>

// //         <div className="space-y-2">
// //           <p>
// //             📅 Release Date:
// //             {movie.release_dates?.[0]?.release_date || "N/A"}
// //           </p>

// //           <p className="text-gray-600">
// //             ⭐ Rating:
// //             <span className="font-medium ml-2">
// //               {movie.review_stars || "N/A"}
// //             </span>
// //           </p>

// //           <p className="text-gray-600">
// //             🎭 ID:
// //             <span className="font-medium ml-2">{movie._id}</span>
// //           </p>
// //         </div>

// //         <button className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
// //           View Details
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MovieCard;
