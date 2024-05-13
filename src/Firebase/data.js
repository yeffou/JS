const firebase = require('firebase/app');
require('firebase/firestore');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_T6WhnLbrxMNCetV7SoVxeil_P7yun4c",
    authDomain: "um6p-c0b9d.firebaseapp.com",
    projectId: "um6p-c0b9d",
    storageBucket: "um6p-c0b9d.appspot.com",
    messagingSenderId: "282702760020",
    appId: "1:282702760020:web:be2185f5f89d51f63e45c1",
    measurementId: "G-1W0S2TRYH8"
  };

firebase.initializeApp(firebaseConfig);

// Access Firestore
const db = firebase.firestore();


const posts =[
    {
      "title": "The Art of Programming",
      "body": "Programming is both an art and a science. It requires creativity, problem-solving skills, and attention to detail...",
      "tags": ["programming", "coding", "software engineering"],
      "createdAt": "2022-01-01T12:00:00Z"
    },
    {
      "title": "Introduction to Machine Learning",
      "body": "Machine learning is a subset of artificial intelligence that focuses on the development of computer programs...",
      "tags": ["machine learning", "artificial intelligence", "data science"],
      "createdAt": "2022-01-02T10:30:00Z"
    },
    {
      "title": "The Power of Data Visualization",
      "body": "Data visualization is the graphical representation of information and data. By using visual elements like charts...",
      "tags": ["data visualization", "analytics", "visualization"],
      "createdAt": "2022-01-03T08:45:00Z"
    },
    {
      "title": "Web Development Best Practices",
      "body": "In web development, adhering to best practices is crucial for creating efficient, maintainable, and secure applications...",
      "tags": ["web development", "best practices", "frontend", "backend"],
      "createdAt": "2022-01-04T15:20:00Z"
    },
    {
      "title": "The Future of Artificial Intelligence",
      "body": "Artificial intelligence is rapidly evolving and has the potential to revolutionize various industries, from healthcare...",
      "tags": ["artificial intelligence", "future technology", "innovation"],
      "createdAt": "2022-01-05T09:00:00Z"
    },

    {
      "title": "Python Tips and Tricks",
      "body": "Python is a versatile and powerful programming language. Here are some tips and tricks to improve your Python coding skills...",
      "tags": ["python", "programming", "tips and tricks"],
      "createdAt": "2022-02-01T14:30:00Z"
    },
    {
      "title": "Getting Started with React.js",
      "body": "React.js is a popular JavaScript library for building user interfaces. Here's a beginner-friendly guide to getting started with React...",
      "tags": ["react.js", "javascript", "frontend development"],
      "createdAt": "2022-02-02T11:15:00Z"
    },{
        "title": "Exploring the Wonders of Machu Picchu",
        "body": "Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru. It is one of the most iconic archaeological sites in the world...",
        "tags": ["travel", "Peru", "Machu Picchu", "archaeology"],
        "createdAt": "2022-01-01T12:00:00Z"
      },
      {
        "title": "Discovering the Beauty of Santorini",
        "body": "Santorini is a stunning Greek island known for its whitewashed buildings, blue-domed churches, and breathtaking sunsets...",
        "tags": ["travel", "Greece", "Santorini", "island hopping"],
        "createdAt": "2022-01-02T10:30:00Z"
      },
      {
        "title": "Safari Adventure in the Serengeti",
        "body": "The Serengeti National Park in Tanzania is renowned for its vast savannahs, diverse wildlife, and epic annual migration of wildebeests and zebras...",
        "tags": ["travel", "Tanzania", "Serengeti", "safari"],
        "createdAt": "2022-01-03T08:45:00Z"
      },
  ]
  ;




// Function to add data to Firestore
const addpostsToFirestore = async (posts) => {
    try {
      // Loop through each post and add it to Firestore
      for (const post of posts) {
        // Use set with merge to add or update the document
        await db.collection('posts').add(post);
      }
      console.log("posts added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding posts to Firestore: ", error);
    }
  };
  
  // Call the function to add posts data to Firestore
  addpostsToFirestore(posts);