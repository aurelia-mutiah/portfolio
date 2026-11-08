import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Hapus item yang belum bisa kamu jelaskan saat wawancara
const labelsFirst = [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "PostgreSQL",
    "PyTorch"
];

const labelsSecond = [
    "Network Fundamentals",
    "CCNA: Introduction to Networks",
    "Cybersecurity (learning)"
];

const labelsThird = [
    "C++",
    "C#",
    "Git",
    "GitHub",
    "VS Code",
    "Jupyter Notebook",
    "Canva",
    "Microsoft Office"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analysis & Machine Learning</h3>
                    <p>Cleaning, integrating, and reducing real-world datasets with Python, plus coursework in exploratory data analysis, dimensionality reduction, and deep learning.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Networking & Security</h3>
                    <p>Studying how networks work through Cisco Networking Academy, and exploring cybersecurity as the next area to go deeper into.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGitAlt} size="3x"/>
                    <h3>Programming & Tools</h3>
                    <p>Writing code in several languages and working with version control, notebooks, and documentation tools in both solo and team projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;