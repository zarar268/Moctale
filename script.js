// modal & search open
const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
searchInput.addEventListener('click', () => searchModal.show());
searchBtn.addEventListener('click', () => searchModal.show());

// selects & containers
const typeSelect = document.getElementById('typeSelect');
const moodSelect = document.getElementById('moodSelect');
const weatherSelect = document.getElementById('weatherSelect');
const resultsContainer = document.getElementById('resultsContainer');
const searchApplyBtn = document.getElementById('searchApplyBtn');

// data with poster and individual page link

const data = {
  anime: {
    angry: [
      { name: 'Attack on Titan', poster: 'assests/attack on titan.jfif', link: 'Anime1.html' },
      { name: 'Demon Slayer', poster: 'assests/demon-slayer-3840x2160-23615 (1).jpg', link: 'Anime2.html' },
      { name: 'Tokyo Ghoul', poster: 'assests/tokyo ghoul.jpeg', link: 'filter3.html' }
    ],
    fallinginlove: [
      { name: 'Your Lie in April', poster: 'assests/your life is in april.jpeg', link: 'filter4.html' },
      { name: 'Toradora', poster: 'assests/toradora.jpeg', link: 'filter5.html' },
      { name: 'Clannad', poster: 'assests/clannad.jpeg', link: 'filter6.html' }
    ],
    sad: [
      { name: 'Anohana', poster: 'assests/anohana.jpeg', link: 'filter7.html' },
      { name: 'Violet Evergarden', poster: 'assests/Violet Evergarden.jpeg', link: 'filter8.html' },
      { name: 'Plastic Memories', poster: 'assests/plastic memories.jpeg', link: 'filter9.html' }
    ],
    broken: [
      { name: 'Paranoia Agent', poster: 'assests/paranoria agent.jpeg', link: 'filter10.html' },
      { name: 'Serial Experiments Lain', poster: 'assests/serial experiment agent.jpeg', link: 'filter11.html' },
      { name: 'Boogiepop Phantom', poster: 'assests/Boogiepop Phantom.jpeg', link: 'filter12.html' }
    ],
    chill: [
      { name: 'Barakamon', poster: 'assests/Barakamon.jpeg', link: 'filter13.html' },
      { name: 'Laid-Back Camp', poster: 'assests/Laid-Back Camp.jpeg', link: 'filter14.html' },
      { name: 'Mushishi', poster: 'assests/Mushishi.jpeg', link: 'filter15.html' }
    ],
    happy: [
      { name: 'One Piece', poster: 'assests/one piece anime.jpeg', link: 'filter16.html' },
      { name: 'Haikyuu!!', poster: 'assests/haikyuu.jpeg', link: 'filter17.html' },
      { name: 'Fairy Tail', poster: 'assests/fairy tail.jpeg', link: 'filter18.html' }
    ]
  },

  movies: {
    angry: [
      { name: 'John Wick', poster: 'assests/john wick.jfif', link: 'explorejohnwick.html' },
      { name: 'Mad Max: Fury Road', poster: 'assests/mad max', link: 'filtermovie2.html' },
      { name: 'Gladiator', poster: 'assests/gladiator', link: 'filtermovie3.html' }
    ],
    fallinginlove: [
      { name: '20th century girl', poster: 'assests/20th.jfif', link: 'movie1.html' },
      { name: 'Pride & Prejudice', poster: 'assests/pride preiudice', link: 'filtermovie5.html' },
      { name: 'La La Land', poster: 'assests/la la land', link: 'filtermovie6.html' }
    ],
    sad: [
      { name: 'The Shawshank Redemption', poster: 'assests/The shawnshik Redeption.jfif', link: 'movie10.html' },
      { name: 'Requiem for a Dream', poster: 'assests/requiem', link: 'filtermovie8.html' },
      { name: 'Old Boy', poster: 'assests/requiem', link: 'movie4.html' }
    ],
    broken: [
      { name: 'Eternal Sunshine', poster: 'assests/Eternal Sunshine', link: 'filtermovie10.html' },
      { name: 'Her', poster: 'assests/her', link: 'filtermovie11.html' },
      { name: 'Lost in Translation', poster: 'assests/Lost in Translation', link: 'filtermovie12.html' }
    ],
    chill: [
      { name: 'Fast 9', poster: 'assests/f9.jfif', link: 'movie2.html' },
      { name: 'The Godfather', poster: 'assests/the godfather.jfif', link: 'movie8.html' },
      { name: 'Midnight in Paris', poster: 'assests/Midnight in Paris', link: 'filtermovie15.html' }
    ],
    happy: [
      { name: 'The Grand Budapest Hotel', poster: 'assests/The Grand Budapest Hotel', link: 'filtermovie16.html' },
      { name: 'wonderland', poster: 'assests/wonderland', link: 'filtermovie17.html' },
      { name: 'Midnight in Paris', poster: 'assests/Midnight in Paris', link: 'filtermovie15.html' }
    ]
  },

  songs: {
    angry: [
      { name: 'song1', poster: 'assests/song 3.jfif', link: 'song1.html' },
      { name: 'song2', poster: 'assests/song 4.jfif', link: 'song2.html' },
      { name: 'song3', poster: 'assests/song 5.jfif', link: 'song3.html' }
    ],
    fallinginlove: [
      { name: 'song4', poster: 'assests/song 6.jfif', link: 'song4.html' },
      { name: 'song5', poster: 'assests/song 7.jfif', link: 'song5.html' },
      { name: 'song6', poster: 'assests/song 8.jfif', link: 'song6.html' }
    ],
    sad: [
      { name: 'song7', poster: 'assests/song 9.jfif', link: 'song7.html' },
      { name: 'song8', poster: 'assests/song 10.jfif', link: 'song8.html' },
      { name: 'song9', poster: 'assests/song 11.jfif', link: 'song9.html' }
    ],
    broken: [
      { name: 'song10', poster: 'assests/song 12.jfif', link: 'song10.html' },
      { name: 'explorehint.html', poster: 'assests/song 1.jfif', link: 'explorehint.html'},
      { name: 'explorerollin.html', poster: 'assests/rollin.jpg', link: 'explorerollin.html' }
    ],
    chill: [
      { name: 'zarar5.html', poster: 'assests/zarar5.jpeg', link: 'zarar5.html' },
      { name: 'zarar10.html', poster: 'assests/zarar6.jpeg', link: 'zarar10.html' },
      { name: 'zarar15.html', poster: 'assests/zarar13.jpeg', link: 'zarar15.html' }
    ],
    happy: [
      { name: 'ahnaf15.html', poster: 'assests/ahnaf13.jpg', link: 'ahnaf15.html' },
      { name: 'ahnaf110.html', poster: 'assests/ahnaf8.jpg', link: 'ahnaf10.html' },
      { name: 'ahnaf5.html', poster: 'assests/ahnaf13.jpg', link: 'ahnaf5.html' }
    ]
  },

  manga: {
    angry: [
      { name: 'Berserk', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Berserk_vol_1_cover.jpg', link: 'manga/berserk.html' },
      { name: 'Tokyo Ghoul', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Tokyo_Ghoul_Volume_1.jpg', link: 'manga/tokyoghoul.html' },
      { name: 'Chainsaw Man', poster: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Chainsaw_Man_Volume_1.jpg', link: 'manga/chainsawman.html' }
    ],
    fallinginlove: [
      { name: 'Fruits Basket', poster: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Fruits_Basket_volume_1_cover.jpg', link: 'manga/fruitsbasket.html' },
      { name: 'Kimi ni Todoke', poster: 'https://upload.wikimedia.org/wikipedia/en/6/68/Kimi_ni_Todoke_volume_1_cover.jpg', link: 'manga/kiminitodoke.html' },
      { name: 'Horimiya', poster: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Horimiya_Vol_1_cover.jpg', link: 'manga/horimiya.html' }
    ],
    sad: [
      { name: 'A Silent Voice', poster: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Koe_no_Katachi_vol_1.jpg', link: 'manga/silentvoice.html' },
      { name: 'Oyasumi Punpun', poster: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Oyasumi_Punpun_Volume_1.jpg', link: 'manga/punpun.html' },
      { name: 'Goodnight Punpun', poster: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Oyasumi_Punpun_Volume_1.jpg', link: 'manga/punpun.html' }
    ],
    broken: [
      { name: 'Nana', poster: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Nana_vol_1_cover.jpg', link: 'manga/nana.html' },
      { name: 'Kimi no Na wa.', poster: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png', link: 'manga/yourname.html' },
      { name: 'Paradise Kiss', poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Paradise_Kiss_vol_1.jpg', link: 'manga/paradisekiss.html' }
    ],
    chill: [
      { name: 'Yotsuba&!', poster: 'https://upload.wikimedia.org/wikipedia/en/1/17/Yotsuba_vol_1.jpg', link: 'manga/yotsuba.html' },
      { name: 'Barakamon', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Barakamon_Volume_1_cover.jpg', link: 'manga/barakamon.html' },
      { name: 'Non Non Biyori', poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Non_Non_Biyori_Vol_1_Cover.jpg', link: 'manga/nonnon.html' }
    ],
    happy: [
      { name: 'One Piece', poster: 'https://upload.wikimedia.org/wikipedia/en/6/65/One_Piece_Volume_1_cover.jpg', link: 'manga/onepiece.html' },
      { name: 'My Hero Academia', poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/My_Hero_Academia_Volume_1_cover.jpg', link: 'manga/heroacademia.html' },
      { name: 'Naruto', poster: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg', link: 'manga/naruto.html' }
    ]
  },

  manhwa: {
    angry: [
      { name: 'Solo Leveling', poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Solo_Leveling_cover.jpg', link: 'manhwa/sololeveling.html' },
      { name: 'The Breaker', poster: 'https://upload.wikimedia.org/wikipedia/en/7/7d/The_Breaker_cover.jpg', link: 'manhwa/breaker.html' },
      { name: 'God of High School', poster: 'https://upload.wikimedia.org/wikipedia/en/e/e4/God_of_High_School_poster.jpg', link: 'manhwa/godofhighschool.html' }
    ],
    fallinginlove: [
      { name: 'Cheese in the Trap', poster: 'https://upload.wikimedia.org/wikipedia/en/6/65/Cheese_in_the_Trap_cover.jpg', link: 'manhwa/cheeseinthetrap.html' },
      { name: 'I Love Yoo', poster: 'https://upload.wikimedia.org/wikipedia/en/1/1a/I_Love_Yoo_cover.jpg', link: 'manhwa/iloveyoo.html' },
      { name: 'Age Matters', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Age_Matters_cover.jpg', link: 'manhwa/agematters.html' }
    ],
    sad: [
      { name: 'Orange Marmalade', poster: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Orange_Marmalade_poster.jpg', link: 'manhwa/orangemarmalade.html' },
      { name: 'Bastard', poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/Bastard_manhwa_cover.jpg', link: 'manhwa/bastard.html' },
      { name: 'Distant Sky', poster: 'https://upload.wikimedia.org/wikipedia/en/6/63/Distant_Sky_manwha_cover.jpg', link: 'manhwa/distantsky.html' }
    ],
    broken: [
      { name: 'Love Alarm', poster: 'https://upload.wikimedia.org/wikipedia/en/1/18/Love_Alarm_poster.jpg', link: 'manhwa/lovealarm.html' },
      { name: 'Light and Shadow', poster: 'https://upload.wikimedia.org/wikipedia/en/7/75/Light_and_Shadow_cover.jpg', link: 'manhwa/lightandshadow.html' },
      { name: 'True Beauty', poster: 'https://upload.wikimedia.org/wikipedia/en/e/e3/True_Beauty_poster.jpg', link: 'manhwa/truebeauty.html' }
    ],
    chill: [
      { name: 'My Dear Cold-Blooded King', poster: 'https://upload.wikimedia.org/wikipedia/en/2/25/My_Dear_Cold-Blooded_King_cover.jpg', link: 'manhwa/coldbloodedking.html' },
      { name: 'Miss Not-So Sidekick', poster: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Miss_Not-So_Sidekick_cover.jpg', link: 'manhwa/notso.html' },
      { name: 'The Remarried Empress', poster: 'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Remarried_Empress_cover.jpg', link: 'manhwa/remarriedempress.html' }
    ],
    happy: [
      { name: 'True Beauty', poster: 'https://upload.wikimedia.org/wikipedia/en/e/e3/True_Beauty_poster.jpg', link: 'manhwa/truebeauty.html' },
      { name: 'Itaewon Class', poster: 'https://upload.wikimedia.org/wikipedia/en/6/68/Itaewon_Class_poster.jpg', link: 'manhwa/itaewonclass.html' },
      { name: 'Noblesse', poster: 'https://upload.wikimedia.org/wikipedia/en/8/88/Noblesse_Manhwa_cover.jpg', link: 'manhwa/noblesse.html' }
    ]
  },

  series: {
    angry: [
      { name: 'Breaking Bad', poster: 'https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png', link: 'series/breakingbad.html' },
      { name: 'The Punisher', poster: 'https://upload.wikimedia.org/wikipedia/en/6/6b/The_Punisher_season_1_poster.jpg', link: 'series/punisher.html' },
      { name: 'The Boys', poster: 'https://upload.wikimedia.org/wikipedia/en/f/fc/The_Boys_Season_2_Poster.jpg', link: 'series/theboys.html' }
    ],
    fallinginlove: [
      { name: 'Outlander', poster: 'https://upload.wikimedia.org/wikipedia/en/3/38/Outlander_title_card.png', link: 'series/outlander.html' },
      { name: 'Jane the Virgin', poster: 'https://upload.wikimedia.org/wikipedia/en/1/15/Jane_The_Virgin_logo.jpg', link: 'series/jane.html' },
      { name: 'The Office', poster: 'https://upload.wikimedia.org/wikipedia/en/7/76/The_Office_US_logo.svg', link: 'series/office.html' }
    ],
    sad: [
      { name: 'The Leftovers', poster: 'https://upload.wikimedia.org/wikipedia/en/4/45/The_Leftovers_title_card.jpg', link: 'series/leftovers.html' },
      { name: 'This Is Us', poster: 'https://upload.wikimedia.org/wikipedia/en/4/45/This_Is_Us_title_card.jpg', link: 'series/thisisus.html' },
      { name: '13 Reasons Why', poster: 'https://upload.wikimedia.org/wikipedia/en/7/7a/13_Reasons_Why_Season_1_DVD_Cover.jpg', link: 'series/13reasons.html' }
    ],
    broken: [
      { name: 'Fleabag', poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Fleabag_tv_series_logo.png', link: 'series/fleabag.html' },
      { name: 'BoJack Horseman', poster: 'https://upload.wikimedia.org/wikipedia/en/b/b9/BoJack_Horseman_title_card.png', link: 'series/bojack.html' },
      { name: 'Euphoria', poster: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Euphoria_title_card.png', link: 'series/euphoria.html' }
    ],
    chill: [
      { name: 'Parks and Recreation', poster: 'https://upload.wikimedia.org/wikipedia/en/9/98/Parks_and_Recreation_title_card.png', link: 'series/parksandrecreation.html' },
      { name: 'Brooklyn Nine-Nine', poster: 'https://upload.wikimedia.org/wikipedia/en/9/99/Brooklyn_Nine-Nine_title_card.png', link: 'series/brooklyn99.html' },
      { name: 'Ted Lasso', poster: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Ted_Lasso_title_card.png', link: 'series/tedlasso.html' }
    ],
    happy: [
      { name: 'Friends', poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Friends_logo.svg', link: 'series/friends.html' },
      { name: 'The Good Place', poster: 'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Good_Place_logo.svg', link: 'series/goodplace.html' },
      { name: 'How I Met Your Mother', poster: 'https://upload.wikimedia.org/wikipedia/en/5/55/How_I_Met_Your_Mother_logo.svg', link: 'series/himym.html' }
    ]
  },

  games: {
    angry: [
      { name: 'Doom Eternal', poster: 'https://upload.wikimedia.org/wikipedia/en/9/90/Doom_Eternal_cover.jpg', link: 'games/doometernal.html' },
      { name: 'God of War (2018)', poster: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg', link: 'games/godofwar.html' },
      { name: 'Dark Souls III', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Dark_Souls_III_cover_art.jpg', link: 'games/darksouls3.html' }
    ],
    fallinginlove: [
      { name: 'Stardew Valley', poster: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Stardew_Valley_cover_art.jpg', link: 'games/stardewvalley.html' },
      { name: 'Life is Strange', poster: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Life_is_Strange_cover_art.jpg', link: 'games/lifeisstrange.html' },
      { name: 'Firewatch', poster: 'https://upload.wikimedia.org/wikipedia/en/3/34/Firewatch_cover_art.jpg', link: 'games/firewatch.html' }
    ],
    sad: [
      { name: 'The Last of Us', poster: 'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_cover_art.jpg', link: 'games/thelastofus.html' },
      { name: 'To the Moon', poster: 'https://upload.wikimedia.org/wikipedia/en/9/9a/To_the_Moon_cover_art.jpg', link: 'games/tothemoon.html' },
      { name: 'That Dragon, Cancer', poster: 'https://upload.wikimedia.org/wikipedia/en/4/43/That_Dragon_Cancer_cover.jpg', link: 'games/thatdragoncancer.html' }
    ],
    broken: [
      { name: 'Gone Home', poster: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Gone_Home_cover.jpg', link: 'games/gonehome.html' },
      { name: 'What Remains of Edith Finch', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5a/What_Remains_of_Edith_Finch.jpg', link: 'games/edithfinch.html' },
      { name: 'Life is Strange: Before the Storm', poster: 'https://upload.wikimedia.org/wikipedia/en/2/23/Life_is_Strange_Before_the_Storm_cover.jpg', link: 'games/lifeisstrangebts.html' }
    ],
    chill: [
      { name: 'Animal Crossing: New Horizons', poster: 'https://upload.wikimedia.org/wikipedia/en/0/01/Animal_Crossing_New_Horizons_cover_art.jpg', link: 'games/animalcrossing.html' },
      { name: 'Journey', poster: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Journey_cover.jpg', link: 'games/journey.html' },
      { name: 'Abzû', poster: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Abz%C3%BB_cover.jpg', link: 'games/abzu.html' }
    ],
    happy: [
      { name: 'Mario Kart 8 Deluxe', poster: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Mario_Kart_8_Deluxe.jpg', link: 'games/mariokart8.html' },
      { name: 'Super Mario Odyssey', poster: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg', link: 'games/marioodyssey.html' },
      { name: 'Overcooked!', poster: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Overcooked_cover_art.jpg', link: 'games/overcooked.html' }
    ]
  }
};



  // Add other types (songs, series, manhwa-manga) with same structure


// helper: pick n items (repeat if less than n)
function pickNUniqueRandom(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

function getFallbackItems(excludeType = "", mood = "", count = 10) {
  let allItems = [];

  Object.keys(data).forEach(typeKey => {
    if (excludeType && typeKey === excludeType) return;

    const moods = data[typeKey];
    Object.keys(moods).forEach(moodKey => {
      allItems.push(...moods[moodKey]);
    });
  });

  return pickNUniqueRandom(allItems, count);
}
function pickNUniqueRandom(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

function updateResults() {
  const type = typeSelect.value;
  const mood = moodSelect.value.replace(/-/g, '');
  const weather = weatherSelect.value;

  if (!type || !mood || !weather) {
    resultsContainer.innerHTML = `<p class="text-muted">Please select content, mood, and weather.</p>`;
    return;
  }

  let resultsToShow = [];
  let allItems = [];

  // Always use the selected content type only
  if (data[type]) {
    // Primary mood-based results
    let primaryItems = data[type][mood] || [];

    // Apply weather filtering
    if (weather === 'rainy' || weather === 'cloudy') {
      primaryItems = primaryItems.filter((_, i) => i % 2 === 0);
    } else if (weather === 'sunny' || weather === 'warm') {
      primaryItems = primaryItems.filter((_, i) => i % 2 !== 0);
    }

    allItems = [...primaryItems];

    // If not enough, get from other moods (same type)
    if (allItems.length < 10) {
      Object.keys(data[type]).forEach(otherMood => {
        if (otherMood !== mood) {
          allItems.push(...data[type][otherMood]);
        }
      });
    }

    // Pick unique random results
    resultsToShow = pickNUniqueRandom(allItems, 10).map(item => ({
      ...item,
      type: type
    }));
  }

  if (!resultsToShow.length) {
    resultsContainer.innerHTML = `<p class="text-muted">No results found for this combination.</p>`;
    return;
  }

  // Show cards
  resultsContainer.innerHTML = resultsToShow.map(item => `
    <div class="col-md-4 mb-4">
      <a href="${item.link}" class="text-decoration-none text-white">
        <div class="card bg-secondary bg-opacity-10 text-white h-100 shadow-sm border-0 rounded-4">
          <img src="${item.poster}" class="card-img-top rounded-top-4" alt="${item.name}">
          <div class="card-body">
            <h6 class="card-title fw-semibold">${item.name}</h6>
            <p class="card-text small">
              Type: ${item.type}, Mood: ${mood}, Weather: ${weather}
            </p>
          </div>
        </div>
      </a>
    </div>
  `).join('');
}

searchApplyBtn.addEventListener('click', () => {
  updateResults();
  searchModal.hide();
});


// listeners
[typeSelect, moodSelect, weatherSelect].forEach(sel => sel.addEventListener('change', updateResults));

// reset modal on open
document.getElementById('searchModal').addEventListener('show.bs.modal', () => {
  typeSelect.value = '';
  moodSelect.value = '';
  weatherSelect.value = '';
  resultsContainer.innerHTML = `<p class="text-muted">Select all filters above to see results.</p>`;
});
[moodSelect, weatherSelect, typeSelect].forEach(sel => {
  sel.addEventListener('change', () => {
    searchApplyBtn.disabled = !(moodSelect.value && weatherSelect.value && typeSelect.value);
    updateResults();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // Elements to animate
  const elements = document.querySelectorAll('.card-item, .mini-card, .reason-card, .faq-section, .trending-card, .scroll-row .card-item');

  const directions = ['up','down','left','right'];

  // Initialize elements with random directions
  elements.forEach(el => {
    el.classList.add('scroll-animate');
    el.dataset.direction = directions[Math.floor(Math.random() * directions.length)];
  });

  // Intersection Observer for scroll-triggered animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        // Remove show to allow re-animation when scrolling back
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

