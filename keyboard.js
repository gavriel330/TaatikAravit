

Keyboard = function(mappings) {
    this.mappings = mappings;
    this.build_regexps();
  }
  
  Keyboard.prototype.build_regexps = function() {
  
    this.regexps = [];
  
    var sort_by_longest_string = function(a, b) {
      return b.length - a.length;
    }
  
    for (var round in this.mappings) {
      var map = this.mappings[round];
      var letters = [];
      for (var letter in map) {
        letters.push(letter.replace(/([.*?()])/g, '\\$1'));
      }
      this.regexps[round] = new RegExp('(' + letters.sort(sort_by_longest_string).join('|') + ')', 'g')
    }
  }
  
  Keyboard.prototype.transliterate = function(text) {
    for (var round in this.mappings) {
      var map = this.mappings[round];
      var re = this.regexps[round];
      text = text.replace(re, function(letter) {
        return map[letter];
      });
    }
    return text;
  }
  
  
  Keyboard.registry = {};
  
  // Registers a keyboard.
  Keyboard.register = function(kbd, name) {
    Keyboard.registry[name] = kbd;
  }
  
  // Retrieves a registered keyboard.
  Keyboard.get = function(name) {
    return Keyboard.registry[name];
  }
  
  ;
  
  // The above terminating ";" is important: if the next statement (e.g., when
  // concatenating several JS files) is "(...)", JS will try to execute the
  // above function.
  
  (function() {
  
  
  // @TODO: IE compatibility: make sure no spurious "," at end.
  var mappings = [
  
    {
      // Canonization: convert to uppercase.
      'a': 'A',
      'i': 'I',
      'u': 'U',
      'p': 'P',
      'v': 'V',
  
      // colloquial:
      'o': 'O',
      'e': 'E'
    },
  
    {
      // Canonization: get rid of Hebrew's suffixes.
      'ן': 'נ',
      'ם': 'מ',
      'ך': 'כ',
      'ף': 'פ',
      'ץ': 'צ'
    },
  
    {
      // Canonization: handle alternative ways of typing things.
      '(א)': 'א~'
    },
  
    {
      // Alifs.
      'אA': 'أ',
      'אI': 'إ',
      'אU': 'أU',
      'א:': 'أ:',
      'א#': 'ى',  // alif maksura.
      'א~': 'ٱ',  // HamzatWasl  http://he.wikibooks.org/wiki/ערבית/ספרותית/أل_הידיעה
      'א~~': "آ"  // Alif madda. There's also "\u0653" for madda alone.
      // @todo: what about the alif in "hadha"?
    },
  
    {
      // Hamza.
      'ו@': 'ؤ',
      'י@': 'ئ'
    },
  
    {
      '@': 'ء', // Note: This is the correct character to use (U+0621). Previously we used U+FE80, which is a "Presentation Form" !
      'א': 'ا',
      'ב': 'ب',
      'ג': 'ج',
        "ג'": 'ج',
      'ד': 'د',
      "ד'": 'ذ',
      'ה': 'ه',
      'ו': 'و',
      'ז': 'ز',
      'ח': 'ح',
      "ח'": 'خ',
      'ט': 'ط',
        "ט'": 'ظ',
      'י': 'ي',
      'כ': 'ك',
      'ל': 'ل',
      'מ': 'م',
      'נ': 'ن',
      'ס': 'س',
      'ע': 'ع',
        "ע'": 'غ',
      'פ': 'ف',
      'צ': 'ص',
        "צ'": 'ض',
      'ק': 'ق',
      'ר': 'ر',
      'ש': 'ش',
      'ת': 'ت',
      "ת'": 'ث',
      'ה~': 'ة',
  
      // non-Arab letters:
      'P': 'پ',
      'V': 'ڤ'
    },
  
    {
      // Vowels.
      //
      // (See http://corpus.quran.com/java/unicode.jsp)
      '*': "\u0651", // shadda
      ':': "\u0652", // sukun
      'A': "\u064E", // fatha
      'U': "\u064F", // damma
      'I': "\u0650", // kasra
      'AA': "\u064B", // fathatan
      'UU': "\u064C", // dammatan
      'II': "\u064D", // kasratan
  
      // The following two added per the request of Ronen Yavor (see email, 2014-Jun-10).
      // ** I might remove them in the future as they seem ad-hoc. **
      // (It was suppsed to be a reversed kasra, but one doesn't exist, so a small alif is used instead.)
      'O': "\u065D", // reversed damma (colloquial arabic)
      'E': "\u0656" // subscript alef (colloquial arabic)
    },
  
    {
      // Punctuations.
      ';': '؛',
      ',': '،',
      '.': '.',
      '?': '؟'
    },
  
    {
      // Miscellaneous.
      '_': 'ـ', // kashida/tatweel
      '0': '٠',
      '1': '١',
      '2': '٢',
      '3': '٣',
      '4': '٤',
      '5': '٥',
      '6': '٦',
      '7': '٧',
      '8': '٨',
      '9': '٩'
    }
  
  ];
  
  Keyboard.register(new Keyboard(mappings), 'ar-he');
  
  })();
  
  
  function bm_entry() {
    var controls = [];
    for (var list = document.getElementsByTagName('textarea'), i = 0; i < list.length; i++) {
      controls.push(list[i]);
    }
    for (var list = document.getElementsByTagName('input'), i = 0; i < list.length; i++) {
      if (list[i].type == 'text') {
        controls.push(list[i]);
      }
    }
    //alert(controls.length + ' text fields were found');
    for (var i = 0; i < controls.length; i++) {
      var ctl = controls[i];
      ctl.value = Keyboard.get('ar-he').transliterate(ctl.value);
    }
  }
  
  bm_entry();
  