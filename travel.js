const DESTINATIONS = [
    {
      id: 'maldives',
      name: 'Maldives',
      type: 'beach',
      city: 'Male',
      country: 'Maldives',
      description: 'Crystal-clear waters, overwater villas, and world-class snorkeling.',
      image: 'file:///C:/Users/hp/Documents/zee/project/photo-1500375592092-40eb2168fd21.avif',
      link: 'https://en.wikipedia.org/wiki/Maldives'
    },
    {
      id: 'bali',
      name: 'Bali Beaches',
      type: 'beach',
      city: 'Kuta',
      country: 'Indonesia',
      description: 'Surf‑ready waves, sunsets, and vibrant culture along scenic shores.',
      image: 'https://images.unsplash.com/photo-1518544801976-3e188ea1f36b?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Bali'
    },
    {
      id: 'copacabana',
      name: 'Copacabana',
      type: 'beach',
      city: 'Rio de Janeiro',
      country: 'Brazil',
      description: 'Iconic crescent beach with lively boardwalk and city views.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Copacabana,_Rio_de_Janeiro'
    },
    {
      id: 'boracay',
      name: 'Boracay White Beach',
      type: 'beach',
      city: 'Malay',
      country: 'Philippines',
      description: 'Powdery white sand and calm blue waters—perfect for relaxation.',
      image: 'https://images.unsplash.com/photo-1548595224-2c00b3a1a680?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Boracay'
    },
    {
      id: 'meenakshi',
      name: 'Meenakshi Temple',
      type: 'temple',
      city: 'Madurai',
      country: 'India',
      description: 'A Dravidian architectural marvel with soaring gopurams and vibrant sculptures.',
      image: 'https://images.unsplash.com/photo-1583417319070-4b08deebe8da?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Meenakshi_Temple'
    },
    {
      id: 'angkorwat',
      name: 'Angkor Wat',
      type: 'temple',
      city: 'Siem Reap',
      country: 'Cambodia',
      description: 'Vast temple complex famed for intricate bas‑reliefs and sunrise views.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Angkor_Wat'
    },
    {
      id: 'sensoji',
      name: 'Senso-ji Temple',
      type: 'temple',
      city: 'Tokyo',
      country: 'Japan',
      description: 'Historic Buddhist temple with a lively Nakamise shopping street.',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d6?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Sens%C5%8D-ji'
    },
    {
      id: 'toronto',
      name: 'Toronto Highlights',
      type: 'city',
      city: 'Toronto',
      country: 'Canada',
      description: 'CN Tower, Royal Ontario Museum, Distillery District, and waterfront strolls.',
      image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Toronto'
    },
    {
      id: 'kyoto',
      name: 'Kyoto Landmarks',
      type: 'city',
      city: 'Kyoto',
      country: 'Japan',
      description: 'Fushimi Inari, Kiyomizu‑dera, Arashiyama Bamboo Grove, and Gion.',
      image: 'https://images.unsplash.com/photo-1434025697302-54853b8da166?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Kyoto'
    },
    {
      id: 'karachi',
      name: 'Karachi Attractions',
      type: 'city',
      city: 'Karachi',
      country: 'Pakistan',
      description: 'Clifton Beach, Quaid‑e‑Azam Mausoleum, Pakistan Maritime Museum, Burns Road food.',
      image: 'https://images.unsplash.com/photo-1605037850936-f0e443f1d00d?q=80&w=1600&auto=format&fit=crop',
      link: 'https://en.wikipedia.org/wiki/Karachi'
    }
  ];

  // City to IANA time zones (sample). Extend as needed.
  const CITY_TIMEZONES = {
    'Toronto, Canada': 'America/Toronto',
    'Toronto': 'America/Toronto',
    'Kyoto, Japan': 'Asia/Tokyo',
    'Kyoto': 'Asia/Tokyo',
    'Tokyo, Japan': 'Asia/Tokyo',
    'Tokyo': 'Asia/Tokyo',
    'Karachi, Pakistan': 'Asia/Karachi',
    'Karachi': 'Asia/Karachi',
    'Male, Maldives': 'Indian/Maldives',
    'Madurai, India': 'Asia/Kolkata',
    'Siem Reap, Cambodia': 'Asia/Phnom_Penh',
    'Rio de Janeiro, Brazil': 'America/Sao_Paulo'
  };

  // ------------------------------
  // Helpers
  // ------------------------------
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  function createCard(item){
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="p">
        <span class="tag">${item.type}</span>
        <h3>${item.name}</h3>
        <p style="color:var(--muted)">${item.description}</p>
        <p style="margin:6px 0 0; font-size: 13px; color:#cbd5e1">${item.city}, ${item.country}</p>
      </div>
      <div class="more">
        <a href="${item.link}" target="_blank" rel="noopener">Learn more →</a>
        <span title="Save">☆</span>
      </div>
    `;
    return el;
  }

  function renderResults(list){
    const box = $('#results');
    box.innerHTML = '';
    if(!list.length){
      box.innerHTML = `<div class="tile" style="grid-column:1/-1">No matches. Try another keyword or a city like <em>Kyoto</em>.</div>`;
      return;
    }
    list.forEach(item => box.appendChild(createCard(item)));
  }

  function parseQuery(q){
    const s = q.trim().toLowerCase();
    if(!s) return { kind: 'empty' };
    if(['beach','beaches'].includes(s)) return { kind: 'category', value: 'beach' };
    if(['temple','temples'].includes(s)) return { kind: 'category', value: 'temple' };
    // detect city: if it matches a dataset city/city,country or contains a comma
    const isCityLike = s.includes(',') || DESTINATIONS.some(d => d.city.toLowerCase() === s || `${d.city.toLowerCase()}, ${d.country.toLowerCase()}` === s);
    if(isCityLike) return { kind: 'city', value: q.trim() };
    return { kind: 'keyword', value: s };
  }

  function search(q){
    const intent = parseQuery(q);
    const meta = $('#meta');
    clearTimeBadge();

    switch(intent.kind){
      case 'empty':
        meta.innerHTML = '';
        renderResults([]);
        break;
      case 'category': {
        const list = DESTINATIONS.filter(d => d.type === intent.value);
        meta.innerHTML = `<span class="time-badge">Showing top ${intent.value} picks</span>`;
        renderResults(list);
        break;
      }
      case 'city': {
        const s = intent.value.trim();
        const list = DESTINATIONS.filter(d =>
          `${d.city}, ${d.country}`.toLowerCase() === s.toLowerCase() ||
          d.city.toLowerCase() === s.toLowerCase()
        );
        meta.innerHTML = `<span class="time-badge" id="cityTime">Local time: --:--</span>`;
        startCityClock(s);
        renderResults(list.length ? list : DESTINATIONS.filter(d => d.type === 'city'));
        break;
      }
      case 'keyword': {
        const list = DESTINATIONS.filter(d =>
          d.name.toLowerCase().includes(intent.value) ||
          d.description.toLowerCase().includes(intent.value) ||
          d.city.toLowerCase().includes(intent.value) ||
          d.country.toLowerCase().includes(intent.value)
        );
        meta.innerHTML = `<span class="time-badge">Results for "${q.trim()}"</span>`;
        renderResults(list);
        break;
      }
    }
  }

  // ------------------------------
  // City time rendering
  // ------------------------------
  let clockInterval = null;
  function clearTimeBadge(){
    if(clockInterval) { clearInterval(clockInterval); clockInterval = null; }
    const t = document.getElementById('cityTime');
    if(t) t.textContent = 'Local time: --:--';
  }

  function resolveTimeZone(input){
    // Normalize input to a known key if possible
    const key = Object.keys(CITY_TIMEZONES).find(k => k.toLowerCase() === input.toLowerCase());
    if(key) return CITY_TIMEZONES[key];
    // Try to pull city name before comma
    const city = input.split(',')[0].trim();
    const byCity = Object.keys(CITY_TIMEZONES).find(k => k.toLowerCase().startsWith(city.toLowerCase()));
    return byCity ? CITY_TIMEZONES[byCity] : null;
  }

  function startCityClock(input){
    const tz = resolveTimeZone(input);
    const badge = document.getElementById('cityTime');
    if(!badge) return;
    if(!tz){
      badge.textContent = 'Local time: unavailable';
      return;
    }
    function tick(){
      const now = new Date();
      const fmt = new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: tz });
      badge.textContent = `Local time: ${fmt.format(now)} (${tz})`;
    }
    tick();
    clockInterval = setInterval(tick, 1000);
  }

  // ------------------------------
  // Contact form (client-side demo)
  // ------------------------------
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    const status = document.getElementById('formStatus');
    status.style.color = 'var(--muted)';

    if(!name || !email || !message){
      status.style.color = '#fca5a5';
      status.textContent = 'Please complete all fields.';
      return;
    }

    // Fake async submit
    status.textContent = 'Sending…';
    setTimeout(() => {
      status.style.color = '#86efac';
      status.textContent = 'Thanks! We’ll get back to you shortly.';
      form.reset();
    }, 600);
  });

  // ------------------------------
  // Nav state + interactions
  // ------------------------------
  const input = document.getElementById('query');
  document.getElementById('searchBtn').addEventListener('click', () => search(input.value));
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); search(input.value); }});
  $$('.chip').forEach(c => c.addEventListener('click', () => { input.value = c.dataset.q; search(c.dataset.q); }));

  // Update active menu link on scroll/hash
  function setActive(){
    const h = location.hash || '#home';
    $$('.menu a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === h));
  }
  window.addEventListener('hashchange', setActive);

  // Initialize default view
  document.getElementById('year').textContent = new Date().getFullYear();
  setActive();
  // Show some curated content by default
  renderResults(DESTINATIONS.filter(d => d.type !== 'temple').slice(0,4));
  