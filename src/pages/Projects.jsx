import { motion } from "framer-motion";

const projects = [
  {
    title: "Cyrobyte",
    imgURL: "/images/websites/cyrobyte.png",
    alt: "Cyrobyte Image",
    text: "Cyrobyte is a modern tech website showcasing various services and solutions. Built with the latest web technologies, it features a clean, user-friendly interface, ideal for businesses looking to establish a strong online presence.",
    repoURL: "https://github.com/Igwefran6/cyrobyte",
    websiteURL: "https://cyrobyte.vercel.app",
  },
  {
    title: "Chilli Restaurant",
    imgURL: "/images/websites/chilli-restaurant.png",
    alt: "Chilli restaurant website",
    text: "Chilli Restaurant is a vibrant and interactive website designed for food lovers. The website features a full menu, an intuitive reservation system, and a lively design that captures the essence of dining out.",
    repoURL: "https://github.com/Igwefran6/chili-restaurant",
    websiteURL: "https://chilli-restaurant.vercel.app",
  },
  {
    title: "Jolliplace",
    imgURL: "/images/websites/jolliplace.png",
    alt: "Jolliplace restaurant website",
    text: "Jolliplace is a sleek, modern restaurant website that features an easy-to-use interface and a beautiful design. Created with HTML, CSS, and JavaScript, it offers a full menu and the ability to make online reservations.",
    repoURL: "https://github.com/Igwefran6/Restaurant-",
    websiteURL: "https://jolliplace.vercel.app/",
  },
  {
    title: "SDN",
    imgURL: "/images/websites/sdn.png",
    alt: "SDN tech website",
    text: "SDN is a cutting-edge tech website focused on network solutions and innovations. Designed with modern technologies, the site offers a professional and streamlined experience, perfect for businesses and professionals in the networking industry.",
    repoURL: "https://github.com/Igwefran6/sdn",
    websiteURL: "https://sdn-alpha.vercel.app/",
  },
  {
    title: "Eatsy",
    imgURL: "/images/websites/eatsy.png",
    alt: "Eatsy restaurant website",
    text: "Eatsy is a dynamic restaurant website offering a comprehensive online menu, easy-to-navigate interface, and simple ordering system. Designed for restaurants looking to provide customers with a smooth, digital dining experience.",
    repoURL: "https://github.com/Igwefran6/eatsy",
    websiteURL: "https://eatsy-lovat.vercel.app/",
  },
  {
    title: "Fintech",
    imgURL: "/images/fintech.png",
    alt: "Eatsy restaurant website",
    text: "Eatsy is a dynamic restaurant website offering a comprehensive online menu, easy-to-navigate interface, and simple ordering system. Designed for restaurants looking to provide customers with a smooth, digital dining experience.",
    repoURL: "https://github.com/SAGE-OF-SIX-PATHS/FintechEdited.git",
    websiteURL: "https://fintech-edited-lwxf.vercel.app/",
  },
];

const cardVariants = {
  hidden: { opacity: 0.2, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Project = () => {
  return (
    <div className="w-screen bg-secondary lg:px-20 px-14 p-10">
      <h1 className="text-4xl text-primary">Some of My Work</h1>
      <hr className="w-24 border-t-4 my-4 border-text-orange"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="shadow-lg rounded-lg p-5 bg-[#1a1a1a] lg:hover:scale-105 transition-all lg:hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 + index / 2, ease: "anticipate" }}
            variants={cardVariants}
          >
            <img
              src={project.imgURL}
              alt={project.alt}
              className="rounded-lg mb-4 border-4 border-secondary"
            />
            <h2 className="text-2xl font-bold mb-2 text-primary">
              {project.title}
            </h2>
            <p className="mb-4 text-primary opacity-75">{project.text}</p>

            <div className="flex justify-between">
              <a
                href={project.repoURL}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repo
              </a>
              <a
                href={project.websiteURL}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
