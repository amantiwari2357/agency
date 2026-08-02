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
    <section className="py-12 my-6 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8 shadow-xl shadow-[#4d7cf5]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-3 py-1 rounded-full border border-[#4d7cf5]/30">
            E-Commerce & Apparel Solution
          </span>
          <h2 className="text-3xl font-extrabold text-[#1c1f26] mt-3">
            E-Commerce & Retail Apparel Engine
          </h2>
        </div>
        <p className="text-[#4a5060] text-sm max-w-md mt-2 md:mt-0">
          Sub-second catalog loading, variant matrix selection, and instant multi-currency checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apparelProducts.map((p) => (
          <div key={p.id} className="bg-[#eef0f4] p-6 rounded-2xl border border-[#4d7cf5]/20 flex flex-col justify-between hover:border-[#4d7cf5] transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-2.5 py-0.5 rounded-full border border-[#4d7cf5]/30">
                  {p.tag}
                </span>
                <div className="flex items-center text-[#4d7cf5] text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current mr-1" /> {p.rating}
                </div>
              </div>

              <h3 className="font-bold text-xl text-[#1c1f26] mt-4">{p.name}</h3>
              <span className="text-xs text-[#4a5060] block">{p.category}</span>
              <div className="text-2xl font-black text-[#4d7cf5] mt-3">{p.price}</div>

              {/* Size Selector */}
              <div className="mt-4 pt-4 border-t border-[#4d7cf5]/20">
                <span className="text-[11px] font-semibold text-[#4a5060] block mb-2">Select Size:</span>
                <div className="flex space-x-2">
                  {p.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                        selectedSize === sz
                          ? "bg-[#4d7cf5] border-[#4d7cf5] text-white"
                          : "bg-white border-[#4d7cf5]/20 text-[#4a5060] hover:text-[#1c1f26]"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant={addedId === p.id ? "secondary" : "primary"}
              size="sm"
              className="mt-6 w-full"
              onClick={() => handleAdd(p.id)}
            >
              {addedId === p.id ? (
                <span className="flex items-center text-[#4d7cf5] font-bold">
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
