export const dynamicSort = (field, order = "asc") => {
  return (a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    // Handle null/undefined
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
  };
};
