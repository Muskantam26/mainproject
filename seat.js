document.addEventListener("DOMContentLoaded", function () {
    const movieSelect = document.getElementById("movie");
    const seatMap = document.getElementById("seatMap");
    const totalPrice = document.getElementById("totalPrice");
    let selectedSeats = [];
    
    // Movie Data (Simulated JSON)
    const movies = [
        { id: 1, name: "sanam teri kasam", price: 200 },
        { id: 2, name: "Mufasa", price: 200 },
        { id: 3, name: "shiddat", price: 200 }
        { id: 4, name: "stree", price: 200 }
        { id: 5, name: "chhava", price: 200 }
        { id: 6, name: "purple heart", price: 200 }
        { id: 7, name: "kuch sapne apne", price: 200 }
        { id: 8, name: "dragon", price: 200 }
        { id: 9, name: "officer", price: 200 }
        { id: 10, name: "mere hashband ki biwi", price: 200 }
        { id: 11, name: "Babygirl", price: 200 }
        { id: 12, name: "Dark Nun's", price: 200 }
        { id:13, name: "Sonic 3", price: 200 }
        { id: 14, name: "Laila majnu", price: 200 }
        { id: 15, name: "Wicked", price: 200 }
        { id: 16, name: "wish", price: 200 }
       
    ];
    
    // Populate movie dropdown
    movies.forEach(movie => {
        let option = document.createElement("option");
        option.value = movie.price;
        option.textContent = movie.name + " - $" + movie.price;
        movieSelect.appendChild(option);
    });
    
    // Generate seat layout
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 8; j++) {
            let seat = document.createElement("div");
            seat.classList.add("seat");
            seat.dataset.seat = `${i}-${j}`;
            seat.addEventListener("click", () => toggleSeat(seat));
            row.appendChild(seat);
        }
        seatMap.appendChild(row);
    }
    
    // Toggle seat selection
    function toggleSeat(seat) {
        if (seat.classList.contains("selected")) {
            seat.classList.remove("selected");
            selectedSeats = selectedSeats.filter(s => s !== seat.dataset.seat);
        } else {
            seat.classList.add("selected");
            selectedSeats.push(seat.dataset.seat);
        }
        updateTotal();
    }
    
    // Update total price
    function updateTotal() {
        let price = parseInt(movieSelect.value);
        totalPrice.textContent = `Total Price: $${selectedSeats.length * price}`;
    }
    
    // Book tickets
    window.bookTickets = function () {
        if (selectedSeats.length > 0) {
            alert("Tickets booked for: " + selectedSeats.join(", "));
        } else {
            alert("Please select at least one seat.");
        }
    };
});
