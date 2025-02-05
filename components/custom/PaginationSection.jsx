import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

export function PaginationDemo({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page); // Notify parent component to fetch data
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Logic for generating page numbers to show with ellipsis
  const generatePageNumbers = () => {
    const visiblePages = [];
    const ellipsisThreshold = 2; // Show 2 pages before and after the current page

    // Always show the first page
    visiblePages.push(1);

    // Determine the range of pages to show based on current page
    let start = Math.max(2, currentPage - ellipsisThreshold);
    let end = Math.min(totalPages - 1, currentPage + ellipsisThreshold);

    // If there's a gap after the first page, add an ellipsis
    if (start > 2) {
      visiblePages.push("...");
    }

    // Add the pages between the start and end range
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    // If there's a gap before the last page, add an ellipsis
    if (end < totalPages - 1) {
      visiblePages.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            onClick={handlePrevious}
            disabled={currentPage === 1}
          />
        </PaginationItem>

        {pageNumbers.map((page, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => goToPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem className="cursor-pointer">
          <PaginationNext
            onClick={handleNext}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
