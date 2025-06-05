let myLibrary = [];

function Book(titulo, autor, volumenes, editorialName) {

  this.titulo = titulo;
  this.autor = autor;
  this.volumenes = volumenes;
  this.editorialName = editorialName;
}

function addToTable() {
  
  const titulo = document.getElementById("bookName").value;
  const autor = document.getElementById("authorName").value;
  const volumenes = document.getElementById("numVolumenes").value;
  const editorialName = document.getElementById("editorialName").value;

  const nuevoLibro = {
    titulo,
    autor,
    volumenes,
    editorialName
  };

  myLibrary.push(nuevoLibro);

  document.querySelector("#myTable tbody").innerHTML = myLibrary.map(libro =>
    `<tr>
      <td>${libro.titulo}</td>
      <td>${libro.autor}</td>
      <td>${libro.volumenes}</td>
      <td>${libro.editorialName}</td>
    </tr>`
  ).join('');
}

// Libros de ejemplo para añadir con .push
let libro1 = {titulo: "Oyasumi Punpun", autor: "Inio Asano", volumenes: "12", editorialName: "Norma"}
let libro2 = {bookName: 'Welcome Back Alice', authorName: 'Shuzo Oshimi', numVolumenes: '7', editorialName: 'Milky Way'}

//Dialógo para añadir nuevos libros

const dialog = document.getElementById("mangaDialog");
const showButton = document.getElementById("addManga");
const closeBtn = document.getElementById("closeDialogBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});


closeBtn.addEventListener("click", () => {
  dialog.close();
});

document.getElementById("confirmBtn").addEventListener("click", function () {
  const name = document.getElementById("bookName").value;
  const author = document.getElementById("authorName").value;
  const volume = document.getElementById("numVolumenes").value;
  const editorialName = document.getElementById("editorialName").value;

  const newBook = new Book(name, author, volume, editorialName);
  addToTable(newBook)

  //Cerrar el diálogo
  document.querySelector("dialog").close();
});

/*const libro1 = new Book('Oyasumi Punpun', 'Inio Asano', '12', 'Muchas');
const library = document.getElementById("libroContent");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const volumenes = document.getElementById("volumenes");
const paginas = document.getElementById("paginas");*/

/*function addToContainer() {
   for (let i = 0; i < myLibrary.length; i++) {
      const libro = document.createElement("td");
      titulo.textContent = myLibrary[i].name
      autor.textContent = myLibrary[i].author
      volumenes.textContent = myLibrary[i].volume
      paginas.textContent = myLibrary[i].pages
      titulo.appendChild(libro);
      autor.appendChild(libro);
      volumenes.appendChild(libro);
      paginas.appendChild(libro);
    }
  }*/

  /*function createContainer() {
    for (let i = 0; i < myLibrary.length; i++) {
       const libro = document.createElement("div");
       titulo.textContent = myLibrary[i].name
       autor.textContent = myLibrary[i].author
       volumenes.textContent = myLibrary[i].volume
       paginas.textContent = myLibrary[i].pages
       titulo.appendChild(libro);
       autor.appendChild(libro);
       volumenes.appendChild(libro);
       paginas.appendChild(libro);
     }
   } */
