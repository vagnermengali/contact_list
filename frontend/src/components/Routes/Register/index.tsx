import FormRegister from "./Form";
import Header from "@/components/Complements/Header";
import { StyledRegisterSection } from "./style";


const Register = () => {

  return (
      <StyledRegisterSection>
        <Header />
        <div className="container">
          <div className="container-left">
            <div className="content-up">
              <h1>Dont waste time and <span> come join us</span></h1>
              <FormRegister />
            </div>
          </div>
          <div className="container-right">
          </div>
        </div>
      </StyledRegisterSection>
  );
}

export default Register;