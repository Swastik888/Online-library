const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "A practical guide to building good habits and breaking bad ones through small daily improvements."
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "Learn how to write readable, maintainable, and professional-quality code."
    },
    {
        id: 3,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        category: "Programming",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
        description: "Classic software engineering techniques for becoming a better programmer."
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        category: "Fiction",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
        description: "A young wizard begins his magical journey at Hogwarts School of Witchcraft and Wizardry."
    },
    {
        id: 5,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Novel",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
        description: "A timeless novel about following your dreams and discovering your purpose."
    },
    {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
        description: "A bestselling book on financial literacy and wealth creation."
    },
    {
        id: 7,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self Help",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        description: "One of the most influential books on success and personal achievement."
    },
    {
        id: 8,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "History",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400",
        description: "An engaging history of humankind from ancient civilizations to modern society."
    },
    {
        id: 9,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Self Help",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400",
        description: "Learn techniques to focus deeply and accomplish meaningful work."
    },
    {
        id: 10,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Finance",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "Timeless lessons about wealth, investing, and financial decision-making."
    },
    {
        id: 11,
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        category: "Fantasy",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        description: "Bilbo Baggins embarks on an unforgettable adventure with dwarves and a wizard."
    },
    {
        id: 12,
        title: "1984",
        author: "George Orwell",
        category: "Sci-Fi",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "A dystopian novel about surveillance, control, and the loss of freedom."
    },
    {
        id: 13,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "A powerful story of justice, compassion, and racial inequality."
    },
    {
        id: 14,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: "Mystery",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400",
        description: "A psychological thriller filled with suspense and unexpected twists."
    },
    {
        id: 15,
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "Business",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
        description: "A guide for entrepreneurs to build successful businesses through continuous innovation."
    },
    {
        id: 16,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        category: "Biography",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
        description: "The official biography of Apple's co-founder, Steve Jobs."
    },
    {
        id: 17,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        category: "Self Help",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        description: "Discover the importance of living fully in the present moment."
    },
    {
        id: 18,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        category: "Mystery",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        description: "A fast-paced mystery that combines art, history, and secret societies."
    },
    {
        id: 19,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Programming",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "A comprehensive reference for algorithms and data structures."
    },
    {
        id: 20,
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        category: "Finance",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400",
        description: "A classic investment guide emphasizing long-term value investing."
    },

    {
        id: 21,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "A timeless romance exploring love, pride, and social expectations."
    },
    {
        id: 22,
        title: "Dracula",
        author: "Bram Stoker",
        category: "Horror",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
        description: "The legendary vampire novel that inspired generations of horror stories."
    },
    {
        id: 23,
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        category: "Adventure",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "A thrilling pirate adventure filled with hidden treasure and danger."
    },
    {
        id: 24,
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "Philosophy",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
        description: "A collection of Stoic wisdom from the Roman emperor Marcus Aurelius."
    },
    {
        id: 25,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
        description: "An accessible explanation of space, time, black holes, and the universe."
    },
    {
        id: 26,
        title: "The Art of War",
        author: "Sun Tzu",
        category: "History",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        description: "Ancient military strategies that are still applied in leadership and business."
    },
    {
        id: 27,
        title: "The Design of Everyday Things",
        author: "Don Norman",
        category: "Design",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400",
        description: "Learn the principles behind user-friendly product design."
    },
    {
        id: 28,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        category: "Programming",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400",
        description: "A deep dive into JavaScript concepts for modern developers."
    },
    {
        id: 29,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        description: "A classic novel about wealth, love, and the American Dream."
    },
    {
        id: 30,
        title: "Dune",
        author: "Frank Herbert",
        category: "Sci-Fi",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
        description: "An epic science fiction saga set on the desert planet Arrakis."
    },
    {
        id: 31,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        category: "Mystery",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "A gripping mystery involving family secrets and investigative journalism."
    },
    {
        id: 32,
        title: "The Fault in Our Stars",
        author: "John Green",
        category: "Romance",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
        description: "A touching story of love, hope, and courage."
    },
    {
        id: 33,
        title: "The Shining",
        author: "Stephen King",
        category: "Horror",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "A psychological horror novel set in an isolated haunted hotel."
    },
    {
        id: 34,
        title: "Into the Wild",
        author: "Jon Krakauer",
        category: "Adventure",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
        description: "The true story of a young man's journey into the Alaskan wilderness."
    },
    {
        id: 35,
        title: "The Republic",
        author: "Plato",
        category: "Philosophy",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
        description: "A foundational work discussing justice, politics, and the ideal society."
    },
    {
        id: 36,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "Science",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        description: "An influential book explaining evolution through the perspective of genes."
    },
    {
        id: 37,
        title: "Zero to One",
        author: "Peter Thiel",
        category: "Business",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400",
        description: "Insights on innovation and building companies that create something new."
    },
    {
        id: 38,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        category: "Programming",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400",
        description: "A concise guide to the most powerful features of JavaScript."
    },
    {
        id: 39,
        title: "The Chronicles of Narnia",
        author: "C. S. Lewis",
        category: "Fantasy",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        description: "A magical fantasy adventure through the enchanted land of Narnia."
    },
    {
        id: 40,
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        category: "Biography",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
        description: "The inspiring diary of Anne Frank during World War II."
    },

    {
        id: 41,
        title: "React Explained",
        author: "Zac Gordon",
        category: "Programming",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        description: "A beginner-friendly guide to building modern web applications using React."
    },
    {
        id: 42,
        title: "Learning Node.js",
        author: "Shelley Powers",
        category: "Programming",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        description: "Understand backend development with Node.js and Express."
    },
    {
        id: 43,
        title: "MongoDB Basics",
        author: "Kristina Chodorow",
        category: "Programming",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        description: "Learn NoSQL database concepts using MongoDB."
    },
    {
        id: 44,
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        category: "Technology",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
        description: "A comprehensive introduction to Artificial Intelligence."
    },
    {
        id: 45,
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        category: "Technology",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
        description: "Practical machine learning using Python, Scikit-Learn, and TensorFlow."
    },
    {
        id: 46,
        title: "Cyber Security Essentials",
        author: "Charles Brooks",
        category: "Technology",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400",
        description: "Learn the foundations of cybersecurity and digital safety."
    },
    {
        id: 47,
        title: "Database System Concepts",
        author: "Abraham Silberschatz",
        category: "Programming",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        description: "An excellent guide to relational databases and SQL."
    },
    {
        id: 48,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        category: "Programming",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        description: "A modern introduction to JavaScript programming."
    },
    {
        id: 49,
        title: "The Martian",
        author: "Andy Weir",
        category: "Sci-Fi",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
        description: "A stranded astronaut struggles to survive on Mars."
    },
    {
        id: 50,
        title: "Project Hail Mary",
        author: "Andy Weir",
        category: "Sci-Fi",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
        description: "A lone astronaut embarks on a mission to save humanity."
    },
    {
        id: 51,
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        category: "Fantasy",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "The legendary fantasy adventure of Frodo and the One Ring."
    },
    {
        id: 52,
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
        description: "Classic detective stories featuring Sherlock Holmes."
    },
    {
        id: 53,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        category: "Novel",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "A moving story of friendship, guilt, and redemption."
    },
    {
        id: 54,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "Historical Fiction",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
        description: "A touching story set during World War II narrated by Death."
    },
    {
        id: 55,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        category: "Self Help",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        description: "A refreshing approach to living a meaningful life."
    },
    {
        id: 56,
        title: "Ikigai",
        author: "Héctor García",
        category: "Self Help",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400",
        description: "Discover the Japanese philosophy of finding purpose in life."
    },
    {
        id: 57,
        title: "Think Like a Monk",
        author: "Jay Shetty",
        category: "Self Help",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description: "Practical wisdom inspired by the life of a monk."
    },
    {
        id: 58,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        category: "Business",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
        description: "Powerful habits that improve leadership and personal effectiveness."
    },
    {
        id: 59,
        title: "Start With Why",
        author: "Simon Sinek",
        category: "Business",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description: "Understand how great leaders inspire action through purpose."
    },
    {
        id: 60,
        title: "Can't Hurt Me",
        author: "David Goggins",
        category: "Motivation",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
        description: "An inspiring memoir about resilience, discipline, and mental toughness."
    }
];

export default books;

