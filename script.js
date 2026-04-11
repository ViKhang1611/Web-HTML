// Product Data
const products = [
  {
    id: 1,
    name: "Nebula Z7 – Máy hút lông thú khi chải",
    description:
      "Nebula Z7 là thiết bị chải lông thú cưng tích hợp lực hút 120AW giúp hút lông ngay khi chải, hạn chế lông bay ra môi trường. Máy sử dụng pin 2500mAh cho thời gian hoạt động đến 45 phút. Bộ lọc HEPA 3 lớp giúp giữ lại lông thú và bụi mịn, mang lại không gian sạch sẽ. Thiết kế nhẹ 1.5kg giúp thao tác dễ dàng khi chăm sóc thú cưng, đặc biệt phù hợp cho gia đình nuôi chó mèo.",
    price: 1199000,
    image: "image/NB7.png",
  },
  {
    id: 2,
    name: "Nebula Z8 – Robot hút bụi",
    description:
      "Nebula Z8 là robot hút bụi thông minh giúp tự động làm sạch sàn nhà mỗi ngày. Với lực hút 3000Pa mạnh mẽ, robot có thể hút bụi, tóc và lông thú hiệu quả. Pin dung lượng 2600mAh cho thời gian hoạt động liên tục đến 90 phút. Hệ thống lọc HEPA 3 lớp giúp giữ lại bụi mịn và cải thiện chất lượng không khí. Thiết bị phù hợp cho người bận rộn và các căn hộ chung cư.",
    price: 2490000,
    image: "image/NB8.png",
  },
  {
    id: 3,
    name: "Nebula Z9 – Máy hút bụi gia đình Pro",
    description:
      "Nebula Z9 là máy hút bụi gia đình mạnh mẽ với lực hút 185AW giúp làm sạch sâu bụi bẩn trên sàn nhà, thảm và sofa. Máy sử dụng pin 3000mAh cho thời gian hoạt động đến 60 phút. Hệ thống lọc HEPA 5 lớp giúp giữ lại bụi mịn và các tác nhân gây dị ứng. Với trọng lượng chỉ 1.6kg, người dùng có thể dễ dàng thao tác trong quá trình vệ sinh. Đây là dòng bán chạy nhất trong Nebula Series và đặc biệt phù hợp cho gia đình có thú cưng.",
    price: 1990000,
    image: "image/NB9.png",
  },
  {
    id: 4,
    name: "Nebula Z4 – Máy hút bụi mini để bàn",
    description:
      "Nebula Z4 là máy hút bụi mini để bàn với thiết kế nhỏ gọn chỉ 0.35kg, phù hợp cho bàn làm việc, bàn học hoặc bàn trang điểm. Lực hút 6.000Pa giúp hút sạch bụi, vụn bánh và tóc trên bề mặt bàn. Máy sử dụng pin 1200mAh cho thời gian hoạt động khoảng 20 phút. Bộ lọc bụi mini giúp giữ bụi gọn bên trong, mang lại không gian làm việc sạch sẽ. Đây là giải pháp vệ sinh nhanh và tiện lợi cho sinh viên và dân văn phòng.",
    price: 299000,
    image: "image/NB4.png",
  },
  {
    id: 5,
    name: "Nebula Z5 – Máy hút bụi cầm tay",
    description:
      "Nebula Z5 là máy hút bụi cầm tay nhỏ gọn với lực hút 10.000Pa mạnh mẽ hơn dòng mini, giúp làm sạch nhanh bụi, tóc và lông thú trong xe hơi hoặc trên sofa. Máy trang bị pin 1800mAh cho thời gian sử dụng khoảng 25 phút. Bộ lọc HEPA cơ bản giúp giữ lại bụi mịn, mang lại không gian sạch hơn. Với trọng lượng chỉ 0.65kg, người dùng có thể dễ dàng cầm tay và thao tác trong các góc nhỏ.",
    price: 499000,
    image: "image/NB5.png",
  },
  {
    id: 6,
    name: "Nebula Z6 – Máy hút bụi gia đình nhỏ gọn",
    description:
      "Nebula Z6 là máy hút bụi gia đình nhỏ gọn phù hợp cho căn hộ nhỏ, phòng trọ hoặc studio. Với lực hút 150AW, máy giúp làm sạch hiệu quả bụi bẩn trên sàn nhà và thảm mỏng. Pin dung lượng 2200mAh cho thời gian hoạt động đến 40 phút. Hệ thống lọc HEPA 3 lớp giúp giữ lại bụi mịn tốt hơn, góp phần giữ không khí trong nhà sạch sẽ. Thiết kế nhẹ 1.3kg giúp dễ dàng di chuyển và sử dụng trong quá trình vệ sinh.",
    price: 899000,
    image: "image/NB6.png",
  },
  {
    id: 7,
    name: "Nebula Z10 – Máy hút bụi + dock sạc",
    description:
      "Nebula Z10 là máy hút bụi cao cấp với lực hút 220AW mạnh nhất trong Nebula Series, giúp làm sạch sâu bụi bẩn trong toàn bộ không gian sống. Máy sử dụng pin 3500mAh cho thời gian hoạt động lên đến 70 phút. Hệ thống lọc HEPA 5 lớp giúp giữ lại bụi mịn và các tác nhân gây dị ứng. Dock sạc tiện lợi giúp sạc và cất giữ máy tự động, mang lại trải nghiệm sử dụng hiện đại và gọn gàng cho gia đình.",
    price: 3490000,
    image: "image/NB10.png",
  },
];

