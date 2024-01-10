const GoogDocViewer = () => {
    const documentURL = 'https://drive.google.com/file/d/1lbY1k_bMY1Co458amNgqryM28HMCfNxW/view?usp=sharing';
    return (
      <div>
        <iframe
        title="Resume"
         src={documentURL} width="100%" height="600px" />
      </div>
    );
  };
  export default GoogDocViewer;