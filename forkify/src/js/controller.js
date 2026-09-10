import recipeView from './views/RecipeViews.js';
import * as model from './model.js';

//import Fraction from 'fractions.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

async function controlRecipes() {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);

    if (!id) return;

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
}

const controlLoadRecipe = async () => {
  const id = window.location.hash.slice(1);

  if (!id) return;

  await model.loadRecipe(id);
};

const ev = ['hashchange', 'load'];

ev.forEach(e => window.addEventListener(e, controlRecipes));

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////