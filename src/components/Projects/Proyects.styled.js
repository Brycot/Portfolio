import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 68px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div:nth-child(1) {
        width: 100%;
        max-width: 1000px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    & .Projects__Container {
        width: 100%;
        max-width: 1000px;
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, 290px);
        grid-template-rows: repeat(auto-fill, 250px);
        gap: 20px;
        justify-content: center;
        align-content: center;
        justify-items: center;
        align-items: center;
    }
    // Proyecto spotify
    & .Projects__Container div:first-child .Project__Image::after {
        width: 100%;
        height: 100%;
        content: "En desarrollo";
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.608);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    & .Projects__Container div:first-child .Project__Links a {
        cursor: not-allowed;
        background-color: #3c3c3c;
        border-color: #3c3c3c;
        pointer-events:none;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const ProjectContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0c0c0c;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.05);
    }
    &:hover .Project__Image > div {
        transform: translateY(0);
    }
    & p {
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    & .Project__Image {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }
    & .Project__Image > div {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.508);
        position: absolute;
        transform: translateY(100%);
        transition: all 0.25s;
        display: flex;
        justify-content: center;

        align-items: center;
    }
    & .Project__Image > div a {
        text-decoration: none;
        color: #dedede;
    }
    & img {
        width: 100%;
        border-radius: 10px;
    }
    & .Project__Links {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const Button = styled.a`
    color: #dedede;
    text-decoration: none;
    background-color: #0059ff;
    border: 1px solid #0059ff;
    padding: 5px 30px;
    border-radius: 8px;
    transition: all 0.5s;
    &:hover {
        border: 2px solid #0059ff;
        background-color: #0c0c0c;
    }
`;
