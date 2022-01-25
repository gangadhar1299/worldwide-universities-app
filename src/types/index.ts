export interface University {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  "state-province": string;
  web_pages: string[];
  shortName: string;
}

export interface Country {
  name: string;
  code: string;
}

export interface UniversitySearchOptions {
  country: string;
  name?: string;
}
