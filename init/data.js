
const u = (id) => `https://images.unsplash.com/${id}?q=80&w=800`;

const IMG = {
  trending: ["photo-1520250497591-112f2f40a3f4", "photo-1571896349842-33c89424de2d"],
  rooms: ["photo-1522708323590-d24dbb6b0267", "photo-1502672260266-1c1ef2d93688"],
  cities: ["photo-1477959858617-67f85cf4f1df", "photo-1449824913935-59a10b8d2000"],
  mountains: ["photo-1506905925346-21bda4d32df4", "photo-1464822759023-fed622ff2c3b"],
  castles: ["photo-1533154683836-84ea7a0bc310", "photo-1520637836862-4d197d17c93a"],
  pools: ["photo-1613490493576-7fde63acd811", "photo-1582719508461-905c673771fd"],
  camping: ["photo-1504280390367-361c6d9f38f4", "photo-1478131143081-80f7f84ca84d"],
  farms: ["photo-1500382017468-9049fed747ef", "photo-1464226184884-fa280b87c399"],
  arctic: ["photo-1531366936337-7c912a4589a7", "photo-1483728642387-6c3bdd6c93e5"],
  boats: ["photo-1567899378494-47b22a2ae96a", "photo-1540946485063-a40da27545f8"],
};

const img = (cat, i) => ({ filename: "listingimage", url: u(IMG[cat][i % 2]) });

