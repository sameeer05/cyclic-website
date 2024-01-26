import ayush from "./assets/images/ayush.jpg";
import kanika from "./assets/images/kanika.jpg";
import kiran from "./assets/images/kiran.jpg";
import userImage from "./assets/images/userImage.png";
import babySitting from "./assets/images/babySitting.jpg";
import cleaning from "./assets/images/cleaning.jpg";
import cook from "./assets/images/cook.jpg";
import dishWashing from "./assets/images/dishWashing.jpg";
import laundry from "./assets/images/laundry.jpg";

export const allServices = [
  {
    id: 1,
    title: "House Cleaning",
    img: cleaning,
    desc: "Are you tired of spending your weekends scrubbing floors and dusting shelves? Let us take care of the dirty work for you! Our home cleaning service is here to make your life easier. With our home cleaning service, you can relax and enjoy your free time without worrying about the never-ending chores. Give us a call today and let us take care of the cleaning, so you can focus on the things that truly matter to you.",
    category: [
      {
        categoryName: 'Brooming and Mopping',
        basePrice: 1000, // Base price
        details: [
          {
            id: 'houseSize',
            name: 'House Size',
            options: [
              { name: '1BHK', optionPrice: 0 }, // Additional price for this option
              { name: '2BHK', optionPrice: 500 }, // Additional price for this option
              { name: '3BHK', optionPrice: 1000 }, // Additional price for this option
              { name: '4BHK', optionPrice: 1500 }, // Additional price for this option
            ]
          },
          {
            id: 'floors',
            name: 'Floors',
            options: [
              { name: '1 Floor', optionPrice: 0 }, // Additional price for this option
              { name: '2 Floors', optionPrice: 500 }, // Additional price for this option
              { name: '3 Floors', optionPrice: 1000 }, // Additional price for this option
            ]
          }
        ],
      },
      {
        categoryName: 'Bathroom Cleaning',
        basePrice: 1000, // Base price
        details: [
          {
            id: 'bathroomCount',
            name: 'Number of Bathrooms',
            options: [
              { name: '1 Bathroom', optionPrice: 0 }, // Additional price for this option
              { name: '2 Bathrooms', optionPrice: 500 }, // Additional price for this option
              { name: '3 Bathrooms', optionPrice: 1000 }, // Additional price for this option
              { name: '4 Bathrooms', optionPrice: 1500 }, // Additional price for this option
            ]
          }
        ]
      },
      {
        categoryName: 'Dusting',
        basePrice: 1000, // Base price
        details: [
          {
            id: 'dustingDuration',
            name: 'Dusting Duration',
            options: [
              { name: '30 Minutes', optionPrice: 0 }, // Additional price for this option
              { name: '1 Hour', optionPrice: 500 }, // Additional price for this option
              { name: '1.5 Hours', optionPrice: 1000 }, // Additional price for this option
              { name: '2 Hours', optionPrice: 1500 }, // Additional price for this option
            ]
          }
        ]
      },
      {
        categoryName: 'Dish Washing',
        basePrice: 1000, // Base price
        details: [
          {
            id: 'dishWasingPeopleCount',
            name: 'Number of People',
            options: [
              { name: '1 Person', optionPrice: 0 }, // Additional price for this option
              { name: '2 People', optionPrice: 500 }, // Additional price for this option
              { name: '3 People', optionPrice: 700 }, // Additional price for this option
              { name: '4 People', optionPrice: 800 }, // Additional price for this option
              { name: '5-6 People', optionPrice: 1000 }, // Additional price for this option
              { name: '7-8 People', optionPrice: 1200 }, // Additional price for this option
              { name: '8+ People', optionPrice: 1500 }, // Additional price for this option
            ]
          },
          {
            id: 'dishWashingCount',
            name: 'How many times a day?',
            options: [
              { name: 'Once', optionPrice: 0 }, // Additional price for this option
              { name: 'Twice', optionPrice: 500 }, // Additional price for this option
            ]
          },
          {
            id: 'hasDishWasher',
            name: 'Do you have a Dish Washer',
            options: [
              { name: 'Yes', optionPrice: -500 }, // Additional price for this option
              { name: 'No', optionPrice: 0 }, // No additional price for this option
            ]
          }
        ]
      }, 
    ],
  },
  {
    id: 2,
    title: "Cook",
    img: cook,
    desc: "Need a break from cooking? Hire a personal chef to whip up delicious meals tailored to your taste buds and dietary needs. Bon appétit!",
    category: [
      {
        categoryName: 'Cooking',
        basePrice: 1000,
        details: [
          {
            id: 'cookingPeopleCount',
            name: 'Number of People',
            options: [
              { name:'1 Person', optionPrice: 0 }, 
              { name: '2 People', optionPrice: 500 }, 
              { name: '3 People', optionPrice: 1000 },
              { name: '4 People', optionPrice: 1500 },
              { name: '5 People', optionPrice: 2000 },
              { name: '6 People', optionPrice: 2500 },
              { name: '7 People', optionPrice: 3000 },
              { name: '8 People', optionPrice: 3500 },
            ]
          },
          {
            id: 'mealCount',
            name: 'How many meals a day',
            options: [
              { name:'1 Meal', optionPrice: 0 }, 
              { name: '2 Meals', optionPrice: 500 }, 
              { name: '3 Meals', optionPrice: 1000 },
            ]
          },
          {
            id: 'isVeg',
            name: 'Veg/Non-Veg Food',
            options: [
              { name:'Veg Only', optionPrice: 0 }, 
              { name: 'Veg+Non-Veg', optionPrice: 500 }, 
            ]
          }
        ],
      },
    ]
  },
  {
    id: 3,
    title: "Baby Sitter",
    img: babySitting,
    desc: "Need a break from parenting? Hire a skilled babysitter to provide expert care and attention to your little ones. Enjoy peace of mind knowing your children are in safe and capable hands. Parenting break, engaged!",
    category: [
      {
        categoryName: '0-2 Months',
        basePrice: 10000,
        details: [
          {
            id: 'hoursCount',
            name: 'Number of Hours',
            options: [
              { name:'4 Hours', optionPrice: 0 }, 
              { name: '6 Hours', optionPrice: 2000 }, 
              { name: '8 Hours', optionPrice: 4000 },
              { name: '10 Hours', optionPrice: 6000 },
              { name: '12 Hours', optionPrice: 8000 },
              { name: '24 hours', optionPrice: 17999 },
            ]
          },
        ],
      },
      {
        categoryName: '2-12 Months',
        basePrice: 6000,
        details: [
          {
            id: 'hoursCount',
            name: 'Number of Hours',
            options: [
              { name:'4 Hours', optionPrice: 0 }, 
              { name: '6 Hours', optionPrice: 1000 }, 
              { name: '8 Hours', optionPrice: 2000 },
              { name: '10 Hours', optionPrice: 3000 },
              { name: '12 Hours', optionPrice: 4000 },
            ]
          },
        ],
      },
      {
        categoryName: '1-2 Years',
        basePrice: 6500,
        details: [
          {
            id: 'hoursCount',
            name: 'Number of Hours',
            options: [
              { name:'4 Hours', optionPrice: 0 }, 
              { name: '6 Hours', optionPrice: 1500 }, 
              { name: '8 Hours', optionPrice: 2500 },
              { name: '10 Hours', optionPrice: 3500 },
              { name: '12 Hours', optionPrice: 4500 },
            ]
          },
        ],
      },
      {
        categoryName: '2-4 Years',
        basePrice: 7200,
        details: [
          {
            id: 'hoursCount',
            name: 'Number of Hours',
            options: [
              { name:'4 Hours', optionPrice: 0 }, 
              { name: '6 Hours', optionPrice: 1000 }, 
              { name: '8 Hours', optionPrice: 2000 },
              { name: '10 Hours', optionPrice: 3000 },
              { name: '12 Hours', optionPrice: 4000 },
            ]
          },
        ],
      },
      {
        categoryName: 'More than 4 Years',
        basePrice: 8000,
        details: [
          {
            id: 'hoursCount',
            name: 'Number of Hours',
            options: [
              { name:'4 Hours', optionPrice: 0 }, 
              { name: '6 Hours', optionPrice: 2000 }, 
              { name: '8 Hours', optionPrice: 5000 },
              { name: '10 Hours', optionPrice: 7000 },
              { name: '12 Hours', optionPrice: 11000 },
            ]
          },
        ],
      },
    ]
  },
  {
    id: 4,
    title: 'Dish Washing',
    img: dishWashing,
    desc: "",
    category: [
      {
        categoryName: 'Dish Washing',
        basePrice: 1000, // Base price
        details: [
          {
            id: 'dishWasingPeopleCount',
            name: 'Number of People',
            options: [
              { name: '1 Person', optionPrice: 0 }, // Additional price for this option
              { name: '2 People', optionPrice: 500 }, // Additional price for this option
              { name: '3 People', optionPrice: 700 }, // Additional price for this option
              { name: '4 People', optionPrice: 800 }, // Additional price for this option
              { name: '5-6 People', optionPrice: 1000 }, // Additional price for this option
              { name: '7-8 People', optionPrice: 1200 }, // Additional price for this option
              { name: '8+ People', optionPrice: 1500 }, // Additional price for this option
            ]
          },
          {
            id: 'dishWashingCount',
            name: 'How many times a day?',
            options: [
              { name: 'Once', optionPrice: 0 }, // Additional price for this option
              { name: 'Twice', optionPrice: 500 }, // Additional price for this option
            ]
          },
          {
            id: 'hasDishWasher',
            name: 'Do you have a Dish Washer',
            options: [
              { name: 'Yes', optionPrice: -500 }, // Additional price for this option
              { name: 'No', optionPrice: 0 }, // No additional price for this option
            ]
          }
        ]
      }, 
    ],
  },
  {
    id: 5,
    title: "Laundry",
    img: laundry,
    desc: "Need help with your laundry? Look no further! Our laundry service is here to make your life easier and your clothes cleaner than ever. We know how daunting it can be to tackle that mountain of dirty laundry, so let us take care of it for you. Whether it’s your favorite jeans that need a refresh or a pile of bedsheets that need a good wash, we’ve got you covered.",
    category: [
      {
        categoryName: 'Laundry',
        basePrice: 400,
        details: [
          {
            id: 'laundryPeopleCount',
            name: 'Number of People',
            options: [
              { name:'1-2 People', optionPrice: 0 }, 
              { name: '3-4 People', optionPrice: 500 }, 
              { name: '5-6 People', optionPrice: 1000 },
              { name: '7 People', optionPrice: 1500 },
            ]
          },
          {
            id: 'hasWashingMachine',
            name: 'Do you have a Washing Machine?',
            options: [
              { name: 'Yes', optionsPrice: 0 },
              { name: 'No', optionsPrice: 1000 }
            ]
          }
          
        ],
      },
    ]
  },
  {
    id: 6,
    title: "All Rounder",
    img: "https://th.bing.com/th/id/OIG.DCVf1Wt9d.ZwrK3_9kXx?pid=ImgGn",
    desc: "",
    category: [
      {
        categoryName: 'All Rounder (4 Hours)',
        basePrice: 6999,
        details: [
          {
            id: 'allRounerPeopleCount',
            name: 'Number of People',
            options: [
              { name:'1-2 People', optionPrice: 0 }, 
              { name: '3-4 People', optionPrice: 500 }, 
              { name: '5-6 People', optionPrice: 1000 },
              { name: '7 People', optionPrice: 1500 },
            ]
          },         
        ],
      },
      {
        categoryName: 'All Rounder (6 Hours)',
        basePrice: 7999,
        details: [
          {
            id: 'allRounerPeopleCount',
            name: 'Number of People',
            options: [
              { name:'1-2 People', optionPrice: 0 }, 
              { name: '3-4 People', optionPrice: 500 }, 
              { name: '5-6 People', optionPrice: 1000 },
              { name: '7 People', optionPrice: 1500 },
            ]
          },         
        ],
      },
      {
        categoryName: 'All Rounder (8 Hours)',
        basePrice: 9999,
        details: [
          {
            id: 'allRounerPeopleCount',
            name: 'Number of People',
            options: [
              { name:'1-2 People', optionPrice: 0 }, 
              { name: '3-4 People', optionPrice: 500 }, 
              { name: '5-6 People', optionPrice: 1000 },
              { name: '7 People', optionPrice: 1500 },
            ]
          },         
        ],
      },
    ]
  },
  {
    id: 7,
    title: "Car Washing",
    img: "https://th.bing.com/th/id/OIG.sCkuFpiq.Vu.do5Zotfu?pid=ImgGn",
    desc: "Had enough of spending your weekends scrubbing grime off your car's surfaces? Look no further! Our dedicated team is here to make your vehicle shine, inside and out. Sit back and savor the spotless results while we handle the hard work. Car cleanliness, achieved!",
    category: [
      {
        categoryName: 'Car Washing',
        basePrice: 600,
        details: [
          {
            id: 'typeOfCar',
            name: 'Which type of Car do you have?',
            options: [
              { name: 'Hatchback', optionPrice: 0 }, 
              { name: 'Sedan', optionPrice: 100 }, 
              { name: 'SUV', optionPrice: 200 },
            ]
          },          
        ],
      },
    ]
  },
  {
    id: 8,
    title: "Gardener",
    img: "https://th.bing.com/th/id/OIG.iIFRmtCcKnmIF72mbQNw?pid=ImgGn",
    desc: "",
    category: [
      {
        categoryName: 'Gardener',
        basePrice: 300,
        details: [
          {
            id: 'hoursCount',
            name: 'For How Long',
            options: [
              { name:'3 Hours', optionPrice: 0 }, 
              { name: '6 Hours', optionPrice: 200 }, 
              { name: '9 Hours', optionPrice: 400 },
            ]
          },          
        ],
      },
    ]
  },
]

