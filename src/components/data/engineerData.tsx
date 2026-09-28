import type { Engineer } from "../types/engineer";

export const engineers: Engineer[] = [
    {
        id: "ENG-0001",
        name: "Christian Devera",
        location: "MANILA/QC",
        rating: 4.9,
        phoneNo: "+63 123 456 7890",
        status: "On-Site",
        currentJob: "TK-231231 No Internet",
        completed: 214,
        queue: 1,
        

        overview: {
            jobsCompleted: 109,
            thisMonth: 10,
            avgResolution: 1.5,
            joined: "November 12",
        },

        metrics: [
            {
                id: "M001",
                label: "Customer Satisfaction",
                benchmark: 80,
                score: 90,
            },
            {
                id: "M002",
                label: "Response Time",
                benchmark: 80,
                score: 90,
            },
            {
                id: "M003",
                label: "First Contact Resolution",
                benchmark: 90,
                score: 80,
            },
        ],

        fieldReports: [
            {
                ticketId: "TK-231321",
                engineerId: "ENG-0001",
                date: "Sep 21",
                status: "Fully Resolved",
                description: "Internet connection issue diagnosed and resolved.",
                timeOnSite: "1h 40min",
                parts: "No replacement parts required",
            },
            {
                ticketId: "TK-231322",
                engineerId: "ENG-0001",
                date: "Sep 19",
                status: "Fully Resolved",
                description: "Router connection problem identified and fixed.",
                timeOnSite: "1h 20min",
                parts: "Router cable replacement",
            },
        ],

        reviews: [
            {
                reviewer: "Guiller Dela Cruz",
                rating: 5,
                date: "Nov 12",
                comment: "Arrived on time and explained everything clearly.",
            },
            {
                reviewer: "Christian Devera",
                rating: 4,
                date: "Sep 21",
                comment: "Professional service and resolved the issue properly.",
            },
        ],
    },

    {
        id: "ENG-0002",
        name: "Guiller Dela Cruz",
        location: "MANILA/BC",
        rating: 4.7,
        phoneNo: "+63 123 456 7890",
        status: "Traveling",

        currentJob: "TK-231245 Slow Connection",
        completed: 198,
        queue: 2,

        overview: {
            jobsCompleted: 98,
            thisMonth: 12,
            avgResolution: 1.8,
            joined: "November 12",
        },

        metrics: [
            {
                id: "M004",
                label: "Customer Satisfaction",
                benchmark: 80,
                score: 88,
            },
            {
                id: "M005",
                label: "Response Time",
                benchmark: 80,
                score: 82,
            },
            {
                id: "M006",
                label: "First Contact Resolution",
                benchmark: 90,
                score: 85,
            },
        ],

        fieldReports: [
            {
                ticketId: "TK-231245",
                engineerId: "ENG-0002",
                date: "Sep 20",
                status: "In Progress",
                description: "Slow connection reported by customer. Network inspection ongoing.",
                timeOnSite: "2h 10min",
                parts: "Network cable inspection",
            },
            {
                ticketId: "TK-231240",
                engineerId: "ENG-0002",
                date: "Sep 18",
                status: "Fully Resolved",
                description: "Connection instability resolved after equipment inspection.",
                timeOnSite: "1h 50min",
                parts: "LAN cable replacement",
            },
        ],

        reviews: [
            {
                reviewer: "Jeriana Maranguis",
                rating: 5,
                date: "Sep 20",
                comment: "Very helpful and provided a clear explanation of the issue.",
            },
            {
                reviewer: "Vanna Hernandez",
                rating: 4,
                date: "Sep 18",
                comment: "Good service and completed the repair successfully.",
            },
        ],
    },

    {
        id: "ENG-0003",
        name: "Jeriana Maranguis",
        location: "MANILA/AC",
        rating: 4.8,
        phoneNo: "+63 123 456 7890",
        status: "Available",

        currentJob: "TK-231250 Router Configuration",
        completed: 187,
        queue: 0,

        overview: {
            jobsCompleted: 102,
            thisMonth: 14,
            avgResolution: 1.4,
            joined: "November 12",
        },

        metrics: [
            {
                id: "M007",
                label: "Customer Satisfaction",
                benchmark: 80,
                score: 92,
            },
            {
                id: "M008",
                label: "Response Time",
                benchmark: 80,
                score: 95,
            },
            {
                id: "M009",
                label: "First Contact Resolution",
                benchmark: 90,
                score: 94,
            },
        ],

        fieldReports: [
            {
                ticketId: "TK-231250",
                engineerId: "ENG-0003",
                date: "Sep 22",
                status: "Fully Resolved",
                description: "Router configuration completed successfully.",
                timeOnSite: "1h 15min",
                parts: "No replacement parts required",
            },
            {
                ticketId: "TK-231251",
                engineerId: "ENG-0003",
                date: "Sep 20",
                status: "Fully Resolved",
                description: "Wi-Fi configuration and connectivity testing completed.",
                timeOnSite: "1h 30min",
                parts: "Network cable",
            },
        ],

        reviews: [
            {
                reviewer: "Clifford Galvez",
                rating: 5,
                date: "Sep 22",
                comment: "Fast service and very knowledgeable.",
            },
            {
                reviewer: "Francis Lasay",
                rating: 5,
                date: "Sep 20",
                comment: "The issue was explained clearly and fixed quickly.",
            },
        ],
    },

    {
        id: "ENG-0004",
        name: "Vanna Hernandez",
        location: "MANILA/AC",
        rating: 4.8,
        phoneNo: "+63 123 456 7890",
        status: "Off-Duty",

        currentJob: "TK-231260 No Internet",
        completed: 176,
        queue: 0,

        overview: {
            jobsCompleted: 96,
            thisMonth: 9,
            avgResolution: 1.7,
            joined: "November 12",
        },

        metrics: [
            {
                id: "M010",
                label: "Customer Satisfaction",
                benchmark: 80,
                score: 89,
            },
            {
                id: "M011",
                label: "Response Time",
                benchmark: 80,
                score: 84,
            },
            {
                id: "M012",
                label: "First Contact Resolution",
                benchmark: 90,
                score: 91,
            },
        ],

        fieldReports: [
            {
                ticketId: "TK-231260",
                engineerId: "ENG-0004",
                date: "Sep 17",
                status: "Fully Resolved",
                description: "No internet issue resolved after connection testing.",
                timeOnSite: "1h 45min",
                parts: "Fiber connector replacement",
            },
        ],

        reviews: [
            {
                reviewer: "Luis Garcia",
                rating: 5,
                date: "Sep 17",
                comment: "Very professional and courteous.",
            },
        ],
    },

    {
        id: "ENG-0005",
        name: "Jonald Rodulfo",
        location: "MANILA/QC",
        rating: 4.6,
        phoneNo: "+63 123 456 7890",
        status: "Unavailable",

        currentJob: "TK-231270 Signal Loss",
        completed: 165,
        queue: 3,

        overview: {
            jobsCompleted: 91,
            thisMonth: 7,
            avgResolution: 2.0,
            joined: "November 12",
        },

        metrics: [
            {
                id: "M013",
                label: "Customer Satisfaction",
                benchmark: 80,
                score: 78,
            },
            {
                id: "M014",
                label: "Response Time",
                benchmark: 80,
                score: 74,
            },
            {
                id: "M015",
                label: "First Contact Resolution",
                benchmark: 90,
                score: 82,
            },
        ],

        fieldReports: [
            {
                ticketId: "TK-231270",
                engineerId: "ENG-0005",
                date: "Sep 16",
                status: "In Progress",
                description: "Signal loss detected. Further network inspection required.",
                timeOnSite: "2h 30min",
                parts: "Signal testing equipment",
            },
        ],

        reviews: [
            {
                reviewer: "Alex Ogbac",
                rating: 4,
                date: "Sep 16",
                comment: "The technician was helpful and kept me updated.",
            },
        ],
    },
];