const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-left">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          Elevate your every stride with shoes that pamper your feet and style.
           Discover a shoe collection
          that's as unique as you are, tailored to your comfort and fashion
          needs.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="available-on">
          <p>Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="./images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="shoe-image" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
