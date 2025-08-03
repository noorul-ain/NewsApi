"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../utils/fetchNews";
import { Article } from "../types/article";

// Helper function to chunk array
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNews(category)
      .then(setArticles)
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 pb-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />
        <CategoryFilter selected={category} onCategoryChange={setCategory} />
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500">No articles found.</p>
        ) : (
          <div className="flex flex-col gap-8 mt-6">
            {chunkArray(articles, 4).map((group, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-8">
                {group.map(article => (
                  <NewsCard key={article.url} article={article} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
