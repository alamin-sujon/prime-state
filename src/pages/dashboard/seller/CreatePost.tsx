import type React from "react"
import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { Plus, Upload, X, ChevronDown } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import demoImg from "../../../assets/Seller-imgs/car.jpg"

interface FormData {
  category: string
  productTitle: string
  price: string
  features: Array<{ name: string; value: string }>
  text1: string
  text2: string
  images: FileList | null
  adsDescription: string
  state: string
  city: string
  zip: string
  address: string
}

const categories = ["Car", "Motorcycle", "Truck", "SUV", "Van"]
const states = ["California", "New York", "Texas", "Florida", "Illinois"]
const cities = ["Los Angeles", "New York City", "Houston", "Miami", "Chicago"]

const defaultFeatures = [
  { name: "CONDITION", value: "" },
  { name: "MANUFACTURE", value: "" },
  { name: "WARRANTY", value: "" },
  { name: "Model", value: "" },
  { name: "FEATURES", value: "" },
]

export default function CreatePost() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([demoImg, demoImg, demoImg])

  const { register, control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      category: "",
      productTitle: "",
      price: "",
      features: defaultFeatures,
      text1: "",
      text2: "",
      images: null,
      adsDescription: "",
      state: "",
      city: "",
      zip: "",
      address: "",
    },
  })

  const { fields, append, remove } = useFieldArray({ control, name: "features" })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages: string[] = []
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string)
            if (newImages.length === files.length) {
              setUploadedImages((prev) => [...prev, ...newImages])
            }
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const addFeature = () => {
    append({ name: "", value: "" })
  }

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
  }

  return (
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-md shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Upload Dropdown */}
        <div className="flex justify-start flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-[#CBA65F] text-white w-full sm:w-auto"
              >
                Upload <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Upload Images</DropdownMenuItem>
              <DropdownMenuItem>Upload Documents</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
          <Select onValueChange={(value) => setValue("category", value)}>
            <SelectTrigger className="bg-gray-50 w-full">
              <SelectValue placeholder="car" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Product Title */}
        <div className="space-y-2">
          <Label htmlFor="productTitle">Product Title</Label>
          <Input
            {...register("productTitle")}
            placeholder="Enter Product Title"
            className="bg-gray-50 w-full"
          />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="price">Price <span className="text-red-500">*</span></Label>
          <Input
            {...register("price")}
            placeholder="Price"
            className="bg-gray-50 w-full"
          />
        </div>

        {/* Features */}
        <div className="space-y-4">
          <Label>Features</Label>
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  {...register(`features.${index}.name`)}
                  placeholder="Feature Name"
                  className="bg-gray-50 text-gray-600 font-medium"
                />
                <div className="flex gap-2">
                  <Input
                    {...register(`features.${index}.value`)}
                    placeholder="Enter"
                    className="bg-gray-50"
                  />
                  {index >= defaultFeatures.length && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => remove(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="text1">Text-1</Label>
            <Input {...register("text1")} placeholder="Enter" className="bg-gray-50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="text2">Text-2</Label>
            <Input {...register("text2")} placeholder="Enter" className="bg-gray-50" />
          </div>
        </div>

        {/* Add Feature Button */}
        <div className="flex justify-start">
          <Button
            type="button"
            onClick={addFeature}
            className="bg-[#CBA65F] hover:bg-yellow-700 text-white flex items-center gap-2 w-full sm:w-auto"
          >
            Add <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Upload Media */}
        <div className="space-y-4">
          <div>
            <Label>Upload Media</Label>
            <p className="text-xs text-gray-500 mt-1">Note: First upload will set as ad thumbnail.</p>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Upload ${index + 1}`}
                  className="w-[300px] h-50 object-cover rounded-lg border"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 h-6 w-6 p-0 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
            <div className="relative">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-[300px] h-50 opacity-0 cursor-pointer z-10"
              />
              <div className="w-[300px] h-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                <Upload className="w-[300px] h-30 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">Upload</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ads Description */}
        <div className="space-y-2">
          <Label htmlFor="adsDescription">Ads Description <span className="text-red-500">*</span></Label>
          <Textarea
            {...register("adsDescription")}
            placeholder="Type description here..."
            className="bg-gray-50 min-h-[100px]"
          />
        </div>

        {/* Location */}
        <div className="space-y-4">
          <div className="bg-[#CBA65F] text-white px-3 py-1 rounded text-sm font-medium inline-block">Location</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
              <Select onValueChange={(value) => setValue("state", value)}>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
              <Select onValueChange={(value) => setValue("city", value)}>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Zip <span className="text-red-500">*</span></Label>
              <Input {...register("zip")} placeholder="Enter Zip" className="bg-gray-50" />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
          <Input {...register("address")} placeholder="Enter Address" className="bg-gray-50" />
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 w-full sm:w-auto">
            Upload
          </Button>
        </div>
      </form>
    </div>
  )
}
