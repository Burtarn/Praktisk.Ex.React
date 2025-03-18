import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const exportToPDF = () => {
  const input = document.getElementById("saving-plan");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10);
    pdf.save("sparplan.pdf");
  });
};

return (
  <div>
    <div id="saving-plan">
      <h2>Min Sparplan</h2>
      <p>Mål: 5000 kr</p>
      <p>Nuvarande sparande: 2000 kr</p>
    </div>
    <button onClick={exportToPDF}>Exportera till PDF</button>
  </div>
);