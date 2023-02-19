import { jsPDF } from "jspdf"
import 'jspdf-autotable'
/* import { useRuntimeConfig } from '#app'
const config = useRuntimeConfig() */

const product = ref(null)
const doc = ref(null)

const contentStartY = 65
const contentEndY = 280
const contentStartX = 15
const contentListOffset = 2.5
const lineSpacing = 4
const textWidth = 125
const headlineDistance = 5
const contentMargin = 5
const pageWrapInitialYPosition = 10

export const useProductPdf = () => {

  const getProduct = async (productId) => {

    console.log(productId)

    // const { data } = await useFetch(`${config.API_URL}funProductGet`,
    const { data } = await useFetch(`https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/stitch-vueadmin-ire-kgwnt/service/http_heo_coating/incoming_webhook/funProductGet`,
      {
        method: "POST",
        body: { id: productId }
      }
    )
    return data.value.item
  }

  const generateReport = async (productId) => {

    product.value = await getProduct(productId)


    doc.value = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      //putOnlyUsedFonts: true,
    });

    doc.value.setProperties({
      title: `Hillebrand Coating Projekt`,
    });

    doc.value.addFont("/fonts/pdf/Roboto/Roboto-Regular.ttf", "roboto", "normal");
    doc.value.addFont("/fonts/pdf/Roboto/Roboto-Bold.ttf", "roboto", "bold");
    doc.value.setFont("roboto", "normal");

    //
    let yPosition = contentStartY;

    /* Anwendung */
    doc.value.setFont("roboto", "bold");
    doc.value.setFontSize(9);
    doc.value.text(
      `Anwendungs-/Industriebeispiele`,
      contentStartX,
      contentStartY
    );

    yPosition += headlineDistance;

    for (let step = 1; step <= product.value?.features.length; step++) {
      doc.value.text(`-`, contentStartX, yPosition);
      yPosition = addWrappedText({
        /*text: product.value.features[step - 1],*/
        text: product.value?.features[step - 1],
        textWidth: textWidth,
        fontSize: "9",
        fontType: "normal",
        lineSpacing: lineSpacing,
        xPosition: contentStartX + contentListOffset,
        initialYPosition: yPosition,
        pageWrapInitialYPosition: pageWrapInitialYPosition,
      });
    }


    /* Werkstoffpaarungen */
    yPosition = yPosition + contentMargin;
    doc.value.setFont("roboto", "bold");
    doc.value.setFontSize(9);
    doc.value.text(`Werkstoffpaarungen`, contentStartX, yPosition);

    yPosition += headlineDistance;

    for (
      let step = 1;
      step <= product.value?.anwendungen?.length;
      step++
    ) {
      doc.value.text(`-`, contentStartX, yPosition);
      yPosition = addWrappedText({
        text: product.value.anwendungen[step - 1],
        textWidth: textWidth,
        fontSize: "9",
        fontType: "normal",
        lineSpacing: lineSpacing,
        xPosition: contentStartX + contentListOffset,
        initialYPosition: yPosition,
        pageWrapInitialYPosition: pageWrapInitialYPosition,
      });
    }

    // TEST CONTENT
    yPosition = yPosition + contentMargin;
    yPosition = addWrappedText({
      text:
        "'Trockenschmierung verleiht Kunststoffgleitlagern, Dichtungen und anderen Maschinenelementen verbesserte Gleiteigenschaften. Ziel von gut ausgelegten Polymergleitlagern ist die Wartungs­freiheit und das Vermeiden von schmutzbindender Fett- oder Ölschmierung.", // Put a really long string here
      textWidth: textWidth,
      fontSize: "8",
      fontType: "normal",
      lineSpacing: lineSpacing,
      xPosition: contentStartX,
      initialYPosition: yPosition,
      pageWrapInitialYPosition: pageWrapInitialYPosition,
    });

    /* TEST TABLE */
    yPosition = yPosition + contentMargin;
    let smallTable = {
      head: [["Name", "Email", "Country"]],
      body: [
        ["David", "david@example.com", "Sweden"],
        ["Castille", "castille@example.com", "Spain"],
        ["Castille", "castille@example.com", "Spain"],
        ["Castille", "castille@example.com", "Spain"],
        ["David", "david@example.com", "Sweden"]
      ],
    };
    generatePdfTable(
      smallTable,
      textWidth,
      yPosition,
      contentStartY,
      contentEndY
    );
    yPosition = doc.value.lastAutoTable.finalY + lineSpacing;


    /* Zusammensetzung */
    yPosition = yPosition + contentMargin;
    doc.value.setFont("roboto", "bold");
    doc.value.setFontSize(9);
    doc.value.text(`Zusammensetzung`, contentStartX, yPosition);

    yPosition += headlineDistance;

    for (let step = 0; step < 5; step++) {
      doc.value.text("-", contentStartX, yPosition);
      yPosition = addWrappedText({
        text: yPosition + " " + `Festschmierstoffe`,
        textWidth: textWidth,
        fontSize: "9",
        fontType: "normal",
        lineSpacing: lineSpacing,
        xPosition: contentStartX + contentListOffset,
        initialYPosition: yPosition,
        pageWrapInitialYPosition: pageWrapInitialYPosition,
      });
    }

    generatePdfLayout();

    /* js PDF pdf generieren */
    doc.value.save(
      `${product.value?.product} technisches Produktblatt.pdf`
    );
  }
  return {
    generateReport,
    getProduct
  }
}

