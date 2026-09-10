import { API_URL } from './config.js';
const recipe = {};

const state = { recipe };

async function loadRecipe(id) {
  try {
    const resp = await fetch(`${API_URL}${id}`);
    const data = await resp.json();

    const recipe = data.data.recipe;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    console.error(`${err}`);
  }
}

module.exports = { state, loadRecipe };