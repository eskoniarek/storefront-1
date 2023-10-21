import FeaturedProducts from "@modules/home/components/featured-products"
import Body from "@modules/home/components/body"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the Print Inc.. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <Body />
      <FeaturedProducts />
    </>
  )
}

export default Home
