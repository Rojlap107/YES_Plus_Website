// Program data for the YES+ website
const programData = [
    {
        id: "leadership",
        title: "Leadership Development Workshop",
        shortDescription: "A comprehensive program designed to foster leadership skills among Tibetan youth.",
        dateAdded: "2025-05-01", // Add a date for sorting
        fullDescription: "A comprehensive 6-week program designed to foster leadership skills among Tibetan youth. Participants learn about effective communication, community organizing, project management, and advocacy skills.",
        image: "images/programmes/leadership/DSC00773.JPG",
        highlights: [
            "Practical leadership exercises and simulations",
            "Mentorship from established community leaders",
            "Community project design and implementation",
            "Public speaking and presentation skills",
            "Conflict resolution and negotiation techniques",
            "Cultural and ethical leadership in the Tibetan context"
        ],
        learningOutcomes: [
            "Develop a personal leadership philosophy and action plan",
            "Gain confidence in public speaking and group facilitation",
            "Understand project management fundamentals",
            "Build a network of mentors and peer leaders",
            "Complete a community service project"
        ],
        details: {
            duration: "6 weeks (full-time)",
            location: "Dharamshala, HP",
            eligibility: "Tibetan youth aged 18-35",
            batchSize: "20 participants",
            nextBatch: "September 2025",
            applicationDeadline: "July 31, 2025"
        },
        courseStructure: [
            {
                title: "Week 1-2: Leadership Foundations",
                description: "Introduction to leadership concepts, self-assessment, communication skills, and team dynamics."
            },
            {
                title: "Week 3-4: Community Leadership",
                description: "Community needs assessment, project planning, resource mobilization, and stakeholder engagement."
            },
            {
                title: "Week 5-6: Project Implementation & Advocacy",
                description: "Implementation of community projects, advocacy skills, public speaking, and presentation of project outcomes."
            }
        ],
        gallery: [
            "images/programmes/leadership/DSC00773.JPG",
            "images/programmes/leadership/DSC00714.JPG",
            "images/programmes/leadership/DSC00870.JPG"
        ],
        testimonials: [
            {
                quote: "The leadership workshop transformed my approach to community work. I now have the confidence and skills to initiate positive change.",
                author: "Tenzin D., 2024 Graduate"
            }
        ],
        related: ["digital", "cultural"]
    },
    {
        id: "digital",
        title: "Digital Skills Training",
        shortDescription: "Hands-on training focused on developing practical digital skills that enhance employability.",
        dateAdded: "2025-04-15", // Earlier than leadership
        fullDescription: "A hands-on training program focused on developing practical digital skills that enhance employability in today's job market. Courses cover web development, digital marketing, graphic design, and data analysis.",
        image: "images/programmes/digital/Graphic Design.JPG",
        highlights: [
            "Industry-relevant curriculum designed with input from tech professionals",
            "Hands-on projects and portfolio development",
            "Job placement assistance and internship opportunities",
            "One-on-one mentorship from industry experts",
            "Networking events with potential employers",
            "Post-program career support and continued learning resources"
        ],
        learningTracks: [
            "<strong>Web Development</strong> - HTML, CSS, JavaScript, React, and responsive design",
            "<strong>Digital Marketing</strong> - SEO, social media marketing, content creation, and analytics",
            "<strong>Graphic Design</strong> - Adobe Creative Suite, UI/UX principles, and brand identity design",
            "<strong>Data Analysis</strong> - Excel, SQL, basic Python, and data visualization"
        ],
        details: {
            duration: "12 weeks",
            format: "Hybrid (Online & In-person)",
            eligibility: "Tibetan youth aged 18-35",
            batchSize: "25 participants per track",
            nextBatch: "August 2025",
            applicationDeadline: "June 30, 2025"
        },
        courseStructure: [
            {
                title: "Phase 1: Core Skills (4 weeks)",
                description: "All participants learn foundational digital skills, computer literacy, professional communication, and project management basics."
            },
            {
                title: "Phase 2: Specialization Track (6 weeks)",
                description: "Intensive training in your chosen specialization with practical projects and skill development."
            },
            {
                title: "Phase 3: Capstone Project & Job Placement (2 weeks)",
                description: "Complete a portfolio-quality project, refine your resume, practice interview skills, and connect with potential employers."
            }
        ],
        gallery: [
            "images/programmes/digital/Graphic Design.JPG",
            "images/programmes/digital/Graphic Design 2.jpg",
            "images/programmes/digital/DSC00716.JPG",
            "images/programmes/cultural/DSC00399.JPG"
        ],
        testimonials: [
            {
                quote: "The digital skills training completely changed my career path. I now work as a freelance web developer and have clients from around the world.",
                author: "Pema T., Web Development Graduate"
            }
        ],
        related: ["leadership", "cultural"]
    },
    {
        id: "cultural",
        title: "Cultural Heritage Program",
        shortDescription: "An immersive program that connects Tibetan youth with their cultural heritage.",
        dateAdded: "2025-03-20", // Earlier than digital
        fullDescription: "An immersive program that connects Tibetan youth with their cultural heritage while developing practical skills. Participants learn traditional arts, language, history, and philosophy alongside contemporary professional skills.",
        image: "images/programmes/cultural/DSC00389.JPG",
        highlights: [
            "Traditional Tibetan language and arts instruction",
            "Historical and philosophical studies",
            "Cultural preservation projects",
            "Community engagement activities",
            "Integration of traditional knowledge with modern skills",
            "Field trips to cultural and historical sites"
        ],
        learningOutcomes: [
            "Deeper understanding of Tibetan cultural heritage",
            "Practical skills in traditional arts and crafts",
            "Knowledge of Tibetan history and philosophy",
            "Ability to integrate cultural knowledge with modern contexts",
            "Completed cultural preservation project"
        ],
        details: {
            duration: "8 weeks",
            location: "Various settlements",
            eligibility: "Tibetan youth aged 16-35",
            batchSize: "30 participants",
            nextBatch: "July 2025",
            applicationDeadline: "May 31, 2025"
        },
        courseStructure: [
            {
                title: "Week 1-2: Foundations of Tibetan Culture",
                description: "Introduction to Tibetan history, philosophy, and cultural traditions."
            },
            {
                title: "Week 3-5: Traditional Arts and Practices",
                description: "Hands-on training in traditional Tibetan arts, crafts, music, or cooking."
            },
            {
                title: "Week 6-8: Cultural Preservation Projects",
                description: "Development and implementation of cultural preservation and promotion projects."
            }
        ],
        gallery: [
            "images/programmes/culinary/Sushi making demo by the trainer.JPG",
            "images/programmes/cultural/DSC00389.JPG",
            "images/programmes/cultural/DSC00397.JPG"
        ],
        testimonials: [
            {
                quote: "This program helped me reconnect with my roots in a meaningful way. The skills I learned allow me to preserve and share our cultural heritage with others.",
                author: "Yangchen L., 2023 Graduate"
            }
        ],
        related: ["leadership", "digital"]
    },
    {
        id: "barista",
        title: "Barista Training Program",
        shortDescription: "Professional coffee-making skills for career opportunities in the hospitality industry.",
        dateAdded: "2025-05-10", // Latest program - should appear first
        fullDescription: "A specialized training program that equips participants with the skills and knowledge needed to excel as professional baristas. The program covers coffee preparation techniques, customer service, cafe operations, and industry standards.",
        image: "images/programmes/barista/DSC03536.JPG",
        highlights: [
            "Hands-on coffee preparation training",
            "Latte art and presentation techniques",
            "Coffee bean knowledge and brewing methods",
            "Customer service excellence",
            "Cafe operations and management basics",
            "Industry certification preparation"
        ],
        learningOutcomes: [
            "Master various coffee preparation methods and techniques",
            "Create professional-quality latte art",
            "Understand coffee origins, roasting, and flavor profiles",
            "Develop excellent customer service skills",
            "Learn basic cafe operations and management",
            "Gain industry-recognized certification"
        ],
        details: {
            duration: "6 weeks",
            location: "Dharamshala, HP",
            eligibility: "Tibetan youth aged 18-35",
            batchSize: "15 participants",
            nextBatch: "October 2025",
            applicationDeadline: "August 31, 2025"
        },
        courseStructure: [
            {
                title: "Week 1-2: Coffee Fundamentals",
                description: "Introduction to coffee, brewing methods, equipment handling, and basic techniques."
            },
            {
                title: "Week 3-4: Advanced Techniques",
                description: "Specialty coffee preparation, latte art, flavor development, and coffee tasting."
            },
            {
                title: "Week 5-6: Professional Skills & Certification",
                description: "Customer service, cafe operations, industry standards, and certification preparation."
            }
        ],
        gallery: [
            "images/programmes/barista/DSC03536.JPG",
            "images/programmes/barista/DSC03449.JPG",
            "images/programmes/barista/DSC03467.JPG",
            "images/programmes/barista/DSC03474.JPG"
        ],
        testimonials: [
            {
                quote: "The barista training gave me skills that are in high demand. I was hired immediately after completing the program and now work at a popular cafe in Delhi.",
                author: "Lobsang K., 2024 Graduate"
            }
        ],
        related: ["culinary", "hairdressing"]
    },
    {
        id: "culinary",
        title: "Culinary Arts Program",
        shortDescription: "Learn international and traditional cooking techniques for a career in culinary arts.",
        dateAdded: "2025-02-15", // Earlier program
        fullDescription: "An intensive culinary training program that combines international cooking techniques with traditional Tibetan cuisine. Students develop professional kitchen skills and food presentation techniques for careers in the restaurant industry.",
        image: "images/programmes/culinary/Sushi Preparation.JPG",
        highlights: [
            "Hands-on cooking techniques across multiple cuisines",
            "Kitchen safety and sanitation standards",
            "Menu planning and food costing",
            "Traditional Tibetan cooking methods",
            "Food presentation and plating techniques",
            "Industry placement support"
        ],
        learningOutcomes: [
            "Proficiency in preparing international and Tibetan dishes",
            "Understanding of kitchen operations and workflow",
            "Knowledge of ingredients, flavors, and cooking techniques",
            "Ability to develop and cost menus",
            "Professional food presentation skills",
            "Food safety certification"
        ],
        details: {
            duration: "10 weeks",
            location: "Dharamshala, HP",
            eligibility: "Tibetan youth aged 18-35",
            batchSize: "15 participants",
            nextBatch: "September 2025",
            applicationDeadline: "July 15, 2025"
        },
        courseStructure: [
            {
                title: "Week 1-3: Culinary Foundations",
                description: "Kitchen safety, knife skills, basic cooking techniques, and food sanitation."
            },
            {
                title: "Week 4-7: International Cuisines",
                description: "Training in various international cuisines, cooking methods, and flavor profiles."
            },
            {
                title: "Week 8-10: Tibetan Cuisine & Professional Development",
                description: "Traditional Tibetan cooking, modern presentations, and industry preparation."
            }
        ],
        gallery: [
            "images/programmes/culinary/Sushi Preparation.JPG",
            "images/programmes/culinary/Sushi making demo by the trainer.JPG",
            "images/programmes/culinary/student's work.JPG",
            "images/programmes/culinary/Korculonary Trainee at Auroville.jpeg"
        ],
        testimonials: [
            {
                quote: "The culinary program gave me the confidence and skills to pursue my passion for cooking. I now work at a hotel restaurant and am planning to open my own café featuring fusion Tibetan cuisine.",
                author: "Tenzin W., 2023 Graduate"
            }
        ],
        related: ["barista", "cultural"]
    },
    {
        id: "hairdressing",
        title: "Hairdressing and Styling",
        shortDescription: "Professional training in hair cutting, coloring, styling, and salon management.",
        dateAdded: "2025-01-10", // Earliest program
        fullDescription: "A comprehensive hairdressing program that covers all aspects of professional hair care, cutting, coloring, and styling. Participants also learn salon operations and client management for successful careers in the beauty industry.",
        image: "images/programmes/hairdressing/Hair styling by trainer.JPG",
        highlights: [
            "Professional hair cutting techniques",
            "Hair coloring and chemical treatments",
            "Styling and finishing methods",
            "Client consultation and hair analysis",
            "Salon operations and management",
            "Portfolio development and career planning"
        ],
        learningOutcomes: [
            "Master various hair cutting and styling techniques",
            "Perform professional hair coloring and treatments",
            "Conduct effective client consultations",
            "Develop customer service and salon management skills",
            "Create a professional portfolio of work",
            "Prepare for industry employment or entrepreneurship"
        ],
        details: {
            duration: "12 weeks",
            location: "Dharamshala, HP",
            eligibility: "Tibetan youth aged 18-35",
            batchSize: "12 participants",
            nextBatch: "August 2025",
            applicationDeadline: "June 15, 2025"
        },
        courseStructure: [
            {
                title: "Week 1-4: Hair Fundamentals",
                description: "Hair analysis, cutting basics, shampooing, and styling foundations."
            },
            {
                title: "Week 5-8: Advanced Techniques",
                description: "Coloring, chemical treatments, advanced cutting, and contemporary styling."
            },
            {
                title: "Week 9-12: Professional Practice",
                description: "Client services, salon operations, portfolio building, and career preparation."
            }
        ],
        gallery: [
            "images/programmes/hairdressing/Hair styling by trainer.JPG",
            "images/programmes/hairdressing/Hair coloring by the students.JPG"
        ],
        testimonials: [
            {
                quote: "The hairdressing program taught me both technical skills and business knowledge. After graduating, I started my own small salon that now employs two other program graduates.",
                author: "Dolma C., 2023 Graduate"
            }
        ],
        related: ["barista", "culinary"]
    }
];

