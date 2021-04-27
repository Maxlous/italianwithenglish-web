import whiteLogo from "../images/whiteLogo.PNG";
import styled from "styled-components";

const WhiteLogo = () => {
  return (
    <Wrapper>
      <Image
        src={whiteLogo}
        alt="white background, black text version of the logo"
      />
    </Wrapper>
  );
};

export default WhiteLogo;

const Wrapper = styled.div`
  align-self: center;
`;
const Image = styled.img`
  width: 18em;
`;
