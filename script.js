<script>
    
    const products = [
      { id: 1, name: "Laptop", price: 55000 },
      { id: 2, name: "Phone", price: 25000 },
      { id: 3, name: "Headphones", price: 3000 },
      { id: 4, name: "Smartwatch", price: 8000 },
    ];

    
    const affordableProducts = products.filter(p => p.price < 30000);
    const productNames = affordableProducts.map(p => p.name.toUpperCase());

    
    const container = document.getElementById("homeData");
    affordableProducts.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
      `;
      container.appendChild(div);
    });

    console.log("Affordable Products:", productNames);
  </script>

