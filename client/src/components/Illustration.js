import styled from "styled-components";

const Illustration = (props) => {
  return (
    <Wrapper>
      <Image src={props.imageSource} alt={props.imageAlt} />
    </Wrapper>
  );
};

export default Illustration;

const Image = styled.img`
  width: 35em;
  height: 30em;
`;

const Wrapper = styled.div``;
