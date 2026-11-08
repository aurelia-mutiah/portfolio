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
    "Matplotlib",
    "PostgreSQL"
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
                    <p>Mempelajari pengolahan dan analisis data menggunakan Python, mulai dari membersihkan data, mengolah dataset, hingga memahami dasar-dasar machine learning dan deep learning.</p>
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
                    <p>Mempelajari dasar-dasar jaringan komputer melalui perkuliahan dan Cisco Networking Academy, serta mulai mendalami bidang keamanan siber sebagai salah satu minat utama.</p>
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
                    <p>Mengembangkan kemampuan pemrograman menggunakan beberapa bahasa serta memanfaatkan berbagai tools untuk menulis, menguji, dan mengelola kode dalam pengerjaan tugas dan proyek akademik.</p>
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