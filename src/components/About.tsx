
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
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About KIMC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 60 years, we've been at the forefront of media education in Kenya and East Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
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
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">60+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-gray-600">Alumni Worldwide</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://kimc.ac.ke/wp-content/uploads/2022/12/DSC_9655-1024x678.jpg"
              alt="KIMC Campus"
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <Card className="p-8 border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-semibold text-primary mb-4">Our Mission</h4>
            <p className="text-gray-700 leading-relaxed">
              To provide quality, relevant and accessible training in mass communication and related fields 
              that meets national and international standards.
            </p>
          </Card>
          <Card className="p-8 border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-all duration-300">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h5 className="text-xl font-semibold text-primary mb-3">{value.title}</h5>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-24 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="https://kimc.ac.ke/wp-content/uploads/2022/12/P1012972-1024x768.jpg" 
              alt="KIMC Campus Life" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          <div className="bg-primary rounded-lg p-8 text-white flex flex-col justify-center">
            <h4 className="text-2xl font-semibold mb-4">Our History</h4>
            <p className="mb-4 leading-relaxed">
              KIMC began as a training project of the Kenya Government and UNESCO in 1961. It has grown 
              to become the leading middle-level media training institution in Eastern and Central Africa.
            </p>
            <p className="leading-relaxed">
              With over six decades of experience, KIMC continues to evolve and adapt to meet the changing 
              demands of the media industry, while maintaining its commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
