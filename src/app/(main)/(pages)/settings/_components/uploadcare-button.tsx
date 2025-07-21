'use client';
import {FileUploaderRegular} from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
type Props = {
  onUpload: (e: string) => any
}
function UploadcareButton({ onUpload }: { onUpload: (fileUrl: string) => void }) {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="c1757ce0bba2a868cd48"
        //@ts-ignore
        onFileSelect={(fileInfo) => onUpload(fileInfo.cdnUrl)}
      />
    </div>
  );
}

export default UploadcareButton;
