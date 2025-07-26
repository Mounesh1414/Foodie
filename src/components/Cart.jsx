import { useState } from 'react';
import './Cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Butter Chicken",
            price: 299,
            quantity: 1,
            category: "Main Course",
            description: "Rich and creamy chicken curry with butter and tomato gravy",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rfngxpkeqgh8hsuikqeh"
        },
        {
            id: 2,
            name: "Paneer Tikka",
            price: 249,
            quantity: 2,
            category: "Starters",
            description: "Grilled cottage cheese with spices and vegetables",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ved5a7gqpmrmpkpfapub"
        },
        {
            id: 3,
            name: "Veg Biryani",
            price: 199,
            quantity: 1,
            category: "Rice",
            description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rk6ptfpi8tmxqy3pwhdk"
        },
        {
            id: 4,
            name: "Gulab Jamun",
            price: 99,
            quantity: 3,
            category: "Desserts",
            description: "Sweet milk solids dumplings soaked in rose flavored sugar syrup",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ls6f8aoqm3wuxtqtp1b9"
        }
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items => 
            items.map(item => 
                item.id === id 
                    ? { ...item, quantity: Math.max(0, item.quantity + change) }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <img src="/food-icon.svg" alt="Empty Cart" className="empty-cart-icon" />
                    <p>Your cart is empty</p>
                    <button className="continue-shopping">Continue Shopping</button>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <div className="item-header">
                                        <h3>{item.name}</h3>
                                        <span className="category-tag">{item.category}</span>
                                    </div>
                                    <p className="item-description">{item.description}</p>
                                    <p className="price">₹{item.price}</p>
                                </div>
                                <div className="quantity-controls">
                                    <button 
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="quantity-btn"
                                    >
                                        −
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="quantity-btn"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-total">
                                    <div className="total-label">Total</div>
                                    <div className="total-amount">₹{item.price * item.quantity}</div>
                                </div>
                                <button 
                                    onClick={() => updateQuantity(item.id, -item.quantity)}
                                    className="remove-item"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>₹{getTotalAmount()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery Fee:</span>
                            <span>₹40</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>₹{getTotalAmount() + 40}</span>
                        </div>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;