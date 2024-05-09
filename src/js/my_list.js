
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


document.addEventListener('DOMContentLoaded', () => {
  
    fetch('../src/data/movies.json')
    .then(response => response.json())
    // all movies
    .then(data => {
        const bodyContainer = document.querySelector('.grid-container');
        const moviesData = shuffleArray(data.movies.filter(movie => new Date(movie.releaseDate).getFullYear() == "2024"));
        console.log(moviesData);
        let cards = ``;

        // all movies
        moviesData.forEach(movie => {
            cards += `
            <div class="grid-item modalOpenButton">
            <img
                src="${movie.videoThumbnailURL}"
                alt="" />
            <!-- hidden info card -->
            <div class="hidden-info-card">
                <img movieLogo= "${movie.logoURL}"
                src="${movie.innerThumbnailURL}"
                alt="" />

                <!-- dummy video -->
                <div class="card-dummy-video" >
                <video src="../src/video/dummy_video.mp4" muted></video>
                </div>
                <!-- button part of the hidden card -->
                <div class="card-info">
                <!-- info wrapper -->
                <div class="card-info-wrapper">
                    <!-- buttons insider the wrapper -->
                    <div class="movie-card-buttons-container">
                    <!-- left buttons -->
                    <div class="movie-card-left-buttons">
                        <!-- play button -->
                        <button class="movies-card-play-button card-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 7 8" fill="none">
                            <path d="M0.0283203 7.32574L6.12771 3.6661L0.0283203 0.00646973V7.32574Z" fill="black" />
                        </svg>
                        </button>
                        <!-- add to list button -->
                        <div class="movie-card-add-button">
                        <button class="card-button bgc-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none">
                            <path fill="#e5"
                                d="M19.75 11H12.5V3.75C12.5 3.33579 12.1642 3 11.75 3C11.3358 3 11 3.33579 11 3.75V11H3.75C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5H11V19.75C11 20.1642 11.3358 20.5 11.75 20.5C12.1642 20.5 12.5 20.1642 12.5 19.75V12.5H19.75C20.1642 12.5 20.5 12.1642 20.5 11.75C20.5 11.3358 20.1642 11 19.75 11Z"
                                fill="black" />
                            </svg>
                        </button>
                        <div  class="hidden-add-label">
                            Add to My list
                        </div>
                        <div class="traingle"></div>
                        </div>
                        <!-- reaction button -->
                        <div class="movie-card-reaction-buttons">
                        <div class="card-button bgc-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_201_28849)">
                                <path
                                d="M13.296 0.0689737C11.862 -0.289526 10.53 0.794974 10.434 2.19897C10.326 3.77547 10.089 5.22297 9.792 6.08397C9.6045 6.62397 9.0735 7.60347 8.232 8.54247C7.3965 9.47697 6.309 10.3095 5.0355 10.6575C4.0275 10.932 3 11.805 3 13.08V19.0815C3 20.349 4.023 21.2775 5.172 21.399C6.777 21.57 7.518 22.0215 8.274 22.4835L8.346 22.5285C8.754 22.776 9.213 23.0505 9.801 23.2545C10.3965 23.4585 11.0925 23.58 12 23.58H17.25C18.6555 23.58 19.6485 22.8645 20.151 21.984C20.3939 21.5685 20.5251 21.0972 20.532 20.616C20.532 20.388 20.4975 20.148 20.4165 19.92C20.718 19.5255 20.9865 19.053 21.1485 18.5685C21.3135 18.0735 21.4065 17.4255 21.1545 16.845C21.258 16.65 21.3345 16.4415 21.393 16.2405C21.5085 15.8355 21.5625 15.3885 21.5625 14.955C21.5625 14.523 21.5085 14.0775 21.393 13.671C21.3405 13.4841 21.2712 13.3024 21.186 13.128C21.4487 12.7543 21.6176 12.3229 21.6787 11.8703C21.7398 11.4176 21.6912 10.9569 21.537 10.527C21.228 9.63897 20.514 8.87697 19.737 8.61897C18.4665 8.19597 17.0325 8.20497 15.963 8.30247C15.741 8.32245 15.5194 8.34746 15.2985 8.37747C15.8189 6.14905 15.7869 3.82725 15.2055 1.61397C15.1043 1.25936 14.9103 0.938201 14.6434 0.683718C14.3765 0.429235 14.0465 0.250665 13.6875 0.166474L13.296 0.0689737ZM17.25 22.0815H12C11.235 22.0815 10.7055 21.978 10.29 21.8355C9.8685 21.69 9.531 21.4935 9.126 21.246L9.066 21.21C8.2335 20.7015 7.269 20.1135 5.331 19.908C4.8315 19.854 4.5 19.473 4.5 19.083V13.08C4.5 12.699 4.839 12.2655 5.43 12.105C7.0725 11.655 8.3955 10.611 9.351 9.54297C10.3035 8.47797 10.947 7.33047 11.208 6.57597C11.5725 5.52597 11.8185 3.92397 11.931 2.30097C11.9685 1.75797 12.471 1.40997 12.9315 1.52397L13.3245 1.62297C13.5645 1.68297 13.7115 1.83747 13.7565 2.00547C14.3691 4.33951 14.2935 6.8009 13.539 9.09297C13.4963 9.22045 13.4886 9.35707 13.5168 9.48853C13.545 9.61998 13.608 9.74144 13.6993 9.84019C13.7905 9.93894 13.9066 10.0113 14.0354 10.0498C14.1642 10.0883 14.301 10.0915 14.4315 10.059L14.436 10.0575L14.457 10.053L14.544 10.032C15.0569 9.92305 15.5758 9.84441 16.098 9.79647C17.0925 9.70647 18.2835 9.71547 19.263 10.0425C19.5255 10.1295 19.938 10.4925 20.118 11.0175C20.2785 11.4795 20.2485 12.0225 19.719 12.5505L19.1895 13.08L19.719 13.611C19.7835 13.6755 19.8765 13.8225 19.95 14.0835C20.022 14.334 20.0625 14.6385 20.0625 14.955C20.0625 15.273 20.022 15.576 19.95 15.828C19.875 16.089 19.7835 16.236 19.719 16.3005L19.1895 16.83L19.719 17.361C19.7895 17.4315 19.8825 17.6265 19.7265 18.093C19.5639 18.5453 19.3055 18.9572 18.969 19.3005L18.4395 19.83L18.969 20.361C18.978 20.3685 19.0305 20.436 19.0305 20.616C19.0238 20.836 18.9614 21.0507 18.849 21.24C18.6015 21.672 18.0945 22.08 17.25 22.08V22.0815Z"
                                fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_28849">
                                <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <div class="hidden-reaction-buttons">
                            <!-- dislike button -->
                            <div class="hidden-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M13.296 23.511C11.862 23.871 10.5315 22.785 10.434 21.381C10.326 19.806 10.089 18.3585 9.792 17.496C9.6045 16.956 9.0735 15.978 8.232 15.039C7.3965 14.103 6.309 13.2705 5.0355 12.924C4.0275 12.648 3 11.775 3 10.5V4.5C3 3.2325 4.023 2.304 5.172 2.181C6.777 2.0115 7.518 1.5585 8.274 1.0965L8.346 1.053C8.754 0.804 9.213 0.5295 9.801 0.327C10.3965 0.12 11.0925 0 12 0H17.25C18.6555 0 19.6485 0.717 20.151 1.596C20.397 2.0265 20.532 2.5065 20.532 2.9655C20.532 3.1935 20.4975 3.4335 20.4165 3.6615C20.718 4.0545 20.9865 4.527 21.1485 5.0115C21.3135 5.5065 21.4065 6.1545 21.1545 6.7365C21.258 6.9315 21.3345 7.1385 21.393 7.341C21.5085 7.746 21.5625 8.1915 21.5625 8.625C21.5625 9.0585 21.5085 9.504 21.393 9.909C21.3405 10.089 21.273 10.275 21.186 10.4535C21.777 11.31 21.813 12.2535 21.537 13.053C21.228 13.941 20.514 14.703 19.737 14.961C18.4665 15.3855 17.0325 15.375 15.963 15.2775C15.741 15.2575 15.5194 15.2325 15.2985 15.2025C15.8192 17.4314 15.7872 19.7538 15.2055 21.9675C14.9985 22.7295 14.3805 23.2395 13.6875 23.4135L13.296 23.511ZM17.25 1.5H12C11.235 1.5 10.7055 1.602 10.29 1.7445C9.8685 1.89 9.531 2.088 9.126 2.334L9.066 2.3715C8.2335 2.8785 7.269 3.4665 5.331 3.6735C4.8315 3.726 4.5 4.1085 4.5 4.4985V10.5C4.5 10.8825 4.839 11.3145 5.43 11.475C7.0725 11.925 8.3955 12.9705 9.351 14.0385C10.3035 15.1035 10.947 16.251 11.208 17.004C11.5725 18.054 11.8185 19.656 11.931 21.279C11.9685 21.822 12.471 22.1715 12.9315 22.056L13.3245 21.9585C13.5645 21.8985 13.7115 21.7425 13.7565 21.576C14.3694 19.2415 14.2938 16.7795 13.539 14.487C13.4966 14.3596 13.4893 14.2232 13.5176 14.092C13.546 13.9607 13.609 13.8395 13.7002 13.741C13.7914 13.6425 13.9074 13.5702 14.036 13.5318C14.1646 13.4933 14.3012 13.4901 14.4315 13.5225H14.436L14.457 13.5285L14.544 13.548C15.0569 13.6569 15.5758 13.7355 16.098 13.7835C17.0925 13.8735 18.2835 13.8645 19.263 13.539C19.5255 13.4505 19.938 13.0875 20.118 12.5625C20.2785 12.1005 20.2485 11.5575 19.719 11.031L19.1895 10.5L19.719 9.969C19.7835 9.906 19.8765 9.759 19.95 9.4965C20.022 9.246 20.0625 8.9415 20.0625 8.625C20.0625 8.3085 20.022 8.004 19.95 7.7535C19.875 7.4925 19.7835 7.344 19.719 7.281L19.1895 6.75L19.719 6.219C19.7895 6.1485 19.8825 5.955 19.7265 5.487C19.5638 5.03516 19.3054 4.62379 18.969 4.281L18.4395 3.75L18.969 3.219C18.978 3.2115 19.0305 3.144 19.0305 2.964C19.0236 2.74449 18.9612 2.53032 18.849 2.3415C18.6 1.908 18.0945 1.5 17.25 1.5Z" fill="black"/>
                            </svg>
                            <div  class="hidden-add-label">
                                Not For Me
                            </div>
                            <div class="traingle"></div>
                            </div>
                            <!-- like icon -->
                            <div class="hidden-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_201_28849)">
                                <path fill="white"
                                d="M13.296 0.0689737C11.862 -0.289526 10.53 0.794974 10.434 2.19897C10.326 3.77547 10.089 5.22297 9.792 6.08397C9.6045 6.62397 9.0735 7.60347 8.232 8.54247C7.3965 9.47697 6.309 10.3095 5.0355 10.6575C4.0275 10.932 3 11.805 3 13.08V19.0815C3 20.349 4.023 21.2775 5.172 21.399C6.777 21.57 7.518 22.0215 8.274 22.4835L8.346 22.5285C8.754 22.776 9.213 23.0505 9.801 23.2545C10.3965 23.4585 11.0925 23.58 12 23.58H17.25C18.6555 23.58 19.6485 22.8645 20.151 21.984C20.3939 21.5685 20.5251 21.0972 20.532 20.616C20.532 20.388 20.4975 20.148 20.4165 19.92C20.718 19.5255 20.9865 19.053 21.1485 18.5685C21.3135 18.0735 21.4065 17.4255 21.1545 16.845C21.258 16.65 21.3345 16.4415 21.393 16.2405C21.5085 15.8355 21.5625 15.3885 21.5625 14.955C21.5625 14.523 21.5085 14.0775 21.393 13.671C21.3405 13.4841 21.2712 13.3024 21.186 13.128C21.4487 12.7543 21.6176 12.3229 21.6787 11.8703C21.7398 11.4176 21.6912 10.9569 21.537 10.527C21.228 9.63897 20.514 8.87697 19.737 8.61897C18.4665 8.19597 17.0325 8.20497 15.963 8.30247C15.741 8.32245 15.5194 8.34746 15.2985 8.37747C15.8189 6.14905 15.7869 3.82725 15.2055 1.61397C15.1043 1.25936 14.9103 0.938201 14.6434 0.683718C14.3765 0.429235 14.0465 0.250665 13.6875 0.166474L13.296 0.0689737ZM17.25 22.0815H12C11.235 22.0815 10.7055 21.978 10.29 21.8355C9.8685 21.69 9.531 21.4935 9.126 21.246L9.066 21.21C8.2335 20.7015 7.269 20.1135 5.331 19.908C4.8315 19.854 4.5 19.473 4.5 19.083V13.08C4.5 12.699 4.839 12.2655 5.43 12.105C7.0725 11.655 8.3955 10.611 9.351 9.54297C10.3035 8.47797 10.947 7.33047 11.208 6.57597C11.5725 5.52597 11.8185 3.92397 11.931 2.30097C11.9685 1.75797 12.471 1.40997 12.9315 1.52397L13.3245 1.62297C13.5645 1.68297 13.7115 1.83747 13.7565 2.00547C14.3691 4.33951 14.2935 6.8009 13.539 9.09297C13.4963 9.22045 13.4886 9.35707 13.5168 9.48853C13.545 9.61998 13.608 9.74144 13.6993 9.84019C13.7905 9.93894 13.9066 10.0113 14.0354 10.0498C14.1642 10.0883 14.301 10.0915 14.4315 10.059L14.436 10.0575L14.457 10.053L14.544 10.032C15.0569 9.92305 15.5758 9.84441 16.098 9.79647C17.0925 9.70647 18.2835 9.71547 19.263 10.0425C19.5255 10.1295 19.938 10.4925 20.118 11.0175C20.2785 11.4795 20.2485 12.0225 19.719 12.5505L19.1895 13.08L19.719 13.611C19.7835 13.6755 19.8765 13.8225 19.95 14.0835C20.022 14.334 20.0625 14.6385 20.0625 14.955C20.0625 15.273 20.022 15.576 19.95 15.828C19.875 16.089 19.7835 16.236 19.719 16.3005L19.1895 16.83L19.719 17.361C19.7895 17.4315 19.8825 17.6265 19.7265 18.093C19.5639 18.5453 19.3055 18.9572 18.969 19.3005L18.4395 19.83L18.969 20.361C18.978 20.3685 19.0305 20.436 19.0305 20.616C19.0238 20.836 18.9614 21.0507 18.849 21.24C18.6015 21.672 18.0945 22.08 17.25 22.08V22.0815Z"
                                fill="black" />
                            </g>
                                <defs>
                                <clipPath id="clip0_201_28849">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
                            <div  class="hidden-add-label">
                                I like this
                            </div>
                            <div class="traingle"></div>
                            </div >
                            <!-- love icon -->
                            <div class="hidden-icon">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_201_80913)">
                                <path d="M2.03149 10.8711C2.03149 15.8633 6.21508 20.7734 12.8245 24.9922C13.0706 25.1445 13.4221 25.3086 13.6682 25.3086C13.9143 25.3086 14.2659 25.1445 14.5237 24.9922C21.1213 20.7734 25.3049 15.8633 25.3049 10.8711C25.3049 6.72265 22.4573 3.79297 18.6604 3.79297C16.4924 3.79297 14.7346 4.82421 13.6682 6.40624C12.6253 4.83593 10.844 3.79297 8.67602 3.79297C4.87915 3.79297 2.03149 6.72265 2.03149 10.8711ZM3.91821 10.8711C3.91821 7.7539 5.93383 5.67968 8.65258 5.67968C10.8557 5.67968 12.1213 7.05078 12.8713 8.22265C13.1877 8.6914 13.387 8.82031 13.6682 8.82031C13.9495 8.82031 14.1253 8.67968 14.4651 8.22265C15.2737 7.07421 16.4924 5.67968 18.6838 5.67968C21.4026 5.67968 23.4182 7.7539 23.4182 10.8711C23.4182 15.2304 18.8127 19.9297 13.9143 23.1875C13.7971 23.2695 13.7151 23.3281 13.6682 23.3281C13.6213 23.3281 13.5393 23.2695 13.4338 23.1875C8.52368 19.9297 3.91821 15.2304 3.91821 10.8711Z" fill="white" fill-opacity="0.85"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_201_80913">
                                <rect width="23.2734" height="22.2305" fill="white" transform="translate(2.03149 3.07812)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <div  class="hidden-add-label">
                                Love This!
                            </div>
                            <div class="traingle"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- right button -->
                    <button class="card-button bgc-black modalOpenButton" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.293 9.293L12 13.586L7.707 9.293L6.293 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
                            fill="black" />
                        </svg>
                    </button>
                    </div>
                    <div class="movie-brief-info">
                    <div class="brief-top">
                        <div class="matching-rate">${movie.matchRate}% Match</div>
                        <div class="brief-age-rate">${movie.maturityRate}+</div>
                        <div class="number-of-ep">16 Episoides</div>
                        <div class="video-qaulity" style="width: 1rem">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_201_27061)">
                            <path fill="#e5e5e5"
                                d="M11.094 16.5V7.5015H9.3135V11.1615H5.5305V7.5H3.75V16.5H5.5305V12.645H9.3135V16.5H11.094ZM12.75 7.5015V16.5H16.032C18.7485 16.5 20.0595 14.8395 20.0595 11.9775C20.0595 9.1365 18.7695 7.5015 16.0335 7.5015H12.75ZM14.5305 8.952H15.795C17.463 8.952 18.228 9.981 18.228 12.012C18.228 14.0415 17.4705 15.042 15.795 15.042H14.5305V8.952Z"
                                fill="black" />
                            <path fill="#e5e5e5"
                                d="M21 4.5C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6V18C22.5 18.3978 22.342 18.7794 22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21ZM3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3Z"
                                fill="black" />
                            </g>
                            <defs>
                            <clipPath id="clip0_201_27061">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        </div>
                    </div>
                    <div class="brief-genre">
                        <div>${movie.genres[0]}</div>
                        <div><span>&#xb7;</span>${movie.genres[1]}</div>
                        <div><span>&#xb7;</span>${movie.genres[2]}</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            `
        });

        
        bodyContainer.innerHTML += cards;
    })

    .then(() => {
        const unmutedIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M17.304 21.0151C18.4898 19.8326 19.4302 18.4274 20.0712 16.8803C20.7121 15.3332 21.0411 13.6747 21.039 12.0001C21.0411 10.3255 20.7121 8.66697 20.0712 7.11987C19.4302 5.57277 18.4898 4.1676 17.304 2.98511L16.242 4.04561C17.2883 5.08899 18.118 6.32887 18.6836 7.69397C19.2492 9.05907 19.5393 10.5225 19.5375 12.0001C19.5375 15.1066 18.2775 17.9191 16.242 19.9546L17.304 21.0151Z" fill="black"/>
          <path fill="white" d="M15.1815 18.894C16.0882 17.9896 16.8073 16.915 17.2974 15.7319C17.7876 14.5488 18.0391 13.2806 18.0375 12.0001C18.0391 10.7194 17.7876 9.45106 17.2974 8.26797C16.8073 7.08487 16.0882 6.01028 15.1815 5.10596L14.121 6.16646C14.8882 6.93168 15.4967 7.84096 15.9114 8.84207C16.3261 9.84317 16.5389 10.9164 16.5375 12C16.5393 13.0837 16.3268 14.1571 15.9124 15.1585C15.4979 16.1598 14.8896 17.0694 14.1225 17.835L15.1815 18.894Z" fill="black"/>
          <path fill="white" d="M15.0375 11.4999C15.0387 12.3208 14.8646 13.1339 14.5253 13.8923C14.186 14.6507 13.6882 15.3396 13.0605 15.9193L12 14.9374C12.4882 14.4864 12.8754 13.9506 13.1393 13.3607C13.4031 12.7708 13.5385 12.1384 13.5375 11.4999C13.5375 10.1583 12.9495 8.943 12 8.06245L13.0605 7.08052C13.6882 7.66025 14.186 8.34912 14.5253 9.10754C14.8646 9.86597 15.0387 10.679 15.0375 11.4999V11.4999ZM10.5 5.94442C10.4998 5.81375 10.4598 5.68578 10.3846 5.57523C10.3093 5.46467 10.2019 5.37601 10.0747 5.31944C9.9475 5.26286 9.80562 5.24067 9.6654 5.25541C9.52517 5.27015 9.39228 5.32122 9.282 5.40276L5.7375 8.02773H2.25C2.05109 8.02773 1.86032 8.10089 1.71967 8.23113C1.57902 8.36136 1.5 8.53799 1.5 8.72217V14.2777C1.5 14.4618 1.57902 14.6385 1.71967 14.7687C1.86032 14.8989 2.05109 14.9721 2.25 14.9721H5.7375L9.282 17.5971C9.39228 17.6786 9.52517 17.7297 9.6654 17.7444C9.80562 17.7591 9.9475 17.737 10.0747 17.6804C10.2019 17.6238 10.3093 17.5351 10.3846 17.4246C10.4598 17.314 10.4998 17.1861 10.5 17.0554V5.94442ZM6.468 9.26383L9 7.38885V15.611L6.468 13.736C6.33524 13.6374 6.1702 13.5835 6 13.5832H3V9.4166H6C6.1702 9.41632 6.33524 9.36245 6.468 9.26383V9.26383Z" fill="black"/>
          </svg>
          `;
        const mutedIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M10.0755 5.3249C10.2026 5.38612 10.3098 5.48192 10.3849 5.60132C10.46 5.72071 10.4999 5.85886 10.5 5.9999V17.9999C10.4998 18.141 10.4598 18.2792 10.3846 18.3986C10.3093 18.518 10.2019 18.6138 10.0747 18.6749C9.9475 18.736 9.80562 18.76 9.6654 18.744C9.52517 18.7281 9.39228 18.673 9.282 18.5849L5.7375 15.7499H2.25C2.05109 15.7499 1.86032 15.6709 1.71967 15.5302C1.57902 15.3896 1.5 15.1988 1.5 14.9999V8.9999C1.5 8.80099 1.57902 8.61023 1.71967 8.46957C1.86032 8.32892 2.05109 8.2499 2.25 8.2499H5.7375L9.282 5.4149C9.39236 5.32669 9.52539 5.27143 9.66578 5.25551C9.80616 5.23959 9.94819 5.26364 10.0755 5.3249ZM9 7.5599L6.468 9.5849C6.33524 9.69141 6.1702 9.7496 6 9.7499H3V14.2499H6C6.1702 14.2502 6.33524 14.3084 6.468 14.4149L9 16.4399V7.5599ZM20.781 8.4689C20.8508 8.53857 20.9063 8.62134 20.9441 8.71245C20.9819 8.80357 21.0013 8.90125 21.0013 8.9999C21.0013 9.09856 20.9819 9.19624 20.9441 9.28735C20.9063 9.37847 20.8508 9.46124 20.781 9.5309L18.3105 11.9999L20.781 14.4689C20.9218 14.6097 21.0009 14.8007 21.0009 14.9999C21.0009 15.1991 20.9218 15.3901 20.781 15.5309C20.6402 15.6717 20.4492 15.7509 20.25 15.7509C20.0508 15.7509 19.8598 15.6717 19.719 15.5309L17.25 13.0604L14.781 15.5309C14.6402 15.6717 14.4492 15.7509 14.25 15.7509C14.0508 15.7509 13.8598 15.6717 13.719 15.5309C13.5782 15.3901 13.4991 15.1991 13.4991 14.9999C13.4991 14.8007 13.5782 14.6097 13.719 14.4689L16.1895 11.9999L13.719 9.5309C13.6493 9.46117 13.594 9.37839 13.5562 9.28728C13.5185 9.19617 13.4991 9.09852 13.4991 8.9999C13.4991 8.90129 13.5185 8.80364 13.5562 8.71253C13.594 8.62142 13.6493 8.53864 13.719 8.4689C13.8598 8.32807 14.0508 8.24896 14.25 8.24896C14.3486 8.24896 14.4463 8.26838 14.5374 8.30612C14.6285 8.34386 14.7113 8.39917 14.781 8.4689L17.25 10.9394L19.719 8.4689C19.7887 8.39906 19.8714 8.34364 19.9626 8.30584C20.0537 8.26803 20.1513 8.24856 20.25 8.24856C20.3487 8.24856 20.4463 8.26803 20.5374 8.30584C20.6286 8.34364 20.7113 8.39906 20.781 8.4689Z" fill="black"/>
          </svg>
          `;
        const replayIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2425_9920)">
          <path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01"/>
          <path d="M18.364 18.364C16.7353 19.9927 14.4853 21 12 21C7.02945 21 3 16.9706 3 12C3 7.02945 7.02945 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63605C19.193 6.46505 21 8.5 21 8.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 4V8.5H16.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_2425_9920">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>        
          `;
        const openButtons = document.getElementsByClassName("modalOpenButton");
        const modalContainer = document.getElementById("modal-container");
        const modal = document.getElementById("modal");
        const modalClosingButton = document.getElementById("closing-button");
        const modalVideo = document.getElementById("modal-video");
        setTimeout(() => {
          document.body.style.fontFamily = 'Netflix Sans';
        }, 1000);
    
        const setOpen = (button) => {
          button.addEventListener("click", () => {
            // img url of the curren card
            const imgURL = button
            .children[1].children[0].getAttribute('src');
            const logoURL = button
            .children[1].children[0].getAttribute('movielogo')
            const modalLogo = document.getElementById('modal-movie-logo');
            const modalImgAttribute = modal.querySelector(".modal-thumbnail-img img");
            // change position first
            modalImgAttribute.setAttribute("src", imgURL);
            modalLogo.setAttribute('src', logoURL)
            modalContainer.style.zIndex = 9999;
            modalContainer.style.opacity = 1;
            modalContainer.style.scale = 1;
    
            if (modalVideo.paused) {
                modalVideo.muted
                ? (MmodalMuteButton.innerHTML = mutedIcon)
                : (MmodalMuteButton.innerHTML = unmutedIcon);
            }
            // wait until the position is ended
            setTimeout(() => {
              modal.style.scale = 1;
              modal.style.opacity = 1;
      
              setTimeout(() => {
                
                modalVideo.play();
                modalVideo.style.opacity = 1;
                setTimeout(() => {
                  // pause video at after loop for 3 time
                  modalVideo.style.opacity = 0;
                  modalVideo.pause();
                  modalVideo.currentTime = 0;
                }, modalVideo.duration * 3000);
              }, 800);
            }, 100);
          });
        };

        const setClose = (button) => {
          button.addEventListener("click", (e) => {
            if (e.target.classList.contains("closing-button")) {
              setTimeout(() => {
                modalContainer.style.zIndex = -9999;
                modalContainer.style.opacity = 0;
              }, 250);
      
              modalVideo.pause();
              modalVideo.style.opacity = 0;
              modalVideo.currentTime = 0;
      
              modal.style.scale = 0.8;
              modal.style.opacity = 0;
      
              clearTimeout(setOpen);
            }
          });
        };
        const MmodalMuteButton = document.getElementById("modal-mute-button");
        MmodalMuteButton.addEventListener("click", function () {
          if (modalVideo.paused) {
            modalVideo.muted
              ? (MmodalMuteButton.innerHTML = mutedIcon)
              : (MmodalMuteButton.innerHTML = unmutedIcon);
            modalVideo.play();
            modalVideo.style.opacity = 1;
            setTimeout(() => {
              modalVideo.style.opacity = 0;
              modalVideo.pause();
              modalVideo.currentTime = 0;
            }, modalVideo.duration * 3000);
          } else if (modalVideo.muted) {
            modalVideo.muted = false;
            MmodalMuteButton.innerHTML = unmutedIcon;
          } else {
            modalVideo.muted = true;
            MmodalMuteButton.innerHTML = mutedIcon;
          }
        });
    
    
        modalVideo.addEventListener("loadedmetadata", () => {
          modalVideo.pause();
        });
    
    
        // setClose(modalContainer);
        setClose(modalClosingButton);
      
        for (let i = 0; i < openButtons.length; i++) {
          setOpen(openButtons[i]);
        }
      
    
        //video control for modal
      
        modalVideo.addEventListener("pause", () => {
          if (modalVideo.currentTime === 0) {
            MmodalMuteButton.innerHTML = replayIcon;
          }
        });
    
    
    
        // hidden card script
        
        const hiddenInfoCard = document.querySelectorAll(".hidden-info-card");
        
        hiddenInfoCard.forEach((hiddenInfoCard) => {
          const hiddenInfo = hiddenInfoCard.querySelector(".card-info");
        
          hiddenInfoCard.addEventListener("mouseenter", () => {
            hiddenInfo.style.setProperty("display", "block");
          });
        
          // hide when mouse lease
          hiddenInfoCard.addEventListener("mouseleave", () => {
            hiddenInfo.style.setProperty("display", "none");
          });
        });
        
        // hidden card video script
        
        const hiddenInfoCards = document.getElementsByClassName("hidden-info-card");
        [...hiddenInfoCards].forEach((hiddenCard) => {
          const dummyVideo = hiddenCard.querySelector(".card-dummy-video").children[0];
          // console.log(dummyVideo)
          dummyVideo.pause();
          hiddenCard.addEventListener("mouseenter", () => {
            setTimeout(() => {
              dummyVideo.loop = true;
              dummyVideo.play();
            }, 500);
          });
          hiddenCard.addEventListener("mouseleave", () => {
            dummyVideo.loop = false;
            dummyVideo.pause();
            dummyVideo.currentTime = 0;
          });
        });
      });

});