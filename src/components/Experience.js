import React from 'react'
import { experienceData } from '../data/Data'
import { OfficeBuildingIcon  } from "@heroicons/react/solid";

function Experience() {
  return (
    <section id="experience">
        <div className="flex flex-col w-full text-center lg:px-40">
          <OfficeBuildingIcon className="mx-auto inline-block w-14 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h1>
        </div>

        <div className='container px-5 py-10 mx-auto g:w-4/5 sm:mx-auto sm:mb-2'>
        <div class="grid grid-cols-6 gap-4 text-lg">
            {experienceData.map((exp) => (
                <>
                    <div className='col-start-1 mb-auto'>
                        <div><i>{exp.dates}</i></div>
                    </div>
                    <div className='col-span-4 col-start-3 whitespace-break-spaces mb-3'>
                        <div className='mb-3'><b>{exp.jobTitle} - {exp.company}</b></div>
                        <div >{exp.description}</div>
                    </div>
                </>
            ))}
            {/* TODO: have it never go out the page */}
        </div>
        </div>
    </section>
  )
}

export default Experience