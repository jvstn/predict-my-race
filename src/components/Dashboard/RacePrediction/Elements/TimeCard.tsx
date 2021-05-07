import styled from "styled-components";
import Card from "../../../Shared/Card";

export default styled(Card)<{ multiple: number }>`
  @media (max-width: 800px) {
    min-width: 40vw;
    min-height: 60vw;
    transition: ease-in-out 0.4s;
    transform: translate(calc(${(props) => props.multiple} * 250%));
    margin: -13vw auto 0 auto;
  }

  @media (max-width: 400px) {
    transform: translate(calc(${(props) => props.multiple} * 200%));
  }
`;