// Cart Array
let cart = [];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Máy hút bụi Nebula Z9 thật sự tuyệt vời! Lông chó của tôi rụng rất nhiều nhưng máy hút sạch hoàn toàn. Pin trâu, hút được cả nhà mà vẫn còn pin. Rất đáng tiền!",
    date: "2 ngày trước",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Mình nuôi 2 con mèo nên nhà lúc nào cũng đầy lông. Từ khi dùng Nebula Z9, việc dọn dẹp trở nên dễ dàng hơn rất nhiều. Lực hút mạnh, thiết kế đẹp, rất hài lòng!",
    date: "5 ngày trước",
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "Sản phẩm chất lượng cao, đóng gói cẩn thận. Máy hoạt động êm, không ồn như mấy loại khác. Hệ thống lọc HEPA rất tốt, phù hợp cho người bị dị ứng như mình.",
    date: "1 tuần trước",
  },
  {
    id: 4,
    name: "Phạm Minh Tuấn",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    text: "Giao hàng nhanh, nhân viên tư vấn nhiệt tình. Máy hút bụi rất mạnh, pin lâu, thiết kế sang trọng. Gia đình mình rất thích, đặc biệt là các con nhỏ thích xem máy hoạt động.",
    date: "1 tuần trước",
  },
  {
    id: 5,
    name: "Võ Thị Lan",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "Mình đã thử nhiều loại máy hút bụi nhưng Nebula Z9 là tốt nhất. Hút sạch cả bụi nhỏ li ti, màn hình LED hiển thị rõ ràng. Rất đáng để đầu tư cho gia đình!",
    date: "2 tuần trước",
  },
  {
    id: 6,
    name: "Hoàng Văn Nam",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    text: "Chất lượng vượt mong đợi! Máy nhẹ, dễ cầm, hút sạch cả góc khuất. Bộ phụ kiện đầy đủ, phù hợp với nhiều bề mặt. Giá cả hợp lý so với chất lượng.",
    date: "2 tuần trước",
  },
  {
    id: 7,
    name: "Đặng Thị Thu",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=10",
    rating: 5,
    text: "Mua cho mẹ dùng, bà rất thích vì máy nhẹ và dễ sử dụng. Không cần dây điện nên rất tiện, hút được cả trên cao. Bảo hành tốt, hỗ trợ nhiệt tình.",
    date: "3 tuần trước",
  },
  {
    id: 8,
    name: "Bùi Văn Đức",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "Sản phẩm tốt, giá hợp lý. Lực hút mạnh mẽ, pin trâu, thiết kế đẹp. Shop giao hàng nhanh, đóng gói cẩn thận. Sẽ giới thiệu cho bạn bè!",
    date: "3 tuần trước",
  },
  {
    id: 9,
    name: "Ngô Thị Hà",
    location: "TP.HCM",
    avatar: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    text: "Máy hút bụi tuyệt vời cho gia đình có thú cưng! Hút sạch lông chó mèo, bụi bẩn. Dễ vệ sinh, dễ bảo quản. Rất đáng mua!",
    date: "1 tháng trước",
  },
];

