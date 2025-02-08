import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    navigate("/blogs/search?q=" + search);
    setTimeout(() => setSearch(""), 100);
  };

  return (
    <form
      className={`flex items-center ring ring-gray-200 group transition duration-150 w-full rounded-sm overflow-hidden ${
        isFocus ? "ring-gray-700" : ""
      }`}
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for blog"
        className="w-full rounded-md outline-none border-none pl-4 appearance-none"
        value={search}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        type="submit"
        className={`py-2 px-4 cursor-pointer text-white bg-black/80 transition duration-150 group-hover:bg-black ring-1 ring-black ${
          isFocus ? "bg-black" : ""
        }`}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            color: "var(--gray-a11)",
            marginRight: "calc(-1 * var(--space-5))",
          }}
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default Searchbar;
