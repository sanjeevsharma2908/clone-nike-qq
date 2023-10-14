const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        YOUR FEET 
DESERVE
THE BEST
YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.

        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="brand-icon">
            <p>Also Available On</p>
            <img src="/images/flipkart.png" alt="flip-logo" />
            <img src="/images/amazon.png" alt="amz-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt=""/>
      </div>
    </main>
  );
};
export default Hero;