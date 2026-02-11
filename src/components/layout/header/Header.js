import './header.css';
import { html } from '../../../utils/helpers';
import logo from '../../../assets/book.svg';

export const Header = () => {
  return html`
    <header class="header">
      <div class="container">
        <div class="header__wrap">
          <a class="header__link" href="/" aria-label="Link to The Library">
            <img class="header__logo" alt="" src="${logo}" />
            <div class="header__inner">
              <span class="header__title">The Library</span>
              <span class="header__slogan"
                >Discover your next favorite book</span
              >
            </div></a
          >
        </div>
      </div>
    </header>
  `;
};
