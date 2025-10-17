// Menu Data
const menuItems = [
  {id: 1, name: "Espresso", description: "Rich, bold shot of perfectly extracted coffee", price: 165, image: "assets/48f280cbff0c82fc63ca0b20abc52de0fc7f7c5a.png", category: "coffee"},
  {id: 2, name: "Cappuccino", description: "Espresso with steamed milk and rich foam", price: 238, image: "assets/767196d870b54da14b82d74d8019f13fddb10472.png", category: "coffee"},
  {id: 3, name: "Americano", description: "Espresso with hot water for a smooth, clean taste", price: 182, image: "assets/33a0f501248214e69ae32da7fa4635a2eba295ab.png", category: "coffee"},
  {id: 4, name: "Butter Croissant", description: "Flaky, buttery pastry baked fresh daily", price: 196, image: "assets/677a14778d7113fdb3aaa38dd2e7fc07d577792c.png", category: "pastries"},
  {id: 5, name: "Blueberry Muffin", description: "Moist muffin bursting with fresh blueberries", price: 238, image: "assets/fb514337dc8d7e0c292bd07a396f7d2806c15be3.png", category: "pastries"},
  {id: 6, name: "Almond Danish", description: "Sweet pastry topped with sliced almonds", price: 266, image: "assets/dd875031e885a444e04485c38be5ab12b923965b.png", category: "pastries"},
  {id: 7, name: "Turkey & Avocado Sandwich", description: "Fresh turkey, avocado, lettuce, and tomato on sourdough", price: 499, image: "assets/c9bac49ef3060214642caa5a74f4c48b879bc6ba.png", category: "food"},
  {id: 8, name: "Grilled Cheese", description: "Classic grilled cheese with melted cheddar", price: 364, image: "assets/dd4a42f6e06684f42b05a6162ec33d6c0253169b.png", category: "food"},
  {id: 9, name: "Garden Salad", description: "Mixed greens, cherry tomatoes, cucumbers, and balsamic", price: 434, image: "assets/1506546379c08313d3568d83edc8c0c2d86c3a0f.png", category: "food"}
];

// State
let cart = [];
let selectedCategory = "coffee";
let currentPage = "home";

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => renderCurrentPage());

function renderCurrentPage() {
  if (currentPage === "home") {
    renderHomePage();
  } else {
    renderCartPage();
  }
}

