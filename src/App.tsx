/** @jsxImportSource @emotion/react */

import React from "react";
import UniversityCard from "./components/UniversityCard";
import { useUniversities } from "./utils/university";
import SearchBar from "./components/SearchBar";
import { Container, Logo } from "./components";
import { COUNTRIES } from "./data/country-list";
import Select, { SingleValue } from "react-select";
import { Country, UniversitySearchOptions } from "./types";
import debounceFn from "debounce-fn";
import * as colors from "./styles/colors";
import * as mq from "./styles/media-queries";

const countryOptions = COUNTRIES.map((country) => ({
  name: country,
  code: country.toLowerCase(),
}));

function App() {
  const [country, setCountry] = React.useState({
    name: "India",
    code: "india",
  });

  const [universityName, setUniversityName] = React.useState("");

  const updateSearchQuery = (value: string) => setUniversityName(value);

  const debouncedUpdateSearchQuery = debounceFn(updateSearchQuery, {
    wait: 300,
  });

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    debouncedUpdateSearchQuery(evt.target.value);

  const handleCountryChange = (option: SingleValue<Country>) => {
    if (option?.code) setCountry(option);
  };

  return (
    <div>
      <header className="py-2 shadow">
        <Container className="d-flex align-items-center justify-content-between">
          <Logo />
          <div css={{ width: "20em", [mq.sm]: { display: "none" } }}>
            <CountrySelect onChange={handleCountryChange} value={country} />
          </div>
        </Container>
      </header>
      <Container>
        <div
          className="mt-5"
          css={{
            width: "20em",
            display: "none",
            [mq.sm]: { display: "block" },
          }}
        >
          <CountrySelect onChange={handleCountryChange} value={country} />
        </div>
        <h1 className="text-center my-5">
          Search any University across{" "}
          <span css={{ color: colors.primary }}>{country.name}</span>!
        </h1>
        <SearchBar
          name="university-name"
          id="university-name"
          placeholder="Enter University name to search"
          onChange={handleSearchChange}
        />
        <div className="mt-5">
          <Universities
            searchOptions={{ name: universityName, country: country.code }}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;

interface CountrySelectProps {
  onChange: (option: SingleValue<Country>) => void;
  value: Country;
}

function CountrySelect({ onChange, value }: CountrySelectProps) {
  return (
    <Select<Country>
      getOptionLabel={(country: Country) => country.name}
      getOptionValue={(country: Country) => country.code}
      options={countryOptions}
      onChange={onChange}
      value={value}
    />
  );
}

function Universities({
  searchOptions,
}: {
  searchOptions: UniversitySearchOptions;
}) {
  const { isLoading, isIdle, isError, data } = useUniversities(searchOptions);

  if (isLoading || isIdle) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong!</p>;

  if (!data?.length) return <p>Sorry, No Universities found!</p>;

  return (
    <div
      className="pb-5"
      css={{
        display: "flex",
        gap: "3em 6em",
        flexWrap: "wrap",
        "& > div": {
          flex: "1 0 20em",
        },
      }}
    >
      {data &&
        data.map((university) => (
          <UniversityCard key={university.name} university={university} />
        ))}
    </div>
  );
}
