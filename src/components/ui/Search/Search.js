import './search.css';
import { escapeHtml, html } from '../../../utils/helpers';
import searchIcon from '../../../assets/search.svg';

export const Search = () => {
  return html`
    <div class="search">
      <label class="search__wrap">
        <input
          class="search__input"
          type="text"
          placeholder="Search for books by title or author..."
          name="search"
        />
        <img class="search__icon" alt="" src="${searchIcon}" />
      </label>
      <button class="search__btn" aria-label="Search books" type="button">
        Search
      </button>
    </div>
  `;
};
