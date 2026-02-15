const baseUrl = 'https://openlibrary.org';

function responseCheck(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

export async function getBooksList(query) {
  try {
    const response = await fetch(
      baseUrl + '/search.json?q=' + query.replace(/ /g, '+'),
    );
    responseCheck(response);

    const data = await response.json();

    if (!data.docs) {
      return [];
    }

    return data.docs;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBook(key) {
  try {
    const response = await fetch(`${baseUrl}${key}.json`);
    responseCheck(response);

    const bookData = await response.json();

    if (!bookData) {
      return null;
    }

    return bookData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAuthor(authorKey) {
  try {
    const response = await fetch(`${baseUrl}${authorKey}.json`);
    responseCheck(response);

    const authorData = await response.json();

    if (!authorData) return '';

    return authorData.name;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthors(authorsList) {
  try {
    let authors = '';

    for (let i = 0; i < authorsList.length; i++) {
      const author = await getAuthor(authorsList[i].author.key);
      if (author) authors += author + ', ';
    }

    return authors.slice(0, -2);
  } catch (error) {
    console.log(error);
  }
}
