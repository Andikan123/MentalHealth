import React from "react";
import { useParams, Link } from "react-router-dom";
import riskFactor from "../assets/Picture1.png"
import riskFactor2 from "../assets/Picture2.png"
import levelOfrisk from "../assets/Picture3.png"
import riskassess from "../assets/riskassess.png"
import assessTools from "../assets/assesstools.png"
import adminright from "../assets/adminrights.png"

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
          <li>
            Ensure that services are carried out according to structured plans
            and programs.
          </li>
          <li>
            Minimize service disruptions, reduce losses, and enhance care
            quality.
          </li>
          <li>
            Promote alignment between individual and institutional standards,
            leading to better outcomes.
          </li>
          <li>
            Standards inform training programs and contribute to the development
            of nursing expertise.
          </li>
          <li>
            They facilitate collaboration with other disciplines, leading to
            more efficient and effective patient care.
          </li>
          <li>
            Help establish agreements between service providers and recipients
          </li>
        </ul>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/zbIDuNucHNo", // Example YouTube video link
  },
  {
    id: 3,
    title: "The  Mental Status Examination",
    content: (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The Mental Status Examination
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The mental status examination is a central aspect of the psychiatric
          assessment process that assesses current cognitive and affective
          functioning through data collection on
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The Mental Status Examination Overview
        </h1>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Appearance, behaviour and speech</li>
          <li>Level of Consciousness</li>
          <li>Thought Content and Process</li>
          <li>Cognitive ability</li>
          <li>Mood and Affects</li>
          <li>Insight and Judgement</li>
          <li>Perception</li>
        </ul>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Appearance and Behavior
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          From the first moment of interaction with clients, nurses observe
          appearance and behavior that can signal disturbances in mental status.
          Nurses should document crying, scratching or picking at one’s skin,
          clenched fists, or repeated behaviors. The nurse documents
          observations and examples of behaviors to avoid personal judgment or
          misinterpretation.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          specific terms in observation of appearance and behaviour include:
        </p>
        <h2>Automatisms:</h2>
        <p className="text-lg text-gray-700 mb-4">
          repeated purposeless behaviours often indicating anxiety such as
          drumming fingers,twisting locks of hairs,and tapping feets
        </p>
        <h2>Psychomotor Retardation:</h2>
        <p className="text-lg text-gray-700 mb-4">Overall Slowed movement</p>
        <h2>Wavy Flexibility:</h2>
        <p className="text-lg text-gray-700 mb-4">
          maintanance of posture and position over time even when it akward or
          uncomfortable
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Does the client talk nonstop?</li>
          <li>
            Does the client perseverate (seem to be stuck on one topic and
            unable to move to another idea)?
          </li>
          <li>Are responses a minimal “yes” or “no” without elaboration?</li>
          <li>
            Is the content of the client’s speech relevant to the question being
            asked?
          </li>
          <li>Is the rate of speech fast or slow?</li>
          <li>Is the tone audible or loud?</li>
          <li>Does the client speak in a rhyming manner?</li>
          <li>
            Does the client use neologisms (invented words that have meaning
            only for the client)?
          </li>
        </ul>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Level of Consciousness
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Nurses note initial observations about wakefulness and awareness. Is
          the client alert and aware of the interview being conducted? Is there
          a disturbance such as hyper-awareness/watchfulness or sedation
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thought Content and Processes
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Thought content describes what clients are saying. *Some expressions
          of thought content, referred to as delusions (false beliefs), are
          common with thought disorders and sometimes occur in mania.
          *Delusions: a fixed false belief not based in reality.Delusions have
          different themes and may be persecutory, grandiose, somatic,
          nihilistic,religious or referential{" "}
        </p>
        <h2>Grandiose delusions:</h2>
        <p className="text-lg text-gray-700 mb-4">
          Client falsely believe that they have great wealth, talent, influence,
          power or beauty. Such Clients may believe themselves to be famous or
          historically significant people, such as Napoleon or Goerge Washington
        </p>
        <h2>Persecutory delusions:</h2>
        <p className="text-lg text-gray-700 mb-4">
          include beliefd that neighbours, friends or family are planning to
          harm them of are spying on them
        </p>
        <h2>Somatic delusions:</h2>
        <p className="text-lg text-gray-700 mb-4">
          concerns the body. For example, clients might believe that they
          incredibly ugly or the certain aspects of their appearance disgust
          others.
        </p>
        <h2>Nihilistic delusions:</h2>
        <p className="text-lg text-gray-700 mb-4">
          those with this may believe that they are dead, dying or no longer
          exist
        </p>
        <h2>Religious delusions:</h2>
        <p className="text-lg text-gray-700 mb-4">
          Clients may believe that they have a special relationship with God
        </p>
        <h2>Referential delusions:</h2>
        <p className="text-lg text-gray-700 mb-4">
          Clients may believe that newspaper articles, television shows, or
          songs are directed specifically at them
        </p>
        <h2>Thought broadcasting:</h2>
        <p className="text-lg text-gray-700 mb-4">
          Clients believe that others can perceive their thoughts.
        </p>
        <h2>Thought broadcasting:</h2>
        <p className="text-lg text-gray-700 mb-4">
          Clients believe that others can perceive their thoughts.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Clients exhibiting thought insertion are convinced that their thoughts
          are not their own but rather the thoughts of others that have become
          implanted in their heads.
        </p>
        <h2>Thought withdrawal:</h2>
        <p className="text-lg text-gray-700 mb-4">
          Clients believe that their thoughts are somehow being removed from
          their heads.
        </p>
        <h2>Thought process:</h2>
        <p className="text-lg text-gray-700 mb-4">
          refers to how the client thinks. The nurse can infer a client’s
          thought process from speech and speech patterns. Loose associations:
          Disorganized thinking that jumps from one idea to another with little
          or no evident relation between the thoughts. Thought blocking:
          Stopping suddenly in the middle of a sentence or train of thought;
          sometimes unable to continue the idea.
        </p>
        <h2>Tangential thinking: :</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wandering off the topic and never providing the information requested.
        </p>
        <h2>Circumstantial thinking </h2>
        <p className="text-lg text-gray-700 mb-4">
          A client eventually answers a question but only after giving excessive
          unnecessary detail.
        </p>
        <h2>Flight of ideas: </h2>
        <p className="text-lg text-gray-700 mb-4">
          Excessive amount and rate of speech composed of unrelated ideas.
        </p>
        <h2>Word salad: </h2>
        <p className="text-lg text-gray-700 mb-4">
          Flow of unconnected words that convey no meaning to the listener.
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Cognitive Ability
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Assessment of cognitive functions involves collecting data to evaluate
          the client’s abilities in Orientation Memory Attention/concentration
          Abstract reasoning
        </p>
        <h2>Orientation : </h2>
        <p className="text-lg text-gray-700 mb-4">
          One of the most basic assessments of cognitive function is the
          client’s orientation to person, place, and time.When a person is
          disoriented, he or she first loses track of time, then place, and
          finally person.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Orientation returns in the reverse order: First, the person knows who
          he or she is, then realizes place, and finally time.
        </p>
        <h2>Memory: : </h2>
        <p className="text-lg text-gray-700 mb-4">
          Collecting data about the client’s memory entails three domains:
          immediate, recent, and remote.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Immediate: Nurses may ask clients to repeat three words (for example:
          apple, table, flower).
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Recent: Nurses may ask clients to recall those three words five or ten
          minutes later or ask clients what they ate in this morning.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Remote: Remote memory involves recall of events from many years ago.
          It is important to ask questions with verifiable answers. (phone or
          social security number)
        </p>
        <h2>Attention and Concentration : </h2>
        <p className="text-lg text-gray-700 mb-4">
          The nurse assesses the client’s attention and ability to concentrate
          by asking the client to perform certain tasks; Spell the word world
          backward. Begin with the number 100, subtract 7, subtract 7 again, and
          so on. Repeat the days of the week backward.
        </p>
        <h2>Abstract Reasoning: </h2>
        <p className="text-lg text-gray-700 mb-4">
          Nurses may ask clients to describe the meaning of well-known proverbs.
          If the client can explain the proverb correctly, his or her abstract
          thinking abilities are intact. If the client provides a literal
          explanation of the proverb and cannot interpret its meaning, abstract
          thinking abilities are lacking. When the client gives literal
          translations, this is evidence of concrete thinking.
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Mood and Affect
        </h1>
        <h2>Mood: </h2>
        <p className="text-lg text-gray-700 mb-4">
          is assessed by client report (verbal responses). Mood refers to the
          client’s pervasive and enduring emotional state. The client’s mood may
          be described as happy, sad, depressed, euphoric, anxious, or angry.
          When the client exhibits unpredictable and rapid mood swings from
          depressed and crying to euphoria, the mood is called labile (rapidly
          changing).
        </p>
        <h2>Affect : </h2>
        <p className="text-lg text-gray-700 mb-4">
          is the outward expression of the client’s emotional state.Affect is
          assessed by observing the client’s facial expression in conjunction
          with other nonverbal clues. Common terms used in assessing affect
          include the following: Blunted affect: showing little or a
          slow-to-respond facial expression. Flat affect: showing no facial
          expression. Inappropriate affect: displaying a facial expression that
          is incongruent with mood or situation; often silly or giddy regardless
          of circumstances. Restricted affect: displaying one type of
          expression, usually serious or somber.
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Insight and Judgment
        </h1>
        <h2>Insight: </h2>
        <p className="text-lg text-gray-700 mb-4">
          is the ability to understand the true nature of one’s situation and
          accept some personal responsibility for that situation. The client’s
          awareness and understanding of current circumstances, illness, and
          treatment. When a client states that “the cause of my condition is the
          aliens infiltrating my brain,” the nurse would document insight as
          “poor” or “impaired.”
        </p>
        <h2>Judgment: </h2>
        <p className="text-lg text-gray-700 mb-4">
          refers to the ability to interpret one’s environment and situation
          correctly and to adapt one’s behavior and decisions accordingly. The
          nurse also may assess a client’s judgment by asking the client
          hypothetical questions, such as “If you found a stamped addressed
          envelope on the ground, what would you do?”
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Perceptions</h1>
        <p className="text-lg text-gray-700 mb-4">
          Observation about perceptions involves an attempt for clients to
          describe their sensory experiences. Some clients experience
          hallucinations (false sensory perceptions or perceptual experiences
          that do not really exist).Hallucinations can involve the five senses
          and bodily sensations. (Auditory, visual, tactile/touch,
          gustatory/taste, olfactory/smell) Auditory hallucinations (hearing
          voices) are the most common; visual hallucinations (seeing things that
          don’t really exist) are the second most common.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          “Are you hearing (or seeing) someone or something besides me right
          now?” Initially, clients perceive hallucinations as real experiences,
          but later in the illness, they may recognize them as hallucinations.
        </p>
        <h2>Depersonalization disorder: </h2>
        <p className="text-lg text-gray-700 mb-4">
          A recurring or persistent feeling that one is detached from one’s own
          thinking. Affected clients feel that they are outside their mind or
          body
        </p>
        <h2>Derealization: </h2>
        <p className="text-lg text-gray-700 mb-4">
          Client senses that events are not real, when, in fact, they are.
          Environmental objects become smaller or larger or seem unfamiliar).
          Experiences of depersonalization and derealization often occur in
          healthy people under conditions of fatigue or stress and during a
          traumatic event.
        </p>
        <h2>Percept Disturbances: </h2>
        <p className="text-lg text-gray-700 mb-4">
          Hallucinations are the main disorder of perception that we describe
          their presence is elicited by asking the patient, or revealed by
          observing behaviour Illusions TLE perceptual disturbances: déjà vu,
          jamais vu, micro/macropsia, synesthesia
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Auditory hallucinations are most common in schizophrenia - they may be
          elementary or complex. There are typical forms : Two or more people
          arguing or commenting about the person in the third person A running
          commentary about the person’s behaviour Command hallucinations –
          demands a significant risk assessment - degree of compulsion the
          person feels to act upon them Visual hallucinations can occur in
          schizophrenia but one should suspect an organic cause : (drug
          intoxication/withdrawal, delirium…) Hallucinations in other modalities
          – olfactory, gustatory, somatic, visceral are almost always organic
          (eg. substances, TLE should be seriously considered)
        </p>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/Jr_zxXiEutY", // Example YouTube video link
  },
  {
    id: 4,
    title: "Culture and Psychiatry",
    content: (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Culture and Psychiatry
        </h1>
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          What Are the Qualities of an Individual with Mental Health?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            can tolerate stress by being away from symptoms such as anxiety,
            delusion, doubt, sadness, insecurity,
          </li>
          <li>has self-confidence, self-esteem is developed</li>
          <li>takes responsibility and fulfills</li>
          <li>looks to the future with hope and struggles</li>
          <li>
            takes initiatives effectively and independently, makes
            self-criticism
          </li>
          <li>has the ability to distinguish between fantasy and reality</li>
          <li>Has the ability to solve problems</li>
          <li>establish bonds based on love and respect</li>
          <li>
            has values and beliefs that do not conflict with the environment and
            society
          </li>
          <li>
            apart from their profession, they have fun, relaxing and personal
            development pursuits.
          </li>
          <li>
            Societal factors such as violence, poverty, and substance abuse
          </li>
        </ul>
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Case:</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Most of the sugarcane workers living on the border of starvation in
          Brazil have stated that their illness, which is called nervios in that
          region, with symptoms such as loss of orientation, numbness, emotional
          ups and downs and tremors due to hunger, is defined as a psychiatric
          condition by local (?) physicians who practice western medicine in the
          region shows. These physicians do not see that most of these people
          they come from are malnourished and trying to live on one thousand
          five hundred calories a day, and they prescribe psychotropic drugs to
          get rid of this disease. Every culture has its own way of making sense
          of the highly subjective experience that is an understanding of one’s
          mental health.
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          Psychodynamic Foundations of Behavior
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <span class="font-semibold text-indigo-700">
            Phylogenetic Determinants:
          </span>{" "}
          They are universal determinants.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <span class="font-semibold text-indigo-700">
            Ontogenetic Determinants;
          </span>{" "}
          Environmental, physical and psychosocial living conditions.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <span class="font-semibold text-indigo-700">
            Descriptive Psychiatry (descriptive);
          </span>{" "}
          It is the examination and definition of clinical symptoms and the
          clinical diagnosis. Its forerunner is Kraepelin.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <span class="font-semibold text-indigo-700">
            Dynamic Psychiatry;;
          </span>{" "}
          It is the study of dynamic and psycho-genetic factors underlying
          behavior. Its predecessor is Freud.
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          BASIC CONCEPTS OF DYNAMIC PSYCHIATRY
        </h3>
        <h2>I-Divisional Assumption;</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>(conscious)</li>
          <li>( preconscious)</li>
          <li>(unconscious)</li>
        </ul>
        <h2>Structural Assumption;</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li> (id)</li>
          <li>Ego (self)</li>
          <li>Superego</li>
        </ul>

        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          I-Divisional Assumption
        </h2>
        <h3>CONSCIOUSNESS</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Alertness, discernment, awareness Ego and superego dominate The
          secondary process is dominated by the logical process, which we call
          thought. (Secondary process). The ability to evaluate reality is in
          the foreground. It is the part that establishes a logical cause-effect
          relationship between events.
        </p>
        <h3>PRE-CONSCIOUSNESS</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          They are events that can be immediately remembered with some
          connotations.
        </p>
        <h3>UNCONSCIOUS;</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the compartment where our lives that we are not aware of are
          hidden. Revealing is only possible with some treatments. (Hypnosis,
          free association) It never loses its vitality. It directs our lives at
          every moment.
        </p>
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          II- Structural Assumption( Structural Hypothesis)
        </h2>
        <h3>ID (LOWER SELF)</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Every inherited, innate impulse is in this section. It works outside
          the logic principle. The pleasure principle is in the foreground.
          Primary thought process dominates.
        </p>
        <h3>EGO (SELF)</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In order for the organism to cope with the facts, it takes its origin
          from the id. It acts in accordance with the reality principle. Facts
          dominate over pleasures.It controls the needs that the id emanates,
          seeking those that fit the real world to be met. It keeps the
          unsuitable under control. It tries to establish an adaptive behavior
          between the id's demands, the superego's prohibitions and
          environmental conditions
        </p>
        <h3>SUPEREGO (UPPER SELF)</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It consists of inhibitory and prohibitive response patterns. It occurs
          as part of the ego. It represents hereditary values as well as
          includes social standards.It consists of the orders and prohibitions
          of our parents. In short, it creates responsibility and moral
          feelings.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Stress</h2>
        <h3>1- Stimulus model</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It occurs with the presence of a stimulus. This stimulus is related to
          the amount of needs.
        </p>

        <h3>2- Response model</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The person experiencing stress reacts to it physiologically,
          emotionally, mentally and socially. All these experiences are stress
          itself.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
          STRESS TOLERANCE;
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The person experiencing stress reacts to it physiologically,
          emotionally, mentally and socially. All these experiences are stress
          itself.
        </p>
        <h3>Distress</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the (-) loaded stress that prevents the person.
        </p>
        <h3>Eustres</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is (+) loaded stress that motivates the person
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          DECOMPANSATION;
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the situations in which the integrity is shaken, the defenses
          are inadequate, inappropriate, excessive and inappropriate, in other
          words, the person loses the balance of harmony and resorts to
          excessive pathological defenses in order to maintain a balance.
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          BLOCKING
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the absence of satisfaction when an obstacle appears in front of
          the organism in the direction of its direction in order to relieve the
          tension.
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          CONFLICT
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the encounter of the organism with multiple incompatible
          impulses or impulse objects.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          THERE ARE THREE TYPES OF CONFLICT:
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          1---approach-approach conflict
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The individual can sometimes be influenced by two equally attractive
          goals. For example, when you have to choose one of the two shoes you
          like in a shoe store, you get into a conflict.
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          2---avoidance-avoidance conflict
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The individual is between two unpleasant situations For example, an
          avoidance-avoidance conflict occurs when we have both a toothache and
          a strong fear of the dentist.
        </p>
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          3---approach-avoidance conflict
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The individual is faced with an attractive and repulsive situation at
          the same time. For example, the love-hate feeling that children
          develop towards their parents is an example of this.
        </p>

        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          TRANSFERENCE
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the individual's re-experiencing the feelings and attitudes that
          he experienced with important people (mother, father, etc.) in
          childhood with the people with whom he is in contact (Dr, Nurse, etc.)
          and reacting by evaluating these people according to their own
          childhood perceptions and feelings.
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          COUNTER TRANSFERENCE
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the dead end in the therapeutic communication created by the
          staff. It is a reactive response of the healthcare worker to the
          transference
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">Insight;</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the ability of a person to describe, make sense of, and be aware
          of his behaviors in a realistic way.
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Clinical insight
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Insight developed by the patient against the disease (awareness of the
          disease)
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Analytical insight;{" "}
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Recognizing the underlying causes of this behavior
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Secondary gain{" "}
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          To benefit by using powerlessness to get rid of unwanted
          responsibilities.
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Primary gain
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          is the state of anxiety turned into a disease.
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Altruism; (Sacrifice)
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          There is concern for others. There is concern on behalf of the
          patient, but it is about ensuring that the patient finds the solution.
        </p>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/r_KwSiPmGEo", // Example YouTube video link https://youtu.be/r_KwSiPmGEo
  },
  {
    id: 5,
    title: "Defense Mechanism",
    content: (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          DEFENSE MECHANISMS
        </h1>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          WHAT DO DEFENSE MECHANISMS (DM) DO?
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Provides resolution of emotional turmoil.</li>
          <li>It provides relief from stress.</li>
          <li>It helps to relieve emotional pain.</li>
          <li>It reduces anxiety or provides avoidance of anxiety.</li>
          <li>
            To some extent, it alleviates the anxieties and tensions generated
            by obstructions and conflicts
          </li>
          <li>
            It increases the self's resilience against external forces and
            internal conflicts.
          </li>
          <li>Maintaining one's self-esteem is maintaining ego integrity.</li>
        </ul>

        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Negative aspect of DM;
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          If it is used in excessive doses, the person's compliance with reality
          decreases.
        </p>
        <h2 className="text-lg text-gray-700 mb-6 leading-relaxed">
          Positive aspect of DM;
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Empathy Entrepreneurship Coping Holistic Approach
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Repression</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Suppression, which is the first to be defined among the defense
          mechanisms of the self and which is the basis of all mechanisms, is
          the pushing of impulses, memories and experiences out of consciousness
          and keeping them there.It is the removal of inappropriate wishes and
          memories from consciousness. For example; A person whose car crashes
          and whose spouse and child dies may be paralyzed for no reason because
          he has difficulty suppressing his sense of guilt.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Denial</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Ignoring or not seeing a reality that is perceived as dangerous for
          the self and that can cause anxiety is a very common form of primitive
          defense in varying degrees.There is an unconscious feature of ignoring
          and instead, other unreal acceptances, other thoughts and beliefs are
          created.(important in delusion formation)
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Projection</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the perception of emotions, impulses and needs as external,
          reflected, external or directed to oneself from the outside.Just as we
          cannot make our apologies fit for ourselves,It is easy to see them in
          others.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Projection</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the perception of emotions, impulses and needs as external,
          reflected, external or directed to oneself from the outside.Just as we
          cannot make our apologies fit for ourselves,It is easy to see them in
          others. It protects a person from anxiety in two ways: a- The person
          puts his/her own shortcomings, blame or responsibility on someone
          else. b- Appropriate thoughts that will cause feelings of guilt to
          others.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Introjection</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The whole being or part of another is thrown into the self as if it
          were being devoured. This introjected object is an object that
          continues to exist within the self like a foreign body, and is even
          associated with it. eg; Thinking that the devil has entered the person
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Splitting</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the division of the natural impulses in the human self or the
          inward object into parts known as positive and negative, good and bad,
          trying to keep the good alive, the bad to be destroyed or the bad to
          live and the good to be destroyed. A tendency to division is evident
          in schizophrenia and many borderline disorders.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Splitting</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the division of the natural impulses in the human self or the
          inward object into parts known as positive and negative, good and bad,
          trying to keep the good alive, the bad to be destroyed or the bad to
          live and the good to be destroyed. A tendency to division is evident
          in schizophrenia and many borderline disorders.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Dissociation</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the process by which a set of thoughts and emotions or complexes
          in the mind become autonomous and affect the self by breaking away
          from the events and experiences they are connected to. It is a
          mechanism that calms conflict and anxiety.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Displacement</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is the directing of an impulse or emotion from its original object
          to another object. Conflict and anxiety can be reduced or prevented by
          directing an impulse that may cause a conflict and anxiety and which
          is not accepted by the self to another object instead of the original
          object. It works in two different ways: a-For example, a person who is
          unfairly criticized at work suppresses his feelings first, and gets
          angry with his wife when he goes home. b- Developing another emotion
          instead of the one that is considered dangerous.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Rationalization
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Finding a reason, an explanation that seems plausible but not
          distressing, is a very common defense mechanism in painful,
          distressing situations for the self. For example: The statement of an
          individual who does not have good communication, I like loneliness
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Reaction-formation
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The person may try to defend his/her self by showing the opposite
          reactions to the unconscious forbidden impulses and tendencies within
          himself. eg; Being abnormally meticulous and fond of cleanliness
          against grudge and hatred, rudeness tendencies within the individual
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Intellectualization
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is trying to explain forbidden impulses, memories and experiences
          with intellectual abilities and information. The person examines his
          problems as a medical subject, finds names for his illness, and
          explains the reasons in scientific terms.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Isolation</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          While the cognition, recognition and meaning-related side of a memory
          is fully remembered, the emotional side is separated and repressed and
          remains unconscious, or the emotions are transferred to another
          seemingly unrelated experience, another object (displacement). It is
          common in individuals predisposed to OCD.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Conversion</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In situations that cause severe anxiety, loss of function in movement
          or sensory organs occurs in predisposed persons. Anxiety has been
          turned into organ dysfunction, dysfunction. It is common in
          conversion. Provides Primary and Secondary earnings.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Concretization
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The mind tends to make things clear and intangible, uncertain things
          clear, concrete and specific. eg; Attachment of suspicion to certain
          enemies (in paranoid psychoses)
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Undoing</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is a set of processes carried out with the aim of neutralizing a
          negative action that the person actually or thought has done or
          thought to have done, removing its effect and counting it as if it has
          not been done. It is most common in OCD and neuroses.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Fixation</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In some people, parts of the ego get stuck at a certain level and
          cannot continue to develop. While the developmental stages are
          progressing, the individual's being stuck in the period feature and
          not being able to adapt them to the necessity of the next steps.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Regression</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          If an attained stage of development is of such a nature as to cause
          severe anxiety, there may be a regression from adult behavior to an
          earlier stage. eg; In schizophrenia, an adult thinks and acts like a
          small child
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Fantasy-formation
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          When a person cannot realize his desires and ambitions, his needs and
          motives remain unsatisfied, he tries to get satisfaction by dreaming.
          eg; To think of what the hero in the book we are reading as if we had
          done it ourselves. It is often used in introverted personality types.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Identification
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It is to adopt the characteristics, feelings and behavior patterns,
          values and beliefs of another person, to absorb them into our own
          selves and to make them a part of our personality. It is an
          unconscious maturation defense mechanism that every individual uses
          from childhood to adulthood.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Sublimation</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A healthy development process allows many impulses to mature in human
          beings and to find ways of satisfaction when their place and order
          come. The most important point is that the self is not dependent on
          the need to defend against any source of anxiety. eg; need to be loved
          in childhood, sexuality in adulthood
        </p>
      </>
    ),
    videoUrl: "https://www.youtube.com/embed/p7o__bFon1I", // https://youtu.be/p7o__bFon1IExample YouTube video link
  },
  {
    id: 6,
    title: "Classification of Mental Illnesses",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Psychiatry is no longer subjective impressions and definitions; It has
          made great progress towards being on solid foundations with certain
          diagnostic criteria and classifications.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Classification Systems in Psychiatry
        </h3>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          DSM-V{" "}
          <span className="text-blue-500">
            "Diagnostic and Statistical Manual of Mental Disorders"
          </span>
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The <span className="font-semibold">DSM-V</span> is the fifth edition
          of the "Diagnostic and Statistical Manual of Mental Disorders" issued
          by the American Psychiatric Association. It is widely used in the
          United States and around the world to diagnose mental health
          conditions. The first DSM was published in 1952, and DSM-V was
          released on May 18, 2013. The DSM system categorizes mental disorders
          based on sets of symptoms and is crucial for clinical diagnosis,
          treatment planning, and understanding the pathophysiology of various
          disorders. DSM-V also serves as the guide for insurance billing.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The DSM-V includes diagnostic criteria, examples, and specific
          descriptors to help clinicians differentiate between various
          disorders. It also categorizes disorders into different groups such as
          mood disorders, anxiety disorders, and psychotic disorders. Notably,
          DSM-V introduced new diagnostic categories, including disruptive mood
          dysregulation disorder and hoarding disorder.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          ICD-11{" "}
          <span className="text-green-500">
            "International Classification of Diseases - 11th Edition"
          </span>
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The <span className="font-semibold">ICD-11</span> is the 11th edition
          of the "International Classification of Diseases" issued by the World
          Health Organization (WHO). Unlike the DSM-V, which is mainly used in
          the United States, the ICD system is a globally recognized tool used
          by healthcare professionals to diagnose diseases and mental health
          conditions. The first version of ICD was published in 1968 as ICD-8,
          and the latest edition, ICD-11, was released in January 2022.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          One of the key differences between ICD and DSM is that ICD is used
          globally for all medical diagnoses, not just for mental health. ICD-11
          introduced new chapters for mental health, such as the
          reclassification of certain psychiatric conditions to reflect a more
          comprehensive understanding of mental health and comorbidity.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In terms of psychiatry, the ICD-11 now includes a more nuanced
          understanding of mood disorders, anxiety, psychotic conditions, and
          other mental health issues. It also allows for the combination of
          multiple diagnostic codes, enabling a more accurate and comprehensive
          understanding of patients' conditions. One notable example is the
          recognition of complex trauma and dissociative disorders as standalone
          diagnoses.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Discrimination of Psychoses and Psychoneuroses
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The terms "neurosis" and "psychoneurosis" are often used
          interchangeably. While these terms were historically well-established
          in classical psychiatry, they are now considered less useful. These
          terms have largely been abandoned in favor of more specific diagnostic
          categories.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Classically, <span className="font-semibold">psychoneurosis</span> was
          a group of disorders that manifested with anxiety or special defense
          symptoms in which the individual remained connected to reality. The
          individual's social functioning was typically not impaired to a great
          extent, and the overall impairment was generally milder than psychotic
          conditions.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In <span className="font-semibold">neuroses</span>, the ability to
          evaluate reality remains intact. For example, the patient may
          recognize their illness and realize that their fears or thoughts are
          irrational. They distinguish between thoughts, wishes, dreams,
          actions, and external events.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          According to psychoanalytic theory, the main pathology in neuroses is
          anxiety. This anxiety can manifest in different forms: it may either
          be experienced as it is or repressed and transformed into symptoms
          such as phobias, obsessions, or compulsions. For instance, a person
          with a phobia may displace their anxiety from its original source to
          an unrelated object or situation. Similarly, anxiety can be suppressed
          and expressed as bodily dysfunctions, leading to conditions like
          hysterical neurosis.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <p className="text-xl font-semibold text-gray-800">In Summary:</p>
          <p className="text-lg text-gray-700">
            - DSM-V is widely used for diagnosing mental disorders in the United
            States. - ICD-11 is a global standard for medical diagnoses and
            includes both physical and mental health conditions. -
            Psychoneuroses are disorders with anxiety and defense mechanisms but
            without a break from reality. - Neurotic patients are aware of their
            condition, while psychotic patients may lose touch with reality.
          </p>
        </div>
      </>
    ),
    
  },
  {
    id: 7,
    title: "GENERAL SYMPTOMS IN PSYCHIATRIC DISEASES",
    content: (
      <>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          In modern psychiatry, patient evaluation should encompass biological,
          psychological, and social aspects, recognizing the individual as a
          biopsychosocial entity. A structured, hierarchical approach is
          essential, with the first step being a comprehensive history taken
          from the patient.
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          I. General Appearance of the Patient
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The patient's general appearance provides crucial diagnostic clues,
          though it alone is insufficient for a definitive diagnosis. Factors
          such as self-care, cleanliness, age, facial expressions, speech, and
          posture must be considered. Visible abnormalities may indicate
          underlying conditions like{" "}
          <span className="font-semibold">
            Gigantism, Acromegaly, Cushing’s, or Wilson’s disease.
          </span>
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          II. Cognitive Functions (Sensorium)
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            <span className="font-semibold">Consciousness</span>
          </li>
          <li>
            <span className="font-semibold">Attention</span>
          </li>
          <li>
            <span className="font-semibold">Orientation</span>
          </li>
          <li>
            <span className="font-semibold">Perception</span>
          </li>
          <li>
            <span className="font-semibold">Memory</span>
          </li>
          <li>
            <span className="font-semibold">Judgment and Insight</span>
          </li>
        </ul>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          III. Psychophysiology
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            <span className="font-semibold">Sleep Patterns</span>
          </li>
          <li>
            <span className="font-semibold">Eating Habits</span>
          </li>
          <li>
            <span className="font-semibold">Urination</span>
          </li>
          <li>
            <span className="font-semibold">Defecation</span>
          </li>
          <li>
            <span className="font-semibold">Memory Function</span>
          </li>
          <li>
            <span className="font-semibold">Sexual Identity & Function</span>
          </li>
        </ul>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Eye Contact & Expression
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The patient's eye contact can reveal underlying emotions and mental
          states.
          <span className="font-semibold">Avoidance</span> may indicate{" "}
          <span className="text-red-500">
            anxiety, hostility, or social withdrawal
          </span>
          .
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">Speech & Tone</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Speech reflects thought processes. Vocabulary, fluency, and
          abnormalities should be assessed.
          <span className="text-blue-500 font-semibold">Aphasia</span> warrants
          neurological evaluation.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Speech Abnormalities
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            <span className="text-red-500 font-semibold">Logorrhea:</span>{" "}
            Excessive, uncontrolled speech (Common in Mania).
          </li>
          <li>
            <span className="text-red-500 font-semibold">Word Salad:</span>{" "}
            Incoherent, nonsensical word arrangement.
          </li>
          <li>
            <span className="text-red-500 font-semibold">Dysphonia:</span>{" "}
            Whispered or hoarse speech.
          </li>
          <li>
            <span className="text-red-500 font-semibold">Aphonia:</span>{" "}
            Inability to produce speech, only lip movements.
          </li>
          <li>
            <span className="text-red-500 font-semibold">Mutism:</span> Complete
            absence of speech despite intact vocal ability.
          </li>
        </ul>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Cognitive States & Consciousness
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Consciousness levels vary in psychiatric and neurological disorders,
          ranging from full wakefulness to deep coma.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Disorders of Consciousness
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            <span className="text-blue-500 font-semibold">Clouding:</span>{" "}
            Mental fog, difficulty concentrating.
          </li>
          <li>
            <span className="text-blue-500 font-semibold">Hebetude:</span>{" "}
            Profound mental dullness.
          </li>
          <li>
            <span className="text-blue-500 font-semibold">Obnubilation:</span>{" "}
            Dream-like confusion.
          </li>
          <li>
            <span className="text-blue-500 font-semibold">
              Somnolence (Lethargy):
            </span>{" "}
            Drowsiness, easily awakened.
          </li>
          <li>
            <span className="text-blue-500 font-semibold">Stupor:</span> Limited
            response to stimuli, inconsistent verbal reactions.
          </li>
          <li>
            <span className="text-blue-500 font-semibold">Semi-Coma:</span> Only
            primitive responses to painful stimuli.
          </li>
          <li>
            <span className="text-blue-500 font-semibold">Deep Coma:</span> No
            response even to severe pain.
          </li>
        </ul>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Delirium
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A state of acute confusion marked by restlessness, fear,
          hallucinations, and disorientation. It often presents with agitation
          and paranoia.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Orientation Disorders
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            <span className="text-red-500 font-semibold">
              Autopsychic Disorientation:
            </span>{" "}
            Confusion regarding one's own identity.
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Allopsychic Disorientation:
            </span>{" "}
            Confusion regarding surroundings and time.
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Orientation assessments include awareness of{" "}
          <span className="font-semibold">time, place, and self</span>. Deficits
          may indicate psychiatric or neurological conditions requiring further
          evaluation.
        </p>
        <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase border-b-2 pb-2">
          Attention (Concentration)
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The ability to focus and sustain mental processes on a specific
          subject, object, or aspect of life. In essence, it is the continuation
          of a state of consciousness.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Spontaneous (Involuntary) Attention
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Attention that occurs effortlessly without conscious effort.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Voluntary Attention
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The intentional direction of attention towards a specific subject or
          object of interest.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-6 uppercase border-b-2 pb-2">
          Attention Disorders
        </h3>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Hypervigilance
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Excessive alertness and increased attention.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Distractibility
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Difficulty maintaining attention on a single subject, with a tendency
          to shift focus to irrelevant stimuli. Common in manic patients.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Selective Inattention
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The deliberate or subconscious avoidance of certain objects or
          situations, often linked to anxiety disorders.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-6 uppercase border-b-2 pb-2">
          Memory
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A dynamic process that enables the acquisition, storage, and retrieval
          of information through mental actions such as attention and
          perception, connecting past experiences with present consciousness.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-6 uppercase border-b-2 pb-2">
          Memory Disorders
        </h3>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Hypermnesia
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          An abnormal increase in memory retention and recall.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Hypomnesia, Dysmnesia, Amnesia
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Partial or complete loss of memory and difficulty recalling past
          information.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Anterograde Amnesia
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The inability to form new memories following a causative event or
          condition.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Retrograde Amnesia
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Loss of memories prior to the onset of a causative condition or
          trauma.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">Fugue</h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A dissociative disorder where the individual forgets their past and
          unexpectedly leaves home, work, or their usual environment.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">Paramnesia</h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A memory distortion in which real and imagined experiences become
          confused.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">Déjà Vu</h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The sensation of having previously experienced a situation that is
          actually new. Common in hysteria and epilepsy.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">Jamais Vu</h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The sensation that a familiar situation or environment is being
          experienced for the first time.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Confabulation
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Filling in memory gaps with false or distorted information. Common in
          Wernicke-Korsakoff syndrome.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-6 uppercase border-b-2 pb-2">
          Perception
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The process of recognizing, receiving, and evaluating external and
          internal stimuli. Perception works in conjunction with cognitive
          functions such as attention.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Hypoesthesia (Hypoalgesia)
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Reduced sensitivity to sensory stimuli, often observed in conversion
          disorders.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Hyperesthesia (Hyperalgesia)
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Increased sensitivity to stimuli, which may occur in various
          psychiatric conditions.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Hallucination
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Perception of sensations without an external stimulus, making them
          seem real.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Types of Hallucinations
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Auditory (Hearing voices, sounds)</li>
          <li>Visual (Seeing non-existent objects or people)</li>
          <li>Olfactory (Smelling scents that aren’t present)</li>
          <li>Gustatory (Tasting things that aren’t real)</li>
          <li>Tactile (Feeling physical sensations that don’t exist)</li>
        </ul>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">Illusion</h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Misinterpretation of a real external stimulus.
        </p>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">Macropsia</h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Seeing objects or people larger than they actually are.
        </p>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">
          Metamorphopsia
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Perceiving depth, distance, and objects in a distorted manner.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Depersonalization
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The feeling of detachment from oneself, perceiving one’s body as
          foreign or altered.
        </p>

        <h4 className="text-xl font-semibold text-blue-600 mt-4">
          Derealization
        </h4>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The sensation that one’s surroundings are unreal, unfamiliar, or
          altered.
        </p>
        <h3 className="text-2xl text-gray-800 mb-4">JUDGMENT</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Judgment is the ability to establish cause-effect connections between
          events, distinguish between right and wrong, and act accordingly. In
          severe mental disorders and organic syndromes such as dementia and
          delirium, judgment may be significantly impaired. For example, a very
          old person with dementia attempting to sell their property, make
          inappropriate donations, or engage in behaviors contrary to their
          morals may show signs of severe judgment disorder.
        </p>

        <h3 className="text-2xl text-gray-800 mb-4">THOUGHT</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Thought is a mental function governed by principles of logic and
          serves as a problem-solving process.
        </p>

        <span className="text-blue-500">Thought blockade:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A slowdown or interruption in the flow of thought, making it difficult
          to find words and express thoughts.
        </p>

        <span className="text-blue-500">Flight of Ideas:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A rapid succession of thoughts connected by similarities in meaning or
          sound. Logical ordering is generally preserved, but speech is
          pressured and difficult to interrupt. Patients often describe feeling
          like their speech cannot keep up with their thoughts. It is most
          common in mania but may also be seen in substance abuse,
          schizophrenia, and acute stress reactions.
        </p>

        <span className="text-blue-500">Clang association:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Words are strung together based on similar sounds rather than meaning.
          Example: "I don't make noise, I try to make sense of it."
        </p>

        <span className="text-blue-500">Word salad:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A disorganized mix of words that lack logical connection or meaning.
        </p>

        <span className="text-blue-500">Tangentiality:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Giving irrelevant responses to questions due to thought derailment.
          The speaker never reaches their intended point. When asked "Where are
          you from?" they may respond with an unrelated philosophical discussion
          on identity.
        </p>

        <span className="text-blue-500">Neologism:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Creation of new words or distortions of existing words.
        </p>

        <span className="text-blue-500">Perseveration:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Persistent repetition of words, phrases, or gestures despite a change
          in stimulus. For example, answering multiple different questions with
          the same response.
        </p>

        <span className="text-blue-500">Content of thought:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Includes ideas, beliefs, memories, wishes, plans, and complaints.
        </p>

        <span className="text-blue-500">Delusion:</span>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A false belief held with strong conviction despite contrary evidence.
          It represents a disturbance in reasoning.
        </p>

        <span className="text-blue-500">Types of Delusions:</span>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 leading-relaxed">
          <li>
            <strong>Grandeur:</strong> Belief of being a prophet, political
            leader, or possessing infinite power.
          </li>
          <li>
            <strong>Erotomanic:</strong> Belief that others, often famous
            individuals, are in love with them.
          </li>
          <li>
            <strong>Persecution:</strong> Belief that others intend harm, such
            as poisoning or conspiring against them.
          </li>
          <li>
            <strong>Guilt/Worthlessness:</strong> Belief that one is useless or
            unworthy of treatment.
          </li>
          <li>
            <strong>Nihilistic:</strong> Belief that oneself or parts of the
            body do not exist.
          </li>
          <li>
            <strong>Somatic:</strong> Belief in having a severe illness without
            medical evidence.
          </li>
          <li>
            <strong>Reference:</strong> Belief that media messages are directed
            specifically at them.
          </li>
          <li>
            <strong>Influence:</strong> Belief of being controlled by external
            forces, such as electronic devices.
          </li>
        </ul>

        <span className="text-blue-500">Obsessions and Phobias:</span>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 leading-relaxed">
          <li>
            <strong>Obsession:</strong> Persistent, intrusive thoughts that
            cause distress, despite being recognized as irrational.
          </li>
          <li>
            <strong>Phobia:</strong> Excessive and uncontrollable fear of
            specific objects or situations.
          </li>
          <li>
            <strong>Common Phobias:</strong>
          </li>
          <ul className="list-disc list-inside ml-6">
            <li>
              <strong>Agoraphobia:</strong> Fear of open spaces or situations
              where escape is difficult.
            </li>
            <li>
              <strong>Claustrophobia:</strong> Fear of enclosed spaces.
            </li>
            <li>
              <strong>Social phobia:</strong> Fear of social situations due to
              embarrassment or scrutiny.
            </li>
            <li>
              <strong>Zoophobia:</strong> Fear of animals.
            </li>
            <li>
              <strong>Acrophobia:</strong> Fear of heights.
            </li>
          </ul>
        </ul>

        <span className="text-blue-500">Nutritional Disorders:</span>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 leading-relaxed">
          <li>
            <strong>Stiophobia:</strong> Avoidance of food.
          </li>
          <li>
            <strong>Stiomania:</strong> Compulsive overeating.
          </li>
          <li>
            <strong>Bulimia:</strong> Excessive eating with an inability to
            stop.
          </li>
          <li>
            <strong>Coprophagia:</strong> Eating inedible substances.
          </li>
        </ul>

        <span className="text-blue-500">Sleep Disorders:</span>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 leading-relaxed">
          <li>
            <strong>Dyssomnia:</strong> Difficulty in sleep initiation or
            maintenance.
          </li>
          <li>
            <strong>Parasomnia:</strong> Abnormal behaviors during sleep (e.g.,
            nightmares, sleepwalking).
          </li>
        </ul>

        <span className="text-blue-500">Will and Movement Disorders:</span>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 leading-relaxed">
          <li>
            <strong>Abulia:</strong> Complete loss of will.
          </li>
          <li>
            <strong>Hypobulia:</strong> Decreased willpower.
          </li>
          <li>
            <strong>Mania:</strong> Excessive enthusiasm or compulsion to act.
          </li>
          <li>
            <strong>Hyperactivity:</strong> Increased movements.
          </li>
          <li>
            <strong>Excitation:</strong> Increased motor activity, including
            excessive talking and gestures.
          </li>
          <li>
            <strong>Agitation:</strong> Restlessness with aggressive tendencies.
          </li>
          <li>
            <strong>Bradykinesia:</strong> Slowness in movement.
          </li>
          <li>
            <strong>Negativism:</strong> Resistance to external stimuli.
          </li>
          <li>
            <strong>Compulsion:</strong> Repetitive actions (e.g., handwashing,
            checking behaviors).
          </li>
          <li>
            <strong>Pyromania:</strong> Uncontrollable urge to start fires.
          </li>
          <li>
            <strong>Kleptomania:</strong> Compulsive stealing.
          </li>
        </ul>
      </>
    ),
    
  },
  {
    id: 8,
    title: "Systematic (Planned) Nursing Approach in Psychiatric Nursing",
    content: (
      <>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <p className="text-xl text-gray-800 mb-6 leading-relaxed font-semibold">
            A nursing care plan outlines the nursing care to be provided to a
            patient. It is a set of actions the nurse will implement to resolve
            nursing problems identified by assessment. The creation of the plan
            is an intermediate stage of the nursing process. It guides in the
            ongoing provision of nursing care and assists in the evaluation of
            that care.
          </p>

          <h2 className="text-2xl text-blue-600 font-bold mb-4">
            Characteristics of the Nursing Care Plan
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              Focuses on actions designed to solve or minimize the existing
              problem.
            </li>
            <li>Product of a deliberate, systematic process.</li>
            <li>Relates to the future.</li>
            <li>Based on identifiable health and nursing problems.</li>
            <li>Holistic in focus.</li>
          </ul>

          <h2 className="text-2xl text-blue-600 font-bold mt-6 mb-4">
            Stages of the Nursing Process
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Assessment:</span> Evaluating
              patient's needs.
            </li>
            <li>
              <span className="font-semibold">Diagnosis:</span> Identifying
              human response needs.
            </li>
            <li>
              <span className="font-semibold">Planning:</span> Developing the
              care plan.
            </li>
            <li>
              <span className="font-semibold">Implementation:</span> Executing
              the care plan.
            </li>
            <li>
              <span className="font-semibold">Evaluation:</span> Assessing the
              effectiveness of care.
            </li>
          </ul>

          <h3 className="text-2xl text-gray-800 font-bold mt-6 mb-4">
            Patient History
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Name (or preferred name)</li>
            <li>Marital status</li>
            <li>Occupation</li>
            <li>Religious beliefs</li>
            <li>Living circumstances</li>
          </ul>

          <h3 className="text-2xl text-gray-800 font-bold mt-6 mb-4">
            Mental Status Examination
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Appearance:</span> Observations
              about posture, clothing, and eye contact.
            </li>
            <li>
              <span className="font-semibold">Mood:</span> Patient’s sustained
              emotional state.
            </li>
            <li>
              <span className="font-semibold">Affect:</span> Range of emotional
              expressiveness.
            </li>
            <li>
              <span className="font-semibold">Speech:</span> Quality, rate,
              volume, and fluency.
            </li>
            <li>
              <span className="font-semibold">Thought Process:</span> Coherence
              and logical progression of thoughts.
            </li>
            <li>
              <span className="font-semibold">Insight & Judgment:</span>{" "}
              Awareness and decision-making ability.
            </li>
          </ul>

          <h3 className="text-2xl text-gray-800 font-bold mt-6 mb-4">
            Observation Guide Form
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-blue-600 font-semibold">
              Physical Symptoms:
            </span>{" "}
            Includes vital signs, weight, general appearance, and bodily
            functions.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-blue-600 font-semibold">
              Behavioral Symptoms:
            </span>{" "}
            Examines appearance, motor behaviors, and speech patterns.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-blue-600 font-semibold">Thoughts:</span>{" "}
            Evaluates coherence, hallucinations, delusions, and overall mental
            state.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Patient Assessment
          </h2>

          <section className="mb-6">
            <h3 className="text-xl font-medium text-blue-600 mb-2">
              Social Behavior
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Characteristics such as the patient’s compliance with others in
              the clinic, friendliness, timidity, concern, silence, loudness,
              talkativeness, and social tendencies are observed.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-medium text-blue-600 mb-2">
              Facial Expression & Emotional State
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The emotional state is crucial in mental health assessment.
              Patients may exhibit restlessness, aggression, depression, joy,
              distress, fear, dullness, or apathy, all of which should be
              carefully noted by the nurse.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-medium text-blue-600 mb-2">
              Intra-Clinical Activities
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Observation includes patient interactions, participation in
              activities, responsibility fulfillment, and engagement in reading,
              handicrafts, or group meetings.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-medium text-blue-600 mb-2">
              Feelings, Thoughts & Visitor Behavior
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The nurse observes behavioral changes post-visit, including
              warmth, distress, or withdrawal, providing insights into patient
              relationships.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-medium text-blue-600 mb-2">
              Vacation Status
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Observations include patient’s request for leave, their state upon
              return, and thoughts about the leave.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-medium text-blue-600 mb-2">
              Response to Treatment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Evaluation includes patient’s acceptance, resistance, or
              compliance with medications and therapies.
            </p>
          </section>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 border-b pb-2">
            Interview with Patients
          </h3>
          <section className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Proper greeting, self-introduction, explaining the interview
              purpose, ensuring a suitable environment, and using therapeutic
              communication techniques such as active listening, reflection,
              feedback, and appropriate silence.
            </p>
          </section>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 border-b pb-2">
            Configuring the Conversation
          </h3>
          <section className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Focus on patient complaints, encourage open-ended discussions,
              summarize key issues, and communicate treatment options clearly.
            </p>
          </section>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 border-b pb-2">
            In Conclusion
          </h3>
          <section className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              A patient’s personality is shaped by family, environment, and
              experiences. The nursing care plan and mental health assessment
              are crucial for patient well-being.
            </p>
          </section>
        </div>
      </>
    ),
    
  },
  {
    id: 9,
    title: "Therapeutic Environment,  Therapeutic  Communication",
    content: (
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Therapeutic Environment & Communication
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          The{" "}
          <span className="font-semibold text-blue-600">
            therapeutic environment
          </span>{" "}
          is a dynamic setting designed to heal patients, improve their health,
          support their self-esteem, and facilitate their reintegration into
          social life.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Purpose of the Therapeutic Environment
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>To manage the environment</li>
          <li>
            To help patients increase self-esteem, self-worth, and
            self-confidence
          </li>
          <li>To make them more active in society and life</li>
          <li>To develop their ability to relate to others</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Goals and Principles
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Meet the patient's basic needs</li>
          <li>Encourage self-expression</li>
          <li>Maximize communication benefits between patient and staff</li>
          <li>Improve relationships with other patients</li>
          <li>Increase self-esteem and confidence</li>
          <li>Help control problematic behavior</li>
          <li>Enhance coping skills</li>
          <li>Promote adaptive social skills</li>
          <li>Accelerate socialization</li>
          <li>Increase opportunities for unit management participation</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Elements of the Therapeutic Environment
        </h3>
        <ol className="list-decimal list-inside mb-6 text-gray-700">
          <li>
            <span className="font-semibold">Security:</span> Protection from
            danger and harm, both physically and psychologically.
          </li>
          <li>
            <span className="font-semibold">Structured Environment:</span>
            Regulations and schedules to avoid disappointment and provide a
            supportive atmosphere.
          </li>
          <li>
            <span className="font-semibold">Norms:</span> Facilitate socially
            acceptable behaviors.
          </li>
          <li>
            <span className="font-semibold">Boundaries:</span> Define acceptable
            and unacceptable behaviors.
          </li>
          <li>
            <span className="font-semibold">Balance:</span> Support the
            progression from dependent to independent behavior.
          </li>
          <li>
            <span className="font-semibold">Flexibility/Changeability:</span>
            Regular review of norms to enhance the therapeutic environment.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Therapeutic Relationships
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          The ability to establish therapeutic relationships with clients is one
          of the most important skills a nurse can develop. Effective
          interpersonal skills are essential for forming a sound therapeutic
          alliance.
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          Components of a Therapeutic Relationship
        </h4>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <span className="font-semibold">Trust:</span> Built through
            reliability and consistency.
          </li>
          <li>
            <span className="font-semibold">Empathy:</span> The ability to
            understand and communicate the client’s feelings.
          </li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          Barriers to Communication
        </h4>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Agreeing and disagreeing</li>
          <li>Being defensive</li>
          <li>Changing topics</li>
          <li>Passing judgment</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Self-Awareness & Therapeutic Use of Self
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Self-awareness</span> is the process
          of understanding one’s own values and how they affect others.
          <span className="font-semibold">Therapeutic Use of Self</span>
          involves utilizing personal qualities to establish relationships with
          clients.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Phases of the Nurse-Client Relationship
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Pre-interaction Phase</li>
          <li>Orientation Phase</li>
          <li>Working Phase</li>
          <li>Termination Phase</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Goals of Therapeutic Communication
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Establish a therapeutic nurse-client relationship and identify the
          most important client concern to facilitate their expression of
          emotions and necessary self-care skills.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Privacy and Respecting Boundaries
          </h3>

          <p className="text-lg text-gray-700 mb-4">
            Privacy is desirable in therapeutic communication, but it is not
            always possible. It’s essential to evaluate the context and setting
            when interacting with clients.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Possible Venues for Interaction:
          </h4>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Interview/Conference Room</li>
            <li>End of the Hall</li>
            <li>Quiet Corner of the Day Room or Lobby</li>
          </ul>

          <p className="text-lg text-gray-700">
            Always assess whether interacting in the client’s room is
            therapeutic, considering the client's comfort and the nature of the
            conversation.
          </p>
        </div>
      </div>
    ),
    
  },
  {
    id: 10,
    title:
      "Therapeutic Communication Principles and Techniques in Mental Health and Psychiatric Nursing",
    content: (
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Therapeutic Communication Principles and Techniques in Mental Health
          and Psychiatric Nursing
        </h1>
        <p className="text-gray-700 mb-4">
          Some of the communication techniques are therapeutic and some are
          non-therapeutic. Therapeutic communication techniques are verbal and
          nonverbal communication techniques that make it easier for the patient
          to freely express their feelings, thoughts, and intentions. The
          nurse's understanding, empathy, and helping skills are communicated to
          the patient. The patient feels respected, valued, and trusted. This
          makes the individual feel good, valued, and special. It is essential
          to ensure that the individual will not be punished, ridiculed, blamed,
          or face any retaliation for the feelings or thoughts expressed.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Active Listening</h2>
        <p className="text-gray-700 mb-4">
          The majority of human communication is made verbally, but messages in
          this communication suffer many losses due to personal and
          environmental factors. Therefore, learning and applying effective
          listening principles and methods becomes even more important.
          Listening is understanding the meaning of words. It is an active
          process that includes not only verbal but also nonverbal messages,
          making sense of them, and responding to them.
        </p>
        <p className="text-gray-700 mb-4">
          Active listening is understanding what the patient really wants to
          say, both with his words and with his language. There is mutual
          participation in active listening. The listener contributes to the
          speaker through verbal or nonverbal feedback, asking clarifying
          questions to the speaker (e.g., “Where did it happen? How did it
          happen? How did it feel?”), communicating what you understand (e.g.,
          “So you mean…”), and giving feedback on observations (e.g., “I noticed
          your eyes watering when talking about your father.”).
        </p>
        <p className="text-gray-700 mb-4">
          Active listening is not limited to verbal messages. It is also a
          process that includes nonverbal messages and interactions (body
          language, eye contact, etc.). Passive listening is when there is
          little or no contribution from the listener.
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">
          Points to Consider for Active Listening
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Relax the patient.</li>
          <li>Exhibit and maintain a ready-to-listen body language.</li>
          <li>Remove distracting stimuli.</li>
          <li>
            Create a suitable environment for communication, addressing noise,
            heat, and light.
          </li>
          <li>Encourage the patient to speak.</li>
          <li>Be patient and ask questions.</li>
          <li>
            Give the patient the opportunity to make sense of the topic being
            discussed.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Barriers to Active Listening
        </h2>
        <p className="text-gray-700 mb-4">
          Barriers to effective listening may include inability to get rid of
          prejudices, language differences, environmental factors, tiredness,
          and physiological conditions such as emotions (fear, anxiety, etc.) or
          pain that interfere with focus.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Asking Questions</h2>
        <p className="text-gray-700 mb-4">
          The nurse's ability to ask the right questions is essential for making
          a correct diagnosis and accurately expressing the patient's wishes and
          expectations. If the nurse finds herself constantly asking questions,
          she may not be able to ask effective questions, or the patient,
          overwhelmed by the barrage of questions, may not want to answer. In
          this case, it would be appropriate for the nurse to take a break from
          asking questions for a while.
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">
          Open-ended vs. Closed-ended Questions
        </h3>
        <p className="text-gray-700 mb-4">
          Open-ended questions aim to clarify and understand the person's point
          of view, feelings, thoughts, and experiences about a particular
          subject, giving the patient more opportunity to express themselves.
          Closed-ended questions can be used to obtain specific information.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Open-ended: "Can you tell me about your experience?"</li>
          <li>Closed-ended: "Do you smoke?"</li>
          <li>
            Example: "Did you feel anger when your mother said these things?"
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Encouraging Communication
        </h2>
        <p className="text-gray-700 mb-4">
          Encouraging the patient to speak is especially helpful in the initial
          phase of the relationship. Verbal or body language can direct the
          individual to continue speaking. Discovering this can encourage the
          patient to get to know themselves and their problems in depth.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Reflection and Empathy
        </h2>
        <p className="text-gray-700 mb-4">
          Reflection is used to clarify what the patient is saying and to
          determine whether there is congruence between what the nurse
          understands and what the client wants to say. The nurse also conveys
          to the patient that she listens and understands what is being said.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Providing Information
        </h2>
        <p className="text-gray-700 mb-4">
          Especially when newly admitted to the clinic, clients need information
          about the hospital environment and what to do for them. Giving this
          information is useful and necessary as it enables the individual to
          adapt to the environment.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Feedback and Summarization
        </h2>
        <p className="text-gray-700 mb-4">
          Feedback is about the behavior of the patient, not the personality.
          When giving feedback, highlight the behavior you observe, not the
          meaning or interpretation you infer from what you observe.
          Summarization emphasizes the main ideas discussed during the
          interview, helping the client gather their thoughts and learn the
          facts they have just grasped.
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">
          Key Aspects of Feedback
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Give feedback at the appropriate time and place.</li>
          <li>
            When giving negative feedback, identify positive aspects first.
          </li>
          <li>Use “I Language” to express feelings about the behavior.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Confrontation and Refocusing
        </h2>
        <p className="text-gray-700 mb-4">
          Confrontation invites reflection and discussion to examine the
          contrast between what the person says and what they do. Refocusing
          involves asking questions that will help the client concentrate on
          issues that are important to them.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Silence as a Tool</h2>
        <p className="text-gray-700 mb-4">
          When silence is used appropriately, it allows the patient to express
          their feelings and thoughts, think, and verbalize what they feel.
          Emotional silence is allowed when discussing intense emotions, while
          resistant silence can be permitted when the patient does not want to
          talk about a certain subject.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Therapeutic Self-Opening
        </h2>
        <p className="text-gray-700 mb-4">
          Therapeutic self-opening involves the nurse providing feedback about
          how the patient's feelings and thoughts affect her. This supportive
          feedback allows the patient to gain insight into their behavior and
          situations.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Summarizing</h2>
        <p className="text-gray-700 mb-4">
          Summarizing is a technique used at the end or beginning of therapeutic
          communication to remind what was said in the previous interview or
          when moving from one topic to another. By summarizing, the client
          remembers the discussed issues and sees how the nurse synthesized the
          session.
        </p>
      </div>
    ),
   
  },
  {
    id: 11,
    title: "Personality Development, Eight Stages of Human Development",
    content: (
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 underline">PERSONALITY DEVELOPMENT</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        Personality develops by influencing the individualization-socialization processes, which are related to maturation and learning, which are related to evolutionary development in humans. 
      </p>
    
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Maturation and Individualization-Socialization</h2>
      <p className="text-lg text-gray-700 mb-4">
        Maturation is the development of innately undeveloped abilities in the organism without learning. For example, human babies start walking when they are 12-14 months old on average, whether they have had walking training or not.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Individualization-socialization is the formation of individual behaviors and social behavior patterns through learning and life experiences. For instance, a child learns to speak with a gradually increasing vocabulary at 12-15 months.
      </p>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Developmental Aspects</h2>
      <p className="text-lg text-gray-700 mb-4">
        It is essential to evaluate the sensori-motor, cognitive, and emotional aspects of personality development, including adaptation and defense mechanisms as a biopsychosocial whole.
      </p>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Developmental Periods According to Erikson</h2>
      <p className="text-lg text-gray-700 mb-4">
        Erik Erikson extended Freud's theory and defined eight stages of psychosocial development. Each stage involves a crisis that must be overcome to gain a healthy personality.
      </p>
    
      <h3 className="text-2xl font-semibold text-gray-800 mt-4">Erikson's Stages of Development</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><strong>Stage 1:</strong> Trust vs. Mistrust (Infancy: birth to 18 months)</li>
        <li><strong>Stage 2:</strong> Autonomy vs. Shame and Doubt (Toddler: 18 months to 3 years)</li>
        <li><strong>Stage 3:</strong> Initiative vs. Guilt (Preschool: 3 to 5 years)</li>
        <li><strong>Stage 4:</strong> Industry vs. Inferiority (Middle school: 6 to 11 years)</li>
        <li><strong>Stage 5:</strong> Identity vs. Confusion (Teen: 12 to 18 years)</li>
        <li><strong>Stage 6:</strong> Intimacy vs. Isolation (Young adult: 18 to 40 years)</li>
        <li><strong>Stage 7:</strong> Generativity vs. Stagnation (Middle age: 40 to 65 years)</li>
        <li><strong>Stage 8:</strong> Integrity vs. Despair (Older adulthood: 65 years to death)</li>
      </ul>
    
      <h3 className="text-2xl font-semibold text-gray-800 mt-4">Stage Details</h3>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 1:</strong> Trust vs. Mistrust (Infancy): Babies acquire feelings about whether they can trust the world around them.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 2:</strong> Autonomy vs. Shame and Doubt (Toddler): Children gain independence and self-control, encouraged by their caregivers.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 3:</strong> Initiative vs. Guilt (Preschool): Children explore their environment and assert themselves; excessive criticism can lead to guilt.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 4:</strong> Industry vs. Inferiority (Middle School): Children strive for success and recognition, leading to a sense of industry or feelings of inferiority.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 5:</strong> Identity vs. Confusion (Teen): Adolescents seek to establish their identities amid rapid changes.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 6:</strong> Intimacy vs. Isolation (Young Adult): Young adults form deep relationships; those who struggle may feel isolated.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 7:</strong> Generativity vs. Stagnation (Middle Age): Adults seek to contribute to society and guide the next generation.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Stage 8:</strong> Integrity vs. Despair (Older Adulthood): Reflection on life leads to a sense of fulfillment or despair based on unresolved conflicts.
      </p>
    
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Conclusion</h2>
      <p className="text-lg text-gray-700 mb-4">
        The development of personality is influenced by many factors including family, education, and social experiences. To create a happy society, it's vital to support individuals in meeting their basic needs and resolving conflicts throughout their development.
      </p>
    </div>
    
    ),
    
  },
  {
    id: 12,
    title: "Schizophrenia",
    content: (
      <div class="max-w-7xl mx-auto px-6 py-8 bg-gray-50 text-gray-800">
      <h1 class="text-3xl font-semibold text-center mb-6">Schizophrenia Spectrum and Other Psychotic Disorders</h1>
      
      <p class="text-lg leading-relaxed mb-6">
          The syndrome of symptoms associated with schizophrenia and other psychotic disorders reveals alterations in content and organization of thoughts, perception of sensory input, affect or emotional tone, sense of identity, psychomotor behavior, and ability to establish satisfactory interpersonal relationships.
      </p>
      
      <p class="text-lg leading-relaxed mb-6">
          The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) identifies a spectrum of psychotic disorders that are organized to reflect a gradient of psychopathology from least to most severe. Degree of severity is determined by the level, number, and duration of psychotic signs and symptoms.
      </p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-4 text-blue-600">DSM-5 Classification</h2>
      <ul class="list-disc pl-8 space-y-2 mb-6">
          <li>Delusional Disorder</li>
          <li>Brief Psychotic Disorder</li>
          <li>Schizophreniform Disorder</li>
          <li>Schizophrenia</li>
          <li>Schizoaffective Disorder</li>
          <li>Substance/Medication-Induced Psychotic Disorder</li>
          <li>Psychotic Disorder Due to Another Medical Condition</li>
          <li>Catatonia Associated with Another Mental Disorder (Catatonia Specifier)</li>
          <li>Catatonic Disorder Due to Another Medical Condition</li>
      </ul>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Delusional Disorder</h3>
      <p class="text-lg leading-relaxed mb-4">
          Delusional disorder is characterized by the presence of delusions that have been experienced by the individual for at least 1 month. Hallucinatory activity is not prominent, and behavior is not bizarre. The subtype of delusional disorder is based on the predominant delusional theme.
      </p>
      <p class="text-lg leading-relaxed mb-6">
          The DSM-5 states that a specifier may be added to denote if the delusions are considered bizarre, i.e., if the thought is “clearly implausible, not understandable, and not derived from ordinary life experiences.”
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Brief Psychotic Disorder</h3>
      <p class="text-lg leading-relaxed mb-4">
          This disorder is identified by the sudden onset of psychotic symptoms that may or may not be preceded by a severe psychosocial stressor. These symptoms last at least 1 day but less than 1 month, and there is an eventual full return to the premorbid level of functioning. The individual experiences emotional turmoil or overwhelming perplexity or confusion.
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Schizophreniform Disorder</h3>
      <p class="text-lg leading-relaxed mb-6">
          The client exhibits the symptoms of schizophrenia but for less than the 6 months necessary to meet the diagnostic criteria for schizophrenia. Social or occupational functioning may or may not be impaired.
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Substance/Medication-Induced Psychotic Disorder</h3>
      <p class="text-lg leading-relaxed mb-4">
          The prominent hallucinations and delusions associated with this disorder are found to be directly attributable to substance intoxication or withdrawal or after exposure to a medication or toxin. The medical history, physical examination, or laboratory findings provide evidence that the appearance of the symptoms occurred in association with a substance intoxication or withdrawal or exposure to a medication or toxin.
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Psychotic Disorder Due to Another Medical Condition</h3>
      <p class="text-lg leading-relaxed mb-4">
          The essential features of this disorder are prominent hallucinations and delusions that can be directly attributed to another medical condition. The diagnosis is not made if the symptoms occur during the course of a delirium.
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Catatonia Associated With Another Mental Disorder</h3>
      <p class="text-lg leading-relaxed mb-6">
          The characteristics of catatonia are identified by symptoms such as stupor, waxy flexibility, mutism, negativism, posturing, stereotypical, repetitive movements, agitation, grimacing, echolalia (mimicking another’s speech), and echopraxia (mimicking another’s movements).
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Schizophrenia</h3>
      <p class="text-lg leading-relaxed mb-4">
          Schizophrenia is a serious and often persistent mental illness characterized by disturbances in reality orientation, thinking, and social involvement. It cannot be defined as a single illness; rather, schizophrenia is thought of as a syndrome or as a disease process with many different varieties and symptoms, much like the varieties of cancer.
      </p>
      <p class="text-lg leading-relaxed mb-6">
          The word schizophrenia originally referred to a “splitting off” of thoughts from emotions. However, the word has become confused with “split personality” or “multiple personality.” No laboratory test for schizophrenia currently exists. The average life expectancy of people with the disorder is 10 to 12 years less than those without, due to increased physical health problems and a higher suicide rate (about 5%).
      </p>
  
      <h3 class="text-xl font-medium mt-6 mb-4 text-green-600">Predisposing Factors</h3>
      <h4 class="text-lg font-semibold text-blue-600">Biologic Theories</h4>
      <p class="text-lg leading-relaxed mb-4">
          The biologic theories of schizophrenia focus on genetic factors, neuroanatomic and neurochemical factors (structure and function of the brain), and immunovirology (the body’s response to exposure to a virus).
      </p>
      <p class="text-lg leading-relaxed mb-4">
          Endocrine factors: Changes in prolactin, melatonin, and thyroid function have been found in schizophrenia. Brain structural changes: CT, MRI, and postmortem studies have shown decreased volume and density in limbic and frontal areas in schizophrenic patients. Other medical imaging studies have also revealed various physical and physiological anomalies in some patients. Other research has focused on mistiming of neural responses to stimuli in the brain.
      </p>
  
      <h4 class="text-lg font-semibold text-blue-600">Genetics</h4>
      <p class="text-lg leading-relaxed mb-4">
          Most genetic studies have focused on immediate families (i.e., parents, siblings, and offspring) to examine whether schizophrenia is genetically transmitted or inherited.
      </p>
  
      <p class="text-lg leading-relaxed mb-4">
          Family studies: The most important studies have centered on twins; these findings have demonstrated that identical twins have a 50% risk for schizophrenia; that is, if one twin has schizophrenia, the other has a 50% chance of developing it as well. Fraternal twins have only a 15% risk. This finding indicates that schizophrenia is at least partially inherited.
      </p>
  
      <h4 class="text-lg font-semibold text-blue-600">Psychological Factors</h4>
      <p class="text-lg leading-relaxed mb-4">
          Personality traits: Personality characteristics of an individual, such as withdrawn, extreme quietness and shyness, highly dependent and obedient, having temper tantrums, and always looking sad and miserable, are a recipe for schizophrenia.
      </p>
  
      <h4 class="text-lg font-semibold text-blue-600">Environmental/Social Factors</h4>
      <p class="text-lg leading-relaxed mb-4">
          Recreational drug use: Although about half of all patients with schizophrenia use drugs or alcohol, a clear causal connection between drug use and schizophrenia has been difficult to prove.
      </p>
      <p class="text-lg leading-relaxed mb-4">
          Social: Living in an urban environment has been consistently found to be a risk factor for schizophrenia. Social disadvantages found to be a risk factor include:
          <ul class="list-inside list-disc">
              <li>poverty</li>
              <li>migration related to social adversity</li>
              <li>racial discrimination</li>
              <li>family dysfunction</li>
              <li>unemployment</li>
              <li>poor housing conditions</li>
          </ul>
      </p>

      <div class="max-w-7xl mx-auto px-6 py-8 bg-white text-gray-800">
    <h1 class="text-3xl font-semibold text-center mb-6 text-blue-600">Prognostic Factors in Schizophrenia</h1>

    <p class="text-lg leading-relaxed mb-6">
        Prognosis refers to the likelihood of recovery from a disease. Several factors play a role in determining a favorable prognosis for individuals with schizophrenia:
    </p>

    <ul class="list-inside list-disc pl-6 space-y-4">
        <li>
            <strong class="font-semibold text-green-600">Age:</strong> Older patients tend to have a more favorable prognosis.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Duration of Illness:</strong> A shorter duration before treatment leads to a better outcome.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Rapidity of Symptom Development:</strong> Faster onset of symptoms typically results in a quicker response to treatment.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Pre-illness Relationships:</strong> Patients with close friendships and multiple relationships before illness tend to have a better prognosis.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Life Stress Prior to Onset:</strong> Episodes triggered by major life stressors often respond more quickly to treatment.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Marital History:</strong> Those with stable and supportive marital relationships tend to fare better.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Educational History:</strong> A higher level of education helps patients adapt and manage the post-illness process more effectively.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Occupational History:</strong> Patients with stable jobs or businesses before illness usually respond better to treatment.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Family Attitude:</strong> Supportive, non-hostile family behavior is key to recovery. Over-attention or hostility can undermine confidence.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Social Support:</strong> A strong support system from family and friends can significantly improve outcomes.
        </li>
        <li>
            <strong class="font-semibold text-green-600">Organic Brain Damage:</strong> The presence of conditions like mental retardation, epilepsy, or head injuries can hinder recovery.
        </li>
    </ul>
</div>

<div class="max-w-7xl mx-auto px-6 py-8 bg-white text-gray-800">
    <h1 class="text-3xl font-semibold text-center mb-6 text-blue-600">Types of Symptoms in Schizophrenia</h1>

    <p class="text-lg leading-relaxed mb-6">
        Schizophrenia is associated with two main categories of symptoms: <strong class="font-semibold text-green-600">Positive</strong> and <strong class="font-semibold text-green-600">Negative</strong>.
    </p>

    <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Positive Symptoms</h2>
            <ul class="list-inside list-disc pl-6 space-y-4">
                <li>Hallucinations</li>
                <li>Delusions</li>
                <li>Bizarre Behavior</li>
                <li>Paranoia</li>
            </ul>
            <p class="mt-4 text-lg leading-relaxed">
                Positive symptoms are things that are present in individuals with schizophrenia but not in most healthy individuals. They include delusions, hallucinations (especially auditory), thought disorders, and disorganized behavior.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Negative Symptoms</h2>
            <ul class="list-inside list-disc pl-6 space-y-4">
                <li>Apathy</li>
                <li>Flat Affect</li>
                <li>Alogia (Poverty of Speech)</li>
                <li>Avolition (Lack of Motivation)</li>
                <li>Anhedonia</li>
                <li>Poor Social Functioning</li>
            </ul>
            <p class="mt-4 text-lg leading-relaxed">
                Negative symptoms reflect the loss or absence of normal traits or abilities, such as emotional expression, motivation, or social functioning. These symptoms include apathy, flat affect, poverty of speech, and social isolation.
            </p>
        </div>
    </div>

    <h2 class="text-2xl font-semibold text-blue-500 mb-4">Detailed Breakdown of Symptoms</h2>
    <div class="space-y-6">
        <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-blue-600">Positive Symptoms</h3>
            <p class="text-lg leading-relaxed">
                Positive symptoms involve experiences and behaviors not typically found in healthy individuals, such as hallucinations and delusions.
            </p>
        </div>

        <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-blue-600">Negative Symptoms</h3>
            <p class="text-lg leading-relaxed">
                Negative symptoms reflect the absence of normal functioning and include apathy, flat affect, and difficulty initiating goal-directed behavior.
            </p>
        </div>

        <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-blue-600">Impairment in Social Functioning</h3>
            <p class="text-lg leading-relaxed">
                Symptoms like social isolation, emotional detachment, and inappropriate behaviors can result in severe challenges in social interactions.
            </p>
        </div>

        <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-blue-600">Psychomotor Symptoms</h3>
            <p class="text-lg leading-relaxed">
                Behaviors such as pacing, rocking, posturing, and waxy flexibility are common psychomotor manifestations observed in schizophrenia.
            </p>
        </div>

        <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-blue-600">Anhedonia</h3>
            <p class="text-lg leading-relaxed">
                Anhedonia refers to the inability to experience pleasure, which can lead to feelings of deep distress and an increased risk of suicide.
            </p>
        </div>

        <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-blue-600">Regression</h3>
            <p class="text-lg leading-relaxed">
                Regression involves retreating to an earlier stage of development as a coping mechanism, often resulting in anxiety-reducing behaviors.
            </p>
        </div>
    </div>
</div>

<div class="max-w-7xl mx-auto px-6 py-8 bg-white text-gray-800">
    <h1 class="text-3xl font-semibold text-center mb-6 text-blue-600">Treatment of Schizophrenia</h1>
    
    <section class="space-y-8">
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Psychopharmacology</h2>
        <p class="text-lg leading-relaxed mb-4">
            The primary medical treatment for schizophrenia is psychopharmacology. Antipsychotic medications, also known as neuroleptics, are used primarily to manage symptoms but do not cure the disease. These medications are classified into two categories:
        </p>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-semibold text-blue-600">Conventional Antipsychotics</h3>
                <p class="text-lg leading-relaxed">
                    These target positive symptoms like delusions, hallucinations, and disturbed thinking. However, they have no effect on negative symptoms.
                </p>
            </div>
            <div>
                <h3 class="text-xl font-semibold text-blue-600">Atypical Antipsychotics</h3>
                <p class="text-lg leading-relaxed">
                    Atypical antipsychotics not only reduce positive symptoms but also alleviate some negative symptoms, including lack of motivation, social withdrawal, and anhedonia. They target both dopamine and serotonin receptors.
                </p>
            </div>
        </div>

        <h3 class="text-xl font-semibold text-blue-600 mt-6">Side Effects</h3>
        <p class="text-lg leading-relaxed mb-4">
            The side effects of antipsychotic medications can range from mild discomfort to severe conditions like movement disorders. Some of the common side effects include:
        </p>
        <div class="space-y-4">
            <ul class="list-inside list-disc pl-6">
                <li>Extrapyramidal side effects (EPS): dystonia, akathisia, parkinsonism</li>
                <li>Tardive dyskinesia, seizures, neuroleptic malignant syndrome (NMS)</li>
                <li>Nonneurologic side effects: weight gain, sedation, dry mouth, blurred vision, constipation</li>
                <li>Serious reactions like muscle spasms, including dystonic reactions, may occur early in treatment</li>
            </ul>
        </div>

        <h3 class="text-xl font-semibold text-blue-600 mt-6">Neuroleptic Malignant Syndrome (NMS)</h3>
        <p class="text-lg leading-relaxed">
            NMS is a potentially fatal condition caused by antipsychotic medications, characterized by muscle rigidity, high fever, and increased muscle enzymes. Discontinuation of the medication is the primary treatment.
        </p>
        
        <h3 class="text-xl font-semibold text-blue-600 mt-6">Other Medical Treatments</h3>
        <p class="text-lg leading-relaxed">
            Electroconvulsive therapy (ECT) may also be used in some cases, especially when medication does not work.
        </p>

        <h2 class="text-2xl font-semibold text-blue-500 mt-8 mb-4">Psychosocial Treatment</h2>
        <p class="text-lg leading-relaxed mb-4">
            Individual and group therapy can be supportive for clients, offering them opportunities for social contact, medication management, and dealing with family concerns. These therapies help clients engage with their community and family for better recovery.
        </p>

        <h2 class="text-2xl font-semibold text-blue-500 mt-8 mb-4">Nursing Diagnosis</h2>
        <p class="text-lg leading-relaxed mb-4">
            Nursing diagnoses guide the care for clients with schizophrenia, including issues like disturbed thought processes, sensory perception disturbances, risk of violence, and social isolation.
        </p>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-8 mb-4">Nursing Interventions</h2>
        <div class="space-y-6">
            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold text-blue-600">Promoting Client Safety</h3>
                <p class="text-lg leading-relaxed">
                    Safety is a top priority for both the client and the nurse. The nurse must approach the client in a nonthreatening manner, provide ample personal space, and be alert for signs of agitation. If necessary, medication, a quiet space, or seclusion may be used.
                </p>
            </div>

            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold text-blue-600">Establishing Trust</h3>
                <p class="text-lg leading-relaxed">
                    Building trust takes time. Nurses should listen actively, ask clarifying questions, and ensure clear communication to foster trust and understanding. Avoid pretending to understand or agreeing with unclear statements.
                </p>
            </div>

            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold text-blue-600">Interventions for Delusional Thoughts</h3>
                <p class="text-lg leading-relaxed">
                    Delusional thoughts can be addressed with distraction techniques like listening to music or engaging in positive thinking. Direct interventions should focus on helping the client minimize the impact of delusions.
                </p>
            </div>

            <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold text-blue-600">Interventions for Hallucinations</h3>
                <p class="text-lg leading-relaxed">
                    When dealing with hallucinations, the nurse should focus on what is real and help the client shift towards reality by asking clarifying questions and acknowledging the client’s experiences.
                </p>
            </div>
        </div>
    </section>
</div>


  </div>
  
    ),
    
  },
  {
    id: 13,
    title: "Writing Observation Report",
    content: (
   <>
 <div class="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
 
  <h1 class="text-4xl font-extrabold text-center mb-12 text-indigo-700">Patient Evaluation Form</h1>


  <section class="space-y-6">
    <div class="flex items-center space-x-4 p-4 bg-indigo-100 rounded-lg shadow-md">
      <span class="text-4xl text-indigo-600">🩺</span>
      <h2 class="text-2xl font-semibold text-indigo-800">Physical Findings</h2>
    </div>
    <ul class="list-disc pl-10 text-lg space-y-2">
      <li>Clothing and self-care features</li>
      <li>Eating characteristics</li>
      <li>Sleeping characteristics</li>
      <li>Motor behavior</li>
      <li>Facial expression and emotion</li>
    </ul>
  </section>


  <section class="space-y-6 mt-10">
    <div class="flex items-center space-x-4 p-4 bg-green-100 rounded-lg shadow-md">
      <span class="text-4xl text-green-600">🧠</span>
      <h2 class="text-2xl font-semibold text-green-800">Thought and Perception Features</h2>
    </div>
    <ul class="list-disc pl-10 text-lg space-y-2">
      <li>Speech and communication features</li>
      <li>Social behavioral characteristics and way of relating to the environment</li>
      <li>Relations with service staff, compliance with the rules and clinical activities</li>
      <li>Response to medication and treatment</li>
      <li>Orientation-consciousness and memory-related features</li>
    </ul>
  </section>


  <section class="space-y-6 mt-10">
    <div class="flex items-center space-x-4 p-4 bg-yellow-100 rounded-lg shadow-md">
      <span class="text-4xl text-yellow-600">⚖️</span>
      <h2 class="text-2xl font-semibold text-yellow-800">Decision Making / Judging / Learning Features</h2>
    </div>
    <ul class="list-disc pl-10 text-lg space-y-2">
      <li>Family processes and role performances</li>
      <li>Values and beliefs</li>
      <li>Features related to leave off</li>
      <li>Relations with visitors</li>
    </ul>
  </section>


  <section class="space-y-6 mt-10">
    <div class="flex items-center space-x-4 p-4 bg-purple-100 rounded-lg shadow-md">
      <span class="text-4xl text-purple-600">🖊️</span>
      <h2 class="text-2xl font-semibold text-purple-800">Writing Reports</h2>
    </div>
    <ul class="list-disc pl-10 text-lg space-y-2">
      <li>Writing with clear, smooth, legible ink pen, no deletion or scraping</li>
      <li>Specifying date and time</li>
      <li>Signing</li>
    </ul>
  </section>

  
  <section class="space-y-6 mt-10">
    <div class="flex items-center space-x-4 p-4 bg-red-100 rounded-lg shadow-md">
      <span class="text-4xl text-red-600">📅</span>
      <h2 class="text-2xl font-semibold text-red-800">Recording Observations</h2>
    </div>
    <ul class="list-disc pl-10 text-lg space-y-2">
      <li>Writing observations in order of time</li>
      <li>Using clear and simple language</li>
      <li>Not using commented expressions, being objective</li>
      <li>Not using general statements/judgments/medical terms</li>
      <li>Recording unusual events (place, time, person, intervention, medical treatment, nursing care)</li>
      <li>Ensuring the continuity of the records</li>
    </ul>
  </section>


  <div class="text-center mt-12 p-4 bg-gray-100 rounded-lg">
    <p class="text-lg font-semibold text-gray-800">Note: Always maintain confidentiality and accuracy when documenting observations.</p>
  </div>
</div>


   </>
  
    ),
    
  },
  {
    id: 14,
    title: "ASSESSMENT AND RISK MANAGEMENT IN PSYCHIATRY CLINICS",
    content: (
   <>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
  <h2 class="text-2xl font-semibold text-blue-800">🛡️ Safety in Mental Health Services</h2>
  <p class="text-gray-600">
    Safety is central to the provision of quality mental health services. However, adverse events do occur, sometimes with tragic personal consequences. Protecting patients and others from harm is a key priority, and risk management is an essential component of providing such protection.
  </p>

  <section class="bg-gray-50 p-4 rounded-md space-y-4">
    <h3 class="text-xl font-medium text-blue-700">🏥 How should psychiatry clinics be?</h3>
    <p class="text-gray-600">Different situations lead to different results, environments, and scenarios in psychiatric care. Below are some common factors involved in psychiatric clinics:</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="space-y-2">
        <h4 class="font-medium text-blue-600">🌍 Different Environments</h4>
        <ul class="list-disc pl-5 text-gray-600">
          <li>Acute</li>
          <li>Rehabilitation</li>
          <li>Chronic</li>
          <li>Child and Adolescents</li>
          <li>Substance Abuse</li>
        </ul>
      </div>

      <div class="space-y-2">
        <h4 class="font-medium text-blue-600">🛋️ Different Scenarios</h4>
        <ul class="list-disc pl-5 text-gray-600">
          <li>Ward Visit</li>
          <li>Dining Room</li>
          <li>Garden</li>
          <li>Group Sessions</li>
          <li>Recruitment Sessions</li>
          <li>One-on-One Sessions</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <h3 class="text-xl font-medium text-blue-700">⚖️ Understanding Risk in Psychiatry Clinics</h3>
    <p class="text-gray-600">
      Risk is the probability that an adverse event or outcome will occur. Risk factors are certain characteristics of diseases, behaviors, or conditions that, alone or in combination, lead to an increased risk. Risk assessment is the probability of predicting adverse events occurring under certain conditions during a specified period of time.
    </p>
  </section>

  <section class="bg-gray-50 p-4 rounded-md">
    <h3 class="text-xl font-medium text-blue-700">🚨 What are the possible risks in psychiatry clinics?</h3>
    <ul class="list-inside list-disc space-y-2 text-gray-600">
      <li>💔 Risk of self-harm</li>
      <li>⚔️ Risk of harming someone else</li>
      <li>🔒 Compulsory measures to calm down violent patients</li>
      <li>🩹 Risks of injury (to patients, staff, and the public)</li>
      <li>💬 Risks to the service user experience</li>
      <li>📋 Risks to compliance with standards</li>
      <li>📉 Risks to objectives and projects</li>
      <li>📊 Risks to business continuity</li>
      <li>🕵️‍♂️ Risks to reputation</li>
      <li>💸 Risk to finances</li>
      <li>🌍 Risk to the environment</li>
    </ul>
  </section>

  <div class="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </div>
</div>

<div class="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8">
 
  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🛡️ Managing Risks in Mental Health Care</h2>
    <p class="text-lg text-gray-700">
      Effective risk management is crucial for the safety and well-being of individuals in mental health care settings. Below are key risk areas to consider when managing people with mental health issues.
    </p>
  </div>

  
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🔎 Key Areas of Risk in Mental Health</h3>
    
   
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🧠 Vulnerability</h4>
      <p class="text-gray-600">
        The service user can be at risk of harm due to personal or external factors (e.g., naiveté, low insight, family/social pressures, poverty, homelessness). 
        Awareness of sexual vulnerability and the risk of both the patient’s own behavior and advances of others is critical.
      </p>
    </div>
    
   
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">💔 Self-Harm / Suicide Risk</h4>
      <p class="text-gray-600">
        The service user may be at risk of self-harm, intentional injury, or killing oneself through behaviors destructive to their own health or safety.
      </p>
    </div>

   
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">⚠️ Mental Instability</h4>
      <p class="text-gray-600">
        The service user may be a risk to themselves or others due to fluctuating or unpredictable mental health, particularly in relation to command hallucinations or other disturbed phenomena.
      </p>
    </div>

   
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">💥 Risk to Others</h4>
      <p class="text-gray-600">
        The service user may pose a risk of harm to others, either intentionally or unintentionally, or may encourage or involve others in causing harm or injury.
      </p>
    </div>
  </section>

 
  <section class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
    <h3 class="text-2xl font-semibold text-blue-800">⚖️ Risk Factors in Mental Health</h3>
    <p class="text-gray-600">
      The following images illustrate the risk factors for vulnerability, self-harm, and mental instability:
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
      <div class="text-center">
        <img class="max-w-full rounded-xl shadow-md" src={riskFactor} alt="Risk Factor for Vulnerability" />
        <p class="mt-2 text-gray-700">Risk Factors for Vulnerability</p>
      </div>

    
      <div class="text-center">
        <img class="max-w-full rounded-xl shadow-md" src={riskFactor2} alt="Risk Factor for Self-Harm" />
        <p class="mt-2 text-gray-700">Risk Factors for Self-Harm</p>
      </div>

     
      <div class="text-center">
        <img class="max-w-full rounded-xl shadow-md" src={levelOfrisk} alt="Level of Risk" />
        <p class="mt-2 text-gray-700">Level of Risk</p>
      </div>
    </div>
  </section>


  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🧑‍⚕️ Clinical Risk Management in Mental Health</h3>
    <p class="text-gray-600">
      Clinical Risk Management (CRM) in mental health is critical to ensuring the safety of patients and staff. While CRM is considered less advanced in mental health than in other healthcare sectors, increasing awareness is essential.
    </p>
    <div class="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🔑 Main CRM Concerns:</h4>
      <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li>💥 Violence and self-destructive behavior (protecting patients and staff)</li>
        <li>⚠️ Treatment and diagnostic errors, side effects of medication</li>
        <li>💊 Risks associated with mental illnesses (e.g., psychosis or depression)</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">📊 Clinical Risk Management Process</h3>
    <p class="text-gray-600">
      Risk management is a four-step process aimed at minimizing adverse events and providing safe, effective care:
    </p>
    <div class="text-center">
      <img class="max-w-full rounded-xl shadow-md" src={riskassess} alt="Risk Management Process" />
      <p class="mt-2 text-gray-700">Step 1: Identification of Risk</p>
    </div>

    <p class="text-gray-600">
      Safe assessment requires the accumulation of reliable information and consideration of various risk factors. It involves multiple assessment methods and information sources, including family members, friends, GPs, and agencies.
    </p>
    <p class="text-gray-600">
      Risk assessment is a continuous process that informs decision-making and supports systematic evaluation.
    </p>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">📝 Four Key Parameters of Risk:</h4>
      <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li>📖 History</li>
        <li>🩺 Clinical</li>
        <li>🔄 Disposition</li>
        <li>🌍 Context</li>
      </ul>
    </div>
  </section>
</div>

<div class="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8">

  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🛡️ Risk Management in Mental Health Care</h2>
    <p class="text-lg text-gray-700">
      Effective risk management is essential for providing safe and effective care. Below, we outline the key steps in managing risk within mental health settings.
    </p>
  </div>

  
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🔍 Types of Risks</h3>
    
    
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">💔 Putting Yourself at Risk</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Self-harm</li>
        <li>Suicide</li>
        <li>Self-neglect</li>
        <li>Substance or alcohol use</li>
        <li>Medical conditions</li>
      </ul>
    </div>

    
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">💥 Putting Others at Risk</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Harassment</li>
        <li>Violence</li>
        <li>Anger</li>
        <li>Inner distress</li>
      </ul>
    </div>

    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">⚠️ Being Put at Risk by Others</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Physical harm</li>
        <li>Sexual harm</li>
        <li>Emotional harm</li>
        <li>Social harm</li>
        <li>Economic harm</li>
      </ul>
    </div>
  </section>


  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🔑 The Risk Management Process</h3>

  
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h4 class="text-xl font-medium text-blue-700">🔍 Step 2: Analysis of Risk</h4>
      <p class="text-gray-600">
        Risk analysis is the systematic process of understanding and determining the level of risk. Risk management emphasizes prevention rather than prediction.
        Consider all risk factors and the conditions under which they may increase or decrease. 
        Multiple sources of information, including current and historical presentations, collateral reports (e.g., from family, partners, or GPs), and contextual features (e.g., intoxication or addiction), should be included in the analysis.
      </p>
      <p class="text-gray-600">
        Don't forget to consider protective factors that can mitigate risk, both historical and current.
      </p>
    </div>

  
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h4 class="text-xl font-medium text-blue-700">⚖️ Step 3: Evaluation of Risk</h4>
      <p class="text-gray-600">
        Evaluation of risk includes examining the nature, severity, imminence, and likelihood of risk. All risks should be identified, analyzed, and evaluated to determine the appropriate risk management approach.
        This evaluation should be carried out collaboratively with service users, carers, professionals, and other stakeholders.
      </p>
      <p class="text-gray-600">
        It is important to balance risk, need, and recovery while considering the person’s overall needs and balancing individual autonomy with public safety and professional accountability.
        The risk evaluation should also factor in specific influences that might increase or decrease risk, such as alcohol addiction or bereavement.
      </p>
      <p class="text-gray-600">
        The risk evaluation will guide the management plan, ensuring that decisions made are rational and evidence-based.
      </p>
    </div>

   
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h4 class="text-xl font-medium text-blue-700">🛠️ Step 4: Treating the Risks – Clinical Risk Management Plan</h4>
      <p class="text-gray-600">
        Based on the information gathered in Steps 1-3, a clinical risk management plan is developed by the multidisciplinary team in partnership with the service user.
        This plan informs ongoing treatment, care, and management, ensuring continuous review and adjustments as circumstances change.
      </p>
    </div>

    
    <div class="space-y-4 text-center">
      <h4 class="text-xl font-medium text-blue-700">🛠️ Tools for Risk Assessment and Management</h4>
      <p class="text-gray-600">Risk assessment tools play a vital role in identifying and managing risks. These tools should be used to assist in the decision-making process.</p>
      <div class="flex justify-center">
        <img class="max-w-full rounded-xl shadow-md" src={assessTools} alt="Risk Assessment Tools" />
      </div>
    </div>
  </section>
</div>

<div class="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8">
  
  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🏥 Ideal Clinical Environment</h2>
    <p class="text-lg text-gray-700">
      Creating an ideal clinical environment is essential to ensure the safety and comfort of both patients and staff. Below, we outline key factors to consider and areas of improvement for an optimal care setting.
    </p>
  </div>


  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🔑 Key Factors in the Clinical Environment</h3>

  
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🏢 Clinical Environment Considerations</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Security</li>
        <li>Noise level</li>
        <li>Room temperature</li>
        <li>External distractions</li>
        <li>Alternative exits</li>
        <li>Reaching the call source when needed</li>
      </ul>
    </div>

  
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">💡 How to Improve the Clinical Environment</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Better clinical environment design</li>
        <li>Sustainable patient safety measures</li>
        <li>Improved risk assessment procedures</li>
        <li>Enhanced teamwork and collaboration</li>
        <li>Non-custodial approach for handling patients</li>
        <li>Explaining ward policies and rules early</li>
      </ul>
    </div>

    
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🛏️ Treatment Room Setup</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Getting familiar with the treatment room layout</li>
        <li>Drug store location and organization</li>
        <li>Managing cold materials and temperature</li>
        <li>Ensuring sufficient materials (e.g., sharp edges, sinks, protective clothing)</li>
      </ul>
    </div>
  </section>

 
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🩺 Treatment Management Procedures</h3>

    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">👩‍⚕️ Treatment Process</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Introduce yourself and welcome the patient</li>
        <li>Check for the correct patient</li>
        <li>Offer a glass of water</li>
        <li>Confirm if the patient received the treatment</li>
        <li>Ensure the responsible nurse ends the procedure correctly</li>
        <li>Always have two nurses for treatment procedures</li>
      </ul>
    </div>

   
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">💊 Storing and Administering Medicine</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Adhere to drug storage guidelines and policies</li>
        <li>Always check if the required drug is available</li>
        <li>Provide small doses to prevent adverse effects (theoretical dose)</li>
        <li>Ensure there is a warehouse management table for drug storage</li>
      </ul>
    </div>
  </section>


  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">⚠️ Good Practice and Key Clinical Risks</h3>

    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🔑 Risk Management and Clinical Practice</h4>
      <p class="text-gray-600">
        Risk management is integral to good clinical practice. Effective communication, service user and staff safety, and ongoing training and support are key factors.
      </p>
    </div>


    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🗣️ Communication in Risk Management</h4>
      <p class="text-gray-600">
        Communication is central to effective risk management. Several aspects are vital:
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Listening to all concerned parties for a full, clear picture</li>
        <li>Asking appropriate questions to ensure comprehensive assessment</li>
        <li>Maintaining good written records for clarity and accountability</li>
        <li>Regularly reviewing and consulting records to track changes</li>
        <li>Establishing a strategy with clear action points and shared goals</li>
        <li>Ensuring confidentiality and sharing information on a ‘need-to-know’ basis</li>
        <li>Reviewing risk management strategies regularly as risks are dynamic</li>
      </ul>
    </div>

   
    <div class="space-y-3 bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 class="text-xl font-medium text-blue-700">🤝 Collaboration Across Agencies</h4>
      <p class="text-gray-600">
        When agencies work together effectively, the risks are better managed, and clinical outcomes improve. Standardized forms and safe systems should be implemented, with regular updates provided to ensure continuous improvement.
      </p>
    </div>
  </section>

 
  <div class="text-center">
    <img class="max-w-full rounded-xl shadow-md" src={adminright} alt="Admin Right Tools" />
  </div>
</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8">
 
  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">⚖️ Managing Risk in Mental Health Settings</h2>
    <p class="text-lg text-gray-700">
      Although risk can never be completely eliminated, it can be minimized with careful attention to documentation, communication, and active monitoring.
    </p>
  </div>

  
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">📝 Minimizing Risk Through Documentation</h3>

    
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">📚 Good Written Records</h4>
      <p class="text-gray-600">
        Proper documentation is crucial to managing risk. Without clear records, important information can be forgotten, missed, or ignored.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Ensure all information is recorded accurately and thoroughly.</li>
        <li>Consistently review and update records to monitor changes.</li>
        <li>Clear and detailed records help in forming a strategy for action and communication.</li>
      </ul>
    </div>

   
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🔄 Regular Review and Active Learning</h4>
      <p class="text-gray-600">
        Regular review of records and risk assessments ensures that no crucial detail is missed, reducing the risk of underestimating potential hazards.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Risk is dynamic and requires an active, changing process for management.</li>
        <li>Missing information can lead to underestimation of risk, which may prevent necessary actions from being taken.</li>
        <li>Develop a culture of regular review and collaboration among team members.</li>
      </ul>
    </div>

  
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🔐 Confidentiality and Communication</h4>
      <p class="text-gray-600">
        Clear communication and confidentiality are key when managing risk. Information sharing should only happen on a 'need-to-know' basis.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Maintain confidentiality at all times to protect both patients and staff.</li>
        <li>Ensure that information is shared effectively within the care team, respecting privacy guidelines.</li>
        <li>Develop a communication strategy that fosters trust and clarity among all stakeholders.</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🛡️ Service User and Staff Safety</h3>


    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">💥 Violence and Aggression in Mental Health</h4>
      <p class="text-gray-600">
        Aggression and violence in mental health services are complex issues that pose a risk to both patients and staff. Effective risk management is necessary to ensure a safe environment for all.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Aggressive behavior is a significant concern for both staff and service users.</li>
        <li>Service users can feel unsafe in inpatient settings, even though the aim is to provide a safe and therapeutic environment.</li>
        <li>Managing disruptive behavior requires balancing patient rights with the safety of all involved.</li>
      </ul>
    </div>

    
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">⚖️ Legal Obligations for Employers</h4>
      <p class="text-gray-600">
        Employers have a legal obligation to ensure the safety of employees and others within the mental health setting. This includes conducting risk assessments and implementing protective measures.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Organizations must take all reasonable steps to prevent accidents and injuries.</li>
        <li>Systematic risk assessments should inform the implementation of necessary control measures.</li>
        <li>Employers must continuously monitor and adjust risk management strategies as needed.</li>
      </ul>
    </div>

   
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🎯 High-Priority Risk Reduction Measures</h4>
      <p class="text-gray-600">
        Effective risk management in mental health settings requires attention to a range of high-priority areas. These should be addressed as soon as possible.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Risks associated with lone working and working alone</li>
        <li>Non-physical aggression and violence</li>
        <li>Physical aggression and violence</li>
        <li>Behavioral manifestations of medical conditions (e.g., cognitive impairments, substance use)</li>
        <li>Training and managing physical interventions</li>
        <li>Psychological impacts of aggression and violence</li>
      </ul>
    </div>

    
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🛠️ Organisational Response to Aggression and Violence</h4>
      <p class="text-gray-600">
        A cohesive, integrated approach is needed to address work-related aggression and violence effectively, considering both health and safety, and quality perspectives.
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>A contextual understanding of aggression in healthcare is essential.</li>
        <li>An integrated and balanced response is key to managing risks and improving outcomes.</li>
        <li>A partnership ethos of collaboration among staff and external agencies can significantly improve safety.</li>
      </ul>
    </div>
  </section>

</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">


  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">👩‍⚕️ Staff Training & Support in Mental Health Risk Management</h2>
    <p class="text-lg text-gray-700">
      Effective training and support for mental health staff are crucial to managing risk and ensuring patient safety in clinical settings.
    </p>
  </div>


  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">📚 Importance of Staff Training & Support</h3>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🛠️ Comprehensive Training</h4>
      <p class="text-gray-600">
        All staff involved in mental health services must receive ongoing training in risk management. This includes:
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Training on mental health risk management at multiple levels.</li>
        <li>Specialist training on aggression and violence prevention and management.</li>
        <li>Collaborative skills to work effectively with service users, carers, and other agencies.</li>
      </ul>
    </div>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🤝 Multidisciplinary Collaboration</h4>
      <p class="text-gray-600">
        The success of a risk management strategy hinges on the involvement of all staff members, whether directly or indirectly involved. This is best achieved through:
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Clear expectations for each staff role within a collaborative framework.</li>
        <li>Multidisciplinary team training to ensure a coordinated approach.</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🔑 Key Competencies for Effective Risk Management</h3>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">📋 Essential Competencies</h4>
      <ul class="list-decimal pl-8 text-gray-600 space-y-2">
        <li>Positive risk management should be an integral part of a well-constructed care plan for all mental health practitioners.</li>
        <li>Decisions should be based on research evidence, individual service user knowledge, and clinical judgment.</li>
        <li>Collaboration between service users and carers is key, fostering a trusting and transparent relationship.</li>
        <li>Risk management plans must be grounded in the service user's strengths, focusing on recovery.</li>
      </ul>
    </div>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">📊 Structured, Dynamic Approach</h4>
      <ul class="list-decimal pl-8 text-gray-600 space-y-2">
        <li>Risk management requires a flexible approach to prevent harm or minimize its impact.</li>
        <li>Risk assessments should be both general and specific, reducing potential harm effectively.</li>
        <li>Understanding mental health legislation is essential for appropriate risk management actions.</li>
      </ul>
    </div>
  </section>

 
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">📅 Developing a Comprehensive Risk Management Plan</h3>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">📝 Key Components of a Risk Management Plan</h4>
      <ul class="list-decimal pl-8 text-gray-600 space-y-2">
        <li>A clear summary of identified risks and situations in which they may occur.</li>
        <li>Action plans that outline what to do during a crisis, both for the practitioner and the service user.</li>
        <li>Regular assessments using structured clinical judgment (SPJ) tools to ensure thorough evaluation of risks.</li>
        <li>Plans should be developed by multidisciplinary teams in an open, democratic culture that encourages reflective practice.</li>
      </ul>
    </div>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">📅 Regular Review & Updating</h4>
      <p class="text-gray-600">
        A risk management plan is only as good as the time and effort put into communicating and updating it regularly. All involved parties should:
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Ensure all updates are communicated effectively to all stakeholders.</li>
        <li>Regularly review risk levels as they can change over time.</li>
        <li>Ensure that each service user receives a personalized and consistent approach to their care and risk management plan.</li>
      </ul>
    </div>
  </section>

 
  <section class="space-y-8">
    <h3 class="text-2xl font-semibold text-blue-800">🗓️ Ongoing Training and Best Practice Principles</h3>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🕒 Training Frequency</h4>
      <p class="text-gray-600">
        All staff involved in risk management should receive relevant training that is updated at least every three years. This ensures that staff:
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Stay up-to-date with the latest practices in risk management.</li>
        <li>Are equipped with the necessary knowledge to handle evolving challenges in mental health care.</li>
      </ul>
    </div>

    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
      <h4 class="text-xl font-medium text-blue-700">🌟 Best Practice Principles</h4>
      <p class="text-gray-600">
        Effective risk assessment and management is guided by several key principles:
      </p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Risk management must incorporate a holistic approach, considering historical, clinical, dispositional, and contextual parameters.</li>
        <li>Structured Professional Judgment (SPJ) instruments help ensure comprehensive assessments that prevent missing key areas of risk.</li>
        <li>Effective care requires mental health professionals to actively involve service users in the care and risk management process, fostering a sense of ownership and collaboration.</li>
      </ul>
    </div>
  </section>

  
  <div class="text-center space-y-4">
    <h3 class="text-2xl font-semibold text-blue-900">💡 Conclusion: Risk Can Be Minimized</h3>
    <p class="text-lg text-gray-700">
      While it is impossible to completely eliminate risk, following these structured processes and prioritizing communication, safety, and training will significantly minimize risk and improve outcomes for both staff and service users.
    </p>
  </div>

</div>

   </>
  
    ),
    
  },
  {
    id: 15,
    title: "INDIVIDUALS WITH PERSONALITY DISORDER AND THE NURSING APPROACH",
    content: (
   <>
   <div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">


<div class="text-center space-y-4">
  <h2 class="text-3xl font-extrabold text-blue-900">🧠 What is Personality?</h2>
  <p class="text-lg text-gray-700">
    Personality encompasses unique traits that define individuals and their behaviors, and is shaped by a blend of cognitive, emotional, and social factors.
  </p>
</div>


<section class="space-y-8">
  <h3 class="text-2xl font-semibold text-blue-800">🔍 Personality Overview</h3>

  <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
    <h4 class="text-xl font-medium text-blue-700">💡 What is Personality?</h4>
    <p class="text-gray-600">
      Derived from the Greek word *persona*, personality refers to an individual's unique traits and behaviors that distinguish them from others. It includes:
    </p>
    <ul class="list-disc pl-5 text-gray-600">
      <li>How an individual thinks, perceives, and interprets the world.</li>
      <li>The ability to show emotional reactions in varying situations.</li>
      <li>Effective coping mechanisms and defense responses to frustration or conflict.</li>
    </ul>
  </div>
</section>


<section class="space-y-8">
  <h3 class="text-2xl font-semibold text-blue-800">⚠️ Personality Disorders</h3>

  <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
    <h4 class="text-xl font-medium text-blue-700">🧩 Key Features of Personality Disorders</h4>
    <ul class="list-disc pl-5 text-gray-600">
      <li>Self-involved behaviors without flexibility for adaptation.</li>
      <li>Deviation from societal norms causing interpersonal conflict.</li>
      <li>Persistent patterns from childhood, leading to significant deterioration in work and social life.</li>
      <li>Unwillingness to change or recognize the need for change.</li>
      <li>Conflict with the environment, often attempting to change surroundings to fit personal needs.</li>
      <li>No significant cognitive or emotional impairment.</li>
    </ul>
  </div>
</section>


<section class="space-y-8">
  <h3 class="text-2xl font-semibold text-blue-800">📊 Prevalence and Gender Distribution</h3>

  <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
    <h4 class="text-xl font-medium text-blue-700">🔢 Frequency & Prevalence</h4>
    <p class="text-gray-600">
      Personality disorders are more common in:
    </p>
    <ul class="list-disc pl-5 text-gray-600">
      <li>Urbanized, industrialized societies with low socio-economic levels.</li>
      <li>Rapidly changing or unstable social environments.</li>
    </ul>
    <p class="text-gray-600">
      Prevalence studies indicate a rate of 10-20% in developed societies, with no significant gender difference.
    </p>
  </div>
</section>


<section class="space-y-8">
  <h3 class="text-2xl font-semibold text-blue-800">🧬 Etiology of Personality Disorders</h3>

  <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
    <h4 class="text-xl font-medium text-blue-700">🔬 Genetic and Biological Factors</h4>
    <p class="text-gray-600">
      Personality disorders may be influenced by genetic and biological factors:
    </p>
    <ul class="list-disc pl-5 text-gray-600">
      <li>**Antisocial Personality Disorder**: Often linked with alcohol use.</li>
      <li>**Histrionic Personality Disorder**: Tied to somatization disorders.</li>
      <li>**Schizotypal Personality Disorder**: Associated with low platelet levels and MAO activity.</li>
      <li>**Borderline & Antisocial Personality Disorders**: Connected to abnormal EEG slow-wave activity.</li>
    </ul>
  </div>

  <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
    <h4 class="text-xl font-medium text-blue-700">🧠 Psychoanalytic Theories</h4>
    <p class="text-gray-600">
      Renowned psychoanalysts like **Freud** and **Reich** have contributed theories explaining personality disorders:
    </p>
    <ul class="list-disc pl-5 text-gray-600">
      <li>**Freud** emphasized unconscious conflicts as a root cause.</li>
      <li>**Reich** focused on body armoring and emotional repression.</li>
    </ul>
  </div>
</section>


<section class="space-y-8">
  <h3 class="text-2xl font-semibold text-blue-800">🔚 Summary</h3>

  <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
    <p class="text-gray-600">
      Personality encompasses a person's unique cognitive, emotional, and behavioral patterns. When these traits become rigid and cause significant disruption in life, personality disorders may arise. These disorders are often resistant to change and can lead to conflict within the individual's environment.
    </p>
  </div>
</section>

</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">
  <h2 class="text-3xl font-extrabold text-blue-900 text-center">🧠 Types of Personality Disorders</h2>

  
  <section class="space-y-6">
    <h3 class="text-2xl font-semibold text-blue-800 text-center">📊 Personality Disorder Clusters</h3>

    <div class="overflow-x-auto bg-blue-50 p-6 rounded-xl shadow-md">
      <table class="min-w-full text-center table-auto">
        <thead>
          <tr class="bg-blue-200">
            <th class="px-6 py-4 text-xl font-medium text-blue-700">Cluster-A (Weird)</th>
            <th class="px-6 py-4 text-xl font-medium text-blue-700">Cluster-B (Dramatic)</th>
            <th class="px-6 py-4 text-xl font-medium text-blue-700">Cluster-C (Anxious)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-b bg-white">
            <td class="px-6 py-4 text-gray-700">Paranoid</td>
            <td class="px-6 py-4 text-gray-700">Antisocial</td>
            <td class="px-6 py-4 text-gray-700">Avoidant</td>
          </tr>
          <tr class="border-t border-b bg-gray-50">
            <td class="px-6 py-4 text-gray-700">Schizoid</td>
            <td class="px-6 py-4 text-gray-700">Borderline</td>
            <td class="px-6 py-4 text-gray-700">Dependent</td>
          </tr>
          <tr class="border-t border-b bg-white">
            <td class="px-6 py-4 text-gray-700">Schizotypal</td>
            <td class="px-6 py-4 text-gray-700">Histrionic</td>
            <td class="px-6 py-4 text-gray-700">Obsessive-Compulsive</td>
          </tr>
          <tr class="border-t border-b bg-gray-50">
            <td class="px-6 py-4 text-gray-700">—</td>
            <td class="px-6 py-4 text-gray-700">Narcissistic</td>
            <td class="px-6 py-4 text-gray-700">—</td>
          </tr>
        </tbody>
      </table>
    </div>

   
    <p class="text-gray-600 text-center">
      This table categorizes various types of personality disorders into three clusters based on their characteristics:
      <ul class="list-disc pl-6 space-y-1 text-gray-600">
        <li><strong>Cluster A</strong> (Weird): Disorders characterized by odd or eccentric behavior.</li>
        <li><strong>Cluster B</strong> (Dramatic): Disorders marked by emotional, erratic, or dramatic behaviors.</li>
        <li><strong>Cluster C</strong> (Anxious): Disorders characterized by anxiety, fear, and avoidance behaviors.</li>
      </ul>
    </p>
  </section>
</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">

  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🧠 Other Personality Disorders</h2>
    <p class="text-lg text-gray-700">
      Exploring various types of personality disorders beyond the core clusters.
    </p>
  </div>

  
  <section class="space-y-6">
    <h3 class="text-2xl font-semibold text-blue-800 text-center">⚡ Other Personality Disorders</h3>
    <ul class="list-disc pl-8 text-gray-700">
      <li><span class="font-medium text-blue-700">💭</span> Personality Changes Due to General Medical Condition</li>
      <li><span class="font-medium text-blue-700">🌀</span> Passive-aggressive Personality Disorder</li>
      <li><span class="font-medium text-blue-700">🔗</span> Sadomasochistic Personality Disorder</li>
      <li><span class="font-medium text-blue-700">❓</span> Personality Disorder Not Otherwise Specified</li>
    </ul>
  </section>

 
  <section class="space-y-6">
    <h3 class="text-2xl font-semibold text-blue-800 text-center">🔍 Cluster-A: Odd or Eccentric Disorders</h3>
    
   
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h4 class="text-xl font-medium text-blue-700">1. 🕵️‍♂️ Paranoid Personality Disorder</h4>
      <p class="text-gray-600">
        People with this disorder are often suspicious and distrustful of others. Key traits include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🧐 Suspicion that others may be harmful or deceiving.</li>
        <li>🤔 Difficulty trusting friends, colleagues, or loved ones.</li>
        <li>💬 Interpreting ordinary words or events as threatening.</li>
        <li>💢 Vindictiveness and a strong sense of injustice.</li>
        <li>💔 Suspicion toward spouses and loved ones, expecting harm.</li>
      </ul>
    </div>

    
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h4 class="text-xl font-medium text-blue-700">2. 🌫️ Schizoid Personality Disorder</h4>
      <p class="text-gray-600">
        Individuals with schizoid personality disorder tend to be emotionally detached and withdrawn. Traits include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🚶‍♂️ Lack of interest in intimate relationships.</li>
        <li>📚 Preference for solitary activities and hobbies.</li>
        <li>💔 Emotional coldness, detachment, and monotony.</li>
        <li>💭 Limited interest in sexual experiences or interactions.</li>
        <li>👥 Few to no close friends outside of 1-2 people.</li>
      </ul>
    </div>

   
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h4 class="text-xl font-medium text-blue-700">3. 🔮 Schizotypal Personality Disorder</h4>
      <p class="text-gray-600">
        Individuals with this disorder exhibit odd beliefs and behaviors. Key characteristics include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🔮 Bizarre beliefs and magical thinking (e.g., superstition, sixth sense).</li>
        <li>👀 Unusual perceptual experiences or bodily illusions.</li>
        <li>🗣️ Peculiar speech and mannerisms.</li>
        <li>🤯 Skepticism and paranoid thinking.</li>
        <li>😶 Inappropriate or limited affect (emotional expression).</li>
        <li>👤 Limited close friends or confidants.</li>
        <li>😨 Social anxiety, often linked to paranoid fears.</li>
      </ul>
    </div>
  </section>

</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">


  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🔥 Cluster-B: Dramatic, Emotional, or Erratic Disorders</h2>
    <p class="text-lg text-gray-700">
      Cluster B personality disorders are marked by dramatic, emotional, or unpredictable behaviors. Here's a look at each disorder in this category.
    </p>
  </div>

 
  <section class="space-y-6">
    <div class="bg-red-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-red-700">1. ⚡ Antisocial Personality Disorder</h3>
      <p class="text-gray-600">
        People with antisocial personality disorder often disregard the rights and feelings of others. They exhibit the following behaviors:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🚫 Difficulty adapting to social conditions.</li>
        <li>⚠️ Onset typically before the age of 15.</li>
        <li>👫 Disregard for the rights of others, with actions leading to arrests.</li>
        <li>💥 Impulsive behavior and aggression.</li>
        <li>🧨 Indifference to self and others' safety.</li>
        <li>⛔ Persistent irresponsibility with little remorse.</li>
        <li>❌ No signs of schizophrenia or manic episodes.</li>
        <li>🎯 Be over 18 years old for diagnosis.</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-6">
    <div class="bg-yellow-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-yellow-700">2. 💔 Borderline Personality Disorder</h3>
      <p class="text-gray-600">
        Individuals with borderline personality disorder often experience extreme emotional instability and interpersonal challenges. They may show:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>💢 Frantic efforts to avoid abandonment, real or imagined.</li>
        <li>🔄 Intense, unstable relationships that alternate between idealization and devaluation.</li>
        <li>🌀 Identity confusion or instability.</li>
        <li>⚠️ Higher risk of self-harm or suicidal behaviors.</li>
        <li>💥 Impulsivity in at least two areas, such as spending money, substance abuse, reckless driving, or binge eating.</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-6">
    <div class="bg-pink-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-pink-700">3. 🌟 Histrionic Personality Disorder</h3>
      <p class="text-gray-600">
        People with histrionic personality disorder seek constant attention and approval. Key traits include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🎤 Discomfort when not the center of attention.</li>
        <li>💃 Tendency to exhibit seductive behavior to attract attention.</li>
        <li>😱 Fast-changing, exaggerated emotions.</li>
        <li>💅 Attention-seeking behavior, often through physical appearance.</li>
        <li>🎭 Speaking in a vague, dramatic manner to impress others.</li>
        <li>💭 Easily influenced or prone to suggestion.</li>
        <li>💓 Expecting relationships to be more intimate than they are.</li>
      </ul>
    </div>
  </section>
  <section class="space-y-6">
    <div class="bg-indigo-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-indigo-700">4. 👑 Narcissistic Personality Disorder</h3>
      <p class="text-gray-600">
        Those with narcissistic personality disorder often have an inflated sense of self-importance. Their behaviors include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🤴 Belief in their superiority and importance.</li>
        <li>🌟 Exaggeration of achievements and abilities, expecting recognition without merit.</li>
        <li>💭 Fantasies of unlimited success, power, intelligence, or love.</li>
        <li>✨ Belief that they are special and should associate with other special people.</li>
        <li>💥 A strong desire to be admired and praised.</li>
        <li>💼 Entitlement and expectations of special treatment.</li>
      </ul>
    </div>
  </section>

</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">

 
  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🌿 Cluster-C: Anxious and Fearful Disorders</h2>
    <p class="text-lg text-gray-700">
      Cluster C personality disorders are marked by intense anxiety and fear. Here's a breakdown of the key traits of each disorder in this category.
    </p>
  </div>


  <section class="space-y-6">
    <div class="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-green-700">1. 🚪 Avoidant Personality Disorder</h3>
      <p class="text-gray-600">
        Individuals with avoidant personality disorder tend to avoid social interactions due to fear of rejection or criticism. Common traits include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>❌ Avoiding occupations that require social relations due to fear of criticism, exclusion, and rejection.</li>
        <li>❤️ They avoid intimate relationships unless they are certain of being loved.</li>
        <li>😞 Difficulty forming close relationships.</li>
        <li>😬 Fear of being criticized in social situations.</li>
        <li>💔 Inhibited emotions in new environments or with new people.</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-6">
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-blue-700">2. 🤝 Dependent Personality Disorder</h3>
      <p class="text-gray-600">
        People with dependent personality disorder often rely heavily on others for decision-making and emotional support. They exhibit the following:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>💬 Rely on others to make decisions for them.</li>
        <li>🔄 Have difficulty sharing opinions for fear of rejection.</li>
        <li>🤔 Lack of self-confidence and difficulty functioning independently.</li>
        <li>💔 Engage in unpleasant tasks to receive care and support from others.</li>
        <li>😞 Feel helpless and uncomfortable when left alone.</li>
      </ul>
    </div>
  </section>

  
  <section class="space-y-6">
    <div class="bg-yellow-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-yellow-700">3. 🧠 Obsessive-Compulsive Personality Disorder</h3>
      <p class="text-gray-600">
        Individuals with obsessive-compulsive personality disorder are preoccupied with perfectionism, order, and control. Key features include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>📋 Obsession with details, rules, lists, and organizing to the point that the purpose of the activity is forgotten.</li>
        <li>⚖️ Perfectionism that makes it difficult to complete tasks.</li>
        <li>🧑‍💻 Strong commitment to work and productivity.</li>
        <li>🔒 Rigidity and reluctance to be flexible with morality or values.</li>
        <li>📚 Difficulty discarding old or worthless items due to attachment.</li>
      </ul>
    </div>
  </section>

</div>

<div class="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl space-y-8">


  <div class="text-center space-y-4">
    <h2 class="text-3xl font-extrabold text-blue-900">🧠 Personality Changes Due to General Medical Conditions</h2>
    <p class="text-lg text-gray-700">
      Personality changes can arise from various general medical conditions. These alterations are often a result of physical health issues impacting cognitive and emotional behavior.
    </p>
  </div>


  <section class="space-y-6">
    <div class="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-green-700">🔬 Common Medical Conditions Causing Personality Changes</h3>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🧠 Head trauma</li>
        <li>💔 Cerebrovascular events</li>
        <li>🧬 CNS tumors</li>
        <li>🧠 Epilepsy</li>
        <li>🔬 Huntington's disease</li>
        <li>🧪 Multiple sclerosis</li>
        <li>⚖️ Endocrine diseases</li>
        <li>🧪 Heavy metal poisoning</li>
        <li>🦠 Neurosyphilis</li>
        <li>🦠 AIDS</li>
      </ul>
    </div>
  </section>


  <section class="space-y-6">
    <div class="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-blue-700">🔍 Diagnostic Criteria</h3>
      <ul class="list-disc pl-6 text-gray-600">
        <li>❌ Inability to perform purposeful activities</li>
        <li>⚡ Altered emotional behavior</li>
        <li>💔 Dissocial actions</li>
        <li>🧠 Cognitive changes</li>
        <li>💋 Altered sexual behavior</li>
      </ul>
    </div>
  </section>


  <section class="space-y-6">
    <div class="bg-yellow-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-yellow-700">💊 Treatment</h3>
      <p class="text-gray-600">
        The treatment for personality changes due to medical conditions focuses on addressing the underlying cause. Key treatment strategies include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🛑 Alcohol use is prohibited</li>
        <li>💙 Family support is essential</li>
        <li>💊 Antidepressants can be used for treatment</li>
      </ul>
    </div>
  </section>


  <section class="space-y-6">
    <div class="bg-purple-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-purple-700">😡 Passive-Aggressive Personality Disorder</h3>
      <p class="text-gray-600">
        Passive-aggressive personality disorder is marked by indirect resistance to the demands of others, often coupled with stubbornness, sullenness, and procrastination. Individuals may express hostility through non-confrontational behaviors.
      </p>
    </div>
  </section>

 
  <section class="space-y-6">
    <div class="bg-red-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-red-700">🥀 Sadomasochistic Personality Disorder</h3>
      <p class="text-gray-600">
        Sadomasochistic personality disorder is characterized by a tendency to derive pleasure from inflicting pain (sadism) or receiving pain (masochism) within relationships or activities. It may manifest as behaviors or patterns that combine both extremes of dominance and submission.
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🔪 Enjoyment of both inflicting and receiving emotional or physical pain.</li>
        <li>💔 Often linked to complex relationship dynamics, where individuals may experience gratification from control or submission.</li>
        <li>⚖️ Can create significant interpersonal difficulties and distress in relationships.</li>
      </ul>
    </div>
  </section>

  <section class="space-y-6">
    <div class="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-green-700">💡 Treatment for Personality Disorders</h3>
      <p class="text-gray-600">
        Treatment strategies for various personality disorders include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>🧠 Analytical psychotherapies for borderline, narcissistic, obsessive, and histrionic personality disorders.</li>
        <li>💊 Low-dose neuroleptics for paranoid and schizotypal personality disorders.</li>
        <li>💊 Antidepressants for obsessive, avoidant, and anxious personality disorders.</li>
      </ul>
    </div>
  </section>


  <section class="space-y-6">
    <div class="bg-indigo-50 p-6 rounded-xl shadow-md space-y-4">
      <h3 class="text-xl font-medium text-indigo-700">🧑‍⚕️ Nursing Approach in Personality Disorders</h3>
      <p class="text-gray-600">
        Nurses play a critical role in providing support for individuals with personality disorders. Key nursing diagnoses include:
      </p>
      <ul class="list-disc pl-6 text-gray-600">
        <li>⚠️ Potential to harm self and others</li>
        <li>🌀 Showing manipulative behavior</li>
        <li>❌ Difficulty in meeting daily needs independently</li>
        <li>💔 Deterioration in interpersonal relationships</li>
        <li>🔍 Lack of insight</li>
        <li>⚖️ Inability to cope with life changes or crises</li>
        <li>💔 Unrealistic physical complaints</li>
        <li>💋 Showing seductive behavior</li>
      </ul>
    </div>
  </section>

</div>

   </>
    ),
    
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
        {lesson?.videoUrl ? (
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
) : lesson?.localVideo ? (
  <div className="mb-8">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
      Watch the Video
    </h2>
    <video
      width="100%"
      height="400"
      controls
      className="rounded-lg shadow-xl"
    >
      <source src={lesson.localVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
) : null}

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
