
import React from 'react';
import { BookOpen, Clock, Users, Award, ArrowRight, GraduationCap, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Academics = () => {
  const programs = [
    {
      level: 'Diploma Programs',
      duration: '3 Years',
      courses: [
        {
          title: 'Diploma in Journalism and Mass Communication',
          description: 'Comprehensive training in news gathering, writing, editing, and media ethics for print, broadcast, and digital platforms.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Public Relations',
          description: 'Strategic communication, relationship management, crisis communication, and corporate image building.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Film and Television Production',
          description: 'Hands-on training in visual storytelling, video production, editing, and broadcast technology.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Advertising and Marketing Communication',
          description: 'Creative and strategic approaches to brand communication, digital marketing, and consumer behavior.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Information and Communication Technology',
          description: 'Modern ICT skills including software development, network management, and digital systems.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Records and Archives Management',
          description: 'Professional training in information management, archival science, and data preservation.',
          duration: '3 Years',
          mode: 'Full-time'
        }
      ]
    },
    {
      level: 'Certificate Programs',
      duration: '1-2 Years',
      courses: [
        {
          title: 'Certificate in Journalism',
          description: 'Foundation course in news writing, reporting, and basic media ethics.',
          duration: '1 Year',
          mode: 'Full-time'
        },
        {
          title: 'Certificate in Radio Production and Presentation',
          description: 'Specialized training in radio broadcasting, production techniques, and presentation skills.',
          duration: '1 Year',
          mode: 'Full-time'
        },
        {
          title: 'Certificate in Photography and Videography',
          description: 'Professional photography techniques, digital imaging, and video production basics.',
          duration: '6 Months',
          mode: 'Part-time'
        },
        {
          title: 'Certificate in Public Relations',
          description: 'Basic PR principles, communication strategies, and media relations.',
          duration: '1 Year',
          mode: 'Full-time'
        },
        {
          title: 'Certificate in Computer Applications',
          description: 'Essential computer skills for the modern workplace including office applications.',
          duration: '6 Months',
          mode: 'Part-time'
        }
      ]
    },
    {
      level: 'Short Courses',
      duration: '1-6 Months',
      courses: [
        {
          title: 'Digital Marketing',
          description: 'Social media marketing, content creation, and online brand management.',
          duration: '3 Months',
          mode: 'Part-time'
        },
        {
          title: 'Media Ethics and Law',
          description: 'Understanding media regulations, ethics, and legal frameworks.',
          duration: '2 Months',
          mode: 'Part-time'
        },
        {
          title: 'Event Management',
          description: 'Planning and executing successful events and corporate functions.',
          duration: '2 Months',
          mode: 'Part-time'
        }
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and experienced educators with real-world experience'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Updated courses that meet current industry standards and emerging trends'
    },
    {
      icon: Award,
      title: 'TVETA Accredited',
      description: 'All programs accredited by Technical and Vocational Education and Training Authority'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Full-time, part-time, and short course options to fit your schedule'
    },
    {
      icon: GraduationCap,
      title: 'Industry Partnerships',
      description: 'Strong connections with leading media houses and corporations for internships'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Internationally recognized certificates and diplomas for global opportunities'
    }
  ];

  return (
    <section id="academics" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to prepare you for success in the dynamic media industry
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 relative rounded-xl overflow-hidden">
          <img 
            src="https://kimc.ac.ke/wp-content/uploads/2022/12/IMG_1174-1024x683.jpg" 
            alt="KIMC Academic Programs"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-xl">
              <Badge className="mb-4 bg-accent text-primary">TVETA Accredited</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">World-Class Media Education</h3>
              <p className="text-white/90 text-lg mb-6">
                Our programs are designed with input from industry leaders to ensure graduates are ready for the demands of the modern media landscape.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                Download Prospectus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Programs */}
        <div className="space-y-20">
          {programs.map((program, programIndex) => (
            <div key={programIndex}>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-semibold text-primary mb-2">{program.level}</h3>
                  <p className="text-muted-foreground">Duration: {program.duration}</p>
                </div>
                <Button variant="outline" className="hidden md:flex">
                  View Requirements
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {program.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="h-3 bg-primary"></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {course.mode}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-primary mb-3">{course.title}</h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Admission Requirements */}
        <div className="mt-20">
          <Card className="p-8 bg-white rounded-xl">
            <h3 className="text-3xl font-semibold text-primary text-center mb-8">Admission Requirements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-primary mb-4">Diploma Programs</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>KCSE Mean Grade of C- and above</li>
                  <li>Relevant Certificate Course</li>
                  <li>Equivalent qualifications</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-primary mb-4">Certificate Programs</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>KCSE Mean Grade of D+ and above</li>
                  <li>KCE Division III and above</li>
                  <li>Equivalent qualifications</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-primary mb-4">Short Courses</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Basic literacy</li>
                  <li>Interest in the field</li>
                  <li>No formal requirements</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl overflow-hidden relative">
            <img 
              src="https://kimc.ac.ke/wp-content/uploads/2022/12/DSC_9739-1024x678.jpg" 
              alt="KIMC Campus"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
            />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Media Career?</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of successful graduates who have built their careers through KIMC's 
                comprehensive programs and industry connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Academics;
