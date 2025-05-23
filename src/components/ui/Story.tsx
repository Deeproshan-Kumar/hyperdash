import React from "react";

interface StoryProps {
  img: string;
  title: string;
  description: string;
}

const Story: React.FC<StoryProps> = ({ img, title, description }) => {
  return (
    <article>
      <div>
        <img src={img} alt={title} width={318} height={330} className="w-full" />
      </div>
      <div className="py-4">
        <h2 className="text-lg text-white mb-4">{title}</h2>
        <p className="text-sm text-white">{description}</p>
      </div>
    </article>
  );
};

export default Story;
