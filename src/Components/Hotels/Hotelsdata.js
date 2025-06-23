import paris11 from '../../assets/paris11.avif'
import paris12 from '../../assets/paris12.avif'
import paris13 from '../../assets/paris13.avif'
import paris14 from '../../assets/paris14.avif'
import paris21 from '../../assets/paris21.avif'
import paris22 from '../../assets/paris22.avif'
import paris31 from '../../assets/paris31.avif'
import paris32 from '../../assets/paris32.avif'
import paris33 from '../../assets/paris33.avif'
import india11 from '../../assets/india11.jpg'
import india12 from '../../assets/india12.jpg'
import india13 from '../../assets/india13.jpg'
import india14 from '../../assets/india14.jpg'
import india21 from '../../assets/india21.webp'
import india22 from '../../assets/india22.webp'
import india23 from '../../assets/india23.jpg'
import india24 from '../../assets/india24.webp'
import india31 from '../../assets/india31.webp'
import india32 from '../../assets/india32.webp'
import india33 from '../../assets/india33.webp'
import india34 from '../../assets/india34.webp'
import hawai11 from '../../assets/hawai11.avif'
import hawai12 from '../../assets/hawai12.jpg'
import hawai13 from '../../assets/hawai13.avif'
import hawai14 from '../../assets/hawai14.avif'
import hawai21 from '../../assets/hawai21.webp'
import hawai22 from '../../assets/hawai22.avif'
import hawai23 from '../../assets/hawai23.jpg'
import hawai24 from '../../assets/hawai24.avif'
import hawai31 from '../../assets/hawai31.avif'
import hawai32 from '../../assets/hawai32.avif'
import hawai33 from '../../assets/hawai33.avif'
import hawai34 from '../../assets/hawai34.avif'
import aus11 from '../../assets/aus11.jpg'
import aus12 from '../../assets/aus12.jpg'
import aus13 from '../../assets/aus13.jpg'
import aus14 from '../../assets/aus14.jpg'
import aus21 from '../../assets/aus21.jpg'
import aus22 from '../../assets/aus22.jpg'
import aus23 from '../../assets/aus23.jpg'
import aus24 from '../../assets/aus24.jpg'
import aus31 from '../../assets/aus31.jpg'
import aus32 from '../../assets/aus32.jpg'
import aus33 from '../../assets/aus33.jpg'
import aus34 from '../../assets/aus34.jpg'

const Hotelsdata = {
    Paris: [
        {
            name: "Nanterre Paradise",
            price: "Rs.25,000",
            rating: 4.5,
            images: [paris11,paris12,paris13,paris14],
            location: "Nanterre, Paris"
        },
        {
            name: "Garges-lès-Gonesse",
            price: "Rs.35,000",
            rating: 4.8,
            images: [paris21,paris22],
            location: "Paris, France"
        },
        {
            name: "Asnières-sur-Seine",
            price: "Rs.40,000",
            rating: 5.0,
            images: [paris31,paris32,paris33],
            location: "North-Central France"
        }
    ],
    India: [
        {
            name: "Casawood Resort - A Luxury",
            price: "Rs.5,000",
            rating: 4.7,
            images: [india11,india12,india13,india14],
            location: "Mount Abu, Rajasthan"
        },
        {
            name: "Kaldan Samudhra Palace (Luxury Property)",
            price: "Rs.20,000",
            rating: 4.8,
            images: [india21,india22,india23,india24],
            location: "Mahabalipuram, Tamil Nadu"
        },
        {
            name: "Six Senses Fort Barwara",
            price: "Rs.50,000",
            rating: 5.0,
            images: [india31,india32,india33,india34],
            location: "Barwara, Rajasthan"
        }
    ],
    Hawaii: [
        {
            name: "The Ohana",
            price: "Rs.20,000",
            rating: 4.3,
            images: [hawai11,hawai12,hawai13,hawai14],
            location: "Naalehu, Hawaii"
        },
        {
            name: "Peaceful Rainforest Treehouse Retreat",
            price: "Rs.30,000",
            rating: 4.6,
            images: [hawai21,hawai22,hawai23,hawai24],
            location: "Volcano, Hawaii"
        },
        {
            name: "Oceanfront Haena Cottage",
            price: "Rs.45,000",
            rating: 5.0,
            images: [hawai31,hawai32,hawai33,hawai34],
            location: "Hanalei, Hawaii"
        }
    ],
    Australia: [
        {
            name: "Rhapsody Resort",
            price: "16,000",
            rating: 4.8,
            images: [aus11,aus12,aus13,aus14],
            location: "Surfers Paradise, Gold Coast"
        },
        {
            name: "Joondalup Resort",
            price: "Rs.14,000",
            rating: 4.6,
            images: [aus21,aus22,aus23,aus24],
            location: "Perth"
        },
        {
            name: "Palms City Resort",
            price: "Rs,10,000",
            rating: 4.6,
            images: [aus31,aus32,aus33,aus34],
            location: "Darwin"
        }
    ]
};
export default Hotelsdata