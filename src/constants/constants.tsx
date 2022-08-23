// This file contains all the proper names used in the entire project.

// Global

export const CREATOR_NAME : string = "ဆွေမျိုးမေ့"
export const PLATFORM_NAME : string = "သရက်ချဉ်သုပ်"

// Regions

export interface Region {
    name: string,
    coordinate: [number, number]
}

export const REGIONS = new Map<string, Region>([
    [
        "overall",
        {
            name: "တတိုင်းပြည်လုံး အတိုင်းအတာ",
            coordinate: [96.199379, 16.871311]
        },
    ],
    [
        "kachin",
        {
            name: "ကချင်ပြည်နယ်",
            coordinate: [97.344060, 26.076080]
        }
    ],
    [
        "kayah",
        {
            name: "ကယားပြည်နယ်",
            coordinate: [97.375359, 19.233860]
        }
    ],
    [
        "kayin",
        {
            name: "ကရင်ပြည်နယ်",
            coordinate: [97.786060, 17.154010]
        },
    ],
    [
        "chin",
        {
            name: "ချင်းပြည်နယ်",
            coordinate: [93.510712, 22.166090]
        },
    ],
    [
        "mon",
        {
            name: "မွန်ပြည်နယ်",
            coordinate: [97.868420, 15.747850]
        },
    ],
    [
        "rakhine",
        {
            name: "ရခိုင်ပြည်နယ်",
            coordinate: [94.079780, 19.408330]
        },
    ],
    [
        "shan",
        {
            name: "ရှမ်းပြည်နယ်",
            coordinate: [99.832176, 21.090860]
        },
    ],
    [
        "bago",
        {
            name: "ပဲခူးတိုင်းဒေသကြီး",
            coordinate: [96.483333, 17.333333]
        },
    ],
    [
        "sagaing",
        {
            name: "စစ်ကိုင်းတိုင်းဒေသကြီး",
            coordinate: [95.985820, 21.885380]
        },
    ],
    [
        "tanintharyi",
        {
            name: "တနင်္သာရီတိုင်းဒေသကြီး",
            coordinate: [99.013240, 12.089010]
        },
    ],
    [
        "magway",
        {
            name: "မကွေးတိုင်းဒေသကြီး",
            coordinate: [94.935110, 20.149950]
        },
    ],
    [
        "mandalay",
        {
            name: "မန္တလေးတိုင်းဒေသကြီး",
            coordinate: [96.093292, 21.954510]
        },
    ],
    [
        "yangon",
        {
            name: "ရန်ကုန်တိုင်းဒေသကြီး",
                coordinate: [96.199379, 16.871311]
        },
    ],
    [
        "ayeyarwaddy",
        {
            name: "ဧရာဝတီတိုင်းဒေသကြီး",
            coordinate: [94.738101, 16.775361]
        }
    ]
])














