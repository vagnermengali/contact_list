import SEO from "@/components/Complements//SEO"
import Login from "@/components/Routes/Login"

const Home = () => {
  return (
    <>
      <SEO
        title="Welcome to the Dream House"
        description="Find here the long-awaited home of your dreams!"
      />
      <Login/>
    </>
  )
}

export default Home