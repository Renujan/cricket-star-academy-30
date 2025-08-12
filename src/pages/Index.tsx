import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Star, Users, Target, Award } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import YouTubeVideoSection from '@/components/YouTubeVideoSection';
import { events, testimonials } from '@/data/sampleData';
import trainingImage from '@/assets/training-session.jpg';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* YouTube Videos Section */}
      <YouTubeVideoSection />

      {/* Quick About Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground">
                  Why Choose Our
                  <span className="text-gradient block">Cricket Academy?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With 8 years of excellence in cricket coaching, we've helped over 200 students develop their skills and passion for the game. Our professional coaches and modern facilities provide the perfect environment for growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card-feature">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-oswald font-semibold text-lg mb-2">Expert Coaching</h3>
                  <p className="text-sm text-muted-foreground">Professional coaches with international experience</p>
                </div>
                <div className="card-feature">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-oswald font-semibold text-lg mb-2">All Skill Levels</h3>
                  <p className="text-sm text-muted-foreground">Programs designed for beginners to advanced players</p>
                </div>
              </div>
              
              <Link to="/about" className="btn-hero inline-flex items-center">
                Learn More About Us
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
                <img 
                  src={trainingImage} 
                  alt="Cricket Academy Training Session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                <Award className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to begin your cricket journey? Explore our programs, register for classes, or stay updated with our latest news.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/registration" className="card-elevated p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-oswald font-semibold text-xl mb-3">Registration</h3>
              <p className="text-muted-foreground mb-4">Join our academy and start your cricket journey with professional coaching.</p>
              <span className="text-primary font-medium">Register Now →</span>
            </Link>
            
            <Link to="/programs" className="card-elevated p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Target className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-oswald font-semibold text-xl mb-3">Programs</h3>
              <p className="text-muted-foreground mb-4">Explore our comprehensive cricket programs for all ages and skill levels.</p>
              <span className="text-primary font-medium">View Programs →</span>
            </Link>
            
            <Link to="/announcements" className="card-elevated p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Calendar className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-oswald font-semibold text-xl mb-3">Announcements</h3>
              <p className="text-muted-foreground mb-4">Stay updated with latest news, events, and important announcements.</p>
              <span className="text-primary font-medium">Read More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">Don't miss out on these exciting cricket events!</p>
            </div>
            <Link to="/announcements" className="btn-outline hidden md:inline-flex">
              View All Events
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="card-elevated p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-xs text-muted-foreground">{event.venue}</div>
                  </div>
                </div>
                <h3 className="font-oswald font-semibold text-lg mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{event.description}</p>
                <Link to="/announcements" className="text-primary font-medium text-sm hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/announcements" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our students and parents about their experience at our cricket academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className="card-elevated p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline">
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;