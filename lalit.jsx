const sales = [
  { category: "Electronics", subCategory: "Mobile", unitsSold: 10, pricePerUnit: 200 },
  { category: "Electronics", subCategory: "Laptop", unitsSold: 5, pricePerUnit: 1000 },
  { category: "Electronics", subCategory: "Mobile", unitsSold: 15, pricePerUnit: 180 },
  { category: "Furniture", subCategory: "Chair", unitsSold: 20, pricePerUnit: 50 },
  { category: "Furniture", subCategory: "Table", unitsSold: 5, pricePerUnit: 300 },
  { category: "Electronics", subCategory: "Laptop", unitsSold: 3, pricePerUnit: 1200 },
  { category: "Furniture", subCategory: "Chair", unitsSold: 30, pricePerUnit: 45 },
  { category: "Furniture", subCategory: "Chair", unitsSold: 10, pricePerUnit: 55 },
];


const revenue = {};


sales.forEach(sale => {
  const { category, subCategory, unitsSold, pricePerUnit } = sale;
  const totalRevenue = unitsSold * pricePerUnit;


  if (!revenue[category]) {
    revenue[category] = {};
  }

  if (!revenue[category][subCategory]) {
    revenue[category][subCategory] = 0;
  }

  
  revenue[category][subCategory] += totalRevenue;
});

console.log(revenue);
