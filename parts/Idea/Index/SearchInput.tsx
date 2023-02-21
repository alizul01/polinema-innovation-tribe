import { HiMagnifyingGlass as SearchIcon } from "react-icons/hi2";

export default function SearchInput() {
  return (
    <div className="px-8 py-4 border-slate-700 hover:border-purple-500 placeholder-slate-300 placeholder-font-medium text-gray-200 transition-all duration-300 ease-in-out rounded-lg border bg-slate-700/25 flex items-center gap-5 mt-8 max-w-screen-sm mx-auto">
      <div className="text-gray-200">
        <SearchIcon />
      </div>
      <input
        className="bg-transparent outline-none border-none w-full text-gray-200 placeholder:text-slate-500"
        placeholder="Search for ideas..."
      />
    </div>
  );
}
