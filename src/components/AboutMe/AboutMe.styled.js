import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 68px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & div:nth-child(1) {
        width: 100%;
        max-width: 1000px;
        height: 50px;
        /* outline: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div:nth-child(2) {
        max-width: 1000px;
        width: 100%;
        max-height: calc(100% - 50px);
        /* outline: 1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* outline: 1px solid red; */
        @media (min-width: 980px) {
            flex-direction: row;
            gap: 40px;
        }
    }
    & div:nth-child(2) img {
        width: 300px;
        @media (min-width: 980px) {
            width: calc(100% / 2);
        }
    }
    & div:nth-child(2) .AboutMe__paragraph_Container {
        width: 100%;
        @media (min-width: 600px) {
            width: 70%;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const Text = styled.p`
    text-align: start;
    line-height: 30px;
    margin-top: 25px;
    color: #a5a5a5;
    font-size: 18px;
`;
