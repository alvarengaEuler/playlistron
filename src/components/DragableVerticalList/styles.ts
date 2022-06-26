import styled from 'styled-components'

export const Container = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
`;

export const DragableContainer = styled.div`
  flex: 1;
  
  padding: 16px 8px;
  height: 550px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background: ${props => props.theme.backgrounds.darkest};
  
  
  overflow: auto;
  background: tomato;
`;
export const BlockTitleContainer = styled.div`
  border: 2px solid white
  height: 100%;
  
  background: #222;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Text = styled.h3`
color: #fff;
transform: rotate(270deg);

`;