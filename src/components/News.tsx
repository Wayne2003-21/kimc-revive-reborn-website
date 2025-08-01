
import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Award, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'KIMC Launches New Digital Media Program',
      excerpt: 'The institute introduces cutting-edge curriculum to meet evolving industry demands in digital content creation and social media management.',
      date: '2024-06-08',
      category: 'Academics',
      image: 'https://kimc.ac.ke/wp-content/uploads/2022/12/DSC_0288-1024x678.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Students Win National Journalism Awards',
      excerpt: 'Three KIMC students recognized for excellence in investigative reporting at the Kenya Journalism Awards 2024.',
      date: '2024-06-05',
      category: 'Achievement',
      image: 'https://kimc.ac.ke/wp-content/uploads/2022/12/DSC_9661-1024x678.jpg'
    },
    {
      id: 3,
      title: 'New State-of-the-Art TV Studio Opens',
      excerpt: 'KIMC unveils modern television production facility equipped with latest broadcasting technology.',
      date: '2024-06-01',
      category: 'Infrastructure',
      image: 'https://kimc.ac.ke/wp-content/uploads/2023/12/graduate-g91fd8e914_1280.jpg'
    },
    {
      id: 4,
      title: 'Alumni Networking Event Success',
      excerpt: 'Over 200 KIMC graduates gather for the annual networking event, sharing career insights and opportunities.',
      date: '2024-05-28',
      category: 'Events',
      image: 'https://kimc.ac.ke/wp-content/uploads/2022/12/DSC_0051-1024x678.jpg'
    }
  ];

  const events = [
    {
      title: 'Open Day 2024',
      date: '2024-07-15',
      time: '9:00 AM - 4:00 PM',
      location: 'KIMC Main Campus',
      description: 'Explore our facilities, meet faculty, and learn about our programs.',
      icon: BookOpen
    },
    {
      title: 'Media Industry Conference',
      date: '2024-07-20',
      time: '10:00 AM - 5:00 PM',
      location: 'KIMC Auditorium',
      description: 'Leading industry professionals discuss the future of media.',
      icon: Users
    },
    {
      title: 'Graduation Ceremony',
      date: '2024-08-10',
      time: '2:00 PM - 6:00 PM',
      location: 'KIMC Main Hall',
      description: 'Celebrating the achievements of our graduating class.',
      icon: Award
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and upcoming events at KIMC
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-primary">Latest News</h3>
              <Button variant="outline">
                View All News
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-12">
              {/* Featured News */}
              {news.filter(item => item.featured).map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-1/2">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                      <h4 className="text-2xl font-semibold text-primary mb-4">{item.title}</h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.excerpt}</p>
                      <Button variant="outline" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Regular News */}
              <div className="grid md:grid-cols-2 gap-8">
                {news.filter(item => !item.featured).map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-3">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-3">{event.title}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="p-8 mt-8 bg-primary text-white">
              <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter for the latest news and events.
              </p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded text-gray-900 text-sm"
                />
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary">
                  Subscribe
                </Button>
              </div>
            </Card>
            
            {/* Additional image */}
            <Card className="overflow-hidden mt-8">
              <img 
                src="https://kimc.ac.ke/wp-content/uploads/2022/12/P1012898-1024x768.jpg" 
                alt="KIMC Events" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-primary/90 text-white text-center">
                <h5 className="font-medium">Campus Life at KIMC</h5>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
