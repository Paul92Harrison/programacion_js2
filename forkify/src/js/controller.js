import * as model from './model.js';

import recipeView from './views/RecipeView.js';
import searchView from './views/searchViews.js';
import resultsView from './views/ResultView.js';
import paginationView from './views/paginationView.js';

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    const query = searchView.getQuery();

    if (!query) return;

    resultsView.renderSpinner();

    await model.loadSearchResults(query);

    resultsView.render(
      model.getSearchResultsPage(),
    );

    paginationView.render(
      model.state.search,
    );
  } catch (err) {
    console.error(err);
  }
}

const controlPagination = function (goToPage) {
  resultsView.render(
    model.getSearchResultsPage(goToPage),
  );

  paginationView.render(
    model.state.search,
  );
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);

  searchView.addHandlerSearch(
    controlSearchResults,
  );

  paginationView.addHandlerClick(
    controlPagination,
  );
};

init();