import './blank_profile.css'

export default function BlankProfile(){
  return(
    <>  
    <body>
    <div class="container">
      <div class="all flex-row">
        <div class="menu flex-column">
          <div class="flex-row label-wrapper">
            <img src="file:///C:/Users/sriji/Downloads/Leadmark%20Free%20Website%20Template%20-%20Free-CSS.com/leadmark/public_html/assets/imgs/logo.svg" />
            <h3 class="insta-writing">ConneCTion</h3>
          </div>
          <div class="profil-img"></div>
          <div class="profil-info">
            <h2 class="name">Roti Bank</h2>
            <h3 class="city">Juhu, MUMBAI</h3>
            <div class="numbers">
              <div class="post">
                <p>Post</p>
                <div class="post-num">116</div>
              </div>
              <div class="post">
                <p>Views</p>
                <div class="post-num">48</div>
              </div>
              <div class="post">
                <p>Connection</p>
                <div class="post-num">48</div>
              </div>
            </div>
            <div class="menu-elements">
              <div class="icons">
                <img src="https://i.ibb.co/5csvQKW/home-2.png" />
                <div class="feed-writing"> Feed </div>
              </div>
              <div class="icons">
                <img src="https://i.ibb.co/y8wD2HZ/explore-tool.png" />
                <div class="exp-writing">Past Events</div>
              </div>

              <div class="icons">
                <img src="https://i.ibb.co/G2r0G8N/tick-inside-a-circle.png" />
                <div class="trend-writing"> Connect with Ngos</div>
              </div>

              <div class="icons">
                <img src="https://i.ibb.co/G2r0G8N/tick-inside-a-circle.png" />
                <div class="top-writing"> Top Post </div>
              </div>

              <div class="icons">
                <img src="https://i.ibb.co/XDnYxL9/user-symbol-of-thin-outline.png" />
                <div class="people-writing"> community </div>
              </div>

              <div class="icons">
                <img src="https://i.ibb.co/dWcct0k/notification.png" />
                <div class="notif-writing"> Notification </div>
              </div>

              <div class="icons">
                <img src="https://i.ibb.co/smVnQkg/settings.png" />
                <div class="set-writing"> Settings</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-page">
        <div class="top-bar">
          <div class="form has-search">
            <input class="text" type="search" placeholder="Search" name="search" />
            <span class="searchIcon">
             <img src="https://i.ibb.co/sqFgRq8/search.png" />
           </span>
            <span class="micro">
             <img src="https://i.ibb.co/HNx8Xty/microphone.png"/>
           </span>
          </div>
          <div class="cover-post">
            <button class="button post-new">Create New Post</button>
            <span class="plus">
           <img src="https://i.ibb.co/0YG23j8/plus-symbol.png" />
           </span>
          </div>

            <button class="button post-new "> Create your Wishlist</button>

        </div>
        <hr class="hr-new" />

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Mumbai Roti Bank is a non-profit, hunger relief organisation with the mission to eliminate hunger and malnutrition. Started in December 2017 under the able mentorship of former Director General of Police, Maharashtra, Mr. D. Sivanandhan, our initial objective was to reduce the gap between hunger and the excess food. Initially, we used to pick up excess food from weddings, events, hotels, cafeterias, housing societies and deliver it to thousands of hungry people who live in slums or on the footpath.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Wishlist
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <ul>
                <li>food</li>
                <li>medicine</li>
                <li> clothes</li>
              </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Contact details
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">

              </div>
            </div>
          </div>
        </div>
        <hr class="hr-new" />
        <h2 class="featured-stories"> Posts</h2>
      </div>
    </div>
  </body>
  </>
  )
}

