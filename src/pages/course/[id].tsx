/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import '@/app/ui/globals.css';
import { useEffect, useState } from 'react';
import { CourseContent, LearningGrid } from './components/learningGrid.component';
import { availableInstructors, availableCourses } from '@/app/db';
import { RatingRating } from './components/instructorRating.component';
import { TCourse, TInstructor } from '@/types/models';
import { cartService } from '@/services/cart.service';
import { Layout } from '@/components/layout';

const CourseSubscribeSection = ({ course }: { course: TCourse }) => {
    return (
        <div className="relative rounded-lg overflow-hidden h-56">
            <img
                src={course.image}
                alt="Course Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-950 bg-opacity-50 flex flex-col justify-center p-4">
                <h1 className="text-4xl font-bold text-white pb-4">Subscribe to Tech Academy’s top courses</h1>
                <p className="text-white text-xl">Get this course, plus 11,000+ of our top-rated courses, with Personal Plan.</p>
                <p className="text-lg text-blue-300">
                    Try Personal Plan for free
                </p>
            </div>

        </div>
    );
};

const CourseDetailPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [course, setCourse] = useState<TCourse | null>(null);
    const [instructor, setInstructor] = useState<TInstructor | null>(null);
    const [coupon, setCoupon] = useState('');
    const [isInCart, setIsInCart] = useState(false);

    const handleCouponChange = (e: any) => setCoupon(e.target.value);

    useEffect(
        () => {
            const init = () => {
                const foundCourse = availableCourses.find((course) => course.id === Number(id));
                if (foundCourse) {
                    setCourse(foundCourse);
                    const cart = cartService.getCart();
                    setIsInCart(cart[foundCourse.id]);
                }
                const foundInstructor = availableInstructors.find((instructor) => instructor.id === Number(foundCourse?.instructorId));
                if (foundInstructor) {
                    setInstructor(foundInstructor);
                }
            };
            init();
        },
        [id]
    );

    if (!course || !instructor) {
        return <div>Loading....</div>;
    }

    const goBack = () => {
        router.back();
    };

    const handleAddCart = () => {
        cartService.addToCart(course);
        setIsInCart(true);
    };

    const handleRemoveCart = () => {
        cartService.removeFromCart(course.id);
        setIsInCart(false);
    }

    return <Layout>
        <div className="container mx-auto px-4 py-8">
            <button onClick={goBack} className="mb-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Go Back
            </button>
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <div className="mt-4 mb-6">
                <span className="text-lg">{course.rating} ★ ({course.ratingsCount} ratings) - {course.studentsCount} students</span>
            </div>
            <CourseSubscribeSection course={course} />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">What you'll learn</h1>
                <LearningGrid items={course.learningOutcomes} />
                <h2 className="text-3xl font-bold mt-8 mb-4">Course content</h2>
                <CourseContent sections={course.sections} />
                <div className='mt-12'>
                    <RatingRating instructor={instructor} />
                </div>
                <div className="mt-10 flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="coupon" className="text-lg font-semibold">Promo code:</label>
                        <input
                            id="coupon"
                            type="text"
                            value={coupon}
                            onChange={handleCouponChange}
                            placeholder="Enter Coupon"
                            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500"
                            style={{ width: '300px' }}
                        />
                        <button
                            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-r-md transition-colors duration-150 ease-in-out">
                            Apply
                        </button>
                        {
                            isInCart ? <button onClick={handleRemoveCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-md transition-colors duration-150 ease-in-out">
                                Remove from cart
                            </button> :
                                <button onClick={handleAddCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-md transition-colors duration-150 ease-in-out">
                                    Add to cart - £{course.price}
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
};

export default CourseDetailPage;
