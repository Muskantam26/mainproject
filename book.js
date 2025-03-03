document.addEventListener("DOMContentLoaded", function () {
    const movieSelect = document.getElementById("movie");
    const seatMap = document.getElementById("seatMap");
    const totalPrice = document.getElementById("totalPrice");
    let selectedSeats = [];
    
    // Movie Data (Simulated JSON)
    const movies = [
        { id: 1, name: "Inception", price: 10 },
        { id: 2, name: "Avatar", price: 12 },
        { id: 3, name: "Interstellar", price: 15 }
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
