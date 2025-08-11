import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { announcements } from '@/data/sampleData';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcement = announcements.find(a => a.id === parseInt(id || ''));

  if (!announcement) {
    return (
      <div className="section-padding">
        <div className="container-width text-center">
          <h1 className="text-4xl font-oswald font-bold text-foreground mb-4">
            Announcement Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The announcement you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/announcements" className="btn-hero">
            Back to Announcements
          </Link>
        </div>
      </div>
    );
  }

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
      {/* Back Navigation */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <Link 
            to="/announcements" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Announcements
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-width max-w-4xl mx-auto">
          <article className="space-y-8">
            {/* Header */}
            <header className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
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
                <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-oswald font-bold text-foreground leading-tight">
                {announcement.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {announcement.summary}
              </p>
            </header>

            {/* Featured Image */}
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
              <img 
                src="/api/placeholder/800/400" 
                alt={announcement.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed space-y-6">
                {announcement.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Published on {new Date(announcement.date).toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link to="/contact" className="btn-outline">
                    Contact Us
                  </Link>
                  <Link to="/registration" className="btn-hero">
                    Join Academy
                  </Link>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <h2 className="text-3xl font-oswald font-bold text-foreground mb-8 text-center">
            Related Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {announcements
              .filter(a => a.id !== announcement.id)
              .slice(0, 2)
              .map((relatedAnnouncement) => (
                <Link 
                  key={relatedAnnouncement.id}
                  to={`/announcements/${relatedAnnouncement.id}`}
                  className="card-elevated p-6 hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        {new Date(relatedAnnouncement.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(relatedAnnouncement.category)} mt-1`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {relatedAnnouncement.category}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-oswald font-semibold text-lg mb-3">{relatedAnnouncement.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{relatedAnnouncement.summary}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnouncementDetail;