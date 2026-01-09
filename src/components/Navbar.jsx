export default function Navbar({ search, setSearch }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-1 w-100"
      />
      <span className="font-semibold">Soham Das</span>
    </div>
  );
}
