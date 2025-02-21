import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const quizData = {
    1: [
      {
        question: "Who is considered the father of American Psychiatry?",
        options: ["Philippe Pinel", "Benjamin Rush", "Hildegard Peplau"],
        correctAnswer: "Benjamin Rush",
      },
      {
        question: "What significant contribution did Florence Nightingale make to psychiatric nursing?",
        options: [
          "Developed the first psychiatric nursing school",
          "Realized the psychological and social effect of nurses",
          "Wrote the first book on psychiatric nursing",
        ],
        correctAnswer: "Realized the psychological and social effect of nurses",
      },
      {
        question: "When did the first psychiatric school open in the United States?",
        options: ["1882", "1915", "1936"],
        correctAnswer: "1882",
      },
      {
        question: "Which mental hospital was the first to be established?",
        options: ["McLean Hospital", "Bethlehem Royal Hospital", "Boston Psychiatric Center"],
        correctAnswer: "Bethlehem Royal Hospital",
      },
      {
        question: "In what century did psychiatry start to take shape as a distinct discipline?",
        options: ["15th century", "18th century", "19th century"],
        correctAnswer: "19th century",
      },
      {
        question: "Who was responsible for introducing humane treatment to mental patients by releasing them from chains?",
        options: ["Sigmund Freud", "Philippe Pinel", "Benjamin Rush"],
        correctAnswer: "Philippe Pinel",
      },
      {
        question: "What year was Linda Richards, the first graduate nurse, recognized in the U.S.?",
        options: ["1882", "1915", "1963"],
        correctAnswer: "1915",
      },
      {
        question: "Which of the following was a common treatment for mental illness in the Middle Ages?",
        options: ["Sun therapy", "Water therapy", "Execution by burning"],
        correctAnswer: "Execution by burning",
      },
      {
        question: "What major psychiatric event occurred in 1963?",
        options: ["The establishment of community health centers", "The publication of the first psychiatric nursing book", "The development of psychoanalysis theory"],
        correctAnswer: "The establishment of community health centers",
      },
      {
        question: "Which report in 1956 introduced the psychiatric clinical nurse specialist?",
        options: ["Hildegard Peplau's report", "The 1980 Mental Health Systems Act", "A milestone report in psychiatric nursing"],
        correctAnswer: "A milestone report in psychiatric nursing",
      },
      {
        question: "What new concept did Ida Jean Orlando introduce to nursing?",
        options: [
          "The role of psychiatric nurse as an educator",
          "Dynamic Nurse-Patient Relationship",
          "Psychoanalytic theory",
        ],
        correctAnswer: "Dynamic Nurse-Patient Relationship",
      },
      {
        question: "Which figure is credited with developing the concept of the Dynamic Nurse-Patient Relationship?",
        options: ["Sigmund Freud", "Ida Jean Orlando", "Benjamin Rush"],
        correctAnswer: "Ida Jean Orlando",
      },
      {
        question: "In which century did the psychiatric nurse begin to take on more self-education responsibilities?",
        options: ["19th century", "20th century", "18th century"],
        correctAnswer: "20th century",
      },
      {
        question: "Which war caused mental hospitals to experience severe staff shortages?",
        options: ["World War I", "World War II", "The Civil War"],
        correctAnswer: "World War II",
      },
      {
        question: "Who was responsible for introducing the use of insulin shock therapy and electroconvulsive therapy?",
        options: ["Philippe Pinel", "Eugene Bleuler", "Harry Stack Sullivan"],
        correctAnswer: "Eugene Bleuler",
      },
      {
        question: "Which of the following treatments were used in the 1930s for mental illness?",
        options: ["Electroconvulsive therapy", "Physical therapy", "Chiropractic therapy"],
        correctAnswer: "Electroconvulsive therapy",
      },
      {
        question: "In which year was the first nursing doctorate program created?",
        options: ["1956", "1960", "1967"],
        correctAnswer: "1960",
      },
      {
        question: "What concept did Sigmund Freud develop during his time?",
        options: ["Psychoanalysis", "Cognitive behavioral therapy", "Interpersonal theory"],
        correctAnswer: "Psychoanalysis",
      },
      {
        question: "When did the American Nurses Association publish the Standards of Practice for Psychiatric Nursing?",
        options: ["1960", "1967", "1980"],
        correctAnswer: "1967",
      },
      {
        question: "What was the focus of the Mental Health Systems Act of 1980?",
        options: ["Social efforts to address mental illness", "Mental hospitals regulation", "Public health nursing standards"],
        correctAnswer: "Social efforts to address mental illness",
      },
      {
        question: "What treatment did the Greeks use for mental illness?",
        options: ["Water therapy", "Walking therapy", "Music therapy"],
        correctAnswer: "Walking therapy",
      },
      {
        question: "What did Hippocrates define mental illness as?",
        options: ["Nervous disease", "Brain disorder", "Evil possession"],
        correctAnswer: "Nervous disease",
      },
      {
        question: "When was the concept of psychiatry first introduced?",
        options: ["15th century", "17th century", "18th century"],
        correctAnswer: "15th century",
      },
      {
        question: "What role did nurses play in the 1940s within psychiatric nursing?",
        options: ["Teaching", "Routine care", "Psychological counseling"],
        correctAnswer: "Routine care",
      },
      {
        question: "What major change occurred in psychiatric nursing in the 1950s and 1960s?",
        options: ["Role clarification", "Full integration into medical practices", "Introduction of medications"],
        correctAnswer: "Role clarification",
      },
      {
        question: "In what year was the first psychiatric nursing course introduced in American schools?",
        options: ["1915", "1939", "1952"],
        correctAnswer: "1939",
      },
      {
        question: "Who developed the first theoretical framework in psychiatric nursing?",
        options: ["Hildegard Peplau", "Harry Stack Sullivan", "Benjamin Rush"],
        correctAnswer: "Hildegard Peplau",
      },
      {
        question: "What significant role did the Bethlehem Royal Hospital play in the history of psychiatry?",
        options: ["First psychiatric research center", "First mental hospital", "First community health center"],
        correctAnswer: "First mental hospital",
      },
    ],

  
  2: [
    {
      question: "What is the primary focus of psychiatric nursing?",
      options: [
        "Providing physical care to patients",
        "Supporting the mental health and well-being of patients",
        "Diagnosing mental disorders"
      ],
      correctAnswer: "Supporting the mental health and well-being of patients"
    },
    {
      question: "Which of the following is a key role of psychiatric nurses?",
      options: [
        "Administering medication",
        "Providing emotional support and counseling",
        "Performing surgeries"
      ],
      correctAnswer: "Providing emotional support and counseling"
    },
    {
      question: "What do psychiatric nurses emphasize in patient care?",
      options: [
        "Providing emotional and psychological support",
        "Focusing primarily on medication",
        "Performing physical therapy"
      ],
      correctAnswer: "Providing emotional and psychological support"
    },
    {
      question: "Which professional standard defines psychiatric nursing roles in the United States?",
      options: [
        "American Psychiatric Nurses Association (APNA) standards",
        "American Nurses Association (ANA) Standards of Practice",
        "National Institute of Mental Health (NIMH) guidelines"
      ],
      correctAnswer: "American Nurses Association (ANA) Standards of Practice"
    },
    {
      question: "What is an essential component of psychiatric nursing practice?",
      options: [
        "Caring for patients with chronic conditions",
        "Establishing therapeutic relationships with patients",
        "Focusing only on medication management"
      ],
      correctAnswer: "Establishing therapeutic relationships with patients"
    },
    {
      question: "Which approach is central to psychiatric nursing practice?",
      options: [
        "Behavioral therapy",
        "Patient-centered care",
        "Pharmacological interventions"
      ],
      correctAnswer: "Patient-centered care"
    },
    {
      question: "What aspect of patient care do psychiatric nurses focus on?",
      options: [
        "Physical rehabilitation",
        "Mental and emotional health",
        "End-of-life care"
      ],
      correctAnswer: "Mental and emotional health"
    },
    {
      question: "Which of the following is a key responsibility of a psychiatric nurse?",
      options: [
        "Performing surgeries",
        "Assessing mental health status",
        "Managing laboratory tests"
      ],
      correctAnswer: "Assessing mental health status"
    },
    {
      question: "What is a common intervention used by psychiatric nurses?",
      options: [
        "Cognitive behavioral therapy",
        "Providing pharmacological treatments",
        "Physical therapy exercises"
      ],
      correctAnswer: "Cognitive behavioral therapy"
    },
    {
      question: "Which of the following are considered key skills for psychiatric nurses?",
      options: [
        "Interpersonal communication and active listening",
        "Performing diagnostic tests",
        "Providing surgical interventions"
      ],
      correctAnswer: "Interpersonal communication and active listening"
    },
    {
      question: "Which professional organization sets practice standards for psychiatric nursing in the United States?",
      options: [
        "American Nurses Association (ANA)",
        "National Nursing Association",
        "World Health Organization (WHO)"
      ],
      correctAnswer: "American Nurses Association (ANA)"
    },
    {
      question: "Which of the following is a primary goal of psychiatric nursing?",
      options: [
        "Managing physical illness",
        "Supporting mental health recovery",
        "Providing spiritual care"
      ],
      correctAnswer: "Supporting mental health recovery"
    },
    {
      question: "What type of care do psychiatric nurses primarily provide?",
      options: [
        "Surgical care",
        "Psychiatric care focused on mental health",
        "Acute care for physical injuries"
      ],
      correctAnswer: "Psychiatric care focused on mental health"
    },
    {
      question: "Which of the following is an essential practice for psychiatric nurses?",
      options: [
        "Maintaining therapeutic boundaries",
        "Making independent treatment decisions",
        "Providing physical therapy"
      ],
      correctAnswer: "Maintaining therapeutic boundaries"
    },
    {
      question: "What is the basis for psychiatric nursing interventions?",
      options: [
        "Medical diagnosis",
        "Theories of mental health and human behavior",
        "Only patient complaints"
      ],
      correctAnswer: "Theories of mental health and human behavior"
    },
    {
      question: "Which patient group is a focus of psychiatric nursing care?",
      options: [
        "Patients with chronic physical illnesses",
        "Individuals with mental health disorders",
        "Patients recovering from surgery"
      ],
      correctAnswer: "Individuals with mental health disorders"
    },
    {
      question: "What is an important ethical standard for psychiatric nurses?",
      options: [
        "Maintaining patient confidentiality",
        "Giving patients complete control over their treatment",
        "Performing physical exams"
      ],
      correctAnswer: "Maintaining patient confidentiality"
    },
    {
      question: "What is a major role of psychiatric nurses in inpatient settings?",
      options: [
        "Performing surgeries",
        "Monitoring patient safety and well-being",
        "Managing outpatient care"
      ],
      correctAnswer: "Monitoring patient safety and well-being"
    },
    {
      question: "What practice standard ensures safe and effective care in psychiatric nursing?",
      options: [
        "Code of Ethics for Nurses",
        "International Nurse Practice Standards",
        "Medical Model of Care"
      ],
      correctAnswer: "Code of Ethics for Nurses"
    },
    {
      question: "Which of the following defines the role of psychiatric nurses in patient education?",
      options: [
        "Providing in-depth physical therapy instructions",
        "Educating patients about their mental health treatment options",
        "Performing administrative duties"
      ],
      correctAnswer: "Educating patients about their mental health treatment options"
    },
    {
      question: "What is a primary focus of psychiatric nursing research?",
      options: [
        "Developing new pharmaceutical treatments",
        "Improving patient outcomes in mental health care",
        "Focusing only on diagnostic tools"
      ],
      correctAnswer: "Improving patient outcomes in mental health care"
    },
    {
      question: "What kind of relationships do psychiatric nurses build with patients?",
      options: [
        "Therapeutic relationships",
        "Family-oriented relationships",
        "Business-like relationships"
      ],
      correctAnswer: "Therapeutic relationships"
    },
    {
      question: "What standard guides psychiatric nurses in maintaining their professional boundaries?",
      options: [
        "Professional ethics",
        "Peer review",
        "Medical directives"
      ],
      correctAnswer: "Professional ethics"
    },
    {
      question: "Which of the following is a common challenge in psychiatric nursing?",
      options: [
        "Physical injuries",
        "Medication management",
        "Managing emotional responses and crises"
      ],
      correctAnswer: "Managing emotional responses and crises"
    },
    {
      question: "Which skill is most essential for psychiatric nurses in managing patient crises?",
      options: [
        "Quick decision-making",
        "Physical restraint",
        "Clear communication and de-escalation"
      ],
      correctAnswer: "Clear communication and de-escalation"
    },
    {
      question: "Which of the following is an important aspect of psychiatric nursing practice?",
      options: [
        "Incorporating both physical and mental health care",
        "Focusing on one treatment modality",
        "Addressing only severe psychiatric conditions"
      ],
      correctAnswer: "Incorporating both physical and mental health care"
    },
    {
      question: "Which organization developed the psychiatric nursing standards of practice?",
      options: [
        "American Nurses Association (ANA)",
        "National Mental Health Organization",
        "American Psychiatric Association"
      ],
      correctAnswer: "American Nurses Association (ANA)"
    },
    {
      question: "What is the key role of psychiatric nurses in preventing relapse in mental health patients?",
      options: [
        "Offering continuous emotional support",
        "Managing only medications",
        "Performing physical assessments"
      ],
      correctAnswer: "Offering continuous emotional support"
    },
    {
      question: "What is the major purpose of psychiatric nursing interventions?",
      options: [
        "To manage the patients' emotional and mental well-being",
        "To provide physical rehabilitation",
        "To solely administer medications"
      ],
      correctAnswer: "To manage the patients' emotional and mental well-being"
    },
    {
      question: "What ethical principle is crucial for psychiatric nurses when interacting with patients?",
      options: [
        "Veracity (truth-telling)",
        "Non-maleficence (do no harm)",
        "Paternalism"
      ],
      correctAnswer: "Non-maleficence (do no harm)"
    }
  ],
};

