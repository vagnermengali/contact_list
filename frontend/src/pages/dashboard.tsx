import DashboardPage from "@/components/Routes/Dashboard";
import SEO from "@/components/Complements/SEO"
import ModalContact from "@/components/Complements/ModalContact";
import ModalContactEdit from "@/components/Complements/ModalContactEdit";
import ModalProfile from "@/components/Complements/ModalProfile";

const Dashboard = () => {
  return (
    <>
      <SEO
        title="Dashboard • Dream House"
        description="Find here the long-awaited home of your dreams!"
      />
      <DashboardPage />
      <ModalContact/>
      <ModalContactEdit/>
      <ModalProfile/>
    </>
  )
}

export default Dashboard