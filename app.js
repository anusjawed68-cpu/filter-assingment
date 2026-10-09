document.getElementById("downloadBtn").addEventListener("click", () => {
  // 1. Data Array
  let array = [
    { name: "ali omer", age: 60, course: "wma" },
    { name: "omer", age: 20, course: "cco" },
    { name: "saqib", age: 40, course: "ccna" },
    { name: "baber", age: 10, course: "wma" },
    { name: "ali khan", age: 15, course: "cco" },
  ];

  // 2. Data Filtering
  let newarr = array.filter(
    (value) => (value.age > 20 && value.name == "ali") || value.course == "wma"
  );

  // 3. jsPDF Instance Create Karein
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // 4. Document Heading
  doc.setFontSize(16);
  doc.text("Filtered Students List", 14, 15);

  // 5. Table Headers aur Rows Format Karein
  const tableHeaders = [["S.NO", "Student Name", "Age", "Course Name"]];

  const tableRows = newarr.map((student, index) => [
    index + 1,
    student.name,
    student.age,
    student.course
  ]);

  // 6. autoTable Generate Karein
  doc.autoTable({
    head: tableHeaders,
    body: tableRows,
    startY: 22,
    theme: "striped", // Design: 'striped', 'grid', ya 'plain'
    headStyles: { fillColor: [41, 128, 185] } // Header ka blue color
  });

  // 7. PDF Download Karein
  doc.save("students.pdf");
});
