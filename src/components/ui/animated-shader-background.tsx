import React from 'react';

interface AnimatedShaderHeroProps {
  trustBadge: {
    text: string;
    icons: React.ReactNode[];
    className?: string;
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  subtitleClassName?: string;
  buttons: {
    primary: {
      text: string;
      onClick: () => void;
      className?: string;
    };
    secondary: {
      text: string;
      onClick: () => void;
      className?: string;
    };
  };
}

const AnimatedShaderHero: React.FC<AnimatedShaderHeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  subtitleClassName,
  buttons,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-bl from-blue-950 via-black to-blue-900 px-4 py-10">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-700/40 backdrop-blur font-medium text-sky-100 shadow">
          {trustBadge.icons.map((icon, index) => (
            <span key={index} className="inline-block">
              {icon}
            </span>
          ))}
          {trustBadge.text}
        </span>
      </div>
      <h1 className="text-center text-4xl md:text-6xl font-extrabold text-white mb-4">
        {headline.line1} <br />
        <span className="text-sky-400">{headline.line2}</span>
      </h1>
      <p className="text-blue-100 text-lg md:text-xl text-center max-w-2xl mb-10 font-light">
        {subtitle}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button
          onClick={buttons.primary.onClick}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow hover:scale-105 hover:shadow-lg transition"
        >
          {buttons.primary.text}
        </button>
        <button
          onClick={buttons.secondary.onClick}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-white/10 text-sky-100 border border-blue-400 hover:bg-white/20 transition"
        >
          {buttons.secondary.text}
        </button>
      </div>
    </section>
  );
};

export default AnimatedShaderHero;
