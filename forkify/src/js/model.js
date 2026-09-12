import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

const state = {
  recipe: {},

  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

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
    throw err;
  }
}

async function loadSearchResults(query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);

    const recipes = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });

    state.search.query = query;
    state.search.results = recipes;
    state.search.page = 1;
  } catch (err) {
    console.log(`${err} 💥💥💥💥`);
    throw err;
  }
}

const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export {
  state,
  loadRecipe,
  loadSearchResults,
  getSearchResultsPage,
};