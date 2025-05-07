document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
  
    // Register keyboard if not already done
    if (typeof Keyboard === 'function' && !Keyboard.get('ar-he')) {
      // Re-register manually if needed
      console.warn("Keyboard not registered");
    }
  
    const keyboard = Keyboard.get('ar-he');
  
    if (!keyboard) {
      console.error("Arabic keyboard not loaded");
      return;
    }
  
    input.addEventListener('input', function () {
      output.value = keyboard.transliterate(input.value);
    });
  });
  