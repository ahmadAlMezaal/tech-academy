import Image from "next/image";
import '@/app/ui/globals.css';

type Props = {
    course: TCourse
};

export const CourseCard: React.FC<Props> = (props: Props) => {

    const course = props.course;

    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="w-full h-auto">
            <div className="relative w-full" style={{ height: '200px' }}>
                <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
            </div>
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{course.title}</div>
            <p className="text-gray-700 text-base">
                {course.author}
            </p>
        </div>
    </div>;
};

