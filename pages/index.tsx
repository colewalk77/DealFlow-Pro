import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState({
    title: '🚀 DealFlow Pro',
    subtitle: 'Welcome to your MVP Homepage!',
    instructions: 'Click any text to edit it. Your tools will go here.'
  });

  const handleEdit = (key: string) => {
    const updated = prompt(`Edit ${key}:`, content[key as keyof typeof content]);
    if (updated !== null) {
      setContent({ ...content, [key]: updated });
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 onClick={() => handleEdit('title')} style={{ cursor: 'pointer' }}>
        {content.title}
      </h1>
      <h3 onClick={() => handleEdit('subtitle')} style={{ cursor: 'pointer' }}>
        {content.subtitle}
      </h3>
      <p onClick={() => handleEdit('instructions')} style={{ cursor: 'pointer' }}>
        {content.instructions}
      </p>
    </div>
  );
}
