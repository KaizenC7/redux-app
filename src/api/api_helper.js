// src/api/api_helper.js

export const get = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("API Error");

  return response.json();
};
