import { useState } from 'react';

const CourseDataForm = () => {
  const [formData, setFormData] = useState({
    courseId: '',
    courseTitle: '',
    overview: '',
    instructorName: '',
    instructorBio: '',
    duration: '',
    numberOfClasses: '',
    classesPerWeek: '',
    modules: '',
    modeOfLearning: '',
    assessment: '',
    foundationalModules: '',
    keyFeatures: '',
    conclusion: '',
    enrollment: '',
    contactEmail: '',
    contactPhone: '',
    contactWebsite: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/courseDetailsForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Course Details Form</h2>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <label className="block text-gray-700">Course ID</label>
          <input
            type="text"
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Course Title</label>
          <input
            type="text"
            name="courseTitle"
            value={formData.courseTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Overview</label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Instructor Name</label>
          <input
            type="text"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Instructor Bio</label>
          <textarea
            name="instructorBio"
            value={formData.instructorBio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Number of Classes</label>
          <input
            type="text"
            name="numberOfClasses"
            value={formData.numberOfClasses}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Classes per Week</label>
          <input
            type="text"
            name="classesPerWeek"
            value={formData.classesPerWeek}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Modules</label>
          <input
            type="text"
            name="modules"
            value={formData.modules}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Mode of Learning</label>
          <input
            type="text"
            name="modeOfLearning"
            value={formData.modeOfLearning}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Assessment</label>
          <input
            type="text"
            name="assessment"
            value={formData.assessment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Foundational Modules</label>
          <textarea
            name="foundationalModules"
            value={formData.foundationalModules}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Key Features</label>
          <textarea
            name="keyFeatures"
            value={formData.keyFeatures}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Conclusion</label>
          <textarea
            name="conclusion"
            value={formData.conclusion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Enrollment</label>
          <textarea
            name="enrollment"
            value={formData.enrollment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Contact Phone</label>
          <input
            type="text"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Contact Website</label>
          <input
            type="url"
            name="contactWebsite"
            value={formData.contactWebsite}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
    </form>
  );
};

export default CourseDataForm;
