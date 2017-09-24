# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.destroy_all

demo_users = User.create([
  {
    username: 'Captain Kirk',
    email: 'boldlygo@enterprise.org',
    password: 'captainslog',
    img_url: 'http://pixel.nymag.com/imgs/daily/vulture/2015/07/26/26-Kirk.w529.h529.jpg'
  },
  {
    username: 'Jack Sparrow',
    email: 'captain@hotmail.com',
    password: 'whynorum',
    img_url: 'https://lumiere-a.akamaihd.net/v1/images/bluesteel_d0f846ee.jpeg?region=0%2C0%2C1580%2C880'
  },
  {
    username: 'John Madden',
    email: 'mamamia@spcglobal.net',
    password: 'football',
    img_url: 'https://cbssanfran.files.wordpress.com/2010/09/johnmadden01-250.jpg?w=318&h=318&crop=1'
  },
  {
    username: 'Whoopee Goldberg',
    email: 'ihateborg@enterprise.org',
    password: 'crazydrinks',
    img_url: 'http://www.treknews.net/wp-content/uploads/2016/08/whoopi-goldberg-guinan-star-trek-tng.jpg'
  },
  {
    username: 'Hans Florine',
    email: 'boltbanger@gmail.com',
    password: 'gottagofast',
    img_url: 'https://www.outdoorresearch.com/blog/images/athletes/Hans_Florine.jpg'
  },
  {
    username: 'Dan Osmond',
    email: 'speeddemon@aol.com',
    password: 'bearsreach',
    img_url: 'http://www.supertopo.com/photos/10/49/226421_14531_L.jpg'
  },
  {
    username: 'Chris Sharma',
    email: 'oliana@sharma.net',
    password: 'jumbolove',
    img_url: 'http://www.rockandice.com/Article-Images/News-Photos/sharma-1-profile-cropped.jpg'
  },
  {
    username: 'Warren Harding',
    email: 'boltladder@bigwall.net',
    password: 'partyhard',
    img_url: 'http://www.supertopo.com/photos/1/32/134730_11981_L.jpg'
  },
  {
    username: 'Lynn Hill',
    email: 'itgoesboys@elcap.com',
    password: 'freeascent',
    img_url: 'https://cdn.ukc2.com/i/289172.jpg'
  },
  {
    username: 'Royal Robbins',
    email: 'hardman@netscape.com',
    password: 'whysoserious',
    img_url: 'https://sierraclub.org/sites/www.sierraclub.org/files/blog/_planet/Royal%20Robbins%20%28photo%20by%20Tom%20Frost.jpg'
  },
  {
    username: 'Layton Kor',
    email: 'castleton@ogcrusher.org',
    password: 'squeezechimney',
    img_url: 'http://www.elevationoutdoors.com/top-climbers/wp-content/uploads/2015/08/202046_27996_XL.jpg'
  },
  {
    username: 'Yvon Chouinard',
    email: 'patagonia@bd.com',
    password: 'theenvironment',
    img_url: 'https://i.pinimg.com/originals/75/27/e2/7527e207f80f5bd9a7679c0702792600.jpg'
  }
  ])

  demo_spots = Spot.create([
    {
      title: "Luxury Hammock",
      description: "Beautiful, plush free-standing hammock in a garden full of native California plants",
      lat: 37.785983,
      lng: -122.462808,
      host_id: 3,
      price: 20,
      beds: 1,
      img_url: 'https://cdn.shopify.com/s/files/1/0167/0460/products/Pastel_4ae3b5cd-6295-4a66-b1d1-e2b31566f5dc.jpg?v=1496943355'
    },
    {
      title: "Double-Decker Van Home",
      description: "Renovated interior boasts a kitchenette and a queen-sized bunk bed setup",
      lat: 37.745973,
      lng: -122.456902,
      host_id: 0,
      price: 40,
      beds: 2,
      img_url: 'https://i.pinimg.com/736x/7a/25/37/7a2537b3372a5f0ebd5122cd6f398ae6--vw-camper-vans-vw-vans.jpg'
    },
    {
      title: "Modern Yurt-Style Tent",
      description: "Fully furnished with table and memory-foam mattress.",
      lat: 37.890241,
      lng:  -122.255026,
      host_id: 5,
      price: 45,
      beds: 1,
      img_url: 'https://sogblog-cdn.r.worldssl.net/wp-content/uploads/2014/07/Tent3.jpg'
    },
    {
      title: "Hanging Tent in Wine Country",
      description: "Come hang out for a night, suspended over the world-famous rolling hills of Sonoma County",
      lat: 38.328803,
      lng: -122.809945,
      host_id: 2,
      price: 65,
      beds: 1,
      img_url: 'http://www.homecrux.com/wp-content/uploads/2014/08/Roomoon-by-The-Hanging-Tent-Company_1.jpg'
    },
    {
      title: "Big wall bivouac in Yosemite",
      description: "Come take part in the big wall Climbing Experience!  We'll rappell down the wall in the evening, and spend the night suspended thousands of feet above the valley floor.  A once-in-a-lifetime adventure.",
      lat: 37.730820,
      lng: -119.574197,
      host_id: 0,
      price: 200,
      beds: 1,
      img_url: 'http://i.dailymail.co.uk/i/pix/2014/01/16/article-0-1AB3929700000578-919_964x518.jpg'
    }
    ])
