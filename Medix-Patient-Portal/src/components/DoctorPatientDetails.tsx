import React from "react";
import { useParams } from 'react-router-dom';

interface DoctorPatientParams extends Record<string, string | undefined> {
  doctorId?: string;
  patientId?: string;
}
export const DoctorPatientDetails: React.FC = () => {
    const { doctorId, patientId } = useParams<DoctorPatientParams>();
    if (!doctorId || !patientId) {
        return <p>Missing doctor or patient ID</p>;
    }   

    const doctorIdnew=Number(doctorId);
    const patientIdnew=Number(patientId);
    if (isNaN(Number(doctorId)) || isNaN(Number(patientId))) {
        return <p>Invalid doctor or patient ID</p>;
    }
    return (    
        <>
        <h1>Doctor Patient Details</h1>
        <p>Doctor ID: {doctorIdnew}</p>
        <p>Patient ID: {patientIdnew}</p>
        </>)}