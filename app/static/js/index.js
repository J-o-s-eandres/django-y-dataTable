let dataTable;

let dataTableInitialized;

const dataTableOptions={
    columnDefs:[
        {className:'centered', targets:[0,1,2,3,4,5,6]},
        {orderable:false,targets:[5,6]},
        {searChable:false, targets:[0,5,6]}

    ],
    pageLength:4,
    destroy:true
};

const initDataTable = async()=>{
    if(dataTableInitialized){
        dataTable.destroy();
    }

    await listProgrammers();//proceso de consulta y llenado de la tabla

    dataTable = $('#datatable-programmers').DataTable(dataTableOptions);//JQuery

    dataTableInitialized = true;
};

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
                    <td>${programmer.score >=8 
                        ? "<i class='fa-solid fa-check' style='color:green;'></i>" 
                        : "<i class='fa-solid fa-xmark' style='color:red;'></i>"}</td>
                    <td>
                        <button class="btn btn-sm btn-primary"><i class='fa-solid fa-pencil'></i></button>
                        <button class="btn btn-sm btn-danger"><i class='fa-solid fa-trash-can'></i></button>
                    </td>
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
    await initDataTable();
})