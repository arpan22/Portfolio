import { motion } from "framer-motion";
import { Card, CardContent } from "./components/card";
import { Button } from "./components/button";
import { Github, Linkedin, Mail, Car, ParkingCircle, Award } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Automated Car Detection",
      date: "March 2025",
      tech: "Python, Java, HTML, Streamlit",
      description:
        "Developed and fine-tuned a ResNet-50 CNN on the Stanford Cars dataset (16K+ images, 196 classes) to classify vehicle make and model with 91% accuracy. Built a lightweight Streamlit app for real-time car image classification.",
      icon: <Car className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Smart Parking System",
      date: "April 2025",
      tech: "Python, FastAPI, Angular, Google Maps API",
      description:
        "Built an IoT-based smart parking system using camera sensors and computer vision to detect parking availability. Integrated FastAPI backend with Angular frontend and live Google Maps dashboard.",
      icon: <ParkingCircle className="w-6 h-6 text-green-500" />,
    },
    {
      title: "NVIDIA Golden Ticket Challenge",
      date: "Spring 2025",
      tech: "Python, Flask, Cosmos Model, HTML/CSS/JS",
      description:
        "Ranked among top participants and earned the “Golden Ticket.” Built a real-time image captioning web app using NVIDIA’s Cosmos model, deployed with Flask backend and minimal JS frontend.",
      icon: <Award className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24">
        <motion.h1
          className="text-5xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Arpan Pathak
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Computer Science major at Clemson University with a Minor in
          Artificial Intelligence. Passionate about deep learning, computer
          vision, and full-stack development.
        </motion.p>
        <div className="flex space-x-6 mt-6">
          <a href="mailto:arpanpathak22@gmail.com">
            <Mail className="w-6 h-6 text-gray-600 hover:text-blue-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/arpan30/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-500 transition" />
          </a>
          <a
            href="https://github.com/arpan22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 transition" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m a passionate developer exploring the intersection of AI, data, and
          software systems. I love building applications that make technology
          accessible and impactful — from autonomous car models to intelligent
          parking systems. When I’m not coding, you’ll find me exploring design,
          Formula One, or creative tech experiments.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <div className="flex items-center mb-4 space-x-3">
                      {proj.icon}
                      <h3 className="font-semibold text-xl">{proj.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
                    <p className="text-gray-600 text-sm mb-3">
                      {proj.description}
                    </p>
                    <p className="text-xs text-gray-400">{proj.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="text-center py-20 bg-gray-100 text-gray-800">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
          Interested in collaborating or learning more about my projects? Feel
          free to connect with me!
        </p>
        <Button asChild>
          <a
            href="https://www.linkedin.com/in/arpan30/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with Me on LinkedIn
          </a>
        </Button>
      </section>
    </div>
  );
}
