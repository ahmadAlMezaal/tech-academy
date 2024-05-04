import Image from "next/image";

type Props = {
    instructor: TInstructor;
}

export const RatingRating: React.FC<Props> = ({ instructor }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <div className="flex items-center space-x-4">
                <Image width={50} height={50} src={instructor.image} alt={instructor.name} className="h-24 w-24 rounded-full" />
                <div>
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <p>Instructor</p>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-lg font-semibold">Reviews</h4>
                <p className="text-xl font-bold">{instructor.rating} <span className="text-lg">★</span></p>
                <p>{instructor.reviewCount} reviews</p>
                <div>
                    {
                        instructor.ratingsDistribution.map(
                            (item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="text-sm font-bold">{item.star}</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                                    </div>
                                    <span className="text-sm">{item.percentage}%</span>
                                </div>
                            )
                        )}
                </div>
            </div>
        </div>
    );
};