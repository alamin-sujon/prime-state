import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

type FormData = {
    currentPass: string,
    newpass: string,
    confirmpass: string
}
const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { register,  handleSubmit } = useForm<FormData>({
    defaultValues: {
      currentPass: "",
      newpass: "",
      confirmpass: "",
    },
  });

  const onSubmit = (data: FormData) =>{
    console.log(data)
  }
  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="productTitle">*Current Password</Label>
        <div className="relative">
          <Input
            type={showCurrent ? "text" : "password"}
            {...register("currentPass")}
            placeholder="Enter Current Password"
            className="bg-gray-50 w-full pr-10"
          />
          <button
            type="button"
            className="absolute right-[2%] top-[30%] text-md"
            onClick={() => setShowCurrent((prev) => !prev)}
          >
            {showCurrent ? <IoEye /> : <IoMdEyeOff />}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="productTitle">*New Password</Label>
        <div className="relative">
          <Input
            type={showNew ? "text" : "password"}
            {...register("newpass")}
            placeholder="Enter New Password"
            className="bg-gray-50 w-full pr-10"
          />
          <button
            type="button"
            className="absolute right-[2%] top-[30%] text-md"
            onClick={() => setShowNew((prev) => !prev)}
          >
            {showNew ? <IoEye /> : <IoMdEyeOff />}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="productTitle">*Confirm Password</Label>
        <div className="relative">
          <Input
            type={showConfirm ? "text" : "password"}
            {...register("confirmpass")}
            placeholder="Enter Confirm Password"
            className="bg-gray-50 w-full pr-10"
          />
          <button
            type="button"
            className="absolute right-[2%] top-[30%] text-md"
            onClick={() => setShowConfirm((prev) => !prev)}
          >
            {showConfirm ? <IoEye /> : <IoMdEyeOff />}
          </button>
        </div>
      </div>

      <div className="text-end py-2">
        <button className="px-5 py-2 rounded-md bg-[#CBA65F] font-semibold text-white">
          Save
        </button>
      </div>
    </form>
  );
};

export default ChangePassword