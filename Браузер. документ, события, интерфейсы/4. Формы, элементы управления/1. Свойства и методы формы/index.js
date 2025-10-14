/* Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>
Используя JavaScript:

1. Выведите значение и текст выбранного пункта.
2. Добавьте пункт: <option value="classic">Классика</option>.
3. Сделайте его выбранным. */

// 1
let genres = document.getElementById('genres');

alert(genres.options[genres.selectedIndex].value);
alert(genres.options[genres.selectedIndex].textContent);

// 2 и 3
let option = new Option('Классика', 'classic', true, true);
genres.append(option);