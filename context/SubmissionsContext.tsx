import React, { createContext, useContext, useState, ReactNode } from 'react';

type Submission = {
  name: string;
  surname: string;
  dob: string;
};

type SubmissionsContextType = {
  submissions: Submission[];
  addSubmission: (submission: Submission) => void;
};

const SubmissionsContext = createContext<SubmissionsContextType | undefined>(undefined);

interface SubmissionsProviderProps {
  children: ReactNode;
}

export const SubmissionsProvider: React.FC<SubmissionsProviderProps> = ({ children }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const addSubmission = (submission: Submission) => {
    setSubmissions((prevSubmissions) => [...prevSubmissions, submission]);
  };

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export const useSubmissions = (): SubmissionsContextType => {
  const context = useContext(SubmissionsContext);
  if (context === undefined) {
    throw new Error('useSubmissions must be used within a SubmissionsProvider');
  }
  return context;
};