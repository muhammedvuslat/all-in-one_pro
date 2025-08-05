import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ButtonSearchBar } from "../../components/Button";

const SearchBar = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <form className="w-auto mx-2 mb-0 text-light-sixth  dark:text-dark-sixth">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only  "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm border   rounded-t-3xl border-light-tertiary dark:border-dark-tertiary text-light-sixth dark:text-dark-sixth bg-light-secondary  dark:bg-dark-secondary placeholder-light-seventh dark:placeholder-dark-seventh  "
          placeholder="Search ID, Company, ICE"
          required=""
          onChange={handleSearch}
        />
        <ButtonSearchBar content={"Search"} />
      </div>
    </form>
  );
};

export default SearchBar;
