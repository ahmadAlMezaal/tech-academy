import Image from "next/image";

export const LearningGrid = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {
                items.map(
                    (item, index) => <div key={index} className="p-5 border border-gray-200 rounded shadow-sm">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="font-light text-gray-500">{item.description}</p>
                    </div>
                )
            }
        </div>
    );
};

export const CourseContent = ({ sections }) => {
    return <div>
        {
            sections.map(
                (section, index) => <div key={index} className="mb-4 flex items-center">
                    <div className="bg-gray-200 p-4 mr-3 rounded-md">
                        <Image alt="play" width={20} height={20} src={'/play.png'} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-1">{section.title}</h4>
                        <p className="text-gray-500 text-sm font-light">{section.description}</p>
                        <p className="text-gray-500 text-sm font-light">{section.duration} | {section.lessons} lessons</p>
                    </div>
                </div>
            )
        }
    </div>
};