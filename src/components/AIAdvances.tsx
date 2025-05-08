import React from 'react';

interface Advance {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const advances: Advance[] = [
  {
    id: 1,
    title: 'Large Language Models',
    description: 'These super-smart text engines can chat like humans, translate languages on the fly, create content from scratch, and answer your burning questions - all without breaking a sweat.',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Multimodal AI',
    description: 'These AI systems are the ultimate multitaskers - handling text, images, audio, and video all at once. They see, hear, and create across different formats just like we do.',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'AI Agents',
    description: 'Think of these as digital assistants on steroids - they work independently, make smart decisions, and team up with other systems (or humans) to get things done without constant supervision.',
    icon: '🕵️'
  },
  {
    id: 4,
    title: 'Retrieval-Augmented Generation',
    description: 'These systems don\'t just make stuff up - they check their facts first! By connecting AI creativity with real information sources, you get responses that are both clever AND correct.',
    icon: '📚'
  },
  {
    id: 5,
    title: 'Fine-tuning & Customization',
    description: 'No need to build AI from scratch anymore! Take existing AI and teach it your specific business needs with minimal data. It\'s like getting a smart new employee who learns your company\'s ways super fast.',
    icon: '🔧'
  },
  {
    id: 6,
    title: 'Responsible AI Frameworks',
    description: 'Because powerful AI needs guardrails! These are the tools and approaches that keep AI honest, fair, and playing by human rules. Think of it as teaching AI good manners and values.',
    icon: '⚖️'
  }
];

const AIAdvances: React.FC = () => {
  return (
    <section id="advances" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Recent Advances in Generative AI</h2>
          <p className="text-lg text-slalom-gray max-w-3xl mx-auto">
            AI is moving at lightning speed, constantly breaking new ground. Here's what's 
            hot right now - and why it matters for your business.
          </p>
          <p className="italic text-slalom-blue text-center mt-2 max-w-2xl mx-auto">
            "I asked AI to write me a joke, but it was too busy debugging its own humor algorithm." 
            — Probably every developer in 2023
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advances.map((advance) => (
            <div key={advance.id} className="card">
              <div className="text-4xl mb-4">{advance.icon}</div>
              <h3 className="text-xl font-semibold text-slalom-navy mb-2">{advance.title}</h3>
              <p className="text-slalom-gray">{advance.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAdvances;