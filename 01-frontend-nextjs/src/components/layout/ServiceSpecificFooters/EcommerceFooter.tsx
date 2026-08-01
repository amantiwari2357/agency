import React from "react";
import { Truck, RotateCcw, Lock, CreditCard } from "lucide-react";

export function EcommerceFooter() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-10 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-sm mb-3">AEX Apparel & Retail Storefront</h4>
          <p className="text-slate-400 leading-relaxed">
            Sub-second e-commerce catalog platform with global currency checkout and size variant matrices.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Customer Guarantees</h5>
          <ul className="space-y-1 text-slate-400">
            <li className="flex items-center"><Truck className="w-3.5 h-3.5 mr-1 text-pink-400" /> Express 2-Day Shipping</li>
            <li className="flex items-center"><RotateCcw className="w-3.5 h-3.5 mr-1 text-pink-400" /> 30-Day Easy Returns</li>
            <li className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1 text-pink-400" /> 256-Bit SSL Encrypted</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Payment Gateways</h5>
          <p className="text-slate-400">Stripe, PayPal, Apple Pay, Klarna & Local AED Payment Mesh</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <CreditCard className="w-6 h-6 text-pink-400 mb-1" />
          <span className="text-white font-bold block">PCI-DSS Level 1</span>
          <span className="text-[11px] text-slate-400">Certified E-Commerce Checkout</span>
        </div>
      </div>
    </footer>
  );
}
