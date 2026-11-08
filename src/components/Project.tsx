import React from "react";
import steamHeatmap from '../assets/images/steam-heatmap.png';
import '../assets/styles/Project.scss';

// Isi dengan link repository GitHub proyek ini kalau sudah diunggah.
// Selama masih kosong, gambar dan judul tampil tanpa link.
const steamRepo = "";

function Project() {
    const thumbnail = (
        <img src={steamHeatmap} className="zoom" alt="Heatmap korelasi dataset Steam Store Games" width="100%"/>
    );
    const title = <h2>Preprocessing Dataset Steam Store Games</h2>;

    return(
    <div className="projects-container" id="projects">
        <h1>Proyek</h1>
        <div className="projects-grid">
            <div className="project">
                {steamRepo ? (
                    <a href={steamRepo} target="_blank" rel="noreferrer">{thumbnail}</a>
                ) : thumbnail}
                {steamRepo ? (
                    <a href={steamRepo} target="_blank" rel="noreferrer">{title}</a>
                ) : title}
                <p>Proyek individu mata kuliah data preprocessing menggunakan dataset Steam Store Games dari Kaggle (Nik Davis). Tiga file data yang terpisah dibersihkan, digabungkan, dan diringkas menjadi satu dataset siap analisis, dari 27.075 baris menjadi 24.508 baris.</p>
                <p>Tahapannya meliputi penanganan missing value, penghapusan outlier harga dengan metode IQR (1.975 baris), pengubahan data tag dari format wide (372 kolom) ke format long dengan melt(), analisis korelasi antar kolom numerik, serta reduksi dimensi dengan PCA yang meringkas 8 kolom numerik menjadi 4 komponen utama dengan 82,23% variansi terjaga.</p>
                <p>Teknologi: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebook.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;