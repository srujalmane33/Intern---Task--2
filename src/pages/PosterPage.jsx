import { useNavigate, useLocation } from "react-router-dom";

function PosterPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const posterUrl = location.state?.posterUrl;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white rounded-lg"
      >
        ← Back
      </button>

      <img
        src={posterUrl}
        alt="Poster"
        className="h-screen object-contain"
      />
    </div>
  );
}

export default PosterPage;
