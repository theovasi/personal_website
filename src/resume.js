import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './main.css';
import './resume.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faBuilding, faCalendar, faFileCode, faFolder } from "@fortawesome/free-regular-svg-icons";

class Resume extends React.Component {
	render() {
		return (
			<div className="mainContent">
				<div className="resume">
					<div className="info">
						<div className="name"><p>Theodoros Vasileiadis</p></div>
						<p className="location"><FontAwesomeIcon icon={faMap}/> London, UK</p>
						<p className="email"><FontAwesomeIcon icon={faEnvelope}/> theo.vasileiadis.work@gmail.com</p>
					</div>
					<div className="divider"/>
					<div className="section-name">Education</div>
					<Education school="Democritus University"
								degree="Electrical and Computer Engineering"
								startDate="October 2012" endDate="March 2018"
								description="Graduated with honours (Λίαν Καλώς) from the School of Engineering. Received a Master of Science degree."
					/>
					<div className="section-name">Experience</div>
					<Experience company="Amadeus" role="Software Development Engineer - Graduate"
								startDate="May 2019" endDate="Present"
								description="Focused on the back-end of the company's check-in and passenger management solution that orchestrates the world's air travel. Contributed effectively following a service based architecture to deliver an industry leading product that offers a wide feature set while maintaining high availability."
								technologies={["C++", "Python"]}
					/>
					<Experience company="Hellenic Army General Staff" role="Software Engineer"
								startDate="May 2018" endDate="December 2018"
								description="Contributed to the personnel management system that allows mobilisation authorities to organise Hellenic Army reserves and resources, schedule training exercises and mobilise reserves in case of emergency."
								technologies={["Java", "JavaScript"]}
					/>
					<div className="section-name">Skills</div>
					<Skills skills={["Python", "C++", "Java", "JavaScript", "React", "HTML/CSS", "pytest", "git", "SciPy",
									 "Machine Learning", "Natural Language Processing", "Test Driven Development",
									 "Agile Software Development"]}/>
					<div className="section-name">Projects</div>
					<Project name="browseWiki" description="Developed performant NLP pipeline to generate representations for text documents in a topic based vector space. Developed web a application for browsing Wikipedia using the Scatter/Gather search engine approach."
							 technologies={["Python", "Flask", "Scikit-learn"]}/>
					<Project name="go" description="Implementation of the Chinese board game Go that implements a MonteCarlo based game decision making algorithm to let users play against an intelligent computer opponent."
							 technologies={["Java"]}/>
					<Project name="cryptoMsg" description="Text chat application that uses the RSA cryptosystem to enable encrypted
communication between two users."
							 technologies={["Java"]}/>
					<Project name="crush" description="Clone of the candy crush game that runs on FPGA boards. Developed hardware controllers for the display and the keyboard input."
							 technologies={["VHDL"]}/>
				</div>
			</div>
		);
	}
}

class Experience extends React.Component {
	render() {
		return (
			<div className="resumeSection experience">
				<div className="wrapper-top"/>
				<p className="role"><FontAwesomeIcon icon={faBuilding}/> {this.props.company}: {this.props.role}</p>
				<p className="duration"><FontAwesomeIcon icon={faCalendar}/> {this.props.startDate} - {this.props.endDate}</p>
				<p className="description">{this.props.description}</p>
				<p className="technologies"><FontAwesomeIcon icon={faFileCode}/> {this.props.technologies.join(" / ")}</p>
				<div className="wrapper-bottom"/>
			</div>
		)
	}
}

class Education extends React.Component {
	render() {
		return (
			<div className="resumeSection education">
				<div className="wrapper-top"/>
				<p className="school"><FontAwesomeIcon icon={faBuilding}/> {this.props.school}: {this.props.degree}</p>
				<p className="duration"><FontAwesomeIcon icon={faCalendar}/> {this.props.startDate} - {this.props.endDate}</p>
				<p className="description">{this.props.description}</p>
				<div className="wrapper-bottom"/>
			</div>
		)
	}
}

class Skills extends React.Component {
	render() {
		const skills_bullet_list = [];
		for (let i=0; i<this.props.skills.length; i++) {
			skills_bullet_list.push(<span key={ uuidv4() }>{this.props.skills[i]}</span>);
			if (i !== this.props.skills.length-1) {
				skills_bullet_list.push(<span key={ uuidv4() } role="img" aria-label="Bullet point"> • </span>);
			}
		}

		return (
			<div className="skills" key={ uuidv4() } >
				{skills_bullet_list}
			</div>
		)
	}
}

class Project extends React.Component {
	render() {
		return (
			<div className="resume-project">
				<div className="wrapper-top"/>
				<p className="project-name"><FontAwesomeIcon icon={faFolder}/> {this.props.name}</p>
				<p className="project-description">{this.props.description}</p>
				<p className="project-technologies"><FontAwesomeIcon icon={faFileCode}/> {this.props.technologies.join(" / ")}</p>
				<div className="wrapper-bottom"/>
			</div>
		)
	}
}

export default Resume;
