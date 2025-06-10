
import React from 'react';
import { Award, Target, Users, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards in media education and professional development.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and modern teaching methodologies.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of media professionals and industry leaders.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Preparing students to make a difference in the global media landscape.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About KIMC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 60 years, we've been at the forefront of media education in Kenya and East Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-primary">
              Kenya's Premier Media Institution
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established in 1961, the Kenya Institute of Mass Communication has been shaping the media landscape 
              in Kenya and beyond. We are committed to providing world-class education in journalism, 
              communication, and media studies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our graduates work in leading media houses, corporations, and institutions across Africa and 
              internationally, testament to the quality of education and training we provide.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">60+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-gray-600">Alumni Worldwide</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="KIMC Campus"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-l-4 border-l-primary">
            <h4 className="text-2xl font-semibold text-primary mb-4">Our Mission</h4>
            <p className="text-gray-700 leading-relaxed">
              To provide quality, relevant and accessible training in mass communication and related fields 
              that meets national and international standards.
            </p>
          </Card>
          <Card className="p-8 border-l-4 border-l-accent">
            <h4 className="text-2xl font-semibold text-primary mb-4">Our Vision</h4>
            <p className="text-gray-700 leading-relaxed">
              To be a leading center of excellence in mass communication training, research and consultancy 
              in Africa and beyond.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-semibold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h5 className="text-xl font-semibold text-primary mb-3">{value.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
