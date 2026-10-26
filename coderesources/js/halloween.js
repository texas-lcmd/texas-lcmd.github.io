// Halloween theme for the member resources page.
// To turn it off: remove the <script src=".../halloween.js"> line from memberresources/index.html.
// Everything the theme needs (CSS, font, decorations, effects) is added from here.
(function () {
    var pc = document.getElementById('protectedContent');
    if (!pc) return;

    // Stylesheet and font
    ['https://fonts.googleapis.com/css2?family=Creepster&display=swap',
     '../coderesources/CSS/halloween.css'].forEach(function (href) {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = href;
        document.head.appendChild(l);
    });

    // Decorations and banner
    pc.insertAdjacentHTML('afterbegin', `
        <div class="vignette" aria-hidden="true"></div>
        <div class="whisper" id="whisper" aria-hidden="true"></div>
        <div class="shadow-figure" aria-hidden="true"><span class="head"></span><span class="body"></span></div>
        <div class="jumpscare" id="jumpscare" aria-hidden="true">👻</div>
        <div class="lightning" aria-hidden="true"></div>
        <div class="fog" aria-hidden="true"></div>
        <div class="stars" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span><span>✧</span></div>
        <div class="witch" aria-hidden="true">🧙‍♀️</div>
        <div class="web web-left" aria-hidden="true">🕸️</div>
        <div class="web web-right" aria-hidden="true">🕸️</div>
        <div class="hanging-spider" aria-hidden="true"><span class="thread"></span><span class="spider">🕷️</span></div>
        <div class="ghosts" aria-hidden="true"><span>👻</span><span>👻</span></div>
        <div class="flying-bats" aria-hidden="true"><span>🦇</span><span>🦇</span><span>🦇</span></div>
        <div class="falling-leaves" aria-hidden="true">
            <span>🦇</span><span>🎃</span><span>🦇</span><span>👻</span><span>🕸️</span><span>🦇</span><span>👻</span><span>🎃</span>
        </div>
        <div class="halloween-banner" role="note">
            <div class="moon" aria-hidden="true">🌕</div>
            <h2 class="creepy-title">Happy Halloween, LCMD...</h2>
        </div>`);

    var h1 = pc.querySelector(':scope > h1');
    if (h1) {
        h1.classList.add('glitch');
        h1.setAttribute('data-text', h1.textContent);
    }

    var wh = document.getElementById('whisper');
    var words = ['behind you...', 'we see you', 'don\'t look away', 'you are not alone', 'turn back', 'it\'s watching', 'can you hear it?', 'medical bills...',];
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function whisper() {
      if (!reduce && wh && pc.offsetParent !== null) {
        var r = pc.getBoundingClientRect();
        wh.textContent = words[Math.floor(Math.random() * words.length)];
        wh.style.left = (10 + Math.random() * 70) + '%';
        wh.style.top = (Math.max(0, -r.top) + 60 + Math.random() * (window.innerHeight - 160)) + 'px';
        wh.classList.remove('show'); void wh.offsetWidth; wh.classList.add('show');
      }
      setTimeout(whisper, 9000 + Math.random() * 9000);
    }
    setTimeout(whisper, 6000);

    var js = document.getElementById('jumpscare');
    function scare() {
      if (!reduce && js && pc.offsetParent !== null) {
        js.classList.remove('boo'); void js.offsetWidth; js.classList.add('boo');
        pc.classList.remove('shake'); void pc.offsetWidth; pc.classList.add('shake');
      }
      setTimeout(scare, 40000 + Math.random() * 40000);
    }
    setTimeout(scare, 25000);

    pc.querySelectorAll('.tab-button').forEach(function (b) {
      b.addEventListener('click', function () {
        pc.classList.remove('glitching'); void pc.offsetWidth; pc.classList.add('glitching');
      });
    });

    var lastWisp = 0;
    pc.addEventListener('mousemove', function (e) {
      var now = Date.now();
      if (reduce || now - lastWisp < 45) return;
      lastWisp = now;
      var r = pc.getBoundingClientRect();
      var w = document.createElement('span');
      w.className = 'wisp';
      w.style.left = (e.clientX - r.left) + 'px';
      w.style.top = (e.clientY - r.top) + 'px';
      pc.appendChild(w);
      setTimeout(function () { w.remove(); }, 1200);
    });

    var realTitle = document.title;
    document.addEventListener('visibilitychange', function () {
      if (pc.offsetParent === null) return;
      document.title = document.hidden ? 'Don\'t look behind you...' : realTitle;
    });
})();
