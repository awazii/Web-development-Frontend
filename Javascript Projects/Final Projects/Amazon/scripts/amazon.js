import { cart } from '../data/Cart-Class.js'; // thats's called module.
import { products } from '../data/products.js';
import { sliding_products,banners } from '../data/slider_product.js';
import { formatcurrency } from './utils/money.js';
import { footer } from '../data/footer.js';
function renderhomepage(products){
let html = document.querySelector(".products-grid-js")
html.innerHTML=``;
products.forEach(product => {
  html.innerHTML += `<div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="${product.starsurl()}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
      <div class="product-price">
        ${product.productprice()}
      </div>
      <div class="product-quantity-container product-size-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        ${product.sizechart()}
      </div>
       ${product.extrainfo_html()}
      <div class="product-spacer"></div>
      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>
      <button data-product-id="${product.id}"class="add-to-cart-button button-primary btn-js">
        Add to Cart
      </button>
    </div>`
});
let html1 = document.querySelector(".slide")
if ($('.slide').hasClass('slick-initialized')) {
  $('.slide').slick('unslick');
}
html1.innerHTML=''
sliding_products.forEach(product => {
  html1.innerHTML += ` <div class="product-container products">
            <div class="product-image-container product-slider-image">
              <img class="product-image" src="${product.image}">
            </div>
            <div class="product-name limit-text-to-2-lines name-slider">
            ${product.name}
            </div>
            <div class="product-rating-container rating-slider">
              <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
              <div class="product-rating-count link-primary">
               ${product.rating.count}
              </div>
            </div>
            <div class="product-price price-slider">
              $${formatcurrency(product.priceCents)}
            </div>
            <div class="product-quantity-container  product-quantity-slider">
              <select>
                <option selected="" value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              ${product.type==="clothing"?`<select>
          <option selected value="XX-Small">XX-Small</option>
          <option value="X-Small">X-Small</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
          <option value="XX-Large">XX-Large</option>
        </select`:``}
        ${product.type==="Footwear"?`<select>
          <option selected value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
        </select>`:``}
            </div>
            <div class="added-to-cart added-slider">
              <img src="images/icons/checkmark.png">
              Added
            </div>
            <button data-product-id="${product.id}" class="add-to-cart-button button-primary slider-btn btn-js">
              Add to Cart
            </button>
          </div>`
})
let html2=document.querySelector(".bannerslide")
if ($('.bannerslide').hasClass('slick-initialized')) {
  $('.bannerslide').slick('unslick');
}
html2.innerHTML=''
banners.forEach((image,alt)=>{
  html2.innerHTML+=` <div class="banner"><img  src="${image}" alt="banner${alt+1}"></div>`
}
)
let cart_element = document.querySelector(".cart-quantity")
let cartcount = () => {
 let cart_quantity = 0;
  cart.cartItems.forEach((cartitems) => {
    cart_quantity += cartitems.quantity;
  });
  cart_element.innerHTML = cart_quantity;
}
window.onload = () => {
  cartcount();
  if (search) {
    document.querySelector(".search-button").click()
  }
};
let added = (timeoutId, e) => {
  let main = e.target.closest(".product-container");
  let added = main.querySelector(".added-to-cart");
  added.classList.add("clicked");
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    added.classList.remove("clicked");
  }, 2000);
}
document.querySelectorAll(".btn-js").forEach((button) => {
  let timeoutId; // Store timeout specific to each button
  button.addEventListener("click", (e) => {
    cart.addtocart(e, button)
    cartcount()
    added(timeoutId, e, button)
  });
});
initializeSlickSliders()
}
function initializeSlickSliders() {
  $('.slide').slick({
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1750,
        settings: { slidesToShow: 5, slidesToScroll: 3 }
      },
      {
        breakpoint: 1600,
        settings: { slidesToShow: 3, slidesToScroll: 3 }
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3, slidesToScroll: 3 }
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: false, infinite: true }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, infinite: true }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, infinite: true }
      }
    ]
  });
  $('.bannerslide').slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.left').on('click', function () {
    $('.bannerslide').slick('slickPrev');
  });

  $('.right').on('click', function () {
    $('.bannerslide').slick('slickNext');
  });
}
renderhomepage(products)
footer()
document.querySelector(".justforyou").innerHTML="Just for you"
document.querySelector(".allproducts").innerHTML="All Products"
let url = new URL(window.location.href);
let search =url.searchParams.get("search")
document.querySelector(".search-bar").value=search; 
function searching (check,searchinput){
  let justforyou = document.querySelector(".justforyou")
  let allproducts = document.querySelector(".allproducts")
  let slider = document.querySelector(".slide")
  let banner = document.querySelector(".banners")
  let searchheading=document.querySelector(".search-heading")
  let searchpara=document.querySelector(".search-paragraph")
  let searchimage=document.querySelector(".searchimage-container")
  let footer = document.getElementsByTagName("footer")[0]
  if (!check) {
  justforyou.style.display="none"
  slider.style.display="none"
  allproducts.style.display="none"
  banner.style.display="none"
  footer.style.display="none"
  let filteredproducts= products.filter((product)=>{
    return product.name.toLowerCase().includes(searchinput.toLowerCase()) ||
    product.keywords.some(keyword => keyword.toLowerCase().includes(searchinput.toLowerCase()));
  })
  searchheading.innerHTML=`Search Results for: "${searchinput}"`
  searchpara.innerHTML=`${filteredproducts.length===0?"Zero":filteredproducts.length} ${filteredproducts.length===0||filteredproducts.length===1?"item":"items"} found for this search`
  searchimage.innerHTML=``
  searchimage.style.marginBottom="0px"
  if (filteredproducts.length===0) {
     searchimage.innerHTML=`<img src="images/no_product_found.png" alt="">`
     searchimage.style.marginBottom="120px"
  }
  return filteredproducts
  }
  else if (check){
    justforyou.style.display="block"
    slider.style.display="block"
    allproducts.style.display="block"
    banner.style.display="block"
    footer.style.display="block"
    searchheading.innerHTML=``
    searchpara.innerHTML=``
    searchimage.innerHTML=``
    searchimage.style.marginBottom="0px"
  }
 
}
document.querySelector(".search-button").addEventListener("click",()=>{
  let search = document.querySelector(".search-bar")
  if (search.value!=='') {
    let filteredproducts= searching (0,search.value)
    renderhomepage(filteredproducts)
  }
}
)
document.querySelector(".search-bar").addEventListener("keydown",(e)=>{
  if (e.key==="Enter") {
    if (e.target.value) {
      let filteredproducts= searching (0,e.target.value)
      renderhomepage(filteredproducts)
    }
  }
})
document.querySelector(".search-bar").addEventListener("blur",(e)=>{
if (e.target.value.trim()==='') {
  searching (1)
  renderhomepage(products)
}
})
