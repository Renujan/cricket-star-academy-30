import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Users, Star, ChevronRight } from 'lucide-react';
import { programs } from '@/data/sampleData';
import programsOverviewImage from '@/assets/programs-overview.jpg';

const Programs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Cricket Training
            <span className="text-gradient block">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of cricket programs designed for every age group and skill level.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From beginners taking their first steps to advanced players honing their skills, we have the perfect program for everyone.
            </p>
            <div className="mt-8 relative">
              <img 
                src={programsOverviewImage} 
                alt="Cricket Training Programs Overview" 
                className="w-full h-64 object-cover rounded-2xl mx-auto max-w-4xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="card-elevated overflow-hidden group hover:border-primary transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-oswald font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-primary">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold">{program.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/registration" 
                    className="btn-hero w-full group/btn flex items-center justify-center"
                  >
                    Register Now
                    <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our programs include comprehensive training and support to help you excel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Expert Coaching</h3>
              <p className="text-muted-foreground text-sm">Professional coaches with international experience</p>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Modern Equipment</h3>
              <p className="text-muted-foreground text-sm">State-of-the-art training equipment and facilities</p>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Flexible Schedule</h3>
              <p className="text-muted-foreground text-sm">Multiple time slots to fit your busy schedule</p>
            </div>
            
            <div className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-oswald font-semibold text-lg mb-2">Great Value</h3>
              <p className="text-muted-foreground text-sm">Competitive pricing with payment plan options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="card-elevated p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              Ready to Start Your Cricket Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have improved their cricket skills with our expert coaching and comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration" className="btn-hero">
                Register Now
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;