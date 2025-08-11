import React, { useState } from 'react';
import { Filter, Mail, Phone } from 'lucide-react';
import { coaches, staff } from '@/data/sampleData';

const Staff = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const allStaff = [
    ...coaches.map(coach => ({ ...coach, category: 'coach' })),
    ...staff
  ];

  const filteredStaff = activeFilter === 'all' 
    ? allStaff 
    : allStaff.filter(member => member.category === activeFilter);

  const filterOptions = [
    { value: 'all', label: 'All Staff' },
    { value: 'coach', label: 'Coaches' },
    { value: 'admin', label: 'Administration' },
    { value: 'support', label: 'Support Staff' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Our Expert
            <span className="text-gradient block">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals who make our cricket academy a place of excellence and growth.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding border-b border-border">
        <div className="container-width">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-oswald font-bold text-foreground mb-2">
                Our Team Members
              </h2>
              <p className="text-muted-foreground">
                Filter by role to find specific team members
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setActiveFilter(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeFilter === option.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStaff.map((member) => (
              <div key={`${member.category}-${member.id}`} className="card-elevated overflow-hidden group">
                <div className="relative h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-3">
                        <button className="w-10 h-10 bg-secondary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                          <Mail className="w-5 h-5 text-secondary-foreground" />
                        </button>
                        <button className="w-10 h-10 bg-secondary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                          <Phone className="w-5 h-5 text-secondary-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {member.category === 'coach' ? 'Coach' : 
                       member.category === 'admin' ? 'Admin' : 'Support'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-oswald font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  
                  {member.category === 'coach' ? (
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {(member as any).bio}
                      </p>
                      <div className="flex justify-between text-xs">
                        <span className="bg-muted text-muted-foreground px-2 py-1 rounded">
                          {(member as any).experience}
                        </span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                          {(member as any).specialization}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {(member as any).description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredStaff.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No staff members found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="card-elevated p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Are you passionate about cricket and working with young athletes? We're always looking for 
              dedicated professionals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero">
                Contact Us
              </a>
              <a href="mailto:careers@cricketacademy.com" className="btn-outline">
                Send Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Our Team Culture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes our team special and why we love working together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We work together as a unified team, sharing knowledge and supporting each other's growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do and continuously improve our skills and methods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-oswald font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Our love for cricket and student development drives everything we do at the academy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;