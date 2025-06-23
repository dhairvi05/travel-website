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
            price: "Rs.16,000",
            rating: 4.8,
            images: [india21,india22,india23,india24],
            location: "Mahabalipuram, Tamil Nadu"
        }
    ]
};
export default Hotelsdata