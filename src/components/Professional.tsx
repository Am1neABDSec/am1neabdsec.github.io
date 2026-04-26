import React from "react";

const Professional: React.FC = () => {
  return (
    <section id="professional" className="py-20 bg-zinc-50 dark:bg-zinc-950 font-mono">
      <div className="container mx-auto px-4">
        {/* Experience Sub-Section */}
        <h2 className="text-3xl font-bold mb-10 dark:text-green-500 uppercase tracking-widest border-b border-green-900 pb-2">
          01. Work_Experience
        </h2>
        <div className="space-y-8 mb-20">
          <div className="border-l-2 border-green-600 pl-6">
            <h3 className="text-xl font-bold dark:text-white">Security Researcher / Pentester</h3>
            <p className="text-green-700 text-sm mb-2">Company Name | Jan 2024 - Present</p>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
              <li>Conducted vulnerability assessments and network security audits.</li>
              <li>Documented findings and provided remediation strategies.</li>
            </ul>
          </div>
          {/* ADD MORE JOBS HERE */}
        </div>

        {/* Certifications Sub-Section */}
        <h2 className="text-3xl font-bold mb-10 dark:text-green-500 uppercase tracking-widest border-b border-green-900 pb-2">
          02. Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-black border border-green-900 hover:border-green-400 transition-colors">
            <h4 className="text-xl font-bold text-white">PJPT</h4>
            <p className="text-gray-500">Practical Junior Penetration Tester</p>
            <p className="text-green-800 mt-2">TCM Security</p>
          </div>
          <div className="p-6 bg-black border border-green-900 hover:border-green-400 transition-colors">
            <h4 className="text-xl font-bold text-white">NSE 1, 2, 3</h4>
            <p className="text-gray-500">Network Security Expert</p>
            <p className="text-green-800 mt-2">Fortinet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
