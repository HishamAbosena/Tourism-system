

      // Parse the query string to get the room_id
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const roomId = urlParams.get('room_id');
// const roomId = 1;
let fetchedData;
let total_price;

// Make an AJAX request to fetch data
fetch(`../php/backend/fetch_room_data.php?room_id=${roomId}`)
  .then(response => response.json())
  .then(data => {
    // Update HTML elements with fetched data
// priceSpan.textContent = data.price; // Assuming the response contains a 'price' field
  fetchedData = data;

document.getElementById('main').innerHTML = ` <!-- Main Content -->
    <div class="container mt-5 custom-container">
      <!-- Card with image and details -->
      <div class="row">
        <div class="col-lg-8">
          <!-- Hotel image -->
          <!-- Hotel images carousel -->
          <div id="imageCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="${ data.Image1}"
                  class="d-block w-100"
                  alt="Room Image 1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${ data.Image2}"
                  class="d-block w-100"
                  alt="Room Image 2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${ data.Image3}"
                  class="d-block w-100"
                  alt="Room Image 3"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${ data.Image4}"
                  class="d-block w-100"
                  alt="Room Image 4"
                />
              </div>
            </div>
            <!-- Image navigation buttons -->
            <a
              class="carousel-control-prev"
              href="#imageCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#imageCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <!-- End of hotel images carousel -->

          <!-- Thumbnail images row -->
          <div class="row mt-3">
            <div class="col">
              <img
                src="${data.Image1}"
                class="thumbnail"
                alt="Thumbnail 1"
              />
              <img
                src="${data.Image2}"
                class="thumbnail"
                alt="Thumbnail 2"
              />
              <img
                src="${data.Image3}"
                class="thumbnail"
                alt="Thumbnail 3"
              />
              <img
                src="${data.Image4}"
                class="thumbnail"
                alt="Thumbnail 4"
              />
            </div>
          </div>
          <!-- End of thumbnail images row -->
        </div>
        <!-- Room price -->
        <div class="col-lg-4 room-info">
          <!-- Room price -->
          <div class="price-box">
            <h5 class="card-title">$${data.Price}/night</h5>
          </div>
          <!-- Date pickers -->
            <div class="col"style="margin-top: 20px;" >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="arrivalDate"
                  placeholder="Select arrival date"
                  style="font-size: auto"
                />
                <div class="input-group-append">
                  <span class="input-group-text"
                    ><i class="far fa-calendar-alt"></i
                  ></span>
                </div>
              </div>
            </div>
            <div class="col"style="margin-top: 20px;" >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="departureDate"
                  placeholder="Select departure date"
                  style="font-size: auto"
                />
                <div class="input-group-append">
                  <span class="input-group-text"
                    ><i class="far fa-calendar-alt"></i
                  ></span>
                </div>
              </div>
            </div>
          <!-- Booking button -->
          <div class="row justify-content-end red-row">
            <button
              type="button"
              class="btn btn-primary booking-button flex-grow-1"
              style="border-radius: 25px; margin-top: 40px;" id="openPopupButton"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <!-- End of card with image and details -->
    </div>

    <!-- <h2 class="text-center">Room Features</h2> -->
    <div class="row justify-content-center" style="margin-top: 60px">
      <div class="col-md-3 mx-2 mb-2">
        <!-- Feature Box 1 -->
        <div class="feature-box text-center p-3">
          <h4><i class="fas fa-bed"></i> Number of Beds: ${data.NumBedrooms}</h4>
        </div>
      </div>
${data.HasKitchen == 1 ? `
      <div class="col-md-3 mx-2 mb-2">
        <!-- Feature Box 3 -->
        <div class="feature-box text-center p-3">
          <h4><i class="fas fa-utensils"></i> Kitchen</h4>
        </div>
      </div>` : ''}
      <div class="col-md-3 mx-2 mb-2">
        <!-- Feature Box 3 -->
        <div class="feature-box text-center p-3">
          <h4><i class="fas fa-bath"></i> Number of Baths: ${data.NumBathrooms}</h4>
        </div>
      </div>
      <!-- Add more feature boxes as needed -->
    </div>

    <!-- Hotel description -->
    <div class="text-center">
      <div class="hotel-description">
        <h2>Description</h2>
        <p>
        ${data.Description}
        </p>
      </div>
    </div>`;
    initializeDatepicker();

    // Update other HTML elements with additional fetched data as needed
  })
  .catch(error => console.error("Error fetching data:", error));