const sampleListings = [
  // ---------- ROOMS ----------
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this beautiful beachfront cottage with stunning ocean views and private beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800" },
    price: 1500, location: "Malibu", country: "United States", category: "rooms",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }, rating: 4.8
  },
  {
    title: "Traditional Machiya Private Room",
    description: "Sleep on tatami floors in a restored wooden townhouse steps from Gion's lantern-lit streets.",
    image: img("rooms", 1), price: 1800, location: "Kyoto", country: "Japan", category: "rooms",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] }, rating: 4.7
  },
  {
    title: "Charming Guest Room in Alfama",
    description: "Bright room with azulejo tiles and a tiny balcony overlooking Lisbon's old rooftops.",
    image: img("rooms", 0), price: 1200, location: "Lisbon", country: "Portugal", category: "rooms",
    geometry: { type: "Point", coordinates: [-9.1393, 38.7223] }, rating: 4.6
  },
  {
    title: "Boutique Canal-View Room",
    description: "Quiet double room above a canal with fresh breakfast and bikes available for guests.",
    image: img("rooms", 1), price: 2200, location: "Amsterdam", country: "Netherlands", category: "rooms",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }, rating: 4.5
  },
  {
    title: "Garden Room Among the Rice Fields",
    description: "Open-air bathroom, bamboo ceilings and a private veranda facing the Ubud paddies.",
    image: img("rooms", 0), price: 1400, location: "Ubud", country: "Indonesia", category: "rooms",
    geometry: { type: "Point", coordinates: [115.2624, -8.5069] }, rating: 4.9
  },
  {
    title: "Sunny Room Near the Colosseum",
    description: "Comfortable private room with high ceilings, a walk from Rome's ancient landmarks.",
    image: img("rooms", 1), price: 1600, location: "Rome", country: "Italy", category: "rooms",
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] }, rating: 4.4
  },

  // ---------- CITIES ----------
  {
    title: "Luxury Penthouse with Skyline Views",
    description: "Floor-to-ceiling windows, a private terrace and the best view of Manhattan at night.",
    image: img("cities", 0), price: 6500, location: "New York", country: "United States", category: "cities",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }, rating: 4.8
  },
  {
    title: "Modern Apartment in Shibuya",
    description: "Compact, stylish apartment minutes from the famous crossing and the Yamanote line.",
    image: img("cities", 1), price: 3200, location: "Tokyo", country: "Japan", category: "cities",
    geometry: { type: "Point", coordinates: [139.7016, 35.6595] }, rating: 4.7
  },
  {
    title: "Chic Flat in Le Marais",
    description: "Parisian apartment with exposed beams, a French balcony and cafes right downstairs.",
    image: img("cities", 0), price: 4200, location: "Paris", country: "France", category: "cities",
    geometry: { type: "Point", coordinates: [2.3622, 48.8566] }, rating: 4.6
  },
  {
    title: "Marina Skyline Loft",
    description: "High-floor loft with a marina view, rooftop pool access and a gym in the building.",
    image: img("cities", 1), price: 5000, location: "Dubai", country: "United Arab Emirates", category: "cities",
    geometry: { type: "Point", coordinates: [55.1403, 25.0805] }, rating: 4.5
  },
  {
    title: "Heritage Haveli in the Pink City",
    description: "Stay in a restored haveli with a courtyard, hand-painted walls and rooftop dining.",
    image: img("cities", 0), price: 2800, location: "Jaipur", country: "India", category: "cities",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }, rating: 4.8
  },
  {
    title: "Downtown Condo Near the CN Tower",
    description: "Clean, modern condo in the heart of the city with a gym and a lake view.",
    image: img("cities", 1), price: 3500, location: "Toronto", country: "Canada", category: "cities",
    geometry: { type: "Point", coordinates: [-79.3832, 43.6532] }, rating: 4.3
  },

  // ---------- MOUNTAINS ----------
  {
    title: "Alpine Chalet with Matterhorn View",
    description: "Wooden chalet with a fireplace, hot tub and a direct view of the Matterhorn.",
    image: img("mountains", 0), price: 7500, location: "Zermatt", country: "Switzerland", category: "mountains",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }, rating: 4.9
  },
  {
    title: "Himalayan Retreat Above the Valley",
    description: "Peaceful stone-and-wood cottage surrounded by pine forests and snow peaks.",
    image: img("mountains", 1), price: 2500, location: "Manali", country: "India", category: "mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] }, rating: 4.6
  },
  {
    title: "Rocky Mountain Ski Lodge",
    description: "Ski-in, ski-out lodge with a stone hearth, game room and a hot tub on the deck.",
    image: img("mountains", 0), price: 9000, location: "Aspen", country: "United States", category: "mountains",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }, rating: 4.7
  },
  {
    title: "Swiss Cabin Above the Lakes",
    description: "Authentic cabin with a sunny terrace, between two lakes and below the Jungfrau.",
    image: img("mountains", 1), price: 6000, location: "Interlaken", country: "Switzerland", category: "mountains",
    geometry: { type: "Point", coordinates: [7.8632, 46.6863] }, rating: 4.8
  },
  {
    title: "Dolomites Mountain Hut",
    description: "Cozy hut with hearty breakfast and trail access to dramatic limestone peaks.",
    image: img("mountains", 0), price: 3800, location: "Cortina d'Ampezzo", country: "Italy", category: "mountains",
    geometry: { type: "Point", coordinates: [12.1357, 46.5405] }, rating: 4.5
  },
  {
    title: "Wooden Cottage in the Hills",
    description: "Warm cottage with a bonfire spot and misty mornings looking over the Doon Valley.",
    image: img("mountains", 1), price: 2100, location: "Mussoorie", country: "India", category: "mountains",
    geometry: { type: "Point", coordinates: [78.0644, 30.4598] }, rating: 4.4
  },

  // ---------- CASTLES ----------
  {
    title: "Highland Castle Retreat",
    description: "Stay in a stone castle with turrets, a library and sweeping views over a Scottish loch.",
    image: img("castles", 0), price: 12000, location: "Inverness", country: "United Kingdom", category: "castles",
    geometry: { type: "Point", coordinates: [-4.2247, 57.4778] }, rating: 4.8
  },
  {
    title: "Loire Valley Chateau Suite",
    description: "Elegant suite in a Renaissance chateau with formal gardens and vineyard tastings.",
    image: img("castles", 1), price: 9500, location: "Amboise", country: "France", category: "castles",
    geometry: { type: "Point", coordinates: [0.9833, 47.4127] }, rating: 4.7
  },
  {
    title: "Rajput Fort Palace",
    description: "A royal palace stay with lake views, carved balconies and evening folk performances.",
    image: img("castles", 0), price: 8500, location: "Udaipur", country: "India", category: "castles",
    geometry: { type: "Point", coordinates: [73.6833, 24.5854] }, rating: 4.9
  },
  {
    title: "Fairytale Castle Apartment",
    description: "Apartment in a castle wing with Alpine views, close to the famous fairytale castles.",
    image: img("castles", 1), price: 7000, location: "Füssen", country: "Germany", category: "castles",
    geometry: { type: "Point", coordinates: [10.7, 47.57] }, rating: 4.6
  },
  {
    title: "Irish Tower House",
    description: "Restored 15th-century tower house with a spiral staircase and a peat fireplace.",
    image: img("castles", 0), price: 6800, location: "Galway", country: "Ireland", category: "castles",
    geometry: { type: "Point", coordinates: [-9.0568, 53.2707] }, rating: 4.5
  },
  {
    title: "Tuscan Hilltop Castle",
    description: "Medieval castle estate among vineyards, with a cellar and a pool in the old courtyard.",
    image: img("castles", 1), price: 11000, location: "Siena", country: "Italy", category: "castles",
    geometry: { type: "Point", coordinates: [11.3308, 43.3188] }, rating: 4.8
  },

  // ---------- POOLS ----------
  {
    title: "Infinity Pool Villa",
    description: "Private villa with an infinity pool facing the sunset, a chef on request and a garden lounge.",
    image: img("pools", 0), price: 8000, location: "Seminyak", country: "Indonesia", category: "pools",
    geometry: { type: "Point", coordinates: [115.1683, -8.6914] }, rating: 4.9
  },
  {
    title: "Beverly Hills Pool Mansion",
    description: "Modern mansion with a heated pool, outdoor kitchen and a home cinema.",
    image: img("pools", 1), price: 15000, location: "Beverly Hills", country: "United States", category: "pools",
    geometry: { type: "Point", coordinates: [-118.4004, 34.0736] }, rating: 4.7
  },
  {
    title: "Cave House with Plunge Pool",
    description: "Whitewashed cave house carved into the cliff with a private plunge pool over the caldera.",
    image: img("pools", 0), price: 13000, location: "Oia, Santorini", country: "Greece", category: "pools",
    geometry: { type: "Point", coordinates: [25.3753, 36.4618] }, rating: 4.9
  },
  {
    title: "Miami Poolside Villa",
    description: "Bright villa with a lagoon-style pool, palm trees and a short ride to South Beach.",
    image: img("pools", 1), price: 9500, location: "Miami", country: "United States", category: "pools",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }, rating: 4.5
  },
  {
    title: "Goa Villa with Private Pool",
    description: "Portuguese-style villa with a pool, a coconut grove and a five-minute walk to the beach.",
    image: img("pools", 0), price: 5500, location: "Candolim, Goa", country: "India", category: "pools",
    geometry: { type: "Point", coordinates: [73.7627, 15.518] }, rating: 4.6
  },
  {
    title: "Marrakech Riad with Courtyard Pool",
    description: "Traditional riad with a tiled courtyard pool, rooftop terrace and mint tea on arrival.",
    image: img("pools", 1), price: 4800, location: "Marrakech", country: "Morocco", category: "pools",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] }, rating: 4.7
  },

  // ---------- CAMPING ----------
  {
    title: "Glamping Tent in the Valley",
    description: "Luxury canvas tent with a real bed, a wood stove and granite cliffs at your doorstep.",
    image: img("camping", 0), price: 2800, location: "Yosemite", country: "United States", category: "camping",
    geometry: { type: "Point", coordinates: [-119.5383, 37.8651] }, rating: 4.7
  },
  {
    title: "Riverside Forest Camp",
    description: "Tents by the Ganga with bonfires, yoga mornings and rafting nearby.",
    image: img("camping", 1), price: 1500, location: "Rishikesh", country: "India", category: "camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }, rating: 4.5
  },
  {
    title: "Desert Dune Camp",
    description: "Swiss-style tents among golden dunes with camel rides, folk music and star-gazing.",
    image: img("camping", 0), price: 3000, location: "Jaisalmer", country: "India", category: "camping",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] }, rating: 4.6
  },
  {
    title: "Lakeside Camp Below the Peaks",
    description: "Comfortable camp beside a turquoise lake with canoes and trail access.",
    image: img("camping", 1), price: 3200, location: "Banff", country: "Canada", category: "camping",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }, rating: 4.8
  },
  {
    title: "Cloud Forest Treehouse Camp",
    description: "Elevated platform tents in the canopy with hanging bridges and bird-watching walks.",
    image: img("camping", 0), price: 2600, location: "Monteverde", country: "Costa Rica", category: "camping",
    geometry: { type: "Point", coordinates: [-84.8253, 10.3] }, rating: 4.6
  },
  {
    title: "Safari Tent on the Savannah",
    description: "Tented camp with an en-suite bathroom, guided game drives and sunrise over the plains.",
    image: img("camping", 1), price: 7500, location: "Masai Mara", country: "Kenya", category: "camping",
    geometry: { type: "Point", coordinates: [35.1432, -1.4061] }, rating: 4.9
  },

  // ---------- FARMS ----------
  {
    title: "Tuscan Farmhouse in Chianti",
    description: "Stone farmhouse with olive groves, a pizza oven and cooking classes with the hosts.",
    image: img("farms", 0), price: 4500, location: "Chianti", country: "Italy", category: "farms",
    geometry: { type: "Point", coordinates: [11.2558, 43.5] }, rating: 4.8
  },
  {
    title: "Vineyard Cottage in Wine Country",
    description: "Private cottage among the vines with wine tastings and a hammock under the oaks.",
    image: img("farms", 1), price: 6000, location: "Napa", country: "United States", category: "farms",
    geometry: { type: "Point", coordinates: [-122.2869, 38.2975] }, rating: 4.7
  },
  {
    title: "Tea Estate Bungalow",
    description: "Colonial bungalow inside a working tea estate, with plantation walks and fresh brews.",
    image: img("farms", 0), price: 3400, location: "Munnar", country: "India", category: "farms",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }, rating: 4.8
  },
  {
    title: "Converted Barn in the Cotswolds",
    description: "Sunny barn conversion with beams, a woodburner and sheep in the paddock outside.",
    image: img("farms", 1), price: 5200, location: "Cotswolds", country: "United Kingdom", category: "farms",
    geometry: { type: "Point", coordinates: [-1.7, 51.833] }, rating: 4.6
  },
  {
    title: "Organic Farm Stay",
    description: "Wake up to birdsong, pick vegetables for breakfast and join daily farm activities.",
    image: img("farms", 0), price: 1900, location: "Wayanad", country: "India", category: "farms",
    geometry: { type: "Point", coordinates: [76.083, 11.6854] }, rating: 4.5
  },
  {
    title: "Working Ranch Cabin",
    description: "Log cabin on a cattle ranch with horse riding, a fire pit and big-sky evenings.",
    image: img("farms", 1), price: 4000, location: "Bozeman", country: "United States", category: "farms",
    geometry: { type: "Point", coordinates: [-111.0429, 45.677] }, rating: 4.7
  },

  // ---------- ARCTIC ----------
  {
    title: "Aurora Glass Igloo",
    description: "Heated glass igloo where you can watch the northern lights from your bed.",
    image: img("arctic", 0), price: 14000, location: "Rovaniemi", country: "Finland", category: "arctic",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }, rating: 4.9
  },
  {
    title: "Fjord Cabin with Sauna",
    description: "Warm cabin by the fjord with a wood sauna, husky tours and aurora chasing trips.",
    image: img("arctic", 1), price: 9000, location: "Tromsø", country: "Norway", category: "arctic",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] }, rating: 4.8
  },
  {
    title: "Northern Lights Mountain Cabin",
    description: "Simple cabin under one of the clearest aurora skies in the world.",
    image: img("arctic", 0), price: 7800, location: "Abisko", country: "Sweden", category: "arctic",
    geometry: { type: "Point", coordinates: [18.83, 68.35] }, rating: 4.7
  },
  {
    title: "Polar Snow Lodge",
    description: "Remote lodge among glaciers with snowmobile trips and polar-bear safety guides.",
    image: img("arctic", 1), price: 16000, location: "Longyearbyen", country: "Norway", category: "arctic",
    geometry: { type: "Point", coordinates: [15.6356, 78.2232] }, rating: 4.6
  },
  {
    title: "Geothermal Cabin Near the Lagoon",
    description: "Cabin with a hot tub heated by geothermal water, with snowy lava fields all around.",
    image: img("arctic", 0), price: 8200, location: "Akureyri", country: "Iceland", category: "arctic",
    geometry: { type: "Point", coordinates: [-18.0878, 65.6835] }, rating: 4.8
  },
  {
    title: "Alaskan Log Cabin",
    description: "Handcrafted log cabin with a wood stove, dog sledding and winter aurora views.",
    image: img("arctic", 1), price: 6500, location: "Fairbanks", country: "United States", category: "arctic",
    geometry: { type: "Point", coordinates: [-147.7164, 64.8378] }, rating: 4.5
  },

  // ---------- BOATS ----------
  {
    title: "Luxury Mediterranean Yacht",
    description: "Sleep aboard a private yacht with a crew, sundeck and day trips along the Riviera.",
    image: img("boats", 0), price: 25000, location: "Monaco", country: "Monaco", category: "boats",
    geometry: { type: "Point", coordinates: [7.4246, 43.7384] }, rating: 4.9
  },
  {
    title: "Traditional Kerala Houseboat",
    description: "Cruise the backwaters on a wooden kettuvallam with a cook preparing local meals.",
    image: img("boats", 1), price: 4500, location: "Alleppey", country: "India", category: "boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }, rating: 4.8
  },
  {
    title: "Floating Villa on the Lagoon",
    description: "Overwater villa with a glass floor, direct snorkel access and sunset terrace.",
    image: img("boats", 0), price: 18000, location: "Malé Atoll", country: "Maldives", category: "boats",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] }, rating: 4.7
  },
  {
    title: "Dal Lake Shikara Houseboat",
    description: "Carved cedar houseboat on the lake with kahwa tea and sunrise shikara rides.",
    image: img("boats", 1), price: 3500, location: "Srinagar", country: "India", category: "boats",
    geometry: { type: "Point", coordinates: [74.8723, 34.0837] }, rating: 4.7
  },
  {
    title: "Sailboat Among the Islands",
    description: "Two-cabin sailboat anchored near white-sand beaches, with snorkelling gear included.",
    image: img("boats", 0), price: 9800, location: "Whitsundays", country: "Australia", category: "boats",
    geometry: { type: "Point", coordinates: [148.93, -20.28] }, rating: 4.6
  },
  {
    title: "Boat Stay on the Venetian Lagoon",
    description: "Compact liveaboard moored near the historic centre, with water-taxi access.",
    image: img("boats", 1), price: 7200, location: "Venice", country: "Italy", category: "boats",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] }, rating: 4.4
  },

  // ---------- TRENDING ----------
  {
    title: "Overwater Bungalow with Lagoon Views",
    description: "Iconic overwater bungalow with a private deck, glass floor panels and sunset views.",
    image: img("trending", 0), price: 22000, location: "Bora Bora", country: "French Polynesia", category: "trending",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] }, rating: 4.9
  },
  {
    title: "Cliffside Villa on the Amalfi Coast",
    description: "Terraced villa hanging over the sea with lemon trees and a private path to the beach.",
    image: img("trending", 1), price: 17000, location: "Positano", country: "Italy", category: "trending",
    geometry: { type: "Point", coordinates: [14.4872, 40.6281] }, rating: 4.8
  },
  {
    title: "Jungle Treehouse Hideaway",
    description: "Design-forward treehouse in the jungle with a plunge pool and bikes to the beach.",
    image: img("trending", 0), price: 8800, location: "Tulum", country: "Mexico", category: "trending",
    geometry: { type: "Point", coordinates: [-87.4653, 20.2114] }, rating: 4.7
  },
  {
    title: "Hot Spring Ryokan Suite",
    description: "Traditional ryokan suite with a private onsen bath and a multi-course kaiseki dinner.",
    image: img("trending", 1), price: 14500, location: "Hakone", country: "Japan", category: "trending",
    geometry: { type: "Point", coordinates: [139.107, 35.2324] }, rating: 4.9
  },
  {
    title: "Beach House Under Table Mountain",
    description: "Modern glass-fronted beach house with ocean views, a firepit and a heated plunge pool.",
    image: img("trending", 0), price: 9200, location: "Cape Town", country: "South Africa", category: "trending",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }, rating: 4.6
  },
  {
    title: "Cave Hotel with Balloon Views",
    description: "Stone cave suite with a terrace for watching hot-air balloons rise over the valley at dawn.",
    image: img("trending", 1), price: 7600, location: "Göreme", country: "Türkiye", category: "trending",
    geometry: { type: "Point", coordinates: [34.8289, 38.6431] }, rating: 4.8
  },
];

module.exports = { data: sampleListings };