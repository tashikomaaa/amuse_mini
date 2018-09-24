import React from "react";
import Dropzone from 'react-dropzone';
import Preview from '../Preview';
class DropzoneComponent extends React.Component {
    constructor() {
        super()
        this.state = { files: [] }
      }
    
      onDrop(files) {
        this.setState({
          files
        });
      }
    render() {
        return (
        <section>
            <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
                <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
            </div>
            <aside>
            <h2>Dropped files</h2>
            <ul>
                {
                this.state.files.map(f => <Preview file={f}/>)
                }
            </ul>
            </aside>
        </section>
        )
    }

}

export default DropzoneComponent