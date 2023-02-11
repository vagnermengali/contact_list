import SEO from "@/components/Complements//SEO"
import Register from "@/components/Routes/Register"

const Home = () => {
  return (
    <>
      <SEO
        title="Welcome to the Dream House"
        description="Find here the long-awaited home of your dreams!"
      />
      <Register/>
    </>
  )
}

export default Home