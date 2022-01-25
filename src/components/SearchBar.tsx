/* @jsxImportSource @emotion/react */

import { FaSearch } from "react-icons/fa";
import * as colors from "../styles/colors";

function SearchBar(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="my-3 position-relative">
      <FaSearch
        className="position-absolute"
        css={{
          color: colors.primary,
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          fontSize: "1.2rem",
        }}
      />
      <input
        type={"search"}
        className="w-100"
        css={{ padding: "0.6em 2em" }}
        {...props}
      />
    </div>
  );
}

export default SearchBar;
