let color = "";

function getCases() {
    document.getElementById("casescontainer").innerHTML = "<tr>\n" +
        "        <td id=\"index\">index</td>\n" +
        "        <td id=\"nom\">nombre</td>\n" +
        "        <td id=\"emoji\">emoji</td>\n" +
        "        <td id=\"fundador\">fundador</td>\n" +
        "        <td id=\"animal\">animal</td>\n" +
        "    </tr>";
    const url='https://potterapi-fedeperin.vercel.app/es/houses'
    fetch(url)
        .then(response=> response.json() )
        .then(data => {
            const table = document.getElementById("casescontainer");
            data.forEach((e,i) => {    //< ---  recorremos data
                let tr = document.createElement("tr"); //< ---  creamos una fila
                let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
                td.classList.add("index");
                td.innerHTML = i;
                tr.appendChild(td); //< --- Agregamos la columna en la fila
                for (p in e) {  //< ---  recorremos cada propiedad de cada elemento
                    if (p.toString()!=="index" && p.toString()!=="colors"){
                        let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                        td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                        td.innerHTML += e[p];
                        tr.appendChild(td); //< --- Agregamos la columna en la fila
                    }
                }
                table.appendChild(tr); //< --- Agregamos la fila a la tabla
            });
        })
        .catch(err=>console.log(err))
}