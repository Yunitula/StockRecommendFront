import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between p-6 border-t bg-white z-10">
      <div className="text-sm text-gray-600">©2025 NepseDai. All rights reserved.</div>
      <div className="flex gap-6 text-sm text-gray-600">
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
