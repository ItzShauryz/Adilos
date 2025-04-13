import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Star, Zap, Clock, Award, MessageSquare, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-zinc-100" />
            <span className="text-xl font-bold tracking-tight">Adiolas</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#store" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Store
            </Link>
            <Link href="#support" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
            >
              Sign In
            </Button>
            <Button className="bg-zinc-100 text-black hover:bg-white">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Premium Roblox Services at Fair Prices
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              Boost your Roblox experience with our professional services. Items, boosts, and grinding services with
              100% security and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-zinc-100 text-black hover:bg-white text-base px-8 py-6">Browse Store</Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white text-base px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Adiolas</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide premium Roblox services with a focus on security, speed, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <Shield className="h-10 w-10 text-zinc-100 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Secure</h3>
              <p className="text-zinc-400">
                All transactions are secure and your account information is always protected.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <Clock className="h-10 w-10 text-zinc-100 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-zinc-400">
                Get your items and services delivered quickly, often within minutes of purchase.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <Award className="h-10 w-10 text-zinc-100 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-zinc-400">
                We provide only the highest quality services by experienced Roblox professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore our range of premium Roblox services designed to enhance your gaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Game Boosts</CardTitle>
                <CardDescription className="text-zinc-400">Level up faster with our boosting services</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Game Boosts"
                  width={350}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <p className="text-zinc-400">
                  Our expert team will help you level up and progress through games faster than ever.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700">View Boosts</Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Premium Items</CardTitle>
                <CardDescription className="text-zinc-400">Rare and exclusive in-game items</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Premium Items"
                  width={350}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <p className="text-zinc-400">
                  Get access to rare and exclusive items that will make your character stand out.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700">Browse Items</Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Grinding Services</CardTitle>
                <CardDescription className="text-zinc-400">Let our pros handle the grind for you</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Grinding Services"
                  width={350}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <p className="text-zinc-400">
                  Save time and let our professional team handle the grinding while you enjoy the results.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Store</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Browse our selection of premium Roblox services and items at fair real-world prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Basic Boost Package", price: "$9.99", rating: 4.8 },
              { title: "Premium Item Bundle", price: "$19.99", rating: 4.9 },
              { title: "Advanced Grinding (5 hrs)", price: "$24.99", rating: 5.0 },
              { title: "VIP Game Pass", price: "$14.99", rating: 4.7 },
              { title: "Rare Collectible Items", price: "$29.99", rating: 4.9 },
              { title: "Pro Boost Package", price: "$39.99", rating: 4.8 },
              { title: "Custom Character Design", price: "$49.99", rating: 5.0 },
              { title: "Ultimate Game Bundle", price: "$99.99", rating: 4.9 },
            ].map((item, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="h-40 bg-zinc-800 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-zinc-600" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-zinc-400 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    <span>{item.rating} (120+ reviews)</span>
                  </div>
                  <p className="text-xl font-bold">{item.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-800 hover:bg-zinc-700">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-zinc-100 text-black hover:bg-white px-8 py-6">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">100% Security & Trust</h2>
            <p className="text-zinc-400">
              At Adiolas, we prioritize your security and privacy. Our services are designed with your safety in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Secure Transactions</h3>
              <p className="text-zinc-400 mb-4">
                All payments are processed through secure payment gateways with encryption to protect your financial
                information.
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-zinc-100 mr-2 mt-0.5" />
                  <span>End-to-end encrypted payment processing</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-zinc-100 mr-2 mt-0.5" />
                  <span>No storage of sensitive payment details</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-zinc-100 mr-2 mt-0.5" />
                  <span>Multiple payment options for your convenience</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Account Protection</h3>
              <p className="text-zinc-400 mb-4">
                We take extra steps to ensure your Roblox account remains secure throughout our service delivery.
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-zinc-100 mr-2 mt-0.5" />
                  <span>Secure account handling protocols</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-zinc-100 mr-2 mt-0.5" />
                  <span>Privacy-first approach to all services</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-zinc-100 mr-2 mt-0.5" />
                  <span>Transparent process with regular updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-zinc-900 p-8 rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              </div>
              <div>
                <p className="text-zinc-300 italic mb-4">
                  "I was skeptical at first, but Adiolas delivered exactly what they promised. My account was secure
                  throughout the process, and the service was completed faster than expected. Highly recommend!"
                </p>
                <p className="text-zinc-400 font-medium">- Alex K., Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Support</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our dedicated support team is always ready to assist you with any questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button className="w-full bg-zinc-100 text-black hover:bg-white">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-zinc-100 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Live Chat Support</h3>
                    <p className="text-zinc-400 mb-4">
                      Get instant help from our support team through our live chat service.
                    </p>
                    <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "How long does delivery take?",
                      a: "Most services are delivered within 24 hours, with many completed in just a few hours.",
                    },
                    {
                      q: "Is my account information safe?",
                      a: "Yes, we use secure protocols and never store your sensitive account information.",
                    },
                    {
                      q: "What payment methods do you accept?",
                      a: "We accept all major credit cards, PayPal, and various cryptocurrency options.",
                    },
                    {
                      q: "Can I get a refund if I'm not satisfied?",
                      a: "Yes, we offer a 100% satisfaction guarantee with a 7-day refund policy.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-zinc-800 pb-4">
                      <h4 className="font-medium mb-2">{faq.q}</h4>
                      <p className="text-zinc-400 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Roblox Experience?</h2>
            <p className="text-lg text-zinc-400 mb-8">
              Join thousands of satisfied customers who trust Adiolas for premium Roblox services.
            </p>
            <Button className="bg-zinc-100 text-black hover:bg-white text-base px-8 py-6">Get Started Today</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-zinc-100" />
                <span className="text-xl font-bold tracking-tight">Adiolas</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Premium Roblox services at fair prices. 100% secure and trusted by thousands of gamers.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#store" className="hover:text-white transition-colors">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Adiolas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
