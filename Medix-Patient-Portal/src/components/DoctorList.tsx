import React from "react";
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
}

interface Patient {
  id: number;
  name: string;
}

// Dummy data
const doctors: Doctor[] = [
  { id: 1, name: 'Dr.Dithya' },
  { id: 2, name: 'Dr.Suresh' },
];

const patients: Patient[] = [
  { id: 101, name: 'Anagha' },
  { id: 102, name: 'Chandana' },
];

const DoctorList: React.FC = () => {
  return (
    <div>
      <h1>Doctors</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id} style={{ marginBottom: '1rem' }}>
          <h2>{doctor.name}</h2>
          {/* Link to doctor/patient page */}
          {patients.map((patient) => (
            <div key={patient.id}>
              <Link to={`/doctors/${doctor.id}/patients/${patient.id}`}>
                View {patient.name}'s Page
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
