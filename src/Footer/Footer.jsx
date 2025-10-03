import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Logo */}
        <img
          src="/logo-white.png"
          alt="Front2Space Logo"
          className="h-12 mx-auto"
        />

        {/* Tagline */}
        <p className="text-gray-400 text-sm md:text-base">
          Pioneering ocean intelligence through satellite data, AI, and global collaboration — protecting sharks and our oceans.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-400 text-xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaYoutube />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center gap-4 text-sm">
          <a href="/privacy" className="hover:text-cyan-300">Privacy</a>
          <span className="text-gray-600">•</span>
          <a href="/terms" className="hover:text-cyan-300">Terms</a>
          <span className="text-gray-600">•</span>
          <a href="/contact" className="hover:text-cyan-300">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Front2Space. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
