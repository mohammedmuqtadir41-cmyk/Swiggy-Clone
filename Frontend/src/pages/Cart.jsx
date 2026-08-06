import React from "react";
import "./page.css";

// Mocking items for demonstration. Replace with your state/props later.
const Cart = ({ items = [] }) => {
  const isCartEmpty = items.length === 0;

  // Calculate totals if items exist
  const itemTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = isCartEmpty ? 0 : 30;
  const platformFee = isCartEmpty ? 0 : 5;
  const grandTotal = itemTotal + deliveryFee + platformFee;

  return (
    <div className="cart-page-container">
      <div className="cart-layout">
        {isCartEmpty ? (
          // ================= EMPTY STATE =================
          <div className="empty-cart-card">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>
              Good food is always just a click away. Explore top-rated 
              restaurants near you and fill up your cart!
            </p>
            <button className="btn-primary">Browse Restaurants</button>
          </div>
        ) : (
          // ================= ACTIVE CART STATE =================
          <>
            {/* Left Side: Items List */}
            <div className="cart-main-content">
              <div className="cart-card">
                <h1 className="cart-title">Review Your Order</h1>
                <div className="items-list">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="item-info">
                        <span className={`veg-nonveg-icon ${item.isVeg ? "veg" : "non-veg"}`}></span>
                        <div>
                          <h4 className="item-name">{item.name}</h4>
                          <p className="item-price">₹{item.price}</p>
                        </div>
                      </div>
                      
                      {/* Quantity Controller */}
                      <div className="quantity-controller">
                        <button className="qty-btn">−</button>
                        <span className="qty-count">{item.quantity}</span>
                        <button className="qty-btn">+</button>
                      </div>
                      
                      <div className="item-total-price">
                        Reference: ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Bill Details Summary Sticky Sidebar */}
            <div className="cart-sidebar">
              <div className="cart-card summary-card">
                <h3>Bill Details</h3>
                
                <div className="bill-row">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="bill-row">
                  <span>Delivery Partner Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="bill-row">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                
                <hr className="divider" />
                
                <div className="bill-row grand-total">
                  <span>To Pay</span>
                  <span>₹{grandTotal}</span>
                </div>
                
                <button className="btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;