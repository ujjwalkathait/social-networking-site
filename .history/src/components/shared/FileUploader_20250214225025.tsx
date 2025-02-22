import { useCallback } from "react";
import { useDropzone} from 'react-dropzone';

const FileUploader = () => {
    const onDrop = useCallback(acceptedFiles => {

    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div {...getRootProps()} className="flex flex-center ">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> : 
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default FileUploader