/* ══════════════════════════════════════════════════════════
   LANGUAGE SWITCHER — ENGLISH / MALAYALAM  (100% client-side)

   HOW TO EDIT TRANSLATIONS
   ─────────────────────────
   Every translatable element in index.html carries a
   data-i18n="key" attribute (data-i18n-aria / data-i18n-alt for
   accessibility labels and image alt text). Each key below has an
   `en` and an `ml` value. Edit or add text here — no other file
   needs to change. HTML tags such as <br> and <strong> may be used.

   Not translated on purpose: phone number, dates in Hijri,
   Arabic text, map link, address / place names, parents' names.
══════════════════════════════════════════════════════════ */
(function () {
  var STORAGE_KEY = 'safa-afnan-lang';
  var DEFAULT_LANG = 'en';

  var T = {
    /* ── Cover ── */
    cover_label:  { en: 'You are cordially invited to the wedding of',
                    ml: 'ഇവരുടെ വിവാഹത്തിലേക്ക് താങ്കളെ സ്നേഹപൂർവം ക്ഷണിക്കുന്നു' },
    name_safa:    { en: 'Safa',   ml: 'സഫ' },
    name_afnan:   { en: 'Afnan',  ml: 'അഫ്നാൻ' },
    open_invitation: { en: 'Open Invitation', ml: 'ക്ഷണം തുറക്കുക' },
    open_aria:    { en: 'Open the wedding invitation', ml: 'വിവാഹ ക്ഷണം തുറക്കുക' },
    cover_hint:   { en: 'Tap to begin &nbsp;&bull;&nbsp; Insha Allah',
                    ml: 'തുടങ്ങാൻ തൊടുക &nbsp;&bull;&nbsp; ഇൻശാ അല്ലാഹ്' },
    skip:         { en: 'Skip &rsaquo;', ml: 'ഒഴിവാക്കുക &rsaquo;' },
    skip_aria:    { en: 'Skip intro video', ml: 'ആമുഖ വീഡിയോ ഒഴിവാക്കുക' },

    /* ── Hero ── */
    together:     { en: 'Together with their families', ml: 'ഇരു കുടുംബങ്ങളോടൊപ്പം' },
    hero_daughter:{ en: 'Daughter of Mr. Abdul Kareem &amp; Mrs. Ayshabi',
                    ml: 'Mr. Abdul Kareem &amp; Mrs. Ayshabi ദമ്പതികളുടെ മകൾ' },
    hero_son:     { en: 'Son of Mr. Abdul Razak &amp; Mrs. Kadeeja',
                    ml: 'Mr. Abdul Razak &amp; Mrs. Kadeeja ദമ്പതികളുടെ മകൻ' },
    sunday:       { en: 'Sunday', ml: 'ഞായർ' },
    month_year_br:{ en: 'October<br>2026', ml: 'ഒക്ടോബർ<br>2026' },
    nikah_time_dot:  { en: 'Nikah &nbsp;&bull;&nbsp; 10 AM onwards',
                       ml: 'നിക്കാഹ് &nbsp;&bull;&nbsp; രാവിലെ 10 മണി മുതൽ' },
    nikah_time_bull: { en: 'Nikah &#8226; 10 AM onwards',
                       ml: 'നിക്കാഹ് &#8226; രാവിലെ 10 മണി മുതൽ' },
    insha_allah:  { en: 'Insha Allah', ml: 'ഇൻശാ അല്ലാഹ്' },
    scroll:       { en: 'SCROLL', ml: 'താഴേക്ക്' },
    scroll_aria:  { en: 'Scroll down to explore', ml: 'താഴേക്ക് സ്ക്രോൾ ചെയ്യുക' },

    /* ── Invitation ── */
    insha_star:   { en: '✦ Insha Allah ✦', ml: '✦ ഇൻശാ അല്ലാഹ് ✦' },
    h_invitation: { en: 'The Invitation', ml: 'ക്ഷണക്കത്ത്' },
    invitation_body: {
      en: 'In the name of Allah, the Most Beneficent, the Most Merciful.<br><br>' +
          'You are warmly invited to join us and share in our joy as we begin this blessed journey together. ' +
          'Your gracious presence and prayers will make our celebration truly blessed.',
      ml: 'പരമകാരുണികനും കരുണാനിധിയുമായ അല്ലാഹുവിന്റെ നാമത്തിൽ.<br><br>' +
          'ഈ അനുഗ്രഹീത ജീവിതയാത്രയുടെ തുടക്കത്തിൽ ഞങ്ങളുടെ സന്തോഷത്തിൽ പങ്കുചേരാൻ താങ്കളെ സ്നേഹപൂർവം ക്ഷണിക്കുന്നു. ' +
          'താങ്കളുടെ സാന്നിധ്യവും പ്രാർത്ഥനയും ഞങ്ങളുടെ ആഘോഷത്തെ കൂടുതൽ ധന്യമാക്കും.'
    },
    scratch_eyebrow: { en: '✦ Our Forever Begins ✦', ml: '✦ ഞങ്ങളുടെ ജീവിതയാത്രയുടെ തുടക്കം ✦' },
    scratch_title:   { en: 'Scratch to Reveal', ml: 'ഉരച്ചു നോക്കൂ' },
    scratch_canvas:  { en: '✦  SCRATCH TO REVEAL  ✦', ml: '✦  ഉരച്ചു നോക്കൂ  ✦' },
    scratch_here:    { en: 'Scratch here', ml: 'ഇവിടെ ഉരയ്ക്കുക' },
    scratch_sub:     { en: 'Reveal a special surprise &nbsp;✦', ml: 'ഒരു പ്രത്യേക സർപ്രൈസ് കണ്ടെത്തൂ &nbsp;✦' },
    scratch_sub_done:{ en: '✦ You\'re Invited! Insha Allah ✦', ml: '✦ താങ്കളെ ക്ഷണിക്കുന്നു! ഇൻശാ അല്ലാഹ് ✦' },
    reveal_invited:  { en: '✦ You\'re Invited ✦', ml: '✦ താങ്കളെ ക്ഷണിക്കുന്നു ✦' },

    c_wedding_day: { en: 'Wedding Day', ml: 'വിവാഹ ദിനം' },
    c_date_val:    { en: 'Sunday<br>18 October 2026', ml: 'ഞായർ<br>18 ഒക്ടോബർ 2026' },
    nikah:         { en: 'Nikah', ml: 'നിക്കാഹ്' },
    c_time_val:    { en: '10 AM', ml: 'രാവിലെ 10 മണി' },
    c_onwards:     { en: 'Onwards', ml: 'മുതൽ' },
    c_venue:       { en: 'Venue', ml: 'വേദി' },
    venue_name:    { en: 'Esquire Ville Auditorium', ml: 'എസ്ക്വയർ വില്ലെ ഓഡിറ്റോറിയം' },

    /* ── Countdown ── */
    cd_eyebrow: { en: '✦ The Big Day ✦', ml: '✦ ആ സുദിനം ✦' },
    cd_title:   { en: 'Counting Down', ml: 'കാത്തിരിപ്പിന്റെ നാളുകൾ' },
    cd_days:    { en: 'Days', ml: 'ദിവസം' },
    cd_hours:   { en: 'Hours', ml: 'മണിക്കൂർ' },
    cd_minutes: { en: 'Minutes', ml: 'മിനിറ്റ്' },
    cd_seconds: { en: 'Seconds', ml: 'സെക്കൻഡ്' },

    /* ── Couple ── */
    couple_eyebrow: { en: '✦ Two Souls, One Destiny ✦', ml: '✦ രണ്ട് ഹൃദയങ്ങൾ, ഒരേ വിധി ✦' },
    couple_title:   { en: 'The Couple', ml: 'വധൂവരന്മാർ' },
    couple_sub:     { en: 'United in love, guided by faith', ml: 'സ്നേഹത്താൽ ഒന്നിച്ചവർ, വിശ്വാസത്താൽ നയിക്കപ്പെടുന്നവർ' },
    the_bride:      { en: 'The Bride', ml: 'വധു' },
    the_groom:      { en: 'The Groom', ml: 'വരൻ' },
    daughter_of:    { en: 'Daughter of', ml: 'മകൾ' },
    son_of:         { en: 'Son of', ml: 'മകൻ' },
    contact:        { en: 'Contact:', ml: 'ബന്ധപ്പെടാൻ:' },

    /* ── Venue ── */
    venue_eyebrow: { en: '✦ Join Us Here ✦', ml: '✦ ഇവിടെ ഞങ്ങളോടൊപ്പം ചേരൂ ✦' },
    venue_title:   { en: 'The Venue', ml: 'വിവാഹ വേദി' },
    v_sunday:      { en: 'SUNDAY', ml: 'ഞായർ' },
    v_date:        { en: '18 OCTOBER 2026', ml: '18 ഒക്ടോബർ 2026' },
    v_time:        { en: '10 AM ONWARDS', ml: 'രാവിലെ 10 മണി മുതൽ' },
    venue_alt:     { en: 'Decorative floral terrace backdrop', ml: 'പുഷ്പാലങ്കൃതമായ ടെറസ് പശ്ചാത്തലം' },
    directions:    { en: 'GET DIRECTIONS', ml: 'വഴി കാണുക' },
    directions_aria: { en: 'Get directions to Esquire Ville Auditorium',
                       ml: 'എസ്ക്വയർ വില്ലെ ഓഡിറ്റോറിയത്തിലേക്കുള്ള വഴി കാണുക' },

    /* ── Blessings ── */
    bless_eyebrow: { en: '✦ Islamic Blessing ✦', ml: '✦ അനുഗ്രഹ പ്രാർത്ഥന ✦' },
    bless_title:   { en: 'Nikah Dua &amp; Blessings', ml: 'നിക്കാഹ് ദുആയും അനുഗ്രഹങ്ങളും' },
    dua_translation: {
      en: '"May Allah bless you, shower His blessings upon you, and unite you both in goodness and love."',
      ml: '"അല്ലാഹു നിങ്ങളെ അനുഗ്രഹിക്കുകയും, നിങ്ങളുടെമേൽ അനുഗ്രഹം ചൊരിയുകയും, നന്മയിലും സ്നേഹത്തിലും നിങ്ങളിരുവരെയും ഒരുമിപ്പിക്കുകയും ചെയ്യട്ടെ."'
    },
    dua_source: { en: 'Sunan Abi Dawud', ml: 'സുനൻ അബീ ദാവൂദ്' },
    bless_1: {
      en: 'We invite you to share in our joy as we begin our new life together and seek your prayers as we embark on this blessed journey.',
      ml: 'ഞങ്ങളുടെ പുതിയ ജീവിതത്തിന്റെ തുടക്കത്തിൽ സന്തോഷം പങ്കിടാൻ താങ്കളെ ക്ഷണിക്കുന്നു. ഈ അനുഗ്രഹീത യാത്രയിൽ താങ്കളുടെ പ്രാർത്ഥനകൾ ഞങ്ങൾക്ക് തുണയാകട്ടെ.'
    },
    bless_2: {
      en: 'We regret that we could not personally invite each and every one to attend in person. ' +
          'Please accept our heartfelt apologies, and know that your presence in our prayers is cherished beyond words.',
      ml: 'ഓരോരുത്തരെയും നേരിൽ വന്ന് ക്ഷണിക്കാൻ കഴിയാത്തതിൽ ഞങ്ങൾക്ക് ഖേദമുണ്ട്. ദയവായി ഞങ്ങളോട് ക്ഷമിക്കുക; ' +
          'താങ്കളുടെ പ്രാർത്ഥനയിൽ ഞങ്ങളുണ്ടാകുമെന്ന വിശ്വാസം വാക്കുകൾക്കതീതമായി ഞങ്ങൾക്ക് വിലപ്പെട്ടതാണ്.'
    },

    /* ── Footer ── */
    footer_top:  { en: 'With Love &amp; Gratitude', ml: 'സ്നേഹത്തോടെ, നന്ദിയോടെ' },
    footer_logo: { en: 'Safa &amp; Afnan', ml: 'സഫ &amp; അഫ്നാൻ' },
    footer_body: {
      en: '"And of His signs is that He created for you from yourselves mates that you may find ' +
          'tranquillity in them, and He placed between you affection and mercy." <em> — Quran 30:21</em>',
      ml: '"നിങ്ങൾക്ക് സമാധാനം കണ്ടെത്തുന്നതിനായി നിങ്ങളിൽ നിന്നുതന്നെ ഇണകളെ സൃഷ്ടിക്കുകയും, ' +
          'നിങ്ങൾക്കിടയിൽ സ്നേഹവും കാരുണ്യവും ഉണ്ടാക്കുകയും ചെയ്തത് അവന്റെ ദൃഷ്ടാന്തങ്ങളിൽപെട്ടതാകുന്നു." <em> — ഖുർആൻ 30:21</em>'
    },

    /* ── Page meta ── */
    page_title: { en: 'Wedding Invitation - Safa &amp; Afnan | 18.10.2026',
                  ml: 'വിവാഹ ക്ഷണം - സഫ &amp; അഫ്നാൻ | 18.10.2026' }
  };

  var current = DEFAULT_LANG;

  function readSaved() {
    try {
      var v = sessionStorage.getItem(STORAGE_KEY);
      return (v === 'en' || v === 'ml') ? v : null;
    } catch (e) { return null; }
  }
  function save(lang) {
    try { sessionStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function plain(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    return d.textContent;
  }

  function t(key, lang) {
    var e = T[key];
    if (!e) return '';
    return e[lang || current] || e.en || '';
  }

  function apply(lang) {
    current = lang;
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var k = el.getAttribute('data-i18n');
      if (T[k]) el.innerHTML = t(k, lang);
    }
    var aria = document.querySelectorAll('[data-i18n-aria]');
    for (var j = 0; j < aria.length; j++) {
      var ak = aria[j].getAttribute('data-i18n-aria');
      if (T[ak]) aria[j].setAttribute('aria-label', plain(t(ak, lang)));
    }
    var alts = document.querySelectorAll('[data-i18n-alt]');
    for (var m = 0; m < alts.length; m++) {
      var lk = alts[m].getAttribute('data-i18n-alt');
      if (T[lk]) alts[m].setAttribute('alt', plain(t(lk, lang)));
    }

    document.title = plain(t('page_title', lang));

    var btns = document.querySelectorAll('.lang-btn');
    for (var b = 0; b < btns.length; b++) {
      var on = btns[b].getAttribute('data-lang') === lang;
      btns[b].classList.toggle('active', on);
      btns[b].setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    /* Let other scripts (e.g. the scratch-card canvas) react */
    if (typeof window.onLanguageChange === 'function') window.onLanguageChange(lang);
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'ml') return;
    save(lang);
    apply(lang);
  }

  /* Public API */
  window.I18N = {
    t: t,
    get lang() { return current; },
    set: setLang,
    apply: apply
  };

  /* Init */
  function init() {
    var sw = document.getElementById('lang-switch');
    if (sw) {
      sw.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('.lang-btn') : null;
        if (b) setLang(b.getAttribute('data-lang'));
      });
    }
    apply(readSaved() || DEFAULT_LANG);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
