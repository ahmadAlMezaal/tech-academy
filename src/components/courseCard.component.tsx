import Image from "next/image";
import '@/app/ui/globals.css';
import Link from "next/link";

type Props = {
    course: TCourse
};

export const CourseCard: React.FC<Props> = (props: Props) => {

    const course = props.course;

    return <Link
        className="cursor-pointer max-w-xs rounded-md overflow-hidden shadow-lg"
        href={`/course/${course.id}`}
    // href={{
    //     pathname: `/course/${course.id}`,
    //     query: `${course.id}`,
    //     href: `/course/${course.id}`
    // }}
    // href={`/course/${course.id}`}
    >
        <div className="w-full h-auto">
            <div className="relative w-full" style={{ height: '150px' }}>
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
        <div className="px-5 py-4">
            <div className="font-bold text-md mb-2">{course.title}</div>
            <p className="text-gray-700 text-base">
                {course.author}
            </p>
        </div>
    </Link>;
};

