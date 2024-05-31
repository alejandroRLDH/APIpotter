function getPersonatges() {
    document.getElementById("libroscontainer").innerHTML = " <tr>\n" +
        "            <td id=\"index2\">index</td>\n" +
        "            <td id=\"nomcom\">nom</td>\n" +
        "            <td id=\"casa\">casa</td>\n" +
        "            <td id=\"img\">fills</td>\n" +
        "            <td id=\"img\">imatge</td>\n" +
        "            <td id=\"data\">data de naixement</td>\n" +
        "        </tr>";
    const url='https://potterapi-fedeperin.vercel.app/es/characters'
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
                    if (p.toString()!=="index" && p.toString()!=="nickname" && p.toString()!=="interpretedBy"){
                        let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                        td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                        if(p.toString()=="image"){
                            td.innerHTML = "<img src=" + e[p] + ">";
                        }else{
                            td.innerHTML += e[p];
                        }
                        tr.appendChild(td); //< --- Agregamos la columna en la fila
                    }
                }
                table.appendChild(tr); //< --- Agregamos la fila a la tabla
            });
        })
        .catch(err=>console.log(err))
}