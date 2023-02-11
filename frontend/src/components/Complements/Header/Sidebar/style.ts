import styled from "styled-components";

export const Container = styled.div<{isSideBarVisible: boolean}>`
  display: none;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    padding: 80px 50px 22px 50px;
    position: fixed;
    height: 100vh;
    width: 280px;
    top: 0;
    position: absolute;
    z-index: 3;
    left: ${(props) => (props.isSideBarVisible ? "0" : "-100%")};
    background-color: var(--brand6);
    animation: showSidebar 0.4s;

    .menu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
      position: relative;
    }
    .menu div:first-child {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }
    .menu div:last-child {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .menu .menu-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 17px;
      font-weight: 500;
      color: var(--grey2);
      background-color: transparent;
      text-transform: uppercase;
      border: none;
      text-decoration: none;
      cursor: pointer;
    }
    .menu .img {
      width: 50%;
    }
    .menu .menu-item-disable {
        display:none;
    }
    @keyframes showSidebar {
      from {
        opacity: 0;
        transform: translateX(-280px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    padding: 80px 25px 22px 25px;
    position: fixed;
    height: 100vh;
    width: 280px;
    top: 0;
    position: absolute;
    z-index: 3;
    left: ${(props) => (props.isSideBarVisible ? "0" : "-100%")};
    background-color: var(--brand6);
    animation: showSidebar 0.4s;
    .menu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
      position: relative;
    }
    .menu div:first-child {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }
    .menu div:last-child {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .menu .menu-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 17px;
      font-weight: 500;
      color: var(--grey2);
      background-color: transparent;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }
    .menu .img {
      width: 50%;
    }
    @keyframes showSidebar {
      from {
        opacity: 0;
        transform: translateX(-280px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;