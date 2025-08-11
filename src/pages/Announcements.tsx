import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { announcements } from '@/data/sampleData';

const Announcements = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'registration':
        return 'bg-blue-100 text-blue-800';
      case 'achievement':
        return 'bg-green-100 text-green-800';
      case 'facilities':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Academy
            <span className="text-gradient block">Announcements</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, events, and important announcements from our cricket academy.
          </p>
        </div>
      </section>

      {/* Announcements List */}
      <section className="section-padding">
        <div className="container-width">
          <div className="space-y-8">
            {announcements.map((announcement) => (
              <article key={announcement.id} className="card-elevated p-8 hover:border-primary transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        {new Date(announcement.date).toLocaleDateString('en-US', { 
                          year: 'numeric',
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)} mt-1`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-oswald font-bold text-foreground">
                    {announcement.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {announcement.summary}
                  </p>
                  <Link 
                    to={`/announcements/${announcement.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="card-elevated p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss out on important updates, event announcements, and academy news. Join our community today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration" className="btn-hero">
                Join Academy
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

export default Announcements;