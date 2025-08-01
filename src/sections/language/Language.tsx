// import Image from "../../assets/images/qq-brand-image.png";
// import Button from "../utils/Button.jsx";
import { useStore } from "../../globalState/useStore.js";
import { useTranslation } from "react-i18next";
import { LanguageIntroText } from "./LanguageIntroText";
import { MultipleScreenTextInput } from "./MultipleScreenTextInput";
import { ConsentPageTextInput } from "./ConsentPageTextInput.js";
import { AccessControlTextInput } from "./AccessControlTextInput.js";
import { WelcomeScreenTextInput } from "./WelcomeScreenTextInput.js";
import { MobileWelcomeScreenTextInput } from "./MobileWelcomeScreenTextInput.js";
import { PresortTextInput } from "./PresortTextInput.js";
import { MobilePresortTextInput } from "./MobilePresortTextInput.js";
import { RefineEvaluationsTextInput } from "./RefineEvaluationsTextInput.js";
import { MobileRefineEvaluationsTextInput } from "./MobileRefineEvaluationsTextInput.js";
import { SortTextInput } from "./SortTextInput.js";
import { MobileSortTextInput } from "./MobileSortTextInput.js";
import { PostsortTextInput } from "./PostsortTextInput.js";
import { MobilePostsortTextInput } from "./MobilePostsortTextInput.js";
import { SurveyTextInput } from "./SurveyTextInput.js";
import { MobileSurveyTextInput } from "./MobileSurveyTextInput.js";
import { SubmitTextInput } from "./SubmitTextInput.js";
import { MobileSubmitTextInput } from "./MobileSubmitTextInput.js";
import { FailureTextInput } from "./EmailTextInput.js";
import { ProjectLinkingTextInput } from "./ProjectLinkingTextInput.js";
import { UploadAndReadLanguageXml } from "./UploadAndReadLanguageXml.js";
import { DownloadLanguageXml } from "./DownloadLanguageXml.js";

const getDisplayMode = (state) => state.displayMode;

const Language = () => {
  const displayMode = useStore(getDisplayMode);
  const { t } = useTranslation();

  // let display;
  // if (displayMode === "beginner") {
  //   display = true;
  // } else {
  //   display = false;
  // }

  return (
    <div className="flex flex-col items-center justify-center pb-[100px]">
      <h1 className="text-center">Language.xml</h1>
      <h2>{t("languageSubtitle")}</h2>

      <div className="flex flex-row w-2/3 justify-between mt-4 mb-6">
        <UploadAndReadLanguageXml />
        <DownloadLanguageXml />
      </div>
      {displayMode && <LanguageIntroText />}
      <MultipleScreenTextInput />
      <ConsentPageTextInput />
      <AccessControlTextInput />
      <WelcomeScreenTextInput />
      <MobileWelcomeScreenTextInput />
      <PresortTextInput />
      <MobilePresortTextInput />
      <RefineEvaluationsTextInput />
      <MobileRefineEvaluationsTextInput />
      <SortTextInput />
      <MobileSortTextInput />
      <PostsortTextInput />
      <MobilePostsortTextInput />
      <SurveyTextInput />
      <MobileSurveyTextInput />
      <SubmitTextInput />
      <MobileSubmitTextInput />
      <FailureTextInput />
      <ProjectLinkingTextInput />
    </div>
  );
};

export { Language };
