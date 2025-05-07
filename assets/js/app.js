// داده‌های نمونه برای واحدها
const units = [
  {
    id: 1,
    title: 'واحد تجاری 101',
    area: 120,
    officeArea: 80,
    type: 'commercial',
    floor: 1,
    number: '101',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد تجاری با موقعیت عالی در طبقه اول مجتمع پایتخت',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته']
  },
  {
    id: 2,
    title: 'واحد تجاری 102',
    area: 150,
    officeArea: 100,
    type: 'commercial',
    floor: 1,
    number: '102',
    status: 'فروخته شده',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد تجاری با طراحی مدرن و امکانات کامل',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته']
  },
  {
    id: 3,
    title: 'واحد تجاری 103',
    area: 180,
    officeArea: 120,
    type: 'commercial',
    floor: 1,
    number: '103',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد تجاری با موقعیت استثنایی',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته']
  },
  {
    id: 4,
    title: 'واحد اداری 201',
    area: 200,
    officeArea: 150,
    type: 'office',
    floor: 2,
    number: '201',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد اداری با طراحی مدرن و امکانات کامل',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته', 'سالن کنفرانس']
  },
  {
    id: 5,
    title: 'واحد اداری 202',
    area: 250,
    officeArea: 180,
    type: 'office',
    floor: 2,
    number: '202',
    status: 'فروخته شده',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد اداری با موقعیت عالی',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته', 'سالن کنفرانس']
  },
  {
    id: 6,
    title: 'واحد اداری 203',
    area: 300,
    officeArea: 200,
    type: 'office',
    floor: 2,
    number: '203',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد اداری با طراحی لوکس و امکانات ویژه',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته', 'سالن کنفرانس']
  }
];

// اخبار نمونه
const news = [
  {
    id: 1,
    title: 'افتتاح مترو چهاردانگه',
    date: '۱۴۰۳/۰۳/۱۵',
    image: 'news1.jpg',
    excerpt: 'به زودی ایستگاه مترو چهاردانگه افتتاح خواهد شد.'
  },
  {
    id: 2,
    title: 'تکمیل فاز اول مجتمع',
    date: '۱۴۰۳/۰۳/۰۱',
    image: 'news2.jpg',
    excerpt: 'فاز اول مجتمع پایتخت با موفقیت به پایان رسید.'
  },
  {
    id: 3,
    title: 'راه‌اندازی باشگاه ورزشی',
    date: '۱۴۰۳/۰۲/۱۵',
    image: 'news3.jpg',
    excerpt: 'باشگاه ورزشی مجتمع پایتخت به زودی افتتاح می‌شود.'
  }
];

// Optimize performance with debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    if (!menuToggle || !mainNav) return;

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking menu items
    const menuItems = mainNav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
// داده‌های نمونه برای واحدها
const units = [
  {
    id: 1,
    title: 'واحد تجاری 101',
    area: 120,
    officeArea: 80,
    type: 'commercial',
    floor: 1,
    number: '101',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد تجاری با موقعیت عالی در طبقه اول مجتمع پایتخت',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته']
  },
  {
    id: 2,
    title: 'واحد تجاری 102',
    area: 150,
    officeArea: 100,
    type: 'commercial',
    floor: 1,
    number: '102',
    status: 'فروخته شده',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد تجاری با طراحی مدرن و امکانات کامل',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته']
  },
  {
    id: 3,
    title: 'واحد تجاری 103',
    area: 180,
    officeArea: 120,
    type: 'commercial',
    floor: 1,
    number: '103',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد تجاری با موقعیت استثنایی',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته']
  },
  {
    id: 4,
    title: 'واحد اداری 201',
    area: 200,
    officeArea: 150,
    type: 'office',
    floor: 2,
    number: '201',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد اداری با طراحی مدرن و امکانات کامل',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته', 'سالن کنفرانس']
  },
  {
    id: 5,
    title: 'واحد اداری 202',
    area: 250,
    officeArea: 180,
    type: 'office',
    floor: 2,
    number: '202',
    status: 'فروخته شده',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد اداری با موقعیت عالی',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته', 'سالن کنفرانس']
  },
  {
    id: 6,
    title: 'واحد اداری 203',
    area: 300,
    officeArea: 200,
    type: 'office',
    floor: 2,
    number: '203',
    status: 'در حال فروش',
    images: [
      'assets/images/2.jpg',
      'assets/images/2.jpg',
      'assets/images/2.jpg'
    ],
    description: 'واحد اداری با طراحی لوکس و امکانات ویژه',
    amenities: ['پارکینگ', 'آسانسور', 'سیستم امنیتی', 'دوربین مداربسته', 'سالن کنفرانس']
  }
];

