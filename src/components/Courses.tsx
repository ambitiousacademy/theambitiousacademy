import { courseData } from "@/mockdata/course";


export default function Courses() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="mb-5 flex flex-col text-center w-full">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Certificate Courses</h2>
          </div>
          <div className="flex flex-wrap">
            {courseData.map((data, index) => (
              <a key={index} className="w-full text-gray-800 lg:w-1/3 p-4" href={data.link}>
                <div className="border border-gray-200 p-12 rounded-3xl h-full course-card">
                  <p className="text-xl tracking-tight font-semibold mb-4 course-title">{data.coursename}</p>
                  <p className="tracking-tight mb-12 course-description">{data.description}</p>
                  <span className="bg-green-600 h-14 w-full rounded-full px-5 py-3 inline-flex  items-center justify-center gap-2 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200 course-price">
                    <span className="text-white text-sm font-semibold tracking-tight">{data.course_fee.current_price}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}