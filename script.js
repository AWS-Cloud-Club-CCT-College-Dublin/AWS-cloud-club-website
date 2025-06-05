// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});

window.addEventListener('DOMContentLoaded', function() {
  var loaderOpts = {
    baseUrl: 'https://d2252vz4w8mz3n.cloudfront.net/',
    shouldLoadMinDeps: true,
    container: document.getElementById('chatbot-frame'),
    iframeAttributes: {
      width: '100%',
      height: '100%',
      style: 'border:none; border-radius: 0 0 8px 8px;'
    }
  };
  var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);

  var chatbotUiConfig = {
    // Add your sessionAttributes or other config here if needed
  };

  loader.load(chatbotUiConfig).catch(function(error) {
    console.error('Chatbot loading error:', error);
  });
});
