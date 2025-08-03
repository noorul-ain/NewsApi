import React from "react";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

type Props = {
  selected: string;
  onCategoryChange: (cat: string) => void;
};

const CategoryFilter: React.FC<Props> = ({ selected, onCategoryChange }) => {
  return (
    <div className="flex justify-center overflow-x-auto gap-2 py-2 mb-6 scrollbar-thin ml-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-8 py-4 rounded-full whitespace-nowrap border text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900"
          }`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;