import styled from "styled-components";
import background_register from "@/assets/image/background/bg1.jpg";

export const StyledRegisterSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_register});
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
    color: var(--grey4);
  }
  .container-left .content-up span {
    font-weight: 700;
    font-size: 28px;
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
    justify-content: flex-end;
      .container-left {
        width: 100%;
    }
      .container-left .content-up h1 {
        font-size: 16px;
 
    }
      .container-left .content-up span {
        font-size: 16px;
    }
    }
    @media (max-width: 600px) {
      justify-content: flex-end;
      .container-left {
        width: 100%;
    }
      .container-right {
        display: none;
    }
      .container-left .content-up h1 {
        font-size: 16px;
 
    }
      .container-left .content-up span {
        font-size: 16px;
    }
  }
`;