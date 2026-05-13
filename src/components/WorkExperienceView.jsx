import ViewFooter from "./ViewFooter";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WorkExperienceView = () => {
    const timelineRef = useRef();
    const lineRef = useRef();
    const experienceRefs = useRef([]);
    const [hoveredItem, setHoveredItem] = useState(null);

    const workExperiences = [
        {
            id: 1,
            year: "December 25 - January 26",
            company: "VNN - Year 1",
            position: "Feature Story",
            description:
                "Worked on a secured loan system for BBVA using React, Lit, Web Components, and Java Spring Boot. Collaborated with an international team and applied version control with Git.",
            color: "bg-blue-600",
            link: "https://example.com",
        },
        {
            id: 2,
            year: "September 25",
            company: "VNN - Year 1",
            position: "6 Shot Story",
            description:
                "This is the first project Done For VNN we took 6 shots and turned into a poem. Reflection: What did you learn through the process of creating this video? Did you manage your time [...]",
            color: "bg-purple-600",
            link: "https://drive.google.com/file/d/12SyCT7cei92nU-NkV9pB1peA-E26Scjq/view",
        },
        {
            id: 3,
            year: "Upcoming",
            company: "VNN - Year 1",
            position: "News Story",
            description:
                "At least 1 News Story (1:30 - 2:00). Reflection: What did you learn through the process of producing this news story? What were some challenges that you faced along the way? What [...]",
            color: "bg-red-600",
            link: "https://drive.google.com/file/d/1Z34sg377q5vRfU1_VN3uhYOrOfNV8sc8/view",
        },
        {
            id: 4,
            year: "Upcoming",
            company: "VNN - Year 1",
            position: "PSA / Commercial",
            description:
                "At least 1 Public Service Announcement OR Commercial (0:30 - 1:00). Reflection: What did you learn through the process of producing this video? What were some challenges that you [...]",
            color: "bg-green-600",
            link: "https://drive.google.com/drive/u/1/folders/106k1lbnCFAcDrbn9bjJlFp2_nvu1tQYn",
        },
        {
            id: 5,
            year: "Upcoming",
            company: "VNN - Year 1",
            position: "Stop Motion Video",
            description:
                "Create a stop motion video. Reflection: What did you learn about FRAME RATE? What were some challenges that you faced along the way? What are your proudest moments in this video?[...]",
            color: "bg-indigo-600",
            link: "https://drive.google.com/file/d/1NoAA2R692xDUhx6Je0JieY56aL9W1M6F/view",
        },
        {
            id: 6,
            year: "Upcoming",
            company: "VNN - Year 1",
            position: "Inside Vestavia Reel",
            description:
                "Create an 'Inside Vestavia' Reel. Reflection: What did you learn about ASPECT RATIO? What were some challenges that you faced along the way? What are your proudest moments in this[...]",
            color: "bg-pink-600",
            link: "https://drive.google.com/file/d/1KJWMeSxfO9_HIQBmd8zuvVxBQuWiOlJu/view",
        },
        {
            id: 7,
            year: "Upcoming",
            company: "VNN - Year 1",
            position: "Green Screen Magic Video",
            description:
                "Create a green screen magic video. Reflection: What did you learn about working with a GREEN SCREEN? What were some challenges that you faced along the way? What are your proudest[...]",
            color: "bg-yellow-600",
            link: "https://drive.google.com/file/d/1XZS1RrwjQ6tCQ5pj8c5PP-BVVIBXOeP8/view",
        },
    ];

    useGSAP(() => {
        // Inicializar elementos como invisibles
        gsap.set(experienceRefs.current, { opacity: 0, y: 50, scale: 0.8 });
        gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });

        // Primero aparece la línea de tiempo
        gsap.to(lineRef.current, {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                // Luego aparecen las experiencias una por una
                experienceRefs.current.forEach((ref, index) => {
                    if (ref) {
                        gsap.to(ref, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: index * 0.3, // Cada experiencia aparece 0.3s después de la anterior
                            ease: "back.out(1.7)",
                        });
                    }
                });
            }
        });
    });

    return (
        <div className="flex flex-col min-h-screen w-full bg-amber-200">
            {/* Título */}
            <div className="text-center py-8">
                <h1 className="font-serif font-bold text-4xl md:text-6xl text-amber-900">
                    My Work
                </h1>
            </div>

            {/* Línea de tiempo horizontal */}
            <div className="flex-grow px-4 pb-44 md:pb-0">
                <div className="w-full max-w-7xl mx-auto">
                    <div ref={timelineRef} className="relative">
                        {/* Línea horizontal principal */}
                        <div 
                            ref={lineRef}
                            className="hidden md:block absolute left-8 right-8 h-2 bg-amber-600 rounded-full shadow-lg z-0 top-16"
                        ></div>

                        {/* Contenedor de experiencias */}
                        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-4 relative overflow-x-auto">
                            {workExperiences.map((exp, index) => (
                                <a
                                    key={exp.id}
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline"
                                >
                                    <div
                                        ref={(el) => experienceRefs.current[index] = el}
                                        className="relative flex flex-col items-center group w-full md:w-1/4 flex-shrink-0"
                                        onMouseEnter={() => setHoveredItem(exp.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        {/* Fecha arriba */}
                                        <div className="mb-4 text-center">
                                            <p className="text-sm md:text-base font-bold text-amber-900 bg-white px-3 py-1 rounded-full shadow-md border-2 border-amber-600">
                                                {exp.year}
                                            </p>
                                        </div>

                                        {/* Círculo SOBRE la línea */}
                                        <div
                                            className={`hidden md:flex w-8 h-8 md:w-10 md:h-10 rounded-full ${exp.color} items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-white shadow-lg`}
                                        ></div>

                                        {/* Información de la experiencia debajo */}
                                        <div
                                            className={`p-4 bg-white rounded-lg shadow-lg w-full max-w-sm transition-all duration-300 transform ${
                                                hoveredItem === exp.id
                                                    ? "scale-105 shadow-2xl border-2 border-amber-400"
                                                    : "border-2 border-transparent"
                                            }`}
                                        >
                                            <div className="text-center">
                                                <h3 className="font-bold text-lg text-amber-900 mb-1">
                                                    {exp.company}
                                                </h3>
                                                <h4 className="font-semibold text-md text-blue-700 mb-3">
                                                    {exp.position}
                                                </h4>
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <ViewFooter />
            </div>
        </div>
    );
};

export default WorkExperienceView;
