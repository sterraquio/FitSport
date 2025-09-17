// src/components/ActivityCard.tsx
import React from "react";

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  action: string;
  onClick?: () => void; 
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  imageUrl,
  action,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <span className="text-blue-600">{action}</span>
      </div>
    </div>
  );
};
