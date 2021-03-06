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
      img_url: 'https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop='
    },
    {
      title: "Double-Decker Van Home",
      description: "Renovated interior boasts a kitchenette and a queen-sized bunk bed setup",
      lat: 37.745973,
      lng: -122.456902,
      host_id: 0,
      price: 40,
      beds: 2,
      img_url: 'https://images.unsplash.com/photo-1502113040754-9e3e85618a00?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop='
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
    },
    {
      title: "Rustic Teepee",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      lat: 37.920367835943516,
      lng: -121.91991806030273,
      host_id: 7,
      price: 30,
      beds: 2,
      img_url: 'https://images.unsplash.com/photo-1479244209311-71e35c910f59?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop='
    },
    {
      title: "Rough it on the Ranch",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      lat: 38.28346905497185,
      lng: -122.96087265014648,
      host_id: 5,
      price: 40,
      beds: 2,
      img_url: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop='
    },
    {
      title: "Refurbished Van- Plush Interior",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lat: 37.37233994582318,
      lng: -122.39233016967773,
      host_id: 8,
      price: 45,
      beds: 1,
      img_url: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop='
    },
    {
      title: "Custom-Built Shed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lat: 37.56417412088097,
      lng: -121.45849227905273,
      host_id: 6,
      price: 50,
      beds: 3,
      img_url: 'https://images.unsplash.com/8/green-bike.jpg?dpr=1&auto=compress,format&fit=crop&w=1353&h=&q=80&cs=tinysrgb&crop='
    },
    {
      title: "Old Church",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lat: 38.50948995925553,
      lng: -123.19158554077148,
      host_id: 3,
      price: 70,
      beds: 2,
      img_url: 'https://images.unsplash.com/photo-1501260917196-884cdbe19108?dpr=1&auto=compress,format&fit=crop&w=1280&h=&q=80&cs=tinysrgb&crop='
    },
    ])
