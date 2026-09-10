import icons from '../../img/icons.svg';
import { recipeContainer } from './controller.js';

class RecipeView {
  #parentElement = recipeContainer;
  #data;

  #generateMarkup() {
    const markup = `
      <figure class="recipe__fig">
        <img
          src="${this.#data.image}"
          alt="Tomato"
          class="recipe__img"
        />

        <h1 class="recipe__title">
          <span>${this.#data.title}</span>
        </h1>
      </figure>

      ${
        this.#data.ingredients
          .map(ing => {
            return `
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>

                <div class="recipe__quantity">${ing.quantity}</div>

                <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit}</span>
                  ${ing.description}
                </div>
              </li>
            `;
          })
          .join('')
      }
    `;

    return markup;
  }

  #clean() {
    this.#parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;

    this.#clean();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  render(data) {
    this.#data = data;

    const markup = this.#generateMarkup();

    this.#clean();

    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}