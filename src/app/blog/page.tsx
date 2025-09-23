"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

type Article = {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
  slug: string;
};

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      const snapshot = await getDocs(collection(db, "blog"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article));
      setArticles(data);
    }
    fetchArticles();
  }, []);

  const filtered = articles.filter(
    a =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 py-12 px-4 mt-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center">Security Blog</h1>
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full max-w-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.length === 0 && (
              <div className="text-gray-300 col-span-2 text-center">No articles found.</div>
            )}
            {filtered.map(article => (
              <div key={article.id} className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-0 flex flex-col border-t-4 border-blue-400 animate-section-in">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-700 text-white px-2 py-1 rounded">{article.category}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-200 mb-2">{article.title}</h2>
                  <p className="text-gray-200 mb-4 flex-1">{article.summary}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="self-start px-4 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}