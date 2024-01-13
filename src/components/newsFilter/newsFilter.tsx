import "./style.css";

interface CategoryButtonProps {
  onClick: () => void;
  selected: boolean;
  category: string;
}

// Functional component CategoryButton
const CategoryButton: React.FC<CategoryButtonProps> = ({
  onClick,
  selected,
  category,
}) => (
  <button onClick={onClick} className={selected ? "active" : ""}>
    {category}
  </button>
);

interface NewsFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  onFilterButtonClick: () => void;
}

// Functional component NewsFilter
const NewsFilter: React.FC<NewsFilterProps> = ({
  onCategoryChange,
  selectedCategory,
}) => {
  // List of categories
  const categories = ["apple", "tesla", "business", "tech"];

  return (
    <div className="NewsFilterContainer">
      <div className="CategoryContainer">
        <CategoryButton
          onClick={() => onCategoryChange("")}
          selected={selectedCategory === ""}
          category="All"
        />

        {/* Mapping through categories to create CategoryButtons */}
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => onCategoryChange(category)}
            selected={selectedCategory === category}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

// Exporting the NewsFilter component
export default NewsFilter;
