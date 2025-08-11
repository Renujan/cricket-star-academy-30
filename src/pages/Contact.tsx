import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Get In
            <span className="text-gradient block">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs? Want to schedule a visit? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-6PM</p>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">info@cricketacademy.com</p>
              <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground mb-2">123 Cricket Lane</p>
              <p className="text-sm text-muted-foreground">Sports City, SC 12345</p>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Hours</h3>
              <p className="text-muted-foreground mb-2">Mon-Sat: 9AM-6PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elevated p-8">
              <h2 className="text-3xl font-oswald font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="program-inquiry">Program Inquiry</option>
                    <option value="registration">Registration Question</option>
                    <option value="scheduling">Scheduling</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-hero w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="card-elevated p-6">
                <h3 className="text-xl font-oswald font-bold text-foreground mb-4">Find Us</h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Interactive Map</p>
                    <p className="text-muted-foreground text-sm">123 Cricket Lane, Sports City, SC 12345</p>
                    <button className="mt-4 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium">
                      Get Directions →
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="card-elevated p-6">
                <h3 className="text-xl font-oswald font-bold text-foreground mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Emergency Contact</h4>
                    <p className="text-muted-foreground text-sm">(555) 123-4568</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Registration Office</h4>
                    <p className="text-muted-foreground text-sm">registration@cricketacademy.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Programs Director</h4>
                    <p className="text-muted-foreground text-sm">programs@cricketacademy.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Media Inquiries</h4>
                    <p className="text-muted-foreground text-sm">media@cricketacademy.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-oswald font-bold text-foreground mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay connected and see our latest updates, training sessions, and student achievements.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://facebook.com/cricketacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Facebook className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
                Facebook
              </p>
            </a>
            
            <a 
              href="https://instagram.com/cricketacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Instagram className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
                Instagram
              </p>
            </a>
            
            <a 
              href="https://youtube.com/cricketacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Youtube className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
                YouTube
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Don't see your question? Contact us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated p-6">
              <h3 className="font-oswald font-semibold text-lg mb-3">What age groups do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We welcome students from ages 6 to 18, with programs tailored for different age groups and skill levels.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="font-oswald font-semibold text-lg mb-3">Do I need my own equipment?</h3>
              <p className="text-muted-foreground text-sm">
                No, we provide all necessary training equipment. Students are welcome to bring their own gear if preferred.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="font-oswald font-semibold text-lg mb-3">How do I register for programs?</h3>
              <p className="text-muted-foreground text-sm">
                You can register online through our registration page or visit our facility. We recommend booking early as spots fill quickly.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="font-oswald font-semibold text-lg mb-3">What is your cancellation policy?</h3>
              <p className="text-muted-foreground text-sm">
                We offer full refunds for cancellations made 48 hours before program start. Partial refunds available for medical reasons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;