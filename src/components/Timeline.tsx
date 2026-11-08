import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Pendidikan & Pengalaman</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Juli 2024 - sekarang"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">S1 Teknologi Informasi</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Gadjah Mada, Yogyakarta</h4>
            <p>
              Mahasiswa Teknologi Informasi yang memiliki minat dalam bidang data, jaringan komputer, dan keamanan siber, serta terus mengembangkan kemampuan teknis melalui pembelajaran dan proyek akademik.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Relawan Teknik Mengajar</h3>
            <h4 className="vertical-timeline-element-subtitle">PDM x Teknik Mengajar 2025, BEM KMFT UGM</h4>
            <p>
              Berpartisipasi dalam program pengabdian masyarakat di desa mitra yang berfokus pada edukasi dan pemberdayaan anak. Menyusun dan menyampaikan materi pembelajaran interaktif tentang sains dasar, percobaan fisika sederhana, dan konsep energi. Mendampingi kegiatan prakarya serta merancang permainan edukatif untuk meningkatkan kreativitas dan keterampilan anak.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Okt 2024 - Jul 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tim Teknis IoT Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Technocorner 2025, DTETI UGM</h4>
            <p>
              Merancang konsep, rangkaian acara, dan panduan teknis perlombaan IoT. Menyusun rubrik penilaian abstrak dengan 6 kriteria berbobot untuk 3 juri agar seleksi berjalan terstruktur dan objektif. Mempersiapkan dan menyelenggarakan babak final secara luring, serta berkoordinasi dengan juri, peserta, dan panitia lain agar seluruh tahapan sesuai jadwal.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Okt 2024 - Mei 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DMD Multimedia</h3>
            <h4 className="vertical-timeline-element-subtitle">Find IT! 2025, DTETI UGM</h4>
            <p>
              Mendukung produksi siaran langsung (live streaming) pada rangkaian acara Find IT! 2025 sebagai bagian dari tim multimedia. Mengoperasikan perangkat lunak OBS agar acara tersiarkan dengan lancar, dan mengatur pencahayaan serta audio agar kualitas gambar dan suara sesuai kebutuhan. Berkoordinasi dengan panitia dan pengisi acara agar tayangan sesuai dengan rangkaian acara.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Agu 2024 - Des 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Liaison Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">Enforian 2024, DTETI UGM</h4>
            <p>
              Bertugas sebagai penghubung antara panitia dan tamu, serta mendampingi mereka selama acara berlangsung. Berkoordinasi dengan divisi lain untuk memastikan kebutuhan peserta terpenuhi dan acara berjalan sesuai rundown. Mengatur alur perpindahan tamu antarlokasi agar rangkaian acara tepat waktu dan tertib.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;