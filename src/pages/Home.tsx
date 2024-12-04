import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Building2 } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Le job board des testeurs en France
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Trouvez votre prochain poste en QA ou votre prochaine mission freelance. 
                  Connectez-vous avec les meilleures entreprises françaises à la recherche de talents en test logiciel.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/register"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Commencer
                  </Link>
                  <Link
                    to="/about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    En savoir plus <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pourquoi France-QA ?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            La plateforme dédiée aux testeurs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Search className="h-5 w-5 flex-none text-indigo-600" />
                Recherche avancée
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Filtrez les offres selon vos critères : localisation, télétravail, type de test, technologies...
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Briefcase className="h-5 w-5 flex-none text-indigo-600" />
                CDI & Freelance
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Trouvez des opportunités en CDI ou des missions freelance selon vos préférences.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Building2 className="h-5 w-5 flex-none text-indigo-600" />
                Entreprises vérifiées
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Accédez à un réseau d'entreprises françaises vérifiées à la recherche de testeurs qualifiés.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}