/// Function to handle click on thumbnail images
$(document).on("click", ".thumbnail", function () {
  $(".thumbnail").removeClass("active"); // Remove active class from all thumbnails
  $(this).addClass("active"); // Add active class to the clicked thumbnail
  var imgSrc = $(this).attr("src"); // Get the source of the clicked thumbnail image
  $(".carousel-item.active img").attr("src", imgSrc); // Set the source of the main carousel image
});
// Function to handle click on button
$(document).on("click", "#openPopupButton", function () {
    // Check if both arrival and departure dates are filled
    if ($("#arrivalDate").val() && $("#departureDate").val()) {
        calculateTotalPrice()
          // AJAX request to check for clashes
         $.ajax({
        url: '../php/backend/check_clashes.php',
        type: 'POST',
        data: {
            arrival_date: $("#arrivalDate").val(),
            departure_date: $("#departureDate").val(),
            room_id: roomId
        },
        success: function(response) {
            // Handle the response from the server
            if (response === 'clash') {
                // Show SweetAlert for clash
                Swal.fire({
                    icon: 'error',
                    title: 'Booking Clash',
                    text: 'Booking clashes with existing booking!'
                });
            } else {
                // Proceed with the booking
                openPopup();
            }
        },
        error: function(xhr, status, error) {
            console.error('Error checking for clashes:', error);
        }
    });
        
    } else {
        // If dates are not filled, alert the user or handle it in another way
        alert("Please select arrival and departure dates first.");
        // Optionally, you can focus on the date fields or perform other actions to prompt the user to fill them.
    }
});

function calculateTotalPrice() {
    // Get the values of arrival and departure dates
    var arrivalDate = $("#arrivalDate").val();
    var departureDate = $("#departureDate").val();

    // Convert the dates to JavaScript Date objects
    var arrival = new Date(arrivalDate);
    var departure = new Date(departureDate);

    // Calculate the number of nights
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var numberOfNights = Math.round(Math.abs((arrival - departure) / oneDay));

    // Get the price per night
    var pricePerNight = parseFloat(fetchedData.Price);

    // Calculate the total price
    var totalPrice = numberOfNights * pricePerNight;

    // Display the total price
     //$("#priceSpan").text(totalPrice);
    document.getElementById('priceSpan').innerHTML = "$" +totalPrice ;
    total_price = totalPrice;
}

// Call the function when the departure date changes
$("#departureDate").on("change", calculateTotalPrice);

// Call the function when the arrival date changes
$("#arrivalDate").on("change", calculateTotalPrice);

    // Get references to the button and the popup
    var closePopupButton = document.getElementById('closePopupButton');
    var popup = document.getElementById('popup');

    // Function to open the popup
    function openPopup() {
        popup.style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = 'none';
    }


    // Event listener to close the popup when the close button is clicked
    closePopupButton.addEventListener('click', closePopup);

// Function to initialize datepicker
function initializeDatepicker() {
  // Get today's date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // January is 0!
  var yyyy = today.getFullYear();
  if(dd < 10){
    dd = '0' + dd;
  } 
  if(mm < 10){
    mm = '0' + mm;
  } 
  var todayFormatted = mm + '/' + dd + '/' + yyyy;

  // Initialize datepickers
  $("#arrivalDate").datepicker({
    format: "mm/dd/yyyy",
    autoclose: true,
    startDate: todayFormatted, // Set minimum date to today
  });

  $("#departureDate").datepicker({
    format: "mm/dd/yyyy",
    autoclose: true,
    startDate: todayFormatted, // Set minimum date to today
  });

  // Update departure date picker to set the start date as arrival date + 1 day
  $("#arrivalDate").on("change", function() {
    var arrivalDate = $("#arrivalDate").datepicker("getDate");
    var nextDay = new Date(arrivalDate.getTime() + (24 * 60 * 60 * 1000)); // Add one day in milliseconds
    $("#departureDate").datepicker("setStartDate", nextDay);
    
    // Clear departure date when arrival date changes
    $("#departureDate").datepicker("setDate", null);
  });
}


$(document).on("click", "#confirmBooking", function () {
    // Get form data
    var roomID = roomId; // Assuming roomId is defined somewhere
    var arrivalDate = $("#arrivalDate").val();
    var departureDate = $("#departureDate").val();
    var phone = $("#phone").val();
    var cardNumber = $("#cardNumber").val();
    var cardHolder = $("#cardholder").val();
    var expiryDate = $("#expirydate").val();
    var cvv = $("#cvv").val();

    // AJAX request to send data to server
   $.ajax({
    url: '../php/backend/process_booking_credit.php',
    type: 'POST',
    dataType: 'json',
    data: {
        cardNumber: cardNumber,
        cardHolder: cardHolder,
        expiryDate: expiryDate,
        phone: phone,
       cvv: cvv
    },
    success: function(response) {
        if (response.success) {
            
        } else {
           
        }
    },
    error: function(xhr, status, error) {
        // If there was an error with the AJAX request itself
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while processing your request.'
        });
        console.error(xhr.responseText);
    }
});
    // AJAX request to send data to server
   $.ajax({
    url: '../php/backend/process_booking.php',
    type: 'POST',
    dataType: 'json',
    data: {
        roomID: roomID,
        arrivalDate: arrivalDate,
        departureDate: departureDate,
        phone: phone,
        cardNumber: cardNumber,
        TotalPrice: total_price
    },
    success: function(response) {
        if (response.success) {
          closePopup()
            // If booking was successful, display success message
            Swal.fire({
                icon: 'success',
                title: 'Booking Confirmed',
                // text: response.message
            });
            
        } else {
           closePopup()
            // If booking failed, display error message
            Swal.fire({
                icon: 'error',
                title: 'Booking Failed',
                // text: response.message
            });
           
        }
    },
    error: function(xhr, status, error) {
        // If there was an error with the AJAX request itself
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while processing your request.'
        });
        console.error(xhr.responseText);
    }
});

});
