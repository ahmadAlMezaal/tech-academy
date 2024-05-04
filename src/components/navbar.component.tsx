import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
    return <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
                        </Link>
                        <h1>Learning</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="mr-2 p-2 border rounded-md"
                        />
                    </div>
                    <div className="ml-3 relative flex">
                        <div className="relative">
                            <Image
                                src="/notification-icon.png"
                                alt="Notifications"
                                width={35}
                                height={35}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="ml-4 flex-shrink-0 flex items-center">
                            <Image
                                src="/profile.jpeg"
                                alt="Profile"
                                width={35}
                                height={35}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
};
