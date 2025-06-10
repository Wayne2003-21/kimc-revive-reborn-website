
import React from 'react';
import { ArrowRight, Play, Award, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Students' },
    { icon: Award, value: '50+', label: 'Years of Excellence' },
    { icon: BookOpen, value: '25+', label: 'Programs' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-blue-900/90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-6 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Kenya's Premier Media Education Institution</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Shaping Future
            <span className="block text-accent"> Media Leaders</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join Kenya's leading institution for mass communication, journalism, and media studies. 
            Excellence in education since 1961.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 text-lg">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Campus Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in">
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
