export function renderCard(
  name,
  description,
  imgSource,
  altText,
  link,
  preview,
) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img
      src="${imgSource}"
      alt="${altText}"
      loading="lazy"
    />

    <div class="details">
      <div class="nameAndButtons">
        <h3>${name}</h3>

        <div class="icons">
          <a href="${link}" target="_blank"><i class="bi  bi-github"></i></a>
          <a href="${preview}" target="_blank"><i class="bi  bi-box-arrow-right"></i></a>
        </div>
      </div>

      <p>
        ${description}
      </p>
    </div>
  `;

  return card;
}
