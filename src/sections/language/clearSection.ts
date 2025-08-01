import { useStore } from "../../globalState/useStore.js";

const clearSection = (array) => {
  array.forEach((item) => {
    localStorage.setItem(item, "");
    useStore.setState((state) => ({ ...state, [item]: "" }));
  });
};

const showSectionDefaults = (section) => {
  let selectorArray: string[] = [];

  if (section === "multipleClear") {
    selectorArray = [
      "btnHelp",
      "fontSizeText",
      "cardHeightText",
      "btnNext",
      "stepCompletedMessage",
      // "langLoginFirst",
      "screenOrientationText",
      "mobileTextSize",
      "mobileViewSize",
      "mobileModalButtonCancel",
      "expandViewMessage",
    ];

    clearSection(selectorArray);
  }

  if (section === "consentClear") {
    selectorArray = [
      "consentTitleBarText",
      "consentText",
      "consentHelpModalHead",
      "consentHelpModalText",
      "btnNextConsent",
      "btnHelpConsent",
    ];

    clearSection(selectorArray);
  }

  if (section === "accessClear") {
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

    clearSection(selectorArray);
  }

  if (section === "welcomeClear") {
    selectorArray = [
      "landingHead",
      "welcomeText",
      "landingHelpModalHead",
      "landingHelpModalText",
      "btnNextLanding",
      "btnHelpLanding",
    ];

    clearSection(selectorArray);
  }

  if (section === "localClear") {
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

    clearSection(selectorArray);
  }

  if (section === "presortClear") {
    selectorArray = [
      "logInFirst",
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

    clearSection(selectorArray);
  }

  if (section === "mobilePresortClear") {
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

    clearSection(selectorArray);
  }

  if (section === "refineClear") {
    selectorArray = [
      "initialInstructionPartNeg1",
      "initialInstructionPartNeg2",
      "currentlySelectedNumber",
      "numStatementsToSelect",
      "thinPageSubmitButton",
      "thinPageTitle",
      "thinningHelpModalHead",
      "thinningHelpModalText",
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

    clearSection(selectorArray);
  }

  if (section === "mobileRefineClear") {
    selectorArray = [
      "moveTopMobileHead",
      "moveTopMobileText",
      "moveAllTopMobileText",
      "moveTopMobileButtonOK",
      "mobileModalButtonCancel",
      "mobileThinSelectedText",
      "mobileThinConditionsOfInstruction",
      "mobileThinSubmitButtonText",
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

    clearSection(selectorArray);
  }

  if (section === "sortClear") {
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

    clearSection(selectorArray);
  }

  if (section === "mobileSortClear") {
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

    clearSection(selectorArray);
  }

  if (section === "postsortClear") {
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
      "postsortBackButtonText",
    ];

    clearSection(selectorArray);
  }

  if (section === "mobilePostsortClear") {
    selectorArray = [
      "mobilePostsortPreventNavModalHead",
      "mobilePostsortPreventNavModalText",
      "mobilePostsortSortbarText",
      "mobilePostsortPlaceholder",
      "mobilePostsortHelpModalHead",
      "mobilePostsortHelpModalText",
    ];

    clearSection(selectorArray);
  }

  if (section === "surveyClear") {
    selectorArray = [
      "surveyHeader",
      "surveyModalHead",
      "surveyModalText",
      "surveyPreventNavModalHead",
      "surveyPreventNavModalText",
    ];

    clearSection(selectorArray);
  }

  if (section === "mobileSurveyClear") {
    selectorArray = ["mobileSurveyHelpModalHead", "mobileSurveyHelpModalText"];

    clearSection(selectorArray);
  }

  if (section === "submitClear") {
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

    clearSection(selectorArray);
  }

  if (section === "mobileSubmitClear") {
    selectorArray = ["mobileSortTitleBar"];

    clearSection(selectorArray);
  }

  if (section === "localSubmitClear") {
    selectorArray = [
      "LocalSaveDataButton",
      "LocalSubmitSuccessModalHeader",
      "LocalSubmitSuccessModalText",
      "ReturnToLocalPanelButtonText",
    ];

    clearSection(selectorArray);
  }
  if (section === "emailClear") {
    selectorArray = [
      "checkInternetMessage",
      "btnTransferEmail",
      "submitFailMessage",
      "defaultEmailClientFail",
      "clipboardEmail",
      "clipboardResults",
      "copiedText",
      "downloadResultsButtonText",
      "btnDownload",
      "emailBodyMessage",
      "emailSubjectText",
    ];

    clearSection(selectorArray);
  }
  if (section === "linkingClear") {
    selectorArray = ["linkingFallbackMessage", "linkingBtnText"];

    clearSection(selectorArray);
  }
};

export default showSectionDefaults;
