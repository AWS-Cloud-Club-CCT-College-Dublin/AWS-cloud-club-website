document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('a');

  // Toggle nav menu when hamburger clicked
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Close nav menu when any link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });

  // Chatbot loader (unchanged)
  const loaderOpts = {
    baseUrl: 'https://d2252vz4w8mz3n.cloudfront.net/',
    shouldLoadMinDeps: true,
    container: document.getElementById('chatbot-frame'),
    iframeAttributes: {
      // Add your iframe styles or attributes here if needed
    }
  };
  const loader = new ChatBotUiLoader.IframeLoader(loaderOpts);

  const chatbotUiConfig = {
    // your chatbot config here
  };

  loader.load(chatbotUiConfig).catch(error => {
    console.error('Chatbot loading error:', error);
  });
});
