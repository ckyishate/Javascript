let form = document.getElementById("form");
let taskcontainer = document.getElementById("items");



// listening and picking information from the input field
form.addEventListener("submit",(event)=>{

    event.preventDefault();
    let result =form.elements[0].value.trim();
    if(result.length===0){
        alert("Please insert something");
    }else{
        let date = new Date();
        id = `${date.getMilliseconds()}-${date.getSeconds()}-${date.getHours()}`
        
        

        //creating elements in the div that holds the tasks
        let divcont = document.createElement('div');
        let taskelement = document.createElement('p');
        let taskbutton = document.createElement('button');
        let deleteicon = document.createElement('i');
        
        // adding the attributes to the created elements
        divcont.setAttribute('class','item');
        taskbutton.setAttribute('class','btn-trash');
        deleteicon.setAttribute('class','fa fa-trash');
        taskelement.setAttribute('id', id);
        

        // appending elements to each other 
        taskcontainer.appendChild(divcont);
        divcont.appendChild(taskelement);
        divcont.appendChild(taskbutton);
        taskbutton.appendChild(deleteicon);


        //adding the onclick button in the task p element.
       

        // making the latest task the first in the list
        taskcontainer.insertBefore(divcont, taskcontainer.getElementsByTagName('div')[0]);

        
        
        taskelement.innerHTML=  result;
    }
    
    console.log(taskcontainer) 

});



// changing the color of the clicked item to mark it as done task
document.addEventListener('click',(e) =>{
    if(e.target.class === 'fa' ){
        e.target.parentNode.remove();
    }
    else if(e.target.id !== '' && e.target.id !==form ){
        let id = e.target.id;
        document.getElementById(id).style.background = "#8A3624";
    }else{
        console.log("An element without an id was clicked");
    }
});






// if(tasks.length !== 0){
//     for(let i=0; i<tasks.length; i++){


//         let divcont = document.createElement('div');
//         let taskelement = document.createElement('p');
//         let taskbutton = document.createElement('button');
//         let deleteicon = document.createElement('i');
        
//         divcont.setAttribute('class','item');
//         taskbutton.setAttribute('class','btn-trash');
//         deleteicon.setAttribute('class','fa fa-trash');
//         taskelement.setAttribute('id', tasks[i].id);
        
//         taskcontainer.appendChild(divcont);
//         divcont.appendChild(taskelement);
//         divcont.appendChild(taskbutton);
//         taskbutton.appendChild(deleteicon);

        
        
//         taskelement.innerHTML=`${i}  ${tasks[i].task}`;

//     }
// }

    







        

    



// if(tasks.length!==0){
//     for(let i=0; i<tasks.length; i++){

//         taskcontainer.innerHTML = `
//             <div class="item">
//                 <p id="${tasks[i].id}">${tasks[i].task}</p>
//                 <button class="btn-trash"><i class="fa fa-trash"></i> </button>
//             </div>`
        
//     }
// }