// Function to get a program by ID
function getProgramById(id) {
    return programData.find(program => program.id === id);
}

// Function to get all programs, sorted by dateAdded (newest first)
function getAllPrograms() {
    // Create a copy of the array to avoid modifying the original
    const sortedPrograms = [...programData];
    
    // Sort by dateAdded in descending order (newest first)
    sortedPrograms.sort((a, b) => {
        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);
        return dateB - dateA; // Descending order (newest first)
    });
    
    return sortedPrograms;
}

/**
 * INSTRUCTIONS FOR ADDING NEW PROGRAMS:
 * 
 * To add a new program, copy the template below and fill in the details.
 * Then add your new program object to the programData array above.
 * The program will automatically appear in the program listing page, sorted by the dateAdded value.
 * New programs (with the most recent dateAdded) will appear first in the list.
 * 
 * Remember to:
 * 1. Create a folder for your program images in "images/programmes/your-program-id/"
 * 2. Add all program images to that folder
 * 3. Update all image paths to point to your new folder
 * 4. Set today's date as the dateAdded value for the newest programs
 * 
 * NEW PROGRAM TEMPLATE:

{
    id: "your-program-id",
    title: "Your Program Title",
    shortDescription: "A brief one-sentence description of the program.",
    dateAdded: "YYYY-MM-DD", // Today's date - determines sort order
    fullDescription: "A more detailed paragraph describing your program thoroughly.",
    image: "images/programmes/your-program-id/main-image.jpg",
    highlights: [
        "Key highlight or feature of the program",
        "Another important highlight",
        "A third benefit or feature",
        "And so on..."
    ],
    learningOutcomes: [
        "What participants will learn or be able to do after the program",
        "Another skill or knowledge outcome",
        "A third outcome"
    ],
    details: {
        duration: "X weeks",
        location: "Where the program is held",
        eligibility: "Who can enroll",
        batchSize: "Number of participants",
        nextBatch: "When the next program starts",
        applicationDeadline: "When applications are due"
    },
    courseStructure: [
        {
            title: "Phase/Week Title",
            description: "Description of what happens in this phase or week."
        },
        {
            title: "Another Phase/Week",
            description: "Description of what happens in this phase or week."
        }
    ],
    gallery: [
        "images/programmes/your-program-id/image1.jpg",
        "images/programmes/your-program-id/image2.jpg",
        "images/programmes/your-program-id/image3.jpg"
    ],
    testimonials: [
        {
            quote: "A quote from a previous participant about their experience.",
            author: "Name of the person, Year"
        }
    ],
    related: ["id-of-related-program-1", "id-of-related-program-2"]
}

*/