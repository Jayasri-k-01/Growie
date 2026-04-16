import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';

const LandingPage = () => {
    useEffect(() => {
        // Initialize Feather icons after render if the script exists
        if (window.feather) {
            window.feather.replace();
        }

        // Scroll event for navbar
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = '';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(247, 250, 248, 0.95)';
                navLinks.style.padding = '1.5rem';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            }
        }
    };

    const handleSmoothScroll = (e) => {
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <div className="landing-page-wrapper">
            {/* Navbar */}
            <nav className="navbar">
                <div className="container nav-content">
                    <a href="#" className="logo" id="logo">
                        <i data-feather="leaf" className="logo-icon"></i>
                        Growie
                    </a>
                    <div className="nav-links">
                        <a href="#home" onClick={handleSmoothScroll}>Home</a>
                        <a href="#features" onClick={handleSmoothScroll}>Features</a>
                        <a href="#about" onClick={handleSmoothScroll}>About</a>
                        {/* 🔹 Replaced Login Anchor with React Router Link */}
                        <Link to="/login" className="nav-login">Login</Link>
                        <Link to="/register" className="btn btn-primary nav-cta">Get Started</Link>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero" id="home">
                <div className="container hero-content">
                    <div className="hero-text">
                        <div className="badge">
                            <span className="pulse-dot"></span> New: Connect your bank safely
                        </div>
                        <h1>Small savings.<br /><span className="highlight">Big future.</span></h1>
                        <p>Automatically save your spare change and watch your money grow with our smart tracking and automated growth algorithms.</p>
                        <div className="hero-actions">
                            <Link to="/register" className="btn btn-primary btn-large">
                                Get Started <i data-feather="arrow-right"></i>
                            </Link>
                            <a href="#about" className="btn btn-outline btn-large" onClick={handleSmoothScroll}>Learn More</a>
                        </div>
                        <div className="stats">
                            <div className="stat-item">
                                <strong>100k+</strong>
                                <span>Active Users</span>
                            </div>
                            <div className="stat-item">
                                <strong>$5M+</strong>
                                <span>Saved Weekly</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img src="C:/Users/JAYASRI/.gemini/antigravity/brain/d8866608-4f26-4544-a497-49a7cf1291d8/growie_illustration_1776095224075.png" alt="Savings Growth Illustration" className="illustration" />
                            <div className="floating-card fl-1">
                                <i data-feather="trending-up" className="green-icon"></i>
                                <div>
                                    <span>Daily Growth</span>
                                    <strong>+1.4%</strong>
                                </div>
                            </div>
                            <div className="floating-card fl-2">
                                <i data-feather="check-circle" className="green-icon"></i>
                                <div>
                                    <span>Goal Reached</span>
                                    <strong>Vacation Fund</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="container">
                    <div className="section-header">
                        <h2>Features designed for <span className="highlight">growth</span></h2>
                        <p>We make saving effortless so you can focus on enjoying life.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-box">
                                <i data-feather="pie-chart"></i>
                            </div>
                            <h3>Round-Up Savings</h3>
                            <p>Every time you make a purchase, we round up to the nearest dollar and invest the difference automatically.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box">
                                <i data-feather="activity"></i>
                            </div>
                            <h3>Smart Tracking</h3>
                            <p>Visualize your progress with intuitive dashboards. See exactly where your money goes and how fast it grows.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box">
                                <i data-feather="zap"></i>
                            </div>
                            <h3>Automated Growth</h3>
                            <p>Your money shouldn't sit idle. We seamlessly move your savings into high-yield avenues to outpace inflation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta" id="cta">
                <div className="container cta-container">
                    <div className="cta-content">
                        <h2>Ready to start growing?</h2>
                        <p>Join thousands of others building a secure financial future today.</p>
                        <div className="cta-actions">
                            <Link to="/register" className="btn btn-primary btn-large cta-shadow">Create Free Account</Link>
                        </div>
                    </div>
                    <div className="cta-circles"></div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <i data-feather="leaf" className="logo-icon"></i>
                            Growie
                        </a>
                        <p>Empowering a new generation to reach their financial goals without the stress.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                        </div>
                    </div>
                    <div className="footer-links-group">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Press</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <a href="#">Blog</a>
                            <a href="#">Help Center</a>
                            <a href="#">Financial Guides</a>
                            <a href="#">Community</a>
                        </div>
                        <div className="footer-col">
                            <h4>Legal</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom">
                    <p>&copy; 2026 Growie Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
