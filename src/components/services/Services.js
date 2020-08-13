import React from 'react';
import Title from '../title/Title';
import {
    FaCodeBranch,
    FaPenFancy,
    FaMobileAlt
} from 'react-icons/fa';
import './Services.scss';

const ServiceBox = ({ Icon, title, subTitle, description }) => (
    <div className="services__div text-light m-2 d-flex flex-column align-items-center justify-content-center p-2 overflow-hidden">
        <div className="fas fa-magic o-font-lg mb-3 mt-3">
            <Icon />
        </div>
        <strong>{title}</strong>
        <small className="mb-3 services__small position-relative">{subTitle}</small>
        <p className="text-center o-font-sm">{description}</p>
    </div>
);

class Services extends React.Component{

    state = {
        services: [
            {
                Icon: FaCodeBranch,
                title: 'Software Development',
                subTitle: 'Web',
                description: 'Creation of UI & UX oriented components and minimal back-end solutions for a fair fee '
            },
            {
                Icon: FaMobileAlt,
                title: 'Quality Assurance ',
                subTitle: ' Manual ',
                description: 'Mainly on Mobile but contact for any platform (Automation Coming Soon)'
            },
            {
                Icon: FaPenFancy,
                title: 'Creative Writing & Input',
                subTitle: 'Lore & Marketing',
                description: 'Need a story for your app or the characters behind it? Get in touch!'   
            },
        ]
    }

    render(){
        return(
            <div className="services mb-5">
                <Title>Services</Title>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        this.state.services.map((item, index) => (
                            <ServiceBox key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Services;