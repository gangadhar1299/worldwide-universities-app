/** @jsxImportSource @emotion/react */

import * as colors from "../styles/colors";
import { University } from "../types";
import { getRandomColor } from "../utils/misc";

interface UniversityCardProps {
  university: University;
}

function UniversityCard(props: UniversityCardProps) {
  const { shortName, name, web_pages } = props.university;

  const webPages = web_pages.join(", ");

  return (
    <div className="rounded px-3 py-5 shadow d-flex flex-column align-items-center">
      <div
        className="rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
        css={{
          backgroundColor: getRandomColor(),
          height: "10em",
          width: "10em",
        }}
      >
        <h2
          className="m-0"
          css={{
            fontSize: "2rem",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          title={shortName}
        >
          {shortName}
        </h2>
      </div>
      <h3 className="text-center mt-4" css={{ fontSize: "1rem" }}>
        {name}
      </h3>
      <p className="mt-3">{webPages}</p>
      <a
        href={web_pages[0]}
        target={"_blank"}
        rel="noreferrer"
        className="mt-3 p-3 rounded"
        css={{ backgroundColor: colors.primary, color: "#fff" }}
      >
        Visit website
      </a>
    </div>
  );
}

export default UniversityCard;
