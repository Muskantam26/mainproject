let fetchData= async()=>{
    let url='http://localhost:3000/movie'

    let res= await fetch(url,{method:"GET"})

    let data= await res.json()

     console.log(data)
//      Datashow(data)
    paginationdata(data)

}

let searchh=async()=>{
      let searchinp= document.querySelector("#searchinp").value.toLowerCase()
      let url='http://localhost:3000/movie'
      let res=await fetch(url,{method:"GET"})
      let data= await res.json()

      let filterData=data.filter((e)=>{

     return e.name.toLowerCase().includes(searchinp) 

      })
    paginationdata(filterData)
}

let paginationdata=(data)=>{
        $('#pagin').pagination({
                dataSource: data,
                pageSize: 5,
                showGoInput: true,
                showGoButton: true,
                callback: function(data, pagination) {
                   Datashow(data)
                }
            })

}
let Datashow=(data)=>{


    let a=document.querySelector("#dat")
    a.innerHTML=""
   data.map((e)=>{
   a.innerHTML+=(`
           <tr>
            <td>${e.name}</td>
            
             <td> ${e.date}</td>
             <td>${e.number}</td>
              <td>${e.person}</td>
               <td>${e.price}</td>
                <td>${e.price*e.person}</td>
                 <td onclick="confirmdelete('${e.id}')">Cancle</td>
                 <td onclick="formfill('${e.id}')">Update</td>
             
             </tr>
           `)  
             
   })

}
let confirmdelete=(id)=>{
        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                        del(id)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
}
let del=(id)=>{
        let url=`http://localhost:3000/movie/${id}`

        fetch(url,{method:"DELETE"})
}

let ins=()=>{
        let inpname=document.querySelector("#name").value
        // let inpage=document.querySelector("#age").value
        let inpdate=document.querySelector("#date").value
        let inpnumber=document.querySelector("#number").value
        // let inpselectmovie=document.querySelector("#selectmovie").value
        let inpperson=document.querySelector("#person").value

        let url='http://localhost:3000/movie'


        fetch(url,{

                method:"POST",
                headers:{
                        "Content-type":"application/json"
                },
                body:JSON.stringify(
                        {
                        "name":inpname,
                       
                        "date":inpdate,
                        "number":inpnumber,
                        
                        "person":inpperson,
                        "price":200
                        }
                )
        })
        location.href="show.html";
return false
}

let formfill=async(id)=>{
        let url=`http://localhost:3000/movie/${id}`

        let res=await fetch(url,{method:"GET"})

        let data=await res.json()
        console.log(data);

        let formData=`
        <div id="d">
        <form id="uf">
        <br><br><br><br>
       <p id="up">Enter Your Name : </p>    <input type="text" id="upname" placeholder="Enter Your Name" value=${data.name}><br><br>
        <p id="up"> Enter Your Number :</p>  <input type="number"  id="upnumber"  placeholder="Enter Your Number" value=${data.number}><br><br>
       <p id="up">Select date :  </p>  <input type="date" id="update" value=${data.date}><br><br>
       <p id="up">Enter Number of tickets :</p>  <input type="number" id="upperson" placeholder="Number of tickets" value=${data.person}><br><br>

             


          <input type="submit" value="update" onclick="return finalupdate('${data.id}')"  id="u">

          </form>
          </div>
          <br><br><br><br><br><br><br><br>
        `

       
        
        document.querySelector("#formdata").innerHTML=formData
}
let finalupdate=(id)=>{
        
        let inpname=document.querySelector("#upname").value
        
        let inpdate=document.querySelector("#update").value
        let inpnumber=document.querySelector("#upnumber").value
       
        let inpperson=document.querySelector("#upperson").value

        let url=`http://localhost:3000/movie/${id}`
       

        fetch(url,{

                method:"PUT",
                headers:{
                        "Content-type":"application/json"
                },
                body:JSON.stringify(
                        {
                        "name":inpname,
                    
                        "date":inpdate,
                        "number":inpnumber,
                        
                        "person":inpperson,
                        "price":200
                        }
                )
        })
        
       
        
       
        
return false
}