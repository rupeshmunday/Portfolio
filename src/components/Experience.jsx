import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      period: '2022 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovation Corp',
      details: [
        'Led development of multiple high-impact web applications',
        'Managed team of 5 developers',
        'Implemented modern frontend architectures using React and TypeScript',
      ],
    },
    {
      period: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions Inc',
      details: [
        'Developed responsive web applications',
        'Collaborated with UX designers',
        'Optimized application performance',
      ],
    },
    {
      period: '2019 - 2020',
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      details: [
        'Built and maintained client websites',
        'Implemented responsive designs',
        'Worked with JavaScript and PHP',
      ],
    },
    // Add more experiences here
        {
            period: '2018 - 2019',
            title: 'Web Development Intern',
            company: 'Acme Web Solutions',
            details: [
                'Assisted senior developers with front-end and back-end tasks.',
                'Learned about web development best practices and workflows.',
                'Contributed to small projects and bug fixes.'
            ]
        }
  ];

  return (
    <section id="experience" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My professional journey and career highlights</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <ExperienceItem key={index} {...exp} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all animate__animated animate__fadeIn">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ period, title, company, details, isLeft }) => {
  const animationClass = isLeft ? 'animate__fadeInLeft' : 'animate__fadeInRight';
  const itemStyle = isLeft ? 'md:justify-between' : 'md:justify-between flex-row-reverse';
  const contentStyle = isLeft ? 'md:w-[45%]' : 'md:w-[45%]';

  return (
    <div className={`relative flex md:gap-8 items-center ${itemStyle} animate__animated ${animationClass}`}>
      {/* <div className="hidden md:block w-[45%]"></div> */}
      <div className="hidden md:block w-5 h-5 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full z-10"></div> {/* Added z-10 */}
      <div className={`w-full ${contentStyle} bg-neutral-800 p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300`}>
        <div className="flex flex-col">
          <span className="text-blue-400 text-sm mb-2">{period}</span>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <h4 className="text-gray-400 mb-4">{company}</h4>
          <ul className="text-gray-300 list-disc pl-6"> {/* Use a list for details */}
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
       <div className="hidden md:block w-[45%]"></div>
    </div>
  );
};

export default Experience;