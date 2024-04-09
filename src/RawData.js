import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";

function RawData() {
  return (
    <div id="rawdatawrap">
      <div id="toolbar">
        <FontAwesomeIcon icon={faMarkdown} size='2x'/> Text
      </div>
      <textarea id='editor'>raw text bladibladibladiblah</textarea>
    </div>
  );
}
export default RawData;
