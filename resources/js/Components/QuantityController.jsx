import React, { useState, useRef, useEffect } from "react";

export function QuantityController() {
    const [quantity, setQuantity] = useState(0);
    const productRef = useRef(null); // useRef hook
  
    useEffect(() => {
      productRef.current = "productOrders"; // Set product identifier on mount
    }, []);
    
    // instead of using independent incremental and decremental, we can use a single function to handle both
    const handleQuantityChange = (delta) => {
      setQuantity(prevQuantity => Math.max(0, prevQuantity + delta));
    };

  
    return (
      <div>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
        {/* Access product identifier using productRef.current */}
      </div>
    );
  }