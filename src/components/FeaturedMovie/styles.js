import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const EffectVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111, transparent 90%);
`;

export const EffectHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 110px;
    padding-top: 20px;
`;

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;
`;

export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`;

export const Poins = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 10px;
`;

export const LancedDate = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const Seasons = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 70ch;
    text-overflow: clip;
`;

export const Buttons = styled.div`
    margin-top: 15px;
`;

export const BtnPlay = styled.button`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    margin-top: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    cursor: pointer;
    border: none;
    background-color: #fff;
    color: #000;

    &:hover{
      opacity: 0.6;
    }
`;

export const BtnMyList = styled.button`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    margin-top: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    border: none;

    &:hover{
      opacity: 0.6;
    }
`;

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
`;
