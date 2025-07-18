// @ts-ignore
// import appState from "../../GlobalState/appState";
import defObject from "./textareaDefaultObject";
import defObject_JA from "./textAreaDefaultObject_JA";
import { useStore } from "../../GlobalState/useStore";

const showSectionDefaults = (section) => {
  console.log("test");
  let currentLang: string = localStorage.getItem("i18nextLng") || '""';

  console.log(currentLang);

  let defObj;
  if (currentLang === "ja") {
    defObj = defObject_JA();
  } else {
    defObj = defObject();
  }

  let selectorArray: string[] = [];

  const setDefaults = (array) => {
    array.forEach((item) => {
      localStorage.setItem(item, defObj[item]);
      useStore.setState((state) => ({ ...state, [item]: defObj[item] }));
      //   appState[item] = defObj[item];
    });
  };

  if (section === "multipleScreens") {
    selectorArray = [
      "btnHelp",
      "footerTextSize",
      "footerCardHeight",
      "btnNext",
      "stepCompleted",
      "screenOrientationText",
      "mobileTextSize",
      "mobileViewSize",
      "mobileModalButtonCancel",
      "expandViewMessage",
    ];

    setDefaults(selectorArray);
  }

  if (section === "consentDef") {
    selectorArray = [
      "consentTitleBarText",
      "consentText",
      "consentHelpModalHead",
      "consentHelpModalText",
      "btnNextConsent",
      "btnHelpConsent",
    ];

    setDefaults(selectorArray);
  }

  if (section === "accessDef") {
    selectorArray = [
      "loginWelcomeText",
      "loginHeaderText",
      "loginPartIdText",
      "accessCodeText",
      "accessInputText",
      "partIdWarning",
      "accessCodeWarning",
      "loginSubmitButtonText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "welcomeDef") {
    selectorArray = [
      "landingHead",
      "welcomeMessage",
      "landingHelpModalHead",
      "landingHelpModalText",
      "btnNextLanding",
      "btnHelpLanding",
    ];

    setDefaults(selectorArray);
  }

  if (section === "localDef") {
    selectorArray = [
      "LocalHeader",
      "PartIdText",
      "UsercodeText",
      "LocalStartButtonText",
      "LocalDeleteButtonText",
      "LocalDownloadButtonText",
      "StoredQsortsHeaderText",
      "LocalDeleteModalHead",
      "LocalDeleteModalText",
      "LocalParticipantsText",
      "LocalSaveBeforeDeleteModalHeader",
      "LocalSaveBeforeDeleteModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "presortDef") {
    selectorArray = [
      "loginFirst",
      "titleBarText",
      "presortStatements",
      "presortAgreement",
      "presortNeutral",
      "presortDisagreement",
      "presortImageSortInstructions",
      "presortModalHead",
      "presortModalText",
      "presortPreventNavModalHead",
      "presortPreventNavModalText",
      "presortFinishedModalHead",
      "presortFinishedModalText",
      "presortOnPageInstructions",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobilePresortDef") {
    selectorArray = [
      "mobilePresortConditionsOfInstruction",
      "mobilePresortCompletedLabel",
      "mobilePresortAssignLeft",
      "mobilePresortAssignRight",
      "mobilePresortRedoModalHead",
      "mobilePresortRedoModalText",
      "mobilePresortRedoModalConfirmButton",
      "mobilePresortEvaluationsComplete",
      "mobilePresortHelpModalHead",
      "mobilePresortHelpModalText",
      "mobilePresortFinishedModalHead",
      "mobilePresortFinishedModalText",
      "mobilePresortPreventNavModalHead",
      "mobilePresortPreventNavModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "refineDef") {
    selectorArray = [
      "thinningPreventNavModalHead",
      "thinningPreventNavModalText",
      "thinningConfirmModalHead",
      "thinningConfirmModalText",
      "initialInstructionPart1",
      "initialInstructionPart2",
      "initialInstructionPart3",
      "agreeMostText",
      "agreeLeastText",
      "finalInstructions",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobileRefineDef") {
    selectorArray = [
      "moveTopMobileHead",
      "moveTopMobileText",
      "moveAllTopMobileText",
      "moveTopMobileButtonOK",
      "mobileModalButtonCancel",
      "mobileThinConditionsOfInstruction",
      "mobileThinSubmitButtonText",
      "mobileThinSelectedText",
      "mobileThinHelpModalHead",
      "mobileThinHelpModalText",
      "mobileThinPreventNavModalHead",
      "mobileThinPreventNavModalText",
      "mobileThinProcessCompleteMessage",
      "mobileGuidanceModalRight1Header",
      "mobileGuidanceModalRight1Text",
      "mobileGuidanceModalRight2Header",
      "mobileGuidanceModalRight2Text",
      "mobileGuidanceModalLeft1Header",
      "mobileGuidanceModalLeft1Text",
      "mobileGuidanceModalLeft2Header",
      "mobileGuidanceModalLeft2Text",
      "mobileThinScrollBottomModalHead",
      "mobileThinScrollBottomModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "sortDef") {
    selectorArray = [
      "sortHelpModalHead",
      "sortHelpModalText",
      "sortAgreement",
      "sortDisagreement",
      "condOfInst",
      "sortingCompleteModalHead",
      "sortingCompleteModalText",
      "sortPreventNavModalHead",
      "sortPreventNavModalText",
      "sortOverloadedColumnModalHead",
      "sortOverloadedColumnModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobileSortDef") {
    selectorArray = [
      "mobileSortSwapModalHead",
      "mobileSortSwapModalText",
      "mobileSortSwapModalConfirmButton",
      "mobileSortConditionsOfInstruction",
      "mobileSortHelpModalHead",
      "mobileSortHelpModalText",
      "mobileSortScrollBottomModalHead",
      "mobileSortScrollBottomModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "postsortDef") {
    selectorArray = [
      "postsortHeader",
      "postsortInstructions",
      "placeholder",
      "postsortAgreement",
      "postsortDisagreement",
      "postsortModalHead",
      "postsortModalText",
      "postsortPreventNavModalHead",
      "postsortPreventNavModalText",
      "postsortBackButton",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobilePostsortDef") {
    selectorArray = [
      "mobilePostsortPreventNavModalHead",
      "mobilePostsortPreventNavModalText",
      "mobilePostsortSortbarText",
      "mobilePostsortPlaceholder",
      "mobilePostsortHelpModalHead",
      "mobilePostsortHelpModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "surveyDef") {
    selectorArray = [
      "surveyHeader",
      "surveyModalHead",
      "surveyModalText",
      "surveyPreventNavModalHead",
      "surveyPreventNavModalText",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobileSurveyDef") {
    selectorArray = ["mobileSurveyHelpModalHead", "mobileSurveyHelpModalText"];

    setDefaults(selectorArray);
  }

  if (section === "submitDef") {
    selectorArray = [
      "btnTransfer",
      "transferHead",
      "transferTextAbove",
      "transferTextBelow",
      "transferOkModalHeader",
      "transferOkModalText",
      "transferFailModalHeader",
      "transferFailModalText",
      "fallbackMessage",
      "btnDownload",
      "goodbyeMessage",
    ];

    setDefaults(selectorArray);
  }

  if (section === "mobileSubmitDef") {
    selectorArray = ["mobileSortTitleBar"];

    setDefaults(selectorArray);
  }

  if (section === "localSubmitDef") {
    selectorArray = [
      "LocalSaveDataButton",
      "LocalSubmitSuccessModalHeader",
      "LocalSubmitSuccessModalText",
      "ReturnToLocalPanelButtonText",
    ];

    setDefaults(selectorArray);
  }
  if (section === "emailDef") {
    selectorArray = [
      "emailSubmitBtn",
      "emailCopyResultsBtn",
      "emailCopyAddressBtn",
      "copySuccessMessage",
      "copyFailMessage",
      "defaultEmailFailModalText",
      "emailBodyMessage",
    ];

    setDefaults(selectorArray);
  }
  if (section === "linkingDef") {
    selectorArray = ["linkingFallbackMessage", "linkingBtnText"];

    setDefaults(selectorArray);
  }
};

export default showSectionDefaults;
