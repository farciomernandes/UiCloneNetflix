import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  h2{
    margin: 0px 0px 0px 30px;
  }

  &:hover{
    opacity: 1;
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  &:hover{
     opacity: 1;
    }
  transition: all ease 0.7;
  left: 0;
`;

export const ArrowRight = styled(ArrowLeft)`
  right: 0;
  left: auto;
  &:hover{
     opacity: 1;
    }
  transition: all ease 0.7;
`;

export const SlideShowMovies = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
  transition: all ease 0.5s;
`;

export const SlideShowList = styled.div`
    transition: all ease 0.5;
`;

export const SlideShowCard = styled.div`
   display: inline-block;
    width: 150px;
    img{
      width: 100%;
      transform: scale(0.9);
      transition: all ease 0.2s;
      cursor: pointer;
      &:hover{
        transform: scale(1);
      }
    }
`;
