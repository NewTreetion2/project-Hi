import { useState, useCallback } from "react";

export default function useWorkListFilter() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const handleCategoryChange = useCallback((e) => {
    setCategoryFilter(e.target.value);
  }, []);

  const handlePriceChange = useCallback((e) => {
    setPriceFilter(e.target.value);
  }, []);

  return {
    categoryFilter,
    priceFilter,
    handleCategoryChange,
    handlePriceChange,
  };
}