export const choose = [
  {
    id: 1,
    title: "Reliable",
    img: "https://icon-library.com/images/approved-icon-png/approved-icon-png-15.jpg",
    desc: "We screen every worker diligently, ensuring they're trustworthy and responsible. Our rigorous vetting process guarantees your security when they enter your home, providing you with peace of mind.",
  },
  {
    id: 2,
    title: "Most Affordable",
    img: "https://cdn-icons-png.flaticon.com/512/6507/6507168.png",
    desc: "We take pride in providing the most competitive pricing for our services without compromising on quality. Our commitment to affordability ensures that you receive top-notch service at a price that won't break the bank, making your satisfaction our top priority.",
  },
  {
    id: 3,
    title: "Customer Support",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmEijXDywrRfYUNFFXEP8DNeET63qY9RyFg&usqp=CAU",
    desc: "Don't hesitate to reach out to our dedicated Customer Service team for any questions or concerns you may have. We're here to assist you and provide the information you need, ensuring a seamless experience with our services.",
  },
  {
    id: 4,
    title: "Easy Worker Replacement",
    img: "https://th.bing.com/th/id/OIG.9IQ4h2DfBYcw0SRoxSw3?pid=ImgGn",
    desc: "If you're ever unsatisfied with your assigned worker, simply reach out to us, and we'll promptly arrange a hassle-free replacement to ensure your complete satisfaction.Not satisfied with your worker? Contact us to easily get a replacement.",
  }
]

export const sliderItems = [
  {
    id: 1,
    img: userImage,
    name: "Divya Raghav",
    desc: "Chamak Saathi has made my life easier. I can now work without any stress of cleaning my home.",
    // bg: "f5fafd",
  },
  {
    id: 2,
    img: userImage,
    name: "Piyush",
    desc: "Chamak Saathi has made my life easier. I can now work without any stress of cleaning my home.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: kiran,
    name: "Kiran Thakur",
    desc: "Chamak Saathi has made my life easier. I can now work without any stress of cleaning my home.",
    bg: "fbf0f4",
  },
  {
    id: 4,
    img: ayush,
    name: "Ayush Verma",
    desc: "Chamak Saathi has made my life easier. I can now work without any stress of cleaning my home.",
    bg: "fbf0f4",
  },
  {
    id: 5,
    img: kanika,
    name: "Kanika Sharma",
    desc: "This website is a game-changer! Easy booking, skilled professionals, and a sigh of relief for busy families like ours. Highly recommended!"
  },
];