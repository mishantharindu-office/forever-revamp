import { useContext } from "react";
import { Dropdown } from "semantic-ui-react";
// import { LangContext } from "../pages/_app";

const countryOptions = [
  { key: "uk", value: "en", flag: "uk", text: "English" },
  { key: "lk", value: "lk", flag: "lk", text: "Sinhala" },
  { key: "lkt", value: "lkt", flag: "lk", text: "Tamil" },
];
function LangDropDown() {
  const { Language, setLanguage } = useContext(LangContext);

  function changeLang(val) {
    setLanguage(val);
  }

  if (Language === "en") {
    return (
      <Dropdown
        options={countryOptions}
        defaultValue={countryOptions[0].value}
        className={"border border-none"}
        onChange={(e, data) => {
          // changeLang(e.target.value);
          changeLang(data.value);
        }}
      />
    );
  } else if (Language === "lk") {
    return (
      <Dropdown
        options={countryOptions}
        defaultValue={countryOptions[1].value}
        className={"border border-none"}
        onChange={(e, data) => {
          // changeLang(e.target.value);
          changeLang(data.value);
        }}
      />
    );
  } else {
    return (
      <Dropdown
        options={countryOptions}
        defaultValue={countryOptions[2].value}
        className={"border border-none"}
        onChange={(e, data) => {
          // changeLang(e.target.value);
          changeLang(data.value);
        }}
      />
    );
  }
}

export default LangDropDown;
