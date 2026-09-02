const PRODUCTS = [
    {
        id: "cloud-comfort-mattress",
        sales: 1450,
        name: "Cloud Comfort Mattress",
        category: "Mattresses & Bases",
        price: 799,
        priceWas: 999,
        rating: "\u2605\u2605\u2605\u2605\u2606",
        reviews: "1,204 Reviews",
        highlights: [
            "<strong>Adjustable firmness:</strong> Flip to choose between medium or firm.",
            "<strong>Ergonomic support</strong> promotes healthy spinal alignment.",
            "<strong>Reduced allergy risk:</strong> removable, washable cover.",
            "<strong>Free pillow set</strong> included in the box (value up to $80)."
        ],
        sizes: ["Single", "Double", "Queen", "King"],
        editions: ["Original", "Plush"],
        features: [
            "Easily adjustable firmness \u2014 flip the mattress to change comfort level.",
            "Ergonomic support promotes natural spinal alignment.",
            "Free pillow set included in the box.",
            "Removable and breathable cover.",
            "Designed to sit on any surface: slatted or solid base, box spring, or floor."
        ],
        materials: "Layered memory foam core with a breathable knit cover.",
        measurements: "Queen: 153cm x 203cm x 25cm.",
        care: "Spot clean the cover only. Do not machine wash the foam core.",
        shipping: "Free shipping Australia-wide. Delivered compressed in one box."
    },
    {
        id: "oak-bed-frame",
        sales: 610,
        name: "Oak Bed Frame",
        category: "Bed Frames",
        price: 349,
        priceWas: 449,
        rating: "\u2605\u2605\u2605\u2605\u2605",
        reviews: "832 Reviews",
        highlights: [
            "<strong>Solid oak construction</strong> built to last.",
            "<strong>Tool-light assembly</strong> with included hardware.",
            "<strong>Under-bed clearance</strong> for storage boxes.",
            "<strong>Slatted base</strong> compatible with any mattress."
        ],
        sizes: ["Double", "Queen", "King"],
        editions: ["Natural Oak", "Walnut"],
        features: [
            "Solid oak frame with a hand-finished stain.",
            "Reinforced corner joints for long-term stability.",
            "Slatted base included \u2014 no box spring needed.",
            "Low-profile headboard design."
        ],
        materials: "Solid oak with a natural wood stain finish.",
        measurements: "Queen: 165cm x 210cm x 90cm (headboard height).",
        care: "Wipe with a dry or slightly damp cloth. Avoid harsh chemical cleaners.",
        shipping: "Free shipping Australia-wide. Delivered flat-packed in two boxes."
    },
    {
        id: "linen-bedding-set",
        sales: 2830,
        name: "Cotton Bedding Set",
        category: "Bedding & Linen",
        price: 79,
        priceWas: 99,
        rating: "\u2605\u2605\u2605\u2605\u2605",
        reviews: "2,015 Reviews",
        highlights: [
            "<strong>100% cotton</strong> for breathable comfort.",
            "<strong>Includes</strong> duvet cover and 2 pillowcases.",
            "<strong>Machine washable</strong> for easy care.",
            "<strong>Pre-shrunk fabric</strong> holds its fit wash after wash."
        ],
        sizes: ["Single", "Double", "Queen", "King"],
        editions: ["White", "Sage", "Charcoal"],
        features: [
            "100% combed cotton, 300 thread count.",
            "Includes 1 duvet cover and 2 pillowcases.",
            "Button closure to keep the duvet secure.",
            "Machine washable, tumble dry low."
        ],
        materials: "100% cotton, 300 thread count.",
        measurements: "Queen duvet cover: 210cm x 210cm.",
        care: "Machine wash cold, tumble dry low, do not bleach.",
        shipping: "Free shipping Australia-wide. Delivered in a compact satchel."
    },
    {
        id: "kids-bunk-bed",
        sales: 320,
        name: "Kids Bunk Bed",
        category: "Kids Bedroom",
        price: 549,
        priceWas: 649,
        rating: "\u2605\u2605\u2605\u2605\u2606",
        reviews: "412 Reviews",
        highlights: [
            "<strong>Space-saving</strong> bunk design for shared rooms.",
            "<strong>Built-in ladder</strong> and safety guard rails.",
            "<strong>Splits into two singles</strong> if needed later.",
            "<strong>Rounded edges</strong> for child safety."
        ],
        sizes: ["Single over Single"],
        editions: ["White", "Natural Pine"],
        features: [
            "Converts into two standalone single beds.",
            "Full-length guard rails on the top bunk.",
            "Integrated ladder with wide, non-slip steps.",
            "Rounded corners throughout for safety."
        ],
        materials: "Solid pine frame with a non-toxic finish.",
        measurements: "196cm L x 98cm W x 155cm H.",
        care: "Wipe clean with a soft, dry cloth.",
        shipping: "Free shipping Australia-wide. Delivered flat-packed in three boxes."
    },
    {
        id: "bedside-table",
        sales: 890,
        name: "Round Bedside Table",
        category: "Bedroom Furniture",
        price: 129,
        priceWas: 159,
        rating: "\u2605\u2605\u2605\u2605\u2605",
        reviews: "601 Reviews",
        highlights: [
            "<strong>Compact round design</strong> fits any bedroom.",
            "<strong>Single storage drawer</strong> included.",
            "<strong>Solid wood legs</strong> for stability.",
            "<strong>Quick assembly</strong> in under 10 minutes."
        ],
        sizes: ["Standard"],
        editions: ["Oak", "White", "Black"],
        features: [
            "Round tabletop with a soft-close storage drawer.",
            "Solid wood tapered legs.",
            "Compact footprint suited to smaller rooms.",
            "Simple 4-step assembly."
        ],
        materials: "Engineered wood top with solid wood legs.",
        measurements: "40cm diameter x 55cm height.",
        care: "Wipe with a dry or slightly damp cloth.",
        shipping: "Free shipping Australia-wide. Delivered in one compact box."
    },
    {
        id: "reading-lamp",
        sales: 540,
        name: "Warm Glow Reading Lamp",
        category: "Accessories",
        price: 45,
        priceWas: 59,
        rating: "\u2605\u2605\u2605\u2605\u2606",
        reviews: "289 Reviews",
        highlights: [
            "<strong>Adjustable warm light</strong> for bedtime reading.",
            "<strong>Touch dimmer</strong> with 3 brightness levels.",
            "<strong>USB-C charging port</strong> built into the base.",
            "<strong>Compact footprint</strong> for nightstands."
        ],
        sizes: ["Standard"],
        editions: ["Matte Black", "Cream"],
        features: [
            "Touch-sensitive dimmer with 3 brightness settings.",
            "Built-in USB-C port for charging your phone overnight.",
            "Soft, warm light designed to reduce eye strain before sleep.",
            "Compact base fits on any nightstand."
        ],
        materials: "Metal base with a fabric shade.",
        measurements: "18cm base diameter x 32cm height.",
        care: "Dust with a dry cloth. Unplug before cleaning.",
        shipping: "Free shipping Australia-wide."
    },
    {
        id: "storage-ottoman-bed",
        sales: 275,
        name: "Storage Ottoman Bed Base",
        category: "Mattresses & Bases",
        price: 429,
        priceWas: 549,
        rating: "\u2605\u2605\u2605\u2605\u2605",
        reviews: "198 Reviews",
        highlights: [
            "<strong>Gas-lift storage</strong> \u2014 lift the base to reveal hidden storage.",
            "<strong>Upholstered finish</strong> in a durable linen-look fabric.",
            "<strong>No bed frame needed</strong> \u2014 mattress sits directly on top.",
            "<strong>Quiet, smooth hinges</strong> rated for daily use."
        ],
        sizes: ["Double", "Queen", "King"],
        editions: ["Grey", "Beige", "Charcoal"],
        features: [
            "Full-length gas-lift mechanism for easy one-person opening.",
            "Large under-bed storage cavity.",
            "Reinforced slatted top compatible with any mattress type.",
            "Upholstered sides and headboard-free design."
        ],
        materials: "Engineered timber frame with linen-look polyester upholstery.",
        measurements: "Queen: 153cm x 203cm x 32cm.",
        care: "Vacuum upholstery regularly. Spot clean with a damp cloth.",
        shipping: "Free shipping Australia-wide. Delivered flat-packed in two boxes."
    },
    {
        id: "throw-pillow-set",
        sales: 1620,
        name: "Linen Throw Pillow Set",
        category: "Bedding & Linen",
        price: 39,
        priceWas: 55,
        rating: "\u2605\u2605\u2605\u2605\u2605",
        reviews: "944 Reviews",
        highlights: [
            "<strong>Set of 2</strong> decorative throw pillow covers.",
            "<strong>Linen-blend fabric</strong> with a soft, textured feel.",
            "<strong>Hidden zip closure</strong> for a clean finish.",
            "<strong>Machine washable</strong> covers."
        ],
        sizes: ["45cm x 45cm"],
        editions: ["Natural", "Sage", "Terracotta"],
        features: [
            "Set of 2 matching cushion covers.",
            "55% linen, 45% cotton blend.",
            "Hidden zip closure on the back seam.",
            "Machine washable, tumble dry low."
        ],
        materials: "55% linen, 45% cotton blend.",
        measurements: "45cm x 45cm (covers only, insert not included).",
        care: "Machine wash cold, tumble dry low.",
        shipping: "Free shipping Australia-wide."
    }
];