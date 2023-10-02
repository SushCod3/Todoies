function detectOSTheme() {
    // matchMedia can detect the os color
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'; // OS has dark mode
    } else {
      return 'light'; // OS has light mode
    }
  }
  const osTheme = detectOSTheme();
  document.documentElement.setAttribute('data-bs-theme', osTheme);
    