import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";
// import showRefImage from "./showRefImage";
import { useStore } from "../../globalState/useStore";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;
const getMobilePresortConditionsOfInstruction = (state) =>
  state.mobilePresortConditionsOfInstruction;
const getMobilePresortCompletedLabel = (state) => state.mobilePresortCompletedLabel;
const getMobilePresortAssignLeft = (state) => state.mobilePresortAssignLeft;
const getMobilePresortAssignRight = (state) => state.mobilePresortAssignRight;
const getMobilePresortRedoModalHead = (state) => state.mobilePresortRedoModalHead;
const getMobilePresortRedoModalText = (state) => state.mobilePresortRedoModalText;
const getMobilePresortRedoModalConfirmButton = (state) => state.mobilePresortRedoModalConfirmButton;
const getMobilePresortEvaluationsComplete = (state) => state.mobilePresortEvaluationsComplete;
const getMobilePresortHelpModalHead = (state) => state.mobilePresortHelpModalHead;
const getMobilePresortHelpModalText = (state) => state.mobilePresortHelpModalText;
const getMobilePresortFinishedModalHead = (state) => state.mobilePresortFinishedModalHead;
const getMobilePresortFinishedModalText = (state) => state.mobilePresortFinishedModalText;
// const getMobilePresortProcessCompleteMessage = (state) => state.mobilePresortProcessCompleteMessage;
const getMobilePresortPreventNavModalHead = (state) => state.mobilePresortPreventNavModalHead;
const getMobilePresortPreventNavModalText = (state) => state.mobilePresortPreventNavModalText;

const MobilePresortTextInput = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);
  const mobilePresortConditionsOfInstruction = useStore(getMobilePresortConditionsOfInstruction);
  const mobilePresortCompletedLabel = useStore(getMobilePresortCompletedLabel);
  const mobilePresortAssignLeft = useStore(getMobilePresortAssignLeft);
  const mobilePresortAssignRight = useStore(getMobilePresortAssignRight);
  const mobilePresortRedoModalHead = useStore(getMobilePresortRedoModalHead);
  const mobilePresortRedoModalText = useStore(getMobilePresortRedoModalText);
  const mobilePresortRedoModalConfirmButton = useStore(getMobilePresortRedoModalConfirmButton);
  const mobilePresortEvaluationsComplete = useStore(getMobilePresortEvaluationsComplete);
  const mobilePresortHelpModalHead = useStore(getMobilePresortHelpModalHead);
  const mobilePresortHelpModalText = useStore(getMobilePresortHelpModalText);
  const mobilePresortFinishedModalHead = useStore(getMobilePresortFinishedModalHead);
  const mobilePresortFinishedModalText = useStore(getMobilePresortFinishedModalText);
  // const mobilePresortProcessCompleteMessage = useStore(getMobilePresortProcessCompleteMessage);
  const mobilePresortPreventNavModalHead = useStore(getMobilePresortPreventNavModalHead);
  const mobilePresortPreventNavModalText = useStore(getMobilePresortPreventNavModalText);

  const handleRefImage = (e: any) => {
    // showRefImage(e.target.id);
  };
  const handleShowDefaults = (e: any) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e: any) => {
    console.log("handleTextChange", e.target.value);
    setText(e.target.name, e.target.value);
  };

  const handleClearAll = (e: any) => {
    clearSection(e.target.id);
  };

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm ">
      <div className="flex flex-row justify-between mb-4">
        <h2>7. Mobile Presort Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="mobilePresortDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="mobilePresortClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="mobilePresortImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="7-1. Mobile Presort Instructions"
          name="mobilePresortConditionsOfInstruction"
          value={mobilePresortConditionsOfInstruction}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-2. Evaluated Statements Box Label`}
          name="mobilePresortCompletedLabel"
          value={mobilePresortCompletedLabel}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-3. Left Assignment Label`}
          name="mobilePresortAssignLeft"
          value={mobilePresortAssignLeft}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-4. Right Assignment Label`}
          name="mobilePresortAssignRight"
          value={mobilePresortAssignRight}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-5. Re-Evaluation Modal Title`}
          name="mobilePresortRedoModalHead"
          value={mobilePresortRedoModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-6. Re-Evaluation Modal Text`}
          name="mobilePresortRedoModalText"
          value={mobilePresortRedoModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label={`7-7. Re-Evaluation Modal Confirm Button`}
          name="mobilePresortRedoModalConfirmButton"
          value={mobilePresortRedoModalConfirmButton}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[80px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-8. Presort Evaluations Complete"
          name="mobilePresortEvaluationsComplete"
          height={150}
          value={mobilePresortEvaluationsComplete}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="7-9. Greeting Modal Title Text"
          name="mobilePresortHelpModalHead"
          value={mobilePresortHelpModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-10. Greeting Modal Main Text"
          name="mobilePresortHelpModalText"
          height={150}
          value={mobilePresortHelpModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />

        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="7-11. Presort Finished Modal Title"
          name="mobilePresortFinishedModalHead"
          value={mobilePresortFinishedModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center`}
          label="7-12. Presort Finished Modal Text"
          name="mobilePresortFinishedModalText"
          height={150}
          value={mobilePresortFinishedModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText={`flex-1 mt-1 ml-2 block min-w-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none`}
          label="7-13. Prevent Navigation Modal Title"
          name="mobilePresortPreventNavModalHead"
          value={mobilePresortPreventNavModalHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />

        <UserTextAreaInput
          classNameText={`flex-1 ml-2 mt-1  self-start min-w-[400px] h-[60px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal`}
          classNameLabel={`w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none self-center has-[:focus]:font-bold`}
          label="7-14. Prevent Navigation Modal Text"
          name="mobilePresortPreventNavModalText"
          height={150}
          value={mobilePresortPreventNavModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { MobilePresortTextInput };
