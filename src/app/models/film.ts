export class Film {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    rating?: number;
    year?: number;
    genre?: string;
    isNew?: boolean;
    trailerUrl?: string;
    constructor(
        id?: number, 
        title?: string, 
        description?: string, 
        image?: string, 
        rating?: number, 
        year?: number, 
        genre?: string, 
        isNew?: boolean,
        trailerUrl?: string
    )
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.year = year;
        this.genre = genre;  // Corrected from 'game' to 'genre'
        this.isNew = isNew;
        this.trailerUrl = trailerUrl;
    }

}



export const FILMS: Film[] = [
    {
        id: 1,
        title: "Captain America",
        description: "Steve Rogers becomes Captain America, battling the Red Skull and Hydra in World War II, while struggling to adapt to his new role.",
        image: "../../assets/Captain_america.jfit",
        rating: 8.5,
        year: 2008,
        genre: "Action",
        isNew: true,
        trailerUrl: "https://www.youtube.com/watch?v=abc123"
    },
    {
        id: 2,
        title: "Back Action",
        description: "An elite team races against time to prevent an international conspiracy, facing betrayal and danger as they uncover the truth.",
        image: "../../assets/Back_action.jfit",
        rating: 8.5,
        year: 2000,
        genre: "Action",
        isNew: false,
        trailerUrl: "https://www.youtube.com/watch?v=xyz456" 
    },
    {
        id: 3,
        title: "The Sand Castle",
        description: "The Sand Castle", // Add a description if available
        image: "", // Add an image path if available
        rating: 0, // Add a rating if available
        year: 0, // Add a year if available
        genre: "Action", // Add a genre if available
        isNew: false,
        trailerUrl: "https://www.youtube.com/watch?v=def789"  // Add a token value if available
    }
];
