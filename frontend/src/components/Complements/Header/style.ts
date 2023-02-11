import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
`;
export const DivHeader = styled.div`
    width: 85%;
    display: flex;
    height:70px;
    align-items: center;
    justify-content: space-between;

  .menu-icon {
    display: none;
  }
  @media (max-width: 950px) {

    .menu-icon {
      display: flex;
      z-index: 4;
      cursor: pointer;
      font-size: 35px;
      color: var(--grey2);
    }

    .img {
        display: none;
    }
  
    .menu-icon-animation {
      position: relative;
      width: 40px;
      height: 30px;
      background: transparent;
      cursor: pointer;
    }
    .menu-icon-animation input {
      display: none;
    }
    .menu-icon-animation span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: var(--grey2);
      border-radius: 9px;
      opacity: 1;
      left: 10;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }
    .menu-icon-animation span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }
  }
  @media (max-width: 600px) {
    .menu-icon {
      display: flex;
      z-index: 4;
      cursor: pointer;
      font-size: 35px;
      color: var(--grey2);
    }
    .img {
        display: none;
    }
    .menu-icon-animation {
      position: relative;
      width: 40px;
      height: 30px;
      background: transparent;
      cursor: pointer;
    }
    .menu-icon-animation input {
      display: none;
    }
    .menu-icon-animation span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: var(--grey2);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }
    .menu-icon-animation span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }
  }
`;

export const Nav = styled.nav`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3.5rem;
    .link {
        text-decoration: none;
        font-weight: 700;
        font-size: 1.0625rem;
        line-height: 1.125rem;
        color: var(--grey4);
    }
    @media (max-width: 950px) {
        .link {
            display: none;
        }
    }
    @media (max-width: 600px) {
        .link {
            display: none;
        }
        .item-disable {
            display: none;
        }
    }
`;

export const Button = styled.button`
    text-decoration: none;
    font-weight: 700;
    font-size: 1.0625rem;
    line-height: 1.125rem;
    color: var(--white);
    outline: none;
    border: none;
    background-color: var(--brand2);
    padding: 1rem 3.5rem;
    border-radius: .1rem;
    cursor: pointer;
    :hover {
        filter: brightness(110%);
    }
`;