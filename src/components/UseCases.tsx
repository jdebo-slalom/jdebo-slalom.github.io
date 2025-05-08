import React, { useState } from 'react';

interface UseCase {
  id: number;
  industry: string;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const useCases: UseCase[] = [
  {
    id: 1,
    industry: 'Healthcare',
    title: 'Medical Documentation Assistant',
    description: 'Think of it as a super-smart medical scribe that listens to doctor-patient talks and writes up all the notes automatically. Doctors spend less time typing and more time healing.',
    benefits: [
      'Reduces documentation time by up to 70%',
      'Improves accuracy of medical records',
      'Enhances patient-doctor interaction quality'
    ],
    color: 'bg-blue-100 border-blue-300'
  },
  {
    id: 2,
    industry: 'Financial Services',
    title: 'Personalized Financial Advice',
    description: 'Like having a financial advisor in your pocket 24/7. These AI tools look at your money situation and the market to give you personalized advice on investing, saving, and planning - no judgment, just smart guidance.',
    benefits: [
      'Democratizes access to financial guidance',
      'Adapts recommendations based on changing circumstances',
      'Increases financial literacy through explanations'
    ],
    color: 'bg-green-100 border-green-300'
  },
  {
    id: 3,
    industry: 'Retail',
    title: 'Dynamic Product Descriptions',
    description: 'Say goodbye to boring product descriptions! This AI writes thousands of fresh, engaging product blurbs that appeal to different customers and automatically update with the seasons. Your copywriters can finally take that vacation.',
    benefits: [
      'Increases conversion rates with targeted messaging',
      'Reduces time-to-market for new products',
      'Maintains consistent brand voice across thousands of items'
    ],
    color: 'bg-purple-100 border-purple-300'
  },
  {
    id: 4,
    industry: 'Manufacturing',
    title: 'Predictive Maintenance Insights',
    description: 'Machines breaking down unexpectedly is so last century! This AI listens to your equipment and tells you "Hey, this part is going to fail next month" - then gives you a simple repair guide to fix it before disaster strikes.',
    benefits: [
      'Reduces unplanned downtime by up to 50%',
      'Extends equipment lifespan',
      'Optimizes maintenance scheduling and resource allocation'
    ],
    color: 'bg-yellow-100 border-yellow-300'
  },
  {
    id: 5,
    industry: 'Education',
    title: 'Adaptive Learning Content',
    description: 'Every student learns differently, and now teaching materials can adapt automatically! This AI creates custom lessons that match each student\'s style, pace, and needs - like having a tutor who knows exactly how to help everyone succeed.',
    benefits: [
      'Addresses diverse learning needs in the classroom',
      'Provides immediate, constructive feedback',
      'Helps teachers identify and address learning gaps'
    ],
    color: 'bg-red-100 border-red-300'
  },
  {
    id: 6,
    industry: 'Legal',
    title: 'Contract Analysis & Generation',
    description: 'Legal documents are a headache no more! This AI reads through the fine print at lightning speed, flags potential problems, suggests improvements, and can even write custom contract language that protects your interests without the billable hours.',
    benefits: [
      'Accelerates contract review process by 80%',
      'Ensures consistent application of legal standards',
      'Reduces risk of overlooking critical clauses'
    ],
    color: 'bg-indigo-100 border-indigo-300'
  }
];

const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState<UseCase>(useCases[0]);

  return (
    <section id="use-cases" className="bg-slalom-lightGray py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Transformative Use Cases</h2>
          <p className="text-lg text-slalom-gray max-w-3xl mx-auto">
            AI isn't just for tech companies anymore. Click through these examples to see 
            how businesses just like yours are using AI to solve real problems today.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveCase(useCase)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCase.id === useCase.id 
                  ? 'bg-slalom-blue text-white' 
                  : 'bg-white text-slalom-gray hover:bg-slalom-blue/10'}`}
            >
              {useCase.industry}
            </button>
          ))}
        </div>
        
        <div className={`border-2 rounded-lg p-6 ${activeCase.color}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slalom-navy">{activeCase.title}</h3>
            <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-slalom-gray mt-2 md:mt-0">
              {activeCase.industry}
            </span>
          </div>
          <p className="text-lg mb-6">{activeCase.description}</p>
          <div>
            <h4 className="font-semibold text-slalom-navy mb-2">Key Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {activeCase.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;