const addWrappedText = ({
  text,
  textWidth,
  fontSize = 10,
  fontType = "normal",
  lineSpacing = 7,
  xPosition = 10,
  initialYPosition = 10,
  pageWrapInitialYPosition = 10,
}) => {
  doc.value.setFont("roboto", fontType);
  //doc.value.setFontType(fontType);
  doc.value.setFontSize(fontSize);
  //doc.value.setFontSize(fontSize);
  var textLines = doc.value.splitTextToSize(text, textWidth); // Split the text into lines
  var pageHeight = doc.value.internal.pageSize.height; // Get page height, we'll use this for auto-paging. TRANSLATE this line if using units other than `pt`
  var cursorY = initialYPosition;

  textLines.forEach((lineText) => {
    if (cursorY > pageHeight) {
      // Auto-paging
      doc.value.addPage();
      cursorY = pageWrapInitialYPosition;
    }
    doc.value.text(xPosition, cursorY, lineText);
    cursorY += lineSpacing;
    if (cursorY >= 280) {
      doc.value.addPage();
      cursorY = 65;
    }
  });
  return cursorY;
}

const generatePdfLayout = () => {
  var pageCount = doc.value.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.value.setPage(i);

    /* START - HEADER ---------- */
    doc.value.setFont("roboto", "bold");
    doc.value.setFontSize(12);
    doc.value.text(`Technisches Datenblatt`, 15, 22);

    /* START - HEADER ---------- */
    doc.value.setFont("roboto", "normal");
    doc.value.setFontSize(8);
    doc.value.text(`SEite ` + i + "/" + pageCount, 120, 22);
    doc.value.text(`Demo text. `, 120, 26);
    doc.value.text(`Taile-Nr. 9100279`, 120, 30);

    doc.value.setFontSize(20);
    doc.value.text(`${product.value?.product}`, 15, 30);

    doc.value.setFontSize(10);
    doc.value.text(
      `Wärmehärtender Gleitlack auf Lösungsmittelbasis`,
      15,
      35
    );

    doc.value.setFontSize(8);
    doc.value.setDrawColor(0, 0, 0);
    doc.value.setLineWidth(0.1);
    doc.value.line(15, 40, 140, 40);
    doc.value.line(15, 53, 140, 53);
    /* END - HEADER ---------- */

    /* START - RIGHT SIDE BAR ---------- */
    doc.value.setDrawColor(0);
    doc.value.setFillColor(240, 240, 240);
    doc.value.rect(150, 0, 60, 310, "F");

    doc.value.addImage("/img/pdf/logo_tc_01.png", "PNG", 156, 18, 46, 12);
    doc.value.addImage(
      "/img/pdf/logo_hc_01.png",
      "PNG",
      165,
      255,
      32,
      32
    );

    doc.value.setFont("roboto", "bold");
    doc.value.setFontSize(8);
    doc.value.text(`Rudolf Hillebrand GmbH & CO. KG`, 156, 45);

    doc.value.setFont("roboto", "normal");
    doc.value.setFontSize(7);
    doc.value.text(`Westerhaar 60`, 156, 48);
    doc.value.text(`53637 Wickede (Ruhr)`, 156, 51);
    doc.value.text(`Germany`, 156, 54);

    doc.value.text(`+49 2377 8010`, 156, 57);
    doc.value.text(`kontakt@hillebrand-coating.com`, 156, 60);
    doc.value.text(`www.hillebrand-coating.com`, 156, 63);

    doc.value.setFont("roboto", "bold");
    doc.value.text(`Schmierstofflösungen für die Industrie`, 156, 70);

    doc.value.setFont("roboto", "normal");
    doc.value.setFontSize(6);

    /* js PDF fließtext */
    var lMargin = 156; //left margin in mm
    var rMargin = 9; //right margin in mm
    var pdfInMM = 210;
    var paragraph =
      "HILLEBRAND COATING entwickelt, produziert und vertreibt weltweit Hochleistungsschmier-\nund Verfahrensstoffe." +
      "Das Sortiment deckt die\nBereiche" +
      "Spezialschmierstoffe,Industrieschmierstoffe und " +
      "Schmierstoffe für die Metallbearbeitung und " +
      "Umformtechnik ab. Alle Produkte basieren auf den" +
      "neuesten Erkenntnissen der Tribologie.";
    var lines = doc.value.splitTextToSize(
      paragraph,
      pdfInMM - lMargin - rMargin
    );
    doc.value.text(lMargin, 74, lines);
    /* END - RIGHT SIDE BAR ---------- */

    /* START - FOOTER ---------- */
    doc.value.setDrawColor(0, 0, 0);
    doc.value.setLineWidth(0.1);
    doc.value.line(15, 290, 140, 290);

    doc.value.setFont("roboto", "normal");
    doc.value.setFontSize(5);

    var lMargin = 15;
    var rMargin = 9;
    var pdfInMM = 150;
    var paragraph =
      "Angaben entsprechen dem derzeitigen Stand der Technik, Änderungen vorbehalten. Die Angaben bedeuten keine Eigenschaftszusicherung für den Einzelfall und entbinden den Verbraucher nicht von eigenen Prüfungen. Weitere Daten auf Anfrage.";
    var lines = doc.value.splitTextToSize(
      paragraph,
      pdfInMM - lMargin - rMargin
    );
    doc.value.text(lMargin, 293, lines);
    /* END - FOOTER ---------- */
  }
}

