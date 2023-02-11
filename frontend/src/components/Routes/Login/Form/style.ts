import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  .container-input {
    display: flex;
    flex-direction: column;
    gap: .6rem;
  }
  .container-button {
    display: flex;
    align-items: center;
    gap: 2.8125rem;
  }
  .link {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--brand1);
    text-decoration: none;
    :hover {
      filter: brightness(110%);
    }
  }
  .link-signup {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--brand1);
    text-decoration: none;
    margin-top: 1.875rem;
    :hover {
      filter: brightness(110%);
    }
  }
  .label {
    color: var(--grey1);
    font-size: .8125rem;
    font-weight: 700;
  }
  .error {
    min-height:1.25rem;
    color: var(--grey2);
    font-size: .6875rem;
    margin-top: .625rem;
  }
  .no-error {
    min-height:1.25rem;
    font-size: .6875rem;
    margin-top: .625rem;
  }
  .input-email {
    box-sizing: border-box;
    width: 60%;
    height: 3rem;
    border: .0625rem solid var(--grey1);
    border-radius: .125rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    padding-left: 1.25rem;
    background-color: transparent;
    color: var(--grey2);
    outline: none;
  }
  .input-password {
    box-sizing: border-box;
    width: 60%;
    height: 3rem;
    border: .0625rem solid var(--grey1);
    border-radius: .125rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    padding-left: 1.25rem;
    background-color: transparent;
    color: var(--grey2);
    outline: none;
  }
  .btn {
    padding: 1.25rem 1.5rem;
    border: none;
    outline: none;
    color: var(--white);
    background: var(--brand2);
    border-radius: .125rem;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    width: 30%;
    height: 3.5rem;
    margin-top: 1.875rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  .btn:hover {
    filter: brightness(110%);
  }
  @media (max-width: 950px) {
    .container-button {
      width: 100%;
    }
    .input-email {
      width: 100%;
  }
    .input-password {
      width: 100%;
    }
    .container-button {
      width: 100%;
      gap: 2rem;
    }
    .btn {
      padding: 1.25rem 1.5rem;
      border: none;
      outline: none;
      color: var(--white);
      background: var(--brand2);
      border-radius: .125rem;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1rem;
      width: 50%;
      height: 3.5rem;
      margin-top: 1.875rem;
      box-sizing: border-box;
      cursor: pointer;
    }
    .link-signup {
      width: 50%;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    .container-button {
      width: 100%;
    }
    .input-email {
      width: 100%;
  }
    .input-password {
      width: 100%;
    }
    .container-button {
      width: 100%;
      gap: 2rem;
    }
    .btn {
      padding: 1.25rem 1.5rem;
      border: none;
      outline: none;
      color: var(--white);
      background: var(--brand2);
      border-radius: .125rem;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1rem;
      width: 50%;
      height: 3.5rem;
      margin-top: 1.875rem;
      box-sizing: border-box;
      cursor: pointer;
    }
    .link-signup {
      width: 50%;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  }
`;