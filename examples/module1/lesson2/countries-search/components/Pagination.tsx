interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { page, totalPages, onChange } = props;

  return (
    <div className="flex gap-4 items-center">
      <button
        className="border border-color-gray-200 p-2"
        onClick={() => onChange(totalPages && page > 1 ? page - 1 : 1)}
      >
        Previous
      </button>
      <div>Page {page || 1} of {totalPages || 1}</div>
      <button
        className="border border-color-gray-200 p-2"
        onClick={() => onChange(totalPages && page ? page + 1 : 1)}
      >
        Next
      </button>
    </div>
  );
}
