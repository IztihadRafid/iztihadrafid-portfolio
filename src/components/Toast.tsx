import { ToastTrigger } from "./toast-trigger";


export default function Example() {
  return (
    <ToastTrigger
      buttonText="Save Changes"
      toastMessage="Changes saved successfully!"
      toastDescription="Your preferences have been updated."
      toastType="success"
    />
  )
}