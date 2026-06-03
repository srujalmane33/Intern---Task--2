function FilterPanel({ ratingFilter, setRatingFilter }) {
  return (
    <div className="flex gap-3 mb-6">
      <select
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="ALL">All Ratings</option>
        <option value="U">U</option>
        <option value="U/A">U/A</option>
        <option value="A">A</option>
        <option value="TBC">TBC</option>
      </select>
    </div>
  );
}

export default FilterPanel;
