import { useLocation, Link } from "react-router-dom";
import { jsPDF } from "jspdf";

const VarietyResult = () => {
  const { state } = useLocation();
  const { district, ageGroup, riceVarieties } = state || {};

  // Function to download the PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Set up constants for styles and layout
    const titleFont = "helvetica";
    const titleFontSize = 16;
    const textFontSize = 12;
    const footerFontSize = 10;
    const lineHeight = 10;
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();

    // Set font for the title
    doc.setFont(titleFont, "bold");
    doc.setFontSize(titleFontSize);
    doc.text(
      `Rice Variety Suggestions for ${district} - Age Group: ${ageGroup}`,
      margin,
      margin
    );

    // Add a line separator
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(margin, margin + 5, pageWidth - margin, margin + 5);

    // Add some spacing
    let yPosition = margin + 10;

    // Loop through rice varieties and display them in a more modern layout
    riceVarieties.forEach((variety, index) => {
      // Set text style for variety
      doc.setFont("helvetica", "normal");
      doc.setFontSize(textFontSize);

      // Optionally, add a colored background for every variety block
      if (index % 2 === 0) {
        doc.setFillColor(244, 244, 244); // Light gray
      } else {
        doc.setFillColor(220, 220, 220); // Slightly darker gray
      }
      doc.rect(
        margin,
        yPosition - lineHeight + 3,
        pageWidth - 2 * margin,
        lineHeight,
        "F"
      );

      // Add numbered variety with custom styling
      doc.setTextColor(0, 0, 0); // Black text color
      doc.text(`${index + 1}. ${variety}`, margin, yPosition);

      // Add some spacing between each variety
      yPosition += lineHeight;
    });

    // Add a footer with contact info or other details if needed
    doc.setFont("helvetica", "italic");
    doc.setFontSize(footerFontSize);

    // Save the PDF with a dynamic filename based on district and age group
    doc.save(`rice_varieties_${district}_${ageGroup}.pdf`);
  };

  return (
    <div
      className="min-h-screen flex justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1584773920278-4ada215dbe93?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="flex justify-center py-8 px-4 bg-cover">
        <div className="">
          {/* Header Text */}
          <h2 className="text-xl text-center font-semibold bg-primary/80 p-5 rounded-lg mb-4 drop-shadow-2xl text-shadow">
            Best-suited rice Varieties for <span className="text-darkgreen">{district} </span>under <span className="text-darkgreen"> {ageGroup}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 border-2 border-gray-500 py-40 px-10 rounded-lg bg-black/40 mt-0">
            {riceVarieties.length > 0 ? (
              riceVarieties.map((variety, index) => {
                const cleanedVariety = variety.replace(/^\s+/, ""); // Clean only the leading space
                return (
                  <Link
                    key={index}
                    to={`/variety-details/${cleanedVariety}`} // Use cleaned variety in URL
                    className="bg-primary text-white p-4 rounded-2xl shadow-md text-center"
                  >
                    <h3 className="text-lg font-semibold">{variety}</h3>{" "}
                    {/* Display original variety name */}
                  </Link>
                );
              })
            ) : (
              <div className="w-full text-center text-white">
                No varieties found
              </div>
            )}
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <button
              onClick={downloadPDF}
              className="min-w-max mt-10 py-4 px-4 bg-primary rounded-2xl focus:outline-none"
            >
              Download the Variety Suggestions for {district}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarietyResult;
