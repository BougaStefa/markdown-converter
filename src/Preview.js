import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from 'react-markdown';
import "./Preview.css"

function Preview({state}){
    const lines = state.split('\n')
    return(
        <div id='previewwrap'>
            <div id='toolbar'><FontAwesomeIcon icon={faMarkdown} size='2x'/>Previewer</div>
            {lines.map(line=> <ReactMarkdown>{line}</ReactMarkdown>)}
        </div>
    );
}

export default Preview