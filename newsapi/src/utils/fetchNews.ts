import { Article } from "../types/article";

const API_KEY = "d074740958a14f13b89f3e68b60dda72"; // User's NewsAPI key
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export async function fetchNews(category: string, query?: string): Promise<Article[]> {
  let url = `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`;
  if (query) {
    url += `&q=${encodeURIComponent(query)}`;
  }
  const res = await fetch(url);
  const data = await res.json();
  if (data.status === "ok") {
    return data.articles;
  } else {
    throw new Error(data.message || "Failed to fetch news");
  }
}