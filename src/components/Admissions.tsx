
import React from 'react';
import { FileText, Calendar, DollarSign, CheckCircle, Users, Award, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Application',
      description: 'Complete and submit the online application form with required documents',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'Our admissions team reviews your academic credentials and supporting documents',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Interview',
      description: 'Attend an interview session (for selected programs)',
      icon: Users
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Receive your admission decision and enrollment instructions',
      icon: Award
    }
  ];

  const intakes = [
    {
      title: 'January Intake',
      date: 'January 2024',
      deadline: 'December 15, 2023',
      status: 'Applications Open'
    },
    {
      title: 'May Intake',
      date: 'May 2024',
      deadline: 'April 15, 2024',
      status: 'Applications Open'
    },
    {
      title: 'September Intake',
      date: 'September 2024',
      deadline: 'August 15, 2024',
      status: 'Applications Open'
    }
  ];

  const feesStructure = [
    {
      program: 'Diploma Programs',
      fees: 'KSh 45,000 - 55,000',
      duration: 'Per Year',
      includes: 'Tuition, Exams, Activities'
    },
    {
      program: 'Certificate Programs',
      fees: 'KSh 25,000 - 35,000',
      duration: 'Per Year',
      includes: 'Tuition, Exams, Activities'
    },
    {
      program: 'Short Courses',
      fees: 'KSh 5,000 - 15,000',
      duration: 'Per Course',
      includes: 'Training, Materials, Certificate'
    }
  ];

  const requirements = [
    {
      category: 'Academic Documents',
      items: [
        'Original KCSE/KCE Certificate',
        'School Leaving Certificate',
        'Academic Transcripts',
        'Birth Certificate'
      ]
    },
    {
      category: 'Personal Documents',
      items: [
        'National ID/Passport Copy',
        'Passport-size Photos (4)',
        'Medical Certificate',
        'Good Conduct Certificate'
      ]
    },
    {
      category: 'Application Materials',
      items: [
        'Completed Application Form',
        'Application Fee Receipt',
        'Personal Statement',
        'Reference Letters (2)'
      ]
    }
  ];

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Admissions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your journey to a successful media career at Kenya's premier communication institute
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-20 relative rounded-xl overflow-hidden">
          <img 
            src="https://kimc.ac.ke/wp-content/uploads/2023/12/graduate-g91fd8e914_1280.jpg" 
            alt="KIMC Graduation"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-2xl">
              <Badge className="mb-4 bg-accent text-primary">Applications Open</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Join KIMC Today</h3>
              <p className="text-white/90 text-lg mb-6">
                Take the first step towards your media career. Applications are now open for all programs.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                Apply Online Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-primary text-center mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Intake Dates */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-primary text-center mb-12">Intake Dates 2024</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {intakes.map((intake, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{intake.title}</h4>
                <p className="text-gray-600 mb-2">{intake.date}</p>
                <p className="text-sm text-gray-500 mb-4">Deadline: {intake.deadline}</p>
                <Badge className="bg-green-100 text-green-800">{intake.status}</Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Fees Structure */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-primary text-center mb-12">Fees Structure</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {feesStructure.map((fee, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary text-center mb-4">{fee.program}</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">{fee.fees}</div>
                  <div className="text-gray-600 mb-4">{fee.duration}</div>
                  <div className="text-sm text-gray-500">{fee.includes}</div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Payment plans and scholarships available</p>
            <Button variant="outline">Learn More About Financial Aid</Button>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-primary text-center mb-12">Application Requirements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-8">
                <h4 className="text-xl font-semibold text-primary mb-6 text-center">{req.category}</h4>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="p-8 bg-primary text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Need Help with Your Application?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our admissions team is here to help you through every step of the process. 
            Contact us for personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              Contact Admissions Office
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Campus Visit
            </Button>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Phone:</strong><br />
              +254 20 2714411
            </div>
            <div>
              <strong>Email:</strong><br />
              admissions@kimc.ac.ke
            </div>
            <div>
              <strong>Office Hours:</strong><br />
              Mon-Fri: 8AM-5PM
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Admissions;
