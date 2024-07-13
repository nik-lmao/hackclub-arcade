const adjectives = [
    "Able", "Absolute", "Academic", "Acceptable", "Acclaimed", "Accomplished", "Accurate", "Active", "Actual", 
    "Adept", "Admirable", "Adolescent", "Adorable", "Adventurous", "Affectionate", "Agile", "Agreeable", "Alert", 
    "Alive", "Alluring", "Amazing", "Ambitious", "Ample", "Amusing", "Ancient", "Angelic", "Animated", "Annual", 
    "Anxious", "Appetizing", "Appreciative", "Artistic", "Astonishing", "Athletic", "Attentive", "Attractive", 
    "Auspicious", "Authentic", "Avid", "Awake", "Aware", "Awesome", "Balanced", "Beautiful", "Beneficial", 
    "Blissful", "Bold", "Brave", "Bright", "Brilliant", "Busy", "Calm", "Capable", "Carefree", "Careful", "Caring", 
    "Casual", "Cautious", "Celebrated", "Charming", "Cheerful", "Cheery", "Chic", "Chivalrous", "Clever", "Colorful", 
    "Comfortable", "Commanding", "Compassionate", "Competent", "Complete", "Composed", "Confident", "Considerate", 
    "Constant", "Content", "Courageous", "Courteous", "Creative", "Critical", "Cultured", "Curious", "Cute", "Dainty", 
    "Daring", "Dazzling", "Decisive", "Dedicated", "Delicate", "Delicious", "Delightful", "Dependable", "Detailed", 
    "Determined", "Devoted", "Dignified", "Diligent", "Diverse", "Divine", "Dominant", "Dramatic", "Dutiful", 
    "Dynamic", "Eager", "Earnest", "Easygoing", "Eclectic", "Effective", "Efficient", "Elegant", "Enchanting", 
    "Encouraging", "Endearing", "Energetic", "Engaging", "Enigmatic", "Enlightened", "Enthusiastic", "Enticing", 
    "Excellent", "Exciting", "Exemplary", "Exotic", "Experienced", "Expert", "Exquisite", "Extraordinary", "Fabulous", 
    "Fair", "Faithful", "Famous", "Fancy", "Fantastic", "Fascinating", "Fashionable", "Fearless", "Feisty", "Fertile", 
    "Fervent", "Fiery", "Fine", "Flamboyant", "Flawless", "Flexible", "Flourishing", "Focused", "Fond", "Foolproof", 
    "Forgiving", "Formidable", "Forthright", "Frank", "Friendly", "Fulfilled", "Fun", "Funny", "Generous", "Genuine", 
    "Gifted", "Glamorous", "Gleaming", "Glorious", "Gorgeous", "Graceful", "Gracious", "Grateful", "Great", 
    "Gregarious", "Grounded", "Handsome", "Happy", "Hardy", "Harmonious", "Healthy", "Hearty", "Heavenly", "Helpful", 
    "Heroic", "Honest", "Hopeful", "Hospitable", "Humble", "Humorous", "Idealistic", "Imaginative", "Impressive", 
    "Incredible", "Independent", "Industrious", "Influential", "Ingenious", "Innocent", "Innovative", "Inquisitive", 
    "Insightful", "Inspiring", "Intelligent", "Intuitive", "Inventive", "Invigorating", "Jovial", "Joyful", "Jubilant", 
    "Judicious", "Keen", "Kind", "Knowledgeable", "Laudable", "Lavish", "Learned", "Legendary", "Lively", "Logical", 
    "Lovable", "Loyal", "Luminous", "Magical", "Magnanimous", "Magnificent", "Majestic", "Marvelous", "Masculine", 
    "Mature", "Meaningful", "Mellow", "Melodic", "Memorable", "Merciful", "Merry", "Meticulous", "Mighty", "Mindful", 
    "Miraculous", "Modern", "Modest", "Motivated", "Musical", "Natural", "Neat", "Noble", "Notable", "Noteworthy", 
    "Nurturing", "Objective", "Observant", "Optimistic", "Orderly", "Original", "Outstanding", "Outgoing", 
    "Passionate", "Patient", "Peaceful", "Perceptive", "Perfect", "Persistent", "Philanthropic", "Philosophical", 
    "Picturesque", "Playful", "Plucky", "Poised", "Polished", "Polite", "Popular", "Positive", "Powerful", 
    "Practical", "Precious", "Precise", "Principled", "Productive", "Profound", "Progressive", "Prolific", 
    "Prominent", "Prompt", "Prosperous", "Protective", "Proud", "Prudent", "Pure", "Purposeful", "Qualified", 
    "Radiant", "Rational", "Reassuring", "Receptive", "Refined", "Reflective", "Reliable", "Remarkable", "Resolute", 
    "Resourceful", "Respected", "Respectful", "Responsible", "Responsive", "Revered", "Rich", "Righteous", "Robust", 
    "Romantic", "Rugged", "Sacred", "Safe", "Sage", "Sane", "Satisfactory", "Satisfied", "Scholarly", "Scrupulous", 
    "Secure", "Selective", "Self-assured", "Self-disciplined", "Self-reliant", "Selfless", "Sensitive", "Sensual", 
    "Serene", "Sharp", "Shrewd", "Sincere", "Skilled", "Sleek", "Sociable", "Solemn", "Sophisticated", "Sparkling", 
    "Special", "Spectacular", "Spirited", "Splendid", "Spontaneous", "Stable", "Stately", "Steadfast", "Steady", 
    "Stimulating", "Strategic", "Strong", "Studious", "Stunning", "Stupendous", "Stylish", "Suave", "Successful", 
    "Sufficient", "Superb", "Supportive", "Supreme", "Surefooted", "Surprising", "Sustained", "Sympathetic", 
    "Talented", "Tasteful", "Tenacious", "Tender", "Terrific", "Thorough", "Thoughtful", "Thrifty", "Tidy", 
    "Tireless", "Tolerant", "Tough", "Tranquil", "Trustworthy", "Truthful", "Ultimate", "Unbiased", "Uncommon", 
    "Understanding", "Unique", "United", "Universal", "Unselfish", "Upbeat", "Uplifting", "Valiant", "Valuable", 
    "Venerable", "Vibrant", "Victorious", "Vigilant", "Virtuous", "Vivacious", "Vivid", "Warm", "Watchful", "Wealthy", 
    "Whimsical", "Wholehearted", "Wise", "Witty", "Wonderful", "Worthy", "Youthful", "Zealous"
];

