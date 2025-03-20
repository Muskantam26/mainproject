



// document.addEventListener("DOMContentLoaded", function () {
//     let tickets = parseInt(localStorage.getItem("tickets")) || 0;
//     let selectedSeats = [];
    
//     document.getElementById("info").innerHTML = `
//         Name: ${localStorage.getItem("name")} <br>
//         Date: ${localStorage.getItem("date")} <br>
//         Tickets: ${tickets}
//     `;

//     let seats = document.querySelectorAll(".seat");
//     seats.forEach(seat => {
//         seat.addEventListener("click", function () {
//             if (!this.classList.contains("booked") && selectedSeats.length < tickets) {
//                 this.classList.toggle("selected");

//                 if (this.classList.contains("selected")) {
//                     selectedSeats.push(this.innerText);
//                 } else {
//                     selectedSeats = selectedSeats.filter(s => s !== this.innerText);
//                 }

//                 document.getElementById("selected-seats").innerText = selectedSeats.join(", ");
//             }
//         });
//     });

//     document.getElementById("confirm").addEventListener("click", function () {
//         if (selectedSeats.length < tickets) {
//             alert("Please select all your seats.");
//             return;
//         }
//        location.href="show.html"
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    let tickets = parseInt(localStorage.getItem("tickets")) || 0;
    let selectedSeats = [];

    document.getElementById("info").innerHTML = `
        Name: ${localStorage.getItem("name")} <br>
        Date: ${localStorage.getItem("date")} <br>
        Tickets: ${tickets}
    `;

    let seats = document.querySelectorAll(".seat");
    seats.forEach(seat => {
        seat.addEventListener("click", function () {
            if (!this.classList.contains("booked")) {
                if (this.classList.contains("selected")) {
                    this.classList.remove("selected");
                    selectedSeats = selectedSeats.filter(s => s !== this.innerText);
                } else if (selectedSeats.length < tickets) {
                    this.classList.add("selected");
                    selectedSeats.push(this.innerText);
                }
                document.getElementById("selected-seats").innerText = selectedSeats.join(", ");
            }
        });
    });

    document.getElementById("confirm").addEventListener("click", function () {
        if (selectedSeats.length < tickets) {
            alert("Please select all your seats.");
            return;
        }
        localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
        location.href = "show.html";
    });
});
