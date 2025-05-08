import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slalom-navy to-slalom-blue text-white dark:from-black dark:to-slalom-navy transition-colors duration-200">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Generative AI
              <span className="block text-slalom-teal">Transforming Industries</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Dive into the world of generative AI and see how these powerful tools are 
              transforming businesses in ways we never imagined possible.
            </p>
            <p className="text-md md:text-lg mb-6 italic">
              "AI is like having a tireless intern who occasionally thinks your coffee mug is a cat." — AI-generated wisdom
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#advances" 
                className="px-6 py-3 bg-slalom-teal text-slalom-navy font-medium rounded-md text-center hover:bg-opacity-90 transition-colors"
              >
                See What's New in AI
              </a>
              <a 
                href="#use-cases" 
                className="px-6 py-3 bg-white dark:bg-slalom-teal text-slalom-blue dark:text-slalom-navy font-medium rounded-md text-center hover:bg-opacity-90 transition-colors"
              >
                Real-World Examples
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-slalom-teal rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white rounded-full opacity-10 blur-2xl"></div>
              <div className="relative z-10 bg-white/10 dark:bg-slalom-navy/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-white/10 transition-colors duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm text-white/90 font-mono">
                  <code>{`// Generative AI in action
const generateContent = async (prompt) => {
  const ai = new GenAI();
  const response = await ai.generate({
    prompt,
    temperature: 0.7,
    maxTokens: 100
  });
  return response.text;
};

// Transform your business
const result = await generateContent(
  "How can AI improve customer experience?"
);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;