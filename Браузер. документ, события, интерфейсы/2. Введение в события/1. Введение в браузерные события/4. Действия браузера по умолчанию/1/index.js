/* Почему в коде ниже return false не работает?

<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

Браузер переходит по указанной ссылке, но нам этого не нужно.

Как поправить? */

// Есть функция handler, но она нигде не используется. Можно добавить event.preventDefault() в функцию 

function handler(event) {
    alert("...");
    event.preventDefault();
}