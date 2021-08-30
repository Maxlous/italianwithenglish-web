import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useRouter } from "next/router";

const ChangePathButton = () => {
  const router = useRouter();
  const changePath = () => {
    router.push("/exercises");
  };

  return (
    <PathChanger onClick={changePath}>
      {" "}
      <CgArrowsExchangeAlt size="1.5em" /> Change Path!
    </PathChanger>
  );
};

export default ChangePathButton;

const PathChanger = styled.button`
  align-self: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.fontColor};
  font-weight: 800;
  border: 3px solid ${(props) => props.theme.fontColor};
  transition: 1s;
  background: transparent;
  &:hover {
    border-radius: 1em;
    color: ${(props) => props.theme.fontColor};
  }
  @media screen and (max-height: 720px) {
    margin-top: 2rem;
  }
`;