let currentTestimonialIndex = 0;
const SHIPPING_FEE = 0;
const PAYMENT_METHODS = {
  cod: {
    label: "Thanh toán khi giao hàng (COD)",
    usesQRCode: false,
  },
  momo: {
    label: "Thanh toán trực tuyến qua ví MoMo",
    usesQRCode: true,
  },
  vnpay: {
    label: "Thanh toán trực tuyến qua cổng VNPAY",
    usesQRCode: true,
  },
  fundiin: {
    label: "Trả sau qua Fundiin",
    usesQRCode: true,
  },
  bank_qr: {
    label: "Chuyển tài khoản qua QR - Techcombank",
    usesQRCode: true,
  },
};
let pendingCheckoutOrder = null;

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  loadCartFromStorage();
  updateCartUI();
  loadTestimonials();
  startTestimonialAutoSlide();
  initializeProductModal();
  initializeCheckoutFlow();
});

// Load Products
function loadProducts() {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-product-id", product.id);
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="btn-add-cart" type="button">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;

    productCard.addEventListener("click", () => openProductDetail(product.id));

    const addToCartButton = productCard.querySelector(".btn-add-cart");
    addToCartButton.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(product.id);
    });

    productsGrid.appendChild(productCard);
  });
}

function getProductById(productId) {
  return products.find((product) => product.id === Number(productId));
}

function initializeProductModal() {
  const productModal = document.getElementById("productModal");
  const closeButton = document.getElementById("productModalClose");

  if (!productModal) return;

  closeButton?.addEventListener("click", closeProductDetail);

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeProductDetail();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productModal.classList.contains("active")) {
      closeProductDetail();
    }
  });
}

function openProductDetail(productId) {
  const product = getProductById(productId);
  const productModal = document.getElementById("productModal");
  const modalId = document.getElementById("productModalId");
  const modalTitle = document.getElementById("productModalTitle");
  const modalPrice = document.getElementById("productModalPrice");
  const modalDescription = document.getElementById("productModalDescription");
  const modalImage = document.getElementById("productModalImage");
  const addToCartButton = document.getElementById("productModalAddToCart");

  if (!product || !productModal) return;

  modalId.textContent = `Mã sản phẩm: #${product.id}`;
  modalTitle.textContent = product.name;
  modalPrice.textContent = formatPrice(product.price);
  modalDescription.textContent = product.description;
  modalImage.src = product.image;
  modalImage.alt = product.name;

  addToCartButton.onclick = () => addToCart(product.id);

  productModal.classList.add("active");
  productModal.setAttribute("aria-hidden", "false");
  updateBodyScrollLock();
}

function closeProductDetail() {
  const productModal = document.getElementById("productModal");

  if (!productModal) return;

  productModal.classList.remove("active");
  productModal.setAttribute("aria-hidden", "true");
  updateBodyScrollLock();
}

function updateBodyScrollLock() {
  const hasActiveOverlay = [
    "cartSidebar",
    "productModal",
    "checkoutScreen",
    "qrScreen",
  ].some((id) => document.getElementById(id)?.classList.contains("active"));

  document.body.style.overflow = hasActiveOverlay ? "hidden" : "";
}

