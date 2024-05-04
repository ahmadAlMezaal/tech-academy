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
                        <div className="ml-6 flex items-center space-x-4">
                            <Link href="/courses">
                                Courses
                            </Link>
                            <Link href="/tracks">
                                Tracks
                            </Link>
                            <Link href="/instructors">
                                Instructors
                            </Link>
                            <Link href="/community">
                                Community
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <Link href="/notifications">
                        <Image
                            src="/notification-icon.png"
                            alt="Notifications"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                        />
                    </Link>
                    <div className="ml-4">
                        <Link href="/profile">
                            <Image
                                src="/profile.jpeg"
                                alt="Profile"
                                width={30}
                                height={30}
                                className="rounded-full cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
};
