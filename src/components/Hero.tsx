
import React from 'react';
import { ArrowRight, Play, Award, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Students' },
    { icon: Award, value: '62+', label: 'Years of Excellence' },
    { icon: BookOpen, value: '15+', label: 'Programs' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-blue-900/90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://kimc.ac.ke/wp-content/uploads/2023/12/New-Project-2023-12-20T175405.481.jpg')`
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-6 animate-fade-in">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Kenya's Premier Media Education Institution</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
              Kenya Institute of 
              <span className="block text-accent">Mass Communication</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in max-w-2xl">
              Transforming lives through quality, relevant and accessible training in mass communication 
              and related fields. Excellence in media education since 1961.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-scale-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Virtual Campus Tour
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://kimc.ac.ke/wp-content/uploads/2022/12/P1012925-1024x768.jpg" 
              alt="KIMC Students" 
              className="rounded-lg shadow-2xl animate-fade-in"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
