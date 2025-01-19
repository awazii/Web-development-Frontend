import{formatcurrency} from '../scripts/utils/money.js';
 class Product{
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;
  constructor(productdetails)
  {
    this.id=productdetails.id
    this.image=productdetails.image
    this.name=productdetails.name
    this.rating=productdetails.rating
    this.priceCents=productdetails.priceCents
    this.keywords=productdetails.keywords
  }
  starsurl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`; 
  }
  productprice(){
    return `$${formatcurrency(this.priceCents)}`
  }
  extrainfo_html(){
    return``
  }
  sizechart(){
    return``
  }
 }
 class Clothing extends Product{
  sizeChartLink;
  constructor(productdetails){
    super(productdetails)
    this.sizeChartLink=productdetails.sizeChartLink
  }
  extrainfo_html(){
    return`<div class="Extra-Info">
            <div class="info-img">
                <img src="${this.sizeChartLink}" alt="size-Chart">
            </div>
            <div class="link-Info">
                <a href="${this.sizeChartLink}" target="_blank">Size Chart</a>
            </div>
        </div>`
  }
  sizechart(){
    return` <select>
          <option selected value="XX-Small">XX-Small</option>
          <option value="X-Small">X-Small</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
          <option value="XX-Large">XX-Large</option>
        </select>`
  }
 }
 class Footwear extends Product{
  footChartLink;
  constructor(productdetails){
    super(productdetails)
    this.footChartLink=productdetails.footChartLink
  }
  extrainfo_html(){
    // super.extrainfo_html()// to call parents method
    return`<div class="Extra-Info">
            <div class="info-img">
                <img src="${this.footChartLink}" alt="size-Chart">
            </div>
            <div class="link-Info">
                <a href="${this.footChartLink}" target="_blank">Foot Guide</a>
            </div>
        </div>`
  }
  sizechart(){
    return` <select>
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
        </select>`
  }
 }
 class Appliances extends Product{
  instructions;
  warranty
  constructor(productdetails){
    super(productdetails)
    this.instructions=productdetails.instructions;
    this.warranty=productdetails.warranty;
  }
  extrainfo_html(){
    // super.extrainfo_html()// to call parents method
    return`<div class="Extra-Info">
            <div class="info-img">
                <img src="${this.instructions}" alt="instruction">
            </div>
            <div class="link-Info">
                <a href="${this.warranty}" target="_blank">Warranty Instructions</a>
            </div>
        </div>`
  }
  sizechart(){
    return``
  }
 }
//  function thislog(){
//   console.log(this)
// }
// thislog.call('hello')// to that value to this but it will not work with arrow function  
// let obj ={
//   method(){
//     console.log(this)
//   }
// }
// obj.method()
 export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/variations/adults-plain-cotton-tshirt-2-pack-black.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ] ,
     type: "Appliances",
    instructions:'images/appliance-instructions.png',
    warranty:'images/appliance-warranty.png'
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/variations/plain-hooded-fleece-sweatshirt-teal.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ],
    type: "Footwear",
    footChartLink: "images/FootWear.jpg"
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ],
    type: "Footwear",
    footChartLink: "images/FootWear.jpg"
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/variations/men-slim-fit-summer-shorts-black.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ],
    type: "Appliances",
   instructions:'images/appliance-instructions.png',
   warranty:'images/appliance-warranty.png'
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/variations/women-stretch-popover-hoodie-blue.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ],
    type: "Footwear",
    footChartLink: "images/FootWear.jpg"
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/variations/men-chino-pants-black.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ],
    type: "Footwear",
    footChartLink: "images/FootWear.jpg"
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/variations/men-navigator-sunglasses-silver.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/variations/women-french-terry-fleece-jogger-gray.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ] ,
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ],
    type: "Appliances",
   instructions:'images/appliance-instructions.png',
   warranty:'images/appliance-warranty.png'
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/Backpack.jpg",
    name: "Waterproof Sports Backpack - Black",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 1590,
    keywords: [
      "bags",
      "sports",
      "men",
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ],
    type: "Appliances",
   instructions:'images/appliance-instructions.png',
   warranty:'images/appliance-warranty.png'
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "f0e1d4a7-73b2-441b-9809-25b5d7d2e13c",
    image: "images/products/HkdMToxijoHfz4JwUgfh3G-1200-80.jpg",
    name: "Playstion 5-825gb ssd-upto 8k resolution",
    rating: {
      stars: 4.5,
      count: 95
    },
    priceCents: 54999,
    keywords: [
      "gaming",
      "playstation",
      "electronics"
    ],  
  },
  {
    id: "1d9b1730-8d1a-4757-bbaf-9b42216e6172",
    image: "https://images.static-bluray.com/products/47/1287_1_large.jpg",
    name: "Marvel Spiderman 2-Ps5",
    rating: {
      stars: 5,
      count: 42
    },
    priceCents: 5547,
    keywords: [
      "gaming",
      "playstation",
      "spiderman"
    ],  
  },
  {
    id: "a978df3b-c11a-4046-849b-4b3a96e8b3f2",
    image: "https://ronin.pk/cdn/shop/files/R-740_Earbuds_Black_1.png?v=1725356143",
    name: "Wireless Earbuds",
    rating: {
      stars: 4,
      count: 22
    },
    priceCents: 1241,
    keywords: [
      "earbuds",
      "headphones",
      "electronics",
      "handfree"
    ],  
  },
  {
    id: "9f7b2875-13fa-4b78-8e82-1b1f0d4d2e6c",
    image: "https://newtokyo.pk/cdn/shop/products/Homage-1805_600x.jpg?v=1668607084",
    name: "Inverter Ac-1.5 Ton",
    rating: {
      stars: 4.5,
      count: 88
    },
    priceCents: 47742,
    keywords: [
      "cooling",
      "airconditioner",
      "electronics"
    ],  
  },
    {
      id: "f0e1d4a7-73b2-441b-9809-25b5d7d2e13d",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9zRvPNrgvbmy5llKpvXn5j10ENjomyW75w&s",
      name: "Playstion Vr-2",
      rating: {
        stars: 4.5,
        count: 64
      },
      priceCents: 55054,
      keywords: [
        "gaming",
        "playstation",
        "electronics"
      ],  
    },
    {
      id: "91c9b2f8-434b-4d78-abc9-2e1f9d4d5c7f",
      image: "https://babyplanet.pk/cdn/shop/products/BLL-AR-107.jpg?v=1685647228",
      name: "Hover-Board",
      rating: {
        stars: 4.5,
        count: 77
      },
      priceCents: 21519,
      keywords: [
        "hoverboard",
        "electronics"
      ],  
    },
    {
      id: "b25a6a18-c64d-4d2a-a8e2-4c5b3f6a7e9b",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcC8MHJingTxH8JcSgVnvfjI1ZhxhT03NH0A&s",
      name: "Geforce Rtx 2060s",
      rating: {
        stars: 4.5,
        count: 95
      },
      priceCents: 26255,
      keywords: [
        "gaming",
        "Graphics Card",
        "electronics"
      ], 
    },
    {
      id: "d4a9e7b5-12c4-4b19-bb1f-8c4d2a5f3e9e",
      image: "https://typeshop.pk/wp-content/uploads/2024/01/redmi-noye-13-pro-price-in-pakistan.webp",
      name: "Redmi note 13 pro",
      rating: {
        stars: 4,
        count: 37
      },
      priceCents: 22547,
      keywords: [
        "accessories",
        "Mobile",
        "electronics"
      ], 
    },
    {
      id: "e6f8a3c5-1b2a-4d4c-8e91-3b5a2f6d7c9b",
      image: "https://media.cnn.com/api/v1/images/stellar/prod/dell-ultrasharp-4k-usb-c-hub-monitor-u2723qe-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill",
      name: "Gaming Monitor borderless 2k resolution",
      rating: {
        stars: 4.5,
        count: 167
      },
      priceCents: 35285,
      keywords: [
        "gaming",
        "monitor",
        "electronics"
      ],  
    },
    {
      id: "39b8d4e2-5f7a-4b3c-8c4d-1e6b2a8e5d7f",
      image: "https://trangoadventure.com/wp-content/uploads/2020/02/Mountain-Bike-Holiday-Pakistan-.jpg",
      name: "Mountain Bike",
      rating: {
        stars: 4.5,
        count: 54
      },
      priceCents: 15443,
      keywords: [
        "cycle",
        "bike"
      ],  
    },
].map(product=>{
  if (product.type==='clothing') {
    return new Clothing(product)
  }
  else if (product.type==='Footwear') {
    return new Footwear(product)
  }
  else if (product.type==='Appliances') {
    return new Appliances(product)
  }
  else
  {
    return new Product(product)
  }
});
