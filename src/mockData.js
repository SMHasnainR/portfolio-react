// Mock data for Hasnain Rizvi's Portfolio
export const portfolioData = {
  personal: {
    name: "Hasnain Rizvi",
    title: "Software Engineer",
    tagline: "Building robust web solutions with modern technologies",
    bio: "Dedicated Software Engineer with solid hands-on experience in PHP, Laravel, JavaScript, SQL, jQuery, and AJAX. Currently expanding expertise into Magento and React.js to stay aligned with evolving industry demands.",
    email: "hasnainshoiab45@gmail.com",
    phone: "+92 3132898968",
    location: "Available for Remote Work",
    linkedin: "https://www.linkedin.com/in/smhasnainr145/",
    github: "https://github.com/SMHasnainR",
    resumeUrl: "/assets/hasnain-resume.pdf",
  },

  skills: {
    backend: [
      "PHP",
      "Laravel",
      "Magento",
      "Node.js",
      "MySQL",
      "API Development",
    ],
    frontend: [
      "JavaScript",
      "React.js",
      "jQuery",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "AJAX",
    ],
    ecommerce: [
      "Magento",
      "Payment Gateway Integration",
      "Courier Integration",
    ],
    tools: ["Git", "Composer", "npm", "Webpack", "VS Code"],
    databases: ["MySQL", "MongoDB", "Redis"],
    other: [
      "RESTful APIs",
      "MVC Architecture",
      "Responsive Design",
      "Performance Optimization",
    ],
  },

  projects: [
    {
      id: 1,
      title: "1st Step",
      description:
        "1st Step Shoes & Bags, founded in 2000, is a leading Pakistani retailer offering high-quality footwear, bags, and accessories for men, women, and children—available online and across nationwide stores, delivering a seamless omnichannel shopping experience.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"],
      features: [
        "Extensive product catalog (gents, ladies, kids footwear & bags)",
        "Seasonal sales and promotional banners (e.g. End of Season Sale, Back to School)",
        "Online ordering with cart, checkout, and payment discounts",
        "Free shipping on orders above a threshold",
        "Delivery, exchange, and order tracking features",
        "Store locator for multiple cities across Pakistan",
      ],
      demoUrl: "https://1ststep.pk/",
      githubUrl: "",
      imageUrl:
        "https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/366957342_592582586406504_3816952065550150100_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWyb2cbN2oa1U-0W0fMsYo7n7UnehtA0zuftSd6G0DTEHf2JdCop8QrfxRbcqJqaxeyjL_C2DU4aa8H7IhgWp9&_nc_ohc=Dgj9wnXnPYsQ7kNvwGG0jmt&_nc_oc=AdlBAA_kVkeS5cvSaDEeO1Yw32xapbwsxIslcwirwRuSyZqA89CUjWeKYMZCda4TBK0&_nc_zt=23&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=7LVfKNdwBXyPUlMF4jPIiQ&oh=00_AfVJ48mc1JJYPmgiR1cUDTljALk2CqGnKHmnj8oONThc6w&oe=68B0DF6E", // Placeholder; replace with actual project screenshot URL
      status: "Completed",
    },
    {
      id: 2,
      title: "Naheed.pk",
      description:
        "Naheed.pk is the e-commerce platform of Naheed Super Market—one of Pakistan’s most trusted retailers since 1971—powered by Magento with Laravel integrations. It offers groceries, health & beauty, electronics, and home essentials with nationwide delivery and a seamless online shopping experience.",
      technologies: ["Magento", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "Comprehensive product catalog across multiple categories",
        "Custom Laravel modules integrated with Magento",
        "Naheed Loyalty program (earn & redeem points)",
        "Order tracking and status updates",
        "Nationwide shipping and secure online payments",
        "Discounts and promotions engine",
        "Responsive and mobile-friendly design",
      ],
      demoUrl: "https://www.naheed.pk/",
      githubUrl: "",
      imageUrl:
        "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/387051318_621302013503289_4935744433816437113_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHUOLUJr3SJpNTBySAaH58Pdhd0rBAG7QR2F3SsEAbtBA_jNY7NkYWVL2IKDJePKw9UqC0255wSId8g-xfOt8lA&_nc_ohc=sdmKU3OTflcQ7kNvwGPoZ3S&_nc_oc=Adn6o1Wb-JGYtQ7QMTTW921XnSkAbGDo88oSnbxE5O61P3wWL0iigZz9Ll33UBFZ_Po&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=fg_vKM03i5u07KWHzKFr_Q&oh=00_AfVq4AIf0_QqaP6IWqcLgAvDcecYEMUlMjBaRs_HSZ9MPA&oe=68B23D9F",
      status: "Completed",
    },

    {
      id: 3,
      title: "Dallas Masala",
      description:
        "Dallas Masala is a community-driven recipe platform offering a rich collection of authentic Desi (South Asian) recipes—from sweets and snacks to traditional savory dishes—with user submissions and daily inspiration powered by Laravel.",
      technologies: [
        "Laravel",
        "MySQL",
        "PHP",
        "JavaScript",
        "Bootstrap or Tailwind (assumed)",
        "Nginx or Apache (assumed)",
        "Optional: Vue.js or Livewire (if applicable)",
      ],
      features: [
        "Extensive recipe catalog with daily updated and categorized content",
        "User-submitted recipe functionality",
        "Recipe filters (e.g., Vegetarian, Non-Vegetarian, Healthy Living)",
        "Engaging UI elements like image sliders and recipe thumbnails",
        "Responsive design for mobile-friendly browsing",
        "Content-rich pages (About, Contact, Healthy Living blog)",
        "SEO-friendly structure and performance optimizations",
      ],
      demoUrl: "https://dallasmasala.com/",
      githubUrl: "https://github.com/SMHasnainR/desi-massala-admin",
      imageUrl: "https://dallasmasala.com/assets/img/logos/dallas_logo.png", // Replace with actual screenshot URL if available
      status: "Completed",
    },
    {
      id: 4,
      title: "Ticket Walla",
      description:
        "ContactForTickets.com is an online contact/support portal for event ticketing, offering seamless ticket inquiries and issue resolution powered by a Laravel backend.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript (AJAX/jQuery)",
        "Bootstrap",
        "Nginx or Apache",
      ],
      features: [
        "User-friendly contact form for ticket-related inquiries",
        "Admin dashboard to manage and respond to messages",
        "Email notifications for new inquiries",
        "Spam prevention via validation or CAPTCHA",
        "Responsive design for desktop and mobile access",
        "Optional: File attachments for proof or screenshots",
      ],
      demoUrl: "https://contactfortickets.com/",
      githubUrl: "",
      imageUrl: "http://contactfortickets.com/images/ticket.png", 
      status: "In Progress",
    },

    {
      id: 4,
      title: "API Integration Dashboard",
      description:
        "React.js dashboard for monitoring and managing multiple API integrations with real-time status updates and analytics.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Chart.js",
        "Express.js",
      ],
      features: [
        "Real-time Monitoring",
        "API Analytics",
        "Error Tracking",
        "Performance Metrics",
        "Alert System",
      ],
      demoUrl: "https://api-dashboard-demo.example.com",
      githubUrl: "https://github.com/hasnainrizvi/api-dashboard",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      status: "In Progress",
    },
  ],

  services: [
    {
      title: "Web Application Development",
      description:
        "Full-stack web applications using PHP/Laravel, React.js, and modern development practices.",
      icon: "Code",
      technologies: ["Laravel", "React.js", "MySQL", "API Development"],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom e-commerce platforms and Magento development for online businesses.",
      icon: "ShoppingCart",
      technologies: [
        "Magento",
        "WooCommerce",
        "Payment Integration",
        "Inventory Management",
      ],
    },
    {
      title: "API Development & Integration",
      description:
        "RESTful API development and third-party service integrations for seamless data flow.",
      icon: "Zap",
      technologies: [
        "RESTful APIs",
        "JSON",
        "Authentication",
        "Database Design",
      ],
    },
    {
      title: "Database Design & Optimization",
      description:
        "Efficient database architecture and query optimization for high-performance applications.",
      icon: "Database",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "Query Optimization",
        "Data Modeling",
      ],
    },
    {
      title: "Frontend Development",
      description:
        "Responsive and interactive user interfaces using modern JavaScript frameworks.",
      icon: "Palette",
      technologies: ["React.js", "JavaScript", "jQuery", "Responsive Design"],
    },
    {
      title: "System Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support for existing applications.",
      icon: "Settings",
      technologies: [
        "Bug Fixes",
        "Performance Tuning",
        "Security Updates",
        "Technical Support",
      ],
    },
  ],

  experience: [
    {
      position: "Lead Software Engineer (Naheed One)",
      company: "Naheed.pk",
      duration: "Feb 2024 to Present · 1 yr 7 mos",
      location: "Karāchi, Sindh, Pakistan",
      description:
        "Lead Laravel/PHP engineer for e-commerce operations. Mentor and guide a team of developers. Optimize system performance for seamless operations. Innovate and collaborate in cross-functional teams.",
      type: "Full-time",
      onSite: true,
    },
    {
      position: "Software Engineer",
      company: "Naheed.pk",
      duration: "Dec 2022 to Feb 2024 · 1 yr 3 mos",
      location: "Karāchi, Sindh, Pakistan",
      description:
        "Integrate Shipment Courier API's for placing order on courier portal. Implement the Strategy Design Principle.",
      type: "Full-time",
      onSite: true,
    },
    {
      position: "Associate Software Engineer",
      company: "Naheed.pk",
      duration: "Nov 2021 to Nov 2022 · 1 yr 1 mo",
      location: "Karāchi, Sindh, Pakistan",
      description:
        "Implements the new features of the e-commerce operations website and fixes the existing one.",
      type: "Full-time",
      onSite: true,
    },
    {
      position: "Jr PHP/Laravel Developer",
      company: "Horizon Technologies",
      duration: "Aug 2021 to Oct 2021 · 3 mos",
      location: "Karāchi, Sindh, Pakistan",
      description:
        "Develop and fixes the CMS to make the e-commerce website dynamic. Works with backend team to develop e-commerce websites.",
      type: "Full-time",
      onSite: true,
    },
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Tech Solutions Inc.",
      message:
        "Hasnain consistently delivers high-quality code and is always willing to go the extra mile. His expertise in Laravel and React.js has been invaluable to our team.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "Digital Innovations Ltd.",
      message:
        "Working with Hasnain was a great experience. He delivered our e-commerce platform on time and exceeded our expectations with additional features.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      position: "Business Owner",
      company: "Online Store Solutions",
      message:
        "Hasnain transformed our business with a custom Magento solution. His attention to detail and technical expertise is outstanding.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ],
};
