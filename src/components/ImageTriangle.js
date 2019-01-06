import styled from 'styled-components';

//don't use borders - use clipped paths
//clip-path: polygon(50% 0, 100% 50%, 10% 100%, 0 50%);


const ImageTriangle = styled.div`
  position: absolute;
  width: ${props => props.width[0]};
  height: ${props => props.height[0]};
  background: ${props => `url(${props.image})`};
  clip-path: polygon(0 20%, 100% 10%, 10% 100%, 0 50%);

  z-index: 1;

  


  @media only screen and (min-width: 768px) {
    
  }
`;

export default ImageTriangle;
