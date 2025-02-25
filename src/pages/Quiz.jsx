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
  2:[
    {

      "question": "What is the primary focus of psychiatric nursing?",
      "options": [
        "Providing physical care to patients",
        "Supporting the mental health and well-being of patients",
        "Diagnosing mental disorders"
      ],
      "correctAnswer": "Supporting the mental health and well-being of patients"
    },
    {
      "question": "Which of the following is a key role of psychiatric nurses?",
      "options": [
        "Administering medication",
        "Providing emotional support and counseling",
        "Performing surgeries"
      ],
      "correctAnswer": "Providing emotional support and counseling"
    },
    {
      "question": "What do psychiatric nurses emphasize in patient care?",
      "options": [
        "Providing emotional and psychological support",
        "Focusing primarily on medication",
        "Performing physical therapy"
      ],
      "correctAnswer": "Providing emotional and psychological support"
    },
    {
      "question": "Which professional standard defines psychiatric nursing roles in the United States?",
      "options": [
        "American Psychiatric Nurses Association (APNA) standards",
        "American Nurses Association (ANA) Standards of Practice",
        "National Institute of Mental Health (NIMH) guidelines"
      ],
      "correctAnswer": "American Nurses Association (ANA) Standards of Practice"
    },
    {
      "question": "What is an essential component of psychiatric nursing practice?",
      "options": [
        "Caring for patients with chronic conditions",
        "Establishing therapeutic relationships with patients",
        "Focusing only on medication management"
      ],
      "correctAnswer": "Establishing therapeutic relationships with patients"
    },
    {
      "question": "Which approach is central to psychiatric nursing practice?",
      "options": [
        "Behavioral therapy",
        "Patient-centered care",
        "Pharmacological interventions"
      ],
      "correctAnswer": "Patient-centered care"
    },
    {
      "question": "What aspect of patient care do psychiatric nurses focus on?",
      "options": [
        "Physical rehabilitation",
        "Mental and emotional health",
        "End-of-life care"
      ],
      "correctAnswer": "Mental and emotional health"
    },
    {
      "question": "Which of the following is a key responsibility of a psychiatric nurse?",
      "options": [
        "Performing surgeries",
        "Assessing mental health status",
        "Managing laboratory tests"
      ],
      "correctAnswer": "Assessing mental health status"
    },
    {
      "question": "What is a common intervention used by psychiatric nurses?",
      "options": [
        "Cognitive behavioral therapy",
        "Providing pharmacological treatments",
        "Physical therapy exercises"
      ],
      "correctAnswer": "Cognitive behavioral therapy"
    },
    {
      "question": "Which of the following are considered key skills for psychiatric nurses?",
      "options": [
        "Interpersonal communication and active listening",
        "Performing diagnostic tests",
        "Providing surgical interventions"
      ],
      "correctAnswer": "Interpersonal communication and active listening"
    },
    {
      "question": "Which professional organization sets practice standards for psychiatric nursing in the United States?",
      "options": [
        "American Nurses Association (ANA)",
        "National Nursing Association",
        "World Health Organization (WHO)"
      ],
      "correctAnswer": "American Nurses Association (ANA)"
    },
    {
      "question": "Which of the following is a primary goal of psychiatric nursing?",
      "options": [
        "Managing physical illness",
        "Supporting mental health recovery",
        "Providing spiritual care"
      ],
      "correctAnswer": "Supporting mental health recovery"
    },
    {
      "question": "What type of care do psychiatric nurses primarily provide?",
      "options": [
        "Surgical care",
        "Psychiatric care focused on mental health",
        "Acute care for physical injuries"
      ],
      "correctAnswer": "Psychiatric care focused on mental health"
    },
    {
      "question": "Which of the following is an essential practice for psychiatric nurses?",
      "options": [
        "Maintaining therapeutic boundaries",
        "Making independent treatment decisions",
        "Providing physical therapy"
      ],
      "correctAnswer": "Maintaining therapeutic boundaries"
    },
    {
      "question": "What is the basis for psychiatric nursing interventions?",
      "options": [
        "Medical diagnosis",
        "Theories of mental health and human behavior",
        "Only patient complaints"
      ],
      "correctAnswer": "Theories of mental health and human behavior"
    },
    {
      "question": "Which patient group is a focus of psychiatric nursing care?",
      "options": [
        "Patients with chronic physical illnesses",
        "Individuals with mental health disorders",
        "Patients recovering from surgery"
      ],
      "correctAnswer": "Individuals with mental health disorders"
    },
    {
      "question": "What is an important ethical standard for psychiatric nurses?",
      "options": [
        "Maintaining patient confidentiality",
        "Giving patients complete control over their treatment",
        "Performing physical exams"
      ],
      "correctAnswer": "Maintaining patient confidentiality"
    },
    {
      "question": "What is a major role of psychiatric nurses in inpatient settings?",
      "options": [
        "Performing surgeries",
        "Monitoring patient safety and well-being",
        "Managing outpatient care"
      ],
      "correctAnswer": "Monitoring patient safety and well-being"
    },
    {
      "question": "What practice standard ensures safe and effective care in psychiatric nursing?",
      "options": [
        "Code of Ethics for Nurses",
        "International Nurse Practice Standards",
        "Medical Model of Care"
      ],
      "correctAnswer": "Code of Ethics for Nurses"
    },
    {
      "question": "Which of the following defines the role of psychiatric nurses in patient education?",
      "options": [
        "Providing in-depth physical therapy instructions",
        "Educating patients about their mental health treatment options",
        "Performing administrative duties"
      ],
      "correctAnswer": "Educating patients about their mental health treatment options"
    },
    {
      "question": "What is a primary focus of psychiatric nursing research?",
      "options": [
        "Developing new pharmaceutical treatments",
        "Improving patient outcomes in mental health care",
        "Focusing only on diagnostic tools"
      ],
      "correctAnswer": "Improving patient outcomes in mental health care"
    },
    {
      "question": "What kind of relationships do psychiatric nurses build with patients?",
      "options": [
        "Therapeutic relationships",
        "Family-oriented relationships",
        "Business-like relationships"
      ],
      "correctAnswer": "Therapeutic relationships"
    },
    {
      "question": "What standard guides psychiatric nurses in maintaining their professional boundaries?",
      "options": [
        "Professional ethics",
        "Peer review",
        "Medical directives"
      ],
      "correctAnswer": "Professional ethics"
    },
    {
      "question": "Which of the following is a common challenge in psychiatric nursing?",
      "options": [
        "Physical injuries",
        "Medication management",
        "Managing emotional responses and crises"
      ],
      "correctAnswer": "Managing emotional responses and crises"
    },
    {
      "question": "Which skill is most essential for psychiatric nurses in managing patient crises?",
      "options": [
        "Quick decision-making",
        "Physical restraint",
        "Clear communication and de-escalation"
      ],
      "correctAnswer": "Clear communication and de-escalation"
    },
    {
      "question": "Which of the following is an important aspect of psychiatric nursing practice?",
      "options": [
        "Incorporating both physical and mental health care",
        "Focusing on one treatment modality",
        "Addressing only severe psychiatric conditions"
      ],
      "correctAnswer": "Incorporating both physical and mental health care"
    },
    {
      "question": "Which organization developed the psychiatric nursing standards of practice?",
      "options": [
        "American Nurses Association (ANA)",
        "National Mental Health Organization",
        "American Psychiatric Association"
      ],
      "correctAnswer": "American Nurses Association (ANA)"
    },
    {
      "question": "What is the key role of psychiatric nurses in preventing relapse in mental health patients?",
      "options": [
        "Offering continuous emotional support",
        "Managing only medications",
        "Performing physical assessments"
      ],
      "correctAnswer": "Offering continuous emotional support"
    },
    {
      "question": "What is the major purpose of psychiatric nursing interventions?",
      "options": [
        "To manage the patients' emotional and mental well-being",
        "To provide physical rehabilitation",
        "To solely administer medications"
      ],
      "correctAnswer": "To manage the patients' emotional and mental well-being"
    },
    {
      "question": "What ethical principle is crucial for psychiatric nurses when interacting with patients?",
      "options": [
        "Veracity (truth-telling)",
        "Non-maleficence (do no harm)",
        "Paternalism"
      ],
      "correctAnswer": "Non-maleficence (do no harm)"
    }
  ],
  3:[
    {
      "question": "What behavior is commonly observed in clients with anxiety?",
      "options": [
        " Speaking loudly",
        "Repetitive movements like tapping feet or drumming fingers",
        "Speaking in neologisms"
      ],
      "correctAnswer": "Repetitive movements like tapping feet or drumming fingers"
    },
    {
      "question": "Which of the following is a sign of psychomotor retardation?",
      "options": [
        "Slow movement",
        " Hyperactivity",
        "Speech that is difficult to understand"
      ],
      "correctAnswer": "Slow movement"
    },
    {
      "question": "What is waxy flexibility?",
      "options": [
        " A decrease in speech tone",
        "Holding an awkward posture for an extended period",
        " Excessive talking"
      ],
      "correctAnswer": "Holding an awkward posture for an extended period"
    },
    {
      "question": "Which of the following is a sign of disorganized speech?",
      "options": [
        "Nonstop talking",
        " Brief responses",
        " Irrelevance to questions"
      ],
      "correctAnswer": " Irrelevance to questions"
    },
    {
      "question": "What is an example of neologisms?",
      "options": [
        " Repeating phrases",
        "Creating made-up words",
        "Speaking too slowly"
      ],
      "correctAnswer": "Creating made-up words"
    },
    {
      "question": "Which of the following speech patterns indicates rapid thought?",
      "options": [
        "Slow speech",
        "Flight of ideas",
        "Tangential thinking"
      ],
      "correctAnswer": "Flight of ideas"
    },
    {
      "question": "What is thought broadcasting?",
      "options": [
        "Believing that others can hear one’s thoughts",
        " Thinking others can hear everything around them",
        "Thinking that thoughts are deleted by others"
      ],
      "correctAnswer": "Believing that others can hear one’s thoughts"
    },
    {
      "question": "What is thought insertion?",
      "options": [
        "Believing that thoughts are put in the mind by others",
        "Thinking one’s thoughts are private",
        "Believing others cannot think"
      ],
      "correctAnswer": "Believing that thoughts are put in the mind by others"
    },
    {
      "question": "Which cognitive function involves assessing a person’s awareness of their surroundings?",
      "options": [
        "Orientation",
        "Memory",
        "Abstract reasoning"
      ],
      "correctAnswer": "Orientation"
    },
    {
      "question": "Which test helps assess a person’s attention and concentration?",
      "options": [
        "Spelling words backward",
        "Identifying memory gaps",
        " Rhetorical question answers"
      ],
      "correctAnswer": "Spelling words backward"
    },
    {
      "question": "What is abstract reasoning?",
      "options": [
        "The ability to understand literal concepts",
        "Understanding proverbs or metaphors",
        "Memorizing facts"
      ],
      "correctAnswer": "Understanding proverbs or metaphors"
    },
    {
      "question": "What type of mood is characterized by quick and unpredictable shifts?",
      "options": [
        "Blunted",
        "Labile",
        "Flat"
      ],
      "correctAnswer": "Labile"
    },
    {
      "question": "Which of the following is a description of a flat affect?",
      "options": [
        "Emotional responses that are exaggerated",
        "Absence or severe reduction of emotional expression",
        "Emotional responses appropriate to the situation"
      ],
      "correctAnswer": "Absence or severe reduction of emotional expression"
    },
    {
      "question": "What does insight in psychiatric nursing refer to?",
      "options": [
        "The client’s understanding of their mental state",
        "The ability to make decisions",
        "The assessment of physical health"
      ],
      "correctAnswer": "The client’s understanding of their mental state"
    },
    {
      "question": "What does judgment in psychiatric nursing refer to?",
      "options": [
        "The ability to recognize the presence of hallucinations",
        "The ability to make sound decisions",
        "The ability to recall memories"
      ],
      "correctAnswer": "The ability to make sound decisions"
    },
    {
      "question": "What is an example of a perceptual disturbance?",
      "options": [
        "Hearing voices that aren’t there",
        "Making inappropriate jokes",
        "Recalling past experiences inaccurately"
      ],
      "correctAnswer": "Hearing voices that aren’t there"
    },
    {
      "question": "Which of the following is an example of derealization?",
      "options": [
        "Believing one is dead",
        "A feeling of detachment from surroundings",
        "Thinking that others can hear thoughts"
      ],
      "correctAnswer": "A feeling of detachment from surroundings"
    },
    {
      "question": "Which of the following involves the false belief that others are plotting harm?",
      "options": [
        "Persecutory delusions",
        "Grandiose delusions",
        "Somatic delusions"
      ],
      "correctAnswer": "Persecutory delusions"
    },
    {
      "question": "What is a sign of grandiose delusions?",
      "options": [
        "Believing one is a historical figure",
        " Believing one’s body is diseased",
        "Believing one’s thoughts can be controlled by others"
      ],
      "correctAnswer": "Believing one is a historical figure"
    },
    {
      "question": "What does somatic delusion involve?",
      "options": [
        "Thinking one is dead",
        "Believing one has a physical illness",
        "Thinking the media is talking about them"
      ],
      "correctAnswer": "Believing one has a physical illness"
    },
    {
      "question": "What does the term word salad describe?",
      "options": [
        "Logical and coherent speech",
        "Jumbled, incoherent speech",
        " Long, thoughtful responses"
      ],
      "correctAnswer": "Jumbled, incoherent speech"
    },
    {
      "question": "Which of the following would indicate a disorder of thought process?",
      "options": [
        "A person frequently speaks in disorganized, rambling patterns",
        " A person is able to maintain eye contact",
        "A person is fully aware of their surroundings"
      ],
      "correctAnswer": "A person frequently speaks in disorganized, rambling patterns"
    },
    {
      "question": "What is a common tool used to assess memory in psychiatric nursing?",
      "options": [
        " Asking about recent events",
        " Asking the patient to spell words backward",
        "Performing physical exercises"
      ],
      "correctAnswer": " Asking about recent events"
    },
    {
      "question": "Which of the following statements is true about cognitive ability assessments?",
      "options": [
        "They help assess a patient’s memory, attention, and reasoning",
        "They focus solely on a patient’s physical well-being",
        "They are used to diagnose physical conditions"
      ],
      "correctAnswer": "They help assess a patient’s memory, attention, and reasoning"
    },
    {
      "question": "What is an important factor when assessing speech in psychiatric patients?",
      "options": [
        "Tone and rhythm of speech",
        "Speed of walking",
        "Memory recall"
      ],
      "correctAnswer": "Tone and rhythm of speech"
    },
    {
      "question": "What is a key aspect of psychiatric nursing assessment?",
      "options": [
        "Evaluating physical injuries",
        "Observing mental health status through behaviors, speech, and thought patterns",
        "Identifying allergies"
      ],
      "correctAnswer": "Observing mental health status through behaviors, speech, and thought patterns"
    },
    {
      "question": "Which of the following is an example of a delusion related to religion?",
      "options": [
        "Believing they are the reincarnation of a deity",
        "Believing they are being controlled by an external force",
        " Believing they can read minds"
      ],
      "correctAnswer": "Believing they are the reincarnation of a deity"
    },
    {
      "question": "Which of the following is an example of an ethical concern for psychiatric nurses?",
      "options": [
        "Maintaining patient confidentiality",
        "Making decisions for the patient without consent",
        "Ignoring patient concerns"
      ],
      "correctAnswer": "Maintaining patient confidentiality"
    },
    {
      "question": "Which of the following is an essential skill for psychiatric nurses?",
      "options": [
        " Performing diagnostic tests",
        "Communicating effectively and de-escalating crises",
        "Administering surgeries"
      ],
      "correctAnswer": "Communicating effectively and de-escalating crises"
    },
    {
      "question": "What is the primary purpose of assessing the client’s level of consciousness?",
      "options": [
        "To evaluate the patient’s emotional state",
        "To monitor their awareness and alertness",
        "To determine the patient’s memory function"
      ],
      "correctAnswer": "To monitor their awareness and alertness"
    }
  ],
  4:[
    {
      "question": "What behavior is commonly observed in clients with anxiety?",
      "options": [
        " Speaking loudly",
        "Repetitive movements like tapping feet or drumming fingers",
        "Speaking in neologisms"
      ],
      "correctAnswer": "Repetitive movements like tapping feet or drumming fingers"
    },
    {
      "question": "Which of the following is a sign of psychomotor retardation?",
      "options": [
        "Slow movement",
        " Hyperactivity",
        "Speech that is difficult to understand"
      ],
      "correctAnswer": "Slow movement"
    },
    {
      "question": "What is waxy flexibility?",
      "options": [
        " A decrease in speech tone",
        "Holding an awkward posture for an extended period",
        " Excessive talking"
      ],
      "correctAnswer": "Holding an awkward posture for an extended period"
    },
    {
      "question": "Which of the following is a sign of disorganized speech?",
      "options": [
        "Nonstop talking",
        " Brief responses",
        " Irrelevance to questions"
      ],
      "correctAnswer": " Irrelevance to questions"
    },
    {
      "question": "What is an example of neologisms?",
      "options": [
        " Repeating phrases",
        "Creating made-up words",
        "Speaking too slowly"
      ],
      "correctAnswer": "Creating made-up words"
    },
    {
      "question": "Which of the following speech patterns indicates rapid thought?",
      "options": [
        "Slow speech",
        "Flight of ideas",
        "Tangential thinking"
      ],
      "correctAnswer": "Flight of ideas"
    },
    {
      "question": "What is thought broadcasting?",
      "options": [
        "Believing that others can hear one’s thoughts",
        " Thinking others can hear everything around them",
        "Thinking that thoughts are deleted by others"
      ],
      "correctAnswer": "Believing that others can hear one’s thoughts"
    },
    {
      "question": "What is thought insertion?",
      "options": [
        "Believing that thoughts are put in the mind by others",
        "Thinking one’s thoughts are private",
        "Believing others cannot think"
      ],
      "correctAnswer": "Believing that thoughts are put in the mind by others"
    },
    {
      "question": "Which cognitive function involves assessing a person’s awareness of their surroundings?",
      "options": [
        "Orientation",
        "Memory",
        "Abstract reasoning"
      ],
      "correctAnswer": "Orientation"
    },
    {
      "question": "Which test helps assess a person’s attention and concentration?",
      "options": [
        "Spelling words backward",
        "Identifying memory gaps",
        " Rhetorical question answers"
      ],
      "correctAnswer": "Spelling words backward"
    },
    {
      "question": "What is abstract reasoning?",
      "options": [
        "The ability to understand literal concepts",
        "Understanding proverbs or metaphors",
        "Memorizing facts"
      ],
      "correctAnswer": "Understanding proverbs or metaphors"
    },
    {
      "question": "What type of mood is characterized by quick and unpredictable shifts?",
      "options": [
        "Blunted",
        "Labile",
        "Flat"
      ],
      "correctAnswer": "Labile"
    },
    {
      "question": "Which of the following is a description of a flat affect?",
      "options": [
        "Emotional responses that are exaggerated",
        "Absence or severe reduction of emotional expression",
        "Emotional responses appropriate to the situation"
      ],
      "correctAnswer": "Absence or severe reduction of emotional expression"
    },
    {
      "question": "What does insight in psychiatric nursing refer to?",
      "options": [
        "The client’s understanding of their mental state",
        "The ability to make decisions",
        "The assessment of physical health"
      ],
      "correctAnswer": "The client’s understanding of their mental state"
    },
    {
      "question": "What does judgment in psychiatric nursing refer to?",
      "options": [
        "The ability to recognize the presence of hallucinations",
        "The ability to make sound decisions",
        "The ability to recall memories"
      ],
      "correctAnswer": "The ability to make sound decisions"
    },
    {
      "question": "What is an example of a perceptual disturbance?",
      "options": [
        "Hearing voices that aren’t there",
        "Making inappropriate jokes",
        "Recalling past experiences inaccurately"
      ],
      "correctAnswer": "Hearing voices that aren’t there"
    },
    {
      "question": "Which of the following is an example of derealization?",
      "options": [
        "Believing one is dead",
        "A feeling of detachment from surroundings",
        "Thinking that others can hear thoughts"
      ],
      "correctAnswer": "A feeling of detachment from surroundings"
    },
    {
      "question": "Which of the following involves the false belief that others are plotting harm?",
      "options": [
        "Persecutory delusions",
        "Grandiose delusions",
        "Somatic delusions"
      ],
      "correctAnswer": "Persecutory delusions"
    },
    {
      "question": "What is a sign of grandiose delusions?",
      "options": [
        "Believing one is a historical figure",
        " Believing one’s body is diseased",
        "Believing one’s thoughts can be controlled by others"
      ],
      "correctAnswer": "Believing one is a historical figure"
    },
    {
      "question": "What does somatic delusion involve?",
      "options": [
        "Thinking one is dead",
        "Believing one has a physical illness",
        "Thinking the media is talking about them"
      ],
      "correctAnswer": "Believing one has a physical illness"
    },
    {
      "question": "What does the term word salad describe?",
      "options": [
        "Logical and coherent speech",
        "Jumbled, incoherent speech",
        " Long, thoughtful responses"
      ],
      "correctAnswer": "Jumbled, incoherent speech"
    },
    {
      "question": "Which of the following would indicate a disorder of thought process?",
      "options": [
        "A person frequently speaks in disorganized, rambling patterns",
        " A person is able to maintain eye contact",
        "A person is fully aware of their surroundings"
      ],
      "correctAnswer": "A person frequently speaks in disorganized, rambling patterns"
    },
    {
      "question": "What is a common tool used to assess memory in psychiatric nursing?",
      "options": [
        " Asking about recent events",
        " Asking the patient to spell words backward",
        "Performing physical exercises"
      ],
      "correctAnswer": " Asking about recent events"
    },
    {
      "question": "Which of the following statements is true about cognitive ability assessments?",
      "options": [
        "They help assess a patient’s memory, attention, and reasoning",
        "They focus solely on a patient’s physical well-being",
        "They are used to diagnose physical conditions"
      ],
      "correctAnswer": "They help assess a patient’s memory, attention, and reasoning"
    },
    {
      "question": "What is an important factor when assessing speech in psychiatric patients?",
      "options": [
        "Tone and rhythm of speech",
        "Speed of walking",
        "Memory recall"
      ],
      "correctAnswer": "Tone and rhythm of speech"
    },
    {
      "question": "What is a key aspect of psychiatric nursing assessment?",
      "options": [
        "Evaluating physical injuries",
        "Observing mental health status through behaviors, speech, and thought patterns",
        "Identifying allergies"
      ],
      "correctAnswer": "Observing mental health status through behaviors, speech, and thought patterns"
    },
    {
      "question": "Which of the following is an example of a delusion related to religion?",
      "options": [
        "Believing they are the reincarnation of a deity",
        "Believing they are being controlled by an external force",
        " Believing they can read minds"
      ],
      "correctAnswer": "Believing they are the reincarnation of a deity"
    },
    {
      "question": "Which of the following is an example of an ethical concern for psychiatric nurses?",
      "options": [
        "Maintaining patient confidentiality",
        "Making decisions for the patient without consent",
        "Ignoring patient concerns"
      ],
      "correctAnswer": "Maintaining patient confidentiality"
    },
    {
      "question": "Which of the following is an essential skill for psychiatric nurses?",
      "options": [
        " Performing diagnostic tests",
        "Communicating effectively and de-escalating crises",
        "Administering surgeries"
      ],
      "correctAnswer": "Communicating effectively and de-escalating crises"
    },
    {
      "question": "What is the primary purpose of assessing the client’s level of consciousness?",
      "options": [
        "To evaluate the patient’s emotional state",
        "To monitor their awareness and alertness",
        "To determine the patient’s memory function"
      ],
      "correctAnswer": "To monitor their awareness and alertness"
    }
  ],
  5:[
    {
      "question": "Which defense mechanism is at play when someone denies their addiction even after being confronted with clear evidence?",
      "options": [
        "Denial",
        "Projection",
        "Rationalization"
      ],
      "correctAnswer": "Denial"
    },
    {
      "question": " If a person projects their own insecurities about their appearance onto someone else, thinking others are always judging them, which defense mechanism are they using?",
      "options": [
        "Projection",
        "Repression",
        "Denial"
      ],
      "correctAnswer": "Projection"
    },
    {
      "question": "When a person is angry at their boss but instead takes out their frustration on their partner at home, this is an example of which defense mechanism?",
      "options": [
        "Displacement",
        "Sublimation",
        "Reaction-formation"
      ],
      "correctAnswer": "Displacement"
    },
    {
      "question": " Which defense mechanism involves avoiding a painful reality by making excuses or finding logical reasons for a behavior?",
      "options": [
        "Rationalization",
        "Splitting",
        "Projection"
      ],
      "correctAnswer": "Rationalization"
    },
    {
      "question": "If someone experiences guilt about an argument and then does something overly nice for the person they argued with to make up for  their feelings, which defense mechanism is being used?",
      "options": [
        "Undoing",
        "Repression",
        "Fixation"
      ],
      "correctAnswer": "Undoing"
    },
    {
      "question": "When a person is unable to face their childhood trauma and blocks out memories of it, they are displaying which defense mechanism?",
      "options": [
        "Repression",
        "Dissociation",
        "Regression"
      ],
      "correctAnswer": "Repression"
    },
    {
      "question": "If someone becomes overly meticulous about cleanliness in response to unconscious feelings of anger or hostility, which defense mechanism are they using?",
      "options": [
        "Reaction-formation",
        "Fixation",
        "Intellectualization"
      ],
      "correctAnswer": "Reaction-formation"
    },
    {
      "question": "When someone reacts to a stressful situation by withdrawing into a fantasy world or imagining themselves in a completely different, idealized situation, they are using:",
      "options": [
        "Fantasy-formation",
        "Sublimation",
        "Projection"
      ],
      "correctAnswer": "Fantasy-formation"
    },
    {
      "question": "If a person behaves aggressively but blames their anger on others, they may be using which defense mechanism?",
      "options": [
        "Projection",
        "Splitting",
        "Sublimation"
      ],
      "correctAnswer": "Projection"
    },
    {
      "question": "When a person develops physical symptoms like headaches or stomach problems to avoid dealing with emotional conflict, which defense mechanism is being used?",
      "options": [
        "Conversion",
        "Displacement",
        "Regression"
      ],
      "correctAnswer": "Conversion"
    },
    {
      "question": "If someone adopts the ideas, behaviors, and attitudes of a popular celebrity or role model, they may be using which defense mechanism?",
      "options": [
        "Identification",
        "Sublimation",
        "Repression"
      ],
      "correctAnswer": "Identification"
    },
    {
      "question": "A person who cannot handle stress and starts to act like a child again, seeking comfort or behaving immaturely, is displaying which defense mechanism?",
      "options": [
        "Regression",
        "Dissociation",
        "Rationalization"
      ],
      "correctAnswer": "Regression"
    },
    {
      "question": "When a person avoids painful memories by only focusing on the logical aspects of the situation, they are using which defense mechanism?",
      "options": [
        "Intellectualization",
        "Rationalization",
        "Splitting"
      ],
      "correctAnswer": "Intellectualization"
    },
    {
      "question": "If a person blames their bad behavior on someone else, they may be using which defense mechanism?",
      "options": [
        "Projection",
        "Denial",
        "Displacement"
      ],
      "correctAnswer": "Projection"
    },
    {
      "question": "When a person deals with anxiety by focusing on work or other productive tasks instead of confronting emotional issues, which defense mechanism is being used?",
      "options": [
        "Sublimation",
        "Reaction-formation",
        "Fixation"
      ],
      "correctAnswer": "Sublimation"
    },
    {
      "question": "A person who constantly tells themselves they don’t care about their partner, even though deep down they are deeply invested in the relationship, is likely using which defense mechanism?",
      "options": [
        "Denial",
        "Repression",
        "Reaction-formation"
      ],
      "correctAnswer": "Denial"
    },
    {
      "question": "If a person repeatedly acts out in anger and then feels the need to make up for their behavior by overcompensating with kindness, which defense mechanism is being used?",
      "options": [
        "Undoing",
        "Projection",
        "Dissociation"
      ],
      "correctAnswer": "Undoing"
    },
    {
      "question": "When a person fails a test and tells themselves they didn’t really care about the outcome, they are using which defense mechanism?",
      "options": [
        "Rationalization",
        "Projection",
        "Dissociation"
      ],
      "correctAnswer": "Rationalization"
    },
    {
      "question": "If someone represses memories of a painful breakup, they might experience emotional numbness or avoidance. This is an example of:",
      "options": [
        "Repression",
        "Splitting",
        "Regression"
      ],
      "correctAnswer": "Repression"
    },
    {
      "question": "When someone tries to justify their hurtful actions by claiming they were just being honest or telling the truth, which defense mechanism are they using?",
      "options": [
        "Rationalization",
        "Denial",
        "Projection"
      ],
      "correctAnswer": "Rationalization"
    },
    {
      "question": "If someone feels guilty for being rude and tries to make up for it by being overly polite afterward, they might be using which defense mechanism?",
      "options": [
        "Undoing",
        "Sublimation",
        "Projection"
      ],
      "correctAnswer": "Undoing"
    },
    {
      "question": "When a person splits their views of people into “all good” or “all bad” categories without considering any gray area, they are using which defense mechanism?",
      "options": [
        "Splitting",
        "Fixation",
        "Repression"
      ],
      "correctAnswer": "Splitting"
    },
    {
      "question": "If a person is unable to recall the emotions connected to a traumatic event but remembers all the factual details, they may be using:",
      "options": [
        "Isolation",
        "Intellectualization",
        "Dissociation"
      ],
      "correctAnswer": "Isolation"
    },
    {
      "question": "When a person experiences extreme feelings of anxiety and responds by acting like a child to gain comfort, which defense mechanism is being employed?",
      "options": [
        "Regression",
        "Dissociation",
        "Fixation"
      ],
      "correctAnswer": "Regression"
    },
    {
      "question": "If someone acts like they are unaffected by a tragic event but suppresses their true feelings, they may be using which defense mechanism?",
      "options": [
        "Denial",
        "Projection",
        "Sublimation"
      ],
      "correctAnswer": "Denial"
    },
    {
      "question": "If a person feels anxious but channels that energy into completing a work project or focusing on a hobby, they are likely using:",
      "options": [
        "Sublimation",
        "Fixation",
        "Projection"
      ],
      "correctAnswer": "Sublimation"
    },
    {
      "question": "When someone cannot acknowledge their flaws and instead focuses on pointing out the flaws of others, they are demonstrating which defense mechanism?",
      "options": [
        "Projection",
        "Repression",
        "Splitting"
      ],
      "correctAnswer": "Projection"
    },
    {
      "question": "If a person feels confused and overwhelmed by their emotions and starts acting in a childish manner to cope, which defense mechanism are they using?",
      "options": [
        "Regression",
        "Dissociation",
        "Rationalization"
      ],
      "correctAnswer": "Regression"
    },
    {
      "question": "When a person avoids confronting their emotional issues and instead focuses on facts and details, they are using which defense mechanism?",
      "options": [
        "Intellectualization",
        "Sublimation",
        "Undoing"
      ],
      "correctAnswer": "Intellectualization"
    },
    {
      "question": " If someone constantly tries to reverse a negative action they’ve taken, such as over-apologizing for something they did, which defense mechanism is involved?",
      "options": [
        "Undoing",
        "Rationalization",
        "Repression"
      ],
      "correctAnswer": "Undoing"
    }
  ],
  6:[
    {
      "question": " What is the primary purpose of the DSM-V?",
      "options": [
        "To classify physical diseases",
        "To diagnose mental health disorders",
        "To establish legal requirements for healthcare"
      ],
      "correctAnswer": "To diagnose mental health disorders"
    },
    {
      "question": "Which organization publishes the DSM-V?",
      "options": [
        "World Health Organization (WHO)",
        "American Psychiatric Association (APA)",
        "National Institute of Mental Health (NIMH)"
      ],
      "correctAnswer": "American Psychiatric Association (APA)"
    },
    {
      "question": "When was the DSM-V released?",
      "options": [
        "2005",
        "2013",
        "2020"
      ],
      "correctAnswer": "2013"
    },
    {
      "question": "The ICD-11 is primarily used for:",
      "options": [
        "Classifying mental health disorders only",
        "Diagnosing diseases and health conditions globally",
        "Assigning psychiatric disorders to categories"
      ],
      "correctAnswer": "Diagnosing diseases and health conditions globally"
    },
    {
      "question": "What is the main difference between DSM-V and ICD-11?",
      "options": [
        "DSM-V is global; ICD-11 is regional",
        "DSM-V is used for mental disorders; ICD-11 is for all medical conditions",
        "DSM-V focuses only on childhood disorders"
      ],
      "correctAnswer": "DSM-V is used for mental disorders; ICD-11 is for all medical conditions"
    },
    {
      "question": "The first version of the DSM was published in:",
      "options": [
        "1968",
        "1952",
        "1980"
      ],
      "correctAnswer": "1952"
    },
    {
      "question": "Which of the following is a new feature of ICD-11?",
      "options": [
        "It no longer includes any mental health conditions",
        "It allows combining multiple diagnostic codes",
        "It only focuses on physical health conditions"
      ],
      "correctAnswer": "It allows combining multiple diagnostic codes"
    },
    {
      "question": "Which of these disorders is newly classified in DSM-V?",
      "options": [
        "Anxiety disorders",
        "Hoarding disorder",
        "Schizophrenia"
      ],
      "correctAnswer": "Hoarding disorder"
    },
    {
      "question": "The term psychoneurosis was historically used to describe:",
      "options": [
        "Disorders with a break from reality",
        "Anxiety-related disorders without reality distortion",
        "Severe mood disorders"
      ],
      "correctAnswer": "Anxiety-related disorders without reality distortion"
    },
    {
      "question": "In neuroses, a patient's ability to evaluate reality is:",
      "options": [
        "Impaired",
        "Not impaired",
        "Completely distorted"
      ],
      "correctAnswer": "Not impaired"
    },
    {
      "question": "What is the main pathology in neuroses according to psychoanalytic theory?",
      "options": [
        "Paranoia",
        "Anxiety",
        "Memory loss"
      ],
      "correctAnswer": "Anxiety"
    },
    {
      "question": "Displacement as a defense mechanism can result in:",
      "options": [
        "A deepened understanding of the anxiety source",
        "Phobias, obsessions, and compulsions",
        "A cure for anxiety"
      ],
      "correctAnswer": "Phobias, obsessions, and compulsions"
    },
    {
      "question": "Hysterical neurosis may occur when:",
      "options": [
        "Anxiety is suppressed and turned into a bodily dysfunction",
        "The patient loses touch with reality",
        "The patient experiences severe mood swings"
      ],
      "correctAnswer": "Anxiety is suppressed and turned into a bodily dysfunction"
    },
    {
      "question": "When was the ICD-11 released?",
      "options": [
        "2022",
        "2021",
        "2020"
      ],
      "correctAnswer": "2022"
    },
    {
      "question": "The DSM-V is primarily used in:",
      "options": [
        "Europe",
        "The United States",
        "Asia"
      ],
      "correctAnswer": "The United States"
    },
    {
      "question": "The ICD-11 includes which of the following?",
      "options": [
        "Only mental health conditions",
        "Only physical diseases",
        "Both mental health and physical health conditions"
      ],
      "correctAnswer": "Both mental health and physical health conditions"
    },
    {
      "question": "In the DSM-V, anxiety disorders are classified as:",
      "options": [
        "Mood disorders",
        "Thought disorders",
        "Anxiety disorders"
      ],
      "correctAnswer": "Anxiety disorders"
    },
    {
      "question": "In psychoneurosis, social harmony is typically:",
      "options": [
        "Severely impaired",
        "Not greatly affected",
        "Completely lost"
      ],
      "correctAnswer": "Not greatly affected"
    },
    {
      "question": "Which system is used for global diagnostic standards in psychiatry?",
      "options": [
        "DSM-V",
        "ICD-11",
        "Regression"
      ],
      "correctAnswer": "ICD-11"
    },
    {
      "question": "Anxiety, in the context of neuroses, is primarily experienced as:",
      "options": [
        "A delusion",
        "A distorted reality",
        "A subjective experience that is either repressed or acted upon"
      ],
      "correctAnswer": "A subjective experience that is either repressed or acted upon"
    },
    {
      "question": "Which chapter in ICD-11 focuses on mental health disorders?",
      "options": [
        "Infectious diseases",
        "Psychological and mental health conditions",
        "Cardiovascular diseases"
      ],
      "correctAnswer": "Psychological and mental health conditions"
    },
    {
      "question": "In DSM-V, hoarding disorder is classified as:",
      "options": [
        "A compulsive behavior disorder",
        "A mood disorder",
        "A psychotic disorder"
      ],
      "correctAnswer": "A compulsive behavior disorder"
    },
    {
      "question": "The displacement defense mechanism involves:",
      "options": [
        "Transferring anxiety to a more manageable situation",
        "Turning anxiety into bodily symptoms",
        "Forgetting the source of anxiety completely"
      ],
      "correctAnswer": "Transferring anxiety to a more manageable situation"
    },
    {
      "question": "What type of diagnostic categories does DSM-V focus on?",
      "options": [
        "Personality disorders only",
        "Only severe mental disorders",
        "A range of mental health disorders"
      ],
      "correctAnswer": "A range of mental health disorders"
    },
    {
      "question": "Which of the following is a feature of psychoneurosis?",
      "options": [
        "The patient loses contact with reality",
        "The patient is disconnected from social relationships",
        "The patient's functioning is generally less impaired than in psychosis"
      ],
      "correctAnswer": "The patient's functioning is generally less impaired than in psychosis"
    },
    {
      "question": "Which organization developed the ICD classification system?",
      "options": [
        "American Psychiatric Association",
        "World Health Organization (WHO)",
        "Centers for Disease Control and Prevention (CDC)"
      ],
      "correctAnswer": "World Health Organization (WHO)"
    },
    {
      "question": "Which disorder is considered a new addition to the DSM-V?",
      "options": [
        "Bipolar disorder",
        "Hoarding disorder",
        "Schizophrenia"
      ],
      "correctAnswer": "Hoarding disorder"
    },
    {
      "question": "Which of the following is a major difference between ICD and DSM?",
      "options": [
        "ICD is used worldwide, while DSM is primarily used in the U.S.",
        "DSM is for all medical conditions, while ICD is only for psychiatric disorders",
        "ICD is more detailed for mental health conditions"
      ],
      "correctAnswer": "ICD is used worldwide, while DSM is primarily used in the U.S."
    },
    {
      "question": "Which of the following is considered an objective symptom in neuroses?",
      "options": [
        "A delusion",
        "Repressed anxiety",
        "Knowledge of the illness"
      ],
      "correctAnswer": "Knowledge of the illness"
    },
    {
      "question": "The DSM-V is used to help clinicians in:",
      "options": [
        "Diagnosing mental disorders",
        "Diagnosing physical illnesses only",
        "Classifying medical conditions outside psychiatry"
      ],
      "correctAnswer": "Diagnosing mental disorders"
    }
  ],
  7:[
    {
      "question": "Which approach is essential in modern psychiatry for patient evaluation?",
      "options": [
        "Neurological approach",
        "Biopsychosocial approach",
        "Holistic approach"
      ],
      "correctAnswer": "Biopsychosocial approach"
    },
    {
      "question": "Which of the following is NOT a key aspect of general appearance assessment?",
      "options": [
        "Self-care and cleanliness",
        "Blood pressure levels ",
        "Facial expressions"
      ],
      "correctAnswer": "Blood pressure levels "
    },
    {
      "question": "Gigantism is associated with abnormalities in which system?",
      "options": [
        "Endocrine system ",
        "Cardiovascular system",
        "Respiratory system"
      ],
      "correctAnswer": "Endocrine system "
    },
    {
      "question": "Which is NOT a cognitive function?",
      "options": [
        "Attention",
        "Memory",
        "Digestion"
      ],
      "correctAnswer": "Digestion"
    },
    {
      "question": "Consciousness refers to an individual’s ability to:",
      "options": [
        "Speak fluently",
        "Perceive and respond to their environment",
        "Control involuntary movements"
      ],
      "correctAnswer": "Perceive and respond to their environment"
    },
    {
      "question": "What does Judgment and Insight assess in a psychiatric evaluation?",
      "options": [
        "A patient’s ability to understand their condition ",
        "Their ability to follow commands",
        "Their ability to memorize past events"
      ],
      "correctAnswer": "A patient’s ability to understand their condition "
    },
    {
      "question": "Which factor is NOT included in psychophysiology??",
      "options": [
        "Sleep patterns",
        "Eating habits",
        "Hair growth"
      ],
      "correctAnswer": "Hair growth"
    },
    {
      "question": "Avoidance of eye contact may indicate:",
      "options": [
        "Anxiety or social withdrawal",
        "Increased intelligence",
        "High self-esteem"
      ],
      "correctAnswer": "Anxiety or social withdrawal"
    },
    {
      "question": "Which speech abnormality is characterized by excessive, uncontrolled speech?",
      "options": [
        "Mutism",
        "Logorrhea",
        "Dysphonia"
      ],
      "correctAnswer": "Logorrhea"
    },
    {
      "question": "Aphasia is primarily a disorder affecting:",
      "options": [
        "Movement",
        "Speech",
        "Vision"
      ],
      "correctAnswer": "Speech"
    },
    {
      "question": "A person with deep coma would exhibit:",
      "options": [
        "Response only to loud noises",
        "No response to pain",
        "Occasional eye movements"
      ],
      "correctAnswer": "No response to pain"
    },
    {
      "question": "Which condition is marked by acute confusion and restlessness?",
      "options": [
        "Amnesia",
        "Delirium",
        "Aphasia"
      ],
      "correctAnswer": "Delirium"
    },
    {
      "question": "Allopsychic disorientation refers to confusion regarding:",
      "options": [
        "One’s identity",
        "Surroundings and time",
        "Past memories"
      ],
      "correctAnswer": "Surroundings and time"
    },
    {
      "question": "Which type of attention occurs effortlessly without conscious effort",
      "options": [
        "Spontaneous attention",
        "Voluntary attention",
        "Divided attention"
      ],
      "correctAnswer": "Spontaneous attention"
    },
    {
      "question": "Selective inattention is often linked to:",
      "options": [
        "Anxiety disorders",
        "Depression",
        "Schizophrenia"
      ],
      "correctAnswer": "Anxiety disorders"
    },
    {
      "question": "Which of the following is NOT a memory disorder?",
      "options": [
        "Hypermnesia",
        "Hyperesthesia",
        "Amnesia"
      ],
      "correctAnswer": "Hyperesthesia"
    },
    {
      "question": "Retrograde amnesia affects:",
      "options": [
        "Future memory formation",
        "Past memories",
        "Short-term recall"
      ],
      "correctAnswer": "Past memories"
    },
    {
      "question": "Déjà vu is commonly seen in:",
      "options": [
        "Epilepsy",
        "Autism",
        "Schizophrenia"
      ],
      "correctAnswer": "Epilepsy"
    },
    {
      "question": "What is a key feature of confabulation?",
      "options": [
        "Filling memory gaps with false information ",
        "Complete memory loss",
        "The inability to recognize faces"
      ],
      "correctAnswer": "Filling memory gaps with false information "
    },
    {
      "question": "Hallucinations differ from illusions because hallucinations:",
      "options": [
        "Have a real external stimulus",
        "Occur without an external stimulus ",
        "Only occur in visual form"
      ],
      "correctAnswer": "Occur without an external stimulus "
    },
    {
      "question": "Which of the following is NOT a type of hallucination?",
      "options": [
        "Auditory",
        "Tactile",
        "Macropsia"
      ],
      "correctAnswer": "Macropsia"
    },
    {
      "question": "Macropsia refers to:",
      "options": [
        "Seeing objects as larger than they actually are ",
        "Seeing objects in grayscale",
        "Experiencing tunnel vision"
      ],
      "correctAnswer": "Seeing objects as larger than they actually are "
    },
    {
      "question": "Derealization is described as:",
      "options": [
        "A distorted sense of one’s surroundings",
        " A loss of short-term memory",
        "Seeing objects in black and white"
      ],
      "correctAnswer": "A distorted sense of one’s surroundings"
    },
    {
      "question": "What is a symptom of judgment impairment?",
      "options": [
        "Delusions",
        "Poor decision-making",
        "Increased attention"
      ],
      "correctAnswer": "Poor decision-making"
    },
    {
      "question": "Which disorder is characterized by a person abruptly leaving their usual environment due to memory loss?",
      "options": [
        "Fugue",
        "Delirium",
        "Paranoia"
      ],
      "correctAnswer": "Fugue"
    },
    {
      "question": "Which type of thought disorder is associated with rapid speech connected by word sounds rather than meaning?",
      "options": [
        "Word salad",
        "Clang association",
        "Perseveration"
      ],
      "correctAnswer": "Clang association"
    },
    {
      "question": "Flight of ideas is most commonly seen in:",
      "options": [
        "Mania",
        "Dementia",
        "Delirium"
      ],
      "correctAnswer": "Mania"
    },
    {
      "question": "What is an example of hyperesthesia?",
      "options": [
        "Feeling pain from a light touch",
        "Seeing a blurred image",
        "Misinterpreting an object as something else"
      ],
      "correctAnswer": "Feeling pain from a light touch"
    },
    {
      "question": "Which of the following is a symptom of perception disorder?",
      "options": [
        "Hallucination",
        "Aphasia",
        "Mutism"
      ],
      "correctAnswer": "Hallucination"
    },
    {
      "question": "Depersonalization involves:",
      "options": [
        "Losing awareness of time",
        "Feeling detached from one’s own body",
        "Seeing things that aren’t real"
      ],
      "correctAnswer": "Feeling detached from one’s own body"
    }
  ],
  8:[
    {
      "question": "What is assessed under social behavior in patient assessment?",
      "options": [
        "Compliance with medications",
        "Interactions and social tendencies",
        "Patient's response to treatment"
      ],
      "correctAnswer": "Interactions and social tendencies"
    },
    {
      "question": "Which of the following is a characteristic of facial expression and emotional state?",
      "options": [
        "Restlessness",
        "Participation in activities",
        "Requesting leave"
      ],
      "correctAnswer": "Restlessness"
    },
    {
      "question": "What does intra-clinical activities observation focus on?",
      "options": [
        "Medication compliance",
        "Patient interaction and group activities",
        "Emotional distress"
      ],
      "correctAnswer": "Patient interaction and group activities"
    },
    {
      "question": "What behavioral change should be noted after a visitor’s interaction with a patient?",
      "options": [
        "Aggression",
        "Distress or withdrawal",
        "Compliance with treatment"
      ],
      "correctAnswer": "Distress or withdrawal"
    },
    {
      "question": "How should a nurse assess a patient’s vacation status?",
      "options": [
        "By observing their emotional state",
        "By noting their behavior upon return",
        "By asking them about their treatment progress"
      ],
      "correctAnswer": "By noting their behavior upon return"
    },
    {
      "question": "What is the main focus when assessing a patient's response to treatment?",
      "options": [
        "Medication compliance",
        "Social interactions",
        "Participation in group activities"
      ],
      "correctAnswer": "Medication compliance"
    },
    {
      "question": "What is one of the essential elements in interviewing a patient?",
      "options": [
        "Asking direct questions about treatment",
        "Proper greeting and self-introduction",
        "Avoiding any personal discussion"
      ],
      "correctAnswer": "Proper greeting and self-introduction"
    },
    {
      "question": "What is the role of therapeutic communication in a patient interview?",
      "options": [
        "To diagnose the patient’s illness",
        "To ensure effective listening and understanding",
        "To enforce the treatment plan"
      ],
      "correctAnswer": "To ensure effective listening and understanding"
    },
    {
      "question": "What should be focused on during a conversation with a patient?",
      "options": [
        "Patient complaints and concerns",
        "Patient's background",
        "Patient’s medication history"
      ],
      "correctAnswer": "Patient complaints and concerns"
    },
    {
      "question": "Which of the following is a good practice for ensuring the conversation is productive?",
      "options": [
        "Avoid summarizing key issues",
        "Ask open-ended questions",
        "Stick strictly to closed questions"
      ],
      "correctAnswer": "Ask open-ended questions"
    },
    {
      "question": "Why is summarizing key issues important in a patient conversation?",
      "options": [
        "To confuse the patient",
        "To make treatment options clear",
        "To emphasize patient emotions"
      ],
      "correctAnswer": "To make treatment options clear"
    },
    {
      "question": "What factors influence a patient’s personality, according to the text?",
      "options": [
        "Medication history and emotional state",
        "Family, environment, and experiences",
        "Treatment progress"
      ],
      "correctAnswer": "Family, environment, and experiences"
    },
    {
      "question": "What is the main goal of a nursing care plan?",
      "options": [
        "To assess emotional distress",
        "To improve patient well-being",
        "To identify medication side effects"
      ],
      "correctAnswer": "To improve patient well-being"
    },
    {
      "question": "Which of the following is a behavioral change observed post-visit?",
      "options": [
        "Talkativeness",
        "Distress",
        "Timidity"
      ],
      "correctAnswer": "Distress"
    },
    {
      "question": "Which emotional state should be noted in a patient’s assessment?",
      "options": [
        "Aggression",
        "Satisfaction",
        "Happiness"
      ],
      "correctAnswer": "Aggression"
    },
    {
      "question": "What should a nurse assess when a patient requests leave?",
      "options": [
        "Patient's financial status",
        "Patient’s emotional state upon return",
        "Patient’s ability to work"
      ],
      "correctAnswer": "Patient’s emotional state upon return"
    },
    {
      "question": "How does social behavior impact patient care?",
      "options": [
        "It helps identify patient’s compliance with treatment",
        "It provides insights into emotional state",
        "It shows how the patient interacts with others in the clinic"
      ],
      "correctAnswer": "It shows how the patient interacts with others in the clinic"
    },
    {
      "question": "What is an example of an intra-clinical activity?",
      "options": [
        "A patient reading a book",
        "A patient receiving medication",
        "A patient being discharged"
      ],
      "correctAnswer": "A patient reading a book"
    },
    {
      "question": "Which technique should be used during a patient interview for active listening?",
      "options": [
        "Reflection",
        "Direct questions",
        "Avoiding eye contact"
      ],
      "correctAnswer": "Reflection"
    },
    {
      "question": "What is one of the emotional states a nurse might observe during facial expression assessment?",
      "options": [
        "Aggression",
        "Timidity",
        "Happiness"
      ],
      "correctAnswer": "Timidity"
    },
    {
      "question": "What should be noted when evaluating a patient’s response to treatment?",
      "options": [
        "Their level of interest in social activities",
        "Their acceptance or resistance to medications",
        "Their level of cooperation with staff"
      ],
      "correctAnswer": "Their acceptance or resistance to medications"
    },
    {
      "question": "How can a nurse assess a patient’s social behavior?",
      "options": [
        "By monitoring their facial expressions",
        "By observing their interactions and tendencies",
        "By reviewing their medical history"
      ],
      "correctAnswer": "By observing their interactions and tendencies"
    },
    {
      "question": "What is the purpose of therapeutic communication in a patient interview?",
      "options": [
        "To assess compliance with medication",
        "To ensure that the patient feels heard and understood",
        "To make treatment decisions for the patient"
      ],
      "correctAnswer": "To ensure that the patient feels heard and understood"
    },
    {
      "question": "What should be observed in a patient post-visit?",
      "options": [
        "Behavior changes such as warmth or distress",
        "Participation in group meetings",
        "Social tendencies and timidity"
      ],
      "correctAnswer": "Behavior changes such as warmth or distress"
    },
  ],
  9:[
    {
      "question": "What is the primary goal of a therapeutic environment?",
      "options": [
        "To entertain patients",
        "To heal patients and support their self-esteem",
        "To provide medical equipment"
      ],
      "correctAnswer": "To heal patients and support their self-esteem"
    },
    {
      "question": "Which of the following is a purpose of a therapeutic environment?",
      "options": [
        "To manage the environment",
        "To isolate patients",
        "To limit self-expression"
      ],
      "correctAnswer": "To manage the environment"
    },
    {
      "question": "One goal of a therapeutic environment is to:",
      "options": [
        "Increase self-esteem and confidence",
        "Discourage social interaction",
        "Promote medication adherence"
      ],
      "correctAnswer": "Increase self-esteem and confidence"
    },
    {
      "question": "What is a key element of a therapeutic environment that provides protection from harm?",
      "options": [
        "Flexibility",
        "Security",
        "Norms"
      ],
      "correctAnswer": "Security"
    },
    {
      "question": "What does a structured environment provide for patients?",
      "options": [
        "Freedom to make choices",
        "Regulations and schedules for support",
        "Unpredictability"
      ],
      "correctAnswer": "Regulations and schedules for support"
    },
    {
      "question": "Which of the following promotes socially acceptable behaviors in a therapeutic setting?",
      "options": [
        "Boundaries",
        "Norms",
        "Flexibility"
      ],
      "correctAnswer": "Norms"
    },
    {
      "question": "What element of the therapeutic environment supports the progression from dependence to independence?",
      "options": [
        "Security",
        "Balance",
        "Structure"
      ],
      "correctAnswer": "Balance"
    },
    {
      "question": "Which of the following is a component of a therapeutic relationship?",
      "options": [
        "Empathy",
        "Control",
        "Distance"
      ],
      "correctAnswer": "Empathy"
    },
    {
      "question": "How is trust established in a therapeutic relationship?",
      "options": [
        "Through emotional manipulation",
        "By being unreliable",
        "Through reliability and consistency"
      ],
      "correctAnswer": "Through reliability and consistency"
    },
    {
      "question": "Which of the following is considered a barrier to communication?",
      "options": [
        "Active listening",
        "Agreeing and disagreeing",
        "Empathy"
      ],
      "correctAnswer": "Agreeing and disagreeing"
    },
    {
      "question": "Self-awareness in nursing involves:",
      "options": [
        "Ignoring personal values",
        "Understanding one's values and their impact on others",
        "Being self-centered"
      ],
      "correctAnswer": "Understanding one's values and their impact on others"
    },
    {
      "question": "What does the therapeutic use of self refer to?",
      "options": [
        "Utilizing personal qualities to build relationships with clients",
        "Focusing solely on clinical skills",
        "Keeping personal feelings private"
      ],
      "correctAnswer": "Utilizing personal qualities to build relationships with clients"
    },
    {
      "question": "What is the first phase of the nurse-client relationship?",
      "options": [
        "Working Phase",
        "Termination Phase",
        "Pre-interaction Phase"
      ],
      "correctAnswer": "Pre-interaction Phase"
    },
    {
      "question": "Which phase involves setting goals and expectations with the client?",
      "options": [
        "Orientation Phase",
        "Termination Phase",
        "Pre-interaction Phase"
      ],
      "correctAnswer": "Orientation Phase"
    },
    {
      "question": "The goal of therapeutic communication is to:",
      "options": [
        "Establish a therapeutic relationship",
        "Maintain strict boundaries",
        "Avoid emotional topics"
      ],
      "correctAnswer": "Establish a therapeutic relationship"
    },
    {
      "question": "Which venue is NOT mentioned as a possible location for client interaction?",
      "options": [
        "Quiet corner of the day room",
        "Outdoor park",
        "End of the hall"
      ],
      "correctAnswer": "Outdoor park"
    },
    {
      "question": "What is essential to evaluate when interacting with clients?",
      "options": [
        "Client's social status",
        "Context and setting",
        "Client's preferences for food"
      ],
      "correctAnswer": "Context and setting"
    },
    {
      "question": "Which element helps to define acceptable and unacceptable behaviors?",
      "options": [
        "Boundaries",
        "Flexibility",
        "Norms"
      ],
      "correctAnswer": "Boundaries"
    },
    {
      "question": "What is the main focus during the working phase of the nurse-client relationship?",
      "options": [
        "Termination of the relationship",
        "Achieving therapeutic goals",
        "Establishing trust"
      ],
      "correctAnswer": "Achieving therapeutic goals"
    },
    {
      "question": "What helps enhance the therapeutic environment through regular review?",
      "options": [
        "Structure",
        "Flexibility/Changeability",
        "Security"
      ],
      "correctAnswer": "Flexibility/Changeability"
    },
    {
      "question": "What can improve relationships among patients?",
      "options": [
        "Isolation",
        "Increased self-esteem",
        "Strict rules"
      ],
      "correctAnswer": "Increased self-esteem"
    },
    {
      "question": "What is one barrier to effective communication?",
      "options": [
        "Active engagement",
        "Passing judgment",
        "Openness"
      ],
      "correctAnswer": "Passing judgment"
    },
    {
      "question": "What is the focus of the termination phase in the nurse-client relationship?",
      "options": [
        "Ending the relationship with no feedback",
        "Discussing progress and preparing for discharge",
        "Ignoring the client's needs"
      ],
      "correctAnswer": "Discussing progress and preparing for discharge"
    },
    {
      "question": "Which of the following is NOT a goal of the therapeutic environment?",
      "options": [
        "To discourage self-expression",
        "To promote social skills",
        "To meet basic needs"
      ],
      "correctAnswer": "To discourage self-expression"
    },
    {
      "question": "The ability to understand and communicate a client’s feelings is known as:",
      "options": [
        "Sympathy",
        "Empathy",
        "Apathy"
      ],
      "correctAnswer": "Empathy"
    },
    {
      "question": "What should be considered when interacting in a client's room?",
      "options": [
        "The nurse's comfort",
        "The nature of the conversation and the client's comfort",
        "The time of day"
      ],
      "correctAnswer": "The nature of the conversation and the client's comfort"
    },
    {
      "question": "Which principle aims to enhance communication benefits between patients and staff?",
      "options": [
        "Boundaries",
        "Encourage self-expression",
        "Increase regulations"
      ],
      "correctAnswer": "Encourage self-expression"
    },
    {
      "question": "What is a characteristic of the pre-interaction phase?",
      "options": [
        "Planning for the first meeting",
        "Developing a therapeutic alliance",
        "Setting goals with the client"
      ],
      "correctAnswer": "Planning for the first meeting"
    },
    {
      "question": "What aspect of the therapeutic environment helps control problematic behavior?",
      "options": [
        "Norms",
        "Privacy",
        "Personal space"
      ],
      "correctAnswer": "Norms"
    },
    {
      "question": "What is an important factor in ensuring effective therapeutic communication?",
      "options": [
        "Maintaining distance",
        "Encouraging self-disclosure",
        "Avoiding difficult topics"
      ],
      "correctAnswer": "Encouraging self-disclosure"
    }
  ],
  10:[
    {
      "question": "What is the primary goal of a therapeutic environment?",
      "options": [
        "To entertain patients",
        "To heal patients and support their self-esteem",
        "To provide medical equipment"
      ],
      "correctAnswer": "To heal patients and support their self-esteem"
    },
    {
      "question": "One purpose of a therapeutic environment is to:",
      "options": [
        "Increase patient complaints",
        "Encourage active participation in society",
        "Limit patient interactions"
      ],
      "correctAnswer": "Encourage active participation in society"
    },
    {
      "question": "Which of the following is NOT a goal of a therapeutic environment?",
      "options": [
        "Meet basic needs",
        "Improve patient relationships",
        "Increase medication dosages"
      ],
      "correctAnswer": "Increase medication dosages"
    },
    {
      "question": "What element of a therapeutic environment ensures protection from harm?",
      "options": [
        "Flexibility",
        "Security",
        "Balance"
      ],
      "correctAnswer": "Security"
    },
    {
      "question": "What does a structured environment provide for patients?",
      "options": [
        "Chaos",
        "Regulations to support healing",
        "Random interactions"
      ],
      "correctAnswer": "Regulations to support healing"
    },
    {
      "question": "What is the role of norms in a therapeutic environment?",
      "options": [
        "To facilitate unacceptable behaviors",
        "To facilitate acceptable behaviors",
        "To eliminate all interactions"
      ],
      "correctAnswer": "To facilitate acceptable behaviors"
    },
    {
      "question": "What is the purpose of boundaries in a therapeutic environment?",
      "options": [
        "To encourage dependence",
        "To define acceptable conduct",
        "To create confusion"
      ],
      "correctAnswer": "To define acceptable conduct"
    },
    {
      "question": "Which component of a therapeutic relationship is built on reliability?",
      "options": [
        "Empathy",
        "Trust",
        "Flexibility"
      ],
      "correctAnswer": "Trust"
    },
    {
      "question": "What does empathy in a therapeutic relationship involve?",
      "options": [
        "Ignoring client feelings",
        "Understanding and communicating client feelings",
        "Criticizing client emotions"
      ],
      "correctAnswer": "Understanding and communicating client feelings"
    },
    {
      "question": "Which of the following is a barrier to effective communication?",
      "options": [
        "Active listening",
        "Agreeing and disagreeing",
        "Clarifying questions"
      ],
      "correctAnswer": "Agreeing and disagreeing"
    },
    {
      "question": "What does self-awareness refer to in a therapeutic context?",
      "options": [
        "Ignoring personal values",
        "Understanding personal values and their impact on others",
        "Forcing opinions on clients"
      ],
      "correctAnswer": "Understanding personal values and their impact on others"
    },
    {
      "question": "What is the therapeutic use of self?",
      "options": [
        "Ignoring client needs",
        "Utilizing personal qualities to form client relationships",
        "Maintaining strict professionalism only"
      ],
      "correctAnswer": "Utilizing personal qualities to form client relationships"
    },
    {
      "question": "What is the first phase of the nurse-client relationship?",
      "options": [
        "Orientation Phase",
        "Pre-interaction Phase",
        "Termination Phase"
      ],
      "correctAnswer": "Pre-interaction Phase"
    },
    {
      "question": "Which phase of the nurse-client relationship focuses on setting goals?",
      "options": [
        "Working Phase",
        "Orientation Phase",
        "Termination Phase"
      ],
      "correctAnswer": "Working Phase"
    },
    {
      "question": "What is the goal of therapeutic communication?",
      "options": [
        "Establish a therapeutic relationship",
        "Avoid client concerns",
        "Limit emotional expression"
      ],
      "correctAnswer": "Establish a therapeutic relationship"
    },
    {
      "question": "What is an important factor to consider for privacy in therapeutic communication?",
      "options": [
        "Always speak loudly",
        "Context and setting",
        "Share all information openly"
      ],
      "correctAnswer": "Context and setting"
    },
    {
      "question": "Which venue is considered appropriate for therapeutic interaction?",
      "options": [
        "In a crowded hallway",
        "Interview/Conference Room",
        "Busy cafeteria"
      ],
      "correctAnswer": "Interview/Conference Room"
    },
    {
      "question": "What should be assessed before interacting in the client's room?",
      "options": [
        "Client's comfort and conversation nature",
        "Other staff availability",
        "Time of day"
      ],
      "correctAnswer": "Client's comfort and conversation nature"
    },
    {
      "question": "Which of the following supports the transition from dependence to independence?",
      "options": [
        "Security",
        "Balance",
        "Barriers"
      ],
      "correctAnswer": "Balance"
    },
    {
      "question": "Regular review of norms in a therapeutic environment aims to:",
      "options": [
        "Maintain strictness",
        "Enhance the therapeutic environment",
        "Increase rigidity"
      ],
      "correctAnswer": "Enhance the therapeutic environment"
    },
    {
      "question": "What is the goal of enhancing coping skills in patients?",
      "options": [
        "To create confusion",
        "To help patients manage stress better",
        "To promote isolation"
      ],
      "correctAnswer": "To help patients manage stress better"
    },
    {
      "question": "What does flexibility in a therapeutic environment allow?",
      "options": [
        "Rigidity in interactions",
        "Adapting to individual needs",
        "No change over time"
      ],
      "correctAnswer": "Adapting to individual needs"
    },
    {
      "question": "Which of the following is a method to enhance communication with clients?",
      "options": [
        "Passing judgment",
        "Encouraging self-expression",
        "Avoiding eye contact"
      ],
      "correctAnswer": "Encouraging self-expression"
    },
    {
      "question": "What does the orientation phase of the nurse-client relationship involve?",
      "options": [
        "Ending the relationship",
        "Establishing goals and trust",
        "Ignoring the client’s needs"
      ],
      "correctAnswer": "Establishing goals and trust"
    },
    {
      "question": "Which element helps define acceptable and unacceptable behaviors?",
      "options": [
        "Flexibility",
        "Boundaries",
        "Security"
      ],
      "correctAnswer": "Boundaries"
    },
    {
      "question": "Which of the following is NOT a component of a therapeutic relationship?",
      "options": [
        "Trust",
        "Empathy",
        "Indifference"
      ],
      "correctAnswer": "Indifference"
    },
    {
      "question": "What does enhancing social skills in a therapeutic environment promote?",
      "options": [
        "Isolation",
        "Adaptive behaviors",
        "Decreased communication"
      ],
      "correctAnswer": "Adaptive behaviors"
    },
    {
      "question": "What is a significant barrier to effective communication?",
      "options": [
        "Active listening",
        "Changing topics",
        "Open-ended questions"
      ],
      "correctAnswer": "Changing topics"
    },
    {
      "question": "What should nurses aim to do when establishing a therapeutic relationship?",
      "options": [
        "Avoid client concerns",
        "Build trust and empathy",
        "Focus solely on tasks"
      ],
      "correctAnswer": "Build trust and empathy"
    },
    {
      "question": "Which phrase describes a nurse’s understanding of personal values in relation to clients?",
      "options": [
        "Self-awareness",
        "Indifference",
        "Disconnection"
      ],
      "correctAnswer": "Self-awareness"
    }
  ],
  11:[
    {
        "question": "What are the two main processes that influence personality development?",
        "options": [
            "Nature and nurture",
            "Maturation and individualization-socialization",
            "Learning and observation"
        ],
        "correctAnswer": "Maturation and individualization-socialization"
    },
    {
        "question": "At what age do babies typically start walking without training?",
        "options": [
            "8-10 months",
            "12-14 months",
            "15-18 months"
        ],
        "correctAnswer": "12-14 months"
    },
    {
        "question": "What does individualization-socialization involve?",
        "options": [
            "Natural development of abilities",
            "Learning behaviors shaped by environmental experiences",
            "Genetic predispositions"
        ],
        "correctAnswer": "Learning behaviors shaped by environmental experiences"
    },
    {
        "question": "How many stages of psychosocial development did Erik Erikson propose?",
        "options": [
            "Five stages",
            "Seven stages",
            "Eight stages"
        ],
        "correctAnswer": "Eight stages"
    },
    {
        "question": "What is the first stage of Erikson's psychosocial development?",
        "options": [
            "Trust vs. Mistrust",
            "Autonomy vs. Shame and Doubt",
            "Initiative vs. Guilt"
        ],
        "correctAnswer": "Trust vs. Mistrust"
    },
    {
        "question": "During which stage do children develop a sense of independence?",
        "options": [
            "Autonomy vs. Shame and Doubt",
            "Industry vs. Inferiority",
            "Integrity vs. Despair"
        ],
        "correctAnswer": "Autonomy vs. Shame and Doubt"
    },
    {
        "question": "In which stage do adolescents seek their identity?",
        "options": [
            "Initiative vs. Guilt",
            "Identity vs. Confusion",
            "Intimacy vs. Isolation"
        ],
        "correctAnswer": "Identity vs. Confusion"
    },
    {
        "question": "What is the primary conflict in the stage of Intimacy vs. Isolation?",
        "options": [
            "Forming close relationships",
            "Building self-esteem",
            "Achieving independence"
        ],
        "correctAnswer": "Forming close relationships"
    },
    {
        "question": "Which stage involves the need for generativity?",
        "options": [
            "Young Adulthood",
            "Middle Age",
            "Older Adulthood"
        ],
        "correctAnswer": "Middle Age"
    },
    {
        "question": "What is the final stage of Erikson's development theory?",
        "options": [
            "Integrity vs. Despair",
            "Generativity vs. Stagnation",
            "Identity vs. Confusion"
        ],
        "correctAnswer": "Integrity vs. Despair"
    },
    {
        "question": "What role does family play in personality development?",
        "options": [
            "Minimal role",
            "Crucial role in shaping and development",
            "Only a biological role"
        ],
        "correctAnswer": "Crucial role in shaping and development"
    },
    {
        "question": "What is essential for creating a happy society according to the summary?",
        "options": [
            "Fulfilling individual basic needs and resolving conflicts",
            "Strict social rules and regulations",
            "Encouraging competition among individuals"
        ],
        "correctAnswer": "Fulfilling individual basic needs and resolving conflicts"
    },
    {
        "question": "Which stage is characterized by the question 'Who am I?'",
        "options": [
            "Trust vs. Mistrust",
            "Identity vs. Confusion",
            "Intimacy vs. Isolation"
        ],
        "correctAnswer": "Identity vs. Confusion"
    },
    {
        "question": "What do children learn during the Initiative vs. Guilt stage?",
        "options": [
            "Independence and assertiveness",
            "Trust in caregivers",
            "Identity and roles"
        ],
        "correctAnswer": "Independence and assertiveness"
    },
    {
        "question": "In which stage do individuals focus on developing close relationships?",
        "options": [
            "Intimacy vs. Isolation",
            "Industry vs. Inferiority",
            "Autonomy vs. Shame and Doubt"
        ],
        "correctAnswer": "Intimacy vs. Isolation"
    },
    {
        "question": "What is a key conflict in the Industry vs. Inferiority stage?",
        "options": [
            "Developing a sense of competence",
            "Building trust in others",
            "Exploring social roles"
        ],
        "correctAnswer": "Developing a sense of competence"
    },
    {
        "question": "During which stage do individuals seek to nurture the next generation?",
        "options": [
            "Generativity vs. Stagnation",
            "Integrity vs. Despair",
            "Identity vs. Confusion"
        ],
        "correctAnswer": "Generativity vs. Stagnation"
    },
    {
        "question": "What is the main focus of the Integrity vs. Despair stage?",
        "options": [
            "Reflection on life",
            "Establishing relationships",
            "Exploring identity"
        ],
        "correctAnswer": "Reflection on life"
    },
    {
        "question": "What does Erikson believe is necessary for healthy personality development?",
        "options": [
            "Successful resolution of conflicts",
            "Strict adherence to societal norms",
            "Isolation from peers"
        ],
        "correctAnswer": "Successful resolution of conflicts"
    },
    {
        "question": "What aspect of personality development is emphasized in the summary?",
        "options": [
            "Biopsychosocial approach",
            "Genetic factors only",
            "Environmental influences only"
        ],
        "correctAnswer": "Biopsychosocial approach"
    },
    {
        "question": "Which stage focuses on the development of trust?",
        "options": [
            "Autonomy vs. Shame and Doubt",
            "Trust vs. Mistrust",
            "Generativity vs. Stagnation"
        ],
        "correctAnswer": "Trust vs. Mistrust"
    },
    {
        "question": "What is the significance of the family environment in early development?",
        "options": [
            "It has no significant impact",
            "It shapes personality through interaction",
            "It is only important for genetic factors"
        ],
        "correctAnswer": "It shapes personality through interaction"
    },
    {
        "question": "What is a critical aspect of the Autonomy vs. Shame and Doubt stage?",
        "options": [
            "Dependency on others",
            "Developing self-control and self-esteem",
            "Rejection of social norms"
        ],
        "correctAnswer": "Developing self-control and self-esteem"
    },
    {
        "question": "What stage do children begin to develop their skills and abilities?",
        "options": [
            "Industry vs. Inferiority",
            "Initiative vs. Guilt",
            "Trust vs. Mistrust"
        ],
        "correctAnswer": "Industry vs. Inferiority"
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
