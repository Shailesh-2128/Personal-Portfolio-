// src/components/ui/SectionHeader.jsx
import React from "react";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-slate-400 mt-2">{subtitle}</p>}
      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
    </div>
  );
}
