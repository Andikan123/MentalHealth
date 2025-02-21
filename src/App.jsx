import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";

// Example course data
const courseData = [
  {
    id: 1,
    title: "History of Psychiatry and Psychiatric Nursing",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          In order to understand the changing outlook and future role of
          psychiatric nursing, we need to know the history of psychiatry to
          understand how it has evolved as a branch by following its historical
          development. The people we call "mentally ill" have been with us
          throughout history. We have been frightened, surprised, ignored, out
          of sight, patronized, ridiculed, pitied, or tortured.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          The Emergence of the Discipline of Psychiatric Nursing
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Although nursing functions have existed since ancient times, the
          nursing profession, especially psychiatric nursing, is a product of
          the{" "}
          <span className="font-semibold text-blue-600">
            late 19th and 20th centuries
          </span>
          . In the{" "}
          <span className="font-semibold text-blue-600">19th century</span>{" "}
          (1915–1935), awareness of psychiatric care standards grew, and the
          need for the nursing profession increased. Psychiatric nursing emerged
          between{" "}
          <span className="font-semibold text-blue-600">1770 and 1880</span> as
          a result of dealing with the treatment of mentally ill individuals.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">
            Nightingale's contribution
          </span>{" "}
          to psychiatric nursing was significant, as she was one of the first to
          realize that the effect of nurses on patients extended beyond physical
          care and that this effect included psychological and social
          components.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Before this time, mental illness was explained as the result of evil
          spirits entering the body. In the{" "}
          <span className="font-semibold text-blue-600">15th century</span>,
          Hippocrates defined mental illness as a form of nervous disease, while{" "}
          <span className="font-semibold text-blue-600">Aristotle</span> and{" "}
          <span className="font-semibold text-blue-600">Galen</span> defined it
          as a disorder of the brain.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          The Greeks used temples as hospitals and benefited from open-air sun
          and water therapy. They treated mental illnesses by riding, walking,
          and listening to the sound of waterfalls.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          During the{" "}
          <span className="font-semibold text-blue-600">Middle Ages</span>,
          mentally ill individuals were rejected by society and believed to be
          possessed by demons or evil spirits. Superstitions, mysticism, and
          sorcery led to their mistreatment, including torture, starvation, and
          even execution by beheading, hanging, or burning at the stake. They
          were confined in cells, chained, and beaten.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          The{" "}
          <span className="font-semibold text-blue-600">
            Bethlehem Royal Hospital
          </span>{" "}
          in England, the first mental hospital, was established during this
          time. The{" "}
          <span className="font-semibold text-blue-600">18th century</span>{" "}
          marked the Age of Logic and Observation, where{" "}
          <span className="font-semibold text-blue-600">Philippe Pinel</span>, a
          French physician, began to treat mental patients humanely by releasing
          them from chains. Pinel classified patients based on their behavior
          and the history of their illnesses.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          In the{" "}
          <span className="font-semibold text-blue-600">
            18th and 19th centuries
          </span>
          , <span className="font-semibold text-blue-600">Benjamin Rush</span>,
          known as the "father of American Psychiatry," wrote the first book on
          American Psychiatry and advocated for humane treatment of people with
          mental illness.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          In <span className="font-semibold text-blue-600">1882</span>, the
          first psychiatric school was established at McLean Hospital in
          Belmont, Massachusetts. The first formal organized nursing school
          within the hospital for patients with mental illness also emerged.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          In <span className="font-semibold text-blue-600">1915</span>,{" "}
          <span className="font-semibold text-blue-600">Linda Richards</span>{" "}
          became the first graduate nurse in the US, marking the birth of
          American Psychiatric Nursing. By{" "}
          <span className="font-semibold text-blue-600">1939</span>,
          approximately half of all nursing schools offered psychiatric nursing
          courses.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          During World War II, mental hospitals faced severe staff shortages,
          leading to the rapid opening of nursing schools. In{" "}
          <span className="font-semibold text-blue-600">1936</span>, 67 new
          schools were opened to address the shortage.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Psychiatric nursing became more integrated into general nursing in the{" "}
          <span className="font-semibold text-blue-600">1940s</span>. Nurses
          took on more responsibility for self-education, gradually taking over
          teaching from physicians, though their duties often remained focused
          on routine care such as feeding, dressing, and assisting with
          treatments.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          The{" "}
          <span className="font-semibold text-blue-600">
            1950s and early 1960s
          </span>{" "}
          were a period of role clarification in psychiatric nursing. In{" "}
          <span className="font-semibold text-blue-600">1952</span>,{" "}
          <span className="font-semibold text-blue-600">Hildegard Peplau</span>{" "}
          published "Interpersonal Relations in Nursing," the first systematic
          theoretical framework in psychiatric nursing.{" "}
          <span className="font-semibold text-blue-600">
            Harry Stack Sullivan
          </span>{" "}
          also made significant contributions to psychiatric theory.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          In <span className="font-semibold text-blue-600">1956</span>, a
          milestone report introduced the concept of the psychiatric clinical
          nurse specialist, based on master's-level preparation. In{" "}
          <span className="font-semibold text-blue-600">1960</span>, the first
          nursing doctorate program was created at Boston University.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          <span className="font-semibold text-blue-600">
            Ida Jean Orlando's
          </span>{" "}
          "Dynamic Nurse-Patient Relationship" (1961) emphasized the importance
          of interpersonal relationships in all nursing care, including
          psychiatric nursing.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          In <span className="font-semibold text-blue-600">1963</span>,
          Community Mental Health actions began to serve the public in community
          health centers, providing services such as emergency mental health
          care, outpatient care, and halfway homes.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          In <span className="font-semibold text-blue-600">1967</span>, the
          American Nurses Association (ANA) published the Standards of Practice
          for Psychiatric Nursing.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Other notable events include the development of psychoanalytic theory
          by <span className="font-semibold text-blue-600">Sigmund Freud</span>{" "}
          in <span className="font-semibold text-blue-600">1856–1939</span>, the
          identification of schizophrenia by{" "}
          <span className="font-semibold text-blue-600">Eugene Bleuler</span>{" "}
          (1857–1939), and the use of insulin shock therapy and
          electroconvulsive therapy in{" "}
          <span className="font-semibold text-blue-600">1930</span>.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          The{" "}
          <span className="font-semibold text-blue-600">
            1980 Mental Health Systems Act
          </span>{" "}
          supported societal efforts and facilitated new initiatives.
        </p>
      </>
    ),
    videoUrl: "https://youtu.be/YOdqEsOeU6U", // Example YouTube video link
  },
  {
    id: 2,
    title:
      "Definition, Roles And Practice Standards Of Psychiatric Nursing",
    content: (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          What is Stress?
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Stress is the body's response to challenging or threatening
          situations. Stress management techniques include relaxation exercises,
          meditation, and time management strategies.
        </p>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/4p6wVeOD2uw", // Example YouTube video link
  },
  {
    id: 3,
    title: "Practicing ",
    content: (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          What is Mindfulness?
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Mindfulness is the practice of being fully present and engaged in the
          moment. Mindfulness exercises include deep breathing, body scans, and
          mindful walking.
        </p>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube video link
  },
  // Add more lessons here
];

const App = () => {
  // Initialize completed courses from localStorage or set to empty array
  const [completedCourses, setCompletedCourses] = useState(() => {
    const savedCourses = localStorage.getItem("completedCourses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  // Calculate the completion percentage
  const completionPercentage = (completedCourses.length / courseData.length) * 100;

  // Mark course as completed
  const markCourseAsCompleted = (courseId) => {
    if (!completedCourses.includes(courseId)) {
      const updatedCourses = [...completedCourses, courseId];
      setCompletedCourses(updatedCourses);
      // Save the updated completed courses to localStorage
      localStorage.setItem("completedCourses", JSON.stringify(updatedCourses));
    }
  };

  return (
    <Router>
      <Navbar completionPercentage={completionPercentage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route
          path="/quiz/:id"
          element={<Quiz markCourseAsCompleted={markCourseAsCompleted} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
