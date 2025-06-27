import React from 'react';

const AlumniSuccess = () => {
  const universities = [
    { name: "Stanford University", logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Yale University", logo: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Harvard University", logo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "University of Pennsylvania", logo: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Princeton University", logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Columbia University", logo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "UC Berkeley", logo: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Cornell University", logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Georgetown University", logo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
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
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#015c22] rounded-full mx-auto mb-2"></div>
                  <span className="font-lato text-sm font-semibold text-gray-700">
                    {university.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccess;