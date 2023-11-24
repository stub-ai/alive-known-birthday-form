import React, { useEffect, useState } from 'react';
import { useSubmissions } from '../context/SubmissionsContext';

type Submission = {
  name: string;
  surname: string;
  dob: string;
};

const SubmissionsList = () => {
  const { submissions } = useSubmissions();

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-5">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Previous Submissions
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full max-w-md mx-auto mt-5 text-center bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Surname</th>
              <th className="px-4 py-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {submissions.map((submission, index) => (
              <tr className={index % 2 === 0 ? 'bg-gray-100' : ''} key={index}>
                <td className="px-4 py-2">{submission.name}</td>
                <td className="px-4 py-2">{submission.surname}</td>
                <td className="px-4 py-2">{submission.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionsList;