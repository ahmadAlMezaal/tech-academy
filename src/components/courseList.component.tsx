import { courses } from "@/app/db";
import { CourseCard } from "./courseCard.component";



export const CourseList = () => {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-6">
        {
            courses.map(
                (item, index: number) => <CourseCard key={`${item.id}_${String(index)}`} course={item} />
            )
        }
    </div>
}