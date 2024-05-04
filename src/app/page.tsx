import { Layout } from "@/components/layout";
import './ui/globals.css';
import Image from "next/image";
import { CourseList } from "@/components/courseList.component";

const Home: React.FC = () => {
    const categories = ['All courses', 'Technology', 'Business', 'Design', 'Wellness'];

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <h1 className="text-2xl font-bold">Find a course</h1>
                <p className="text-sm text-gray-600">3,000+ results</p>
                <div className="flex gap-4 my-4 items-center">
                    <div className="flex-grow flex border border-gray-300 rounded overflow-hidden">
                        <span className="p-2">
                            <Image width={20} height={20} src="/search.svg" alt="Search" className="w-6 h-6" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search for courses"
                            className="flex-grow p-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-start mb-6">
                    <div className="flex overflow-x-auto scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="text-md bg-gray-800 hover:bg-gray-700 text-white font-semibold mx-2 py-2 px-4 rounded-full"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <CourseList />
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

export default Home;
