const FPDF = require('../index')
const { strtoupper, substr, count } = require('../src/PHP_CoreFunctions')


let textColour = [0, 0, 0];
let logoFile = `${__dirname}/descarga.jpeg`;
let logoXPos = 50;
let logoYPos = 108;
let logoWidth = 110;

const pdf = new FPDF('P', 'mm', 'A4');

pdf.SetTextColor(textColour[0], textColour[1], textColour[2]);
pdf.AddPage()

pdf.Image(logoFile, logoXPos, logoYPos, logoWidth);

pdf.Output('F', `${__dirname}/testImageReport.pdf`)
