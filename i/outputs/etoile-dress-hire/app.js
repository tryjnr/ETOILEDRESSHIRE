const dresses = [
  { id: 'persephone', name: 'House of CB - Persephone', size: 'S', hire: 110, original: 443, images: ['assets/persephone-1.jpg','assets/persephone-2.jpg'], tone: 'Red / Pink', description: 'A sculpted fuchsia corset and fluid satin skirt create a bold, romantic silhouette made for unforgettable entrances.', new: false },
  { id: 'babydoll', name: 'House of CB | Babydoll Mini', size: 'S', hire: 80, original: 301, images: ['assets/babydoll-1.jpg','assets/babydoll-2.jpg'], tone: 'Ivory', description: 'Soft ivory draping, delicate sleeves and a playful mini hem bring an effortlessly feminine finish to late-night celebrations.', new: false },
  { id: 'elysia', name: 'Peppermayo | Elysia Maxi', size: '6', hire: 40, original: 99, images: ['assets/elysia-1.jpg','assets/elysia-2.jpg'], tone: 'Green Floral', description: 'A dreamy watercolour floral maxi with a plunging halter neckline, made for sunlit lunches, garden parties and destination moments.', new: false },
  { id: 'ellery', name: 'Ellery dress', size: 'XXS', hire: 40, original: 160, images: ['assets/ellery-1.jpg','assets/ellery-2.jpg'], tone: 'Pink Pattern', description: 'A warm blush paisley print falls into a sleek, figure-skimming maxi silhouette with an understated vintage mood.', new: false },
  { id: 'luella', name: 'Luella Maxi Dress', size: 'S', hire: 40, original: 115, images: ['assets/luella-1.jpg','assets/luella-2.jpg'], tone: 'Burgundy', description: 'Rich burgundy and a dramatic thigh split give this halter maxi a confident, after-dark elegance.', new: false },
  { id: 'lily', name: 'The With Harper Lu | Lily Floral Slip', size: 'S', hire: 65, original: 307, images: ['assets/lily-1.jpg','assets/lily-2.jpg'], tone: 'Blue / Pink Floral', description: 'An artful blue and magenta floral print transforms this fluid slip silhouette into a modern statement piece.', new: false },
  { id: 'margot', name: 'Arcina ORI | Margot Dress', size: 'S', hire: 70, original: 320, images: ['assets/margot-1.jpg','assets/margot-2.jpg'], tone: 'Black Lace', description: 'Romantic black lace and a clean, body-skimming silhouette make Margot an elevated choice for elegant evenings.', new: false },
  { id: 'nahanee', name: 'Beginning Boutique Nahanee Yellow Ruffle', size: '8', hire: 55, original: 109.99, images: ['assets/nahanee-1.jpg','assets/nahanee-2.jpg'], tone: 'Yellow', description: 'A vivid yellow-green tone and cascading ruffle detail bring playful movement to this flattering event-ready maxi.', new: false },
  { id: 'tania', name: 'House Of CB Tania dress', size: 'S', hire: 90, original: 301, images: ['assets/tania-1.jpg','assets/tania-2.jpg'], tone: 'Blush Pink', description: 'Blush pink ruffles and a fitted mini silhouette deliver a sweet, flirtatious look with unmistakable House of CB charm.', new: true },
  { id: 'christelle', name: 'Babyboo Christelle Maxi', size: 'XS', hire: 65, original: 149.95, images: ['assets/christelle-1.jpg','assets/christelle-2.jpg'], tone: 'Red', description: 'A striking red halter neckline and sleek floor-length cut create a refined silhouette with effortless impact.', new: true }
];

