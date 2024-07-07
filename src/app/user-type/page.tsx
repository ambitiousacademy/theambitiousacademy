import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">User Type</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        What Defines You The Best!.. This will help us to serve you better.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
            <div className="grid space-y-3">
            <div className="relative flex items-start">
    <div className="flex items-center h-5 mt-1">
      <input id="hs-checkbox-archive" name="hs-checkbox-archive" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="hs-checkbox-archive-description"/>
    </div>
    <label htmlFor="hs-checkbox-archive" className="ms-3">
      <span className="block text-sm font-semibold text-gray-800">Archive</span>
      <span id="hs-checkbox-archive-description" className="block text-sm text-gray-600">Notify me when this action happens.</span>
    </label>
  </div>

  <div className="relative flex items-start">
    <div className="flex items-center h-5 mt-1">
      <input id="hs-checkbox-archive" name="hs-checkbox-archive" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="hs-checkbox-archive-description"/>
    </div>
    <label htmlFor="hs-checkbox-archive" className="ms-3">
      <span className="block text-sm font-semibold text-gray-800">Archive</span>
      <span id="hs-checkbox-archive-description" className="block text-sm text-gray-600">Notify me when this action happens.</span>
    </label>
  </div>

  <div className="relative flex items-start">
    <div className="flex items-center h-5 mt-1">
      <input id="hs-checkbox-archive" name="hs-checkbox-archive" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="hs-checkbox-archive-description"/>
    </div>
    <label htmlFor="hs-checkbox-archive" className="ms-3">
      <span className="block text-sm font-semibold text-gray-800">Archive</span>
      <span id="hs-checkbox-archive-description" className="block text-sm text-gray-600">Notify me when this action happens.</span>
    </label>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page