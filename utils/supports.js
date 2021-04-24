module.exports = function() {
  'use strict';

  // Test via a getter in the options object to see if the passive property is accessed
  // Use our detect's results. passive applied if supported, capture will be false either way.
  // elem.addEventListener('touchstart', fn, supportsPassive ? { passive: true } : false);
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}

  return {
    passive: supportsPassive
  };
};
