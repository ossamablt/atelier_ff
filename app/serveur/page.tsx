"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Clock, RefreshCw } from "lucide-react"

// Types
interface MenuItem {
  id: number
  name: string
  category: string
  price: number
  image: string
  size?: string
  extras?: string[]
}

interface TableOrder {
  id: number
  tableNumber: number
  time: string
  status: "pending" | "preparing" | "ready"
  items: MenuItem[]
  total: number
}

// Sample menu data with Algerian cuisine
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Shawarma Algérienne",
    category: "Plats",
    price: 8.5,
    image: "/placeholder.svg?height=80&width=80",
    size: "large",
    extras: ["Sauce harissa", "Extra frites"],
  },
  {
    id: 2,
    name: "Couscous Royal",
    category: "Plats",
    price: 14.9,
    image: "/placeholder.svg?height=80&width=80",
    size: "large",
    extras: ["Extra merguez", "Sauce piquante"],
  },
  {
    id: 3,
    name: "Tajine Poulet",
    category: "Plats",
    price: 12.9,
    image: "/placeholder.svg?height=80&width=80",
    size: "medium",
    extras: ["Extra olives"],
  },
  {
    id: 4,
    name: "Thé à la menthe",
    category: "Boissons",
    price: 2.5,
    image: "/placeholder.svg?height=80&width=80",
    size: "medium",
    extras: ["Extra sucre"],
  },
  {
    id: 5,
    name: "Limonade Maison",
    category: "Boissons",
    price: 3.5,
    image: "/placeholder.svg?height=80&width=80",
    size: "medium",
    extras: ["Menthe fraîche"],
  },
  {
    id: 6,
    name: "Makroud",
    category: "Desserts",
    price: 4.5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    name: "Baklava",
    category: "Desserts",
    price: 5.5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Sample table orders
const initialOrders: TableOrder[] = [
  {
    id: 1,
    tableNumber: 1,
    time: "10:30",
    status: "preparing",
    items: [
      {
        id: 1,
        name: "Shawarma Algérienne",
        category: "Plats",
        price: 8.5,
        image: "/placeholder.svg?height=80&width=80",
        size: "large",
        extras: ["Sauce harissa", "Extra frites"],
      },
      {
        id: 4,
        name: "Thé à la menthe",
        category: "Boissons",
        price: 2.5,
        image: "/placeholder.svg?height=80&width=80",
        size: "medium",
        extras: ["Extra sucre"],
      },
    ],
    total: 12.5,
  },
  {
    id: 2,
    tableNumber: 3,
    time: "10:25",
    status: "ready",
    items: [
      {
        id: 2,
        name: "Couscous Royal",
        category: "Plats",
        price: 14.9,
        image: "/placeholder.svg?height=80&width=80",
        size: "large",
        extras: ["Extra merguez", "Sauce piquante"],
      },
      {
        id: 5,
        name: "Limonade Maison",
        category: "Boissons",
        price: 3.5,
        image: "/placeholder.svg?height=80&width=80",
        size: "medium",
        extras: ["Menthe fraîche"],
      },
    ],
    total: 24.9,
  },
  {
    id: 3,
    tableNumber: 2,
    time: "10:35",
    status: "pending",
    items: [
      {
        id: 3,
        name: "Tajine Poulet",
        category: "Plats",
        price: 12.9,
        image: "/placeholder.svg?height=80&width=80",
        size: "medium",
        extras: ["Extra olives"],
      },
    ],
    total: 16.5,
  },
]

export default function ServerInterface() {
  const router = useRouter()
  const [orders, setOrders] = useState<TableOrder[]>(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [showNewOrderModal, setShowNewOrderModal] = useState(false)
  const [selectedTable, setSelectedTable] = useState<number | null>(null)
  const [currentOrder, setCurrentOrder] = useState<MenuItem[]>([])

  // Check authentication (commented out for demo)
  // useEffect(() => {
  //   const userRole = localStorage.getItem("userRole")
  //   if (userRole !== "server") {
  //     router.push("/login")
  //   }
  // }, [router])

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      order.tableNumber.toString().includes(searchTerm),
  )

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price)
  }

  // Get status text in French
  const getStatusText = (status: string) => {
    switch (status) {
      case "preparing":
        return "Preparing"
      case "ready":
        return "Ready"
      case "pending":
        return "Pending"
      default:
        return status
    }
  }

  // Get status background color
  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "bg-blue-100"
      case "ready":
        return "bg-green-100"
      case "pending":
        return "bg-yellow-100"
      default:
        return "bg-gray-100"
    }
  }

  // Update order status
  const updateOrderStatus = (orderId: number, newStatus: "pending" | "preparing" | "ready") => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#FF6B35]">Olirab Fast Food</h1>
            <p className="text-sm text-neutral-500">Cuisine Algérienne Authentique</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                placeholder="Rechercher commandes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 pl-10 rounded-full border-neutral-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
            </div>
            <Button
              className="bg-[#FF6B35] hover:bg-[#e55a29] text-white rounded-full"
              onClick={() => setShowNewOrderModal(true)}
            >
              <Plus size={18} className="mr-2" />
              Nouvelle Commande
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-neutral-100 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">Table {order.tableNumber}</h2>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {order.time}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(order.status)}`}>
                  {getStatusText(order.status)}
                </div>
              </div>

              <div className="p-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex mb-4 last:mb-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-sm">{item.size}</span>
                      </div>
                      {item.extras &&
                        item.extras.map((extra, i) => (
                          <div key={i} className="text-sm text-neutral-500 mt-1">
                            {extra}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-lg">{formatPrice(order.total)}</span>
                  </div>

                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#fff8f5]"
                      onClick={() => {
                        // In a real app, you would update the order status
                        const newStatus =
                          order.status === "pending" ? "preparing" : order.status === "preparing" ? "ready" : "pending"
                        updateOrderStatus(order.id, newStatus as any)
                      }}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Mettre à jour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* New Order Modal */}
      {showNewOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-xl font-bold">Nouvelle Commande</h2>
              <p className="text-neutral-500">Sélectionnez les articles pour la commande</p>
            </div>

            <div className="p-6 grid grid-cols-2 gap-6">
              {/* Menu Items */}
              <div>
                <h3 className="font-medium mb-4">Menu</h3>
                <div className="space-y-3">
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-[#FF6B35] transition-colors"
                      onClick={() => setCurrentOrder([...currentOrder, item])}
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-neutral-500">{item.category}</p>
                      </div>
                      <span className="font-medium">{formatPrice(item.price)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Order */}
              <div>
                <h3 className="font-medium mb-4">Commande en cours</h3>
                <div className="border rounded-lg">
                  {currentOrder.length > 0 ? (
                    <div>
                      {currentOrder.map((item, index) => (
                        <div key={index} className="p-3 border-b last:border-b-0 flex justify-between">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-neutral-500">{item.category}</p>
                          </div>
                          <span>{formatPrice(item.price)}</span>
                        </div>
                      ))}
                      <div className="p-3 border-t">
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>{formatPrice(currentOrder.reduce((sum, item) => sum + item.price, 0))}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-center text-neutral-500">Aucun article sélectionné</div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-200 flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowNewOrderModal(false)
                  setCurrentOrder([])
                }}
              >
                Annuler
              </Button>
              <Button
                className="bg-[#FF6B35] hover:bg-[#e55a29]"
                onClick={() => {
                  // In a real app, you would send this to your backend
                  const newOrder: TableOrder = {
                    id: Math.max(...orders.map((o) => o.id)) + 1,
                    tableNumber: orders.length + 1,
                    time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
                    status: "pending",
                    items: currentOrder,
                    total: currentOrder.reduce((sum, item) => sum + item.price, 0),
                  }

                  setOrders([...orders, newOrder])
                  setShowNewOrderModal(false)
                  setCurrentOrder([])
                }}
                disabled={currentOrder.length === 0}
              >
                Envoyer la commande
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

