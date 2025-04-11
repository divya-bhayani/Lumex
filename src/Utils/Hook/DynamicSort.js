export const dynamicSort = (field, order = "asc") => {
  return (a, b) => {
    if (field != "Stock_No" && field != "Certificate_URL") {
      const aVal = a[field];
      const bVal = b[field];
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return order === "asc" ? -1 : 1;
      if (bVal == null) return order === "asc" ? 1 : -1;

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

      // Fallback: compare as strings
      return order === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    } else {
      return 0;
    }
  };
  // Handle null/undefined
};
