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
          <div>
            test 1
          </div>
        ) : (
          <div className="file_uploader-box">
            <img src="/assets" alt="" />
          </div>
        )
      }
    </div>
  )
}

export default FileUploader