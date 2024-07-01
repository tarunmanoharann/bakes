// src/components/DefaultProducts.js
import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/defaultproducts.css';

const productCategories = [
  {
    category: "Cakes",
    products: [
      { id: 1, name: "Chocolate Delight", image: "chocolate-cake.jpg", soldLast10Days: 25, originalPrice: 35, discountedPrice: 30 },
      { id: 2, name: "Vanilla Dream", image: "vanilla-cake.jpg", soldLast10Days: 20, originalPrice: 32, discountedPrice: 28 },
      { id: 3, name: "Strawberry Bliss", image: "strawberry-cake.jpg", soldLast10Days: 18, originalPrice: 34, discountedPrice: 29 },
      { id: 4, name: "Red Velvet", image: "red-velvet-cake.jpg", soldLast10Days: 22, originalPrice: 36, discountedPrice: 31 },
      { id: 5, name: "Lemon Zest", image: "lemon-cake.jpg", soldLast10Days: 15, originalPrice: 33, discountedPrice: 28 },
    ]
  },
  {
    category: "Cupcakes",
    products: [
      { id: 6, name: "Chocolate Chip", image: "chocolate-chip-cupcake.jpg", soldLast10Days: 40 },
      { id: 7, name: "Vanilla Swirl", image: "vanilla-swirl-cupcake.jpg", soldLast10Days: 35 },
      { id: 8, name: "Blueberry Burst", image: "blueberry-cupcake.jpg", soldLast10Days: 30 },
      { id: 9, name: "Caramel Delight", image: "caramel-cupcake.jpg", soldLast10Days: 38 },
      { id: 10, name: "Mint Chocolate", image: "mint-chocolate-cupcake.jpg", soldLast10Days: 28 },
    ]
  },
  {
    category: "Cookies",
    products: [
      { id: 11, name: "Chocolate Chip", image: "chocolate-chip-cookie.jpg", soldLast10Days: 60 },
      { id: 12, name: "Oatmeal Raisin", image: "oatmeal-raisin-cookie.jpg", soldLast10Days: 45 },
      { id: 13, name: "Peanut Butter", image: "peanut-butter-cookie.jpg", soldLast10Days: 50 },
      { id: 14, name: "Sugar Cookie", image: "sugar-cookie.jpg", soldLast10Days: 55 },
      { id: 15, name: "Double Chocolate", image: "double-chocolate-cookie.jpg", soldLast10Days: 48 },
    ]
  }
];

const ProductRow = ({ category, products }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScroll();


    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const handleOrderClick = (product) => {
    const whatsappNumber = "6380255375";
    const message = encodeURIComponent(`I'd like to order the ${product.name} for $${product.discountedPrice}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="product-row">
      <h3>{category}</h3>
      <div 
        className="product-scroll" 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.soldLast10Days} sold in last 10 days</p>
            <div className="price">
              <span className="original-price">${product.originalPrice}</span>
              <span className="discounted-price">${product.discountedPrice}</span>
            </div>
            <button className="order-button" onClick={() => handleOrderClick(product)}>Place Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};


const DefaultProducts = () => {
  return (
    <section className="default-products">
      <div className="tagline">
        <h2>Celebrate Life's Sweet Moments With Us</h2>
        <p>From festivals to everyday joys, we've got the perfect treat for every occasion</p>
      </div>
      <h3 className="section-title">Our Popular Products</h3>
      {productCategories.map((category, index) => (
        <ProductRow key={index} category={category.category} products={category.products} />
      ))}
    </section>
  );
};

export default DefaultProducts;