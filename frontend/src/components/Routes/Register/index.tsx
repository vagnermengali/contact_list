import FormRegister from "./Form";
import { motion } from "framer-motion";
import Header from "@/components/Complements/Header";
import { StyledRegisterSection } from "./style";


const Register = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledRegisterSection>
        <Header />
        <div className="container">
          <div className="container-left">
            <div className="content-up">
              <h1>
                Don't waste time and <span>come join us.</span></h1>
              <FormRegister />
            </div>
          </div>
          <div className="container-right">
          </div>
        </div>
      </StyledRegisterSection>
    </motion.div>
  );
}

export default Register;