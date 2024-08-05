'use client'

import { useState } from 'react';
import styles from "./create.module.css";

const Create = () => {
    const [showAssignmentOptions, setShowAssignmentOptions] = useState(false);
    const [assignmentOptions, setAssignmentOptions] = useState(null);
    const [showClassroomOptions, setShowClassroomOptions] = useState(false);

    const handleShowAssignmentOptions = () => {
        setShowAssignmentOptions(true);
        setShowClassroomOptions(false);
        setAssignmentOptions(null); // Reset assignment options when switching
    };

    const handleShowClassroomOptions = () => {
        setShowAssignmentOptions(false);
        setShowClassroomOptions(true);
        setAssignmentOptions(null); // Reset assignment options when switching
    };

    const handleAssignmentOptions = (option) => {
        setShowAssignmentOptions(false);
        setAssignmentOptions(option);
    };

    return (
        <div className="page">
            <h1 className={styles.pageTitle}>Create New</h1>

            <p>What would you like to create?</p>

            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={handleShowClassroomOptions}>Classroom</button>
                <button className={styles.button} onClick={handleShowAssignmentOptions}>Assignment</button>
            </div>

            {showAssignmentOptions && (
                <div className={styles.section}>
                    <h2>New Assignment Options</h2>
                    <p>Select a method to make the new assignment</p>

                    <div className={styles.assignmentOptions}>
                        <button onClick={() => handleAssignmentOptions("single")}>Question by Question</button>
                        <button onClick={() => handleAssignmentOptions("generate")}>Start with AI Generation</button>
                        <button onClick={() => handleAssignmentOptions("backwards")}>Generate Assignment from Expected Submission</button>
                        <button onClick={() => handleAssignmentOptions("upload")}>Upload or Import</button>
                    </div>
                </div>
            )}

            {assignmentOptions === "single" && (
                <div className={styles.section}>
                    <h2>Question by Question</h2>
                    <p>Provide the details below</p>
                </div>
            )}

            {assignmentOptions === "generate" && (
                <div className={styles.section}>
                    <h2>Start with AI Generation</h2>
                    <p>Provide the details below</p>
                </div>
            )}

            {assignmentOptions === "backwards" && (
                <div className={styles.section}>
                    <h2>Generate Assignment from Expected Submission</h2>
                    <p>Provide the details below</p>
                </div>
            )}

            {assignmentOptions === "upload" && (
                <div className={styles.section}>
                    <h2>Upload or Import</h2>
                    <p>Provide the details below</p>
                </div>
            )}

            {showClassroomOptions && (
                <div className={styles.section}>
                    <h2>New Classroom Options</h2>
                    <p>Provide the details below to get started!</p>

                    <form className={styles.form}>
                        <input type="text" placeholder="Class Name..." />
                        <input type="text" placeholder="Class Description..." />
                        <input type="text" placeholder="Class Code..." />
                        <button className={styles.button}>Create Classroom</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Create;
