

      // Parse the query string to get the room_id
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const roomId = urlParams.get('room_id');
// const roomId = 1;

// Make an AJAX request to fetch data
fetch(`../php/backend/fetch_room_data.php?room_id=${roomId}`)
  .then(response => response.json())
  .then(data => {
    // Update HTML elements with fetched data
    // document.getElementById('roomPrice').innerHTML = "<h5 class='card-title'>$" + data.Price + "/night</h5>";
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
          <div class="row mt-3" style="margin-bottom: 30px">
            <div class="col">
              <label for="arrivalDate">Arrival Date</label>
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
            <div class="col">
              <label for="departureDate">Departure Date</label>
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
          </div>
          <!-- Booking button -->
          <div class="row justify-content-end red-row">
            <button
              type="button"
              class="btn btn-primary booking-button flex-grow-1"
              style="border-radius: 25px"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <!-- End of card with image and details -->
    </div>

    <!-- <h2 class="text-center">Room Features</h2> -->
    <div class="row justify-content-center" style="margin-top: 10px">
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



// Function to initialize datepicker
function initializeDatepicker() {
  $("#arrivalDate").datepicker({
    format: "mm/dd/yyyy",
    autoclose: true,
  });
  $("#departureDate").datepicker({
    format: "mm/dd/yyyy",
    autoclose: true,
  });
}
