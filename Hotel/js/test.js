function checkImagePositions() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        var cardWidth = card.offsetWidth;
        var image = card.querySelector('.card-img-left');
        var imageWidth = image.offsetWidth;
        if (imageWidth >= cardWidth) {
            image.style.borderTopRightRadius = '10px';
            image.style.borderBottomLeftRadius = '0';
        } else {
            image.style.borderTopRightRadius = '0';
            image.style.borderBottomLeftRadius = '10px';
        }
    });
}

// Call the function when the window is resized
window.addEventListener('resize', checkImagePositions);

// Call the function on page load
window.addEventListener('load', checkImagePositions);

// JavaScript to fetch hotel data from PHP and dynamically create hotel cards
// JavaScript to fetch hotel data from PHP and dynamically create hotel cards

document.addEventListener("DOMContentLoaded", function() {
    fetchHotels();

    
});

function fetchHotels() {
    fetch('../php/backend/fetch_hotels.php')
        .then(response => response.json())
        .then(data => {
            displayHotels(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayHotels(data) {
    const hotelList = document.getElementById('hotelList');
    hotelList.innerHTML = ''; // Clear existing content
    
    data.forEach(hotel => {
        createHotelCard(hotel);
    });
}

function createHotelCard(hotel) {
    const hotelList = document.getElementById('hotelList');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-4');

    cardDiv.innerHTML = `
        <div class="rating">${hotel.stars}</div>
        <div class="row no-gutters">
            <div class="col-md-4">
                <div class="card-img-wrap">
                    <img src="${hotel.photo}" class="card-img-left" alt="Hotel Image">
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${hotel.name} <span class="gold-stars">${'★'.repeat(hotel.stars)}</span></h5>
                    <h6 class="card-subtitle">${hotel.location}</h6>
                    <p class="card-features"><span class="bold-type">${hotel.type}</span></p>
                    <p class="card-features">Number of Beds: ${hotel.beds} | Bathrooms: ${hotel.bathrooms} | Kitchen: ${hotel.kitchen ? 'Yes' : 'No'}</p>
                    <p class="card-features" style="color: ${hotel.free_cancellation ==1 ? '#28a745' : '#dc3545'};"><span class="green-check">${hotel.free_cancellation ==1 ? '✅' : '❌'}</span> Free Cancellation</p>
                    <p class="card-features" style="color: ${hotel.no_prepayment ==1 ? '#28a745' : '#dc3545'};"><span class="green-check">${hotel.no_prepayment ==1 ? '✅' : '❌'}</span> No Prepayment Required</p>
                </div>
                <div class="d-flex justify-content-end align-items-center p-3">
                    <div>
                            <a href="../html/room.html?hotel_id=${hotel.id}&room_id=${hotel.room_id}" class="btn btn-primary">Book Now</a>


                    </div>
                </div>
            </div>
        </div>
    `;

    hotelList.appendChild(cardDiv);
}

// Search and Filter functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    fetch(`../php/backend/search_hotels.php?search=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            displayHotels(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('filterStars').addEventListener('change', function() {
    const selectedStars = this.value;
    fetch(`../php/backend/filter_hotels.php?stars=${selectedStars}`)
        .then(response => response.json())
        .then(data => {
            displayHotels(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
