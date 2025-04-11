export const dynamicSort = (field, order = "asc") => {
  return (a, b) => {
    if (field != "Stock_No" && field != "Certificate_URL") {
      const aVal = a[field];
      const bVal = b[field];

      const aType = typeof aVal;
      const bType = typeof bVal;

      if (aType === "string" && bType === "string") {
        return order === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (aType === "number" && bType === "number") {
        return order === "asc" ? aVal - bVal : bVal - aVal;
      }
    } else {
      return 0;
    }
  };
};
