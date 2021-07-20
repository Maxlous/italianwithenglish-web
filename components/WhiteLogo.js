import styled from "styled-components";

const WhiteLogo = () => {
  return (
    <Container>
      <Image
        src="./images/whiteLogo.PNG"
        alt="white background, black text version of the logo"
      />
    </Container>
  );
};

export default WhiteLogo;

const Container = styled.div`
  display: grid;
  @media screen and (max-width: 640px) {
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  width: 18em;
  border-radius: 25px;
  justify-self: center;
`;