const terms = [
  ['Rental & Payment', ['Rentals are arranged through Instagram DM or email: hirebylarisse@gmail.com.','A deposit is required to secure a dress and proof of bank transfer must be sent.','Valid ID is required before collection.','Maximum deposit is 50%; the remaining balance is paid at collection.','Once full payment is made, the rental is final. No refunds; store credit may be offered.']],
  ['Cancellation & Changes', ['Cancellations receive store credit only. There are no refunds for change of mind.','Cancel at least 48 hours before collection or the event to be eligible for store credit.','Dress swaps and date changes depend on availability.','Changes less than 24 hours before the event may not be possible.']],
  ['Fittings', ['Try-on sessions are 25 minutes with a 10 minute grace period.','Late arrivals may need to rebook.','Rentals without fitting are at the customer’s own risk.','Customers are responsible for damage during fitting.','No bags or belongings are permitted in the fitting room.']],
  ['Collection', ['Dresses can be collected the day before or the day of the event. Weekend hires are usually collected Friday.','Bring valid ID.','Full payment must be made before release.','Collection times are confirmed via Instagram DM.']],
  ['Bond / Security Deposit', ['A bond is required and refunded after the dress is returned and checked.','Damage, stains, late returns or repairs may be deducted from the bond.','Irreparable damage means the customer pays the full retail price.','Late returns are charged at $10 per day.']],
  ['Returns', ['Return garments unwashed. Do not clean, wash, steam or iron dresses yourself.','Return by Monday 6:00 PM after the event using the designated drop-off box.','Take a photo at drop-off.','Report marks, stains or damage before returning.']],
  ['Refunds & Store Credit', ['No refunds.','Store credit may apply if a garment is faulty and reported within 2 hours of collection with proof.','Store credit may apply for fit issues if returned the same day and reported quickly.','Store credit lasts 12 months.','No store credit for change of mind, late collection or misuse.']],
  ['Loyalty', ['After 4 standard rentals, receive 25% off the next hire.','After another 4 rentals, receive 50% off the next hire.','Loyalty rewards cannot be combined with other discounts.']],
  ['Damage & Care', ['Customers are responsible once the garment leaves the premises.','Damage beyond repair means the customer pays full retail price.','Repair, dry cleaning or alteration costs must be paid if needed.','Do not attempt to clean garments.','Extra cleaning fees may apply for smoke, perfume, food, sweat or strong odours.']]
];

const app = document.querySelector('#app');
const money = value => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: Number.isInteger(value) ? 0 : 2 }).format(value);
const nav = document.querySelector('#site-nav');
const menu = document.querySelector('.menu-toggle');

function carousel(item, detail = false) {
  return `<div class="${detail ? 'detail-gallery' : 'card-media'}" data-carousel data-index="0">
    ${item.new && !detail ? '<span class="badge">New Arrival</span>' : ''}
    <img src="${item.images[0]}" alt="${item.name}, photo 1 of 2" loading="${detail ? 'eager' : 'lazy'}">
    <button class="carousel-arrow prev" type="button" data-dir="-1" aria-label="Previous photo">‹</button>
    <button class="carousel-arrow next" type="button" data-dir="1" aria-label="Next photo">›</button>
    ${detail ? '<span class="detail-count">1 / 2</span>' : '<div class="carousel-dots"><button class="carousel-dot active" data-slide="0" aria-label="Photo 1"></button><button class="carousel-dot" data-slide="1" aria-label="Photo 2"></button></div>'}
  </div>`;
}

function card(item) {
  return `<article class="product-card" data-id="${item.id}">
    ${carousel(item)}
    <div class="product-info">
      <h3>${item.name}</h3>
      <div class="product-meta"><span>Size ${item.size}</span><span><b class="price">Hire ${money(item.hire)}</b></span></div>
      <div class="card-actions"><a class="btn btn--outline" href="#dress/${item.id}">View Dress</a><a class="btn" href="#dress/${item.id}?book=1">Book Hire</a></div>
    </div>
  </article>`;
}

