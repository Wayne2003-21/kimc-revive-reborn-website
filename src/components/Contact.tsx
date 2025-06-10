
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'P.O. Box 42422 - 00100',
        'Nairobi, Kenya',
        'Located along Uhuru Highway'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+254 20 2714411',
        '+254 20 2714412',
        '+254 733 333 333'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@kimc.ac.ke',
        'admissions@kimc.ac.ke',
        'registrar@kimc.ac.ke'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 8:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const campuses = [
    {
      name: 'Main Campus',
      address: 'Uhuru Highway, Nairobi',
      description: 'Our primary campus featuring state-of-the-art facilities'
    },
    {
      name: 'Mombasa Campus',
      address: 'Mombasa Road, Mombasa',
      description: 'Coastal campus serving students in the coastal region'
    },
    {
      name: 'Nakuru Campus',
      address: 'Kenyatta Avenue, Nakuru',
      description: 'Regional campus for Rift Valley students'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any assistance you need
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input placeholder="Enter message subject" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Enter your message" 
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button size="lg" className="w-full md:w-auto gradient-kimc">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Locations */}
        <div>
          <h3 className="text-3xl font-semibold text-primary text-center mb-12">Our Campuses</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {campuses.map((campus, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{campus.name}</h4>
                <p className="text-muted-foreground mb-3">{campus.address}</p>
                <p className="text-gray-600 text-sm">{campus.description}</p>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-600 mb-2">Campus Map</h4>
                <p className="text-gray-500">Interactive map coming soon</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
