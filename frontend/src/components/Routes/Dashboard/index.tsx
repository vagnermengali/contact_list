import { StyledDashboard } from "./style"
import Header from "@/components/Complements/HeaderDashboard";
import DownloadButton from "@/components/Complements/DownloadButton";
import Contacts from "@/components/Complements/Contacts";

const Dashboardpage = () => {
  return (
    <>
      <Header />
      <StyledDashboard>
        <Contacts />
      </StyledDashboard>
      <DownloadButton />
    </>
  );
}

export default Dashboardpage;