function homePage() {
  return `<div class="page">
    <section class="hero">
      <div class="hero-media"><img src="assets/persephone-2.jpg" alt="House of CB Persephone dress"><img src="assets/margot-2.jpg" alt="Arcina ORI Margot dress"></div>
      <span class="hero-note">Curated for your moment</span>
      <div class="hero-content"><p class="eyebrow">Etoile · Perth Dress Hire</p><h1>Luxury dress hire for <em>unforgettable</em> moments.</h1><p class="lede">A considered edit of statement pieces for dinners, formals, birthdays and every entrance worth remembering.</p><div class="button-row"><a class="btn btn--gold" href="#dresses">Browse Dresses</a><a class="btn btn--light" href="#try-on">Book a Try-On</a></div></div>
    </section>
    <div class="usp-strip"><div class="usp"><h3>Curated Luxury</h3><small>Ten memorable looks, chosen with intention.</small></div><div class="usp"><h3>Personal Try-Ons</h3><small>Private 25 minute appointments in Morley.</small></div><div class="usp"><h3>Wear, Return, Repeat</h3><small>Simple, considered and event-ready.</small></div></div>
    <section class="section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">The Etoile edit</p><h2>Featured dresses</h2></div><a class="text-link" href="#dresses">View the full collection</a></div><div class="product-grid">${[dresses[0],dresses[6],dresses[8],dresses[9]].map(card).join('')}</div></div></section>
    <section class="section section--soft"><div class="shell story"><div class="story-collage"><img src="assets/elysia-2.jpg" alt="Elysia floral maxi"><img src="assets/nahanee-2.jpg" alt="Nahanee yellow ruffle dress"></div><div class="story-copy"><p class="eyebrow">The feeling</p><h2>Your moment. Your dress. No compromise.</h2><p>Etoile makes event dressing feel more considered: standout designer-inspired looks, a personal fitting experience, and a wardrobe that changes whenever your plans do.</p><a class="btn btn--outline" href="#try-on">Discover Try-Ons</a></div></div></section>
    <section class="section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">As worn by you</p><h2>The Etoile diary</h2></div><a class="text-link" href="https://www.instagram.com/etoiledresshire.au/" target="_blank" rel="noreferrer">@etoiledresshire.au</a></div><div class="insta-grid">${['persephone-1.jpg','babydoll-2.jpg','elysia-1.jpg','ellery-2.jpg','luella-1.jpg','lily-2.jpg','margot-2.jpg','christelle-2.jpg'].map((x,i)=>`<a href="#dress/${dresses[i > 5 ? (i===6?6:9) : i].id}" aria-label="View dress"><img src="assets/${x}" alt="Etoile client style ${i+1}" loading="lazy"></a>`).join('')}</div></div></section>
  </div>`;
}

function dressesPage(newOnly = false) {
  const list = newOnly ? dresses.filter(d => d.new) : dresses;
  return `<div class="page"><section class="page-hero shell"><p class="eyebrow">${newOnly ? 'Just landed' : 'The complete collection'}</p><h1>${newOnly ? 'New arrivals' : 'Find your dress'}</h1><p class="lede">${newOnly ? 'Two fresh silhouettes, ready for their first night out.' : 'From sculpted maxis to playful minis, discover the piece that feels like you.'}</p></section>
    <section class="section shell" style="padding-top:1rem">
      ${newOnly ? '' : `<div class="filters"><div class="field"><label for="size-filter">Filter by size</label><select id="size-filter"><option value="all">All sizes</option><option value="XXS">XXS</option><option value="XS">XS</option><option value="S">S</option><option value="6">6</option><option value="8">8</option></select></div><div class="field"><label for="price-filter">Filter by hire price</label><select id="price-filter"><option value="all">All prices</option><option value="50">Up to $50</option><option value="80">Up to $80</option><option value="100">Up to $100</option><option value="120">Up to $120</option></select></div><div class="result-count"><span id="result-count">${list.length}</span> dresses</div></div>`}
      <div id="dress-grid" class="product-grid">${list.map(card).join('')}</div>
    </section></div>`;
}

