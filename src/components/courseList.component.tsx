"use client"
import { availableCourses } from "@/app/db";
import { CourseCard } from "./courseCard.component";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TCourse } from "@/types/models";

export const CourseList: React.FC = () => {

    const [courses, setCourses] = useState<TCourse[]>(availableCourses);
    const categories = ['All courses', 'Technology', 'Business', 'Design', 'Wellness'];
    const [q, setQ] = useState<string>('');

    useEffect(
        () => {
            const filteredCourses = availableCourses.filter((course) => course.title.toLowerCase().includes(q.toLowerCase()));
            setCourses(filteredCourses);
        },
        [q]
    );

    return <>
        <div className="flex gap-4 my-4 items-center">
            <div className="flex-grow flex border border-gray-300 rounded overflow-hidden">
                <span className="p-2">
                    <Image width={20} height={20} src="/search.svg" alt="Search" className="w-6 h-6" />
                </span>
                <input
                    type="text"
                    placeholder="Search for courses"
                    className="flex-grow p-2"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>
        </div>
        <div className="flex flex-col justify-between items-start mb-6">
            <div className="flex overflow-x-auto scrollbar-hide">
                {
                    categories.map(
                        (category, index: number) => <button
                            key={`${category}_${String(index)}`}
                            className="text-md bg-gray-800 hover:bg-gray-700 text-white font-semibold mx-2 py-2 px-4 rounded-full">
                            {category}
                        </button>
                    )
                }
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-6">
            {
                courses.length ?
                    courses.map(
                        (item, index: number) => <CourseCard key={`${item.id}_${String(index)}`} course={item} />
                    ) :
                    <p className="py-2 px-2 text-2xl ">Course not found!</p>
            }
        </div>
    </>
}