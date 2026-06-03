function SideBar({
  ratingFilter,
  setRatingFilter,
  viewMode,
  setViewMode,
}) {
  return (
    <div className="w-64  bg-blue-200  shadow-lg p-5">
      <h2 className="text-xl font-bold mb-6">
        Filters
      </h2>

      <div className="mb-6">
        <label className="font-semibold block mb-2">
         Age Rating
        </label>

        <select
          value={ratingFilter}
          onChange={(e) =>
            setRatingFilter(e.target.value)
          }
          className="w-full border p-2 rounded-lg"
        >
          <option value="ALL">All</option>
          <option value="U">U</option>
          <option value="U/A">U/A</option>
          <option value="A">A</option>
          <option value="TBC">TBC</option>
        </select>
      </div>

      <div>
        <label className="font-semibold block mb-2">
          View
        </label>

        <button
          onClick={() =>
            setViewMode(
              viewMode === "grid" ? "list" : "grid"
            )
          }
          className="w-full bg-indigo-600 text-white py-2 rounded-lg"
        >
          {viewMode === "grid"
            ? "📋 List View"
            : "🔲 Grid View"}
        </button>
      </div>
    </div>
  );
}

export default SideBar;