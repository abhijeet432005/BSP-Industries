// Product catalog.
// Add a new product by copying an existing object and giving it a unique `slug`.
// `specs` renders as a spec table on the product detail page.
// `image.tone` picks an accent used for the placeholder illustration until you add real photos.

export const products = [
  // Industrial Heater

  {
    slug: "low-density-cartridge-heater",
    name: "Low Density Cartridge Heater",
    category: "industrial-heater",
    model: "Low Density Cartridge Heater",
    badge: "Industrial",

    shortDescription:
      "Cartridge heating elements designed for controlled, uniform heating of molds, dies, platens, machinery, and other industrial components where lower surface heat loading is required.",

    description:
      "The Low Density Cartridge Heater is a cylindrical electric heating element designed for localized and controlled heating of industrial components. Low-watt-density cartridge heaters distribute the required heating power over a comparatively larger heating area, making them suitable for applications where controlled heat transfer and reduced surface heat loading are important. They are commonly installed into close-fitting drilled holes or heating bores in molds, dies, platens, machinery, and other solid components. BPS Industries offers Low Density Cartridge Heaters with customizable wattage, length, diameter, and wire-crimping configurations to suit different industrial heating requirements and installation conditions.",

    features: [
      "Low-watt-density cartridge heating design",
      "Cylindrical construction for bore and hole installation",
      "Designed for controlled localized heating",
      "Suitable for uniform heat transfer to solid components",
      "Suitable for molds, dies and platens",
      "Suitable for industrial machinery and process equipment",
      "Available in 100W and 1000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Stainless steel construction",
      "Customizable length",
      "Customizable diameter",
      "Internal or external wire crimping options",
      "Suitable for applications requiring controlled heat loading",
      "Suitable for customized industrial heating systems"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Low Density Cartridge Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "100W | 1000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Master Packing",
        value: "20 Pcs."
      },
      {
        label: "Length",
        value: "Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Wire Crimping",
        value: "Internal | External"
      },
      {
        label: "Density Type",
        value: "Low Watt Density"
      },
      {
        label: "Shape",
        value: "Cylindrical"
      },
      {
        label: "Heating Method",
        value: "Electrical Resistance"
      }
    ],

    applications: [
      "Molds and Dies",
      "Plastic Processing Equipment",
      "Industrial Machinery",
      "Platens and Plates",
      "Packaging Equipment",
      "Medical Equipment",
      "Specialized Industrial Heating"
    ],

    images: [
      "/Industrial Heater/Cartridge Heater 2.webp",
      "/Industrial Heater/Cartridge Heater.webp",
      "/Industrial Heater/Cartridge Heater 3.webp"
    ]
  },

  {
    slug: "high-density-cartridge-heater",
    name: "High Density Cartridge Heater",
    category: "industrial-heater",
    model: "High Density Cartridge Heater",
    badge: "Industrial",

    shortDescription:
      "High watt-density cartridge heating elements designed for concentrated and rapid heating of molds, dies, platens, machinery, and compact industrial heating applications.",

    description:
      "The High Density Cartridge Heater is a compact cylindrical electric heating element designed to deliver concentrated heating within a limited installation area. High-watt-density cartridge heaters are suited to applications where a higher heating output is required from a relatively compact heating surface. They are typically installed into close-fitting drilled holes or heating bores to transfer heat directly into molds, dies, platens, plates, and other industrial components. BPS Industries offers High Density Cartridge Heaters with customizable wattage, length, diameter, and wire-crimping configurations, allowing the heater to be matched to the required heating area, installation space, and equipment design.",

    features: [
      "High-watt-density cartridge heating design",
      "Compact cylindrical construction",
      "Designed for concentrated localized heating",
      "Suitable for applications requiring higher heat output from a compact area",
      "Designed for installation into heating bores and drilled holes",
      "Suitable for molds, dies and platens",
      "Suitable for industrial machinery and process equipment",
      "Available in 100W and 1000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Stainless steel construction",
      "Customizable length",
      "Customizable diameter",
      "Internal or external wire crimping options",
      "Suitable for compact industrial heating applications",
      "Suitable for customized industrial heating systems"
    ],

    specs: [
      {
        label: "Product Type",
        value: "High Density Cartridge Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "100W | 1000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Master Packing",
        value: "20 Pcs."
      },
      {
        label: "Length",
        value: "Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Wire Crimping",
        value: "Internal | External"
      },
      {
        label: "Density Type",
        value: "High Watt Density"
      },
      {
        label: "Shape",
        value: "Cylindrical"
      },
      {
        label: "Heating Method",
        value: "Electrical Resistance"
      }
    ],

    applications: [
      "Molds and Dies",
      "Plastic Processing Equipment",
      "Industrial Machinery",
      "Platens and Plates",
      "Packaging Equipment",
      "Medical Equipment",
      "Specialized Industrial Heating"
    ],

    images: [
      "/Industrial Heater/Cartridge Heater.webp",
      "/Industrial Heater/Cartridge Heater 2.webp",
      "/Industrial Heater/Cartridge Heater 3.webp"
    ]
  },

  {
    slug: "coil-heater",
    name: "Coil Heater",
    category: "industrial-heater",
    model: "Coil Heater",
    badge: "Industrial",

    shortDescription:
      "Compact coiled heating elements designed for precise localized heating of hot runner systems, injection moulding equipment, nozzles, manifolds, and other industrial components.",

    description:
      "The Coil Heater is a compact electric heating element designed for localized and controlled heating where installation space is limited. Its coiled construction allows the heater to follow the shape of the component being heated, making it suitable for cylindrical and application-specific heating surfaces. Coil heaters are widely used in hot runner systems, injection moulding machines, extrusion equipment, blow moulding machines, thermoforming equipment, packaging machinery, nozzles, and manifolds. BPS Industries provides customizable Coil Heaters with configurations developed according to the required heating area, dimensions, electrical rating, and equipment design. The compact form factor makes them suitable for applications requiring concentrated heating around nozzles, barrels, dies, and other industrial components.",

    features: [
      "Compact coiled electric heating element",
      "Designed for localized and controlled heating",
      "Suitable for compact and restricted installation spaces",
      "Coiled construction for application-specific fitting",
      "Suitable for hot runner systems",
      "Suitable for injection moulding machines",
      "Suitable for extrusion machines",
      "Suitable for blow moulding machines",
      "Suitable for thermoforming equipment",
      "Suitable for packaging machinery",
      "Suitable for heating nozzles and manifolds",
      "Customizable wattage according to application requirements",
      "Customizable voltage according to equipment requirements",
      "Customizable coil diameter and dimensions",
      "Customizable heating length",
      "Application-specific heating configuration"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Coil Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "Customizable"
      },
      {
        label: "Voltage",
        value: "Customizable"
      },
      {
        label: "Material",
        value: "Application Specific"
      },
      {
        label: "Coil Diameter",
        value: "Customizable"
      },
      {
        label: "Heating Length",
        value: "Customizable"
      },
      {
        label: "Shape",
        value: "Coiled / Application Specific"
      },
      {
        label: "Heating Method",
        value: "Electrical Resistance"
      },
      {
        label: "Configuration",
        value: "Customizable"
      }
    ],

    applications: [
      "Hot Runner Systems",
      "Injection Moulding Machines",
      "Extrusion Machines",
      "Blow Moulding Machines",
      "Thermoforming Machines",
      "Injection Moulding Nozzles",
      "Hot Runner Nozzles",
      "Manifolds",
      "Packaging Machinery"
    ],

    images: [
      "/Industrial Heater/Coil Heater 2.webp",
      "/Industrial Heater/Coil Heater.webp",
    ]
  },

  {
    slug: "porcelain-heater",
    name: "Porcelain Heater",
    category: "industrial-heater",
    model: "Porcelain Heater",
    badge: "Industrial",

    shortDescription:
      "Industrial porcelain heating elements designed for efficient heating of water, oil, chemical solutions, plating baths, ovens, and other process applications.",

    description:
      "Porcelain Heaters are robust industrial heating elements designed for direct and indirect heating applications. Constructed with ceramic porcelain insulation around a resistance heating element, they provide reliable heat transfer for a wide range of industrial processes. These heaters are commonly used for heating water, oil, foodstuff, alkaline solutions, anodizing and plating baths, chemical processing tanks, medium-size ovens, powder coating booths, and chemical and paint industry equipment. The heater can be supplied in different wattages, diameters, voltages, and customized lengths according to the application's heating and installation requirements.",

    features: [
      "High-temperature ceramic porcelain insulation",
      "Suitable for industrial liquid and process heating",
      "Available in 500W, 1000W and 2000W configurations",
      "Voltage options of 220-240V and 415-440V",
      "Available in multiple heater diameters",
      "Customizable heater length",
      "Suitable for horizontal and vertical installation",
      "Can be supplied with suitable mounting arrangements",
      "Designed for water, oil and foodstuff heating",
      "Suitable for anodizing and plating baths",
      "Suitable for alkaline and chemical solutions",
      "Suitable for ovens and powder coating applications"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Porcelain Heater"
      },
      {
        label: "Wattage",
        value: "500W | 1000W | 2000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V | 415-440V"
      },
      {
        label: "Material",
        value: "Ceramic / Porcelain"
      },
      {
        label: "Heater Diameter",
        value: "32mm | 35mm | 45mm | 48mm | 80mm"
      },
      {
        label: "Length",
        value: "Customizable"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Mounting",
        value: "As per application"
      },
      {
        label: "Installation",
        value: "Horizontal / Vertical"
      }
    ],

    applications: [
      "Water Heating",
      "Foodstuff Heating",
      "Oil Heating",
      "Anodizing Baths",
      "Plating Baths",
      "Alkaline Solutions",
      "Phosphoric Acid Processing",
      "Chromic Acid Processing",
      "Medium-Size Ovens",
      "Powder Coating Booths",
      "Chemical Industry",
      "Paint Industry"
    ],

    images: [
      "/Industrial Heater/Porcelain-Heater.webp"
    ]
  },

  {
    slug: "u-nipple-sterilizer-element",
    name: "U Nipple Sterilizer Element",
    category: "industrial-heater",
    model: "U Nipple Sterilizer Element",
    badge: "Sterilizer",

    shortDescription:
      "U-shaped nipple heating elements designed for efficient water heating in sterilizers, medical equipment, food processing, laboratories, and other heating applications.",

    description:
      "The U Nipple Sterilizer Element is a tubular electric heating element designed to rapidly and consistently heat water in sterilization and process-heating equipment. Its U-shaped construction provides an extended heating surface while the nipple mounting arrangement allows the element to be securely installed through a tank or vessel. Available in stainless steel and copper constructions, the element can be supplied in different wattages and lengths to suit specific equipment requirements. It is suitable for medical equipment sterilization, food processing, water treatment, laboratory sterilization, and beauty and spa equipment.",

    features: [
      "U-shaped tubular heating element",
      "Available in stainless steel and copper construction",
      "Designed for water heating and sterilization equipment",
      "Available in 500W, 1500W, 2000W and 3000W variants",
      "220-240V operating voltage",
      "Available in 12\", 18\" and 24\" lengths",
      "Custom lengths available as required",
      "8.7mm standard element diameter",
      "Nipple-mounted design for installation through tanks and vessels",
      "Suitable for medical, laboratory, food processing and water treatment applications"
    ],

    specs: [
      {
        label: "Product Type",
        value: "U Nipple Sterilizer Element"
      },
      {
        label: "SKU",
        value: "AE-20-23"
      },
      {
        label: "Wattage",
        value: "500W | 1500W | 2000W | 3000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | Copper"
      },
      {
        label: "Diameter",
        value: "8.7mm"
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | Customizable"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Shape",
        value: "U Type"
      },
      {
        label: "Mounting",
        value: "Nipple Mount"
      }
    ],

    applications: [
      "Medical Equipment Sterilization",
      "Food Processing",
      "Water Treatment",
      "Laboratory Sterilization",
      "Beauty and Spa Equipment Sterilization"
    ],

    images: [
      "/Industrial Heater/U Nipple Sterilizer Element.webp",
      "/Industrial Heater/U Nipple Sterilizer Element 2.webp",
      "/Industrial Heater/U Nipple Sterilizer Element 3.webp"
    ]
  },

  {
    slug: "u-l-nipple-sterilizer-element",
    name: "U+L Nipple Sterilizer Element",
    category: "industrial-heater",
    model: "U+L Nipple Sterilizer Element",
    badge: "Sterilizer",

    shortDescription:
      "U+L shaped tubular heating elements designed for reliable heating in sterilizers, medical equipment, water treatment, food processing, and laboratory applications.",

    description:
      "The U+L Nipple Sterilizer Element is a tubular electric heating element designed for efficient and controlled heating in sterilization and process-heating equipment. Its U+L configuration provides an extended heating surface while the nipple mounting arrangement allows convenient installation through tanks, vessels, and sterilizer equipment. Available in stainless steel and copper constructions, the element is offered in multiple wattage and length options and can be customized according to specific equipment and heating requirements. It is suitable for medical equipment sterilization, food processing, water treatment, laboratory sterilization, and beauty and spa equipment.",

    features: [
      "U+L shaped tubular heating element",
      "Available in stainless steel and copper construction",
      "Nipple mounting design for equipment installation",
      "Available in 500W, 1500W, 2000W and 3000W variants",
      "220-240V voltage configuration",
      "Available in 12\", 18\" and 24\" lengths",
      "Customizable length according to requirements",
      "Available in 8mm and 10.8mm diameter options",
      "Suitable for sterilization and water-heating equipment",
      "Suitable for medical, laboratory and food-processing applications"
    ],

    specs: [
      {
        label: "Product Type",
        value: "U+L Nipple Sterilizer Element"
      },
      {
        label: "SKU",
        value: "AE-20-23"
      },
      {
        label: "Wattage",
        value: "500W | 1500W | 2000W | 3000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | Copper"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | Customizable"
      },
      {
        label: "Diameter",
        value: "8mm | 10.8mm"
      },
      {
        label: "Shape",
        value: "U+L Type"
      },
      {
        label: "Fittings",
        value: "Nipple | Brass"
      }
    ],

    applications: [
      "Medical Equipment Sterilization",
      "Food Processing",
      "Water Treatment",
      "Laboratory Sterilization",
      "Beauty and Spa Equipment Sterilization"
    ],

    images: [
      "/Industrial Heater/U+L Nipple Sterilizer Element.webp",
    ]
  },

  {
    slug: "cmo-band-nipple-sterilizer-element",
    name: "CMO Band Nipple Sterilizer Element",
    category: "industrial-heater",
    model: "CMO Band Nipple Sterilizer Element",
    badge: "Sterilizer",

    shortDescription:
      "Band-type nipple heating elements designed for reliable heating in sterilizers, medical equipment, food processing, water treatment, and laboratory applications.",

    description:
      "The CMO Band Nipple Sterilizer Element is an electric heating element designed for sterilization and process-heating equipment. Its band-type heating configuration provides a practical solution for heating applications where the element is installed through a nipple-mounted connection. Available in stainless steel and copper constructions, it is offered in multiple wattage and length options to accommodate different equipment requirements. The element is suitable for medical equipment sterilization, food processing, water treatment, laboratory sterilization, and beauty and spa equipment sterilization.",

    features: [
      "Band-type heating element design",
      "Nipple mounting configuration",
      "Available in stainless steel and copper",
      "Available in 500W, 1500W, 2000W and 3000W variants",
      "220-240V voltage configuration",
      "Available in 12\", 18\" and 24\" lengths",
      "Customizable length according to requirements",
      "Available in 8mm and 10.8mm diameter options",
      "Brass nipple fitting option",
      "Suitable for sterilization and water-treatment equipment"
    ],

    specs: [
      {
        label: "Product Type",
        value: "CMO Band Nipple Sterilizer Element"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "500W | 1500W | 2000W | 3000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | Copper"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | Customizable"
      },
      {
        label: "Diameter",
        value: "8mm | 10.8mm"
      },
      {
        label: "Element Type",
        value: "Band Type"
      },
      {
        label: "Fitting",
        value: "Nipple | Brass"
      }
    ],

    applications: [
      "Medical Equipment Sterilization",
      "Food Processing",
      "Water Treatment",
      "Laboratory Sterilization",
      "Beauty and Spa Equipment Sterilization"
    ],

    images: [
      "/Industrial Heater/CMO Band Nipple Sterilizer Element.png",
      "/Industrial Heater/CMO Band Nipple Sterilizer Element 2.png",
    ]
  },

  {
    slug: "ceramic-infrared-heater",
    name: "Ceramic Infrared Heater",
    category: "industrial-heater",
    model: "Ceramic Infrared Heater",
    badge: "Industrial",

    shortDescription:
      "Ceramic infrared heating elements designed for targeted and efficient radiant heating in industrial, medical, aerospace, semiconductor, HVAC, automotive, and 3D printing applications.",

    description:
      "Ceramic Infrared Heaters are radiant heating elements that transfer heat through infrared radiation, allowing heat to be directed toward the required surface or material without direct contact. They are suitable for controlled heating, drying, curing, preheating, and other thermal processing applications. These heaters can be supplied in different wattages and customized sizes to suit specific equipment and installation requirements. They are used across industrial heating, medical equipment, aerospace, semiconductor manufacturing, HVAC, automotive, and 3D printing applications.",

    features: [
      "Ceramic infrared heating technology",
      "Radiant, contactless heat transfer",
      "Available in 100W and 1000W configurations",
      "220-240V voltage configuration",
      "Stainless steel construction",
      "Available in 10ML, 15ML and 20ML lengths",
      "Customizable diameter according to requirements",
      "Internal or external wire crimping options",
      "Suitable for targeted and controlled heating",
      "Suitable for customized industrial heating applications"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Ceramic Infrared Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "100W | 1000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Master Packing",
        value: "20 Pcs."
      },
      {
        label: "Size (Length)",
        value: "10ML | 15ML | 20ML"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Wire Crimping",
        value: "Internal | External"
      }
    ],

    applications: [
      "Industrial Heating",
      "Medical Equipment",
      "Aerospace",
      "Semiconductor Manufacturing",
      "HVAC",
      "Automotive",
      "3D Printing"
    ],

    images: [
      "/Industrial Heater/Ceramic-Infrared-Heater.webp",
      "/Industrial Heater/Ceramic-Infrared-Heater 2.webp",
    ]
  },

  {
    slug: "u-type-finned-heater",
    name: "U Type Finned Heater",
    category: "industrial-heater",
    model: "U Type Finned Heater",
    badge: "Industrial",

    shortDescription:
      "U-shaped finned tubular heating element designed for efficient air and gas heating in industrial drying, ovens, ducts, processing equipment, and forced-air systems.",

    description:
      "The U Type Finned Heater is an industrial tubular heating element designed primarily for efficient air and gas heating applications. Metal fins attached around the tubular element increase the available surface area, improving convective heat transfer to the surrounding airflow. Its U-shaped configuration provides a compact heating arrangement suitable for installation in ducts, ovens, dryers, heating chambers, and process equipment. Available in multiple wattages and lengths, the heater can also be customized to suit specific industrial heating and installation requirements.",

    features: [
      "U-shaped finned tubular heating element",
      "Extended fin surface for improved convective heat transfer",
      "Designed for air and gas heating applications",
      "Suitable for natural and forced-air heating systems",
      "Stainless steel construction",
      "Available from 500W to 2000W",
      "220-240V operating voltage",
      "Multiple standard length options available",
      "Customizable wattage, length and diameter",
      "Clamp, mild steel and stainless steel fitting options"
    ],

    specs: [
      {
        label: "Product Type",
        value: "U Type Finned Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "500W | 750W | 1000W | 1500W | 2000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | 30\" | 36\" | 39\" | Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Shape",
        value: "U Type"
      },
      {
        label: "Fittings",
        value: "Clamp | Mild Steel | Stainless Steel"
      }
    ],

    applications: [
      "Hybrid Cooling Tower Coils",
      "Printing Machines",
      "Production and Surface Coating Equipment",
      "Petroleum Industry",
      "Chemical Industry",
      "Steel Industry",
      "Food Industry",
      "Plastic Molding Industry",
      "Greenhouse Heating and Breeding",
      "Tanneries",
      "Anti-Freeze Coils for Process Air",
      "Paper Industry",
      "Wood Industry",
      "Glycol Dehydration Units",
      "Textile Production"
    ],

    images: [
      "/Industrial Heater/u type finned heater.webp"
    ]
  },

  {
    slug: "m-type-finned-heater",
    name: "M Type Finned Heater",
    category: "industrial-heater",
    model: "M Type Finned Heater",
    badge: "Industrial",

    shortDescription:
      "M-shaped finned tubular heating elements designed for efficient air and gas heating in industrial heating systems, dryers, ducts, HVAC equipment, and process machinery.",

    description:
      "The M Type Finned Heater is a finned tubular heating element designed for efficient heating of air and gases through forced convection. Its M-shaped fin configuration increases the effective heat-transfer surface area, allowing efficient heat transfer within a compact heating arrangement. The heater is suitable for industrial air-heating systems, cooling tower coils, printing machines, surface coating equipment, chemical and petroleum processing, plastic molding, food processing, textile production, and drying applications. It is available in multiple wattages and lengths, with customizable diameter and fitting options to suit specific equipment and installation requirements.",

    features: [
      "M-shaped finned tubular heating element",
      "Designed for air and gas heating",
      "Increased surface area for efficient heat transfer",
      "Suitable for forced-air and convection heating systems",
      "Stainless steel heater construction",
      "Stainless steel or GI fin material",
      "Available in 500W, 750W, 1000W, 1500W and 2000W variants",
      "220-240V voltage configuration",
      "Multiple standard length options",
      "Customizable diameter and length",
      "Multiple fitting options including nipple and brass",
    ],

    specs: [
      {
        label: "Product Type",
        value: "M Type Finned Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "500W | 750W | 1000W | 1500W | 2000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Fins Material",
        value: "Stainless Steel | GI"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | 30\" | 36\" | 39\" | Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Fittings",
        value: "Nipple | Brass | Mild Steel | Stainless Steel"
      },
      {
        label: "Shape",
        value: "M Type"
      }
    ],

    applications: [
      "Coils for Hybrid Cooling Towers",
      "Printing Machines",
      "Production and Surface Coating",
      "Petroleum Industry",
      "Chemical Industry",
      "Steel Industry",
      "Food Industry",
      "Plastic Molding Industry",
      "Greenhouse Heating and Breeding",
      "Tanneries",
      "Anti-Freeze Coils for Processing Air",
      "Paper Works",
      "Wood Industry",
      "Glycol Dehydration Units",
      "Textile Production"
    ],

    images: [
      "/Industrial Heater/M type finned heater.webp",
      "/Industrial Heater/M type finned heater 2.webp",
    ]
  },

  {
    slug: "straight-type-spiral-finned-heater",
    name: "Straight Type Spiral Finned Heater",
    category: "industrial-heater",
    model: "Straight Type Spiral Finned Heater",
    badge: "Industrial",

    shortDescription:
      "Straight tubular heating elements with spiral fins designed for efficient air and gas heating in industrial process equipment, drying systems, HVAC units, and forced-air applications.",

    description:
      "The Straight Type Spiral Finned Heater is a tubular electric heating element designed primarily for air and gas heating applications. A continuously wound spiral fin is provided around the heating tube to increase the effective heat-transfer surface area, allowing heat to be transferred efficiently to moving air or gas. The straight configuration makes the element suitable for installation in air ducts, heating chambers, ovens, dryers, HVAC equipment, and other forced-air heating systems. The heater is available in multiple wattage and length options, with customizable diameter and fitting configurations to suit different industrial equipment and installation requirements. Finned tubular heaters are widely used where controlled heat transfer to circulating air or gas is required.",

    features: [
      "Straight tubular heating element with spiral-wound fins",
      "Designed for air and gas heating applications",
      "Spiral fin construction increases the effective heat-transfer surface area",
      "Suitable for forced-air and convection heating systems",
      "Stainless steel heater construction",
      "Stainless steel or GI fin material",
      "Available in 500W, 750W, 1000W, 1500W and 2000W configurations",
      "220-240V voltage configuration",
      "Available in multiple standard lengths",
      "Customizable wattage and dimensions",
      "Customizable diameter according to application requirements",
      "Nipple and nut fitting options",
      "Suitable for integration into industrial air-heating equipment and duct systems"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Straight Type Spiral Finned Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "500W | 750W | 1000W | 1500W | 2000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Fins Material",
        value: "Stainless Steel | GI"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | 30\" | 36\" | 39\" | Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Fittings",
        value: "Nipple | Nut"
      },
      {
        label: "Shape",
        value: "Straight Type"
      },
      {
        label: "Fin Type",
        value: "Spiral Finned"
      }
    ],

    applications: [
      "Coils for Hybrid Cooling Towers",
      "Printing Machines",
      "Production or Surface Coatings",
      "Petroleum Industry",
      "Chemical Industry",
      "Steel Industry",
      "Food Industry",
      "Plastic Molding Industry",
      "Greenhouse Heaters and Breeding",
      "Tanneries",
      "Anti-Freeze Coils for Processing Air",
      "Paper Works",
      "Wood Industry",
      "Glycol Dehydration Units",
      "Textile Production"
    ],

    images: [
      "/Industrial Heater/straight type spiral heater.webp",
      "/Industrial Heater/straight type spiral heater 2.webp",
    ]
  },

  {
    slug: "strip-type-finned-heater",
    name: "Strip Type Finned Heater",
    category: "industrial-heater",
    model: "Strip Type Finned Heater",
    badge: "Industrial",

    shortDescription:
      "Strip-type finned heating elements designed for efficient air and process heating in industrial ducts, ovens, dryers, HVAC systems, and other forced-convection applications.",

    description:
      "The Strip Type Finned Heater is an industrial electric heating element designed for controlled heating of air and gases. Its strip-type heating construction is combined with metal fins to increase the effective heat-transfer surface area, allowing heat to be transferred efficiently to moving or surrounding air. Finned strip heaters are commonly used in forced-air heating systems, ducts, ovens, dryers, air-handling equipment, and other process-air applications. The heater can be supplied in different material combinations, wattages, lengths, thicknesses, and connection configurations to suit specific equipment and installation requirements. BPS Industries offers customizable configurations for industrial heating applications where a compact finned heating arrangement is required.",

    features: [
      "Strip-type finned heating element",
      "Designed for air and gas heating applications",
      "Finned construction increases the effective heat-transfer surface area",
      "Suitable for forced-air and convection heating systems",
      "Available in stainless steel, mild steel and ceramic material options",
      "Stainless steel, mild steel and aluminium fin material options",
      "Available in 100W and 1000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Available in multiple standard length options",
      "Customizable length and element thickness",
      "Lock and nut fitting options",
      "Wire and nut-bolt connection options",
      "Suitable for integration into industrial air-heating equipment"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Strip Type Finned Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "100W | 1000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | MS Steel | Ceramic"
      },
      {
        label: "Fins Material",
        value: "Stainless Steel | Mild Steel | Aluminium"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 21\" | 24\" | 29\" | 33\" | Customizable"
      },
      {
        label: "Thickness",
        value: "Customizable"
      },
      {
        label: "Fittings",
        value: "Lock | Nut"
      },
      {
        label: "Connection",
        value: "Wire | Nut Bolt"
      },
      {
        label: "Heater Type",
        value: "Strip Type Finned"
      }
    ],

    applications: [
      "Coils for Hybrid Cooling Towers",
      "Printing Machines",
      "Production or Surface Coatings",
      "Petroleum Industry",
      "Chemical Industry",
      "Steel Industry",
      "Food Industry",
      "Plastic Molding Industry",
      "Greenhouse Heaters and Breeding",
      "Tanneries",
      "Anti-Freeze Coils for Processing Air",
      "Paper Works",
      "Wood Industry",
      "Glycol Dehydration Units",
      "Textile Production"
    ],

    images: [
      "/Industrial Heater/strip type heater.webp",
      "/Industrial Heater/strip type heater 2.webp",
    ]
  },

  {
    slug: "square-finned-straight-type-heater",
    name: "Square Finned Straight Type Heater",
    category: "industrial-heater",
    model: "Square Finned Straight Type Heater",
    badge: "Industrial",

    shortDescription:
      "Straight tubular heating elements with square fins designed for efficient air and gas heating in industrial process equipment, dryers, ovens, ducts, HVAC systems, and other convection heating applications.",

    description:
      "The Square Finned Straight Type Heater is an industrial tubular heating element designed for air and gas heating applications. Its square-fin construction increases the effective heat-transfer surface area around the straight heating element, supporting efficient transfer of heat to surrounding or moving air. The straight configuration provides a practical arrangement for installation in air ducts, heating chambers, industrial ovens, dryers, HVAC equipment, and process-air systems. The heater is available in multiple wattage and length options, with customizable diameter and construction configurations to suit different industrial heating requirements. Finned tubular heating elements are commonly used where increased surface area and controlled heat transfer are required for natural or forced-convection heating.",

    features: [
      "Straight tubular heating element with square fin construction",
      "Designed for air and gas heating applications",
      "Square fins increase the effective heat-transfer surface area",
      "Suitable for natural and forced-convection heating",
      "Stainless steel heater construction",
      "Stainless steel or GI fin material",
      "Available in 100W and 1000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Available in multiple standard lengths",
      "Customizable diameter according to application requirements",
      "Suitable for industrial air-heating and process equipment",
      "Suitable for duct, dryer, oven and HVAC heating applications"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Square Finned Straight Type Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "100W | 1000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel"
      },
      {
        label: "Fins Material",
        value: "Stainless Steel | GI"
      },
      {
        label: "Master Packing",
        value: "12 Pcs."
      },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | 30\" | 36\" | 39\" | Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Shape",
        value: "Straight Type"
      },
      {
        label: "Fin Type",
        value: "Square Finned"
      }
    ],

    applications: [
      "Coils for Hybrid Cooling Towers",
      "Printing Machines",
      "Production or Surface Coatings",
      "Petroleum Industry",
      "Chemical Industry",
      "Steel Industry",
      "Food Industry",
      "Plastic Molding Industry",
      "Greenhouse Heaters and Breeding",
      "Tanneries",
      "Anti-Freeze Coils for Processing Air",
      "Paper Works",
      "Wood Industry",
      "Glycol Dehydration Units",
      "Textile Production"
    ],

    images: [
      "/Industrial Heater/square finned straight type heater.webp",
      "/Industrial Heater/square finned straight type heater 2.webp",
    ]
  },

  {
    slug: "immersion-heater",
    name: "Immersion Heater",
    category: "industrial-heater",
    model: "Immersion Heater",
    badge: "Industrial",

    shortDescription:
      "Heavy-duty threaded immersion heaters designed for direct heating of water, oils, chemical solutions, process fluids, and other industrial liquids.",

    description:
      "The Immersion Heater is a direct-contact electric heating solution designed for heating liquids and process fluids inside tanks, vessels, and other industrial equipment. The heating element is installed through a threaded connection, allowing the heated portion to be immersed directly into the medium. Direct immersion provides efficient transfer of electrical heat to the surrounding liquid and is widely used for water heating, oil heating, chemical processing, food processing, laboratory applications, and other industrial processes. The heater is available in multiple wattage configurations from 500W to 12000W, with stainless steel, mild steel, and Incoloy material options. Different thread sizes, lengths, and washer materials are available to accommodate specific tank and installation requirements. Industrial immersion heaters are commonly used for process water, oils, heat-transfer fluids, and compatible chemical solutions.",

    features: [
      "Direct immersion heating design",
      "Threaded mounting configuration for tank and vessel installation",
      "Designed for heating liquids and process fluids",
      "Available from 500W to 12000W",
      "Customizable wattage according to application requirements",
      "230-440V voltage configuration",
      "Available in stainless steel, M.S. and Incoloy construction",
      "Available in 9\" and 12\" standard lengths",
      "Customizable length according to requirements",
      "2\" and 2.5\" thread size options",
      "BSP thread configuration available",
      "Rubber, silicone and fibre washer options",
      "Suitable for water, oils, chemical solutions and process fluids",
      "Suitable for industrial tanks, vessels and process-heating equipment"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Immersion Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "500W to 12000W | Customizable"
      },
      {
        label: "Voltage",
        value: "230-440V"
      },
      {
        label: "Material",
        value: "Stainless Steel | M.S. | Incoloy"
      },
      {
        label: "Master Packing",
        value: "12 Pcs."
      },
      {
        label: "Length",
        value: "9\" | 12\" | Customizable"
      },
      {
        label: "Thread Size",
        value: "2\" | 2.5\" | BSP"
      },
      {
        label: "Washer",
        value: "Rubber | Silicone | Fibre"
      },
      {
        label: "Heating Method",
        value: "Direct Immersion"
      },
      {
        label: "Mounting",
        value: "Threaded / Screw Plug"
      }
    ],

    applications: [
      "Chemical Industry",
      "Cement Curing",
      "Oil and Gas Industry",
      "Food Processing",
      "Laboratories",
      "Aroma Oils"
    ],

    images: [
      "/Industrial Heater/Immersion Heater 2.webp",
      "/Industrial Heater/Immersion Heater.webp",
      "/Industrial Heater/Immersion Heater 3.webp"
    ]
  },

  {
    slug: "alkaline-heater",
    name: "Alkaline Heater",
    category: "industrial-heater",
    model: "Alkaline Heater",
    badge: "Chemical Heating",

    shortDescription:
      "Industrial immersion heaters designed for controlled heating of alkaline solutions, corrosive chemicals, plating baths, process fluids, oils, and chemical treatment tanks.",

    description:
      "The Alkaline Heater is a specialized industrial immersion heating solution designed for heating alkaline solutions, chemical process fluids, plating baths, oils, and other compatible liquids. The heating elements are immersed directly into the process medium, allowing heat to be transferred directly to the tank contents. Material and sheath selection are important in chemical heating applications because compatibility depends on the specific chemical, concentration, temperature, and operating conditions. BSP Industries offers these heaters with stainless steel, mild steel, lead-covered and Incoloy material options, along with customizable wattage, voltage, length, and element configurations. The heaters are suitable for chemical processing, plating, degreasing, water tanks, petrochemical processes, and other industrial applications requiring controlled tank heating. Chemical immersion-heater manufacturers similarly specify different sheath materials according to the chemical being heated and its concentration.",

    features: [
      "Designed for direct immersion heating of process liquids",
      "Suitable for alkaline and chemical process applications",
      "Available in stainless steel, mild steel, lead-covered and Incoloy constructions",
      "Lead-covered construction option for specified chemical applications",
      "Available from 1000W to 3000W with customizable wattage",
      "220-240V and 415-440V voltage options",
      "Customizable voltage configuration",
      "30-inch standard length with customizable length options",
      "Available in 1 or multiple element configurations",
      "1.5-inch and 2-inch diameter options as specified",
      "Star and Delta connection options",
      "MS/Casted connection safety box",
      "Designed for installation in chemical and process tanks",
      "Suitable for customized industrial chemical heating requirements"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Alkaline Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "1000W | 3000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V | 415-440V | Customizable"
      },
      {
        label: "Material",
        value: "Stainless Steel | Mild Steel | Lead Covered | Incoloy"
      },
      {
        label: "Master Packing",
        value: "20 Pcs."
      },
      {
        label: "Connection",
        value: "Star | Delta"
      },
      {
        label: "Diameter",
        value: "1.5\" | 2\""
      },
      {
        label: "Length",
        value: "30\" Standard | Customizable"
      },
      {
        label: "Element",
        value: "1 or above"
      },
      {
        label: "Connection Safety Box",
        value: "MS/Casted"
      },
      {
        label: "Heating Method",
        value: "Direct Immersion"
      }
    ],

    applications: [
      "Corrosive Chemicals",
      "Process Heating",
      "Chemical Plating",
      "Petrochemical",
      "Water Tanks",
      "Viscous Oils",
      "Salts and Solvents",
      "Freeze Protection",
      "Caustic Solutions",
      "Degreasing Tanks"
    ],

    images: [
      "/Industrial Heater/Alkaline Heater.webp",
      "/Industrial Heater/Alkaline Heater 2.webp",
      "/Industrial Heater/Alkaline Heater 3.webp"
    ]
  },

  {
    slug: "oven-tubular-heater",
    name: "Oven Tubular Heater",
    category: "industrial-heater",
    model: "Oven Tubular Heater",
    badge: "Industrial",

    shortDescription:
      "Customizable tubular heating elements designed for ovens, furnaces, molds, platens, process-air systems, packaging equipment, and other industrial heating applications.",

    description:
      "The Oven Tubular Heater is a versatile electric heating element designed for controlled heating of air, gases, metal surfaces, molds, platens, tanks, and process equipment. Its tubular construction allows the heating element to be configured according to the available installation space and heating requirements, making it suitable for oven and furnace heating as well as direct-contact and process-heating applications. The heater can transfer heat through conduction, convection, and radiation depending on the installation and application. BSP Industries offers customizable tubular heaters in stainless steel and Incoloy constructions, with customizable length, diameter, and design configurations. These heaters are suitable for industrial ovens and furnaces, process-air and gas heating, metal mold and platen heating, packaging equipment, medical and analytical equipment, drying and curing systems, liquid immersion and circulation heating, and other specialized thermal-processing applications. Tubular heating elements are widely used in ovens, molds, platens, air/gas heating and immersion applications.",

    features: [
      "Tubular electric heating element",
      "Designed for oven and furnace heating applications",
      "Suitable for conduction, convection and radiant heating",
      "Suitable for heating metal molds, dies, platens and other solid components",
      "Stainless steel and Incoloy material options",
      "Available in 200W and 4000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Customizable element length",
      "Customizable element design and configuration",
      "Customizable diameter",
      "Suitable for process air and gas heating",
      "Suitable for liquid immersion and circulation heating",
      "Suitable for packaging, laboratory and specialized industrial equipment"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Oven Tubular Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "200W | 4000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | Incoloy"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "Customizable"
      },
      {
        label: "Design",
        value: "Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Heating Method",
        value: "Conduction | Convection | Radiation"
      },
      {
        label: "Element Type",
        value: "Tubular"
      }
    ],

    applications: [
      "Metal Mold, Die and Platen Heating",
      "Medical and Analytical Device Heating",
      "Cast Into Metal Parts and Platens",
      "Cut and Seal Heads on Packaging Equipment",
      "Tank Wall and Pipe Heating",
      "Liquid Immersion and Circulation Heating",
      "Comfort Heating and Freeze Protection",
      "Furnace and Oven Heating",
      "Process Air and Gas Heating",
      "Thermoforming, Curing and Drying",
      "Incubators",
      "Laboratory Sterilizers",
      "Environmental Chambers"
    ],

    images: [
      "/Industrial Heater/Oven Tubular Heater.png",
      "/Industrial Heater/Oven Tubular Heater 2.png",
      "/Industrial Heater/Oven Tubular Heater 3.png"
    ]
  },

  {
    slug: "u-type-tubular-heater",
    name: "U Type Tubular Heater",
    category: "industrial-heater",
    model: "U Type Tubular Heater",
    badge: "Industrial",

    shortDescription:
      "U-shaped tubular heating elements designed for efficient heating of air, liquids, molds, tanks, ovens, furnaces, and industrial process equipment.",

    description:
      "The U Type Tubular Heater is a formed electric resistance heating element designed for a wide range of industrial heating applications. Its U-shaped configuration provides two parallel heating legs connected by a formed bend, creating a compact heating arrangement that can be integrated into tanks, ovens, ducts, machinery, molds, and other process equipment. Depending on the installation, tubular heaters can transfer heat to air, liquids, metal surfaces, and other compatible materials through direct contact, convection, or radiant heating. BSP Industries offers U Type Tubular Heaters with stainless steel and Incoloy material options, along with customizable wattage, length, diameter, and overall design to meet specific equipment requirements. U-shaped tubular elements are commonly used in air heating, liquid heating, ovens, tanks, molds, drying equipment, and industrial process heating.",

    features: [
      "U-shaped tubular electric heating element",
      "Compact two-leg heating configuration",
      "Suitable for air, liquid and industrial process heating",
      "Suitable for oven and furnace heating applications",
      "Suitable for tank and vessel heating",
      "Stainless steel and Incoloy material options",
      "Available in 200W and 4000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Customizable heating element length",
      "Customizable U-shaped design",
      "Customizable diameter",
      "Suitable for integration into molds, platens and metal components",
      "Suitable for specialized industrial heating equipment"
    ],

    specs: [
      {
        label: "Product Type",
        value: "U Type Tubular Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "200W | 4000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | Incoloy"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "Customizable"
      },
      {
        label: "Design",
        value: "Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Shape",
        value: "U Type"
      },
      {
        label: "Heating Method",
        value: "Electrical Resistance"
      }
    ],

    applications: [
      "Metal Mold Die and Platen Heating",
      "Medical and Analytical Device Heating",
      "Cast Into Metal Parts and Platens",
      "Cut and Seal Heads on Packaging Equipment",
      "Tank Wall and Pipe Heating",
      "Liquid Immersion and Circulation Heaters",
      "Comfort Heating and Freeze Protection",
      "Furnace and Oven Heating",
      "Process Air and Gas Heating",
      "Thermoforming, Curing and Drying",
      "Incubators",
      "Laboratory Sterilizers",
      "Environmental Chambers"
    ],

    images: [
      "/Industrial Heater/U Type Tubular Heater 3.webp",
      "/Industrial Heater/U Type Tubular Heater.webp",
      "/Industrial Heater/U Type Tubular Heater 2.webp",
    ]
  },

  {
    slug: "many-fold-oven-element",
    name: "Many Fold Oven Element",
    category: "industrial-heater",
    model: "Many Fold Oven Element",
    badge: "Industrial",

    shortDescription:
      "Multi-fold tubular heating elements designed for efficient and uniform heating in ovens, furnaces, drying equipment, packaging machinery, and other industrial heating applications.",

    description:
      "The Many Fold Oven Element is a formed tubular electric heating element designed for oven and industrial heating applications where a compact, extended heating path is required. Its multiple bends and folds allow the heating element to cover a larger heating area while fitting within a defined installation space. Depending on the equipment design, the element can provide heat through radiation, convection, or direct contact with the heated surface. BSP Industries offers Many Fold Oven Elements with stainless steel and Incoloy material options, along with customizable wattage, length, diameter, and overall design. The elements are suitable for industrial ovens and furnaces, process air and gas heating, thermoforming, curing, drying, packaging equipment, medical and analytical equipment, laboratory sterilizers, environmental chambers, and other specialized heating systems. Many-fold tubular elements are commonly used where an extended heating element needs to be arranged within a compact oven or heating chamber.",

    features: [
      "Multi-fold tubular heating element design",
      "Compact arrangement for extended heating coverage",
      "Designed for oven and furnace heating applications",
      "Suitable for convection and radiant heating applications",
      "Stainless steel and Incoloy material options",
      "Available in 200W and 4000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Customizable element length",
      "Customizable overall design and bend configuration",
      "Customizable diameter",
      "Suitable for process air and gas heating",
      "Suitable for thermoforming, curing and drying equipment",
      "Suitable for packaging and laboratory equipment",
      "Suitable for customized industrial heating systems"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Many Fold Oven Element"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "200W | 4000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Stainless Steel | Incoloy"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Length",
        value: "Customizable"
      },
      {
        label: "Design",
        value: "Customizable"
      },
      {
        label: "Diameter",
        value: "Customizable"
      },
      {
        label: "Shape",
        value: "Many Fold"
      },
      {
        label: "Element Type",
        value: "Tubular"
      },
      {
        label: "Heating Method",
        value: "Convection | Radiation | Direct Contact"
      }
    ],

    applications: [
      "Metal Mold Die and Platen Heating",
      "Medical and Analytical Device Heating",
      "Cast Into Metal Parts and Platens",
      "Cut and Seal Heads on Packaging Equipment",
      "Tank Wall and Pipe Heating",
      "Liquid Immersion and Circulation Heaters",
      "Comfort Heating and Freeze Protection",
      "Furnace and Oven Heating",
      "Process Air and Gas Heating",
      "Thermoforming, Curing and Drying",
      "Incubators",
      "Laboratory Sterilizers",
      "Environmental Chambers"
    ],

    images: [
      "/Industrial Heater/Many Fold Oven Element.png",
      "/Industrial Heater/Many Fold Oven Elements 3.png",
      "/Industrial Heater/Many Fold Oven Element 2.png",
    ]
  },

  {
    slug: "bobbin-heater",
    name: "Bobbin Heater",
    category: "industrial-heater",
    model: "Bobbin Heater",
    badge: "Industrial",

    shortDescription:
      "Industrial bobbin heating elements designed for controlled heating in baking equipment, furnaces, high-temperature ovens, water baths, salt baths, and specialized process-heating systems.",

    description:
      "The Bobbin Heater is an industrial electric heating element designed for controlled heating in ovens, furnaces, baths, and other process-heating equipment. Its compact cylindrical bobbin-style construction allows the heating element to be integrated into equipment where a defined heating diameter and length are required. Depending on the selected construction and application, bobbin heaters can be used for heating air, process equipment, water baths, salt baths, and other compatible heating environments. BSP Industries offers Bobbin Heaters in ceramic, stainless steel, and lead-covered material options, with wattages from 1000W to 4000W and customizable configurations. The heaters are available in 1.5-inch and 2-inch diameter options and multiple standard lengths, making them suitable for baking equipment, furnaces, high-temperature ovens, water-bath systems, salt-bath applications, and other industrial heating requirements. Material selection for bath and chemical applications should be matched to the specific medium and operating conditions.",

    features: [
      "Compact cylindrical bobbin heater construction",
      "Designed for industrial process heating applications",
      "Suitable for oven and furnace heating",
      "Suitable for water-bath and salt-bath heating applications",
      "Ceramic, stainless steel and lead-covered material options",
      "Available in 1000W, 1500W, 2000W, 3000W and 4000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Available in 1.5-inch and 2-inch diameter options",
      "Available in multiple standard lengths",
      "Customizable length according to requirements",
      "Suitable for baking and high-temperature heating equipment",
      "Suitable for specialized industrial heating systems"
    ],

    specs: [
      {
        label: "Product Type",
        value: "Bobbin Heater"
      },
      {
        label: "SKU",
        value: "—"
      },
      {
        label: "Wattage",
        value: "1000W | 1500W | 2000W | 3000W | 4000W | Customizable"
      },
      {
        label: "Voltage",
        value: "220-240V"
      },
      {
        label: "Material",
        value: "Ceramic | Stainless Steel | Lead Covered"
      },
      {
        label: "Master Packing",
        value: "25 Pcs."
      },
      {
        label: "Diameter",
        value: "1.5\" | 2\""
      },
      {
        label: "Length",
        value: "18\" | 24\" | 28\" | 30\" | 34\" | Customizable"
      },
      {
        label: "Heating Method",
        value: "Electrical Resistance"
      },
      {
        label: "Construction",
        value: "Bobbin Type"
      }
    ],

    applications: [
      "Baking Industry",
      "Furnaces",
      "High Temperature Ovens",
      "Water Bath",
      "Salt Bath"
    ],

    images: [
      "/Industrial Heater/Bobbin Heater.webp",
      "/Industrial Heater/Bobbin Heater 2.webp",
    ]
  },

  {
    slug: "titanium-chemical-heater",
    name: "Titanium Chemical Heater",
    category: "industrial-heater",
    model: "Titanium Chemical Heater",
    badge: "Chemical Heating",

    shortDescription:
      "Titanium immersion heaters designed for chemical processing, plating, galvanizing, aquaculture, desalination, and other demanding liquid-heating applications.",

    description:
      "The Titanium Chemical Heater is an industrial immersion heating solution designed for heating chemical and process liquids in demanding industrial environments. Its titanium construction is used where resistance to corrosion and compatibility with the process medium are important considerations. Titanium immersion heaters are commonly used in electroplating, pickling, chemical processing, surface treatment, and other specialized tank-heating applications. BSP Industries offers these heaters in multiple wattage and length configurations, with customizable designs to suit different tanks and process equipment. The heater is available in 220-240V configuration with a 1.5-inch diameter, wire connection, and rubber-cap safety arrangement. Chemical compatibility should be evaluated against the specific liquid, concentration, temperature, and operating conditions before selection.",

    features: [
      "Titanium construction",
      "Designed for industrial chemical and process-liquid heating",
      "Suitable for demanding chemical processing environments",
      "Designed for direct immersion heating applications",
      "Available in 1000W, 1500W, 2000W and 3000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Available in 12\", 18\", 24\", 30\" and 36\" lengths",
      "Customizable heater length",
      "Customizable overall heater design",
      "1.5-inch diameter configuration",
      "Wire connection",
      "Rubber-cap safety arrangement",
      "Suitable for plating, galvanizing and chemical process applications",
      "Chemical compatibility should be verified for the specific process medium"
    ],

    specs: [
      { label: "Product Type", value: "Titanium Chemical Heater" },
      { label: "SKU", value: "—" },
      {
        label: "Wattage",
        value: "1000W | 1500W | 2000W | 3000W | Customizable"
      },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Titanium" },
      { label: "Master Packing", value: "20 Pcs." },
      {
        label: "Length",
        value: "12\" | 18\" | 24\" | 30\" | 36\" | Customizable"
      },
      { label: "Design", value: "Customizable" },
      { label: "Diameter", value: "1.5\"" },
      { label: "Connection", value: "Wire" },
      { label: "Safety", value: "Rubber Cap" },
      { label: "Heating Method", value: "Direct Immersion" }
    ],

    applications: [
      "Hydrochloric Acid Heater for Plating",
      "Galvanizing and Wire Industries",
      "Commercial Aquariums and Aquaculture",
      "Desalination Heater for Ships",
      "Steel Pickling Heat Exchanger for the Steel Industry"
    ],

    images: [
      "/Industrial Heater/Titanium Chemical Heaters.png",
      "/Industrial Heater/Titanium Chemical Heaters 2.png",
    ]
  },

  {
    slug: "jali-type-space-heater",
    name: "Jali Type Space Heater",
    category: "industrial-heater",
    model: "Jali Type Space Heater",
    badge: "Industrial",

    shortDescription:
      "Compact jali-type space heaters designed for controlled heating in electrical panels, control enclosures, storage units, packaging equipment, and other industrial applications.",

    description:
      "The Jali Type Space Heater is a compact electrical heating solution designed to provide localized heating within enclosed industrial equipment and electrical systems. Its jali-type construction allows the heater to be used in applications where controlled heat distribution is required within a confined space. Space heaters are commonly installed in electrical and control enclosures to help maintain suitable internal conditions and reduce moisture-related condensation. BSP Industries offers Jali Type Space Heaters in multiple wattage configurations with stainless steel and mild steel material options, customizable length, and 1.5-inch or 2-inch diameter configurations. The heaters are suitable for control panels, storage units, electrical enclosures, packaging equipment, baking and cooking applications, and other customized industrial heating requirements.",

    features: [
      "Jali-type space heater construction",
      "Compact heating solution for enclosed equipment",
      "Suitable for control panels and electrical enclosures",
      "Helps provide controlled heating within enclosed spaces",
      "Available in 60W, 80W, 100W and 120W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Available in stainless steel and mild steel construction",
      "1.5-inch and 2-inch diameter options",
      "Customizable heater length",
      "Available with one or more heating elements",
      "MS/Casted connection safety box",
      "Suitable for packaging, baking and cooking equipment",
      "Suitable for customized industrial heating applications"
    ],

    specs: [
      { label: "Product Type", value: "Jali Type Space Heater" },
      { label: "SKU", value: "—" },
      {
        label: "Wattage",
        value: "60W | 80W | 100W | 120W | Customizable"
      },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Mild Steel" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Shape Type", value: "Jali" },
      { label: "Diameter", value: "1.5\" | 2\"" },
      { label: "Length", value: "Customizable" },
      { label: "Element", value: "1 or above" },
      { label: "Connection Safety Box", value: "MS/Casted" },
      { label: "Heating Method", value: "Electrical Resistance" }
    ],

    applications: [
      "Control Panels",
      "Storage Units",
      "Electrical Enclosures",
      "Packaging Industry",
      "Baking & Cooking"
    ],

    images: [
      "/Industrial Heater/Jali type space heater.webp",
    ]
  },

  {
    slug: "box-type-space-heater",
    name: "Box Type Space Heater",
    category: "industrial-heater",
    model: "Box Type Space Heater",
    badge: "Panel Heating",

    shortDescription:
      "Compact box-type space heaters designed for controlled heating inside electrical panels, control cabinets, switchgear enclosures, and other enclosed industrial equipment.",

    description:
      "The Box Type Space Heater is a compact electrical heating solution designed to maintain a suitable internal environment inside electrical enclosures and industrial equipment. By providing localized heat within an enclosed space, it can help reduce condensation and moisture-related issues that may affect electrical components and connections. The aluminium box-type construction provides a practical enclosure for the heating element and is suitable for installation in control panels, storage units, electrical enclosures, and switchgear cabinets. BSP Industries offers Box Type Space Heaters in 60W, 80W, 100W and 120W configurations at 220-240V, with a standard-length construction for panel and enclosure heating applications.",

    features: [
      "Compact box-type space heater construction",
      "Designed for enclosed electrical equipment",
      "Suitable for control panels and electrical enclosures",
      "Helps reduce condensation inside enclosed panels",
      "Suitable for switchgear and electrical cabinets",
      "Available in 60W, 80W, 100W and 120W configurations",
      "220-240V voltage configuration",
      "Aluminium construction",
      "Standard-length configuration",
      "Designed for localized enclosure heating",
      "Suitable for storage and electrical equipment enclosures"
    ],

    specs: [
      { label: "Product Type", value: "Box Type Space Heater" },
      { label: "SKU", value: "—" },
      {
        label: "Wattage",
        value: "60W | 80W | 100W | 120W | Customizable"
      },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Aluminium" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Shape Type", value: "Box" },
      { label: "Length", value: "Standard" },
      { label: "Heating Method", value: "Electrical Resistance" }
    ],

    applications: [
      "Control Panels",
      "Storage Units",
      "Electrical Enclosures",
      "Switchgear Cabinets"
    ],

    images: [
      "/Industrial Heater/Box Type Space Heater.png",
      "/Industrial Heater/Box Type Space Heater 2.png",
      "/Industrial Heater/Box Type Space Heater 3.png",
    ]
  },

  {
    slug: "mica-band-heater",
    name: "Mica Band Heater",
    category: "industrial-heater",
    model: "Mica Band Heater",
    badge: "Industrial",

    shortDescription:
      "Mica-insulated band heaters designed for controlled and uniform heating of plastic processing equipment, dies, drums, tanks, and cylindrical industrial components.",

    description:
      "The Mica Band Heater is a cylindrical electric resistance heating element designed to provide controlled surface heating around barrels, dies, drums, tanks, and other curved industrial components. Mica insulation is used around the heating element to provide electrical insulation while allowing heat to transfer toward the heated surface. Mica band heaters are widely used in plastic processing equipment, including injection molding machines, extrusion dies, plastic extruders, blow molding machines, and other equipment requiring localized cylindrical heating. BSP Industries offers Mica Band Heaters in 1000W and 2000W configurations, with customizable wattage, length, and diameter options. The heater is supplied with wire or connector fittings and is also suitable for external tank and vessel heating, drum heating, food processing, and paper processing equipment.",

    features: [
      "Mica-insulated band heater construction",
      "Designed for cylindrical surface heating",
      "Suitable for plastic processing machinery",
      "Suitable for injection molding and extrusion equipment",
      "Suitable for blow molding machines and extrusion dies",
      "Suitable for external tank and vessel heating",
      "Available in 1000W and 2000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Mica sheet insulation material",
      "Available in 12-inch and 14-inch standard lengths",
      "Customizable heater length",
      "Customizable diameter",
      "Wire and connector fitting options",
      "Suitable for drum, food processing and paper processing applications"
    ],

    specs: [
      { label: "Product Type", value: "Mica Band Heater" },
      { label: "SKU", value: "—" },
      {
        label: "Wattage",
        value: "1000W | 2000W | Customizable"
      },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Mica Sheet" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Length", value: "12\" | 14\" | Customizable" },
      { label: "Diameter", value: "Customizable" },
      { label: "Fittings", value: "Wire | Connector" },
      { label: "Heater Type", value: "Mica Band" },
      { label: "Heating Method", value: "Electrical Resistance" }
    ],

    applications: [
      "Blow Molding Machines",
      "Extrusion Dies",
      "Plastic Extruders",
      "External Tank and Vessel Heating",
      "Blown Film Dies",
      "Plastic Injection Molding Machines",
      "Drum Heating",
      "Food Processing Industries",
      "Paper Processing Equipment"
    ],

    images: [
      "/Industrial Heater/Mica Band Heater.webp",
      "/Industrial Heater/Mica Band Heater 2.webp",
    ]
  },

  {
    slug: "infrared-glass-tube-element",
    name: "Infrared Glass Tube Element",
    category: "industrial-heater",
    model: "Infrared Glass Tube Element",
    badge: "Infrared",

    shortDescription:
      "Glass tube infrared heating elements designed for controlled radiant heating in food warming, laboratory equipment, medical equipment, and specialized infrared heating systems.",

    description:
      "The Infrared Glass Tube Element is an electric radiant heating element designed to transfer heat through infrared radiation without requiring direct contact with the heated surface. Its glass tube construction houses the heating element and allows infrared energy to be directed toward the target area. Glass and quartz tube infrared heaters are used across industrial and specialized heating applications, including food processing and warming, laboratory equipment, drying and heating systems, and other controlled radiant-heating applications. BSP Industries offers Infrared Glass Tube Elements in 100W and 2000W configurations at 220-240V, with customizable length and three tube appearance options: see-through, half-milky, and full-milky. The element can be configured according to the requirements of the equipment and heating application.",

    features: [
      "Glass tube infrared heating element",
      "Designed for radiant infrared heating",
      "Contactless heat transfer",
      "Suitable for controlled and localized heating",
      "Available in 100W and 2000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Glass tube construction",
      "Customizable element length",
      "Available in see-through glass tube configuration",
      "Available in half-milky glass tube configuration",
      "Available in full-milky glass tube configuration",
      "Suitable for food warming and processing applications",
      "Suitable for laboratory and medical equipment",
      "Suitable for customized infrared heating systems"
    ],

    specs: [
      { label: "Product Type", value: "Infrared Glass Tube Element" },
      { label: "SKU", value: "—" },
      {
        label: "Wattage",
        value: "100W | 2000W | Customizable"
      },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Glass Tube" },
      { label: "Master Packing", value: "20 Pcs." },
      { label: "Length", value: "Customizable" },
      {
        label: "Coating / Appearance",
        value: "See Through | Half Milky | Full Milky"
      },
      { label: "Heating Method", value: "Infrared Radiation" },
      { label: "Element Type", value: "Glass Tube Infrared" }
    ],

    applications: [
      "Infrared Heating",
      "Food Warming",
      "Laboratory Equipment",
      "Medical Equipment",
      "Heat Therapy"
    ],

    images: [
      "/Industrial Heater/Infrared Glass Tube Element.webp",
      "/Industrial Heater/Infrared Glass Tube Element 2.webp",
      "/Industrial Heater/Infrared Glass Tube Element 3.webp"
    ]
  },

  // Commercial Heater

  {
    slug: "commercial-immersion-heater",
    name: "Commercial Immersion Heater",
    category: "commercial-heater",
    model: "Commercial Immersion Heater",
    badge: "Commercial",

    shortDescription:
      "High-capacity immersion heaters designed for commercial water heating, boilers, heat-transfer systems, oil heating, food processing, and process-liquid applications.",

    description:
      "The Commercial Immersion Heater is a direct-contact electric heating solution designed for heating water, oils, glycol solutions, and other compatible process liquids in commercial and industrial equipment. The heating element is installed through a threaded connection and immersed directly into the heating medium, allowing heat to be transferred directly to the liquid. Commercial immersion heaters are commonly used in boilers, water-heating systems, heat-transfer equipment, laundry machinery, food processing equipment, oil-heating systems, and steam-generation applications. BSP Industries offers Commercial Immersion Heaters in stainless steel, copper, and Incoloy constructions, with wattage configurations from 1000W to 12000W and customizable designs. Multiple thread sizes, immersion lengths, washer options, and an optional thermostat configuration are available to suit different equipment and process requirements.",

    features: [
      "Direct immersion heating design",
      "Designed for commercial and process-liquid heating",
      "Suitable for water, oil, glycol and compatible process fluids",
      "Available in 1000W, 6000W, 9000W and 12000W configurations",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Stainless steel, copper and Incoloy material options",
      "Available in 9\", 12\", 15\" and 18\" standard lengths",
      "Customizable heater length",
      "Multiple threaded mounting options",
      "1\", 1.25\", 1.5\", 2\" and 2.5\" thread sizes",
      "BSP thread configuration available",
      "Rubber and silicone washer options",
      "Thermostat option for temperature control",
      "Suitable for boilers, water heating and heat-transfer systems",
      "Suitable for commercial food and laundry equipment"
    ],

    specs: [
      { label: "Product Type", value: "Commercial Immersion Heater" },
      { label: "SKU", value: "—" },
      {
        label: "Wattage",
        value: "1000W | 6000W | 9000W | 12000W | Customizable"
      },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper | Incoloy" },
      { label: "Master Packing", value: "12 Pcs." },
      {
        label: "Length",
        value: "9\" | 12\" | 15\" | 18\" | Customizable"
      },
      {
        label: "Thread Size",
        value: "1\" | 1.25\" | 1.5\" | 2\" | 2.5\" | BSP"
      },
      { label: "Washer", value: "Rubber | Silicone" },
      { label: "Additional", value: "Thermostat" },
      { label: "Heating Method", value: "Direct Immersion" },
      { label: "Mounting", value: "Threaded" }
    ],

    applications: [
      "Heat Transfer Systems",
      "Boilers and Water Heating",
      "Laundry Machines",
      "Food Processing Equipment",
      "Lube and Fuel Oil Heating",
      "Hydraulic and Heat Transfer Oils",
      "Water-Glycol Solution Heating",
      "Chemical Heating",
      "Steam Generators"
    ],

    images: [
      "/Commercial Heater/Commercial Immersion Heater.png",
      "/Commercial Heater/Commercial Immersion Heater 2.png",
    ]
  },

  {
    slug: "cup-type-element",
    name: "Cup Type Element",
    category: "commercial-heater",
    model: "Cup Type Element",
    badge: "Commercial",

    shortDescription:
      "Cup-type electric heating elements designed for water heating, coffee and tea machines, instant geysers, boilers, hospitality equipment, and other commercial heating applications.",

    description:
      "The Cup Type Element is an electric immersion heating element designed for heating water and other compatible liquids in commercial heating equipment. Its cup-type construction provides a compact heating arrangement suitable for integration into coffee machines, tea vending machines, instant geysers, boilers, and other water-heating systems. Cup-type heating elements are commonly used in water-heating equipment where the heating element is installed into a dedicated mounting arrangement and transfers heat directly to the surrounding medium. BSP Industries offers Cup Type Elements in 1000W to 1800W configurations, with stainless steel, copper, and Incoloy material options and customizable length. These elements are suitable for coffee machine and tea vending applications, instant geysers, boilers, hospitality equipment, and other commercial heating systems.",

    features: [
      "Cup-type electric heating element",
      "Designed for direct liquid heating",
      "Suitable for water-heating applications",
      "Suitable for coffee and tea vending equipment",
      "Suitable for instant geysers and boilers",
      "Available from 1000W to 1800W",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Available in stainless steel, copper and Incoloy construction",
      "Customizable element length",
      "Designed for commercial heating equipment",
      "Suitable for hospitality and beverage-processing applications",
      "Suitable for customized heating equipment"
    ],

    specs: [
      { label: "Product Type", value: "Cup Type Element" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "1000W to 1800W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper | Incoloy" },
      { label: "Master Packing", value: "20 Pcs." },
      { label: "Length", value: "Customizable" },
      { label: "Heating Method", value: "Direct Immersion" },
      { label: "Element Type", value: "Cup Type" },
      { label: "Configuration", value: "Customizable" }
    ],

    applications: [
      "Coffee Machine Industry",
      "Tea Vending Industry",
      "Instant Geysers",
      "Boilers",
      "Hospitality"
    ],

    images: [
      "/Commercial Heater/Cup Type Element 2.webp",
      "/Commercial Heater/Cup Type Element.webp",
      "/Commercial Heater/Cup Type Element 3.webp"
    ]
  },

  {
    slug: "porcelain-heating-element",
    name: "Porcelain Heating Element",
    category: "commercial-heater",
    model: "Porcelain Heating Element",
    badge: "Commercial",

    shortDescription:
      "Porcelain heating elements designed for commercial water, oil, food, chemical, plating, oven, and process-heating applications.",

    description:
      "The Porcelain Heating Element is a ceramic-based electric heating element designed for commercial and process-heating applications involving water, oil, food products, chemical solutions, and other compatible heating media. Its porcelain construction provides an electrically insulated heating arrangement and is commonly used in heating systems for liquids, baths, ovens, and process equipment. Porcelain heating elements are used in applications such as water and oil heating, food processing, anodizing and plating baths, alkaline solutions, medium-size ovens, powder coating equipment, and chemical and paint processing. BSP Industries offers these elements in 500W to 2000W configurations at 220-240V, with customizable wattage, diameter, and overall size according to the required heating configuration.",

    features: [
      "Porcelain/ceramic heating element construction",
      "Designed for commercial and process heating",
      "Suitable for water, oil and foodstuff heating",
      "Suitable for anodizing and plating baths",
      "Suitable for alkaline solution heating",
      "Suitable for phosphoric acid and chromic acid processing",
      "Suitable for medium-size ovens",
      "Suitable for powder coating equipment",
      "Available in 500W to 2000W configurations",
      "Customizable wattage according to requirements",
      "220-240V voltage configuration",
      "32mm, 35mm and 45mm diameter options",
      "Customizable diameter",
      "Overall size customizable according to the number of elements",
      "Suitable for commercial and specialized heating equipment"
    ],

    specs: [
      { label: "Product Type", value: "Porcelain Heating Element" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "500W to 2000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Ceramic | Porcelain" },
      { label: "Diameter", value: "32mm | 35mm | 45mm | Customizable" },
      { label: "Master Packing", value: "20 Pcs." },
      {
        label: "Size",
        value: "Depends upon the number of elements | Customizable"
      },
      { label: "Heating Method", value: "Electrical Resistance" },
      { label: "Element Type", value: "Porcelain / Ceramic" }
    ],

    applications: [
      "Water, Foodstuff and Oil Heating",
      "Anodizing and Plating Baths",
      "Alkaline Solutions",
      "Phosphoric Acid and Chromic Acid Processing",
      "Medium Size Ovens",
      "Powder Coating Booths",
      "Chemical and Paint Industry"
    ],

    images: [
      "/Commercial Heater/Porcelain-Heater.webp",
    ]
  },

  {
    slug: "bain-marie-heating-element",
    name: "Bain Marie Heating Element",
    category: "commercial-heater",
    model: "Bain Marie Heating Element",
    badge: "Commercial",

    shortDescription:
      "Commercial heating elements designed for Bain Marie food warmers, water-bath heating systems, commercial kitchens, hospitality equipment, and food-service applications.",

    description:
      "The Bain Marie Heating Element is an electric heating element designed for commercial food-warming and water-bath heating equipment. In a Bain Marie system, the heating element heats the surrounding water bath, which then provides controlled and gentle heat to food containers positioned above or within the heated water. This arrangement helps maintain prepared food at serving temperature without exposing it directly to a high-intensity heat source. BSP Industries offers Bain Marie Heating Elements in 200W to 2000W configurations at 220-240V, with stainless steel and copper material options and customizable element lengths. Different tube appearance options, including see-through, half-milky, and full-milky configurations, are available according to the heating element design. These elements are suitable for commercial kitchens, hospitality equipment, scientific equipment, and R&D applications.",

    features: [
      "Heating element designed for Bain Marie equipment",
      "Suitable for water-bath heating systems",
      "Designed for commercial food-warming applications",
      "Suitable for commercial kitchens and hospitality equipment",
      "Available from 200W to 2000W",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Stainless steel and copper material options",
      "Customizable element length",
      "Available in see-through tube configuration",
      "Available in half-milky tube configuration",
      "Available in full-milky tube configuration",
      "Suitable for controlled and indirect food heating",
      "Suitable for customized commercial heating equipment"
    ],

    specs: [
      { label: "Product Type", value: "Bain Marie Heating Element" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "200W to 2000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Length", value: "Customizable" },
      {
        label: "Tube Finish / Appearance",
        value: "See Through | Half Milky | Full Milky"
      },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Bain Marie / Water Bath Heating" }
    ],

    applications: [
      "Kitchen Industry",
      "Scientific Equipment Industry",
      "Hospitality Industry",
      "R&D Departments"
    ],

    images: [
      "/Commercial Heater/Bain Marie Heating Element.webp",
    ]
  },

  {
    slug: "griller-elements",
    name: "Griller Elements",
    category: "commercial-heater",
    model: "Griller Elements",
    badge: "Commercial",

    shortDescription:
      "Stainless steel electric heating elements designed for commercial grills, toasters, rice cookers, kitchen equipment, and professional cooking applications.",

    description:
      "Griller Elements are electric resistance heating elements designed to provide controlled heat for commercial cooking and food-service equipment. Their customizable construction allows the element to be formed and sized according to the available heating area and equipment design. Stainless steel tubular heating elements are commonly used in commercial grills, griddles, toasters, ovens, rice cookers, and other food-service equipment where direct or radiant heating is required. BSP Industries offers Griller Elements from 100W to 1000W, with customizable wattage and length options. The elements are supplied in stainless steel construction and can be configured for different commercial cooking and heating equipment requirements.",

    features: [
      "Electric resistance heating element",
      "Designed for commercial grilling and cooking equipment",
      "Stainless steel construction",
      "Suitable for grills, toasters and commercial cooking equipment",
      "Suitable for rice cooker applications",
      "Available from 100W to 1000W",
      "Customizable wattage according to application requirements",
      "220-240V voltage configuration",
      "Customizable element length",
      "Customizable shape according to equipment requirements",
      "Suitable for commercial kitchen equipment",
      "Suitable for hospitality and food-service applications",
      "Designed for application-specific heating configurations"
    ],

    specs: [
      { label: "Product Type", value: "Griller Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "100W to 1000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Master Packing", value: "20 Pcs." },
      { label: "Length", value: "Customizable" },
      { label: "Shape", value: "Customizable" },
      { label: "Heating Method", value: "Electrical Resistance" },
      { label: "Element Type", value: "Grill Heating Element" }
    ],

    applications: [
      "Grillers",
      "Kitchen Industry",
      "Hospitality Industry",
      "Rice Cookers",
      "Commercial Cooking",
      "Toasters and Grills"
    ],

    images: [
      "/Commercial Heater/Griller Elements.webp",
    ]
  },

  {
    slug: "chafing-heating-element",
    name: "Chafing Heating Element",
    category: "commercial-heater",
    model: "Chafing Heating Element",
    badge: "Commercial",

    shortDescription:
      "Commercial heating elements designed for chafing dishes, food warmers, catering equipment, commercial kitchens, and buffet food-service applications.",

    description:
      "The Chafing Heating Element is an electric heating element designed for commercial food-warming equipment and chafing dishes. It provides controlled heat to help maintain prepared food at a suitable serving temperature during buffet service, catering, hospitality operations, and commercial food processing. Electric chafing systems use heating elements as an alternative to traditional fuel-based heating, providing an electrical heat source for food-warming applications. BSP Industries offers Chafing Heating Elements from 500W to 2000W, with stainless steel and aluminium material options, customizable lengths, and wire or terminal connection configurations. The elements are suitable for commercial kitchens, catering operations, hospitality establishments, food processing, confectionery manufacturing, laboratories, and other specialized food-warming applications.",

    features: [
      "Electric heating element for chafing and food-warming equipment",
      "Designed for commercial food-warming applications",
      "Suitable for chafing dishes and buffet equipment",
      "Suitable for commercial kitchens and catering equipment",
      "Available from 500W to 2000W",
      "220-240V voltage configuration",
      "Stainless steel and aluminium material options",
      "Available in large, medium and small size configurations",
      "Customizable element size",
      "Wire connection and terminal options",
      "Suitable for hospitality and food-service applications",
      "Suitable for food processing and confectionery equipment",
      "Suitable for customized commercial heating equipment"
    ],

    specs: [
      { label: "Product Type", value: "Chafing Heating Element" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "500W to 2000W" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Aluminium" },
      { label: "Master Packing", value: "12 Pcs." },
      { label: "Size", value: "Large | Medium | Small | Customizable" },
      { label: "Connection", value: "Wire Connection | Terminal" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Food Warming / Chafing" }
    ],

    applications: [
      "Kitchen Industry",
      "Food Processing Industry",
      "Snack & Confectionery Manufacturing",
      "Catering & Hospitality",
      "Commercial Kitchens & Restaurants",
      "Laboratories & Chemical Industry",
      "Pharmaceutical Industry",
      "Industrial Food Processing"
    ],

    images: [
      "/Commercial Heater/Chaffing Heating Element.png",
      "/Commercial Heater/Chaffing Heating Element 2.png",
    ]
  },

  {
    slug: "popcorn-heating-elements",
    name: "Popcorn Heating Elements",
    category: "commercial-heater",
    model: "Popcorn Heating Elements",
    badge: "Commercial",

    shortDescription:
      "Commercial heating elements designed for popcorn machines, popcorn kettles, popcorn carts, and food-warming equipment.",

    description:
      "Popcorn Heating Elements are electric heating elements designed for commercial popcorn-making equipment and related food-service applications. The heating element supplies heat to the popcorn machine's heating assembly, helping heat the kettle and popcorn preparation system during operation. Popcorn machine heating elements are used across countertop, floor-model, kettle-style, and cart-mounted popcorn machines, with commercial equipment commonly incorporating dedicated kettle heating elements for popcorn production. BSP Industries offers Popcorn Heating Elements in 1000W to 1800W configurations at 220-240V, manufactured in Incoloy, with a standard size specification of 5 and customizable wattage options. These elements are suitable for popcorn machines used in cinemas, concession areas, food-service operations, entertainment venues, catering setups, and other commercial applications.",

    features: [
      "Electric heating element designed for popcorn machines",
      "Designed for popcorn kettle heating applications",
      "Suitable for countertop popcorn machines",
      "Suitable for floor-model popcorn machines",
      "Suitable for kettle popcorn machines",
      "Suitable for popcorn carts",
      "Suitable for popcorn warmers",
      "Suitable for combination popcorn machines",
      "Available from 1000W to 1800W",
      "Customizable wattage according to equipment requirements",
      "220-240V voltage configuration",
      "Incoloy construction",
      "Standard size specification of 5",
      "Designed for commercial food-service equipment",
      "Suitable for customized popcorn machine applications"
    ],

    specs: [
      { label: "Product Type", value: "Popcorn Heating Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "1000W to 1800W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Incoloy" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Size (Length)", value: "5" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Popcorn Machine Heating" }
    ],

    applications: [
      "Countertop Popcorn Machines",
      "Floor Model Popcorn Machines",
      "Kettle Popcorn Machines",
      "Popcorn Carts",
      "Popcorn Warmers",
      "Combination Popcorn Machines"
    ],

    images: [
      "/Commercial Heater/Popcorn Heating Elements 2.webp",
      "/Commercial Heater/Popcorn Heating Elements.webp",
      "/Commercial Heater/Popcorn Heating Elements 3.webp"
    ]
  },

  {
    slug: "deep-fryer-elements",
    name: "Deep Fryer Elements",
    category: "commercial-heater",
    model: "Deep Fryer Elements",
    badge: "Commercial",

    shortDescription:
      "Commercial electric heating elements designed for deep fryers, commercial cooking equipment, food processing systems, restaurants, and professional food-service applications.",

    description:
      "Deep Fryer Elements are electric heating elements designed to heat frying oil in commercial deep-frying equipment. The heating element is positioned within the fryer heating system and transfers electrical heat to the cooking oil, allowing the fryer to reach and maintain the required cooking temperature during operation. Commercial fryer heating elements are commonly used in restaurant fryers, fast-food equipment, food-processing machinery, and other professional cooking systems. BSP Industries offers Deep Fryer Elements in 2000W and 3000W configurations at 220-240V, with stainless steel construction and customizable wattage and length options. Brass and mild steel nipple configurations are available for mounting according to equipment requirements.",

    features: [
      "Electric heating element designed for deep fryers",
      "Designed for frying oil heating applications",
      "Suitable for commercial deep-frying equipment",
      "Suitable for commercial kitchens and restaurants",
      "Suitable for food processing equipment",
      "Suitable for snack and confectionery manufacturing",
      "Suitable for frozen food production",
      "Suitable for catering and hospitality equipment",
      "Suitable for fast-food and quick-service restaurant equipment",
      "Available in 2000W and 3000W configurations",
      "Customizable wattage according to equipment requirements",
      "220-240V voltage configuration",
      "Stainless steel construction",
      "Standard length specification of 7",
      "Customizable element length",
      "Brass and mild steel nipple options",
      "Designed for application-specific fryer configurations"
    ],

    specs: [
      { label: "Product Type", value: "Deep Fryer Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "2000W | 3000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Master Packing", value: "20 Pcs." },
      { label: "Size (Length)", value: "7 | Customizable" },
      { label: "Nipple", value: "Brass | Mild Steel" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Deep Fryer / Oil Heating" }
    ],

    applications: [
      "Kitchen Industry",
      "Food Processing Industry",
      "Snack & Confectionery Manufacturing",
      "Commercial Kitchens & Restaurants",
      "Frozen Food Production",
      "Catering & Hospitality",
      "Fast-Food Chains & Quick-Service Restaurants"
    ],

    images: [
      "/Commercial Heater/Deep Fryer Elements 2.webp",
      "/Commercial Heater/Deep Fryer Elements.webp",
      "/Commercial Heater/Deep Fryer Elements 3.webp"
    ]

  },

  {
    slug: "washing-machine-elements",
    name: "Washing Machine Elements",
    category: "commercial-heater",
    model: "Washing Machine Elements",
    badge: "Commercial",

    shortDescription:
      "Customizable electric heating elements designed for washing machines, dishwashers, cleaning equipment, and commercial laundry applications.",

    description:
      "Washing Machine Elements are electric heating elements designed to heat water in washing machines and related cleaning equipment. Tubular heating elements are commonly installed within the washing system to transfer heat directly to the surrounding wash water, helping the equipment achieve the required water temperature during the wash cycle. Similar heating-element designs are also used in professional washing machines, dishwashers, industrial cleaning equipment, and other liquid-heating applications. BSP Industries offers Washing Machine Elements in 500W and 3000W configurations at 220-240V, with stainless steel, copper, and Incoloy material options. The elements are available in M and V shapes, with 9-inch and 12-inch standard length options, customizable diameter, and customizable fittings to suit different equipment designs.",

    features: [
      "Electric heating element designed for washing machines",
      "Designed for direct water heating applications",
      "Suitable for commercial and professional washing equipment",
      "Suitable for dishwashers",
      "Suitable for cleaning equipment",
      "Suitable for customized heating equipment",
      "Available in 500W and 3000W configurations",
      "Customizable wattage according to equipment requirements",
      "220-240V voltage configuration",
      "Stainless steel, copper and Incoloy material options",
      "Available in M and V shape configurations",
      "Available in 9-inch and 12-inch standard lengths",
      "Customizable element length",
      "Customizable element diameter",
      "Customizable fitting configuration",
      "Suitable for commercial laundry and cleaning applications"
    ],

    specs: [
      { label: "Product Type", value: "Washing Machine Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "500W | 3000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper | Incoloy" },
      { label: "Master Packing", value: "12 Pcs." },
      { label: "Size (Length)", value: "9\" | 12\" | Customizable" },
      { label: "Shape", value: "M | V" },
      { label: "Element Diameter", value: "Customizable" },
      { label: "Fitting", value: "Customizable" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Water Heating / Cleaning Equipment" }
    ],

    applications: [
      "Washing Machines",
      "Dishwashers",
      "Cleaning Equipment",
      "Universal Fittings"
    ],

    images: [
      "/Commercial Heater/Washing Machine Elements.webp",
      "/Commercial Heater/Washing Machine Elements 2.webp",
    ]
  },

  {
    slug: "sterilizer-heating-elements",
    name: "Sterilizer Heating Elements",
    category: "commercial-heater",
    model: "Sterilizer Heating Elements",
    badge: "Commercial",

    shortDescription:
      "Commercial electric heating elements designed for sterilizers, laboratory equipment, food processing, water treatment, and specialized sterilization systems.",

    description:
      "Sterilizer Heating Elements are electric heating elements designed to provide heat for sterilization and liquid-heating equipment. In sterilization systems, heating elements can heat water or generate the thermal energy required by the sterilization process, depending on the equipment configuration. They are used in applications such as medical and laboratory equipment sterilization, food processing, water treatment, and specialized cleaning and sterilization systems. BSP Industries offers Sterilizer Heating Elements in 200W to 2000W configurations at 220-240V, with stainless steel and copper material options. Standard lengths of 5 and 7 inches are available, while wattage and overall length can be customized according to equipment requirements.",

    features: [
      "Electric heating element designed for sterilization equipment",
      "Suitable for water-heating applications in sterilizers",
      "Designed for commercial and specialized heating equipment",
      "Suitable for medical equipment sterilization systems",
      "Suitable for food processing applications",
      "Suitable for water treatment equipment",
      "Suitable for laboratory sterilization equipment",
      "Suitable for beauty and spa equipment sterilization",
      "Available from 200W to 2000W",
      "Customizable wattage according to equipment requirements",
      "220-240V voltage configuration",
      "Stainless steel and copper material options",
      "Available in 5-inch and 7-inch standard lengths",
      "Customizable element length",
      "Suitable for customized sterilizer equipment",
      "Designed for application-specific heating requirements"
    ],

    specs: [
      { label: "Product Type", value: "Sterilizer Heating Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "200W to 2000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Size (Length)", value: "5\" | 7\" | Customizable" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Sterilization / Water Heating" }
    ],

    applications: [
      "Medical Equipment Sterilization",
      "Food Processing",
      "Water Treatment",
      "Laboratory Sterilization",
      "Beauty and Spa Equipment Sterilization"
    ],

    images: [
      "/Commercial Heater/Sterilizer Heating Elements.webp",
    ]
  },

  {
    slug: "pizza-oven-element",
    name: "Pizza Oven Element",
    category: "commercial-heater",
    model: "Pizza Oven Element",
    badge: "Commercial",

    shortDescription:
      "Commercial electric heating elements designed for pizza ovens, commercial kitchens, food processing equipment, restaurants, catering operations, and professional baking applications.",

    description:
      "The Pizza Oven Element is an electric heating element designed to provide heat inside commercial pizza ovens and professional cooking equipment. Tubular heating elements are commonly used in pizza ovens and other commercial cooking appliances, with the element shape, mounting arrangement, and electrical connection configured according to the oven design. BSP Industries offers Pizza Oven Elements from 500W to 5000W at 220-240V, with stainless steel construction and customizable configurations. Brass and mild steel fitting options are available for installation according to equipment requirements. These elements are suitable for commercial kitchens, restaurants, food processing facilities, catering operations, frozen food production, snack and confectionery manufacturing, and fast-food equipment.",

    features: [
      "Electric heating element designed for pizza ovens",
      "Designed for commercial cooking and baking equipment",
      "Suitable for pizza oven heating applications",
      "Stainless steel construction",
      "Available from 500W to 5000W",
      "Customizable wattage according to equipment requirements",
      "220-240V voltage configuration",
      "Brass and mild steel fitting options",
      "Customizable fitting configuration",
      "Designed for commercial kitchen equipment",
      "Suitable for food processing applications",
      "Suitable for restaurants and catering equipment",
      "Suitable for frozen food production equipment",
      "Suitable for fast-food and quick-service restaurant equipment",
      "Suitable for customized oven designs"
    ],

    specs: [
      { label: "Product Type", value: "Pizza Oven Element" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "500W to 5000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Master Packing", value: "20 Pcs." },
      { label: "Fitting", value: "Brass | Mild Steel" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Pizza Oven / Commercial Cooking" }
    ],

    applications: [
      "Kitchen Industry",
      "Food Processing Industry",
      "Snack & Confectionery Manufacturing",
      "Commercial Kitchens & Restaurants",
      "Frozen Food Production",
      "Catering & Hospitality",
      "Fast-Food Chains & Quick-Service Restaurants"
    ],

    images: [
      "/Commercial Heater/Pizza Oven Element.webp",
      "/Commercial Heater/Pizza Oven Element 2.webp",
      "/Commercial Heater/Pizza Oven Element 3.webp"
    ]
  },

  {
    slug: "water-dispenser-element",
    name: "Water Dispenser Element",
    category: "commercial-heater",
    model: "Water Dispenser Element",
    badge: "Commercial",

    shortDescription:
      "Commercial electric heating elements designed for water dispensers, hot-water dispensing systems, hospitality equipment, healthcare facilities, offices, and commercial water-heating applications.",

    description:
      "The Water Dispenser Element is an electric heating element designed to heat water inside hot-water dispensing equipment and water dispenser systems. Water dispenser heating elements are commonly installed within the water tank or heating assembly to transfer electrical heat to the water, providing hot water for beverage preparation and other dispensing requirements. Commercial water dispensers and related equipment use immersion or tubular heating elements with configurations adapted to the tank and mounting arrangement. BSP Industries offers Water Dispenser Elements in a 2000W configuration at 220-240V, with stainless steel, aluminium, and casing material options. The element length can be customized according to the dispenser design and equipment requirements.",

    features: [
      "Electric heating element designed for water dispensers",
      "Designed for hot-water dispensing equipment",
      "Suitable for water heating applications",
      "Suitable for hospitality and commercial facilities",
      "Suitable for healthcare and hospital equipment",
      "Suitable for offices and corporate buildings",
      "Suitable for educational institutions",
      "Suitable for food and beverage equipment",
      "Suitable for residential appliance manufacturing",
      "2000W standard wattage configuration",
      "Customizable wattage according to equipment requirements",
      "220-240V voltage configuration",
      "Stainless steel, aluminium and casing options",
      "Customizable element length",
      "Designed for application-specific water dispenser configurations",
      "Suitable for OEM and customized equipment requirements"
    ],

    specs: [
      { label: "Product Type", value: "Water Dispenser Element" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "2000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Aluminium | Casing" },
      { label: "Master Packing", value: "20 Pcs." },
      { label: "Size (Length)", value: "Customizable" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Water Dispenser / Water Heating" }
    ],

    applications: [
      "Water Dispenser Industry",
      "Hospitality Industry",
      "Healthcare & Hospitals",
      "Office & Corporate Buildings",
      "Educational Institutions",
      "Food & Beverage Industry",
      "Residential Appliances Manufacturing"
    ],

    images: [
      "/Commercial Heater/Water Dispenser Element.webp",
    ]
  },

  // Domestic Heater

  {
    slug: "kettle-elements",
    name: "Kettle Elements",
    category: "domestic-heater",
    model: "Kettle Elements",
    badge: "Domestic",

    shortDescription:
      "Electric kettle heating elements designed for water boiling, beverage preparation, domestic kettles, boilers, and customized water-heating appliances.",

    description:
      "Kettle Elements are electric heating elements designed for heating and boiling water in electric kettles and related water-heating appliances. The heating element transfers electrical energy into heat, which is then transferred to the surrounding water during operation. Kettle heating elements are commonly used in electric kettles, water boilers, beverage preparation equipment, and other domestic water-heating appliances. BSP Industries offers Kettle Elements in 1000W, 1500W, and 2000W configurations at 220V, with stainless steel, copper, and brass material options. The elements are available in a standard size with screw-type and pin-type fitting configurations, while wattage can be customized according to application requirements.",

    features: [
      "Electric heating element designed for kettles",
      "Designed for water heating and boiling",
      "Suitable for domestic electric kettles",
      "Suitable for water boilers",
      "Suitable for beverage preparation equipment",
      "Suitable for hospitality and food-service equipment",
      "Suitable for industrial and chemical water-heating applications",
      "Suitable for laboratory equipment manufacturers",
      "Suitable for OEM appliance manufacturing",
      "Available in 1000W, 1500W and 2000W configurations",
      "Customizable wattage according to application requirements",
      "220V voltage configuration",
      "Stainless steel, copper and brass material options",
      "Standard size configuration",
      "Available with screw-type fitting",
      "Available with pin-type fitting",
      "Suitable for customized kettle and water-heating appliances"
    ],

    specs: [
      { label: "Product Type", value: "Kettle Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "1000W | 1500W | 2000W | Customizable" },
      { label: "Voltage", value: "220V" },
      { label: "Material", value: "Stainless Steel | Copper | Brass" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Size", value: "Standard" },
      { label: "Fitting", value: "Screw Type | Pin Type" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Kettle / Water Heating" }
    ],

    applications: [
      "Boilers",
      "Hospitality & Food Service",
      "Beverage Industry",
      "Industrial & Chemical Processing",
      "Laboratory Equipment Manufacturers",
      "OEM Suppliers"
    ],

    images: [
      "/Domestic Heater/Kettle Elements.webp",
      "/Domestic Heater/Kettle Elements 2.webp",
    ]
  },

  {
    slug: "tiffin-heating-elements",
    name: "Tiffin Heating Elements",
    category: "domestic-heater",
    model: "Tiffin Heating Elements",
    badge: "Domestic",

    shortDescription:
      "Compact electric heating elements designed for electric tiffins, food warmers, meal containers, and domestic food-warming appliances.",

    description:
      "Tiffin Heating Elements are compact electric heating elements designed to warm prepared food in electric tiffins and similar food-warming appliances. The element converts electrical energy into heat, which is transferred to the surrounding tiffin container or heating surface to help keep meals warm. Their compact circular construction makes them suitable for integration into tiffin containers and other space-constrained food-warming appliances. Tiffin heating elements are commonly developed according to the appliance's required wattage, diameter, mounting arrangement, and available heating area. BSP Industries can provide customized heating-element configurations according to the requirements of domestic food-warming appliance manufacturers.",

    features: [
      "Electric heating element designed for tiffin food warmers",
      "Designed for domestic food-warming applications",
      "Suitable for electric tiffin containers",
      "Suitable for meal-warming appliances",
      "Compact circular heating configuration",
      "Designed for uniform heat distribution across the heating area",
      "Suitable for customized appliance designs",
      "Customizable diameter according to appliance requirements",
      "Suitable for OEM appliance manufacturing",
      "Suitable for household food-warming equipment",
      "Designed for low-power food-warming applications",
      "Compact construction for space-constrained appliances"
    ],

    specs: [
      { label: "Product Type", value: "Tiffin Heating Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "100W | Customizable" },
      { label: "Voltage", value: "220V" },
      { label: "Material", value: "GI Sheet" },
      { label: "Diameter", value: "Customizable" },
      { label: "Master Packing", value: "25 Pcs." },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Food Warming / Tiffin Heating" }
    ],

    applications: [
      "Electric Tiffins",
      "Food Warmers",
      "Meal-Warming Containers",
      "Domestic Food-Warming Appliances",
      "Household Kitchen Appliances",
      "OEM Food-Warming Equipment"
    ],

    images: [
      "/Domestic Heater/Tiffin Heating Elements.png",
    ]
  },

  {
    slug: "domestic-washing-machine-elements",
    name: "Washing Machine Elements",
    category: "domestic-heater",
    model: "Washing Machine Elements",
    badge: "Domestic",

    shortDescription:
      "Electric heating elements specifically designed for domestic washing machines and household laundry appliances.",

    description:
      "Washing Machine Elements are electric heating elements specifically designed for domestic washing machines. Installed within the washing machine's water-heating assembly, the element transfers electrical heat to the wash water during the selected wash cycle. The heating element is an important component in washing machines that use heated water for different washing programs. BSP Industries offers washing machine heating elements in 500W and 3000W configurations at 220-240V, with stainless steel, copper, and Incoloy material options. M and V shape configurations are available with 9-inch and 12-inch lengths, while the element diameter, length, and fitting configuration can be customized according to the washing machine design.",

    features: [
      "Specifically designed for domestic washing machines",
      "Electric heating element for wash-water heating",
      "Suitable for household laundry appliances",
      "Designed for integration into washing machine heating assemblies",
      "Available in 500W and 3000W configurations",
      "Customizable wattage",
      "220-240V voltage configuration",
      "Stainless steel, copper and Incoloy material options",
      "Available in M and V shape configurations",
      "Available in 9-inch and 12-inch lengths",
      "Customizable element length",
      "Customizable element diameter",
      "Customizable fitting configuration",
      "Suitable for washing machine OEM manufacturing",
      "Suitable for replacement heating applications"
    ],

    specs: [
      { label: "Product Type", value: "Washing Machine Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "500W | 3000W | Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper | Incoloy" },
      { label: "Master Packing", value: "12 Pcs." },
      { label: "Size (Length)", value: "9\" | 12\" | Customizable" },
      { label: "Shape", value: "M | V" },
      { label: "Element Diameter", value: "Customizable" },
      { label: "Fitting", value: "Customizable" },
      { label: "Heating Method", value: "Electrical Heating" },
      { label: "Application Type", value: "Washing Machine Water Heating" }
    ],

    applications: [
      "Domestic Washing Machines",
      "Household Laundry Appliances",
      "Front-Load Washing Machines",
      "Top-Load Washing Machines",
      "Washing Machine OEM Manufacturing",
      "Washing Machine Replacement Applications"
    ],

    images: [
      "/Domestic Heater/Washing Machine Elements.webp",
      "/Domestic Heater/Washing Machine Elements 2.webp",
    ]
  },

  {
    slug: "geyser-heating-elements",
    name: "Geyser Heating Elements",
    category: "domestic-heater",
    model: "Geyser Heating Elements",
    badge: "Domestic",

    shortDescription:
      "Electric heating elements specifically designed for domestic geysers, storage water heaters, and household hot-water systems.",

    description:
      "Geyser Heating Elements are electric immersion heating elements specifically designed for domestic electric geysers and storage water heaters. The element is fitted inside the water-heater tank and transfers electrical heat directly to the surrounding water to provide hot water for household use. Different geyser designs may require different element materials, mounting arrangements, dimensions, and electrical ratings. BSP Industries provides heating-element solutions for domestic geysers with configurations selected according to the water heater's design and installation requirements. The elements can be customized for specific domestic water-heater applications, making them suitable for both OEM appliance manufacturing and replacement requirements.",

    features: [
      "Specifically designed for domestic geysers",
      "Designed for electric storage water heaters",
      "Direct immersion water-heating design",
      "Suitable for household hot-water systems",
      "Designed for installation inside water-heater tanks",
      "Suitable for domestic water-heating appliances",
      "Stainless steel and copper material options",
      "Application-specific wattage configurations",
      "Customizable heating-element dimensions",
      "Customizable mounting configuration",
      "Suitable for OEM geyser manufacturing",
      "Suitable for replacement geyser elements",
      "Designed according to specific water-heater requirements"
    ],

    specs: [
      { label: "Product Type", value: "Geyser Heating Elements" },
      { label: "SKU", value: "—" },
      { label: "Wattage", value: "Customizable" },
      { label: "Voltage", value: "220-240V" },
      { label: "Material", value: "Stainless Steel | Copper" },
      { label: "Master Packing", value: "—" },
      { label: "Size", value: "Customizable" },
      { label: "Mounting", value: "Application Specific" },
      { label: "Heating Method", value: "Direct Immersion" },
      { label: "Application Type", value: "Domestic Geyser / Water Heating" }
    ],

    applications: [
      "Domestic Geysers",
      "Electric Storage Water Heaters",
      "Household Water Heaters",
      "Residential Hot-Water Systems",
      "Bathroom Water-Heating Appliances",
      "Geyser OEM Manufacturing",
      "Geyser Replacement Applications"
    ],

    images: [
      "/Domestic Heater/Gyser Elements.webp",
    ]
  }
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
