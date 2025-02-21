import React from "react";
import { useParams, Link } from "react-router-dom";

// Sample content for lessons
const lessonData = [
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
    videoUrl: "https://www.youtube.com/embed/YOdqEsOeU6U", // Example YouTube video link
  },
  {
    id: 2,
    title: "Definition, Roles And Practice Standards Of Psychiatric Nursing",
    content: (
      <>
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-6">
          Psychiatric Nursing
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Psychiatric nursing can be defined as an{" "}
          <span class="font-semibold text-indigo-700">
            interpersonal process
          </span>{" "}
          that enhances the mental health of individuals, families, and society.
          It aids professional nurses in preventing or coping with mental
          illness and suffering, and, if necessary, helps them find meaning in
          these experiences.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The term <strong>psychiatric–mental health nursing</strong> refers to
          two intersecting aspects of nursing practice:
          <span class="font-semibold text-indigo-700">
            Psychiatric nursing
          </span>{" "}
          focuses on the care and rehabilitation of individuals with
          identifiable mental illnesses, while{" "}
          <span class="font-semibold text-indigo-700">
            mental health nursing
          </span>{" "}
          is dedicated to promoting wellness and preventing mental illness. This
          dual approach leverages the study of human behavior as its science and
          the purposeful use of self as its art. As with other nursing
          specialties, psychiatric–mental health nursing adapts to primary,
          secondary, and tertiary care needs, evolving into a unique discipline
          that blends nursing knowledge with biological and behavioral sciences.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          Psychiatric–Mental Health Nursing’s Phenomena of Concern
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            Promotion of optimal mental and physical health and well-being, and
            prevention of mental illness
          </li>
          <li>
            Impaired ability to function due to psychiatric, emotional, and
            physiological distress
          </li>
          <li>
            Alterations in thinking, perceiving, and communicating from
            psychiatric disorders or mental health problems
          </li>
          <li>
            Behaviors or mental states that indicate potential danger to self or
            others
          </li>
          <li>
            Emotional stress related to illness, pain, disability, and loss
          </li>
          <li>
            Symptom management, side effects, or toxicities from
            psychopharmacologic interventions
          </li>
          <li>
            Barriers to treatment efficacy posed by alcohol and substance abuse
          </li>
          <li>
            Changes in self-concept, body image, developmental issues, life
            processes, and end-of-life concerns
          </li>
          <li>
            Physical symptoms accompanying altered psychological status and vice
            versa
          </li>
          <li>
            Interpersonal, organizational, sociocultural, spiritual, or
            environmental influences on mental and emotional well-being
          </li>
          <li>
            Societal factors such as violence, poverty, and substance abuse
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          Peplau’s Subroles in Nursing (1991)
        </h2>
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Stranger
        </h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Initially, a nurse is a stranger to the client, just as the client is
          to the nurse. As Peplau (1991) states, "Respect and positive interest
          are accorded a stranger"—this principle emphasizes the importance of
          accepting the patient as they are and relating to them without
          personal bias until further evidence emerges.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Resource Person
        </h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          A resource person provides specific answers to questions related to
          the client’s healthcare needs. The nurse acts as a guide, offering
          clear, understandable information to assist the client’s health
          journey.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Teacher
        </h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          In this subrole, the nurse identifies learning needs and provides
          essential information to improve the client’s health situation.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Technical Expert
        </h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          The nurse utilizes professional skills and clinical expertise to
          perform interventions that prioritize the client’s best interests.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Leader
        </h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Democratic leadership empowers patients to actively participate in
          designing their nursing plans. In contrast, autocratic leadership
          undermines client autonomy by substituting the nurse’s goals for their
          own.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Surrogate
        </h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Clients may unconsciously perceive nurses as symbols of significant
          people from their past, such as a mother, sibling, or teacher. These
          perceptions arise in situations that trigger feelings similar to past
          experiences.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
          The Counselor
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The nurse uses{" "}
          <span class="font-semibold text-indigo-700">
            interpersonal techniques
          </span>{" "}
          to help clients adapt to difficulties or changes in life. As Peplau
          (1991) explains, counseling helps the patient fully understand their
          current experiences, integrating them with past experiences for
          emotional growth.
        </p>

        <h1 className="text-3xl font-bold text-indigo-800 mb-4">
          Basic Philosophy of Psychiatric Nursing Practice
        </h1>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Every individual is valuable</strong> and has the potential
            for self-improvement.
          </li>
          <li>
            <strong>Every individual has the potential to change</strong> and
            adapt to challenges.
          </li>
          <li>
            <strong>Each individual is a whole</strong> with interconnected
            biopsychosocial aspects—problems affecting one area impact others.
          </li>
          <li>
            <strong>Basic needs must be met</strong> for the individual's
            well-being.
          </li>
          <li>
            <strong>Nursing care is rooted in the needs</strong> of the
            individual, family, and society.
          </li>
          <li>
            <strong>Every behavior has meaning,</strong> offering valuable
            insights into the individual’s condition.
          </li>
          <li>
            <strong>Individuals possess the power</strong> to cope with
            challenges, with illness serving as an opportunity for personal
            growth.
          </li>
        </ul>

        <h1 className="text-3xl font-bold text-indigo-800 mb-4">
          Psychiatric Nursing Practice Standards
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In 1973, the American Nurses Association established the first
          standards to guide psychiatric nursing practice.
        </p>

        <h1 className="text-3xl font-bold text-indigo-800 mb-4">
          Why Professional Standards are Needed?
        </h1>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            Facilitating the measurement and evaluation of nursing practices
          </li>
          <li>Establishing clear requirements for nursing care</li>
          <li>
            Defining the knowledge, skills, and practices essential for nursing
          </li>
          <li>
            Promoting the recognition of nursing as a respected profession
          </li>
          <li>
            <strong>Standards are crucial</strong> for fully defining the role
            of professional nurses.
          </li>
        </ul>

        <h1 className="text-3xl font-bold text-indigo-800 mb-4">
          Professional Practice Standards Published By The American Nurses
          Association
        </h1>

        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 1: Theory Development
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses base their decisions on sound scientific knowledge, utilizing
          relevant theories to explain nursing phenomena.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 2: Data Collection
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses systematically collect accurate data to evaluate the mental and
          physical health of patients, which informs subsequent interventions.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 3: Diagnosis
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses use diagnoses to identify health problems and potential risks,
          ensuring that care plans address specific needs.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 4: Planning
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses develop care plans with specific interventions that meet the
          needs of each patient, guiding therapeutic actions and achieving
          desired outcomes.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 5: Application
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses implement interventions that guide nursing care, aiming to
          promote physical and mental health, prevent diseases, and provide
          rehabilitative support. This includes psychotherapeutic interventions,
          health education, and creating a therapeutic environment in
          collaboration with the treatment team.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 6: Assessment
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses continuously assess collected data, evaluate diagnoses, and
          adjust care plans to optimize patient outcomes.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 7: Evaluation By Peers
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses participate in scheduled evaluations with colleagues to assess
          the quality of nursing care provided to patients.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 8. In Service Training
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          The nurse knows her responsibility for self-development and
          contributes to the professional development of others. (Scientific,
          cultural, social and political changes require a nurse who will follow
          the information that will increase professional development)
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 9. Interdisciplinary cooperation
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          The nurse collaborates with the healthcare team at every stage of
          their practice.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 10: Use of Community Health Systems
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses engage in planning and participating in community health
          programs that aim to reduce the incidence of mental health disorders,
          improving the mental health of the entire community.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Standard 11: Research
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nurses contribute to advancing mental health and nursing practice by
          engaging in research, ensuring the continued growth and development of
          the profession.
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Benefits of Standards for Service Providers
      </h1>
      <ul ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Standards eliminate uncertainties in service delivery.</li>
        <li>Ensure that services are carried out according to structured plans and programs.</li>
        <li>Minimize service disruptions, reduce losses, and enhance care quality.</li>
        <li>Promote alignment between individual and institutional standards, leading to better outcomes.</li>
        <li>Standards inform training programs and contribute to the development of nursing expertise.</li>
        <li>They facilitate collaboration with other disciplines, leading to more efficient and effective patient care.</li>
        <li>Help establish agreements between service providers and recipients</li>
      </ul>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/zbIDuNucHNo", // Example YouTube video link 
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

const Lesson = () => {
  const { id } = useParams();
  const lesson = lessonData.find((lesson) => lesson.id === parseInt(id));

  return (
    <div className="bg-gradient-to-r from-green-50 via-teal-100 to-cyan-200 mt-20 min-h-screen flex flex-col items-center py-10 px-5">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Title Section with Styling */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight tracking-tight md:text-6xl">
          {lesson?.title}
        </h1>

        {/* Content Section with Styling */}
        <div className="text-xl text-gray-700 mb-8 leading-relaxed tracking-wide">
          {lesson?.content}
        </div>

        {/* Video Embedding Section */}
        {lesson?.videoUrl && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Watch the Video
            </h2>
            <iframe
              width="100%"
              height="400"
              src={lesson.videoUrl}
              title={lesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        )}

        {/* Quiz Button */}
        <div className="mt-10 text-center">
          <Link
            to={`/quiz/${lesson?.id}`}
            className="inline-block bg-teal-600 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-xl hover:bg-teal-700 transition duration-300"
          >
            Take the Quiz
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-sm text-gray-500 text-center">
        <p className="leading-relaxed">
          We hope you found this lesson helpful. Take a moment to reflect and
          continue your journey toward mental wellness.
        </p>
      </div>
    </div>
  );
};

export default Lesson;
