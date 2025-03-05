document.querySelectorAll('.fa-solid').forEach(heart => {
    heart.addEventListener('click', function () {
        if (this.style.color === 'blue') {
            this.style.color = 'purple'; // Change back to purple if already blue
        } else {
            this.style.color = 'blue'; // Change to blue when clicked
        }
    });
});



let vi=()=>{
    Swal.fire({
        imageUrl: "https://placeholder.pics/svg/300x1500",
        imageHeight: 1500,
        imageAlt: "A tall image"
      });
}