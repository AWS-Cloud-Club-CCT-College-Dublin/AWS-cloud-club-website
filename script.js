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

      // added background-color purple, margin:auto to center iframe inside container
    }
  };
  var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);

  var chatbotUiConfig = {
    // your config here
  };

  loader.load(chatbotUiConfig).catch(function(error) {
    console.error('Chatbot loading error:', error);
  });
});
