import React from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const ExperienceItem = ({ time, field, location, description }) => (
    <div className="work__div border-bottom mb-4">
        <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
        <div className="o-title-exp mb-2 d-flex flex-column">
            <strong className="font-weight-normal o-text-purple">{field}</strong>
            <small className="text-muted">{location}</small>
        </div>
        <p className="text-justify o-font-sm">{description}</p>
    </div>  
);

class Experiences extends React.Component{

    state = {
        experiences: [
            {id: 1, type: 'work', time: '05.2020 - Present ', field: 'Quality Assurance Tester', location: 'Gameloft', description: 'A company that produces the games beside the testing them,in the present it is a household name with a huge portofolio to atest its legacy.'},
            {id: 2, type: 'work', time: '04.2017 - 05.2018 ', field: 'Quality Assurance Tester', location: 'Quantic Lab', description: 'An outsourcing company focused on QA services for all the available platforms, specializing in games but also dealing with applications.'},
            {id: 3, type: 'work', time: '08.2019 - 12.2019 ', field: 'Data Analyst', location: 'Finprom', description: 'An outsourcing company that deals with big italian banks and helps them with the logistics, data analysis and data entry.'},
            {id: 4, type: 'education', time: '2020 - Present', field: 'Boot Camp ( Web Development )', location: 'Scoala Informala de IT', description: 'Took part in a course in the field of Web Development, mainly focused on the front-end part using javascript and its related tricks of the trade.'},
            {id: 5, type: 'education', time: '2016 - 2018', field: 'Bachelor Degree ( Unfinished )', location: 'Faculty of Letters', description: ' English-Romanian '},
            {id: 5, type: 'education', time: '2019 - 2020', field: 'Bachelor Degree ( Unfinished )', location: 'Faculty of Informatics', description: 'Computer Science'},
        ]
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaBriefcase /></i>
                        <span className="font-weight-bold">Work Experience</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'work').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaUniversity /></i>
                        <span className="font-weight-bold">Education</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'education').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Experiences;