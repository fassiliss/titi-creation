"use client";
import { useCart } from "@/lib/cartStore";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getTotal,
    clearCart,
  } = useCart();
  const [mounted, setMounted] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    event_type: "",
    event_date: "",
    delivery_type: "pickup",
    delivery_address: "",
    notes: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          ...formData,
          total_amount: getTotal(),
          status: "pending",
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        menu_item_id: item.id,
        item_name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      setSuccess(true);
      clearCart();
      setTimeout(() => {
        setSuccess(false);
        setShowOrderForm(false);
        closeCart();
      }, 3000);
    } catch (error) {
      console.error("Order error:", error);
      alert("Error submitting order. Please call 615-569-9687");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-drawer-overlay" onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Order</h3>
          <button onClick={closeCart} className="close-btn">
            &times;
          </button>
        </div>

        {success ? (
          <div className="cart-success">
            <h4>✅ Order Submitted!</h4>
            <p>We will contact you shortly to confirm your order.</p>
            <p>
              <strong>📞 615-569-9687</strong>
            </p>
          </div>
        ) : showOrderForm ? (
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                required
                value={formData.customer_name}
                onChange={(e) =>
                  setFormData({ ...formData, customer_name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                required
                value={formData.customer_phone}
                onChange={(e) =>
                  setFormData({ ...formData, customer_phone: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.customer_email}
                onChange={(e) =>
                  setFormData({ ...formData, customer_email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Event Type</label>
              <select
                value={formData.event_type}
                onChange={(e) =>
                  setFormData({ ...formData, event_type: e.target.value })
                }
              >
                <option value="">Select event type</option>
                <option value="birthday">Birthday</option>
                <option value="graduation">Graduation</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="family">Family Gathering</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                value={formData.event_date}
                onChange={(e) =>
                  setFormData({ ...formData, event_date: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Pickup or Delivery</label>
              <select
                value={formData.delivery_type}
                onChange={(e) =>
                  setFormData({ ...formData, delivery_type: e.target.value })
                }
              >
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            {formData.delivery_type === "delivery" && (
              <div className="form-group">
                <label>Delivery Address</label>
                <textarea
                  value={formData.delivery_address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      delivery_address: e.target.value,
                    })
                  }
                />
              </div>
            )}
            <div className="form-group">
              <label>Special Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Any special requests..."
              />
            </div>
            <div className="order-total">
              <strong>Total: ${getTotal().toFixed(2)}</strong>
            </div>
            <button
              type="submit"
              className="submit-order-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Order"}
            </button>
            <button
              type="button"
              className="back-btn"
              onClick={() => setShowOrderForm(false)}
            >
              ← Back to Cart
            </button>
          </form>
        ) : (
          <>
            <div className="cart-items">
              {items.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="item-actions">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {items.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${getTotal().toFixed(2)}</strong>
                </div>
                <button
                  className="checkout-btn"
                  onClick={() => setShowOrderForm(true)}
                >
                  Proceed to Order
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .cart-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
        }
        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          max-width: 100%;
          height: 100%;
          background: #1a1a1a;
          color: #fff;
          overflow-y: auto;
          padding: 20px;
        }
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #333;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        .cart-header h3 {
          margin: 0;
          color: #daa520;
        }
        .close-btn {
          background: none;
          border: none;
          color: #fff;
          font-size: 30px;
          cursor: pointer;
        }
        .cart-items {
          flex: 1;
        }
        .empty-cart {
          text-align: center;
          color: #888;
          padding: 40px 0;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #333;
        }
        .item-info h4 {
          margin: 0 0 5px 0;
          font-size: 16px;
        }
        .item-info p {
          margin: 0;
          color: #daa520;
        }
        .item-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .item-actions button {
          width: 30px;
          height: 30px;
          border: 1px solid #daa520;
          background: transparent;
          color: #daa520;
          cursor: pointer;
          border-radius: 5px;
        }
        .item-actions .remove-btn {
          border-color: #ff4444;
          color: #ff4444;
        }
        .cart-footer {
          border-top: 1px solid #333;
          padding-top: 20px;
          margin-top: 20px;
        }
        .cart-total {
          font-size: 20px;
          margin-bottom: 15px;
          color: #daa520;
        }
        .checkout-btn,
        .submit-order-btn {
          width: 100%;
          padding: 15px;
          background: #daa520;
          color: #1a1a1a;
          border: none;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          border-radius: 5px;
        }
        .checkout-btn:hover,
        .submit-order-btn:hover {
          background: #ffd700;
        }
        .order-form {
          padding: 10px 0;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #daa520;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #333;
          background: #2a2a2a;
          color: #fff;
          border-radius: 5px;
        }
        .form-group textarea {
          min-height: 80px;
        }
        .order-total {
          font-size: 20px;
          color: #daa520;
          margin: 20px 0;
        }
        .back-btn {
          width: 100%;
          padding: 12px;
          background: transparent;
          color: #888;
          border: 1px solid #444;
          margin-top: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        .cart-success {
          text-align: center;
          padding: 40px 20px;
        }
        .cart-success h4 {
          color: #4caf50;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
