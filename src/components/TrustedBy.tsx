'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const TrustedBy = () => {
    const { t } = useLanguage();

    // Professional company logos with working URLs
    const companies = [
        {
            name: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
            placeholder: 'Google'
        },
        {
            name: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
            placeholder: 'Microsoft'
        },
        {
            name: 'Apple',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg',
            placeholder: 'Apple'
        },
        {
            name: 'Netflix',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
            placeholder: 'Netflix'
        },
        {
            name: 'Spotify',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
            placeholder: 'Spotify'
        },
        {
            name: 'Airbnb',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
            placeholder: 'Airbnb'
        },
        {
            name: 'Uber',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
            placeholder: 'Uber'
        },
        {
            name: 'Meta',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
            placeholder: 'Meta'
        },
        {
            name: 'Tesla',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
            placeholder: 'Tesla'
        },
        {
            name: 'Amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
            placeholder: 'Amazon'
        }
    ];

    // Double duplication for seamless infinite scroll
    const duplicatedCompanies = [...companies, ...companies];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Clean header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                        {t('trustedBy.title')}
                    </p>
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                        {t('trustedBy.subtitle')}
                    </h2>
                </div>

                {/* Professional logo carousel */}
                <div className="relative overflow-hidden" style={{ height: '9rem' }}>
                    {/* Auto-scrolling container: width 200% to allow seamless 2x loop */}
                    <div className="absolute left-0 top-0 flex items-center animate-scroll-fast" style={{ width: '200%', height: '100%' }}>
                        {duplicatedCompanies.map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="flex-shrink-0 w-48 lg:w-56 px-6 flex items-center justify-center group"
                            >
                                {/* Image wrapper enforces consistent height and centers logo */}
                                <div className="h-20 lg:h-24 flex items-center justify-center w-full">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-12 lg:h-16 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="text-center hidden">
                                        <div className="text-lg lg:text-xl font-bold text-gray-700 dark:text-gray-300">
                                            {company.placeholder}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">LOGO</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;