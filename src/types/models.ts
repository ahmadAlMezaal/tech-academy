export type TLearningOutcome = {
    title: string;
    description: string;
    duration: string;
    lessons: number;
}

export type TCourse = {
    id: number;
    title: string;
    author: string;
    image: string;
    rating: number;
    ratingsCount: number;
    studentsCount: number;
    backgroundUrl: string;
    updated: string;
    languages: string[];
    price: string;
    description: string;
    outcomes: string[];
    learningOutcomes: TLearningOutcome[];
    sections: TLearningOutcome[];
    instructorId: number;
};

export type TRating = {
    star: number;
    percentage: number;
}

export type TInstructor = {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviewCount: number;
    ratingsDistribution: TRating[];
}

export type CartContextType = {
    cartItems: { [key: string]: TCourse[] };
    addItemToCart: (_item: TCourse) => void;
    removeItemFromCart: (_itemId: number) => void;
    updateCartQuantity: (_quantity: number) => void;
}
