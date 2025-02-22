import { useCallback } from "react";
import { useDropzone} from 'react-dropzone';

const FileUploader = () => {
    const onDrop = useCallback(acceptedFiles => {

    }, [])
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader