import SearchIcon from "~icons/heroicons/magnifying-glass";

export function SearchInput() {
  return (
    <div className="px-8 py-4 rounded-full border border-slate-300/25 bg-slate-700/25 flex items-center gap-4 mt-8 max-w-screen-sm mx-auto">
      <div className="text-white">
        <SearchIcon />
      </div>
      <input
        className="bg-transparent outline-none border-none w-full text-white placeholder:text-slate-500"
        placeholder="Search for ideas..."
      />
    </div>
  );
}
