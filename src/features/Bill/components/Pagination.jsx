function Pagination({ pageCount, currentPage, pageable }) {
  const buttons = [];

  for (let i = 0; i <= pageCount; i++) {
    buttons.push(
      <button key={i} onClick={() => pageable(i)} size="sm" disabled={i === currentPage} 
      className={`h-12 w-10 rounded-md mx-1 hover:bg-blue-gray-500 text-primary ${
        i === currentPage
          ? " bg-blue-500 text-white"
          : " bg-gray-300"}`}>
        {i + 1}
      </button>
    );
  }

  return (
    <div>
      {buttons}
    </div>
  );
}

export default Pagination;
