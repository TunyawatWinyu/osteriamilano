import { categories } from "../../Data/Categories";

type CategoryFilterProps = {
  selectedCategory: number;
  onChangeCategory: (categoryId: number) => void;
  selectedCategoryName: string | undefined;
};

const CategoryFilter = ({
  selectedCategory,
  onChangeCategory,
  selectedCategoryName,
}: CategoryFilterProps) => {
  return (
    <>
      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-5 border-b border-gray-300 px-6 py-5">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <button
              type="button"
              key={category.id}
              onClick={() => onChangeCategory(category.id)}
              className={`px-4 py-2 text-lg tracking-wider transition duration-200 cursor-pointer ${
                isSelected
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:text-black"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* CATEGORY TITLE */}
      <div className="flex items-center">
        <span className="h-px w-[50px] bg-primary" />

        <h2 className="mx-8 text-sm tracking-[8px] text-matcha-green">
          {selectedCategoryName?.toUpperCase()}
        </h2>

        <span className="h-px w-[50px] bg-primary" />
      </div>
    </>
  );
};

export default CategoryFilter;
