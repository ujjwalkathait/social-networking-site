import { useCallback } from "react";
import { useDropzone} from 'react-dropzone';

const FileUploader = () => {
    const onDrop = useCallback(acceptedFiles => {

    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> : 
          p
      }
    </div>
  )
}

export default FileUploader