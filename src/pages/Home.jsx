import React from 'react';

function Home() {
  const keyPoints = [
    {
      title: 'Comprehensive Automation',
      description: 'Automate almost any process—from routine communication to complex workflows—saving you time and reducing manual errors.'
    },
    {
      title: 'Seamless Integration',
      description: 'Easily connect with your existing systems via webhooks and APIs, ensuring a smooth transition to AI-driven automation.'
    },
    {
      title: 'Enhanced Customer Interaction',
      description: 'Our intelligent voice agents can answer phone calls, transcribe conversations, capture leads, and manage emails, ensuring no opportunity is missed.'
    },
    {
      title: 'Global Communication',
      description: 'Translate voice, text, and images in 54 languages to effectively communicate with customers and partners around the world.'
    },
    {
      title: 'Scalable & Flexible',
      description: 'Designed for businesses of all sizes, our AI agents grow with your business, adapting to your evolving needs.'
    }
  ];

  return (
    <div className="page">
      <div className="hero">
        {/* Placeholder for Lottie/Three.js animation */}
        <h1>Automate Smarter, Not Harder: AI Agents That Work While You Sleep.</h1>
      </div>
      <p>
        At Antikythera Technologies, we streamline your operations by leveraging advanced AI agent automations that handle nearly every process—so you can focus on growth. Our platform integrates seamlessly with webhooks and APIs to automate tasks such as voice-to-text transcription, intelligent phone answering, lead capture, email management, and calendar scheduling. With our agents capable of translating voice, text, and images in 54 languages, we ensure your business communicates effectively across borders. Reduce costs, improve efficiency, and boost customer engagement with a flexible, scalable solution designed for the modern enterprise.
      </p>
      <h2>Key Points of the Value Proposition:</h2>
      <div className="cards">
        {keyPoints.map((point, index) => (
          <div className="card" key={index}>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
      <div className="workflow-images">
        <img src="/images/n8n-workflow1.png" alt="n8n Workflow 1" />
        <img src="/images/n8n-workflow2.png" alt="n8n Workflow 2" />
        <img src="/images/n8n-workflow3.png" alt="n8n Workflow 3" />
      </div>
    </div>
  );
}

export default Home;
