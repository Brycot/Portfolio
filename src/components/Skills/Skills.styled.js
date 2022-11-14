import styled from "styled-components";

export const SkillSection = styled.section`
    width: 100%;
    height: auto;
    padding: 68px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.508);
    position: relative;
    &::after {
        content: "";
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/grain.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        opacity: 0.03;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    & .Skills__Title {
        width: 100%;
        max-width: 1000px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    & .Skills__Container {
        width: 100%;
        max-width: 1000px;
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, 150px);
        grid-template-rows: repeat(auto-fill, 150px);
        gap: 20px;
        justify-content: center;
        align-content: center;
        justify-items: center;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const BlobContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -999;
    top: 0;
    overflow: hidden;
`;

export const BlobOne = styled.img`
    width: 400px;
    position: absolute;
    transform: translate(-150px, -150px);
    filter: blur(40px);
`;
export const BlobTwo = styled.img`
    width: 400px;
    transform: translate(150px, 150px);
    filter: blur(40px);
`;

export const TechnologyContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    gap: 8px;
    &:hover {
        transform: scale(1.1);
    }

    & .Tech__Image {
        width: 100px;
        height: 100px;
        background-color: #dedede;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .Tech__Image img {
        width: 90px;
        height: 90px;
    }

    & p {
        color: #dedede;
    }
`;