function getCartTotal(items = cart) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function initializeCheckoutFlow() {
  const checkoutClose = document.getElementById("checkoutClose");
  const qrClose = document.getElementById("qrClose");
  const qrBackButton = document.getElementById("qrBackButton");
  const qrDoneButton = document.getElementById("qrDoneButton");

  checkoutClose?.addEventListener("click", closeCheckoutPage);
  qrClose?.addEventListener("click", closeQRPage);
  qrBackButton?.addEventListener("click", returnToCheckoutFromQR);
  qrDoneButton?.addEventListener("click", completePayment);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (document.getElementById("qrScreen")?.classList.contains("active")) {
      closeQRPage();
      return;
    }

    if (
      document.getElementById("checkoutScreen")?.classList.contains("active")
    ) {
      closeCheckoutPage();
    }
  });
}

function buildSummaryMarkup(items) {
  return items
    .map(
      (item) => `
        <div class="summary-item">
          <img src="${item.image}" alt="${item.name}" class="summary-item-image">
          <div class="summary-item-info">
            <p class="summary-item-name">${item.name}</p>
            <p class="summary-item-meta">Số lượng: ${item.quantity}</p>
          </div>
          <div class="summary-item-price">${formatPrice(item.price * item.quantity)}</div>
        </div>
      `,
    )
    .join("");
}

function renderCheckoutSummary() {
  const checkoutSummaryItems = document.getElementById("checkoutSummaryItems");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutShipping = document.getElementById("checkoutShipping");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const total = getCartTotal();

  if (
    !checkoutSummaryItems ||
    !checkoutSubtotal ||
    !checkoutShipping ||
    !checkoutTotal
  ) {
    return;
  }

  checkoutSummaryItems.innerHTML = buildSummaryMarkup(cart);
  checkoutSubtotal.textContent = formatPrice(total);
  checkoutShipping.textContent =
    SHIPPING_FEE === 0 ? "Miễn phí" : formatPrice(SHIPPING_FEE);
  checkoutTotal.textContent = formatPrice(total + SHIPPING_FEE);
}

function renderQRCodePage(order) {
  const qrCodeImage = document.getElementById("qrCodeImage");
  const qrOrderCode = document.getElementById("qrOrderCode");
  const qrReceiverName = document.getElementById("qrReceiverName");
  const qrReceiverPhone = document.getElementById("qrReceiverPhone");
  const qrReceiverAddress = document.getElementById("qrReceiverAddress");
  const qrPaymentTotal = document.getElementById("qrPaymentTotal");
  const qrPaymentMethod = document.getElementById("qrPaymentMethod");
  const qrTransferContent = document.getElementById("qrTransferContent");
  const qrOrderItems = document.getElementById("qrOrderItems");

  if (
    !qrCodeImage ||
    !qrOrderCode ||
    !qrReceiverName ||
    !qrReceiverPhone ||
    !qrReceiverAddress ||
    !qrPaymentTotal ||
    !qrPaymentMethod ||
    !qrTransferContent ||
    !qrOrderItems
  ) {
    return;
  }

  qrCodeImage.src = "image/down.jpg";
  qrOrderCode.textContent = order.code;
  qrReceiverName.textContent = order.customer.fullName;
  qrReceiverPhone.textContent = order.customer.phone;
  qrReceiverAddress.textContent = `${order.customer.address}, ${order.customer.city}`;
  qrPaymentMethod.textContent = order.paymentMethodLabel;
  qrPaymentTotal.textContent = formatPrice(order.total);
  qrTransferContent.textContent = order.transferContent;
  qrOrderItems.innerHTML = buildSummaryMarkup(order.items);
}

