import styled from 'styled-components';

//don't use borders - use clipped paths
//clip-path: polygon(50% 0, 100% 50%, 10% 100%, 0 50%);

//${props => props.height[0]}

//clip-path: polygon(0 20%, 100% 10%, 10% 100%, 0 50%);

const ImageTriangle = styled.div`
  position: absolute;
  width: ${props => props.width[0]};
  height: ${props => props.height[0]};
  background: ${props => `url(${props.image})`};
  clip-path: polygon(${props => props.topVertical}% ${props => props.topHorizontal}%, ${props => props.topRightVertical}% ${props => props.topRightHorizontal}%, ${props => props.bottomHorizontal}%
  ${props => props.bottomVertical}%, ${props => props.bottomRightVertical}%
  ${props => props.bottomRightHorizontal}%);
  

  z-index: 1;
  border: 1px solid blue;


  @media only screen and (min-width: 768px) {
    
  }
`;

export default ImageTriangle;
