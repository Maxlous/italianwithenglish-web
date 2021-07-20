import styled from "styled-components";

const Illustration = (props) => {
  return (
    <Container>
      <Image src={props.imageSource} alt={props.imageAlt} />
    </Container>
  );
};

export default Illustration;

const Image = styled.img`
  max-width: 35em;
  @media screen and (max-width: 1200px) {
    width: 50vw;
  }
  @media screen and (max-width: 640px) {
    width: 80vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
