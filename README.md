# Taatik - Hebrew to Arabic Transliteration Keyboard

Taatik is a Chrome extension that provides a clean, RTL-oriented UI for transliterating Hebrew characters into Arabic script. It features live conversion, helpful letter guides, and a compact standalone interface.

![](https://github.com/gavriel330/TaatikAravit/blob/main/taatik_demonstration.gif)

---

### Features
- Real-time conversion from Hebrew to Arabic
- Recognition of compound letters and diacritics
- Visual help panel mapping all supported keys
- Fully offline functionality
- Optimized for Hebrew-speaking users
---

###  Transliteration Logic Attribution

**All transliteration logic is derived entirely from:**

**[Mooffie’s Arabic Keyboard](https://geek.co.il/~mooffie/arabic/keyboard/)**  
Originally written as a bookmarklet for converting Hebrew into Arabic text.

This project embeds that logic exactly, with no algorithmic modifications.

---

### ⚠️ Licensing Status

The original keyboard logic **does not specify any license**, and thus is **not open-source** under standard legal definitions.

As of the time of writing, multiple attempts were made to contact the author to request permission or clarify licensing terms — **but without success**.

Accordingly:

- This extension **must not** be distributed commercially or submitted to the Chrome Web Store
- This extension is intended for **private use only**
- All credit for the core transliteration engine goes to the original author of the bookmarklet

---

### Installation (Manual)

1. Clone or download this folder
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the extension directory

---

### How-To
<div dir="rtl">
  
#### האותיות הפשוטות (Basic Letters)

| עברית       | ערבית |
|-------------|--------|
| א           | ا      |
| ב           | ب      |
| ג או ג'     | ج      |
| ד           | د      |
| ד'          | ذ      |
| ה           | ه      |
| ו           | و      |
| ז           | ز      |
| ח           | ح      |
| ח'          | خ      |
| ט           | ط      |
| ט'          | ظ      |
| י           | ي      |
| כ           | ك      |
| ל           | ل      |
| מ           | م      |
| נ           | ن      |
| ס           | س      |
| ע           | ع      |
| ע'          | غ      |
| פ           | ف      |
| צ           | ص      |
| צ'          | ض      |
| ק           | ق      |
| ר           | ر      |
| ש           | ش      |
| ת           | ت      |
| ת'          | ث      |
| ה~          | ة      |

---

#### ההרחבות לכתיב הערבי (Extended Characters)

| סימון | תוצאה |
|--------|--------|
| P      | پ      |
| V      | ڨ      |

---

#### ניקוד (Vocalization)

| סימון | תוצאה |
|-------|----------------------|
| A     | ◌َ פתחה              |
| I     | ◌ِ כסרה              |
| U     | ◌ُ דמה               |
| :     | ◌ْ סוקון             |
| *     | ◌ّ שדה               |
| AA    | ◌ً תנווין פתחה       |
| II    | ◌ٍ תנווין כסרה       |
| UU    | ◌ٌ תנווין דמה        |

---

#### המזה, ומיני אליפים (Hamza and Alef Variants)

| סימון | תוצאה |
|------|--------|
| אA   | أ      |
| אI   | إ      |
| אU   | أُ     |
| א:   | أْ     |
| א#   | ى      |
| א~   | ٱ      |
| א~~  | آ      |

---

#### המזה בודדה \ קורסי אלהמזה (Isolated Hamza / Hamza Seats)

| סימון | תוצאה |
|-----|--------|
| ו@  | ؤ      |
| י@  | ئ      |
| @   | ﺀ      |

---

#### קו תחתון (Tatweel)

| סימון | תוצאה |
|-----|--------|
| _   | ـ      |

---

#### ספרות (Digits)

| מספר | תוצאה |
|--------|---------|
| 0-9    | ٠-٩     |
</div>
