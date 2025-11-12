import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  artist?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getVisiblePage = (): (number | string)[] => {
    let tab: number[] = [];
    if (totalPages === 0 || totalPages === 1) return [];
    if (totalPages) {
      for (let i = 0; i <= totalPages; i++) {
        tab.push(i);
      }
      return tab;
    }
    //if (currentPage <= 2) return [1, 2, 3, 4, "...", totalPages];
    if (currentPage >= totalPages - 1)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };
  const pages = getVisiblePage();

  return (
    <div className="join">
      {pages.map((page, index) =>
        page === "..." ? (
          <input
            key={index}
            className="join-item btn btn-square"
            type="button"
            value="..."
            disabled
          />
        ) : (
          <input
            key={index}
            className={`join-item btn btn-square ${
              typeof page === "number"
                ? page > totalPages
                  ? "cursor-not-allowed opacity-70" // désactivé si page trop grande
                  : "" // normal
                : "cursor-not-allowed opacity-70" // désactivé si page n'est pas un nombre (ex: "..." )
            }`}
            type="radio"
            name="option"
            aria-label={page.toString()}
            checked={currentPage === page}
            onChange={() => onPageChange(page as number)}
            readOnly={typeof page === "number" ? page > totalPages : true}
          />
        )
      )}
    </div>
  );
};
export default Pagination;
