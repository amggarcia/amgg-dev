export interface Project{
    slug: string;
    title: string;
    shortDesc : string;
    imgSrcPath : string;
}

export const Projects : Project[] = 
[
    {
        "slug" : "EducationRetailer",
        "title" : "Web platform for a education course retailer",
        "shortDesc" : "Development of a web platform using .Net Core and Vue.js for a education retailer with the goal of providing access to a hight number of education courses and information about them to potential costumers.",
        "imgSrcPath" : "/books.webp"
    },
    {
        "slug" : "InvestmentPlatform",
        "title" : "Financial investment web application",
        "shortDesc" : "Fullstack development of a financial investment advisory web platform for a bank, with the main goal of simplifying the process of creating and finalizing investment proposals for both the client and account manager.",
        "imgSrcPath": "/investment.webp"
    },
    {
        "slug" : "FormPlatform",
        "title" : "Dynamic configurable form collection platform",
        "shortDesc" : "Development of a dynamic/configurable information collection and submission platform in the social sector.",
        "imgSrcPath": "/forms.webp"
    },
    {
        "slug" : "Portfolio",
        "title" : "Personal portfolio website",
        "shortDesc" : "Development of the website you are on currently.",
        "imgSrcPath": "/portfolio.webp"
    },
    {
        "slug" : "Shery",
        "title" : "Simple encrypted message sharing service",
        "shortDesc" : "Development of a simple web app that allows the sharing of messages between devices leveraging end to end encryption",
        "imgSrcPath": "/shery.webp"
    },
    {
        "slug" : "SmsNotificationSystem",
        "title" : "SMS notification service for Field Force Management platform",
        "shortDesc" : "Development of a Windows Service based software to monitor real time changes in the workflows of a Field Force Management platform and notify the client through SMS of said changes.",
        "imgSrcPath": "/cellTower.webp"
    }
]