function detailPage(id, openBooking) {
  const d = dresses.find(x => x.id === id) || dresses[0];
  return `<div class="page detail">${carousel(d,true)}<section class="detail-panel"><a class="text-link" href="#dresses">← Back to collection</a><p class="eyebrow" style="margin-top:2rem">${d.tone} · Etoile Edit</p><h1>${d.name}</h1><div class="detail-price"><span id="price-label">Hire</span><strong id="detail-price">${money(d.hire)}</strong></div><p class="detail-copy">Size: <strong>${d.size}</strong><br>${d.description}</p>
    <form class="booking-form" id="booking-form" data-name="${d.name}" data-hire="${d.hire}" data-buy="${d.original}">
      <div class="field"><span class="field-label">Choose an option</span><div class="segmented"><label><input type="radio" name="intent" value="Rent" checked><span>Rent</span></label><label><input type="radio" name="intent" value="Buy"><span>Buy</span></label></div></div>
      <div class="field"><label for="book-size">Size</label><select id="book-size" name="size"><option>${d.size}</option></select></div>
      <div class="field" data-rent-only><label for="duration">Hire duration</label><select id="duration" name="duration"><option>1 day</option><option>Weekend</option><option>3 days</option><option>1 week</option></select></div>
      <div class="field" data-rent-only><label for="event-date">Event date</label><input id="event-date" name="date" type="date" required></div>
      <label class="detail-note" data-rent-only><input name="tryon" type="checkbox"> I would like to request a try-on appointment.</label>
      <p class="detail-note" id="booking-note">Final booking is confirmed via Instagram DM or email after deposit payment.</p>
      <div class="button-row"><button class="btn btn--gold" id="instagram-book" type="submit">Book via Instagram</button><button class="btn btn--outline" type="button" id="email-hire">Email to Hire</button></div>
    </form></section></div>`;
}

function giftCardsPage() {
  return `<div class="page feature-page"><section class="feature-card"><div class="feature-visual"><div class="card-sample"><div><img class="card-logo" src="assets/logo.jpg" alt="Etoile Dress Hire"><p>THE GIFT OF A PERFECT ENTRANCE</p></div></div></div><div class="feature-copy"><p class="eyebrow">Digital gift cards</p><h1>Give the gift of luxury dress hire.</h1><p class="lede">A beautiful reason to celebrate. Select a value and we’ll arrange a personalised digital gift card.</p><div class="amount-grid" role="group" aria-label="Gift card amount"><button class="amount selected" data-amount="$50">$50</button><button class="amount" data-amount="$100">$100</button><button class="amount" data-amount="$150">$150</button><button class="amount" data-amount="Custom amount">Custom amount</button></div><a id="gift-enquire" class="btn" href="mailto:hirebylarisse@gmail.com?subject=Etoile%20Gift%20Card%20Enquiry%20-%20%2450">Enquire About Gift Card</a></div></section></div>`;
}

function membershipPage() {
  return `<div class="page feature-page"><section class="feature-card"><div class="feature-visual"><div class="card-sample"><div><img class="membership-logo" src="assets/logo-white.png" alt="Etoile Dress Hire"><span class="eyebrow" style="color:#d9c39c">Lifetime access</span><p class="price-display">$80</p><strong>THE ETOILE CIRCLE</strong></div></div></div><div class="feature-copy"><p class="eyebrow">The Etoile Circle</p><h1>More beautiful nights, made yours.</h1><p class="lede">A one-off $80 lifetime membership for those who never settle for the expected.</p><ul class="benefits"><li>Member-only discounts</li><li>Early access to new arrivals</li><li>Priority try-on bookings</li><li>Exclusive hire offers</li></ul><a class="btn" href="#membership-application">Apply for Membership</a></div></section></div>`;
}

