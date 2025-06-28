import React from 'react';

const AlumniSuccess = () => {
  const universities = [
    { name: "Stanford University", logo: "/images/universities/stanford-university.png" },
    { name: "Yale University", logo: "/images/universities/yale-university.png" },
    { name: "Harvard University", logo: "/images/universities/harvard-university.svg" },
    { name: "University of Pennsylvania", logo: "/images/universities/university-of-pennsylvania.png" },
    { name: "Princeton University", logo: "/images/universities/princeton-university.png" },
    { name: "Columbia University", logo: "/images/universities/columbia-university.png" },
    { name: "UC Berkeley", logo: "/images/universities/uc-berkeley.png" },
    { name: "Cornell University", logo: "/images/universities/cornell-university.jpg" },
    { name: "Georgetown University", logo: "/images/universities/georgetown-university.png" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl text-center text-[#015c22] mb-16">
          Our alumni have gained admission to:
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {[...universities, ...universities].map((university, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={university.logo} 
                  alt={university.name}
                  className="h-12 w-auto object-contain max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccess;