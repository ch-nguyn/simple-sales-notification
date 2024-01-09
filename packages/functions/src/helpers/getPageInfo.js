const getPageInfo = (page, totalPage) => {
  let hasNext = true;
  let hasPrevious = true;

  if (page === 1) {
    hasPrevious = false;
  }

  if (page === totalPage) {
    hasNext = false;
  }

  return {
    hasNext,
    hasPrevious
  };
};

export default getPageInfo;
