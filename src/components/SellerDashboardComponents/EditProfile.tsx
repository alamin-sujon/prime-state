import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  profile_picture: string;
}
const EditProfile = () => {
  const countries = [
    "United States",
    "United Kingdom",
    "India",
    "Canada",
    "Australia",
  ];
  const states = ["California", "New York", "Texas", "Florida", "Illinois"];
const cities = ["Los Angeles", "New York City", "Houston", "Chicago", "Miami"];
  const { register, control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zip: "",
      profile_picture: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-2 px-2">
      <div className="space-y-2">
        <Label htmlFor="productTitle">*Full Name</Label>
        <Input
          {...register("fullName")}
          placeholder="Enter Full Name"
          className="bg-gray-50 w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="productTitle">*Email</Label>
        <Input
          {...register("email")}
          placeholder="Enter Email"
          className="bg-gray-50 w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">*Phone Number</Label>
        <div className="flex items-center bg-gray-50 w-full border rounded-md px-2 py-1">
          <select
            {...register("country")}
            className="border-r-2 border-black"
            defaultValue="+1"
          >
            <option value="+1">(US) +1 </option>
            <option value="+44">(UK) +44</option>
            <option value="+91">(IN) +91</option>
          </select>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Enter Phone Number"
            className="border-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="productTitle">*Address</Label>
        <Input
          {...register("email")}
          placeholder="Enter Your Address"
          className="bg-gray-50 w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="state">
          *Country <span className="text-red-500">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("state", value)}>
          <SelectTrigger className="bg-gray-50 w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country.toLowerCase()}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-x-2 flex justify-between items-start gap-3">
        <div className="space-y-2">
          <Label htmlFor="state">
            *State <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("state", value)}>
            <SelectTrigger className="bg-gray-50 w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state.toLowerCase()}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">
            *City <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("state", value)}>
            <SelectTrigger className="bg-gray-50 w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="productTitle">*Zip</Label>
          <Input
            {...register("zip")}
            placeholder="Enter Your Address"
            className="bg-gray-50 w-full"
          />
        </div>
      </div>

      <div className="text-end py-2">
        <button className="px-5 py-2 rounded-md bg-[#CBA65F] font-semibold text-white">Save</button>
      </div>
    </form>
  );
};

export default EditProfile;
