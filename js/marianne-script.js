$(document).ready(function() {

      $(function(){
          $("#hello-message").typed({
            strings: ["<h2>Hey there, how are you?</h2>",
            "<h2>I'm fine :), thanks for asking!</h2>",
            "<h2>I'm Marianne Linhares</h2><h3>I'm an <strong> undergraduate student of Computer Science at UFCG </strong> ^1000, passionate about education ^700, music, ^1000 math and of course code!</h3> "],
            typeSpeed: 30,
            backDelay: 500,
            contentType: 'html'
          });
      });
});
