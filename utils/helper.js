export const isValidCategory = (category) => {
  return (
    category === "article" || category === "event" || category === "achievement" || category === "heading" || category === "history"
  );
};
