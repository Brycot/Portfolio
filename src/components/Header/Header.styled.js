import styled, { keyframes } from "styled-components";

export const HeaderSection = styled.header`
    width: 100%;
    height: 62px;
    position: fixed;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(5px);
    border-bottom: 1px solid #ffffff2b;
`;
export const HeaderSectionContainer = styled.div`
    width: 100%;
    height: 62px;
    max-width: 1000px;
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

    & .nav_menu,
    & .nav_menu--active {
        position: fixed;
        top: 62px;
        left: 0;
        width: 100vw;
        height: calc(100vh - 62px);
        background-color: rgba(0, 0, 0, 1);
        transition: all 0.2s ease;
        transform-origin: right;
    }
    & .nav_menu {
        transform: scaleX(0);
    }
    & .nav_menu--active {
        transform: scaleX(1);
    }
    & nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
    }
    & nav ul li {
        margin: 30px 0;
    }
    & nav ul li a {
        text-decoration: none;
        font-size: 25px;
        font-weight: 800;
        color: #dedede;
    }
    @media (min-width: 980px) {
        & .nav_menu {
            transform: scaleX(1);
            position: static;
            width: 100%;
            height: 60px;
            background: transparent;
        }
        & nav ul {
            flex-direction: row;
            justify-content: flex-end;
        }
        & nav ul li {
            margin: 0 30px;
        }
        & nav ul li:hover a {
            color: #0059ff;
            transition: all 0.5s;
        }
        & nav ul li a {
            font-size: 18px;
            font-weight: 500;
        }
    }
`;
