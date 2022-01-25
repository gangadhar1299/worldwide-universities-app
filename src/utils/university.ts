import { useQuery } from "react-query";
import { University, UniversitySearchOptions } from "../types";
import { apiClient } from "./api-client";
import { abbreviate } from "./misc";

export function searchUniversities(searchOptions: UniversitySearchOptions) {
  return apiClient(
    `search?country=${searchOptions.country}&name=${searchOptions.name}`
  );
}

export function getUniversity(university: University) {
  return {
    ...university,
    shortName: abbreviate(university.name).toUpperCase(),
  };
}

export function useUniversities(searchOptions: UniversitySearchOptions) {
  const { data, ...queryStatus } = useQuery<University[], Error>(
    ["universities", searchOptions],
    () => searchUniversities(searchOptions)
  );

  return { ...queryStatus, data: data && data.map(getUniversity) };
}
