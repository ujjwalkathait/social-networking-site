import { useCallback, useState } from "react";
import { FileWiuseDropzone} from 'react-dropzone';
import { Button } from "../ui/button";

const FileUploader = ({ fieldChange, mediaUrl }: any) => {
    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState('');
    const onDrop = useCallback(acceptedFiles => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]))
    }, [file])

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {
      'image/*' : ['.png', '.jpeg', '.jpg', '.svg']
    }})
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
            <img src="/assets/icons/file-upload.svg" alt="file-upload" width={96} height={77} />

            <h3 className="base-medium text-light-2 mb-2 mt-6">Drag photo here</h3>
            <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

            <Button className="shad-button_dark_4">
              Select from computer
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default FileUploader