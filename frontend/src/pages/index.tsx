import SEO from "@/components/Complements//SEO"
import HomePage from "@/components/Routes/HomePage"

const Home = () => {
  return (
    <>
      <SEO
        title="Welcome to the Dream House"
        description="Find here the long-awaited home of your dreams!"
      />
      <HomePage/>
    </>
  )
}

export default Home