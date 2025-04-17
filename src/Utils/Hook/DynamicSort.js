export const dynamicSort = (field, order = "asc") => {
  return (a, b) => {
    if (field != "Stock_No" && field != "Certificate_URL") {
      const aVal = a[field];
      const bVal = b[field];

      if (typeof aVal === "string" && typeof bVal === "string") {
        return order === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return order === "asc" ? aVal - bVal : bVal - aVal;
      }
    } else {
      return 0;
    }
  };
};
