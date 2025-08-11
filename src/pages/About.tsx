import React from 'react';
import { Award, Target, Users, Heart } from 'lucide-react';
import { coaches } from '@/data/sampleData';
import academyHistoryImage from '@/assets/academy-history.jpg';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            About Our
            <span className="text-gradient block">Cricket Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Building champions through dedication, expertise, and passion for cricket since 2016.
          </p>
        </div>
      </section>

      {/* Academy History */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-oswald font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016 by former county cricket players, our academy was born from a simple vision: to provide world-class cricket training that develops not just skills, but character, teamwork, and a lifelong love for the game.
                </p>
                <p>
                  What started as a small local coaching program has grown into one of the region's most respected cricket academies. We've trained over 200 students, with many going on to represent their schools, counties, and some even achieving professional status.
                </p>
                <p>
                  Our success is built on three pillars: expert coaching, modern facilities, and a commitment to developing each player's unique potential. We believe that every student, regardless of their starting level, can achieve greatness with the right guidance and dedication.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={academyHistoryImage} 
                alt="Academy History" 
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-elevated p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-oswald font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide exceptional cricket coaching that develops technical skills, strategic thinking, and personal character. We aim to create confident, skilled players who excel both on and off the field.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Develop fundamental cricket skills</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Build confidence and teamwork</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Foster lifelong love for cricket</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-oswald font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be the premier cricket academy in the region, known for producing skilled, confident, and well-rounded cricketers who go on to achieve success at all levels of the game.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Regional excellence in cricket coaching</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Pathway to professional cricket</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Community cricket development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at our cricket academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from coaching quality to facility maintenance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Inclusivity</h3>
              <p className="text-muted-foreground">
                Cricket is for everyone. We welcome players of all backgrounds, ages, and skill levels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Our love for cricket drives us to inspire the same passion in every student we coach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Introduction */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">Meet Our Coaches</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced coaching team brings years of professional cricket experience and proven teaching methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="card-elevated p-6 text-center">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-32 h-40 object-cover rounded-lg mx-auto mb-6"
                />
                <h3 className="text-xl font-oswald font-semibold mb-2">{coach.name}</h3>
                <p className="text-primary font-medium mb-3">{coach.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{coach.bio}</p>
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {coach.experience}
                  </span>
                  <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    {coach.specialization}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;