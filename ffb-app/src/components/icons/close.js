export function IconClose({ active, setFilter }) {
  return (
    <button className={`icon-close${active ? " icon-close--active" : ""}`} onClick={() => setFilter("Search Player")}>
      <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.895 5l2.843-2.843a.894.894 0 000-1.264L9.107.262a.894.894 0 00-1.264 0L5 3.105 2.157.262a.894.894 0 00-1.264 0L.262.893a.894.894 0 000 1.264L3.105 5 .262 7.843a.894.894 0 000 1.264l.631.631a.894.894 0 001.264 0L5 6.895l2.843 2.843a.894.894 0 001.264 0l.631-.631a.894.894 0 000-1.264L6.895 5z"
          fill="#00214D"
        />
      </svg>
    </button>
  );
}
