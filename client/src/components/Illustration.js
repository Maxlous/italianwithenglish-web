import styled from "styled-components";

const Illustration = (props) => {
  return (
    <div>
      <Image src={props.imageSource} alt={props.imageAlt} />
    </div>
  );
};

export default Illustration;

const Image = styled.img`
  max-width: 35em;
  max-height: 30em;
`;
