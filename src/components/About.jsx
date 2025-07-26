import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="hero-section">
                <h1>Welcome to Foodie</h1>
                <p className="tagline">Delivering Happiness, One Meal at a Time</p>
            </div>

            <div className="content-section">
                <div className="about-card">
                    <div className="card-icon">🍽️</div>
                    <h2>Our Story</h2>
                    <p>Founded in 2023, Foodie has been connecting food lovers with their favorite restaurants. 
                    We believe that good food has the power to bring people together and create lasting memories.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Fast Delivery</h3>
                        <p>30 minutes or less delivery guarantee for local restaurants</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🏆</div>
                        <h3>Top Restaurants</h3>
                        <p>Partnered with over 100+ premium restaurants in your city</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💫</div>
                        <h3>Best Quality</h3>
                        <p>Strict quality checks and restaurant hygiene standards</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💝</div>
                        <h3>Special Offers</h3>
                        <p>Regular discounts and special deals for our loyal customers</p>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stat-card">
                        <h3>100+</h3>
                        <p>Restaurants</p>
                    </div>
                    <div className="stat-card">
                        <h3>50,000+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-card">
                        <h3>500+</h3>
                        <p>Daily Orders</p>
                    </div>
                    <div className="stat-card">
                        <h3>4.8⭐</h3>
                        <p>Average Rating</p>
                    </div>
                </div>

                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>To revolutionize food delivery by providing a seamless, reliable, and delightful experience 
                    for both customers and restaurant partners. We're committed to supporting local businesses 
                    while bringing the best food options to your doorstep.</p>
                </div>

                <div className="contact-section">
                    <h2>Get in Touch</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <p>1800-FOODIE</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📧</span>
                            <p>support@foodie.com</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <p>123 Food Street, Cuisine City</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;