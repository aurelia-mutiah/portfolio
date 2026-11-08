import React from "react";
import '../assets/styles/Certificates.scss';

type Certificate = {
    title: string;
    issuer: string;
    year?: string;
    link?: string;
};

// Isi year dan link kalau ada. Kalau dikosongkan, bagian itu tidak ditampilkan.
const certificates: Certificate[] = [
    { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy (DTETI UGM)", year: "", link: "" },
    { title: "Cleaning Data in Python", issuer: "DataCamp", year: "", link: "" },
    { title: "Exploratory Data Analysis in Python", issuer: "DataCamp", year: "", link: "" },
    { title: "Dimensionality Reduction in Python", issuer: "DataCamp", year: "", link: "" },
    { title: "Introduction to Statistics in Python", issuer: "DataCamp", year: "", link: "" },
    { title: "Introduction to Regression with statsmodels in Python", issuer: "DataCamp", year: "", link: "" },
    { title: "Intermediate Regression with statsmodels in Python", issuer: "DataCamp", year: "", link: "" },
    { title: "Introduction to Deep Learning with PyTorch", issuer: "DataCamp", year: "", link: "" },
    { title: "Intermediate Deep Learning with PyTorch", issuer: "DataCamp", year: "", link: "" },
    { title: "Deep Learning for Images with PyTorch", issuer: "DataCamp", year: "", link: "" },
    { title: "Deep Learning for Text with PyTorch", issuer: "DataCamp", year: "", link: "" },
    { title: "Transformer Models with PyTorch", issuer: "DataCamp", year: "", link: "" },
];

function Certificates() {
    return (
        <div className="certificates-container" id="certificates">
            <h1>Sertifikat</h1>
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <div className="certificate" key={index}>
                        <h3>{cert.title}</h3>
                        <p className="certificate-issuer">
                            {cert.issuer}{cert.year ? ` · ${cert.year}` : ""}
                        </p>
                        {cert.link ? (
                            <a href={cert.link} target="_blank" rel="noreferrer">Lihat sertifikat</a>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;