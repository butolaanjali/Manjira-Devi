import React from 'react';
import './studentlife.css'; // Import CSS file (create if needed)

function StudentLife() {
  return (
    <section className="student-life">
      <h2>Students Life @ Manjira Devi University</h2>
      <p>A community of curious seekers, inventors, researchers, poets, thinkers, musicians, artists, and scholars. </p>

      <div className="student-gallery">
        <div className="student-card">
        <img src="student1.jpeg"alt="Manjira Devi University" />
          
        </div>
        <div className="student-card">
          <img src="student2.jpeg" alt="Student 2" />
          
        </div>
        <div className="student-card">
          <img src="student3.jpeg" alt="Student 3" />
          
        </div>
      </div>
    </section>
  );
}

export default StudentLife;