function renderHomePage() {
  const homePage = document.getElementById("homePage");
  const cartPage = document.getElementById("cartPage");
  homePage.classList.add("active");
  cartPage.classList.remove("active");
  
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const currentItems = menuItems.filter(item => item.category === selectedCategory);
  
  const categoryTitles = {
    coffee: "Coffee & Espresso",
    pastries: "Fresh Pastries",
    food: "Food & Light Meals"
  };
  
  homePage.innerHTML = `
    <div class="bg-white min-h-screen">
      <header class="border-b border-black/10 py-12 px-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-start justify-between flex-wrap gap-4">
            <div class="flex items-start gap-6">
              <div class="w-14 h-14">
                <svg class="w-full h-full" fill="none" viewBox="0 0 58 54">
                  <rect fill="black" height="54" rx="10" width="58" />
                  <path d="M24.1667 19.8V30.6M24.1667 19.8H29.9667C30.9922 19.8 31.9757 20.1793 32.7008 20.8544C33.426 21.5295 33.8333 22.4452 33.8333 23.4C33.8333 24.3548 33.426 25.2705 32.7008 25.9456C31.9757 26.6207 30.9922 27 29.9667 27H24.1667V19.8ZM24.1667 30.6C23.1412 30.6 22.1577 30.9793 21.4325 31.6544C20.7074 32.3295 20.3 33.2452 20.3 34.2M24.1667 30.6H31.9C33.4383 30.6 34.9135 29.8414 36.0012 28.4912C37.0889 27.1409 37.7 25.3096 37.7 23.4C37.7 21.4904 37.0889 19.6591 36.0012 18.3088C34.9135 16.9586 33.4383 16.2 31.9 16.2H20.3V34.2M20.3 34.2C20.3 35.1548 20.7074 36.0705 21.4325 36.7456C22.1577 37.4207 23.1412 37.8 24.1667 37.8V32.4" stroke="white" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <h1 class="font-semibold text-xl">Purr & Pour</h1>
                <p class="text-black/60">Coffee, Comfort, and Class</p>
              </div>
            </div>
            <div class="flex gap-8">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <g clip-path="url(#clip0)" opacity="0.65">
                    <path d="M10 5V10L13.3333 11.6667M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#1E1E1E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                  </g>
                  <defs><clipPath id="clip0"><rect fill="white" height="20" width="20" /></clipPath></defs>
                </svg>
                <p>Open 24-Hours</p>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <g opacity="0.65">
                    <path d="M12 22C11.7667 22 11.5667 21.9333 11.4 21.8C11.2333 21.6667 11.1083 21.4917 11.025 21.275C10.7083 20.3417 10.3083 19.4667 9.825 18.65C9.35833 17.8333 8.7 16.875 7.85 15.775C7 14.675 6.30833 13.625 5.775 12.625C5.25833 11.625 5 10.4167 5 9C5 7.05 5.675 5.4 7.025 4.05C8.39167 2.68333 10.05 2 12 2C13.95 2 15.6 2.68333 16.95 4.05C18.3167 5.4 19 7.05 19 9C19 10.5167 18.7083 11.7833 18.125 12.8C17.5583 13.8 16.9 14.7917 16.15 15.775C15.25 16.975 14.5667 17.975 14.1 18.775C13.65 19.5583 13.275 20.3917 12.975 21.275C12.8917 21.5083 12.7583 21.6917 12.575 21.825C12.4083 21.9417 12.2167 22 12 22ZM12 18.425C12.2833 17.8583 12.6 17.3 12.95 16.75C13.3167 16.2 13.85 15.4667 14.55 14.55C15.2667 13.6167 15.85 12.7583 16.3 11.975C16.7667 11.175 17 10.1833 17 9C17 7.61666 16.5083 6.44167 15.525 5.475C14.5583 4.49167 13.3833 4 12 4C10.6167 4 9.43333 4.49167 8.45 5.475C7.48333 6.44167 7 7.61666 7 9C7 10.1833 7.225 11.175 7.675 11.975C8.14167 12.7583 8.73333 13.6167 9.45 14.55C10.15 15.4667 10.675 16.2 11.025 16.75C11.3917 17.3 11.7167 17.8583 12 18.425ZM12 11.5C12.7 11.5 13.2917 11.2583 13.775 10.775C14.2583 10.2917 14.5 9.7 14.5 9C14.5 8.3 14.2583 7.70833 13.775 7.225C13.2917 6.74167 12.7 6.5 12 6.5C11.3 6.5 10.7083 6.74167 10.225 7.225C9.74167 7.70833 9.5 8.3 9.5 9C9.5 9.7 9.74167 10.2917 10.225 10.775C10.7083 11.2583 11.3 11.5 12 11.5Z" fill="#1D1B20" />
                </svg>
                <p>Clark City</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="py-8 px-8">
        <div class="max-w-7xl mx-auto flex justify-center">
          <div class="bg-gray-200 rounded-full p-1 flex gap-1">
            ${["coffee", "pastries", "food"].map(cat => `
              <button onclick="selectCategory('${cat}')" class="px-6 py-2 rounded-full ${selectedCategory === cat ? "bg-white shadow font-semibold" : "font-medium"}">
                ${cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="px-8 pb-8">
        <div class="max-w-7xl mx-auto">
          <p class="font-light">${categoryTitles[selectedCategory]}</p>
        </div>
      </div>

      <div class="h-px bg-black/50"></div>

      <div class="px-8 py-16 pb-32">
        <div class="max-w-7xl mx-auto space-y-6">
          ${currentItems.map(item => `
            <div class="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
              <div class="flex gap-6 flex-wrap">
                <div class="w-40 h-40 rounded overflow-hidden bg-gray-100">
                  <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-[200px]">
                  <div class="flex justify-between mb-2">
                    <h3 class="font-semibold text-2xl">${item.name}</h3>
                    <p class="font-semibold text-2xl">₱${item.price}</p>
                  </div>
                  <p class="text-gray-600 mb-4">${item.description}</p>
                  <button onclick="addToCart(${item.id})" class="bg-black text-white rounded-lg px-4 py-3 hover:bg-black/90 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>


      

      <div class="px-8 py-16">
        <div class="max-w-7xl mx-auto">
          ${cart.length === 0 ? `
            <div class="text-center py-24">
              <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto text-black/20 mb-6">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <h2 class="font-semibold text-3xl mb-4">Your cart is empty</h2>
              <p class="text-lg text-black/60 mb-8">Add some delicious items to get started!</p>
              <button onclick="navigateToHome()" class="bg-black text-white rounded-xl px-8 py-4 font-semibold hover:bg-black/90">Browse Menu</button>
            </div>
          ` : `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2 space-y-4">
                <div class="flex justify-between mb-6">
                  <h2 class="font-semibold text-2xl">Order Items (${cart.length})</h2>
                  <button onclick="clearCart()" class="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    </svg>
                    Clear All
                  </button>
                </div>
                ${cart.map(item => `
                  <div class="border border-gray-300 rounded-xl p-6 hover:shadow-md transition">
                    <div class="flex gap-6">
                      <div class="w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                      </div>
                      <div class="flex-1">
                        <div class="flex justify-between mb-2">
                          <div>
                            <h3 class="font-semibold text-xl">${item.name}</h3>
                            <p class="text-sm text-gray-600">${item.description}</p>
                          </div>
                          <button onclick="removeFromCart(${item.id})" class="text-red-600 hover:text-red-700">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                            </svg>
                          </button>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                          <div class="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                              </svg>
                            </button>
                            <span class="font-semibold text-lg min-w-[32px] text-center">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                              </svg>
                            </button>
                          </div>
                          <div class="text-right">
                            <p class="font-semibold text-xl">₱${item.price * item.quantity}</p>
                            <p class="text-xs text-gray-600">₱${item.price} each</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join("")}
              </div>
              <div>
                <div class="border border-gray-300 rounded-xl p-6 sticky top-8 bg-white space-y-4">
                  <h2 class="font-semibold text-2xl mb-4">Order Summary</h2>
                  <div>
                    <label class="block text-sm font-semibold mb-2">Your Name</label>
                    <input id="customerName" type="text" placeholder="Enter your name" class="w-full p-3 border border-gray-300 rounded-lg">
                  </div>
                  <div>
                    <label class="block text-sm font-semibold mb-2">Phone Number</label>
                    <input id="customerPhone" type="tel" placeholder="09XX XXX XXXX" class="w-full p-3 border border-gray-300 rounded-lg">
                  </div>
                  <div>
                    <label class="block text-sm font-semibold mb-2">Order Type</label>
                    <div class="flex gap-3">
                      <button onclick="setOrderType('dine-in')" id="dineInBtn" class="flex-1 p-3 rounded-lg bg-black text-white font-semibold">Dine In</button>
                      <button onclick="setOrderType('takeout')" id="takeoutBtn" class="flex-1 p-3 rounded-lg bg-gray-100 font-semibold">Takeout</button>
                    </div>
                  </div>
                  <div class="h-px bg-gray-200"></div>
                  <div class="flex justify-between">
                    <span>Subtotal</span>
                    <span class="font-semibold">₱${cartTotal}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Service Fee</span>
                    <span class="font-semibold">₱0</span>
                  </div>
                  <div class="h-px bg-gray-200"></div>
                  <div class="flex justify-between text-2xl font-semibold">
                    <span>Total</span>
                    <span>₱${cartTotal}</span>
                  </div>
                  <button onclick="placeOrder()" class="w-full p-4 rounded-xl bg-black text-white font-semibold hover:bg-black/90">Place Order</button>
                  <p class="text-xs text-center text-gray-600">Payment will be made at the counter</p>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

function selectCategory(category) {
  selectedCategory = category;
  renderHomePage();
}

function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  const existing = cart.find(i => i.id === itemId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...item, quantity: 1});
  }
  
  renderCurrentPage();
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  renderCurrentPage();
}

function updateQuantity(itemId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(itemId);
  } else {
    cart = cart.map(item => 
      item.id === itemId ? {...item, quantity: newQuantity} : item
    );
    renderCurrentPage();
  }
}

function clearCart() {
  cart = [];
  renderCurrentPage();
}

function navigateToCart() {
  currentPage = "cart";
  renderCurrentPage();
}

function navigateToHome() {
  currentPage = "home";
  renderCurrentPage();
}

function setOrderType(type) {
  const dineInBtn = document.getElementById("dineInBtn");
  const takeoutBtn = document.getElementById("takeoutBtn");
  
  if (type === "dine-in") {
    dineInBtn.className = "flex-1 p-3 rounded-lg bg-black text-white font-semibold";
    takeoutBtn.className = "flex-1 p-3 rounded-lg bg-gray-100 font-semibold";
  } else {
    dineInBtn.className = "flex-1 p-3 rounded-lg bg-gray-100 font-semibold";
    takeoutBtn.className = "flex-1 p-3 rounded-lg bg-black text-white font-semibold";
  }
}

function placeOrder() {
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  
  if (!name || !phone) {
    alert("Please fill in your name and phone number");
    return;
  }
  
  const orderTypeText = document.getElementById("dineInBtn").classList.contains("bg-black") ? "Dine In" : "Takeout";
  
  document.getElementById("orderCustomerName").textContent = "Order for: " + name;
  document.getElementById("orderType").textContent = "Type: " + orderTypeText;
  document.getElementById("orderOverlay").classList.remove("hidden");
  
  setTimeout(() => {
    document.getElementById("orderOverlay").classList.add("hidden");
    cart = [];
    currentPage = "home";
    renderCurrentPage();
  }, 3000);
}
