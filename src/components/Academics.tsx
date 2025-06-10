
import React from 'react';
import { BookOpen, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Academics = () => {
  const programs = [
    {
      level: 'Diploma Programs',
      duration: '2-3 Years',
      courses: [
        {
          title: 'Diploma in Journalism',
          description: 'Comprehensive training in news gathering, writing, and media ethics.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Public Relations',
          description: 'Strategic communication and relationship management skills.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Film and TV Production',
          description: 'Hands-on training in visual storytelling and production.',
          duration: '3 Years',
          mode: 'Full-time'
        },
        {
          title: 'Diploma in Advertising',
          description: 'Creative and strategic approaches to brand communication.',
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
          description: 'Foundation course in news writing and reporting.',
          duration: '1 Year',
          mode: 'Full-time'
        },
        {
          title: 'Certificate in Radio Production',
          description: 'Specialized training in radio broadcasting and production.',
          duration: '1 Year',
          mode: 'Full-time'
        },
        {
          title: 'Certificate in Photography',
          description: 'Professional photography techniques and digital imaging.',
          duration: '6 Months',
          mode: 'Part-time'
        }
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and experienced educators'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Updated courses that meet current industry standards'
    },
    {
      icon: Award,
      title: 'Recognized Credentials',
      description: 'Certificates and diplomas recognized nationally and internationally'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Full-time, part-time, and online learning options available'
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to prepare you for success in the dynamic media industry
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Programs */}
        <div className="space-y-12">
          {programs.map((program, programIndex) => (
            <div key={programIndex}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-semibold text-primary mb-2">{program.level}</h3>
                  <p className="text-muted-foreground">Duration: {program.duration}</p>
                </div>
                <Button variant="outline" className="hidden md:flex">
                  View All Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {course.mode}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{course.duration}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-primary mb-3">{course.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary to-blue-600 text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Media Career?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Academics;
