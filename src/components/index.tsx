/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import * as colors from "../styles/colors";

export function Logo() {
  return (
    <div>
      <span css={{ color: colors.primary, fontSize: "3rem", fontWeight: 900 }}>
        UNI
      </span>
      <span css={{ fontSize: "2rem" }}>search</span>
    </div>
  );
}

export const Container = styled.div({
  maxWidth: "1200px",
  width: "90%",
  margin: "auto",
});