function membershipApplicationPage() {
  return `<div class="page application-page"><section class="page-hero shell"><p class="eyebrow">The Etoile Circle</p><h1>Membership application</h1><p class="lede">Join once and enjoy lifetime access to member benefits.</p></section><section class="application-layout"><aside class="application-summary"><img class="membership-logo" src="assets/logo-white.png" alt="Etoile Dress Hire"><p class="eyebrow" style="color:#d9c39c">Lifetime membership</p><h2>Your place in the Circle.</h2><div class="application-price"><span>One-time payment</span><strong>$80</strong></div><ul class="benefits"><li>Member-only discounts</li><li>Early access to new arrivals</li><li>Priority try-on bookings</li><li>Exclusive hire offers</li></ul></aside><form class="membership-form" id="membership-form"><fieldset class="form-section"><legend>Personal details</legend><div class="form-grid"><div class="field"><label for="member-first">First name</label><input id="member-first" name="firstName" autocomplete="given-name" required></div><div class="field"><label for="member-last">Last name</label><input id="member-last" name="lastName" autocomplete="family-name" required></div><div class="field"><label for="member-email">Email address</label><input id="member-email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="member-phone">Mobile number</label><input id="member-phone" name="phone" type="tel" autocomplete="tel" required></div></div></fieldset><fieldset class="form-section"><legend>Billing address</legend><div class="form-grid"><div class="field span-2"><label for="member-address">Street address</label><input id="member-address" name="address" autocomplete="street-address" required></div><div class="field"><label for="member-suburb">Suburb</label><input id="member-suburb" name="suburb" autocomplete="address-level2" required></div><div class="field"><label for="member-state">State</label><select id="member-state" name="state" autocomplete="address-level1" required><option value="WA">Western Australia</option><option value="NSW">New South Wales</option><option value="VIC">Victoria</option><option value="QLD">Queensland</option><option value="SA">South Australia</option><option value="TAS">Tasmania</option><option value="ACT">Australian Capital Territory</option><option value="NT">Northern Territory</option></select></div><div class="field"><label for="member-postcode">Postcode</label><input id="member-postcode" name="postcode" inputmode="numeric" autocomplete="postal-code" maxlength="4" pattern="[0-9]{4}" required></div><div class="field"><label for="member-country">Country</label><input id="member-country" name="country" value="Australia" autocomplete="country-name" required></div></div></fieldset><fieldset class="form-section"><legend>Membership payment</legend><p class="secure-note">Secure checkout preview — card details are never stored or transmitted by this website. Connect a PCI-compliant payment provider before accepting live payments.</p><div class="form-grid"><div class="field span-2"><label for="card-name">Name on card</label><input id="card-name" name="cardName" autocomplete="cc-name" required></div><div class="field span-2"><label for="card-number">Card number</label><input id="card-number" name="cardNumber" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456" maxlength="19" required></div><div class="field"><label for="card-expiry">Expiry</label><input id="card-expiry" name="cardExpiry" inputmode="numeric" autocomplete="cc-exp" placeholder="MM / YY" maxlength="7" required></div><div class="field"><label for="card-cvc">CVC</label><input id="card-cvc" name="cardCvc" inputmode="numeric" autocomplete="cc-csc" placeholder="123" maxlength="4" required></div></div></fieldset><label class="consent"><input type="checkbox" required><span>I agree to the membership terms and authorise the one-time $80 membership payment when secure payments are activated.</span></label><button class="btn btn--gold" type="submit">Complete Membership Application</button></form></section></div>`;
}

function tryOnPage() {
  return `<div class="page section section--soft"><div class="shell try-grid"><div class="try-photo"><img src="assets/tania-2.jpg" alt="House of CB Tania dress"></div><div><p class="eyebrow">A private fitting</p><h1 style="margin:.5rem 0 1rem">Try on in Morley.</h1><p class="lede">Try-on appointments are available in Perth, Morley. Take your time, find your silhouette and leave feeling certain.</p><ol class="appointment-list"><li>25 minute private appointment</li><li>Please arrive on time; a 10 minute grace period applies</li><li>No bags or belongings in the fitting room</li><li>Bring valid photo ID</li></ol><a class="btn btn--gold" href="https://www.instagram.com/etoiledresshire.au/" target="_blank" rel="noreferrer">Book Try-On via DM</a></div></div></div>`;
}

function termsPage() {
  return `<div class="page"><section class="page-hero shell"><p class="eyebrow">The finer details</p><h1>Terms & conditions</h1><p class="lede">Clear, simple and designed to make every hire run beautifully.</p></section><section class="terms"><div class="accordion">${terms.map((t,i)=>`<div class="accordion-item"><button class="accordion-button" aria-expanded="${i===0}" aria-controls="term-${i}"><span>${t[0]}</span><span>+</span></button><div class="accordion-panel ${i===0?'open':''}" id="term-${i}"><div><ul>${t[1].map(x=>`<li>${x}</li>`).join('')}</ul></div></div></div>`).join('')}</div></section></div>`;
}

