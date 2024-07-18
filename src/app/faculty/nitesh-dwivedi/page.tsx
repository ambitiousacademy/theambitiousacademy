const Faculty = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-double border-4 rounded-2xl	 border-orange-600" >
     
      <h1 className="text-4xl font-bold mb-4">Nitesh Dwivedi:</h1>
      <section className="mb-6">
     {/* < img 
        src=''
        alt="Faculty Image" 
        className="object-cover h-40 w-50 rounded-lg"
      /> */}
      </section>
      <section className="mb-6" >
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Esteemed Advocate: </strong>Practicing at the MP High Court. </li>
          <li className="mb-2">
            <strong>Education: </strong>Graduate of National Law University Assam.</li>
          <li className="mb-2">
            <strong>Professional Experience: </strong>Six years of extensive litigation</li>
          <li className="mb-2">
            <strong>Areas of Expertise:</strong>
            <ul className="list-decimal ml-40 list-inside" >
            <li className="mb-2">
            Writ Law
            </li>
            <li className="mb-2">
            Civil Law
            </li>
            <li className="mb-2">
           Criminal Law
            </li>
            <li className="mb-2">
           Banking Law
            </li>
            <li className="mb-2">
           International Law
            </li>
            <li className="mb-2">
            Constitutional Law
            </li>
              </ul>
              </li>
          <li className="mb-2">
            <strong>Reputation: </strong> Known for his proficiency and dedication in various branches of law.</li> 
          <li className="mb-2">
            <strong>Teaching Approach: </strong>
            <ul className="list-decimal ml-40 list-inside" >
            <li className="mb-2">
            Combines practical experience with theoretical knowledge.
            </li>
            <li className="mb-2">
          Provides real-world insights from handling complex cases
            </li>
            <li className="mb-2">
            Emphasizes comprehensive and practically oriented legal education.
            </li>
            </ul>
            </li> 
          <li className="mb-2">
            <strong>Mentorship: </strong>Exceptional mentor for aspiring legal professionals.</li> 
          <li className="mb-2">
            <strong>Commitment to Students: </strong>
            <ul className="list-decimal ml-40 list-inside" >
            <li className="mb-2">
            Ensures thorough and enriching learning experiences.
            </li>
            <li className="mb-2">
           Simplifies complex legal concepts.
            </li>
            <li className="mb-2">
        Maintains an approachable demeanor, making him a favorite among students.
            </li>
            </ul>
            </li> 
        </ul>
        <li className="mb-2">
            <strong>Focus on Practical Skills: </strong>Guides students in developing skills in drafting and conveyancing. </li>
            <li className="mb-2">
            <strong>Passion for Law: </strong>Dedicated to students success and the field of legal education.</li>
      
      </section>
    </div>
  );
};

export default Faculty;  