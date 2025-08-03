import React from "react";
import { Article } from "../types/article";

type Props = {
  article: Article;
  className?: string;
};

const NewsCard: React.FC<Props> = ({ article, className = "" }) => (
  <div className={`col-span-1 ${className}`}>
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 group h-full">
      {article.urlToImage && (
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-10 max-w-xs object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
          />
        </a>
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs text-blue-700 font-bold mb-2 uppercase tracking-widest">
          {article.source.name}
        </span>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-black mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {article.title}
          </h2>
        </a>
        <p className="text-gray-700 dark:text-gray-300 text-base line-clamp-3 mb-2 flex-1">
          {article.description}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline self-start"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default NewsCard;