import React, { useState } from 'react';
import { Shield, Eye, Cookie, FileText, ChevronDown, ChevronRight } from 'lucide-react';

const Policies = () => {
  const [activeSection, setActiveSection] = useState('terms');

  const sections = [
    {
      id: 'terms',
      title: 'Terms of Service',
      icon: FileText,
      content: {
        lastUpdated: 'March 1, 2024',
        sections: [
          {
            title: 'Acceptance of Terms',
            content: 'By enrolling in our cricket academy programs, you agree to abide by these terms and conditions. These terms constitute a legally binding agreement between you and Cricket Academy.'
          },
          {
            title: 'Academy Services',
            content: 'We provide cricket coaching, training facilities, and related services. All services are subject to availability and may be modified with reasonable notice.'
          },
          {
            title: 'Student Conduct',
            content: 'Students are expected to maintain respectful behavior, follow safety guidelines, and treat all staff, students, and facilities with care and respect.'
          },
          {
            title: 'Payment Terms',
            content: 'Program fees are due before the start of each session. Late payments may result in suspension from programs. Refunds are available according to our refund policy.'
          },
          {
            title: 'Liability and Safety',
            content: 'While we maintain high safety standards, cricket involves inherent risks. Participants engage in activities at their own risk and must follow all safety guidelines.'
          },
          {
            title: 'Intellectual Property',
            content: 'All coaching materials, methods, and academy content are proprietary. Students may not record or distribute academy content without written permission.'
          }
        ]
      }
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: Eye,
      content: {
        lastUpdated: 'March 1, 2024',
        sections: [
          {
            title: 'Information We Collect',
            content: 'We collect personal information necessary for providing our services, including contact details, medical information, emergency contacts, and payment information.'
          },
          {
            title: 'How We Use Information',
            content: 'Your information is used to provide coaching services, communicate important updates, process payments, and ensure student safety and program effectiveness.'
          },
          {
            title: 'Information Sharing',
            content: 'We do not sell or share personal information with third parties except as necessary for service delivery (payment processing, emergency contacts) or as required by law.'
          },
          {
            title: 'Data Security',
            content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
          },
          {
            title: 'Your Rights',
            content: 'You have the right to access, update, or request deletion of your personal information. Contact us to exercise these rights or for any privacy concerns.'
          },
          {
            title: 'Children\'s Privacy',
            content: 'For students under 18, we require parental consent and only collect information necessary for coaching and safety purposes.'
          }
        ]
      }
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: Cookie,
      content: {
        lastUpdated: 'March 1, 2024',
        sections: [
          {
            title: 'What Are Cookies',
            content: 'Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our site is used.'
          },
          {
            title: 'Types of Cookies',
            content: 'We use essential cookies for site functionality, performance cookies to improve our service, and analytics cookies to understand user behavior.'
          },
          {
            title: 'Cookie Management',
            content: 'You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality and your user experience.'
          },
          {
            title: 'Third-Party Cookies',
            content: 'We may use third-party services like Google Analytics that place their own cookies. These are governed by the respective third party\'s privacy policies.'
          },
          {
            title: 'Updates to Cookie Policy',
            content: 'We may update this cookie policy to reflect changes in technology or legal requirements. We will notify users of significant changes.'
          }
        ]
      }
    }
  ];

  const activeContent = sections.find(section => section.id === activeSection);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            Academy
            <span className="text-gradient block">Policies</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Our commitment to transparency, privacy, and clear guidelines for all academy members.
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="card-elevated p-6 sticky top-8">
                <h3 className="font-oswald font-bold text-lg mb-4 text-foreground">Policy Sections</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <section.icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform duration-200 ${
                        activeSection === section.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {activeContent && (
                <div className="card-elevated p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <activeContent.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-oswald font-bold text-foreground">
                        {activeContent.title}
                      </h1>
                      <p className="text-muted-foreground text-sm">
                        Last updated: {activeContent.content.lastUpdated}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {activeContent.content.sections.map((section, index) => (
                      <div key={index} className="border-l-4 border-primary/20 pl-6">
                        <h2 className="text-xl font-oswald font-semibold text-foreground mb-3">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="card-elevated p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
              Questions About Our Policies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you have any questions about our terms, privacy practices, or cookie usage, 
              please don't hesitate to contact us. We're here to help and ensure transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero">
                Contact Us
              </a>
              <a href="mailto:legal@cricketacademy.com" className="btn-outline">
                Email Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Quick Reference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key points from our policies for easy reference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-6">
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-oswald font-semibold text-lg mb-3">Terms Summary</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Respectful conduct required</li>
                <li>• Safety guidelines must be followed</li>
                <li>• Payment due before sessions</li>
                <li>• Refunds per academy policy</li>
              </ul>
            </div>
            
            <div className="card-elevated p-6">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-oswald font-semibold text-lg mb-3">Privacy Summary</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Personal info for services only</li>
                <li>• No selling to third parties</li>
                <li>• Secure data handling</li>
                <li>• Parental consent for minors</li>
              </ul>
            </div>
            
            <div className="card-elevated p-6">
              <Cookie className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-oswald font-semibold text-lg mb-3">Cookies Summary</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Essential for site function</li>
                <li>• Analytics for improvement</li>
                <li>• Manageable via browser</li>
                <li>• Third-party services included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;