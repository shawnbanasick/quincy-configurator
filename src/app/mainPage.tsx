import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Start from "../sections/start/Start.js";
import { v4 as uuidv4 } from "uuid";
import { Config } from "../sections/config/Config";
import { Language } from "../sections/language/Language";
import { Map } from "../sections/map/Map";
import { ToastContainer } from "react-toastify";
import { Statements } from "../sections/statements/Statements";
import { Databases } from "../sections/databases/Databases";
import { setLanguageDefaults } from "./setLanguageDefaults.js";
import { setLanguageSection_JA } from "./setLanguageSection_JA.js";
import { setLanguageSection_EN } from "./setLanguageSection_EN.js";
import { Results } from "../sections/results/Results.js";

// Add the following import statement for the declaration file

// const languages = ["en", "ru", "tm", "ja", "ko", "zh", "es", "fr", "de"];
const languages = ["en", "ja"];

export const MainPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  if (currentLanguage === "ja") {
    setLanguageSection_JA(currentLanguage);
  }

  if (currentLanguage === "en") {
    setLanguageSection_EN(currentLanguage);
  }

  const onChangeLanguage = (lng: string) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    // set default language for map.xml
    setLanguageDefaults(lng);
  };

  return (
    <main className="w-screen flex flex-col space-y-4  items-center justify-center">
      <ToastContainer />
      <Tabs className="h-screen w-screen p-2 ">
        <TabList>
          <Tab>Welcome</Tab>
          <Tab>1. Database Setup</Tab>
          <Tab>2. Configuration / Questionnaire</Tab>
          <Tab>3. Statements</Tab>
          <Tab>4. Q Sort Grid</Tab>
          <Tab>5. Language</Tab>
          <Tab>6. Web Host Setup</Tab>
          <Tab>7. Results Processing</Tab>
        </TabList>

        <TabPanel className="flex flex-col justify-center ">
          <div className="justify-self-right">
            <div className="pl-6">
              <div>{t("selectLanguage")}</div>
              <div className="space-x-2">
                {languages.map((lng) => {
                  return (
                    <button
                      onClick={() => onChangeLanguage(lng)}
                      key={uuidv4()}
                      className={clsx(
                        "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
                        {
                          "bg-opacity-100": lng === currentLanguage,
                          "bg-opacity-50": lng !== currentLanguage,
                        }
                      )}
                    >
                      {lng.toUpperCase()}
                    </button>
                  );
                })}
              </div>
              <Start />
            </div>
          </div>

          {/* <a
            href="https://github.com/ecomnazar/react-i18n-boilerplate"
            target="_blank"
            className="text-[#0c8492]"
          >
            https://github.com/ecomnazar/react-i18n-boilerplate
          </a> */}
        </TabPanel>

        <TabPanel>
          <Databases />
        </TabPanel>
        <TabPanel>
          <Config />
        </TabPanel>
        <TabPanel>
          <Statements />
        </TabPanel>
        <TabPanel>
          <Map />
        </TabPanel>
        <TabPanel>
          <Language />
        </TabPanel>

        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel>
          <Results />
        </TabPanel>
      </Tabs>
    </main>
  );
};
