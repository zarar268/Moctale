 // ---------------- Poster Modal ----------------
  const poster = document.getElementById('poster');
  const modal = document.getElementById('posterModal');
  const modalImg = modal.querySelector('img');

  poster.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = 'assests/manga 1.jfif'; // poster image
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

// ---------------- Reviews ----------------
const reviewForm = document.getElementById('review-form');
const postedReviews = document.getElementById('posted-reviews');

// initial reviews
const initialReviews = [
  {name: 'Ali', date: '2025-09-23', text: 'Amazing storyline and very engaging characters!', stars: 5},
  {name: 'Sara', date: '2025-09-22', text: 'Loved the animation style and humor!', stars: 4},
]

// stars function
function createStars(count){
  let stars = '';
  for(let i=0;i<5;i++){
    stars += i < count ? '★' : '☆';
  }
  return `<span class="review-stars" style="color:#ffc107;">${stars}</span>`;
}

// add review (one by one)
function addReview(review){
  const reviewDiv = document.createElement('div');
  reviewDiv.className = 'posted-review';
  reviewDiv.style.position = 'relative';
  reviewDiv.style.paddingBottom = '50px'; // space for delete button

  reviewDiv.innerHTML = `
    <div class="review-header" style="display:flex;justify-content:space-between;">
      <span>${review.name}</span>
      <span>${review.date}</span>
    </div>
    <div class="review-text" style="margin:6px 0;">${review.text}</div>
    ${createStars(review.stars)}
    <div class="delete-container" style="
        position:absolute;
        bottom:10px;
        right:10px;
        padding:6px;">
      <button class="delete-review" style="
        padding:4px 10px;
        border:none;
        border-radius:4px;
        background:#ff2d55;
        color:#fff;
        cursor:pointer;">Delete</button>
    </div>
  `;

  // delete functionality
  reviewDiv.querySelector('.delete-review').addEventListener('click', () => {
    reviewDiv.remove();
  });

  // new reviews appear on top
  postedReviews.prepend(reviewDiv);
}

// load initial reviews (reverse so oldest at bottom)
initialReviews.reverse().forEach(r => addReview(r));

// form submit
reviewForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const reviewText = document.getElementById('review').value.trim();
  const stars = parseInt(document.getElementById('stars').value) || 0;

  if(name && reviewText){
    addReview({
      name: name,
      date: new Date().toLocaleDateString(),
      text: reviewText,
      stars: stars
    });
    reviewForm.reset();
  }
});
document.addEventListener('DOMContentLoaded', () => {

  // Elements to animate
const elements = document.querySelectorAll(
  '.card-item, .poster, .mini-card, .reason-card, .faq-section, .trending-card, .content-row, .reviews, .posted-review, #review-form, .sidebar .card, header, .app, .section, .left, .right-col'
);

  // Assign random directions
  const directions = ['up','down','left','right'];
  elements.forEach(el => {
    el.classList.add('scroll-animate');
    el.dataset.direction = directions[Math.floor(Math.random() * directions.length)];
  });

  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // re-trigger on scroll back
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  // Navbar special
  const navbar = document.querySelector('.navbar-custom');
  if(navbar){
    navbar.classList.add('scroll-animate');
    navbar.dataset.direction = 'down';
    observer.observe(navbar);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backBtn');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
      } else {
        // Always fallback to index.html if no referrer
        window.location.href = 'index.html';
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const backBtns = document.getElementById('backBtns');

  if (backBtns) {
    backBtns.addEventListener('click', () => {
      if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
      } else {
        // Always fallback to index.html if no referrer
        window.location.href = 'zararmasterlist.html';
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const backBtnz = document.getElementById('backBtnz');

  if (backBtnz) {
    backBtnz.addEventListener('click', () => {
      if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
      } else {
        // Always fallback to index.html if no referrer
        window.location.href = 'ahnafmasterlist.html';
      }
    });
  }
});
