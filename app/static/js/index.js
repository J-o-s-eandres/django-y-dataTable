const listProgrammers=async()=>{
    try{
        const response = await fetch('./list_programmers');
        const data = await response.json();

        let content=``;
        data.programmers.forEach((programmer, index)=>{
            content+=`
                <tr>
                    <td>${index+1}</td>
                    <td>${programmer.name}</td>
                    <td>${programmer.country}</td>
                    <td>${programmer.birthday}</td>
                    <td>${programmer.score}</td>
                </tr>
            `;
        });
        tableBodyProgrammers.innerHTML = content;//si declaro un valor con id (en el html) puedo referenciarlo directamente con el nombre en js 
        // console.log(data)
        // console.log(data.programmers)
        // console.log(data.programmers[0].name)

    }catch (ex){
        alert(ex);

    }
}

// evento de escuha sobre la ventana (evento asíncrono)
window.addEventListener('load', async()=>{
    await listProgrammers();
})