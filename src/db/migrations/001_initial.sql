-- Enable UUID extension
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('candidate', 'company')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE candidates (
  user_id TEXT PRIMARY KEY REFERENCES users(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  search_type TEXT[] NOT NULL,
  skills TEXT[] NOT NULL,
  tools TEXT[] NOT NULL,
  years_of_experience INTEGER NOT NULL,
  cv_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies (
  user_id TEXT PRIMARY KEY REFERENCES users(id),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  is_premium BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE job_posts (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(user_id),
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  remote_days INTEGER NOT NULL,
  is_automation BOOLEAN NOT NULL,
  is_manual BOOLEAN NOT NULL,
  salary_min INTEGER NOT NULL,
  salary_max INTEGER NOT NULL,
  skills TEXT[] NOT NULL,
  description TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE missions (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(user_id),
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  remote_days INTEGER NOT NULL,
  is_automation BOOLEAN NOT NULL,
  is_manual BOOLEAN NOT NULL,
  duration INTEGER NOT NULL,
  daily_rate INTEGER NOT NULL,
  skills TEXT[] NOT NULL,
  description TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);