let myLibrary = [];

function Book(titulo, autor, volumenes, editorialName) {
  this.id = nextBookId++;
  this.titulo = titulo;
  this.autor = autor;
  this.volumenes = volumenes;
  this.editorialName = editorialName;
  
}

//static property

Book.prototype.read = false;
let nextBookId = 1;

function addToTable() {
  const tableBody = document.querySelector("#myTable tbody");
  tableBody.innerHTML = ''; // Limpiar contenido previo

  myLibrary.forEach((libro, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${libro.titulo}</td>
      <td>${libro.autor}</td>
      <td>${libro.volumenes}</td>
      <td>${libro.editorialName}</td>
    `;

    // Columna del checkbox "Leído"
    const readCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = libro.read;
    checkbox.addEventListener("change", () => {
      libro.read = checkbox.checked;
    });
    readCell.appendChild(checkbox);
    row.appendChild(readCell);

    // Columna del botón "Eliminar"
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("btnDelete");
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1); // Eliminar del array
      addToTable();               // Volver a renderizar
    });
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);
    tableBody.appendChild(row);
  });
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

  myLibrary.push(newBook);
  addToTable();

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
