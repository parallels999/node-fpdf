const FPDF = require('../fpdf')

const Doc = new FPDF() 
Doc.AddFont('courier')
Doc.AddPage()
Doc.SetFont('Arial','',8);