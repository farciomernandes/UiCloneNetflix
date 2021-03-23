import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  width: 100%;
`;

export const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 100%;
  margin-top: 100px;
  h1{
    font-weight: 400;
  }

  form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
  }
`;

export const Formulario = styled.form`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h1{
    width: 86%;
  }
`;
export const Options = styled.section`
  width: 86%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 10px;
  section{
    a{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const Bottom = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
  width: 100%;
  margin-top: 20px;
`;

