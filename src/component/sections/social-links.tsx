import React from 'react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 py-4">
      <a href="https://facebook.com" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 text-2xl">
        <span aria-label="Facebook" role="img">🔵</span>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-600 text-2xl">
        <span aria-label="Twitter" role="img">🐦</span>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-blue-700 hover:text-blue-900 text-2xl">
        <span aria-label="LinkedIn" role="img">💼</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-500 hover:text-pink-700 text-2xl">
        <span aria-label="Instagram" role="img">📸</span>
      </a>
    </div>
  );
}
