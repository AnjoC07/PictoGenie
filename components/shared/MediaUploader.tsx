import { useToast } from "@/components/ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";

const MediaUploader = () => {
  const { toast } = useToast();
  const onUploadSuccessHandler = (result: any) => {};

  const onUploadErrorHandler = (result: any) => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="pictogenie"
      options={{ multiple: false, resourceType: "image" }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    ></CldUploadWidget>
  );
};

export default MediaUploader;
