import FeaturedProducts from "@modules/home/components/featured-products"
import Body from "@modules/home/components/body"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the Print Inc.. Instant Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Body />
    </>
  )
}

export default Home
