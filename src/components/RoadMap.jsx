import React from 'react'
import MileStone from './MileStone'

const roadmap = [
    {
        id: 1,
        title : 'Project Kickoff',
        description : "Kick-off meeting and requirement gathering"
    },
    {
        id: 2,
        title : 'Design',
        description : "Design and Prototyping"
    },
    {
        id: 3,
        title : 'Development',
        description : "Development and Testing"
    },
    {
        id: 4,
        title : 'Deployment',
        description : "Deployment and Final Testing"
    },
    {
        id: 5,
        title : 'Maintenance',
        description : "Maintenance and Support"
    },
    
]

const RoadMap = () => {
    return (
        <section className='max-w-80 mx-auto'>
            <h1 className='font-semibold text-3xl text-center mb-16'>Roadmap</h1>
            {
                roadmap.map((roadmapItem, index) => (
                    <MileStone
                        key={index}
                        title={roadmapItem
                        .title}
                        description={roadmapItem.description}
                        lastItem={index === roadmap.length-1}/>
                ))
            }
        </section>
    )
}

export default RoadMap
