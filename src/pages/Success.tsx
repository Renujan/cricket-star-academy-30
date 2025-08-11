import React from 'react';
import { Trophy, Users, Target, Award, Calendar, TrendingUp, Star, Quote } from 'lucide-react';
import { statistics, galleryImages, testimonials } from '@/data/sampleData';
import successCelebrationImage from '@/assets/success-celebration.jpg';
import testimonialsHappyImage from '@/assets/testimonials-happy.jpg';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedCard from '@/components/AnimatedCard';

const Success = () => {
  const achievements = [
    {
      year: "2024",
      title: "Regional Championship Winners",
      description: "Our U-16 team won the Regional Youth Cricket Championship",
      icon: Trophy
    },
    {
      year: "2023",
      title: "Academy of the Year",
      description: "Recognized as the best cricket academy in the district",
      icon: Award
    },
    {
      year: "2022",
      title: "200+ Students Milestone",
      description: "Reached 200 active students across all programs",
      icon: Users
    },
    {
      year: "2021",
      title: "Professional Player Development",
      description: "First academy graduate signed with professional team",
      icon: Target
    }
  ];

  return (
    <div>
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        backgroundImage={successCelebrationImage}
        speed={0.4}
        className="section-padding"
      >
        <div className="container-width text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6 text-white">
              Our Success
              <span className="text-gradient-accent block float">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Celebrating achievements, milestones, and the incredible journey of our cricket academy over the years.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Statistics Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Success in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These numbers tell the story of our commitment to excellence and student development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <AnimatedCard 
                key={index} 
                variant="morph" 
                className="p-8 text-center"
                delay={index * 150}
              >
                <div className="text-5xl md:text-6xl font-oswald font-bold text-primary mb-4 shimmer float">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">{stat.label}</div>
                <div className="w-12 h-1 bg-primary mx-auto rounded-full hover-glow"></div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Timeline of Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones and achievements that have shaped our academy's journey to excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <AnimatedCard variant="glass" className="p-8" delay={index * 200}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center float">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-oswald font-bold text-primary shimmer">
                          {achievement.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </AnimatedCard>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background z-10 my-4"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Success Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of triumph, training, and team spirit at our cricket academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group">
              <img 
                src={successCelebrationImage} 
                alt="Championship Victory"
                className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-secondary-foreground">
                  <div className="text-sm font-medium">Championship Victory</div>
                </div>
              </div>
            </div>
            {galleryImages.slice(1).map((image, index) => (
              <div 
                key={index + 1} 
                className="relative overflow-hidden rounded-xl group"
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 2}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-secondary-foreground">
                    <div className="text-sm font-medium">
                      {index === 0 ? 'Training Session' :
                       index === 1 ? 'Team Building' :
                       index === 2 ? 'Awards Ceremony' :
                       index === 3 ? 'Practice Match' : 'Academy Event'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by various cricket organizations and educational institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Excellence in Coaching</h3>
              <p className="text-muted-foreground">
                Recognized for outstanding coaching methodology and student development programs.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Community Impact</h3>
              <p className="text-muted-foreground">
                Honored for significant contribution to local cricket development and youth engagement.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Growth Achievement</h3>
              <p className="text-muted-foreground">
                Acknowledged for consistent growth and positive impact on student athletic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Student Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our students and parents have to say about their experience at MVP Cricket Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard 
                key={testimonial.id} 
                variant="glass"
                className="p-8"
                delay={index * 150}
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
              </AnimatedCard>
            ))}
          </div>

          {/* Happy Students & Families */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-oswald font-bold text-foreground">
                Happy Students & Families
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nothing brings us more joy than seeing our students and their families celebrate achievements together. 
                Our academy has become a second home for many families, creating lasting friendships and unforgettable memories.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Awards Won</div>
                </div>
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

          {/* Featured Testimonial */}
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

      {/* Future Goals */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="card-elevated p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              Looking Ahead
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our success story continues to evolve. We're committed to expanding our programs, enhancing our facilities, 
              and helping even more students achieve their cricket dreams. Join us as we build the next chapter of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/registration" className="btn-hero">
                Be Part of Our Success
              </a>
              <a href="/programs" className="btn-outline">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;