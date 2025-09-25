import ViewFooter from "./ViewFooter";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WorkExperienceView = () => {
    const timelineRef = useRef();
    const [hoveredItem, setHoveredItem] = useState(null);

    const workExperiences = [
        {
            id: 1,
            year: "2023-Present",
            company: "Tech Solutions Inc.",
            position: "Senior Full Stack Developer",
            description: "Leading development of enterprise web applications using React, Java Spring Boot, and microservices architecture. Mentoring junior developers and implementing CI/CD pipelines.",
            color: "bg-blue-600"
        },
        {
            id: 2,
            year: "2021-2023",
            company: "Digital Innovations Co.",
            position: "Full Stack Developer",
            description: "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Collaborated with design teams to implement responsive UI/UX solutions.",
            color: "bg-green-600"
        },
        {
            id: 3,
            year: "2020-2021",
            company: "StartUp Ventures",
            position: "Frontend Developer",
            description: "Built modern web interfaces using React and TypeScript. Implemented state management with Redux and integrated RESTful APIs for dynamic content rendering.",
            color: "bg-purple-600"
        },
        {
            id: 4,
            year: "2019-2020",
            company: "Web Agency Pro",
            position: "Junior Developer",
            description: "Assisted in developing responsive websites using HTML, CSS, JavaScript, and PHP. Gained experience in version control with Git and Agile methodologies.",
            color: "bg-orange-600"
        },
        {
            id: 5,
            year: "2018-2019",
            company: "Freelance Projects",
            position: "Web Developer Intern",
            description: "Completed various small-scale web development projects for local businesses. Learned fundamentals of web development and client communication skills.",
            color: "bg-red-600"
        }
    ];

    useGSAP(() => {
        gsap.fromTo(timelineRef.current.children, {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
    });

    return (
        <div className="flex flex-col h-screen w-full bg-amber-200">
            {/* Título */}
            <div className="text-center py-8">
                <h1 className="font-rodin font-bold text-4xl md:text-6xl text-amber-900">
                    WORK EXPERIENCE
                </h1>
            </div>

            {/* Línea de tiempo horizontal */}
            <div className="flex-grow flex items-center justify-center px-4 pb-20">
                <div className="w-full max-w-7xl">
                    <div 
                        ref={timelineRef}
                        className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 relative"
                    >
                        {/* Línea conectora horizontal (solo en desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-amber-600 transform -translate-y-1/2 z-0"></div>
                        
                        {workExperiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="relative z-10 flex flex-col items-center group cursor-pointer"
                                onMouseEnter={() => setHoveredItem(exp.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {/* Círculo de la línea de tiempo */}
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${exp.color} flex items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-white shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl`}>
                                    {index + 1}
                                </div>
                                
                                {/* Información de la experiencia */}
                                <div className={`mt-4 p-4 bg-white rounded-lg shadow-lg max-w-xs transition-all duration-300 transform ${
                                    hoveredItem === exp.id ? 'scale-105 shadow-2xl' : ''
                                }`}>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg text-amber-900 mb-1">
                                            {exp.company}
                                        </h3>
                                        <h4 className="font-semibold text-md text-blue-700 mb-2">
                                            {exp.position}
                                        </h4>
                                        <p className="text-sm font-medium text-amber-700 mb-2">
                                            {exp.year}
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
