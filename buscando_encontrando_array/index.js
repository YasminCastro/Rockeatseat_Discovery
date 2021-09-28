/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

let booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

//Contar o número de categorias
const totalCategorias = booksByCategory.length;
console.log(`Existem ${totalCategorias} categorias`);

//Contar o número de livros em cada categoria
for (let category of booksByCategory) {
  console.log(
    `Total de livros da categoria: ${category.category} é de ${category.books.length} livros`
  );
}

//Contar o número de autores
function contarAutores() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log(`Total de autores é: ${authors.length}`);
}

contarAutores();

//Mostrar livros do autor Auguto Cury
//Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
function booksOfAugusto(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == author) {
        books.push(book.title);
      }
    }
  }
  console.log(`Livros do autor : ${books}`);
}

booksOfAugusto("George S. Clason");
