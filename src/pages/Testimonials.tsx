import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/sampleData';
import testimonialsHappyImage from '@/assets/testimonials-happy.jpg';

const Testimonials = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Student
            <span className="text-gradient block">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Hear what our students and parents have to say about their experience at our cricket academy.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`card-elevated p-8 ${index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-oswald font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Moments */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-oswald font-bold text-foreground">
                Happy Students & Families
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nothing brings us more joy than seeing our students and their families celebrate achievements together. 
                Our academy has become a second home for many families, creating lasting friendships and unforgettable memories.
              </p>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-oswald font-bold text-foreground mb-4">
                  Our Impact in Numbers
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  These numbers reflect the positive impact we've had on our cricket community.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={testimonialsHappyImage} 
                alt="Happy Students and Families" 
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-oswald font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-oswald font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-oswald font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-oswald font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Testimonial */}
      <section className="section-padding">
        <div className="container-width">
          <div className="card-elevated p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <Quote className="w-16 h-16 text-primary mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-oswald font-semibold text-foreground mb-8 leading-relaxed">
              "This academy has transformed my daughter's confidence and skill level. The coaches are professional, caring, and truly invested in each child's development."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonialsHappyImage} 
                alt="Featured Testimonial"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">Rachel Martinez</div>
                <div className="text-muted-foreground">Parent of Academy Student</div>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
            Ready to Create Your Own
            <span className="text-gradient block">Success Story?</span>
          </h2>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join our cricket academy and become part of our growing community of successful players and satisfied families.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/registration" className="btn-hero">
              Join Our Academy
            </a>
            <a href="/contact" className="btn-outline bg-secondary-foreground/10 backdrop-blur-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;