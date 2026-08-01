"use client";

import React, { useState } from "react";
import { ShoppingBag, Tag, Star, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const apparelProducts = [
  {
    id: "app-1",
    name: "Performance Tech Blazer",
    category: "Corporate Apparel",
    price: "$280",
    rating: 4.9,
    tag: "Bestseller",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "app-2",
    name: "Minimalist Urban Hoodie",
    category: "Streetwear & Merch",
    price: "$110",
    rating: 4.8,
    tag: "New Arrival",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "app-3",
    name: "Breathable Smart Polo",
    category: "Executive Uniforms",
    price: "$85",
    rating: 4.7,
    tag: "Bulk Ready",
    sizes: ["S", "M", "L", "2XL"],
  },
];

export default function ApparelDesktop() {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [addedId, setAddedId] = useState<string>("");

  const handleAdd = (id: string) => {
    setAddedId(id);
    setTimeout(() => setAddedId(""), 2000);
  };

  return (
    <section className="py-12 my-6 theme-card p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full border border-pink-500/30">
            E-Commerce & Apparel Solution
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3">
            E-Commerce & Retail Apparel Engine
          </h2>
        </div>
        <p className="text-slate-300 text-sm max-w-md mt-2 md:mt-0">
          Sub-second catalog loading, variant matrix selection, and instant multi-currency checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apparelProducts.map((p) => (
          <div key={p.id} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-pink-500/50 transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-pink-950/80 text-pink-400 px-2.5 py-0.5 rounded-full border border-pink-800/50">
                  {p.tag}
                </span>
                <div className="flex items-center text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current mr-1" /> {p.rating}
                </div>
              </div>

              <h3 className="font-bold text-xl text-white mt-4">{p.name}</h3>
              <span className="text-xs text-slate-400 block">{p.category}</span>
              <div className="text-2xl font-black text-white mt-3">{p.price}</div>

              {/* Size Selector */}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2">Select Size:</span>
                <div className="flex space-x-2">
                  {p.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                        selectedSize === sz
                          ? "bg-pink-600 border-pink-500 text-white"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant={addedId === p.id ? "secondary" : "accent"}
              size="sm"
              className="mt-6 w-full"
              onClick={() => handleAdd(p.id)}
            >
              {addedId === p.id ? (
                <span className="flex items-center text-emerald-400 font-bold">
                  <Check className="w-4 h-4 mr-1" /> Added to Cart!
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 mr-2" /> Add to Order Drawer
                </span>
              )}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
