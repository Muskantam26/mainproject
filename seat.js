
const rows = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
        const seatsPerRow = 10;
        const bookedSeats = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "G3", "G4", "G5", "G6", "G7"]; // Example booked seats
        
        function createSeats(sectionId, startSeatNumber) {
            const section = document.getElementById(sectionId);
            rows.forEach(row => {
                for (let i = startSeatNumber; i < startSeatNumber + seatsPerRow; i++) {
                    const seat = document.createElement("div");
                    seat.classList.add("seat");
                    seat.innerText = i;
                    seat.dataset.seatId = row + i;

                    // Mark booked seats
                    if (bookedSeats.includes(row + i)) {
                        seat.classList.add("booked");
                    }

                    // Seat selection event
                    seat.addEventListener("click", function () {
                        if (!this.classList.contains("booked")) {
                            this.classList.toggle("selected");
                        }
                    });

                    section.appendChild(seat);
                }
            });
        }

        createSeats("left-section", 1);  // Left section starts with seat 1
        createSeats("right-section", 12); // Right section starts with seat 12

        function confirmSeats() {
            let selectedSeats = [];
            document.querySelectorAll(".seat.selected").forEach(seat => {
                selectedSeats.push(seat.dataset.seatId);
            });
           location.href="show.html"
        }