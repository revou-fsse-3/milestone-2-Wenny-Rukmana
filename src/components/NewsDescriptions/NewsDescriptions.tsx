import React from "react";

interface NewsDescProps {
  desc: string;
  limit: number;
}

// Define the NewsDesc functional component
const NewsDesc: React.FC<NewsDescProps> = ({ desc, limit }) => {
  // Function to truncate the description if it exceeds the limit
  const newDesc = (desc: string, limit: number): string => {
    // Check if desc is not null or undefined before accessing its length
    if (desc && desc.length > limit) {
      return desc.substring(0, limit) + "...";
    }

    return desc;
  };

  return <p>{newDesc(desc, limit)}</p>;
};

export default NewsDesc;