function openCheckoutPage() {
  const checkoutScreen = document.getElementById("checkoutScreen");

  if (!checkoutScreen || cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  pendingCheckoutOrder = null;
  closeCartSidebar();
  renderCheckoutSummary();
  checkoutScreen.classList.add("active");
  checkoutScreen.setAttribute("aria-hidden", "false");
  updateBodyScrollLock();
}

function closeCheckoutPage() {
  const checkoutScreen = document.getElementById("checkoutScreen");

  if (!checkoutScreen) return;

  checkoutScreen.classList.remove("active");
  checkoutScreen.setAttribute("aria-hidden", "true");
  updateBodyScrollLock();
}

function returnToCartFromCheckout() {
  pendingCheckoutOrder = null;
  closeCheckoutPage();
  openCartSidebar();
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    closeCheckoutPage();
    return;
  }

  const formData = new FormData(event.target);
  const customer = {
    fullName: formData.get("fullName")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    city: formData.get("city")?.toString().trim() || "",
    address: formData.get("address")?.toString().trim() || "",
    notes: formData.get("notes")?.toString().trim() || "",
  };

  if (
    !customer.fullName ||
    !customer.phone ||
    !customer.email ||
    !customer.city ||
    !customer.address
  ) {
    alert("Vui lòng nhập đầy đủ thông tin người nhận.");
    return;
  }

  const items = cart.map((item) => ({ ...item }));
  const subtotal = getCartTotal(items);
  const total = subtotal + SHIPPING_FEE;
  const code = `BC${Date.now().toString().slice(-8)}`;
  const paymentMethod = formData.get("paymentMethod")?.toString() || "bank_qr";
  const paymentConfig =
    PAYMENT_METHODS[paymentMethod] || PAYMENT_METHODS.bank_qr;

  pendingCheckoutOrder = {
    code,
    customer,
    items,
    subtotal,
    total,
    paymentMethod,
    paymentMethodLabel: paymentConfig.label,
    usesQRCode: paymentConfig.usesQRCode,
    transferContent: `BOSSCLEAR ${code}`,
  };

  if (!paymentConfig.usesQRCode) {
    finalizeOrder(`Đã ghi nhận đơn hàng ${code} - thanh toán khi nhận hàng.`);
    return;
  }

  closeCheckoutPage();
  showQRCode();
}

function showQRCode() {
  const qrScreen = document.getElementById("qrScreen");

  if (!qrScreen || !pendingCheckoutOrder) return;

  renderQRCodePage(pendingCheckoutOrder);
  qrScreen.classList.add("active");
  qrScreen.setAttribute("aria-hidden", "false");
  updateBodyScrollLock();
}

function closeQRPage() {
  const qrScreen = document.getElementById("qrScreen");

  if (!qrScreen) return;

  qrScreen.classList.remove("active");
  qrScreen.setAttribute("aria-hidden", "true");
  updateBodyScrollLock();
}

function returnToCheckoutFromQR() {
  closeQRPage();
  renderCheckoutSummary();

  const checkoutScreen = document.getElementById("checkoutScreen");
  checkoutScreen?.classList.add("active");
  checkoutScreen?.setAttribute("aria-hidden", "false");
  updateBodyScrollLock();
}

function completePayment() {
  if (!pendingCheckoutOrder) {
    closeQRPage();
    return;
  }

  finalizeOrder(`Đã ghi nhận thanh toán cho đơn ${pendingCheckoutOrder.code}!`);
}

function finalizeOrder(message) {
  cart = [];
  pendingCheckoutOrder = null;
  saveCartToStorage();
  updateCartUI();
  closeQRPage();
  closeCheckoutPage();
  closeCartSidebar();
  document.getElementById("checkoutForm")?.reset();
  showNotification(message);
}

// Format Price
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCartToStorage();
  updateCartUI();
  showNotification("Đã thêm vào giỏ hàng!");
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCartToStorage();
      updateCartUI();
    }
  }
}

// Update Cart UI
function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  // Update count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update items
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatPrice(total);

  if (document.getElementById("checkoutScreen")?.classList.contains("active")) {
    renderCheckoutSummary();
  }
}

