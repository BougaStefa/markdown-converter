import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import breaks from 'remark-breaks'
import "./Preview.css"

function Preview({state}){
    return(
        <div id='previewwrap'>
            <div id='toolbar'><FontAwesomeIcon icon={faMarkdown} size='2x'/>Previewer</div>
            <div id='preview'><ReactMarkdown remarkPlugins={[gfm,breaks]} id='preview'>{state}</ReactMarkdown></div>
        </div>
    );
}

export default Preview