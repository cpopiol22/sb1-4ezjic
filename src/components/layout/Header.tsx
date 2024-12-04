import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              France-QA
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link to="/jobs" className="text-base font-medium text-white hover:text-indigo-50">
                Emplois
              </Link>
              <Link to="/missions" className="text-base font-medium text-white hover:text-indigo-50">
                Missions
              </Link>
              <Link to="/companies" className="text-base font-medium text-white hover:text-indigo-50">
                Entreprises
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to="/login"
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Inscription
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}