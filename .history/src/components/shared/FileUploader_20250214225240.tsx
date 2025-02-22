import { useCallback, useState } from "react";
import { useDropzone} from 'react-dropzone';

const FileUploader = () => {
    const [fileUrl, setFileUrl] = useState('')
    const onDrop = useCallback(acceptedFiles => {

    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {
        fileUrl ? (

        ) : 
          <p>Drop the files here ...</p> : 
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default FileUploader