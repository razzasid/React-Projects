
function FilterControls({ setFilter, filter }) {
  return (
    <div className="filter-controls">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
        id="show-all"
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
        id="show-active"
      >
        Active
      </button>
      <button
        onClick={() => setFilter("inactive")}
        className={filter === "inactive" ? "active" : ""}
        id="show-inactive"
      >
        Inactive
      </button>
    </div>
  );
}

export default FilterControls;
