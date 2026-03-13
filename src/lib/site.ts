export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: string;
  size: string;
  roast: string;
  notes: string[];
  badge?: string;
  ministryUse: string;
  palette: string;
};

export const slogans = [
  "Rebuke fatigue.",
  "Preach awake.",
  "Brew bold. Give back.",
  "Fuel the saints.",
  "Coffee with conviction.",
];

export const featuredProducts: Product[] = [
  {
    slug: "rebuke-roast",
    name: "Rebuke Roast",
    subtitle: "Flagship dark roast",
    description:
      "Chocolate, cedar, and a clean finish for early sermon prep and long ministry nights.",
    longDescription:
      "The anchor product for the entire line. Rebuke Roast is deep, sturdy, and unmistakably bold without turning ashy. It is the bag you set on the counter when you want the room to feel awake, focused, and cared for.",
    price: "$18",
    size: "12 oz",
    roast: "Dark",
    notes: ["Dark chocolate", "Cedar", "Burnt sugar"],
    badge: "Best seller",
    ministryUse: "Perfect for sermon prep tables, early volunteer mornings, and men’s ministry gatherings.",
    palette: "from-[#5f3b2b] via-[#2f1b14] to-[#130d0b]",
  },
  {
    slug: "upper-room-blend",
    name: "Upper Room Blend",
    subtitle: "Balanced house blend",
    description:
      "Smooth caramel body with citrus lift — built for hospitality tables, staff rooms, and Sunday teams.",
    longDescription:
      "This is the easy-reach house coffee. It tastes premium without being precious, and it works for the broadest range of people. If Rebuke Roast is the statement piece, Upper Room Blend is the dependable everyday ministry workhorse.",
    price: "$17",
    size: "12 oz",
    roast: "Medium",
    notes: ["Caramel", "Orange peel", "Toasted almond"],
    badge: "Hospitality favorite",
    ministryUse: "Ideal for Sunday hospitality, lobby coffee stations, and staff meetings.",
    palette: "from-[#8b5e34] via-[#47301d] to-[#1b120d]",
  },
  {
    slug: "watch-and-pray-decaf",
    name: "Watch & Pray Decaf",
    subtitle: "Late-night comfort",
    description:
      "A richer decaf that keeps the ritual without the crash. Good for evenings, counseling, and second cups.",
    longDescription:
      "Most decaf feels like a concession. This one feels intentional. Watch & Pray Decaf keeps body and warmth in the cup so evening conversations, counseling sessions, and post-event wind-downs still feel dignified.",
    price: "$19",
    size: "12 oz",
    roast: "Medium-dark",
    notes: ["Cocoa nib", "Brown sugar", "Soft smoke"],
    badge: "Evening pick",
    ministryUse: "Built for counseling rooms, evening Bible studies, and second cups after sunset.",
    palette: "from-[#6b594c] via-[#342921] to-[#15110f]",
  },
  {
    slug: "coram-deo-cold-brew",
    name: "Coram Deo Cold Brew",
    subtitle: "Flashy cold brew release",
    description:
      "Velvety and sweet with molasses depth — a summer launch built for youth nights and outdoor events.",
    longDescription:
      "Coram Deo is the cooler seasonal sibling in the lineup. It is designed for iced service, event carts, and high-traffic gatherings where presentation matters as much as flavor. It gives the brand a younger, sharper edge.",
    price: "$21",
    size: "16 oz",
    roast: "Cold brew",
    notes: ["Molasses", "Cherry cola", "Cacao"],
    badge: "Seasonal drop",
    ministryUse: "Great for youth events, summer conferences, and branded church pop-ups.",
    palette: "from-[#7f3b1d] via-[#331a12] to-[#10090a]",
  },
  {
    slug: "loaves-and-fishes-espresso",
    name: "Loaves & Fishes Espresso",
    subtitle: "Espresso-forward blend",
    description:
      "Dense crema, cocoa finish, and a little citrus snap for cafés inside churches and partner ministries.",
    longDescription:
      "This one exists for churches with actual espresso service or ambitions to get there. It looks and feels premium, gives the catalog some technical legitimacy, and creates a product tier that feels more serious than basic drip coffee.",
    price: "$20",
    size: "12 oz",
    roast: "Espresso",
    notes: ["Cocoa", "Red fruit", "Molten caramel"],
    badge: "Cafe tier",
    ministryUse: "For church cafés, ministry training spaces, and partner venues wanting a stronger coffee identity.",
    palette: "from-[#4b2217] via-[#26110c] to-[#0f0908]",
  },
  {
    slug: "manna-morning",
    name: "Manna Morning",
    subtitle: "Bright breakfast roast",
    description:
      "Honeyed sweetness with a crisp finish — approachable, cheerful, and easy to serve at scale.",
    longDescription:
      "Manna Morning broadens the line with a lighter expression that still feels grounded. It is the product for gift sets, newcomers, and anyone who wants the brand to feel warm and inviting instead of intense all the time.",
    price: "$16",
    size: "12 oz",
    roast: "Light-medium",
    notes: ["Honey", "Pear", "Biscuit"],
    ministryUse: "A natural fit for welcome gifts, women’s gatherings, and broad Sunday-morning appeal.",
    palette: "from-[#b3844b] via-[#5f4427] to-[#18110d]",
  },
];

export const stats = [
  { value: "6", label: "Mock launch products ready for the catalog" },
  { value: "B2B", label: "Built to serve churches and ministry teams" },
  { value: "100%", label: "Brand story tied to ministry support" },
];

export const collections = [
  {
    name: "Sunday Essentials",
    description: "Dependable coffees for hospitality tables, volunteers, and church staff.",
  },
  {
    name: "Cafe Series",
    description: "Higher-identity products for churches building a stronger coffee culture.",
  },
  {
    name: "Seasonal Drops",
    description: "Limited releases for campaigns, fundraising pushes, and special events.",
  },
];

export function getProductBySlug(slug: string) {
  return featuredProducts.find((product) => product.slug === slug);
}
