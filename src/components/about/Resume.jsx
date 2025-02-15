import ResumePDF from '../../assets/Ishan-Resume.pdf';
function Resume({ text = null, icon = null }) {
  const handleDownloadCV = () => {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Ishan_Moorjmalani_Resume.pdf'; // Name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="resume-btn-div">
      {icon ? (
        <a onClick={handleDownloadCV} role="button" className="nav__link">
          {icon}
        </a>
      ) : (
        <a onClick={handleDownloadCV} className="resume-btn btn" role="button">
          {text}
        </a>
      )}
    </div>
  );
}

export default Resume;