const nouns = [
    "Parrot", "Ostrich", "Tent", "Jewel", "Pancake", "Ocean", "Balcony", "Alarm", "Teacher", "Seashell", 
    "Rice", "Astronaut", "Goggles", "Kiss", "Station", "Chisel", "Ruler", "Cat", "Picnic", "Song", "Sailor", 
    "Frog", "Teapot", "Colander", "Stream", "Rhino", "Chemistry", "Sun", "Tablet", "School", "Rat", "Piano", 
    "Silk", "Glasses", "Steel", "Pillow", "Fishing", "Snow", "Laboratory", "Friend", "Cookie", "Badge", "Salt", 
    "Guitar", "Body", "Soap", "Pizza", "Ring", "Lime", "Acorn", "Garden", "Bookcase", "Cow", "Spring", "Nettle", 
    "Oar", "Bread", "Constellation", "Exercise", "Computer", "Barber", "Birth", "Axe", "Lizard", "Blender", "Hat", 
    "Finger", "Plaster", "Branch", "Tractor", "Puppy", "Drum", "Leaf", "Bus", "Diet", "Flag", "Thunder", "Chick", 
    "Avocado", "Camel", "Pump", "Army", "Cliff", "Flame", "Envelope", "Stool", "Screw", "Cupboard", "Lamp", "Beard", 
    "Skater", "Cake", "Coconut", "Fireplace", "Head", "Back", "Torch", "Globe", "Library", "Ambulance", "Truck", 
    "Milk", "Radish", "Planet", "Giraffe", "Igloo", "Engine", "Pine", "Reed", "Sandwich", "Van", "Car", "Mustard", 
    "Ant", "Bone", "City", "Raisin", "Neck", "Champion", "Syrup", "Street", "Thistle", "Bucket", "Linen", 
    "Paintbrush", "Gear", "Banana", "Science", "Otter", "Race", "Plant", "Icicle", "Pet", "Celery", "Music", 
    "Mirror", "Taxi", "Pocket", "Basket", "Leak", "Bowl", "Oyster", "Knee", "Toast", "Bonfire", "Telephone", 
    "Field", "Arrow", "Tiger", "Almond", "Crater", "Coast", "Swan", "Driver", "Sweater", "Abacus", "Dove", 
    "Shovel", "Board", "Scarf", "Rhinoceros", "Egg", "Dinner", "Crow", "Doll", "Hydrant", "Fridge", "Sausage", 
    "Curtain", "Kitten", "Bunny", "Bear", "Quarter", "Frogman", "Fog", "Geology", "Generator", "Wrench", 
    "Stocking", "Ginger", "Cathedral", "Summer", "Goat", "Baton", "Night", "Receipt", "Oak", "Kettle", "Pickle", 
    "Umbrella", "Window", "Battle", "Hive", "Passenger", "Toe", "Cello", "Ox", "Dart", "Aquarium", "Drawer", 
    "Pipe", "Beehive", "Poison", "Seahorse", "Skateboard", "Ball", "Dress", "Snail", "Chicken", "Dream", "Grain", 
    "Tulip", "Factory", "Chalk", "Helmet", "Juggler", "Tray", "Barrel", "Bull", "Oven", "Apron", "Golf", "Jelly", 
    "Rainbow", "Squid", "Life", "Lumber", "Earth", "Box", "Fig", "Traffic", "Beaver", "Bathtub", "Church", "Pen", 
    "Juice", "Chessboard", "Carpet", "Birch", "Hair", "Lettuce", "Match", "Tooth", "Puppet", "Doghouse", "Brush", 
    "Tie", "Flour", "Bath", "Meat", "Meadow", "Bell", "Hammock", "Leather", "Chime", "Smoke", "Glacier", "Compass", 
    "Slope", "Rabbit", "Eyebrow", "Calculator", "Painter", "Boy", "Pin", "Prize", "Crayon", "Book", "Flashlight", 
    "Soldier", "Fence", "Band", "Basement", "Bottle", "Koala", "Crocodile", "Cheeseburger", "Bank", "Century", 
    "Brother", "Accordion", "Napkin", "Bleach", "Rail", "Slide", "Cucumber", "Printer", "Bible", "Reactor", 
    "Chimpanzee", "Chocolate", "Yak", "Food", "Cone", "Cart", "Customer", "Air", "Sleeve", "Silver", "Disk", 
    "Gull", "Restaurant", "Ship", "Balance", "Eye", "Octopus", "Toaster", "Sandals", "Buffalo", "Explosion", 
    "Jungle", "Fork", "Jump", "Fly", "Hippopotamus", "Whale", "Hog", "Centaur", "Pirate", "Desk", "Pan", "Flute", 
    "Blouse", "Exit", "Carrot", "Palm", "Stadium", "Forest", "Rake", "Table", "Cabin", "Spider", "Oatmeal", 
    "Wheelbarrow", "Bubble", "Police", "Room", "Eggplant", "Map", "Wolf", "Parachute", "Post", "Sandcastle", 
    "Snowman", "Skate", "Boat", "Evening", "Communication", "Nest", "Marker", "Corn", "Jury", "Face", "Farm", 
    "Oasis", "Dentist", "Sail", "Cheese", "Beach", "Astronomy", "Chairlift", "Knot", "Carve", "Exhibition", 
    "Dragonfly", "Baker", "Farmer", "Stamp", "Cage", "Door", "Refrigerator", "Beachball", "Snake", "Closet", 
    "Orange", "Volcano", "Garnet", "Skirt", "Charger", "Belt", "Address", "Earthquake", "Helium", "Revolver", 
    "Concert", "Rug", "Broom", "Rocket", "Zebra", "Pigeon", "Mountain", "Bean", "Peach", "Tail", "Sunglasses", 
    "Fruit", "Turtle", "Flamingo", "Festival", "Lemonade", "Container", "Meteor", "Brain", "Point", "Penguin", 
    "Toothpaste", "Luggage", "Page", "Chip", "Plank", "Jaguar", "Tap", "Clock", "Candy", "King", "Bacon", 
    "Perfume", "Pumpkin", "Train", "Giant", "Feather", "Game", "Chalkboard", "Medal", "Lawn", "Pebble", "Beetle", 
    "Peasant", "Cloud", "Sink", "Shark", "Queen", "Gazelle", "Quail", "Chair", "Baseball", "Tree", "Stone", "Model", 
    "Lamb", "Radar", "Lung", "Bicycle", "Pants", "Plow", "Bison", "Nail", "Dog", "Triangle", "Notebook", "Quicksand", 
    "Circus", "Foxglove", "Shower", "Hamster", "Star", "Earring", "Pencil", "Pistol", "Pretzel", "Candle", "Maple", 
    "Potato", "Sofa", "Temple", "Popcorn", "Yacht", "Gymnast", "Shoes", "Leaflet", "Hen", "Lens", "Paper", 
    "Cinnamon", "Lemon", "Cup", "Hand", "Burger", "Pineapple", "Mailbox", "Card", "Discovery", "Eraser", "Wallet", 
    "Polish", "Comic", "Shampoo", "Fox", "Butterfly", "Barn", "Log", "Square", "Olive", "Lightbulb", "Seagull", 
    "Pail", "Spoon", "Fish", "Circle", "House", "Ribbon", "Lunch", "Path", "Blackboard", "Berry", "Memory", 
    "Soil", "Lake", "Shelf", "Cord", "Arm", "Skull", "Diamond", "Harp", "Throne", "Glue", "Cabbage", "Tomato", 
    "Squirrel", "Bridge", "Bag", "Hill", "Hood", "Saw", "Hippo", "Shoe", "Cradle", "Moon", "Toilet", "Hatchet", 
    "Button", "Crystal", "Rose", "Sled", "Owl", "Archer", "Roof", "Bill", "Anchor", "Dinosaur", "Bed", "Oil", 
    "Shoelace", "Birthday", "Claw", "Mushroom", "Mouse", "Tank", "Root", "Acrobat", "Lotion", "Robot", "Ticket", 
    "Jockey", "Brake", "Paint", "Pot", "Castle", "Tower", "Comet", "Microscope", "Grape", "Nectar", "Apartment", 
    "Camera", "Present", "Sea", "Garage", "Tricycle", "Hobby", "Pilot", "Clover", "Fireman", "Fishbowl", "Grapes", 
    "Crab", "Coat", "Sock", "Alligator", "Blanket", "Scale", "Jellyfish", "Flowerpot", "River", "Ski", "Mug", 
    "Eskimo", "Digital", "Stem", "Bite", "Toothbrush", "Milkshake", "Sky", "Onion", "Cyclist", "Rye", "Saddle", 
    "Monkey", "Island", "Bench", "Light", "Prison", "Nut", "Lollipop", "Ping", "Coach", "Flower", "Copper", 
    "Scissors", "Spy", "Gardenia", "Basketball", "Fortress", "Record", "Backpack", "Tornado", "Bay", "Gorilla", 
    "Geologist", "Couch", "Purse", "Lobster", "Gym", "Lace", "Boot", "Ash", "Bakery", "Iceberg", "Horse", "Pepper", 
    "Fire", "Rattle", "Bomb", "Cowboy", "Admiral", "Duck", "Deer", "Chandelier", "Panda", "Parcel", "Stitch", 
    "Sugar", "Angel", "Knife", "Panther", "Motorcycle", "Churchyard", "Kangaroo", "Lock", "Sneeze", "Message", 
    "Shrimp", "Apricot", "Balloon", "Key", "Lion", "Suit", "Violin", "Family", "Mosquito", "Ghost", "Vase", 
    "Fan", "Mango", "Pond", "Eagle", "Kite", "Doctor", "Leg", "Raincoat", "Bulb", "Tortoise", "Plate", "Orchid", 
    "Peanut", "Toy", "Port", "Pyramid", "Camp", "Reindeer", "Direction", "Apple", "Lip", "Baby", "Television", 
    "Bee", "Magazine", "Strawberry", "Airport", "Lunchbox", "Football", "Cactus", "Bandage", "Sunflower", "Cap", 
    "Elastic", "Scorpion", "Hammer", "Internet", "Bride", "Brick", "Palace", "Peacock", "Ice", "Pear", "Elephant", 
    "Jacket", "Daisy", "Hook", "Crane", "Dragon", "Bulldozer", "Sand", "Storm", "Towel", "Gate", "Ladybug", 
    "Scooter", "Mask", "Bead", "Hut", "Airplane", "Flannel", "Helicopter", "Moat"
];


document.getElementById("generate").onclick = function() {

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 101);

    const username = randomAdjective + randomNoun + randomNumber;


    const announceElement = document.getElementById("announce");
    announceElement.style.color = "#666";


    const usernameElement = document.getElementById("username");
    usernameElement.innerHTML = username;
    usernameElement.style.color = "black";
    usernameElement.style.userSelect = "text";

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
};