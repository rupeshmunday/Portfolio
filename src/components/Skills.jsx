import React from 'react';
import { FaLaptopCode, FaTools, FaPalette } from 'react-icons/fa';

const SkillBar = ({ skill }) => {
  return (
    <div className="w-full bg-neutral-700 h-2 rounded-full">
      <div 
        className="bg-blue-500 h-2 rounded-full" 
        style={{ width: `${skill.level}%` }} 
      />
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      categoryName: 'Frontend Development',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Angular', level: 85 },
        { name: 'NgMaterial', level: 85 },
        { name: 'ShadCN', level: 75 },
      ],
    },
    {
      categoryName: 'Backend Development',
      icon: <FaTools />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'Django', level: 90 },
        { name: 'JS', level: 85 },
      ],
    },
    {
      categoryName: 'Design & Tools',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Redis', level: 75 },
        { name: 'Kafka', level: 75 },
      ],
    },
    {
      categoryName: 'Cloud & Services',
      icon: <FaPalette />,
      skills: [
        { name: 'AWS S3', level: 85 },
        { name: 'AWS EC2', level: 90 },
        { name: 'AWS SQS', level: 75 },
        { name: 'AWS SNS', level: 75 },
        { name: 'Cloudflare Workers', level: 75 },
      ],
    },
    {
      categoryName: 'Databases and ORMs',
      icon: <FaPalette />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Postgres', level: 90 },
        { name: 'Mongoose', level: 90 },
        { name: 'Prisma', level: 75 },
      ],
    },
    {
      categoryName: 'Design & Tools',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS SNS', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate__animated animate__fadeIn"> 
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div 
              key={category.categoryName} 
              className="bg-neutral-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300" 
            >
              <div className="mb-4">
                {category.icon} 
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {category.categoryName}
              </h3>
              <div className="space-y-3"> 
                  {category.skills.map((skill) => (
                <div className="flex flex-col"> {/* Added this div */}
                    <div key={skill.name} className="flex justify-between">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                      <SkillBar skill={skill} /> 
                </div> 
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;