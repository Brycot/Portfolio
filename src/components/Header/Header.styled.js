import styled, { keyframes } from "styled-components";

export const HeaderSection = styled.header`
    width: 100%;
    height: 62px;
    position: fixed;
    top: 0;
    z-index: 3;
    background-color: transparent;
    display: flex;
    justify-content: center;
`;
export const HeaderSectionContainer = styled.div`
    width: 100%;
    height: 62px;
    background-color: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(25px);
    border-bottom: 1px solid #ffffff2b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    & .nav__hamburguer,
    & .nav__hamburguer--active {
        min-width: 40px;
        width: 40px;
        height: 40px;
        min-height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.62rem;
        background: transparent;
        border: 0;
        transition: all 0.5s;
        @media (min-width: 980px) {
            display: none;
        }
    }
    & .nav__hamburguer div,
    & .nav__hamburguer--active div {
        min-width: 100%;
        height: 4px;
        border-radius: 5px;
        background-color: #dedede;
        transform-origin: left;
        transition: all 0.5s;
    }
    & .nav__hamburguer--active div:first-child {
        transform: rotate(45deg);
    }
    & .nav__hamburguer--active div:nth-child(2) {
        opacity: 0;
        transform: translateX(-10px);
        /* transition: all 0.25s; */
    }
    & .nav__hamburguer--active div:last-child {
        transform: rotate(-45deg);
    }
`;
