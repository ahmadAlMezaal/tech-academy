import { Layout } from "@/components/layout";
import './ui/globals.css';
import { CourseCard } from "@/components/courseCard.component";

const courses = [
    {
        id: 1,
        title: "Python for Data Science and Machine Learning Bootcamp",
        author: "Jose Portilla",
        image: "/python.jpeg"
    },
    {
        id: 2,
        title: "The Complete JavaScript Course 2021: From Zero to Expert!",
        author: "Jonas Schmedtmann",
        image: "/javascript.png"
    },
    {
        id: 3,
        title: "The Web Developer Bootcamp 2021",
        author: "Colt Steele",
        image: "/web.png"
    },
    {
        id: 4,
        title: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
        author: "Robin Hall",
        image: "/piano.jpg"
    }
];

export default function Home() {
    const categories = ['All courses', 'Technology', 'Business', 'Design', 'Wellness'];

    return (
        // <Layout>
        //     <div className="container mx-auto px-4">
        //         <h1 className="text-4xl font-bold text-center my-8">Course Catalog</h1>



        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        // {
        //     courses.map(
        //         (item, index: number) => (
        //             <CourseCard key={`${item.id}_${String(index)}`} course={item} />
        //         )
        //     )
        // }
        //         </div>
        //     </div>
        // </Layout>
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold">Course Catalog</h1>
                    <div>
                        {categories.map(category => (
                            <button
                                key={category}
                                className="text-md text-gray-600 hover:text-gray-900 font-semibold mx-2"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        courses.map(
                            (item, index: number) => (
                                <CourseCard key={`${item.id}_${String(index)}`} course={item} />
                            )
                        )
                    }
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="flex space-x-1">
                        <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">Prev</button>
                        <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">1</button>
                        <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">2</button>
                        <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">3</button>
                        <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">Next</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
