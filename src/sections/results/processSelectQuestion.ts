import { Paragraph, TextRun } from "docx";
import { stripHtml } from "./stripHtml";

const processSelectQuestion = (entry, question, index, indentValue) => {
  let addIndentValue = +indentValue + 200;
  let options = stripHtml(question.options);
  options = options.split(",");

  let respondentResponse2: any = [];
  let response1 = stripHtml(entry);
  let response3 = response1.split(":");
  let response2 = response3[1].split(",");

  response2.forEach((value) => {
    let value2 = +value.trim();
    let value3 = options[value2 - 1];
    respondentResponse2.push(value3);
  });

  let entry1 = entry.split(":");
  let indicator = true;
  if (entry1[1].trim() === "no response") {
    indicator = false;
  }

  let respondentResponse = respondentResponse2.join(", ");

  let response = [
    new Paragraph({
      children: [
        // new TextRun({
        //   text: statementNumber2,
        //   bold: true,
        // }),
        new TextRun({
          text: `(Item ${index + 1})  ${stripHtml(question.label)}`,
          bold: true,
        }),
      ],
      indent: {
        start: indentValue,
      },
      spacing: {
        before: 100,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Type: Selection Input`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: question.note ? `Note: ${stripHtml(question.note)}` : `Note: n/a`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Options: ${stripHtml(question?.options)}`,
          bold: false,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: indicator ? `Response: ${stripHtml(entry)} - ` : `Response: - `,
          bold: false,
        }),
        new TextRun({
          text: indicator ? `${respondentResponse}` : `no response`,
          bold: true,
        }),
      ],
      indent: {
        start: addIndentValue,
      },
    }),
  ];
  return response;
};

export { processSelectQuestion };
