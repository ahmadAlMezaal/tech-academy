type TLearningOutcome = {
    title: string;
    description: string;
    duration: string;
    lessons: number;
}

type TCourse = {
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

type TRating = {
    star: number;
    percentage: number;
}

type TInstructor = {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviewCount: number;
    ratingsDistribution: TRating[];
}
