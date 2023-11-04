const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 sm:p-16 lg:p-32">
      <section className="mb-12 w-full max-w-prose text-center">
        <h1 className="text-2xl font-semibold mb-4">About Us</h1>
        <p className="text-base leading-relaxed">
          Welcome to Printinc.shop, your go-to destination for print-ready graphics. Our aim is to provide a seamless experience for digital artists and customers alike, ensuring high-quality, unique designs that are easily accessible and ready to use.
        </p>
        <p className="text-base leading-relaxed mt-4">
          We are committed to providing exceptional customer service and ensuring your satisfaction with every purchase. Thank you for choosing Printinc.
        </p>
      </section>

      <section className="w-full max-w-prose text-center">
        <h1 className="text-2xl font-semibold mb-4">Our Story</h1>
        <p className="text-base leading-relaxed">
          Printinc.shop was born out of a love for design and a desire to simplify the process of finding and purchasing digital graphics. We believe in the power of print to bring ideas to life, and we are here to make that process as easy and enjoyable as possible.
        </p>
        <p className="text-base leading-relaxed mt-4">
          Our curated collection of print-ready graphics is designed to cater to a wide range of tastes and needs, ensuring that no matter your project, Printinc.shop has something for you.
        </p>
      </section>
    </div>
  )
}

export default Body;