const Quiz = ({ markCourseAsCompleted }) => {
  const { id } = useParams();
  const questions = quizData[id];
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({ ...answers, [questionIndex]: selectedOption });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    markCourseAsCompleted(Number(id)); // Mark course as completed
  };

  const score = questions.reduce((acc, question, index) => {
    if (answers[index] === question.correctAnswer) acc++;
    return acc;
  }, 0);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 bg-gradient-to-r from-green-50 via-teal-100 to-cyan-200 p-5">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-6 text-center">Quiz on Lesson {id}</h1>

        {/* Quiz Questions */}
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="text-xl font-semibold">{question.question}</p>
            <div className="mt-2 space-y-2">
              {question.options.map((option, i) => {
                const isSelected = answers[index] === option;
                const isCorrect = option === question.correctAnswer;
                const isIncorrect = !isCorrect && isSelected;

                return (
                  <label
                    key={i}
                    className={`block p-2 rounded-lg border cursor-pointer 
                      ${submitted && isCorrect ? "bg-green-300" : ""}
                      ${submitted && isIncorrect ? "bg-red-300" : ""}
                      ${!submitted && isSelected ? "bg-blue-200" : ""}
                    `}
                  >
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white p-2 rounded-full w-1/2"
          >
            Submit
          </button>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-2xl font-semibold">Your score: {score} out of {questions.length}</p>
            <button
              onClick={goHome}
              className="mt-4 bg-green-500 text-white p-2 rounded-full w-full"
            >
              Go Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
