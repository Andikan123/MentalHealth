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
