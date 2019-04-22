/**
 * На вход принимаем блюда которые нужно приготовить.
 * Готовить нужно по книге рецептов.
 * Следовательно для приголовки omelet в консоль нужно вывести Cook omelet.
 *
 * dish - блюдо
 * dishes - блюда
 * recipe - рецепт
 * recipeBook - книга рецептов
 */


const recipeBook = {
    omelet: () => console.log('Cook omelet.'),
    cake: () => console.log('Cook сake.'),
    steak: () => console.log('Cook steak.'),
};

const cookDishes = (dishes) => {
    dishes.forEach((dish) => {
        recipeBook[dish]();
    });
};

const dishes = ['omelet', 'cake', 'steak'];

cookDishes(dishes);

/**
 * Вывод:
 * Cook omelet.
 * Cook сake.
 * Cook steak.
 */
