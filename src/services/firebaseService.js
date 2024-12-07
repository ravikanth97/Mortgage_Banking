const FIREBASE_URL = "https://react-redux-3127c-default-rtdb.firebaseio.com/products";

// Fetch all products
export const fetchProducts = async () => {
  const response = await fetch(`${FIREBASE_URL}.json`);
  if (!response.ok) throw new Error("Failed to fetch products.");
  const data = await response.json();
  return data ? Object.keys(data).map((id) => ({ id, ...data[id] })) : [];
};

// Create a new product
export const createProduct = async (product) => {
  const response = await fetch(`${FIREBASE_URL}.json`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to create product.");
  return await response.json();
};

// Delete a product
export const deleteProduct = async (id) => {
  const response = await fetch(`${FIREBASE_URL}/${id}.json`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete product.");
};

// Update a product
export const updateProduct = async (id, product) => {
  const response = await fetch(`${FIREBASE_URL}/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to update product.");
};