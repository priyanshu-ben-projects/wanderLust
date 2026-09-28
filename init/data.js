const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "65f1a2b3c4d5e6f789012345", // User ObjectId
    reviews: ["65f1a2b3c4d5e6f789012346", "65f1a2b3c4d5e6f789012347"], // Review ObjectIds
  },
  {
    title: "Modern Loft in Downtown NYC",
    description:
      "Experience city living at its finest in this stylish downtown loft featuring high ceilings, contemporary art, and floor-to-ceiling windows.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "New York",
    country: "United States",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: ["65f1a2b3c4d5e6f789012348"],
  },
  {
    title: "Mountain Retreat Chalet",
    description:
      "Nestled in the snowy pine forests, this rustic wooden chalet offers a private hot tub, stone fireplace, and ski-in/ski-out privileges.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Aspen",
    country: "United States",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Traditional Kyoto Machiya",
    description:
      "Immerse yourself in Japanese culture staying in a beautifully restored wooden townhouse with a tranquil inner zen garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description:
      "Overlooking the Mediterranean coast, this villa boasts a private infinity pool, sprawling marble terraces, and private chef service.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Santorini",
    country: "Greece",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Secluded Jungle Treehouse",
    description:
      "Unplug in an eco-friendly treehouse built deep within the rainforest canopy, complete with open-air lounge and suspension bridge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Ubud",
    country: "Indonesia",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Historic Tuscan Farmhouse",
    description:
      "Surrounded by rolling olive groves and vineyards, this 18th-century stone farmhouse features stone pizza ovens and wine tastings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Florence",
    country: "Italy",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Overwater Bungalow",
    description:
      "Step off your private deck directly into crystal-clear turquoise waters. Features glass floor viewports and private boat access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Bora Bora",
    country: "French Polynesia",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Glass Igloo for Northern Lights",
    description:
      "Sleep under a heated glass dome in the Arctic wilderness, offering unobstructed night-sky views of the Aurora Borealis.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Rovaniemi",
    country: "Finland",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Modern Desert Oasis Villa",
    description:
      "Minimalist architecture set against dramatic desert mountain backdrops, featuring a heated lap pool and outdoor fire pit.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Scottsdale",
    country: "United States",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Charming Canal Side Suite",
    description:
      "17th-century historic canal house apartment with original timber beams, steep winding stairs, and scenic water views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "Amsterdam",
    country: "Netherlands",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Cliffside Aegean Penthouse",
    description:
      "Panoramic ocean views, sun-soaked whitewashed balconies, and private hot tub perched above the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Mykonos",
    country: "Greece",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Eco-Lodge in Cloud Forest",
    description:
      "Immerse yourself in biodiversity with hammock terraces, guided canopy walking tours, and organic farm-to-table breakfast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Monteverde",
    country: "Costa Rica",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Historic French Chateau Apartment",
    description:
      "Feel like royalty in a historic wing of a Loire Valley estate surrounded by formal gardens, fountains, and antique furniture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Tours",
    country: "France",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Urban High-Rise Studio",
    description:
      "Sleek micro-apartment equipped with high-speed fiber internet, rooftop skyline pool, and modern co-working lounge access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1350,
    location: "Singapore",
    country: "Singapore",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Safari Tent in Private Reserve",
    description:
      "Luxury glamping in canvas tents equipped with plush king beds, ensuite bath, and views of wildlife at the waterhole.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Kruger National Park",
    country: "South Africa",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Seaside Heritage Villa",
    description:
      "Colonial-style villa with high ceilings, teak verandas, private courtyard garden, and direct access to golden sand beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "Goa",
    country: "India",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Alpine Lakefront Cabin",
    description:
      "Clear mountain waters meet dense pine forest. Comes with private wooden dock, canoes, and outdoor BBQ lounge area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Lake Tahoe",
    country: "United States",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Romantic Parisian Attic Studio",
    description:
      "Quaint Montmartre apartment with dormer windows looking out across iron roofs to the tip of the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1850,
    location: "Paris",
    country: "France",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Cliff-Top Oceanfront Pod",
    description:
      "Architectural glass pod suspended over rocky dramatic cliffs with sweeping views of crashing waves and coastal trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Big Sur",
    country: "United States",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Traditional Riad with Plunge Pool",
    description:
      "Intricate mosaic tilework, central leafy courtyard, and roof terrace dining in the heart of the historic Medina.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Marrakech",
    country: "Morocco",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Skylight Glass Dome Villa",
    description:
      "Modern dome house situated inside volcanic crater country with clear starry night skies and private geothermal bath.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2750,
    location: "Reykjavik",
    country: "Iceland",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Coastal Modern Beach House",
    description:
      "Open-concept luxury house with floor-to-ceiling glass doors opening directly onto white sandy ocean dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Byron Bay",
    country: "Australia",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Bamboo Eco Cottage",
    description:
      "Handcrafted 100% natural bamboo structure set among organic rice terraces with natural freshwater bathing stream.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Chiang Mai",
    country: "Thailand",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Panoramic Harbor View Apartment",
    description:
      "Watch ferries glide across the harbor from your private high-rise terrace near iconic opera and harbor bridge landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2950,
    location: "Sydney",
    country: "Australia",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Traditional Andes Stone Cottage",
    description:
      "Cozy stone cottage high in the Andean valley with llama pastures, fireplace, and home-cooked traditional meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 890,
    location: "Cusco",
    country: "Peru",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Luxury Hilltop Lakefront Manor",
    description:
      "Grand estate overlooking alpine lakes with private dock, wine cellar, tennis court, and heated indoor sauna.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Queenstown",
    country: "New Zealand",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Bohemian Artist's Loft",
    description:
      "Sunlit artistic residence decorated with local handmade textiles, vintage vinyl collection, and green rooftop plants.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "Berlin",
    country: "Germany",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Private Island Coconut Cabin",
    description:
      "Exclusive stay on a private islet with white sand beaches, clear shallow reefs, and complete solitude.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4900,
    location: "El Nido",
    country: "Philippines",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
  {
    title: "Minimalist Scandinavian Villa",
    description:
      "Clean lines, wood-burning sauna, and quiet pine forest surroundings close to archipelago swimming rocks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2150,
    location: "Stockholm",
    country: "Sweden",
    owner: "65f1a2b3c4d5e6f789012345",
    reviews: [],
  },
];

module.exports = { data: sampleListings };