function openCartSidebar() {
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");

  cartSidebar?.classList.add("active");
  overlay?.classList.add("active");
  updateBodyScrollLock();
}

function closeCartSidebar() {
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");

  cartSidebar?.classList.remove("active");
  overlay?.classList.remove("active");
  updateBodyScrollLock();
}

// Toggle Cart
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");

  if (cartSidebar?.classList.contains("active")) {
    closeCartSidebar();
    return;
  }

  openCartSidebar();
}

// Checkout
function checkout() {
  openCheckoutPage();
}

// Save Cart to LocalStorage
function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Show Notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
  notification.textContent = message;

  // Add animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideIn 0.3s ease reverse";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Handle Contact Form Submit
function handleContactSubmit(event) {
  event.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  event.target.reset();
}

// Load Testimonials
function loadTestimonials() {
  const testimonialsTrack = document.getElementById("testimonialsTrack");
  const testimonialsDots = document.getElementById("testimonialsDots");

  if (!testimonialsTrack || !testimonialsDots) return;

  // Clear existing content
  testimonialsTrack.innerHTML = "";
  testimonialsDots.innerHTML = "";

  // Load testimonials
  testimonials.forEach((testimonial, index) => {
    // Create testimonial card
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${testimonial.location}</p>
                </div>
            </div>
            <div class="testimonial-rating">
                ${generateStars(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-date">${testimonial.date}</p>
        `;
    testimonialsTrack.appendChild(card);

    // Create dot
    const dot = document.createElement("div");
    dot.className = `testimonial-dot ${index === 0 ? "active" : ""}`;
    dot.onclick = () => goToTestimonial(index);
    testimonialsDots.appendChild(dot);
  });
}

// Generate Stars
function generateStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<i class="fas fa-star"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

// Go to Testimonial
function goToTestimonial(index) {
  const testimonialsTrack = document.getElementById("testimonialsTrack");
  const dots = document.querySelectorAll(".testimonial-dot");

  if (!testimonialsTrack) return;

  // Calculate how many cards to show based on screen width
  const cardsToShow = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = Math.ceil(testimonials.length / cardsToShow) - 1;

  // Ensure index is within bounds
  currentTestimonialIndex = Math.max(0, Math.min(index, maxIndex));

  // Calculate offset
  const cardWidth = testimonialsTrack.children[0]?.offsetWidth || 0;
  const gap = 30;
  const offset = currentTestimonialIndex * (cardWidth + gap) * cardsToShow;

  testimonialsTrack.style.transform = `translateX(-${offset}px)`;

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentTestimonialIndex);
  });
}

// Next Testimonial
function nextTestimonial() {
  const cardsToShow = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = Math.ceil(testimonials.length / cardsToShow) - 1;

  if (currentTestimonialIndex < maxIndex) {
    goToTestimonial(currentTestimonialIndex + 1);
  } else {
    goToTestimonial(0);
  }
}

// Previous Testimonial
function previousTestimonial() {
  const cardsToShow = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = Math.ceil(testimonials.length / cardsToShow) - 1;

  if (currentTestimonialIndex > 0) {
    goToTestimonial(currentTestimonialIndex - 1);
  } else {
    goToTestimonial(maxIndex);
  }
}

// Auto Slide Testimonials
let testimonialInterval;

function startTestimonialAutoSlide() {
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 8000); // Change every 8 seconds (chậm hơn để đọc kỹ)
}

function stopTestimonialAutoSlide() {
  clearInterval(testimonialInterval);
}

// Stop auto slide when user interacts
document.addEventListener("DOMContentLoaded", function () {
  const testimonialBtns = document.querySelectorAll(".testimonial-btn");

  testimonialBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      stopTestimonialAutoSlide();
      setTimeout(startTestimonialAutoSlide, 15000); // Resume after 15 seconds (cho người dùng thời gian tương tác)
    });
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
