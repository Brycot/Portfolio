import styled from "styled-components";

export const ContactMeSection = styled.section`
    width: 100%;
    height: 100vh;
    padding: 68px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.408);
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
    & .Contact__container {
        width: 90%;
        max-width: 1000px;
        height: 50%;
        background-color: #282828;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    & .Contact__Text_Container {
        width: 100%;
        margin-bottom: 40px;
    }
`;

export const Title = styled.h2`
    font-size: 28px;
    @media (min-width: 980px) {
        font-size: 40px;
    }
`;
export const SubTitle = styled.p`
    margin-top: 20px;
    font-size: 25px;
`;
export const ContactButton = styled.a`
    width: 250px;
    background-color: #0059ff;
    padding: 15px 40px;
    text-decoration: none;
    color: #dedede;
    font-size: 25px;
    border-radius: 10px;
    transition: all 0.25s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 9px 1px #0059ffde;
    }
`;

export const SocialLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 17px;
    & .socialLink {
        width: 36px;
        height: 36px;
        background-color: #dedede;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }
    & .socialLink:hover {
        transform: scale(1.2);
    }
    & .socialLink img {
        width: 28px;
    }
`;
