import './card.css';
import favIcon from '../../../assets/heart.svg?raw';
import { escapeHtml, html } from '../../../utils/helpers';

export const Card = (card, isFavorite = false) => {
  return html`
    <div
      class="card ${isFavorite ? 'card--favorite' : ''}"
      data-key="${escapeHtml(String(card.key))}"
    >
      <a class="card__link" href="#">
        <img
          class="card__img"
          src="https://covers.openlibrary.org/b/id/${escapeHtml(
            String(card.cover),
          )}-M.jpg"
          alt="${escapeHtml(String(card.title))}"
        />
        <div class="card__wrap">
          <p class="card__title">${escapeHtml(String(card.title))}</p>
          <p class="card__author">${escapeHtml(String(card.author))}</p>
          <span class="card__year">${escapeHtml(card.year)}</span>
        </div>
      </a>
      <button
        class="card__btn ${card.isFavorite ? 'card__btn--favorite' : ''}"
        aria-label="Add or delete favorite book"
        type="button"
      >
        ${favIcon}
      </button>
    </div>
  `;
};
