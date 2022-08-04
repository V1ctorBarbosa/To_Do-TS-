import styled from 'styled-components';

export const Container = styled.div`
    width: max-content;
    display: flex;
    margin: 50px auto 0;
    padding: 14px;
    border: solid #94A1B5;
    color: #94A1B5;
    border-radius: 20px;
    background-color: #151513;
`
export const Title = styled.div`
    display: flex;
    padding: 0 10px;
    font-size: 20px;
    margin: auto;
`

export const Icon = styled.div`
    display: flex;
    padding: 0 5px;
    margin-top: 6px;
    cursor: pointer;

        :hover{
            transform: scale(1.2);
            transition: ease-in-out .3s;
        }
`

export const EmptyText = styled.div`
    width: max-content;
    display: flex;
    justify-content: center;
    margin: 20px auto;
    padding: 20px;
    border-radius: 20px;
    background-color: #151513;
    color: #94A1B5;
`
    