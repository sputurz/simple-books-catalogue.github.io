import './cardlist.css';
import { html } from '../../../utils/helpers';
import { Card } from '../Card/Card';

export const CardList = (cards, isFavorite = false) => {
  if (!cards || cards.length === 0) {
    return html`<div class="card-list__empty">No Books</div>`;
  }

  return html`
    <ul class="card-list ${isFavorite ? 'card-list--favorite' : ''}">
      ${cards
        .map(
          (card) => html`
            <li class="card-list__item" data-key="${card.key}">
              ${Card(card, isFavorite ? true : false)}
            </li>
          `,
        )
        .join('')}
    </ul>
  `;
};
