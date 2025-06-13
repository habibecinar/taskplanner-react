//filtre butonları(tümü,aktif,tamamlanan)
// src/components/StatusFilter.jsx

function StatusFilter({ currentFilter, onFilterChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={() => onFilterChange("all")}
        disabled={currentFilter === "all"}
      >
        Tümü
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        disabled={currentFilter === "completed"}
      >
        Tamamlananlar
      </button>
      <button
        onClick={() => onFilterChange("incomplete")}
        disabled={currentFilter === "incomplete"}
      >
        Yapılacaklar
      </button>
    </div>
  );
}

export default StatusFilter;
