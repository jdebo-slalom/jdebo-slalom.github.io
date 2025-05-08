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
    description: 'Advanced models like GPT-4, Claude, and PaLM can understand and generate human-like text, translate languages, write different kinds of creative content, and answer questions in an informative way.',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Multimodal AI',
    description: 'Systems that can process and generate multiple types of data including text, images, audio, and video, enabling more comprehensive understanding and creation capabilities.',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'AI Agents',
    description: 'Autonomous AI systems that can perform complex tasks, make decisions, and interact with other systems or humans to accomplish specific goals.',
    icon: '🕵️'
  },
  {
    id: 4,
    title: 'Retrieval-Augmented Generation',
    description: 'Combining the generative capabilities of LLMs with the ability to retrieve and reference specific information from external knowledge sources for more accurate and verifiable outputs.',
    icon: '📚'
  },
  {
    id: 5,
    title: 'Fine-tuning & Customization',
    description: 'Techniques to adapt pre-trained models to specific domains or tasks with relatively small amounts of data, making AI more accessible to businesses of all sizes.',
    icon: '🔧'
  },
  {
    id: 6,
    title: 'Responsible AI Frameworks',
    description: 'Development of tools and methodologies to ensure AI systems are fair, transparent, accountable, and aligned with human values and ethical principles.',
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
            AI isn't standing still - it's sprinting ahead! These recent breakthroughs are 
            changing the game for businesses that want to stay competitive in today's tech landscape.
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