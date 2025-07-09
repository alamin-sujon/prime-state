"use client"

import { useState, useMemo } from "react"
import { Search, Plus, Eye, Edit, Trash2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import carImg from "../../assets/Seller-imgs/car.jpg"
import { Link } from "react-router-dom"

// JSON data structure
const adsData = [
  {
    id: 1,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 May 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 2,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$32,500",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 3,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Feb 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 4,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$32,500",
    publishDate: "25 May 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 5,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 6,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 7,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 8,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 9,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 10,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$25,900",
    publishDate: "20 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 11,
    referenceId: "RF651011",
    name: "3BR Luxury Apartment",
    price: "$18,500",
    publishDate: "15 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 12,
    referenceId: "RF651011",
    name: "BMW X5 - Premium SUV",
    price: "$45,000",
    publishDate: "10 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 13,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 May 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 14,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$32,500",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 15,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Feb 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 16,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$32,500",
    publishDate: "25 May 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 17,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 18,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 19,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 20,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 21,
    referenceId: "RF651011",
    name: "2BR Condo with Huge Balcony",
    price: "$13,750",
    publishDate: "25 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 22,
    referenceId: "RF651011",
    name: "Tesla Model 3 - Long Range",
    price: "$25,900",
    publishDate: "20 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
  {
    id: 23,
    referenceId: "RF651011",
    name: "3BR Luxury Apartment",
    price: "$18,500",
    publishDate: "15 Jan 2024",
    image: carImg,
    category: "Property",
  },
  {
    id: 24,
    referenceId: "RF651011",
    name: "BMW X5 - Premium SUV",
    price: "$45,000",
    publishDate: "10 Jan 2024",
    image: carImg,
    category: "Vehicle",
  },
]

const categories = ["All", "Property", "Vehicle"]

type TRowProps = {
  row : number
}
export default function AllAds({row}: TRowProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(row)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  // Filter and search logic
  const filteredData = useMemo(() => {
    return adsData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.referenceId.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  // Handle checkbox selection
  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    if (selectedItems.length === currentData.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(currentData.map((item) => item.id))
    }
  }

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="w-full mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-6">

        {/* Filter and Search Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-md font-medium text-gray-700">Filter</span>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  {selectedCategory}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>

          <Link to="/seller/create" className="bg-[#CBA65F] hover:bg-yellow-700 text-white flex items-center gap-2 p-3 rounded-2xl">
            Post New
            <Plus className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedItems.length === currentData.length && currentData.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="text-md font-medium text-gray-700">SL</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Reference ID</th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Ads Name</th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Publish Date</th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleSelectItem(item.id)}
                    />
                    <span className="text-md text-gray-600">{String(startIndex + index + 1).padStart(2, "0")}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-md text-gray-900">{item.referenceId}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="text-md text-gray-900">{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-md font-medium text-gray-900">{item.price}</td>
                <td className="px-4 py-4 text-md text-gray-600">{item.publishDate}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-10 w-10 bg-gray-200 rounded-full text-gray-500 hover:text-gray-700">
                      <Eye className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 w-10 bg-gray-200 rounded-full text-gray-500 hover:text-gray-700">
                      <Edit className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 w-10 bg-gray-200 rounded-full text-red-500 hover:text-red-700">
                      <Trash2 className="h-6 w-6" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-md text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} entries
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => goToPage(page)}
              className={`h-8 w-8 p-0 ${currentPage === page ? "bg-[#CBA65F] hover:bg-yellow-700 text-white" : ""}`}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
