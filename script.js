// Product Data
const products = [
    {
        id: 1,
        name: "Máy hút bụi lau nhà cầm tay Roborock F25",
        description: "Máy hút bụi lau nhà cầm tay Roborock F25 ghi điểm nhờ vào lực hút 20.000 Pa với chế độ làm sạch linh hoạt, loại bỏ hiệu quả bụi bẩn cả khô lẫn ướt. Thiết kế máy hút bụi cầm tay Roborock nhỏ gọn, với công nghệ JawSraper, ngăn vướng tóc vào cửa hút gấp 4 lần.",
        price: 29990000,
        image: "image/may-hut-bui-lau-nha-cam-tay-roborock-f25-morph_1_.jpg"
    },
    {
        id: 2,
        name: "MÁY HÚT BỤI CÓ DÂY BOSCH BGS21WPOW 2000W, 2L",
        description: "Bosch BGS2UPWER1 là máy hút bụi rất được ưa chuộng, máy cung cấp lực hút khỏe với công suất đầu vào 2.500W mạnh mẽ, giúp hút bụi hiệu quả và nhanh chóng.",
        price: 27990000,
        image: "image/may-hut-bui-bosch-bgs2upwer1-1_166049245d744f8c850656c9ac784fc5.png"
    },
    {
        id: 3,
        name: "Máy hút bụi gia đình HICLEAN HC15P",
        description: "Máy hút bụi gia đình HICLEAN HC15P là thiết bị vệ sinh hoạt động dựa trên nguyên lý lực hút để thu gom bụi bẩn, tóc rụng, lông thú cưng, mảnh vụn, ... trên sàn nhà, thảm, sofa, chăn ga gối đệm và các bề mặt khác trong không gian sống.",
        price: 45990000,
        image: "image/may_hut_bui_hiclean_hc15p_h1.jpg"
    },
    {
        id: 4,
        name: "Máy hút bụi 25lit 4Hp 3 chức năng Dewalt DXV25S",
        description: "Máy hút bụi 25lit 4Hp 3 chức năng Dewalt DXV25S là lựa chọn lý tưởng cho những người cần một chiếc máy hút bụi mạnh mẽ và hiệu quả.",
        price: 32990000,
        image: "image/may-hut-bui-3-chuc-nang-dewalt-dxv25s-25lit-4hp.jpg"
    },
    {
        id: 5,
        name: "Máy hút bụi lau nhà ướt khô không dây thế hệ mới lực hút 18000PA Jetzt series H17",
        description: "Máy hút bụi lau nhà ướt khô không dây thế hệ mới lực hút 18000PA Jetzt series H17 là sản phẩm của hãng máy hút bụi hàng đầu Đức, với thiết kế hiện đại, tiện lợi và hiệu quả.",
        price: 6490000,
        image: "image/h17 (1).png"
    },
    {
        id: 6,
        name: "Máy hút bụi công nghiệp 30L – Đức Bảo Automart",
        description: "Máy hút bụi công nghiệp 30L – Đức Bảo Automart là lựa chọn lý tưởng cho những người cần một chiếc máy hút bụi mạnh mẽ và hiệu quả.",
        price: 10990000,
        image: "image/may-hut-bui-30-L.jpg"
    },
    {
        id: 7,
        name: "Máy hút bụi gia đình Sumika K20, 1600W, thùng chứa 20L, lọc HEPA",
        description: "Máy hút bụi gia đình Sumika K20 là lựa chọn lý tưởng cho những người cần một chiếc máy hút bụi mạnh mẽ và hiệu quả.",
        price: 8990000,
        image: "image/may_hut_bui_gia_dinh_sumika_k20_h3.jpg"
    },
    {
        id: 8,
        name: "Máy hút bụi Hitachi Nhật Bản CV-BH18 công suất 1800W, xuất xứ Thái Lan",
        description: "Máy hút bụi Hitachi Nhật Bản CV-BH18 là lựa chọn lý tưởng cho những người cần một chiếc máy hút bụi mạnh mẽ và hiệu quả.",
        price: 42990000,
        image: "image/may-hut-bui-hitachi-cv-bh18-24cv-bl-shr-1.jpg"
    }
];

