
export function formatCategoryText(category: string) {
    const clean = category.replace(/_/g, " ")
    const cammelCase = clean.replace(/(\w)(\w*)/g,
      function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
    return cammelCase;
  }