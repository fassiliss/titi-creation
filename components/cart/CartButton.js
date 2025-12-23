"use client";
import { useCart } from "@/lib/cartStore";
import { useState, useEffect } from "react";

export default function CartButton() {
  const { openCart, getCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const count = mounted ? getCount() : 0;

  return (
    <button onClick={openCart} className="cart-button">
      🛒 {mounted && count > 0 && <span className="cart-count">{count}</span>}
      <style jsx>{`
        .cart-button {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 999;
          background: #daa520;
          color: #1a1a1a;
          border: none;
          padding: 12px 20px;
          font-size: 20px;
          cursor: pointer;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(218, 165, 32, 0.4);
        }
        .cart-count {
          background: #1a1a1a;
          color: #daa520;
          padding: 2px 8px;
          border-radius: 50%;
          font-size: 14px;
          margin-left: 5px;
        }
      `}</style>
    </button>
  );
}
