import styled from 'styled-components';

export const Fade = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: red;
    opacity: .3;
`

export const Container = styled.div`
    position: absolute;
    top: 10%;
    margin: 0 auto;
    width: 500px;
    height: 400px;
    border: solid;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`