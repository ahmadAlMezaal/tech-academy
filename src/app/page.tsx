import { Layout } from "@/components/layout";
import './ui/globals.css';
import { CourseList } from "@/components/courseList.component";

const Home: React.FC = () => {

    return <Layout>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-2xl font-bold">Find a course</h1>
            <p className="text-sm text-gray-600">3,000+ results</p>

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
}

export default Home;
