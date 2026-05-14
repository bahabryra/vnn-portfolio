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
            year: "September 25",
            company: "VNN - Year 1",
            position: "6 Shot Story",
            description:
                "This is the first project Done For VNN we took 6 shots and turned into a poem. It wasent that difficult because it was just drag and drop really and it was only 6 shots this is where we learned how to record and edit it wasent difficult cause it was simple just drag and drop",
            color: "bg-purple-600",
            link: "https://drive.google.com/file/d/12SyCT7cei92nU-NkV9pB1peA-E26Scjq/view",
        },
        {
            id: 2,
            year: "January 2026",
            company: "VNN - Year 1",
            position: "News Story",
            description:
                "I learned that about how feature stories work its supposed to have voice over but i dident really do that unfortunetly I learned how to interview people and ask them stuff such as 'say your name and spell it please' and related phrases",
            color: "bg-red-600",
            link: "https://drive.google.com/file/d/1Z34sg377q5vRfU1_VN3uhYOrOfNV8sc8/view",
        },
        {
            id: 3,
            year: "Feburary- April 2026",
            company: "VNN - Year 1",
            position: "PSA / Commercial",
            description:
                "We Made this Project as a class for a company compatition called litterquitters.org where we explained the causes of littering in under a minuite in a fun and engaging way WE WON!",
            color: "bg-green-600",
            link: "https://drive.google.com/drive/u/1/folders/106k1lbnCFAcDrbn9bjJlFp2_nvu1tQYn",
        },
        {
            id: 4,
            year: "March 2026",
            company: "VNN - Year 1",
            position: "Stop Motion Video",
            description:
                "This is where we explored frame rate. I learned about the standered in films (24fps) and games (30-60fps) and what frames where I put my knowlage together to create a 8fps 30 seconds",
            color: "bg-indigo-600",
            link: "https://drive.google.com/file/d/1NoAA2R692xDUhx6Je0JieY56aL9W1M6F/view",
        },
        {
            id: 5,
            year: "May 2026",
            company: "VNN - Year 1",
            position: "Inside Vestavia Reel",
            description:
                "this is where we explored the diffrent sizes and shapes of videos like horizontal for this video and why its like this we also explored captioning and why on youtube shorts and in insta reels they have captions embeded in it",
            color: "bg-pink-600",
            link: "https://drive.google.com/file/d/1KJWMeSxfO9_HIQBmd8zuvVxBQuWiOlJu/view",
        },
        {
            id: 6,
            year: "May 2026",
            company: "VNN - Year 1",
            position: "Green Screen Magic Video",
            description:
                "this is where we first learned about Green Screen and its magic how the size of green screens are important and related stuff we learned how to light a green screen and turn it into a backround it was pretty fun although premier dident want to cooaperate with me",
            color: "bg-yellow-600",
            link: "https://drive.google.com/file/d/1XZS1RrwjQ6tCQ5pj8c5PP-BVVIBXOeP8/view",
        },
        {
            id: 8,
            year: "Featured Edit",
            company: "VNN - Year 1",
            position: "Brain Buffet Module 1",
            description:
                "this is where we first learned about Green Screen and its magic how the size of green screens are important and related stuff we learned how to light a green screen and turn it into a backround it was pretty fun although premier dident want to cooaperate with me",
            color: "bg-yellow-600",
            link: "https://drive.google.com/file/d/1yUTmQvB5oAtUHF_nRqXjX_LIFS5lHpSy/view",
        },
        {
            id: 8,
            year: "Featured Edit",
            company: "VNN - Year 1",
            position: "Brain Buffet Module 2",
            description:
                "this is where we first learned about Green Screen and its magic how the size of green screens are important and related stuff we learned how to light a green screen and turn it into a backround it was pretty fun although premier dident want to cooaperate with me",
            color: "bg-yellow-600",
            link: "https://drive.google.com/file/d/1l2lBjowC7yMuPEhpbpmjb0d2fidPfyGS/view",
        },
        {
            id: 8,
            year: "Featured Edit",
            company: "VNN - Year 1",
            position: "Eras Of ze mass media - defenitly Looks Amazing By the Way!!!",
            description:
                "this is where we first learned about Green Screen and its magic how the size of green screens are important and related stuff we learned how to light a green screen and turn it into a backround it was pretty fun although premier dident want to cooaperate with me",
            color: "bg-yellow-600",
            link: "https://drive.google.com/file/d/1paG2l3CuGXkXlt1lR_TQ5gXTiBZzcFIE/view?usp=sharing",
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
                        <div className="flex flex-col md:flex-row justify-start items-start space-y-12 md:space-y-0 md:space-x-4 relative overflow-x-auto pb-4">
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
                                        className="relative flex flex-col items-center group w-full md:w-72 flex-shrink-0"
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
                                            className={`hidden md:flex w-8 h-8 md:w-10 md:h-10 rounded-full ${exp.color} items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-amber-200 z-10`}
                                        ></div>

                                        {/* Información de la experiencia debajo */}
                                        <div
                                            className={`p-4 bg-white rounded-lg shadow-lg w-full min-h-80 transition-all duration-300 transform ${
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
