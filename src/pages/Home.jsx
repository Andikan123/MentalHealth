// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "History of Psychiatry and Psychiatric Nursing " },
  { id: 2, title: "Definition, Roles And Practice Standards Of Psychiatric Nursing" },
  { id: 3, title: "Practicing Mindfulness" },
  // Add more lessons here
];

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-teal-100 to-cyan-200 min-h-screen flex flex-col items-center justify-center mt-10 py-20 px-5">
      <div className="max-w-4xl w-full text-center bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Welcome to Mental Health Lessons
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Enhance your mental well-being through informative courses on mental health.
        </p>
        <div className="bg-teal-200 p-5 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Courses:</h2>
          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <Link
                  to={`/lesson/${lesson.id}`}
                  className="text-teal-600 font-medium text-lg hover:text-teal-800 transition duration-200"
                >
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          <p>Feel free to explore our lessons and start your mental health journey today!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
