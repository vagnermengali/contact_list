import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  .container-input {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: .6rem;
  }
  .container-button {
    display: flex;
    width: 100%;
    align-items: center;
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
  .input {
    box-sizing: border-box;
    width: 100%;
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
    width: 100%;
    height: 3.5rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  .btn:hover {
    filter: brightness(110%);
  }

`;