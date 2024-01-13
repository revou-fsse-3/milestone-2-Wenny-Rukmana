interface NewsTitleProps {
  title: string;
  limit: number;
}

const NewsTitle: React.FC<NewsTitleProps> = ({ title, limit }) => {
  const newTitle = (title: string, limit: number): string => {
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }

    return title;
  };

  return <h2>{newTitle(title, limit)}</h2>;
};

export default NewsTitle;
