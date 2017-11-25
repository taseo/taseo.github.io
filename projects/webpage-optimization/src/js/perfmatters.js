// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  
  var t = window.performance.timing;
  var dcl = t.domContentLoadedEventStart - t.domLoading;
  var complete = t.domComplete - t.domLoading;

  document
    .getElementById('crp-stats')
    .textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener('load', logCRP);
