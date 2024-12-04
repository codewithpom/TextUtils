import React, { useState, useCallback, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const ItemType = {
  PDF: 'pdf',
};

const DraggablePDF = ({ pdf, index, movePDF, removePDF }) => {
  const [, ref] = useDrag({
    type: ItemType.PDF,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.PDF,
    hover: (item) => {
      if (item.index !== index) {
        movePDF(item.index, index);
        item.index = index;
      }
    },
  });

  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

  useEffect(() => {
    const loadPdfPreview = async () => {
      const arrayBuffer = await pdf.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const firstPage = pdfDoc.getPage(0);
      const viewport = firstPage.getViewport({ scale: 1 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const context = canvas.getContext('2d');
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await firstPage.render(renderContext).promise;
      setPdfPreviewUrl(canvas.toDataURL());
    };

    loadPdfPreview();
  }, [pdf]);

  return (
    <div ref={(node) => ref(drop(node))} className="pdf-item">
      <div className="card" style={{ margin: '10px', cursor: 'grab' }}>
        <div className="card-body d-flex justify-content-between align-items-center">
          {pdfPreviewUrl && <img src={pdfPreviewUrl} alt="PDF Preview" style={{ width: '50px', height: '70px', marginRight: '10px' }} />}
          {pdf.name}
          <button className="btn btn-danger btn-sm" onClick={() => removePDF(index)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

const PDFMerge = () => {
  const [pdfs, setPdfs] = useState([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPdfs((prevPdfs) => [...prevPdfs, ...files]);
  };

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files).filter(file => file.type === 'application/pdf');
    setPdfs((prevPdfs) => [...prevPdfs, ...files]);
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const movePDF = (fromIndex, toIndex) => {
    const updatedPdfs = update(pdfs, {
      $splice: [
        [fromIndex, 1],
        [toIndex, 0, pdfs[fromIndex]],
      ],
    });
    setPdfs(updatedPdfs);
  };

  const removePDF = (index) => {
    setPdfs((prevPdfs) => prevPdfs.filter((_, i) => i !== index));
  };

  const mergePDFs = async () => {
    setLoading(true);
    const mergedPdf = await PDFDocument.create();
    for (const pdf of pdfs) {
      const arrayBuffer = await pdf.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    const mergedPdfBytes = await mergedPdf.save();
    const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);
    setMergedPdfUrl(mergedPdfUrl);
    setLoading(false);
  };

  return (
    <div className="container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="text-center" style={{ marginBottom: '20px' }}>
        <h1>PDF Merge Tool</h1>
        <input type="file" accept="application/pdf" multiple onChange={handleFileChange} />
      </div>
      <div className="upload-destination" style={{ border: '2px dashed #ccc', padding: '20px', marginBottom: '20px' }}>
        Drag and drop your PDFs here
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="pdf-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
          {pdfs.map((pdf, index) => (
            <DraggablePDF key={index} pdf={pdf} index={index} movePDF={movePDF} removePDF={removePDF} />
          ))}
        </div>
      </DndProvider>
      <div className="text-center" style={{ marginTop: '20px' }}>
        <button className="btn btn-primary mt-3" onClick={mergePDFs} disabled={loading}>
          {loading ? 'Merging...' : 'Merge PDFs'}
        </button>
      </div>
      {mergedPdfUrl && !loading && (
        <div className="text-center" style={{ marginTop: '20px' }}>
          <h2>Merged PDF</h2>
          <a href={mergedPdfUrl} download="merged.pdf">
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PDFMerge;