const generatePdfTable = (
  tableData,
  textWidth,
  startY,
  contentStartY,
  contentEndY
) => {
  let tableOptions = {
    startY: startY,
    tableWidth: textWidth,
    tableLineWidth: 0,
    styles: {
      fillColor: null,
      font: "roboto",
      fontSize: 7,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: null,
      fontStyle: "normal",
      font: "roboto",
      fontSize: 7,
      textColor: [0, 0, 0],
    },
    columnStyles: {
      0: {
        cellWidth: 45,
      },
      1: {
        cellWidth: 35,
      },
      2: {
        cellWidth: 45,
      },
    },
    alternateRowStyles: {
      fillColor: null,
    },
    margin: { top: contentStartY },
    head: tableData.head,
    body: tableData.body,
  };

  let tempDoc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
  });

  tempDoc.autoTable({ ...tableOptions, startY: contentStartY });
  const pageCount = tempDoc.internal.getNumberOfPages();
  let tempDocEndPosition = tempDoc.lastAutoTable.finalY;

  // console.log('pageCount', pageCount, 'tempDocEndPosition-contentStartY',  (tempDocEndPosition-contentStartY), 'contentEndY - startY', (contentEndY - startY));

  if (pageCount > 1 || tempDocEndPosition - contentStartY <= contentEndY - startY) {
    doc.value.autoTable(tableOptions);
  } else {
    doc.value.addPage();
    doc.value.autoTable({ ...tableOptions, startY: contentStartY });
  }
}
