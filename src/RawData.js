import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import "./RawData.css"

function RawData({state,setState}) {
    const handleChange = (event) => {
        setState(event.target.value);
    }
  return (
    <div id="rawdatawrap">
      <div id="toolbar">
        <FontAwesomeIcon icon={faMarkdown} size='2x'/> Editor
      </div>
      <textarea id='editor' value={state} onChange={handleChange}></textarea>
    </div>
  );
}
export default RawData;
