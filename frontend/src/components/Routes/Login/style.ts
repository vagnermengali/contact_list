import styled from "styled-components";
import background_login from "@/assets/image/background/bg1.jpg";

export const StyledLoginSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_login});
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
  }
  .container-left {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
    gap: 70px;
  }
  .container-left .content-up {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container-left .content-up h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: var(--grey4);
  }
  .container-left .content-up span {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: var(--brand2);
  }
  .container-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }
  @media (max-width: 950px) {
     
    }
    @media (max-width: 600px) {
      .container-left {
        width: 100%;
    }
      .container-right {
        display: none;
    }
  }
`;