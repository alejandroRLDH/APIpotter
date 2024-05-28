function getBooks() {
    document.getElementById("libroscontainer").innerHTML = "<tr>\n" +
        "        <td id=\"index\">index</td>\n" +
        "        <td id=\"num\">número</td>\n" +
        "        <td id=\"nom\">nombre</td>\n" +
        "        <td id=\"nomen\">nombre en inglés</td>\n" +
        "        <td id=\"date\">fecha</td>\n" +
        "        <td id=\"resumen\">resumen</td>\n" +
        "        <td id=\"pag\">páginas</td>\n" +
        "        <td id=\"cover\">imatge</td>\n" +
        "        <td id=\"index2\">index</td>\n" +
        "    </tr>";
    const url='https://potterapi-fedeperin.vercel.app/es/books'
    fetch(url)
        .then(response=> response.json() )
        .then(data => {
            const table = document.getElementById("libroscontainer");
            data.forEach((e,i) => {    //< ---  recorremos data
                let tr = document.createElement("tr"); //< ---  creamos una fila
                let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
                td.classList.add("index");
                td.innerHTML = i;
                tr.appendChild(td); //< --- Agregamos la columna en la fila
                for (p in e) {  //< ---  recorremos cada propiedad de cada elemento
                    let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                    td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                    td.innerHTML += e[p];
                    tr.appendChild(td); //< --- Agregamos la columna en la fila
                }
                table.appendChild(tr); //< --- Agregamos la fila a la tabla
            });
        })
        .catch(err=>console.log(err))
}