// اخبار نمونه
const news = [
  {
    id: 1,
    title: 'افتتاح مترو چهاردانگه',
    date: '۱۴۰۳/۰۳/۱۵',
    image: 'news1.jpg',
    excerpt: 'به زودی ایستگاه مترو چهاردانگه افتتاح خواهد شد.'
  },
  {
    id: 2,
    title: 'تکمیل فاز اول مجتمع',
    date: '۱۴۰۳/۰۳/۰۱',
    image: 'news2.jpg',
    excerpt: 'فاز اول مجتمع پایتخت با موفقیت به پایان رسید.'
  },
  {
    id: 3,
    title: 'راه‌اندازی باشگاه ورزشی',
    date: '۱۴۰۳/۰۲/۱۵',
    image: 'news3.jpg',
    excerpt: 'باشگاه ورزشی مجتمع پایتخت به زودی افتتاح می‌شود.'
  }
];

// Optimize performance with debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile Menu
function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    if (!menuButton || !mobileMenu) return;
    
    function toggleMenu() {
        menuButton.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
    
    menuButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}

// Optimize search with debounce
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;
    
    const handleSearch = debounce((e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const content = card.textContent.toLowerCase();
            card.style.display = content.includes(searchTerm) ? 'block' : 'none';
        });
    }, 300);
    
    searchInput.addEventListener('input', handleSearch);
}

// Optimize unit rendering
function renderUnits(filterType = 'all') {
    const grid = document.getElementById('unitsGrid');
    if (!grid) return;
    
    const filteredUnits = filterType === 'all' 
        ? units 
        : units.filter(unit => unit.type === filterType);
    
    const fragment = document.createDocumentFragment();
    
    filteredUnits.forEach(unit => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.type = unit.type;
        
        card.innerHTML = `
            <div class="card-badge">${unit.status}</div>
            <img src="${unit.images[0]}" alt="${unit.title}" loading="lazy">
            <div class="card-content">
                <h4>${unit.title}</h4>
                <div class="unit-specs">
                    <p><i class="fas fa-ruler-combined"></i> متراژ کل: ${unit.area} متر مربع</p>
                    <p><i class="fas fa-building"></i> طبقه: ${unit.floor}</p>
                    <p><i class="fas fa-info-circle"></i> وضعیت: ${unit.status}</p>
                </div>
                <div class="unit-amenities">
                    ${unit.amenities.map(amenity => `
                        <span><i class="fas fa-check"></i> ${amenity}</span>
                    `).join('')}
                </div>
                <div class="card-buttons">
                    <a href="unit${unit.id}-details.html" class="btn btn-primary">مشاهده جزئیات</a>
                </div>
            </div>
        `;
        
        fragment.appendChild(card);
    });
    
    grid.innerHTML = '';
    grid.appendChild(fragment);
}

// تابع نمایش جزئیات واحد
function showUnitDetails(unitId) {
  const unit = units.find(u => u.id === unitId);
  if (!unit) return;

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="unit-info">
        <h2>${unit.title}</h2>
        <div class="unit-gallery">
          ${unit.images.map(img => `<img src="${img}" alt="${unit.title}">`).join('')}
        </div>
        <div class="unit-specs">
          <div class="spec-item">
            <span class="spec-label">متراژ کل:</span>
            <span>${unit.area} متر مربع</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">متراژ اداری:</span>
            <span>${unit.officeArea} متر مربع</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">طبقه:</span>
            <span>${unit.floor}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">شماره واحد:</span>
            <span>${unit.number}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">وضعیت:</span>
            <span>${unit.status}</span>
          </div>
        </div>
        <div class="unit-description">
          <h3>توضیحات</h3>
          <p>${unit.description}</p>
        </div>
        <div class="unit-amenities">
          <h3>امکانات</h3>
          <ul>
            ${unit.amenities.map(amenity => `<li><i class="fas fa-check"></i> ${amenity}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = 'block';

  const closeBtn = modal.querySelector('.close');
  closeBtn.onclick = function() {
    modal.remove();
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.remove();
    }
  }
}

// تابع فیلتر با بهینه‌سازی
function initUnitFilter() {
  const filter = document.getElementById('typeFilter');
  if (!filter) return;

  filter.addEventListener('change', function() {
    renderUnits(this.value);
  });
}

// تابع اسکرول نرم با بهینه‌سازی
function initSmoothScroll() {
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
}

// تابع اسلایدر هیرو با بهینه‌سازی
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // شروع اسلایدر
  slideInterval = setInterval(nextSlide, 5000);

  // توقف اسلایدر وقتی کاربر با ماوس روی اسلایدها است
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slide.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    renderUnits();
    initUnitFilter();
    initSearch();
    initSmoothScroll();
    initHeroSlider();
});