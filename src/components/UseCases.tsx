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
    description: 'AI systems that can listen to doctor-patient conversations and automatically generate clinical notes, reducing administrative burden and allowing healthcare providers to focus more on patient care.',
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
    description: 'AI-powered platforms that analyze individual financial data and market trends to provide customized investment strategies, budget recommendations, and financial planning advice.',
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
    description: 'Generative AI that creates unique, SEO-optimized product descriptions at scale, tailored to different customer segments and automatically updated based on inventory changes and seasonal trends.',
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
    description: 'AI systems that analyze sensor data from equipment to predict failures before they occur and generate detailed maintenance recommendations including step-by-step repair instructions.',
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
    description: 'Generative AI that creates personalized educational materials and exercises based on individual student\'s learning style, pace, and areas needing improvement.',
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
    description: 'AI tools that can review complex legal documents to identify risks and opportunities, suggest modifications, and generate contract language tailored to specific business requirements.',
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
            Generative AI is creating new possibilities across industries. Explore how these 
            technologies are being applied to solve real business challenges.
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