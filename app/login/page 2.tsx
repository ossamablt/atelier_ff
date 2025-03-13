"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { OlirabLogo } from "@/components/olirab-logo"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simple validation
    if (!username || !password) {
      setError("Veuillez remplir tous les champs")
      return
    }

    // In a real app, you would validate credentials against a backend
    // For demo purposes, we'll use some hardcoded values and determine role by username
    const validCredentials = {
      serveur: { password: "serveur123", role: "server" },
      caissier: { password: "caissier123", role: "cashier" },
      cuisine: { password: "cuisine123", role: "kitchen" },
      admin: { password: "admin123", role: "admin" },
    }

    // Check if username exists
    const userKey = Object.keys(validCredentials).find((key) => key === username.toLowerCase())

    if (userKey) {
      const credentials = validCredentials[userKey as keyof typeof validCredentials]

      if (credentials.password === password) {
        // In a real app, you would set proper authentication tokens
        localStorage.setItem("userRole", credentials.role)
        localStorage.setItem("username", username)

        // Redirect based on role
        switch (credentials.role) {
          case "server":
            router.push("/server")
            break
          case "cashier":
            router.push("/")
            break
          case "kitchen":
            router.push("/kitchen")
            break
          case "admin":
            router.push("/pages") // Redirect admin to the original admin interface
            break
          default:
            router.push("/")
        }
      } else {
        setError("Mot de passe incorrect")
      }
    } else {
      setError("Nom d'utilisateur non reconnu")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <OlirabLogo size="lg" />
          </div>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>Connectez-vous pour accéder à votre espace</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre nom d'utilisateur"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
              />
            </div>

            {error && <div className="text-sm text-red-500 text-center">{error}</div>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#e55a29]">
              Se connecter
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