// Cart Array
let cart = [];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Nguyễn Thị Mai",
        location: "Hà Nội",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        text: "Máy hút bụi Nebula Z9 thật sự tuyệt vời! Lông chó của tôi rụng rất nhiều nhưng máy hút sạch hoàn toàn. Pin trâu, hút được cả nhà mà vẫn còn pin. Rất đáng tiền!",
        date: "2 ngày trước"
    },
    {
        id: 2,
        name: "Trần Văn Hùng",
        location: "TP.HCM",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        text: "Mình nuôi 2 con mèo nên nhà lúc nào cũng đầy lông. Từ khi dùng Nebula Z9, việc dọn dẹp trở nên dễ dàng hơn rất nhiều. Lực hút mạnh, thiết kế đẹp, rất hài lòng!",
        date: "5 ngày trước"
    },
    {
        id: 3,
        name: "Lê Thị Hương",
        location: "Đà Nẵng",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        text: "Sản phẩm chất lượng cao, đóng gói cẩn thận. Máy hoạt động êm, không ồn như mấy loại khác. Hệ thống lọc HEPA rất tốt, phù hợp cho người bị dị ứng như mình.",
        date: "1 tuần trước"
    },
    {
        id: 4,
        name: "Phạm Minh Tuấn",
        location: "Cần Thơ",
        avatar: "https://i.pravatar.cc/150?img=13",
        rating: 5,
        text: "Giao hàng nhanh, nhân viên tư vấn nhiệt tình. Máy hút bụi rất mạnh, pin lâu, thiết kế sang trọng. Gia đình mình rất thích, đặc biệt là các con nhỏ thích xem máy hoạt động.",
        date: "1 tuần trước"
    },
    {
        id: 5,
        name: "Võ Thị Lan",
        location: "Hải Phòng",
        avatar: "https://i.pravatar.cc/150?img=9",
        rating: 5,
        text: "Mình đã thử nhiều loại máy hút bụi nhưng Nebula Z9 là tốt nhất. Hút sạch cả bụi nhỏ li ti, màn hình LED hiển thị rõ ràng. Rất đáng để đầu tư cho gia đình!",
        date: "2 tuần trước"
    },
    {
        id: 6,
        name: "Hoàng Văn Nam",
        location: "Nha Trang",
        avatar: "https://i.pravatar.cc/150?img=14",
        rating: 5,
        text: "Chất lượng vượt mong đợi! Máy nhẹ, dễ cầm, hút sạch cả góc khuất. Bộ phụ kiện đầy đủ, phù hợp với nhiều bề mặt. Giá cả hợp lý so với chất lượng.",
        date: "2 tuần trước"
    },
    {
        id: 7,
        name: "Đặng Thị Thu",
        location: "Vũng Tàu",
        avatar: "https://i.pravatar.cc/150?img=10",
        rating: 5,
        text: "Mua cho mẹ dùng, bà rất thích vì máy nhẹ và dễ sử dụng. Không cần dây điện nên rất tiện, hút được cả trên cao. Bảo hành tốt, hỗ trợ nhiệt tình.",
        date: "3 tuần trước"
    },
    {
        id: 8,
        name: "Bùi Văn Đức",
        location: "Huế",
        avatar: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        text: "Sản phẩm tốt, giá hợp lý. Lực hút mạnh mẽ, pin trâu, thiết kế đẹp. Shop giao hàng nhanh, đóng gói cẩn thận. Sẽ giới thiệu cho bạn bè!",
        date: "3 tuần trước"
    },
    {
        id: 9,
        name: "Ngô Thị Hà",
        location: "Biên Hòa",
        avatar: "https://i.pravatar.cc/150?img=16",
        rating: 5,
        text: "Máy hút bụi tuyệt vời cho gia đình có thú cưng! Hút sạch lông chó mèo, bụi bẩn. Dễ vệ sinh, dễ bảo quản. Rất đáng mua!",
        date: "1 tháng trước"
    }
];

let currentTestimonialIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadCartFromStorage();
    updateCartUI();
    loadTestimonials();
    startTestimonialAutoSlide();
});

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Format Price
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    showNotification('Đã thêm vào giỏ hàng!');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
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
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
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
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Toggle Cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');

    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.name} x${item.quantity}`).join('\n');

    const message = `Xác nhận đơn hàng:\n\n${itemsList}\n\nTổng cộng: ${formatPrice(total)}\n\nBạn có muốn tiếp tục thanh toán?`;

    if (confirm(message)) {
        alert('Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
        cart = [];
        saveCartToStorage();
        updateCartUI();
        toggleCart();
    }
}

// Save Cart to LocalStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
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
    const style = document.createElement('style');
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
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Handle Contact Form Submit
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    event.target.reset();
}

// Load Testimonials
function loadTestimonials() {
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const testimonialsDots = document.getElementById('testimonialsDots');

    if (!testimonialsTrack || !testimonialsDots) return;

    // Clear existing content
    testimonialsTrack.innerHTML = '';
    testimonialsDots.innerHTML = '';

    // Load testimonials
    testimonials.forEach((testimonial, index) => {
        // Create testimonial card
        const card = document.createElement('div');
        card.className = 'testimonial-card';
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
        const dot = document.createElement('div');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToTestimonial(index);
        testimonialsDots.appendChild(dot);
    });
}

// Generate Stars
function generateStars(rating) {
    let stars = '';
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
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const dots = document.querySelectorAll('.testimonial-dot');

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
        dot.classList.toggle('active', i === currentTestimonialIndex);
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
document.addEventListener('DOMContentLoaded', function() {
    const testimonialBtns = document.querySelectorAll('.testimonial-btn');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');

    testimonialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            stopTestimonialAutoSlide();
            setTimeout(startTestimonialAutoSlide, 15000); // Resume after 15 seconds (cho người dùng thời gian tương tác)
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

