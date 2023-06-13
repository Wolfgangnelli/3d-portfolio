/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../HOC'
import { experiences } from '../constants'
import { styles } from '../style'

const ExperienceCard = ({ title, company_name, icon, iconBg, date, points }) => (
    <VerticalTimelineElement 
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={<div className='flex justify-center items-center w-full h-full'><img src={icon} alt={company_name} className='w-[60%] h-[60%] object-contain' /></div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{company_name}</p>
        <ul className='list-disc ml-5 space-y-2 mt-5'>
          {points?.map((point, idx) => (
            <li key={`experience-point-${idx}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')