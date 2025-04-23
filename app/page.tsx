import Link from "next/link"
import Image from "next/image"
import {
  CalendarDays,
  ChevronRight,
  Clock,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Star,
  PhoneIcon as WhatsApp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"></Image>
            <span className="text-xl font-semibold text-primary">Eva skin</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#accueil" className="text-sm font-medium hover:text-primary">
              Accueil
            </Link>
            <Link href="#soins" className="text-sm font-medium hover:text-primary">
              Nos Soins
            </Link>
            <Link href="#produits" className="text-sm font-medium hover:text-primary">
            Gammes
            </Link>
            <Link href="#apropos" className="text-sm font-medium hover:text-primary">
              À Propos
            </Link>

          </nav>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="#reserver">
                <CalendarDays className="mr-2 h-4 w-4" />
                Réserver
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="accueil" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                <span className="block">Eva skin</span>
                <span className="block text-secondary">Sublimez-vous au quotidien</span>
              </h1>
              <p className="mt-6 max-w-lg text-xl text-muted-foreground">
              Nous sommes un centre d’épilation définitive et d’amincissement.
              Grâce à nos appareils et protocoles approuvés par les acteurs les plus imminents de l’esthétique,
              nous mettons en oeuvre notre savoir-faire pour votre plus grand bonheur et bien-être.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                  <Link href="#soins">
                    Découvrir nos soins
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary text-primary hover:bg-primary/10"
                >
                  <Link href="#reserver">
                    Réserver un soin
                    <CalendarDays className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <Image
                    src="https://us.123rf.com/450wm/peus/peus1407/peus140700002/30257270-belle-brune-cheveux-longs-boucl%C3%A9s-femme-marocaine-dans-la-ville.jpg"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://i.pinimg.com/originals/21/44/fe/2144fe053267e082462f101a7b283356.jpg"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimVMMRONInhU6AILiUvFOQYXaIWBaS5EtaQ&s"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </div>
                <span className="text-sm text-gray-600">Plus de 200 clientes satisfaites</span>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute -top-4 -left-4 h-72 w-72 rounded-full bg-accent opacity-20 mix-blend-multiply blur-3xl" />
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-secondary opacity-20 mix-blend-multiply blur-3xl" />
                <div className="relative">
                  <Image
                    src="https://img.freepik.com/photos-gratuite/belle-fille-marchant-long-foret_8353-5089.jpg?t=st=1745405763~exp=1745409363~hmac=5aaf25952506fcbf9391321845c09ae16764deb246edfc3073e744d49111e7e3&w=1380"
                    alt="Soins naturels"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="soins" className="bg-white py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Soins</h2>
              <p className="mt-4 text-lg text-gray-600">
                Des soins du visage et du corps conçus pour révéler l'éclat de votre peau tout en respectant son
                équilibre naturel.
              </p>
            </div>
            <Tabs defaultValue="visage" className="mt-16">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="visage">Soins du Visage</TabsTrigger>
                  <TabsTrigger value="corps">Soins du Corps</TabsTrigger>
                  
                </TabsList>
              </div>
              <TabsContent value="visage" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Soin de visage",
                      description: "• Hydrafacial \n• Radiofréquence ",
                      price: "300 DH",
                      duration: "60 min",
                      image: "https://mon-chirurgien-esthetique.paris/app/uploads/2024/01/combien-de-temps-durent-les-resultats-d-un-soin-hydrafacial-cover-dr-santini.jpg",
                    },
                    {
                      title: "Soin de visage",
                      description: "• Carbon peel",
                      price: "600 DH",
                      duration: "60 min",
                      image: "https://www.royalcosmeticsurgery.com.pk/wp-content/uploads/2024/07/Which-Is-Better-Carbon-Laser-or-Chemical-Peel.jpg.webp",
                    },
                    {
                      title: "Soin anti age",
                      description:
                        "•Hifu ",
                      price: "600 DH - 1500 DH",
                      duration: "30 min",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs60Pd354hGkhBdNTIjiu3ByWcczflm3HkEL3CswhshQVDhYPxd_0JjXQEZ_dnwomDzy8",
                    },
                    {
                      title: "Soin Anti age ",
                      description:
                        "Skin booster",
                      price: "1000 DH - 2500 DH",
                      duration: "45 min",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSmmPTgQFPnon3kzFkqS5tMWR-En-PYFenL8lZ8UhEZ3sF20KWBXwH1ubgyr03QIDEOA",
                    },
                    {
                      title: "Soin Anti age",
                      description: "Plasma lift",
                      price: "800 DH - 2000 DH",
                      duration: "2 h",
                      image: "https://beautystudio11.nl/cdn/shop/files/IMG_3948.jpg?v=1714332205&width=1500",
                    },
                    {
                      title: "Soin anti taches et éclairssissent",
                      description: "Microneedling ",
                      price: "250 DH - 500 DH",
                      duration: "45 min",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa04BKz7jjPd0dMD5fOhUdT3PoufdBR_vB1M36GSCXujH4RfdmbALokpcadPCFS66cA2c",
                    },
                    {
                      title: "Soin anti taches et éclairssissent",
                      description: "Fractionné miconnedling ",
                      price: "500 DH - 1000 DH",
                      duration: "45 min",
                      image: "https://cabinet-dr-hajer-adbi.tn/img/rf1.jpg",
                    },
                    {
                      title: "Blanchiment dentaire",
                      description: "Blanchiment dentaire",
                      price: "250 DH - 500 DH",
                      duration: "45 min",
                      image: "https://fr.centredentairesoudou.ma/wp-content/uploads/sites/2/2023/02/prix-blanchiment-maroc.jpg",
                    },
                    
                  ].map((soin, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src={soin.image || "/placeholder.svg"}
                        alt={soin.title}
                        width={300}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{soin.title}</h3>
                        <p className="mt-2 text-gray-600">{soin.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{soin.price}</span>
                          <div className="flex items-center text-gray-500">
                            <Clock className="mr-1 h-4 w-4" />
                            <span className="text-sm">{soin.duration}</span>
                          </div>
                        </div>
                        <Button className="mt-4 w-full bg-primary hover:bg-primary/90">Réserver</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="corps" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Soin de corps",
                      description:
                        "Presotherapie",
                      price: "150 DH - 200 DH",
                      duration: "30 min",
                      image: "https://centralspa.fr/wp-content/uploads/2020/11/pressotherapy.jpg",
                    },
                    {
                      title: "Soin de corps",
                      description: "Hifu vaginal",
                      price: "1000 DH - 1500 DH",
                      duration: "45 min",
                      image: "https://beautainrevive.com/media/2022/12/Hifu-Vaginal-Tightening-Treatment.jpg",
                    },
                    {
                      title: "Soin de corps ",
                      description: "Massage relaxant ",
                      price: "200 DH - 500 DH",
                      duration: "60 min",
                      image: "https://www.beauty-concept.fr/wp-content/uploads/elementor/thumbs/BEAUTY-CONCEPT-YUTZ-femme-massage-dos-1200x900-1-px0gsidavuxgcv44aev7o642670z4cg34tfrv7ouxu.jpg",
                    },
                    {
                      title: "Amincissement ",
                      description: "Lipo Cavitation",
                      price: "150 DH - 200 DH",
                      duration: "60 min",
                      image: "https://formations.dermafitcenter.com/public/img/medium/3D2DDEDF83A04F018B4D8930CC3FC0F7jpeg_64032c3cbcd5a.jpeg",
                    },
                    {
                      title: "Amincissement",
                      description: "Radiofréquence",
                      price: "150 DH - 200 DH",
                      duration: "60 min",
                      image: "https://jesuisenequilibre.fr/wp-content/uploads/2023/02/lipocavitation-ile-de-beaute.jpg",
                    },
                    {
                      title: "Soin de corps",
                      description: "Épilation définitive",
                      price: "150 DH -2500 DH",
                      duration: "60 min",
                      image: "https://dermatologie-arras.com/wp-content/uploads/2017/05/shutterstock_352909067.jpg",
                    },
                    {
                      title: "Soin de corps",
                      description: "Lifting Colombien",
                      price: "150 DH -2500 DH",
                      duration: "60 min",
                      image: "https://epilounge.ma/wp-content/uploads/2023/08/MACHINE-LIFTING-COLOMBIEN-EPILOUNGE.jpg",
                    },
                  ].map((soin, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src={soin.image || "/placeholder.svg"}
                        alt={soin.title}
                        width={300}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{soin.title}</h3>
                        <p className="mt-2 text-gray-600">{soin.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{soin.price}</span>
                          <div className="flex items-center text-gray-500">
                            <Clock className="mr-1 h-4 w-4" />
                            <span className="text-sm">{soin.duration}</span>
                          </div>
                        </div>
                        <Button className="mt-4 w-full bg-primary hover:bg-primary/90">Réserver</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

          <section id="produits" className="bg-secondary/5 py-24">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les Gammes de Soins</h2>
                <p className="mt-4 text-lg text-gray-600">
                Efficacité et résultats durables grâce à des soins professionnels hautement concentrés.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Gemology",
                    description: "Riche en diamant, cette crème lisse la peau et réduit les rides en stimulant le collagène.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpqzNZ-Q0qndfkmX1v3_W54kZBDbn1zXvcg&s",
                  },
                  {
                    name: "Photocean ",
                    description: "Pour une beauté inspirée de la nature.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyzbSd7yOpxf9TUlsmmElMoJ4yEg0LWo64Q&s",
                  },
                  {
                    name: "Zoskinhealt",
                    description: "Apaise les rougeurs et la rosacée avec des soins ciblés et efficaces.",
                    image: "https://www.healthandaesthetics.co.uk/wp-content/uploads/ZO_authorised_logo.png",
                  },
                  {
                    name: "Lendan",
                    description: "La gamme  vise à renforcer la barrière cutanée et à hydrater en profondeur .",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwAehdaJo3QpzoSN9DUObWmje9KjN6AddB_DpjdcZhw5pF3lKBZuw9TlbSh0RbtMSYjo",
                  },
                  
                ].map((produit, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="p-4">
                      <div className="flex justify-center">
                        <Image
                          src={produit.image || "/placeholder.svg"}
                          alt={produit.name}
                          width={200}
                          height={200}
                          className="h-40 w-40 object-cover rounded-full"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold">{produit.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{produit.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

        <section id="apropos" className="bg-secondary/5 py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-72 w-72 rounded-full bg-accent opacity-20 mix-blend-multiply blur-3xl" />
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-secondary opacity-20 mix-blend-multiply blur-3xl" />
                <div className="relative">
                  <Image
                    src="/logo1.jpg"
                    alt="Fondatrice"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">À Propos</h2>
                <p className="mt-4 text-lg text-gray-600">
                Bienvenue chez <strong>Eva skin</strong> 
                </p>
                <div className="mt-8 space-y-6">
                  <p className="text-gray-600">
                  Votre havre de beauté et de bien-être.
                  </p>
                  <p className="text-gray-600">
                  Au cœur de Casablanca, notre centre d’esthétique vous accueille dans un cadre chaleureux et apaisant, où chaque détail est pensé pour votre confort. Spécialisés en soins du visage,
                  épilation, amincissement massages et bien plus, nous mettons notre expertise au service de votre beauté naturelle.
                  </p>
                  <p className="text-gray-600">
                  Notre équipe passionnée et formée aux dernières techniques vous accompagne avec bienveillance, écoute et professionnalisme.
                  Que ce soit pour un moment de détente ou une mise en beauté, offrez-vous une parenthèse de douceur.
                  </p>
                  <p className="text-gray-600">
                  Prenez soin de vous, vous le méritez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="temoignages" className="bg-white py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Témoignages</h2>
              <p className="mt-4 text-lg text-gray-600">
                Ce que nos clientes disent de nos soins et de leur expérience.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Leila M.",
                  text: "J'ai découvert ce lieu magique il y a 6 mois et je ne peux plus m'en passer.L'ambiance est apaisante et le personnel attentionné.",
                  rating: 5,
                },
              
                {
                  name: "Yasmine K.",
                  text: "J'ai adoré  le soin anti-âge . L'équipe est professionnelle et les produits sont de qualité.",
                  rating: 4,
                },
                {
                  name: "Nadia R.",
                  text: "Excellente expérience pour mon soin du visage. Les produits de gamme professionnelle sentent divinement bon et les résultats sont visibles dès la première séance.",
                  rating: 5,
                },
                {
                  name: "Fatima Z.",
                  text: "J'ai suivi une cure de 5 soins et ma peau est métamorphosée ! Les conseils personnalisés m'ont aidée à adapter ma routine beauté quotidienne.",
                  rating: 5,
                },
                {
                  name: "Samira T.",
                  text: "Le massage à l'huile d'argan est un pur moment de détente. La praticienne a su cibler mes tensions et j'en suis ressortie complètement détendue.",
                  rating: 4,
                },
              ].map((temoignage, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < temoignage.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600">"{temoignage.text}"</p>
                  <p className="mt-4 font-semibold">{temoignage.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="reserver" className="bg-primary/5 py-24">
  <div className="container">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Réserver un Soin
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Prenez rendez-vous pour découvrir nos soins et rituels de beauté marocains.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      {/* Colonne gauche : Informations Pratiques */}
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-xl font-semibold">Informations Pratiques</h3>
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <h4 className="font-medium">Horaires d'ouverture</h4>
              <p className="mt-2 text-gray-600">
                Lundi - Vendredi: 9h00 - 19h00<br />
                Samedi: 10h00 - 18h00<br />
                Dimanche: Fermé
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <h4 className="font-medium">Adresse</h4>
              <p className="mt-2 text-gray-600">
                Casablanca<br />
                Aïn Chock
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <h4 className="font-medium">Contact</h4>
              <p className="mt-2 text-gray-600">
                Téléphone(1): +212 6 14 48 26 85<br />
                Téléphone(2): +212 6 39 47 24 74<br />
                <br />
                WhatsApp(1): +212 6 14 48 26 85<br />
                WhatsApp(2): +212 6 39 47 24 74<br />
                <br />
                Email: Evaskincasablanca@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <WhatsApp className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <h4 className="font-medium">Réservation Rapide</h4>
              <p className="mt-2 text-gray-600">
                Contactez-nous directement sur WhatsApp pour une réponse rapide.
              </p>
              <a
                href="https://wa.me/212614482685?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20soin."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="mt-2">
                  <WhatsApp className="mr-2 h-4 w-4" />
                  Réserver via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Colonne droite : Image */}
      <div className="flex items-center justify-center">
        <img
          src="https://odontoforma.com.br/wp-content/uploads/2020/10/hamoniza.jpg"
          alt="Salle de soins"
          className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[500px]"
        />
      </div>
    </div>
  </div>
  </section>
        
      </main>
      <footer className="bg-primary py-12 text-white">
  <div className="container">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Bloc Logo et Présentation */}
      <div>
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Eva skin</span>
        </div>
        <p className="mt-4 text-white/80">
          Nous sommes un centre d’épilation définitive et d’amincissement.
          Grâce à nos appareils et protocoles approuvés par les acteurs les plus imminents de l’esthétique,
          nous mettons en œuvre notre savoir-faire pour votre plus grand bonheur et bien-être.
        </p>
      </div>

      {/* Bloc Liens Rapides */}
      <div>
        <h3 className="text-lg font-semibold">Liens Rapides</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="#accueil" className="text-white/70 hover:text-white">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="#soins" className="text-white/70 hover:text-white">
              Nos Soins
            </Link>
          </li>
          <li>
            <Link href="#produits" className="text-white/70 hover:text-white">
              Gammes
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Bloc Horaires */}
      <div>
        <h3 className="text-lg font-semibold">Horaires</h3>
        <ul className="mt-4 space-y-2 text-white/70">
          <li>Lundi - Vendredi : 9h00 - 19h00</li>
          <li>Samedi : 10h00 - 18h00</li>
          <li>Dimanche : Fermé</li>
        </ul>
      </div>

      {/* Bloc Réservation */}
      <div>
        <h4 className="text-lg font-semibold">Réservation Rapide</h4>
        <p className="mt-2 text-white/70">
          Contactez-nous directement sur WhatsApp pour une réponse rapide.
        </p>
        <a
          href="https://wa.me/212614482685?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20soin."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="mt-2 text-black border-white hover:bg-white hover:text-primary">
            <WhatsApp className="mr-2 h-4 w-4" />
            Réserver via WhatsApp
          </Button>
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/70">
      <p>© {new Date().getFullYear()} Eva skin. Tous droits réservés.</p>
    </div>
  </div>
</footer>

    </div>
  )
}
