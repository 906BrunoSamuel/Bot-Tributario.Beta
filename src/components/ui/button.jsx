
export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-4 py-2 font-semibold transition-all hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}
