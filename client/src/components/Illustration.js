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
  max-height: 30em;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
