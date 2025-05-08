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
    description: 'Modern AI models can write, translate, and create content that sounds human. They understand context, answer complex questions, and handle conversations naturally without complex programming.',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Multimodal AI',
    description: 'These versatile AI systems work with text, images, audio, and video simultaneously - like having an assistant who can see, hear, write, and create visuals all at once.',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'AI Agents',
    description: 'Think of these as digital workers that can complete entire tasks on their own - whether scheduling meetings, researching topics, or solving problems without constant human guidance.',
    icon: '🕵️'
  },
  {
    id: 4,
    title: 'Retrieval-Augmented Generation',
    description: 'AI that combines creative writing abilities with fact-checking against trusted sources. This gives you the best of both worlds: engaging content that's also accurate and reliable.',
    icon: '📚'
  },
  {
    id: 5,
    title: 'Fine-tuning & Customization',
    description: 'Tools that help adapt powerful AI to your specific needs with minimal effort. Even small teams can now teach AI their unique terminology, brand voice, and industry knowledge.',
    icon: '🔧'
  },
  {
    id: 6,
    title: 'Responsible AI Frameworks',
    description: 'Guidelines and tools that keep AI honest, fair, and trustworthy. These frameworks help businesses use AI confidently while avoiding privacy issues and ethical pitfalls.',
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
            AI is evolving rapidly, with each breakthrough creating new business opportunities. 
            Here's what's driving innovation and giving forward-thinking companies their competitive edge.
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