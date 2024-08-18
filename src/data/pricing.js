export const pricingPlans = [
    {
        title: "Free Plan",
        price: 0,
        description: 'For individuals and hobbyists',
        features : [
            "up to 3 forms per month",
            "Basic AI form builder",
            "Basic For, customization",
            "Data export in CSV Format",
        ],
        isPopular: false,
    },
    {
        title: "Hobby Plan",
        price: 15,
        description: 'Perfect for growing buisness needing advanced feaatures',
        features : [
            "up to 100 forms per month",
            "Conditional logic and branching",
            "Data export in CSV and Excel Format",
            "Basic analytic and reporting"
        ],
        isPopular: true,
    },
    {
        title: "Popular Plan",
        price: 89,
        description: 'For large buisness and enterprises with custom needs.',
        features : [
            "unlimited forms per month",
            "Premium AI form suggestions",
            "Advanced conditional logic and branching",
            "API access for custom integrations",
        ],
        isPopular: false,
    },
]