function contactPage() {
  return `<div class="page contact-grid"><div class="contact-image" role="img" aria-label="Persephone dress at night"></div><section class="contact-copy"><p class="eyebrow">Let’s find your dress</p><h1>Ready for your moment?</h1><p class="lede">Bookings are personally confirmed via Instagram DM or email after deposit payment.</p><div class="contact-list"><a href="https://www.instagram.com/etoiledresshire.au/" target="_blank" rel="noreferrer">@etoiledresshire.au <span style="float:right">↗</span></a><a href="mailto:hirebylarisse@gmail.com">hirebylarisse@gmail.com <span style="float:right">↗</span></a><a href="#try-on">Try-on appointments · Morley <span style="float:right">→</span></a></div><p style="color:rgba(255,255,255,.5);font-size:.8rem">Please include your preferred dress and whether you would like to rent or buy.</p></section></div>`;
}

function render() {
  const raw = location.hash.slice(1) || 'home';
  const [path, query=''] = raw.split('?');
  const [page, id] = path.split('/');
  const pages = { home: homePage, dresses: () => dressesPage(false), 'new-arrivals': () => dressesPage(true), 'gift-cards': giftCardsPage, membership: membershipPage, 'membership-application': membershipApplicationPage, 'try-on': tryOnPage, terms: termsPage, contact: contactPage };
  app.innerHTML = page === 'dress' ? detailPage(id, query.includes('book=1')) : (pages[page] || homePage)();
  document.querySelectorAll('.site-nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${page}`));
  closeMenu();
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
  bindPage();
  if (page === 'dress' && query.includes('book=1')) setTimeout(() => document.querySelector('#event-date')?.focus(), 120);
}

function bindPage() {
  document.querySelectorAll('[data-carousel]').forEach(box => {
    const item = dresses.find(d => (box.closest('[data-id]')?.dataset.id || location.hash.split('/')[1]?.split('?')[0]) === d.id);
    if (!item) return;
    const update = idx => {
      idx = (idx + item.images.length) % item.images.length;
      box.dataset.index = idx;
      const img = box.querySelector('img');
      img.src = item.images[idx]; img.alt = `${item.name}, photo ${idx+1} of 2`;
      box.querySelectorAll('.carousel-dot').forEach((d,i) => d.classList.toggle('active', i === idx));
      const count = box.querySelector('.detail-count'); if (count) count.textContent = `${idx+1} / 2`;
    };
    box.querySelectorAll('[data-dir]').forEach(b => b.addEventListener('click', () => update(+box.dataset.index + +b.dataset.dir)));
    box.querySelectorAll('[data-slide]').forEach(b => b.addEventListener('click', () => update(+b.dataset.slide)));
  });

  const size = document.querySelector('#size-filter');
  const price = document.querySelector('#price-filter');
  const filter = () => {
    const visible = dresses.filter(d => (size.value === 'all' || d.size.startsWith(size.value)) && (price.value === 'all' || d.hire <= +price.value));
    document.querySelector('#dress-grid').innerHTML = visible.length ? visible.map(card).join('') : '<div class="empty"><h3>No dresses match those filters.</h3><p>Try another size or price.</p></div>';
    document.querySelector('#result-count').textContent = visible.length;
    bindPageCarouselsOnly();
  };
  if (size) { size.addEventListener('change', filter); price.addEventListener('change', filter); }

  document.querySelectorAll('.accordion-button').forEach(btn => btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    document.querySelector(`#${btn.getAttribute('aria-controls')}`).classList.toggle('open', !open);
  }));

  document.querySelectorAll('.amount').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.amount').forEach(b => b.classList.remove('selected')); btn.classList.add('selected');
    document.querySelector('#gift-enquire').href = `mailto:hirebylarisse@gmail.com?subject=${encodeURIComponent(`Etoile Gift Card Enquiry - ${btn.dataset.amount}`)}`;
  }));

  const form = document.querySelector('#booking-form');
  if (form) {
    const dateField = document.querySelector('#event-date');
    dateField.min = new Date().toISOString().slice(0, 10);
    const syncIntent = () => {
      const buying = form.querySelector('input[name="intent"]:checked').value === 'Buy';
      document.querySelector('#price-label').textContent = buying ? 'Buy' : 'Hire';
      document.querySelector('#detail-price').textContent = money(+(buying ? form.dataset.buy : form.dataset.hire));
      form.querySelectorAll('[data-rent-only]').forEach(el => { el.hidden = buying; });
      dateField.required = !buying;
      document.querySelector('#booking-note').textContent = buying ? 'Purchase availability and payment are confirmed via Instagram DM or email.' : 'Final booking is confirmed via Instagram DM or email after deposit payment.';
      document.querySelector('#instagram-book').textContent = buying ? 'Buy via Instagram' : 'Book via Instagram';
      document.querySelector('#email-hire').textContent = buying ? 'Email to Buy' : 'Email to Hire';
    };
    form.querySelectorAll('input[name="intent"]').forEach(input => input.addEventListener('change', syncIntent));
    syncIntent();
    const buildMessage = () => {
      const data = new FormData(form);
      if (data.get('intent') === 'Buy') return `Hello Etoile, I would like to buy ${form.dataset.name}. Size: ${data.get('size')}. Buy price: ${money(+form.dataset.buy)}.`;
      return `Hello Etoile, I would like to rent ${form.dataset.name}. Size: ${data.get('size')}. Hire price: ${money(+form.dataset.hire)}. Duration: ${data.get('duration')}. Event date: ${data.get('date') || 'to be confirmed'}. Try-on requested: ${data.get('tryon') ? 'Yes' : 'No'}.`;
    };
    form.addEventListener('submit', e => { e.preventDefault(); const msg = buildMessage(); navigator.clipboard?.writeText(msg); showToast('Enquiry details copied — paste them into your Instagram DM.'); window.open('https://www.instagram.com/etoiledresshire.au/', '_blank', 'noopener'); });
    document.querySelector('#email-hire').addEventListener('click', () => { const intent = form.querySelector('input[name="intent"]:checked').value; location.href = `mailto:hirebylarisse@gmail.com?subject=${encodeURIComponent(`${intent} enquiry — ${form.dataset.name}`)}&body=${encodeURIComponent(buildMessage())}`; });
  }

  const membershipForm = document.querySelector('#membership-form');
  if (membershipForm) membershipForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!membershipForm.checkValidity()) { membershipForm.reportValidity(); return; }
    membershipForm.reset();
    showToast('Application form complete. Connect a secure payment provider to accept the $80 payment.');
  });
}

function bindPageCarouselsOnly() {
  document.querySelectorAll('[data-carousel]').forEach(box => {
    const item = dresses.find(d => box.closest('[data-id]')?.dataset.id === d.id);
    if (!item) return;
    const update = idx => { idx = (idx + 2) % 2; box.dataset.index = idx; const img = box.querySelector('img'); img.src = item.images[idx]; img.alt = `${item.name}, photo ${idx+1} of 2`; box.querySelectorAll('.carousel-dot').forEach((d,i) => d.classList.toggle('active', i === idx)); };
    box.querySelectorAll('[data-dir]').forEach(b => b.addEventListener('click', () => update(+box.dataset.index + +b.dataset.dir)));
    box.querySelectorAll('[data-slide]').forEach(b => b.addEventListener('click', () => update(+b.dataset.slide)));
  });
}

function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open menu'); document.body.classList.remove('nav-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded',String(!open)); menu.setAttribute('aria-label', open ? 'Open menu' : 'Close menu'); nav.classList.toggle('open',!open); document.body.classList.toggle('nav-open',!open); });
window.addEventListener('hashchange', render);
document.querySelector('#year').textContent = new Date().getFullYear();
render();
