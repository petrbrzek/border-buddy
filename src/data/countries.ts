// European countries and their neighbors data
export interface Country {
  name: string;
  code: string;
  neighbors: string[]; // Array of country codes
  emoji: string; // Flag emoji
}

export const countries: Country[] = [
  {
    name: "France",
    code: "FR",
    neighbors: ["ES", "AD", "MC", "IT", "CH", "DE", "LU", "BE"],
    emoji: "🇫🇷"
  },
  {
    name: "Germany",
    code: "DE",
    neighbors: ["DK", "PL", "CZ", "AT", "CH", "FR", "LU", "BE", "NL"],
    emoji: "🇩🇪"
  },
  {
    name: "Spain",
    code: "ES",
    neighbors: ["PT", "AD", "FR"],
    emoji: "🇪🇸"
  },
  {
    name: "Italy",
    code: "IT",
    neighbors: ["FR", "CH", "AT", "SI", "SM", "VA"],
    emoji: "🇮🇹"
  },
  {
    name: "United Kingdom",
    code: "GB",
    neighbors: ["IE"],
    emoji: "🇬🇧"
  },
  {
    name: "Ireland",
    code: "IE",
    neighbors: ["GB"],
    emoji: "🇮🇪"
  },
  {
    name: "Portugal",
    code: "PT",
    neighbors: ["ES"],
    emoji: "🇵🇹"
  },
  {
    name: "Belgium",
    code: "BE",
    neighbors: ["FR", "LU", "DE", "NL"],
    emoji: "🇧🇪"
  },
  {
    name: "Netherlands",
    code: "NL",
    neighbors: ["BE", "DE"],
    emoji: "🇳🇱"
  },
  {
    name: "Switzerland",
    code: "CH",
    neighbors: ["FR", "DE", "AT", "LI", "IT"],
    emoji: "🇨🇭"
  },
  {
    name: "Austria",
    code: "AT",
    neighbors: ["CH", "LI", "DE", "CZ", "SK", "HU", "SI", "IT"],
    emoji: "🇦🇹"
  },
  {
    name: "Poland",
    code: "PL",
    neighbors: ["DE", "CZ", "SK", "UA", "BY", "LT", "RU"],
    emoji: "🇵🇱"
  },
  {
    name: "Czech Republic",
    code: "CZ",
    neighbors: ["DE", "PL", "SK", "AT"],
    emoji: "🇨🇿"
  },
  {
    name: "Slovakia",
    code: "SK",
    neighbors: ["PL", "UA", "HU", "AT", "CZ"],
    emoji: "🇸🇰"
  },
  {
    name: "Hungary",
    code: "HU",
    neighbors: ["AT", "SK", "UA", "RO", "RS", "HR", "SI"],
    emoji: "🇭🇺"
  },
  {
    name: "Slovenia",
    code: "SI",
    neighbors: ["IT", "AT", "HU", "HR"],
    emoji: "🇸🇮"
  },
  {
    name: "Croatia",
    code: "HR",
    neighbors: ["SI", "HU", "RS", "BA", "ME"],
    emoji: "🇭🇷"
  },
  {
    name: "Greece",
    code: "GR",
    neighbors: ["AL", "MK", "BG", "TR"],
    emoji: "🇬🇷"
  },
  {
    name: "Bulgaria",
    code: "BG",
    neighbors: ["GR", "MK", "RS", "RO", "TR"],
    emoji: "🇧🇬"
  },
  {
    name: "Romania",
    code: "RO",
    neighbors: ["HU", "UA", "MD", "BG", "RS"],
    emoji: "🇷🇴"
  },
  {
    name: "Sweden",
    code: "SE",
    neighbors: ["NO", "FI"],
    emoji: "🇸🇪"
  },
  {
    name: "Norway",
    code: "NO",
    neighbors: ["SE", "FI", "RU"],
    emoji: "🇳🇴"
  },
  {
    name: "Finland",
    code: "FI",
    neighbors: ["SE", "NO", "RU"],
    emoji: "🇫🇮"
  },
  {
    name: "Denmark",
    code: "DK",
    neighbors: ["DE"],
    emoji: "🇩🇰"
  },
  {
    name: "Estonia",
    code: "EE",
    neighbors: ["LV", "RU"],
    emoji: "🇪🇪"
  },
  {
    name: "Latvia",
    code: "LV",
    neighbors: ["EE", "LT", "BY", "RU"],
    emoji: "🇱🇻"
  },
  {
    name: "Lithuania",
    code: "LT",
    neighbors: ["LV", "BY", "PL", "RU"],
    emoji: "🇱🇹"
  },
  {
    name: "Belarus",
    code: "BY",
    neighbors: ["LV", "LT", "PL", "UA", "RU"],
    emoji: "🇧🇾"
  },
  {
    name: "Ukraine",
    code: "UA",
    neighbors: ["PL", "SK", "HU", "RO", "MD", "BY", "RU"],
    emoji: "🇺🇦"
  },
  {
    name: "Moldova",
    code: "MD",
    neighbors: ["RO", "UA"],
    emoji: "🇲🇩"
  },
  {
    name: "Russia",
    code: "RU",
    neighbors: ["NO", "FI", "EE", "LV", "LT", "PL", "BY", "UA"],
    emoji: "🇷🇺"
  }
];

// Helper function to get a country by code
export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};

// Helper function to get a random country
export const getRandomCountry = (): Country => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

// Helper function to get all country codes
export const getAllCountryCodes = (): string[] => {
  return countries.map(country => country.code);
};

// Helper function to get country name by code
export const getCountryNameByCode = (code: string): string => {
  // First check if the country is in our main list
  const country = getCountryByCode(code);
  if (country) return country.name;
  
  // Handle special cases for countries not in our main list
  const specialCountries: Record<string, string> = {
    "AD": "Andorra",
    "MC": "Monaco",
    "SM": "San Marino",
    "VA": "Vatican City",
    "LI": "Liechtenstein",
    "BA": "Bosnia and Herzegovina",
    "ME": "Montenegro",
    "AL": "Albania",
    "MK": "North Macedonia",
    "RS": "Serbia",
    "TR": "Turkey"
  };
  
  return specialCountries[code] || code;
};