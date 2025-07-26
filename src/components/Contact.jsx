import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: 'general',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you! Reach out for any questions, suggestions, or support.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info-section">
                    <div className="contact-card">
                        <div className="icon">📞</div>
                        <h3>Call Us</h3>
                        <p>1800-FOODIE</p>
                        <p className="time">Available 24/7</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon">💬</div>
                        <h3>Live Chat</h3>
                        <p>Chat with our support team</p>
                        <p className="time">Response time: 2 mins</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon">📧</div>
                        <h3>Email Us</h3>
                        <p>support@foodie.com</p>
                        <p className="time">We reply within 24 hours</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="general">General Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="feedback">Feedback</option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Type your message here..."
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="location-section">
                    <h2>Visit Us</h2>
                    <div className="location-card">
                        <div className="icon">📍</div>
                        <div className="location-details">
                            <h3>Main Office</h3>
                            <p>123 Food Street, Cuisine City</p>
                            <p>Open Monday - Friday</p>
                            <p>9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;