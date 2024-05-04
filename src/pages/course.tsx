import { Layout } from "@/components/layout";
import { Navigation } from "@/components/navigation";
import '@/app/ui/globals.css';

type Video = {
    id: string;
    title: string;
    url: string;
}

type Props = {
    videos: Video[];
}

const Course: React.FC<Props> = ({ videos }) => {
    return (
        <Layout>
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md">
                <h1 className="text-center text-3xl font-bold text-gray-800">Course Title</h1>
                <p className="text-center text-lg text-gray-600">Welcome to the course. Here are some videos for you to start learning:</p>
                {
                    videos.map(video => (
                        <div key={video.id} className="my-5 p-5 bg-black">
                            <h2 className="text-white">{video.title}</h2>
                            <iframe
                                className="w-full"
                                height="315"
                                src={video.url}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                }
                <Navigation backLink="/" nextLink="/about" />
            </div>
        </Layout>
    );
}

export default Course;

export async function getStaticProps() {
    // Here you could fetch data from an API or database. For simplicity, let's use static data.
    const videos = [
        { id: 1, title: "Introduction", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: 2, title: "Lesson 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: 3, title: "Lesson 2", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
    ];

    return {
        props: {
            videos
        }
    };
}
