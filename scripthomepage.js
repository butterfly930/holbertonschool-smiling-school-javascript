//LOADER 1 tek carousel quotes

$(document).ready(function () {
    // Show the loader initially
    $('#quotes-carousel1').html('<div class="loader1"></div>');

    // Fetch the quotes after a 3-second delay
    setTimeout(function () {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/quotes',
            method: 'GET',
            success: function (data) {
                let carouselInner = '';
                data.forEach((quote, index) => {
                    carouselInner += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img
                    src="${quote.pic_url}"
                    class="d-block align-self-center"
                    alt="Profile picture of ${quote.name}"
                  />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                  <div class="quote-text">
                    <p class="text-white">
                      « ${quote.text}
                    </p>
                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                    <span class="text-white">${quote.title}</span>
                  </div>
                </div>
              </div>
            </div>`;
                });

                // Update the carousel with the fetched data
                $('#quotes-carousel1').html(`
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              ${carouselInner}
            </div>
            <a
              class="carousel-control-prev arrow-left"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <img
                src="images/arrow_white_left.png"
                alt="Quote Previous"
                aria-hidden="true"
              />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next arrow-right"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <img
                src="images/arrow_white_right.png"
                alt="Quote Next"
                aria-hidden="true"
              />
              <span class="sr-only">Next</span>
            </a>
          </div>
        `);
            },
            error: function (error) {
                console.error('Error fetching quotes:', error);
            },
        });
    }, 2000); // Delay of 3000ms (3 seconds)
});






//LOADER 2 tek carousel quotes
$(document).ready(function () {
    // Show the loader initially
    $('#slide-carousel').html('<div class="loader2"></div>');

    // Fetch the videos after a 2-second delay
    setTimeout(function () {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            method: 'GET',
            success: function (data) {
                let carouselItems = '';
                data.forEach((video, index) => {
                    carouselItems += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="video-card">
                    <img
                      src="${video.thumb_url}"
                      class="img-fluid"
                      alt="Thumbnail of ${video.title}"
                    />
                    <div class="video-info">
                      <h4>${video.title}</h4>
                      <p>${video['sub-title']}</p>
                      <p class="text-muted">${video.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
                });

                // Update the carousel with the fetched data
                $('#slide-carousel').html(`
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              ${carouselItems}
            </div>
            <a
              class="carousel-control-prev arrow-left"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <img
                src="images/arrow_black_left.png"
                alt="Video Previous"
                aria-hidden="true"
              />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next arrow-right"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <img
                src="images/arrow_black_right.png"
                alt="Video Next"
                aria-hidden="true"
              />
              <span class="sr-only">Next</span>
            </a>
          </div>
        `);
            },
            error: function (error) {
                console.error('Error fetching videos:', error);
            },
        });
    }, 2000); // Delay of 2000ms (2 seconds)
});








//LOADER 3 tek carousel quotes

$(document).ready(function () {
    // Show the loader initially
    $('#videos-carousel').html('<div class="loader3"></div>');

    // Fetch the videos after a 2-second delay
    setTimeout(function () {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/latest-videos',
            method: 'GET',
            success: function (data) {
                let carouselItems = '';
                data.forEach((video, index) => {
                    carouselItems += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-6 col-lg-4">
                  <div class="video-card">
                    <img
                      src="${video.thumb_url}"
                      class="img-fluid"
                      alt="Thumbnail of ${video.title}"
                    />
                    <div class="video-info">
                      <h4>${video.title}</h4>
                      <p>${video['sub-title']}</p>
                      <p class="text-muted">${video.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
                });

                // Update the carousel with the fetched data
                $('#videos-carousel').html(`
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              ${carouselItems}
            </div>
            <a
              class="carousel-control-prev arrow-left"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <img
                src="images/arrow_black_left.png"
                alt="Video Previous"
                aria-hidden="true"
              />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next arrow-right"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <img
                src="images/arrow_black_right.png"
                alt="Video Next"
                aria-hidden="true"
              />
              <span class="sr-only">Next</span>
            </a>
          </div>
        `);
            },
            error: function (error) {
                console.error('Error fetching videos:', error);
            },
        });
    }, 2000); // Delay of 2000ms (2 seconds)
});






