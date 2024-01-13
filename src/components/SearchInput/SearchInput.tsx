import React from "react";
import "./style.css"; // Import the CSS file

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
  onClick,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="search-input"
      />
      <button onClick={onClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
