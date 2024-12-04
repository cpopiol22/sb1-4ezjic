export type UserRole = 'candidate' | 'company';

export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export interface Candidate extends User {
  firstName: string;
  lastName: string;
  searchType: ('mission' | 'job')[];
  skills: string[];
  tools: string[];
  yearsOfExperience: number;
  cvUrl?: string;
}

export interface Company extends User {
  name: string;
  description: string;
  isPremium: boolean;
}

export interface JobPost {
  id: string;
  companyId: string;
  title: string;
  location: string;
  remoteDays: number;
  isAutomation: boolean;
  isManual: boolean;
  salary: {
    min: number;
    max: number;
  };
  skills: string[];
  description: string;
  createdAt: Date;
}

export interface Mission extends Omit<JobPost, 'salary'> {
  duration: number; // in days
  dailyRate: number;
}