import styled from "styled-components";

const WhiteLogo = () => {
  return (
    <Wrapper>
      <Image
        src="./images/whiteLogo.PNG"
        alt="white background, black text version of the logo"
      />
    </Wrapper>
  );
};

export default WhiteLogo;

const Wrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 43%;
`;
const Image = styled.img`
  width: 18em;
  border-radius: 25px;
`;
