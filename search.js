// search.js - Complete Search Functionality with Object-based Product Data

// Product Database (Object format)
// search.js - EMERGENCY FIX
const productsDatabase = {
   
        "115": {
            title: "iPhone 16 Pro Max",
            image: "https://m.media-amazon.com/images/I/61s1P+29yoL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹999.99",
            category: "smartphones",
            link: "sepprod.html?id=115",
            tags: ["apple", "premium", "5G", "flagship"]
        },
        "116": {
            title: "Samsung Galaxy S24 Ultra",
            image: "https://th.bing.com/th/id/OIP.1n2MgSlbhLBZdHFqvVkAfwAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            price: "₹1,199.99",
            category: "smartphones",
            link: "sepprod.html?id=116",
            tags: ["samsung", "android", "ultra", "camera"]
        },
        "117": {
            title: "Redmi Note 13 Pro 5G",
            image: "https://th.bing.com/th?id=OIP.zPAaLTDaSnBrh2eLahNtEQHaJb&w=221&h=282&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            price: "₹349.99",
            category: "smartphones",
            link: "sepprod.html?id=117",
            tags: ["xiaomi", "budget", "5G", "android"]
        },
        "4": {
            title: "Nothing Phone (2A)",
            image: "https://m.media-amazon.com/images/I/61QWVJBjFqL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹319.99",
            category: "smartphones",
            link: "sepprod.html?id=4",
            tags: ["glyph", "android", "midrange", "unique"]
        },
        "5": {
            title: "iQOO Neo 9 Pro",
            image: "https://th.bing.com/th/id/OIP.GFDfH4OdkxuEZik3DR0kKQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            price: "₹499.99",
            category: "smartphones",
            link: "sepprod.html?id=5",
            tags: ["gaming", "performance", "android", "fast-charging"]
        },
        "6": {
            title: "Vivo V29 Pro",
            image: "https://th.bing.com/th/id/OIP.xE1bYSfFNUH9CRHj_DD5LQHaJF?rs=1&pid=ImgDetMain",
            price: "₹599.99",
            category: "smartphones",
            link: "sepprod.html?id=6",
            tags: ["camera", "selfie", "android", "midrange"]
        },
        "7": {
            title: "DOOGEE V Max",
            image: "https://m.media-amazon.com/images/I/81oRCjk44rL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹249.99",
            category: "smartphones",
            link: "sepprod.html?id=7",
            tags: ["rugged", "outdoor", "battery", "android"]
        },
        "8": {
            title: "UMIDIGI A15C",
            image: "https://m.media-amazon.com/images/I/71cxlQhiQqL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹129.99",
            category: "smartphones",
            link: "sepprod.html?id=8",
            tags: ["budget", "entry-level", "android", "basic"]
        },
        "9": {
            title: "OnePlus 12 5G",
            image: "https://m.media-amazon.com/images/I/612ZyUm0JsL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹849.99",
            category: "smartphones",
            link: "sepprod.html?id=9",
            tags: ["flagship", "android", "fast", "premium"]
        },
        "10": {
            title: "ASUS ROG Phone 7",
            image: "https://m.media-amazon.com/images/I/81Vdy-mfVEL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹899.99",
            category: "smartphones",
            link: "sepprod.html?id=10",
            tags: ["gaming", "performance", "cooling", "android"]
        },
        "11": {
            title: "Motorola Moto G85 5G",
            image: "https://m.media-amazon.com/images/I/61G8w9C7oHL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹279.99",
            category: "smartphones",
            link: "sepprod.html?id=11",
            tags: ["motorola", "stock", "android", "midrange"]
        },
        "12": {
            title: "Infinix GT 10 Pro",
            image: "https://th.bing.com/th/id/OIP.BkG0am3D1vIKux_eYBB6vgAAAA?pid=ImgDet&w=159&h=339&c=7",
            price: "₹229.99",
            category: "smartphones",
            link: "sepprod.html?id=12",
            tags: ["gaming", "rgb", "budget", "android"]
        },
        "13": {
            title: "ARMANI JUNIOR All-Over Logo Regular Fit Shirt For Boys",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQupz7elln5O74o6Y5wYpLPHutgRGzKJTMk60MyaNcX8BKO5PLj5_Z8Dt0vR5zSMLeNw561ZGfJRDpUKid-B-VyeGGoqmSAAUYnlxgktH-vWoUvKe88pFkhpA",
            price: "₹7,500",
            category: "fashion",
            link: "sepprod.html?id=13",
            tags: ["kids", "shirt", "armani", "formal"]
        },
        "14": {
            title: "H&M Boys 3-piece Dressy Set",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMur9FL2_pPo0osJsdSiAdG_KcJWYz7ObirgKtH2VFrtmgRKDVUxoa6Ikkv2InsNSMYQ9fIomNfcQQgauSyn5LJeV1w4NgmHnWC3skZPSid4U76wZSYcfNXg",
            price: "₹5,891.18",
            category: "fashion",
            link: "sepprod.html?id=14",
            tags: ["kids", "formal", "set", "hm"]
        },
        "15": {
            title: "Emporio Armani Kids Monogram Blazer",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcrXQ3onOC11QyGvWvBlBAuunAI6Z_SDt1-hTZ0Kn1qbFGxb3ZypwV8UtYOSinyNtSpkvPoI-KBJ42xPaLrahyxXikskVf05OyQF5wfvcBU9mnqStSrF5o",
            price: "₹64,011.18",
            category: "fashion",
            link: "sepprod.html?id=15",
            tags: ["kids", "blazer", "armani", "luxury"]
        },
        "16": {
            title: "Emporio Armani Kids Intarsia-knit Cotton Jumper",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqS7kldgg7TYgMZ5Jjx7L--aM4n3hvkimH-b2evQnkgGs07gZyOuwJsRJ6HYTTFQ41QxG-pwPTnNbO-DQdCGNe2MdabnphhA92JLok-yiUi6vN7UWXNW-S",
            price: "₹26,271.97",
            category: "fashion",
            link: "sepprod.html?id=16",
            tags: ["kids", "jumper", "cotton", "armani"]
        },
        "17": {
            title: "Emporio Armani Striped Seersucker Suit",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSw1ED6UWnV-96bhciSvpR5eYPj-GgMixH0wZ4mLIFu4UATLWN8fnFx5K9JEa5kCuMon90CkXWIp3l08RYGKznUb6vSfVe76I5j9TiMX4RTA3p_8fgrsh7A",
            price: "₹77,104.38",
            category: "fashion",
            link: "sepprod.html?id=17",
            tags: ["kids", "suit", "summer", "armani"]
        },
        "18": {
            title: "Emporio Armani Kids Two-Piece Dinner Suit",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqwP0okYHY-oAm9S5m-ggd1l7vteFL-jbRc2wB5ms38D5BCONoV73BmcanFVgQMzhOnowjnTP7eA1sIjkg5xN1DW2vc4mh636vv-r1e2Vye7dRnvXl33eh",
            price: "₹87,887.01",
            category: "fashion",
            link: "sepprod.html?id=18",
            tags: ["kids", "formal", "dinner", "luxury"]
        },
        "19": {
            title: "Emporio Armani Kids Logo-Jacquard Dress",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ06elH6Piw0BwtZaS5xFzfEIK9oaivxJPXN4lMCV9H_zUihckr9PT_Gpk-SVoMi3s7DwWVqx_vgdNxoX4X_DFmOFbJsO4j_3Z89F_ijNYauTIF1laIN70HMw",
            price: "₹23,619.10",
            category: "fashion",
            link: "sepprod.html?id=19",
            tags: ["kids", "dress", "girls", "armani"]
        },
        "20": {
            title: "ARMANI JUNIOR Blended Regular Fit Dress",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjnpbbKn0DN2Lz0K0LUqy_tsThM4h_yOLWMowozXlbOPi8lUzvM4PKtGWYpW0C1uaaBlX9eC4SMuv3m-6wG6C-ZVyuwO0tZcqpHgj0fpHqz5hU_apXYiXFxg",
            price: "₹11,000",
            category: "fashion",
            link: "sepprod.html?id=20",
            tags: ["kids", "dress", "school", "armani"]
        },
        "21": {
            title: "Dress EMPORIO ARMANI kids",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKwQ8YBJCWNK0cyZLfZ84VoV6MoqzQUvD9EIejwKiijGXXw5nbgKL5NBhg1f0ByNyBmTOIXodQ1XRVQB_01g8zkrGDAjzFRWERUZmW0ISnZI2ryOalU6uYZg",
            price: "₹15,037.08",
            category: "fashion",
            link: "sepprod.html?id=21",
            tags: ["kids", "dress", "party", "armani"]
        },
        "22": {
            title: "ARMANI JUNIOR EA Jersey Fleece Dress",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRk-kEHZkNQLkQCVMY0CXg7OHWbTKWOKzUmegph8kWnkHmOp6QwpX5Yrhs8X-wigu8Jgr61akxOXFgJLIo4Ff-laYsoDoa3YFisl7Hhn6Hlw_IQM3lb3zxR1w",
            price: "₹19,000",
            category: "fashion",
            link: "sepprod.html?id=22",
            tags: ["kids", "dress", "winter", "fleece"]
        },
        "23": {
            title: "ARMANI JUNIOR New Manga Blended Dress",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgH5_BK2yIni-yb_ouci8tTPEg5hp7B_w7osh5tynVyfOHJY41JFJ1qU9dQEub1D3Qx7vVp5HGfr-VZatqVxQjGI4XVQypASnFEAq5Cm6itu2M1c40X4tpvg",
            price: "₹10,500",
            category: "fashion",
            link: "sepprod.html?id=23",
            tags: ["kids", "dress", "casual", "manga"]
        },
        "24": {
            title: "Armani Junior Silk Floral Print Dress",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQZah5lySBsS06Jhw5nvdD1E3KbKlxIHTzEe60tQkth7rf662GqHwnpn4z2EViANZSFWbSA0Rol2aL8IWMus_lnzxrZeX02dJUbbwqwBdoKrE5khfxD7Ik",
            price: "₹21,079",
            category: "fashion",
            link: "sepprod.html?id=24",
            tags: ["kids", "dress", "silk", "floral"]
        },
        "25": {
            title: "Apple 2024 MacBook Pro Laptop with M4 chip",
            image: "https://m.media-amazon.com/images/I/618r76w5dGL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹1,499.99",
            category: "laptops",
            link: "sepprod.html?id=25",
            tags: ["macbook", "apple", "pro", "premium"]
        },
        "26": {
            title: "ACEMAGIC 15.6\" Laptop",
            image: "https://m.media-amazon.com/images/I/716uMsfCxbL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹299.99",
            category: "laptops",
            link: "sepprod.html?id=26",
            tags: ["budget", "windows", "basic", "entry-level"]
        },
        "27": {
            title: "Lenovo Tab Plus 8GB/128GB Tablet",
            image: "https://m.media-amazon.com/images/I/71J0O9IHi7L._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹349.99",
            category: "tablets",
            link: "sepprod.html?id=27",
            tags: ["tablet", "android", "lenovo", "midrange"]
        },
        "28": {
            title: "ASUS ROG Zephyrus M16 Gaming Laptop 2023",
            image: "https://m.media-amazon.com/images/I/6177weNRfFL._AC_SL1221_.jpg",
            price: "₹2,199.99",
            category: "laptops",
            link: "sepprod.html?id=28",
            tags: ["gaming", "asus", "rog", "performance"]
        },
        "29": {
            title: "ASUS TUF Gaming A15 (2023) 15.6\" FHD Gaming Laptop",
            image: "https://m.media-amazon.com/images/I/61nTNphSBvL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹1,099.99",
            category: "laptops",
            link: "sepprod.html?id=29",
            tags: ["gaming", "asus", "tuf", "durable"]
        },
        "30": {
            title: "Dell Inspiron 14 2-in-1 Laptop",
            image: "https://m.media-amazon.com/images/I/71qRWDn7yoL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹799.99",
            category: "laptops",
            link: "sepprod.html?id=30",
            tags: ["convertible", "dell", "touchscreen", "versatile"]
        },
        "31": {
            title: "Lenovo IdeaPad Gaming 3",
            image: "https://m.media-amazon.com/images/I/71S1eXJmIAL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹899.99",
            category: "laptops",
            link: "sepprod.html?id=31",
            tags: ["gaming", "lenovo", "budget", "performance"]
        },
        "32": {
            title: "ASUS VivoBook Pro 16 OLED",
            image: "https://m.media-amazon.com/images/I/81Ev2S5nrVL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹1,199.99",
            category: "laptops",
            link: "sepprod.html?id=32",
            tags: ["oled", "creative", "asus", "premium"]
        },
        "33": {
            title: "Acer Swift X Creator Laptop",
            image: "https://m.media-amazon.com/images/I/71VG3azYMjL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹1,099.99",
            category: "laptops",
            link: "sepprod.html?id=33",
            tags: ["creator", "acer", "lightweight", "performance"]
        },
        "34": {
            title: "MSI Katana GF76 Gaming Laptop",
            image: "https://images.frandroid.com/wp-content/uploads/2024/01/razer-blade-16-2024-frandroid-2024.png",
            price: "₹1,499.99",
            category: "laptops",
            link: "sepprod.html?id=34",
            tags: ["gaming", "msi", "powerful", "cooling"]
        },
        "35": {
            title: "Microsoft Surface Laptop 5",
            image: "https://th.bing.com/th/id/OIP.WMSPl5ENCaPpj_nlf2SwaAHaFj?rs=1&pid=ImgDetMain",
            price: "₹1,299.99",
            category: "laptops",
            link: "sepprod.html?id=35",
            tags: ["surface", "windows", "premium", "sleek"]
        },
        "36": {
            title: "ROG zephyrus G16",
            image: "https://th.bing.com/th/id/OIP.1h9othO2DYh8E93CY3vRegHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            price: "₹3,499.99",
            category: "laptops",
            link: "sepprod.html?id=36",
            tags: ["rog", "flagship", "gaming", "premium"]
        },
        "37": {
            title: "Redmi pad pro 5g",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/j/f/f/-original-imah4zj6zp9cfa53.jpeg?q=70",
            price: "₹20,999",
            category: "tablets",
            link: "sepprod.html?id=37",
            tags: ["redmi", "android", "budget", "5G"]
        },
        "38": {
            title: "SAMSUNG Galaxy Tab S9 FE+",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/8/i/q/-original-imaguyffv34ghmky.jpeg?q=70",
            price: "₹19,999",
            category: "tablets",
            link: "sepprod.html?id=38",
            tags: ["samsung", "android", "premium", "large-screen"]
        },
        "39": {
            title: "Blackview Tab 16 Android Tablet",
            image: "https://m.media-amazon.com/images/I/71a+I5A5slL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹199.99",
            category: "tablets",
            link: "sepprod.html?id=39",
            tags: ["blackview", "budget", "android", "basic"]
        },
        "40": {
            title: "realme Pad 2 Lite 4GB/128GB",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/f/k/b/-original-imah4rktdpdfyhbm.jpeg?q=70",
            price: "₹12,999",
            category: "tablets",
            link: "sepprod.html?id=40",
            tags: ["realme", "lite", "android", "budget"]
        },
        "41": {
            title: "UMIDIGI Tablet 10.1\" Android 13",
            image: "https://m.media-amazon.com/images/I/71KY4mzGfSL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹10,999",
            category: "tablets",
            link: "sepprod.html?id=41",
            tags: ["umidigi", "budget", "android", "basic"]
        },
        "42": {
            title: "OUKITEL RT3 Rugged Tablet",
            image: "https://m.media-amazon.com/images/I/81q9TZwKhwL._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹349.99",
            category: "tablets",
            link: "sepprod.html?id=42",
            tags: ["rugged", "outdoor", "durable", "android"]
        },
        "43": {
            title: "Lenovo Tab Plus 8GB RAM 128GB Tablet",
            image: "https://m.media-amazon.com/images/I/61mpmFMSAML._AC_UY327_FMwebp_QL65_.jpg",
            price: "₹15,999",
            category: "tablets",
            link: "sepprod.html?id=43",
            tags: ["lenovo", "midrange", "android", "performance"]
        },
        "44": {
            title: "Razer Edge 5G Gaming Tablet",
            image: "https://th.bing.com/th/id/OIP.ooNXtRBlQPYJaPQ3YZ9FLgHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            price: "₹899.99",
            category: "tablets",
            link: "sepprod.html?id=44",
            tags: ["razer", "gaming", "5G", "performance"]
        },
        "45": {
            title: "Motorola Tab G85 5G",
            image: "https://th.bing.com/th/id/OIP.L8gVYk9AGJ1EoJYSIA0OjAHaGV?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            price: "₹279.99",
            category: "tablets",
            link: "sepprod.html?id=45",
            tags: ["motorola", "5G", "android", "midrange"]
        },
        "46": {
            title: "ASUS VivoTab 13.4\" 2-in-1 OLED Windows Tablet",
            image: "https://images.anandtech.com/doci/6387/DSC_0024_575px.jpg",
            price: "₹1,199.99",
            category: "tablets",
            link: "sepprod.html?id=46",
            tags: ["asus", "windows", "oled", "convertible"]
        },
        "47": {
            title: "DOOGEE T20 Ultra Tablet",
            image: "https://th.bing.com/th/id/OIP.YTI91yGuGFvZT03eQz8KgAHaHX?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            price: "₹399.99",
            category: "tablets",
            link: "sepprod.html?id=47",
            tags: ["doogee", "android", "midrange", "large-screen"]
        },
        "48": {
            title: "Infinix NotePad 10.4\" Android Tablet",
            image: "https://phonecorridor.com/wp-content/uploads/infinix-xpad.jpg",
            price: "₹12,999",
            category: "tablets",
            link: "sepprod.html?id=48",
            tags: ["infinix", "android", "budget", "basic"]
        },
        "49": {
            title: "Men's Textured Regular Fit Shirt",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpXkA9h7hi3qOzRx8nkwTWy4qEtR1T6Yt3EKocqjia5qEq7_aJGTYZhsxLd5m-f6WmI0kJrok8ps-SeOBrQT9MJJwLuyZH00ApZcLQ-cs42rmF4PSicJrK",
            price: "₹1,399",
            category: "fashion",
            link: "sepprod.html?id=49",
            tags: ["shirt", "men", "formal", "cotton"]
        },
        "50": {
            title: "Trillion Men's Formal Trousers",
            image: "https://m.media-amazon.com/images/I/41oxHlqVLXL._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹3,799",
            category: "fashion",
            link: "sepprod.html?id=50",
            tags: ["trousers", "men", "formal", "office"]
        },
        "51": {
            title: "ARDO Men's Slim Fit Shirt",
            image: "https://m.media-amazon.com/images/I/51W0YDiJobL._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹3,999",
            category: "fashion",
            link: "sepprod.html?id=51",
            tags: ["shirt", "slim-fit", "formal", "men"]
        },
        "52": {
            title: "Peter England Men Black Formal Trousers",
            image: "https://m.media-amazon.com/images/I/617EoGqXjoL._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹2,999",
            category: "fashion",
            link: "sepprod.html?id=52",
            tags: ["trousers", "black", "formal", "office"]
        },
        "53": {
            title: "Symbol Men's Stretchable Casual Pants",
            image: "https://m.media-amazon.com/images/I/61TM1RRxo9L._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹1,999",
            category: "fashion",
            link: "sepprod.html?id=53",
            tags: ["pants", "casual", "stretch", "comfort"]
        },
        "54": {
            title: "T-Shirts for Men",
            image: "https://m.media-amazon.com/images/I/418rBCEJ30L._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹1,299",
            category: "fashion",
            link: "sepprod.html?id=54",
            tags: ["t-shirt", "casual", "basic", "cotton"]
        },
        "55": {
            title: "Symbol Premium Men's Wrinkle-Resistant Cotton Formal Shirt",
            image: "https://m.media-amazon.com/images/I/61OZq-JkXEL._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹4,999",
            category: "fashion",
            link: "sepprod.html?id=55",
            tags: ["shirt", "formal", "wrinkle-free", "premium"]
        },
        "56": {
            title: "Pinkmint Men's Long Sleeve Button Down White Shirt",
            image: "https://m.media-amazon.com/images/I/61WswLTIRqL._SY741_.jpg",
            price: "₹999",
            category: "fashion",
            link: "sepprod.html?id=56",
            tags: ["shirt", "white", "casual", "button-down"]
        },
        "57": {
            title: "Symbol Men's Solid Cotton Printed Long Kurta",
            image: "https://m.media-amazon.com/images/I/810Dpv2uORL._AC_UL480_FMwebp_QL65_.jpg",
            price: "₹3,333",
            category: "fashion",
            link: "sepprod.html?id=57",
            tags: ["kurta", "ethnic", "cotton", "printed"]
        },
        "58": {
            title: "Professional Men's Blazer",
            image: "https://m.media-amazon.com/images/I/315mLC5NehL.jpg",
            price: "₹3,999",
            category: "fashion",
            link: "sepprod.html?id=58",
            tags: ["blazer", "formal", "men", "office"]
        },
        "59": {
            title: "DENIMHOLIC Men's Jeans",
            image: "https://images-eu.ssl-images-amazon.com/images/I/51+bIkK-lsL._AC_SR185,210,0,C_BR3_.jpg",
            price: "₹1,599",
            category: "fashion",
            link: "sepprod.html?id=59",
            tags: ["jeans", "denim", "casual", "men"]
        },
        "60": {
            title: "Urbano Fashion Men's Jeans",
            image: "https://images-eu.ssl-images-amazon.com/images/I/51nTLM3cEqL._AC_SR185,210,0,C_BR3_.jpg",
            price: "₹1,699",
            category: "fashion",
            link: "sepprod.html?id=60",
            tags: ["jeans", "urban", "casual", "men"]
        },
        "61": {
            title: "Best Silk Soft Printed Saree (Georgette)",
            image: "https://images.meesho.com/images/products/286027106/hzjnp_400.webp",
            price: "₹2,000",
            category: "fashion",
            link: "sepprod.html?id=61",
            tags: ["saree", "women", "georgette", "printed"]
        },
        "62": {
            title: "Chitrarekha Drishya Sarees",
            image: "https://images.meesho.com/images/products/509366181/7ha2z_400.webp",
            price: "₹1,500",
            category: "fashion",
            link: "sepprod.html?id=62",
            tags: ["saree", "women", "embroidered", "festive"]
        },
        "63": {
            title: "BANDHANI SAREE",
            image: "https://images.meesho.com/images/products/326810778/vbpzu_400.webp",
            price: "₹1,799",
            category: "fashion",
            link: "sepprod.html?id=63",
            tags: ["saree", "bandhani", "traditional", "women"]
        },
        "64": {
            title: "Hathi Design Silk Saree",
            image: "https://images.meesho.com/images/products/101971295/5jbb0_400.webp",
            price: "₹1,000",
            category: "fashion",
            link: "sepprod.html?id=64",
            tags: ["saree", "silk", "women", "printed"]
        },
        "65": {
            title: "Print Daily Wear Georgette Saree",
            image: "https://images.meesho.com/images/products/368255807/cz303_400.webp",
            price: "₹1,499",
            category: "fashion",
            link: "sepprod.html?id=65",
            tags: ["saree", "georgette", "daily-wear", "women"]
        },
        "66": {
            title: "Best Satin Silk Printed Daily Wear Saree",
            image: "https://images.meesho.com/images/products/6908023/yprtp_400.webp",
            price: "₹1,349",
            category: "fashion",
            link: "sepprod.html?id=66",
            tags: ["saree", "satin", "party-wear", "women"]
        },
        "67": {
            title: "Jivika Drishya Kurtis",
            image: "https://images.meesho.com/images/products/152597956/klzgh_400.webp",
            price: "₹1,459",
            category: "fashion",
            link: "sepprod.html?id=67",
            tags: ["kurti", "women", "casual", "printed"]
        },
        "68": {
            title: "New Fashion Western Dress",
            image: "https://images.meesho.com/images/products/321750698/xyw98_400.webp",
            price: "₹1,999",
            category: "fashion",
            link: "sepprod.html?id=68",
            tags: ["dress", "western", "women", "party"]
        },
        "69": {
            title: "Bandhej Sarees",
            image: "https://images.meesho.com/images/products/417539729/rdbtc_400.webp",
            price: "₹1,799",
            category: "fashion",
            link: "sepprod.html?id=69",
            tags: ["saree", "bandhej", "traditional", "women"]
        },
        "70": {
            title: "Big Size White Embroidery Kurti",
            image: "https://images.meesho.com/images/products/384916068/fsdct_400.webp",
            price: "₹1,299",
            category: "fashion",
            link: "sepprod.html?id=70",
            tags: ["kurti", "plus-size", "embroidered", "women"]
        },
        "71": {
            title: "Fashionable Cotton Slub Digital Print Anarkali Kurti",
            image: "https://images.meesho.com/images/products/359484015/j22ge_400.webp",
            price: "₹1,199",
            category: "fashion",
            link: "sepprod.html?id=71",
            tags: ["kurti", "anarkali", "printed", "women"]
        },
        "72": {
            title: "Jivika Drishya Kurtis (Pack of 2)",
            image: "https://images.meesho.com/images/products/414651751/16xus_400.webp",
            price: "₹1,599",
            category: "fashion",
            link: "sepprod.html?id=72",
            tags: ["kurti", "pack", "casual", "women"]
        },
        "73": {
            title: "Wood Art City Rosewood 2-Seater Settee Sofa Diwan",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDAwRTHdbuw2gufk-4GdUTEPuJVR_9mb-_HY4-GsXpLoypncR20eqBTNi2kSJMDg7Q4kKYeoGivQQcRIOPNVvt_7vY0Hh9Ea_Kpy4vb70",
            price: "₹1,97,500",
            category: "furniture",
            link: "sepprod.html?id=73",
            tags: ["sofa", "rosewood", "living-room", "premium"]
        },
        "74": {
            title: "L Shape Sofa Set | Modern Sheesham Wood Design",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQD4Dq4QOEy_suvrq80-6tnDkOFMcRI5rH_zIoc6LIBs66yg-b83va8YP74EDO8V2WGN1VEjimUePOzP_5-Fq6Mn-aVuSAKZKByuNhvIFA",
            price: "₹9,59,891",
            category: "furniture",
            link: "sepprod.html?id=74",
            tags: ["sofa", "l-shape", "sheesham", "modern"]
        },
        "75": {
            title: "Modern Wooden Living Room Set (3-Piece)",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXd5n1clvB6afZHET0IWrtj4w6ezXOTy9aPMuz7hxYIdGbRVqBjdhCEddXNkSDJPjM5y_SkgGp3KKi29xPho6q5Qeeqi_SC2FmJluRqvOI",
            price: "₹9,94,011",
            category: "furniture",
            link: "sepprod.html?id=75",
            tags: ["living-room", "set", "wooden", "modern"]
        },
        "76": {
            title: "Wakefit Coffee Table (Engineered Wood)",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRepb7kBCnZ21HukFYJGBPa-4Nj-UMGa6s183_IHsWY2WIORJt-qxQpvxIdmRLZwjT49m2nCP3fwD3w6_rI7yN1nrJgfUVKsDoMRMfingc",
            price: "₹86,272",
            category: "furniture",
            link: "sepprod.html?id=76",
            tags: ["coffee-table", "wood", "living-room", "modern"]
        },
        "77": {
            title: "CASPIAN Engineered Wood Dressing Table",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6aTnWV0Lb0GZk6sEwuHYENMhNVPtk22kFqnd8aCgcl1Dr4KGqNmMuaKPPJd4D0gJMmV6bTFCLU13VN1dTXjXAAyCvjbPxYzaKttYziDAoLz9zZhy3_PR7",
            price: "₹77,104",
            category: "furniture",
            link: "sepprod.html?id=77",
            tags: ["dressing-table", "bedroom", "wood", "mirror"]
        },
        "78": {
            title: "FireBees Multi-Functional Bedside Table",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcfu3qMuJmz7EwlLDM7ojoB8n8gqmCl59Vc2F5xYH6XgcdPPjeBiajjrWfHMReUKI46fnO8WkmGWZXNKclujc0HMHbVBy9BZGk0V9elbI",
            price: "₹19,887",
            category: "furniture",
            link: "sepprod.html?id=78",
            tags: ["bedside-table", "multi-functional", "compact", "bedroom"]
        },
        "79": {
            title: "PIPERCRAFTS Sheesham Wood Chest of Drawers",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQP6NFFfauNccUy_iQfyvJfPW3nfB3sIEd0Rjqrae65P331OVYCOCIG0Ffir04ZXUJjneFEUmTXDvGsE0Mz8Tw6qKIuFDP5dZx_Gq07_W9x",
            price: "₹98,619",
            category: "furniture",
            link: "sepprod.html?id=79",
            tags: ["chest", "drawers", "sheesham", "storage"]
        },
        "80": {
            title: "OXTEM U-Shape Sectional 10-Seater Sofa",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjkTZOu-sB9CUpYPLNcm9gVLH4CAdbAzc_Om3TjpUaDJNoVTtsufdD_egf8aeEqazkPerb17_lehEtFpt9Ak67kEhbiuA6j5JwIbLKnZ0",
            price: "₹10,00,000",
            category: "furniture",
            link: "sepprod.html?id=80",
            tags: ["sectional", "sofa", "u-shape", "large"]
        },
        "81": {
            title: "Whitebeard Sheesham Wood 6-Seater Sofa Set",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMoNeHmHeNolp-aaT_8L196PGXmIyjCgbkCGSDbgtUHLhhHBdqtd8cGNl0BZnDmJ5WXnwt5XOrHJidTcJa4oWlFFRDtyZAZxjpqy788EA",
            price: "₹99,037",
            category: "furniture",
            link: "sepprod.html?id=81",
            tags: ["sofa-set", "sheesham", "6-seater", "living-room"]
        },
        "82": {
            title: "FURNEASER Modern Centre Table with Storage",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRihuQbudfWOmqVye2FTMST7LJ424pj-7zlpRfqrwrUnEVwMZw_pC5totfr_xeDTUusMC5cP4u3HX6QhjeQoCTd1wyRB62Kra0VMeW576wD",
            price: "₹2,09,000",
            category: "furniture",
            link: "sepprod.html?id=82",
            tags: ["centre-table", "storage", "modern", "living-room"]
        },
        "83": {
            title: "Sheesham Wood Sofa Set (3+2+1 Configuration)",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSczZG2xILpWg0iXWdAG9BTkH-GRML9KibtXz9-9uOXEDk4CR12Krx31hh6SV1YBqL8V5dO2xBUMDsoktOWn9O9aR7FoWk25r1PjHhDANqW",
            price: "₹93,500",
            category: "furniture",
            link: "sepprod.html?id=83",
            tags: ["sofa-set", "sheesham", "3+2+1", "living-room"]
        },
        "84": {
            title: "NISHA FURNITURE Solid Wood Center Table with Stools",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqXhDbXMu-zClpYLOknt5424CqLMRPImMUP5vF2Yzs0sD3vGRDZ5MI4IJOFcDSh-B-nWmOFtOyR_zQ-VnvqxALxnNhxbT3jhksuZBt-J6y",
            price: "₹77,079",
            category: "furniture",
            link: "sepprod.html?id=84",
            tags: ["center-table", "stools", "wood", "set"]
        },
        "85": {
            title: "Grand Gaming Days offers on Bestselling Gaming Laptops",
            image: "https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY200_.jpg",
            price: "₹1,399",
            category: "deals",
            link: "sepprod.html?id=85",
            tags: ["gaming", "laptops", "deals", "offer"]
        },
        "86": {
            title: "High Performance Handpicked Desktop Computers from HP",
            image: "https://m.media-amazon.com/images/I/41DjFnGQ1FL._AC_SY200_.jpg",
            price: "₹3,799",
            category: "deals",
            link: "sepprod.html?id=86",
            tags: ["desktop", "hp", "computers", "offer"]
        },
        "87": {
            title: "Best Prices on boAt Headphones, Soundbars",
            image: "https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg",
            price: "₹3,999",
            category: "deals",
            link: "sepprod.html?id=87",
            tags: ["boat", "audio", "headphones", "offer"]
        },
        "88": {
            title: "Jaw dropping deals on headsets",
            image: "https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg",
            price: "₹2,999",
            category: "deals",
            link: "sepprod.html?id=88",
            tags: ["headsets", "audio", "gaming", "offer"]
        },
        "89": {
            title: "Cooking Essentials",
            image: "https://m.media-amazon.com/images/I/31VfkewLnlL._AC_SY200_.jpg",
            price: "₹1,999",
            category: "deals",
            link: "sepprod.html?id=89",
            tags: ["kitchen", "cooking", "utensils", "offer"]
        },
        "90": {
            title: "TOP Deals on PUMA & Skechers Footwear",
            image: "https://m.media-amazon.com/images/I/91kKqnkv9jL._AC_SY200_.jpg",
            price: "₹1,299",
            category: "deals",
            link: "sepprod.html?id=90",
            tags: ["footwear", "shoes", "puma", "skechers"]
        },
        "91": {
            title: "Handpicked Intel Powered Laptops",
            image: "https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg",
            price: "₹4,999",
            category: "deals",
            link: "sepprod.html?id=91",
            tags: ["laptops", "intel", "computers", "offer"]
        },
        "92": {
            title: "Powerbank from Mi, Ambrane, URBN",
            image: "https://m.media-amazon.com/images/I/317lhW5iHVL._AC_SY200_.jpg",
            price: "₹999",
            category: "deals",
            link: "sepprod.html?id=92",
            tags: ["powerbank", "charging", "mi", "ambrane"]
        },
        "93": {
            title: "Top deals on Truke, Govo",
            image: "https://m.media-amazon.com/images/I/41yxd6A+ZAL._AC_SY200_.jpg",
            price: "₹3,333",
            category: "deals",
            link: "sepprod.html?id=93",
            tags: ["earbuds", "audio", "truke", "govo"]
        },
        "94": {
            title: "Amazing deals on pTron, Jabra, Portronics",
            image: "https://m.media-amazon.com/images/I/41wcMkODJLL._AC_SY200_.jpg",
            price: "₹3,999",
            category: "deals",
            link: "sepprod.html?id=94",
            tags: ["audio", "headphones", "jabra", "portronics"]
        },
        "95": {
            title: "Levi's, Allen Solly, ANNI DESIGNER, Janasya & more",
            image: "https://m.media-amazon.com/images/I/61QQtY6qtHL._AC_SY200_.jpg",
            price: "₹1,599",
            category: "deals",
            link: "sepprod.html?id=95",
            tags: ["clothing", "fashion", "levis", "offer"]
        },
        "96": {
            title: "Never before deals on HP printers",
            image: "https://m.media-amazon.com/images/I/21wNUazPKRL._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=96",
            tags: ["printer", "hp", "office", "offer"]
        },
        "97": {
            title: "Vivo Y75 - 18W fast charge, FHD plus display",
            image: "https://m.media-amazon.com/images/I/41bFnhrsyOL._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=97",
            tags: ["vivo", "smartphone", "offer", "fast-charging"]
        },
        "98": {
            title: "Nokia 5710 - newly launched 4G feature phone",
            image: "https://m.media-amazon.com/images/I/41wyFlObIrL._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=98",
            tags: ["nokia", "feature-phone", "4G", "offer"]
        },
        "99": {
            title: "Exciting deals on Mivi, Wecool, Wings",
            image: "https://m.media-amazon.com/images/I/31aTPRvXiSL._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=99",
            tags: ["audio", "earbuds", "mivi", "offer"]
        },
        "100": {
            title: "Vacuum Cleaners from Top Brands",
            image: "https://m.media-amazon.com/images/I/31Zq-alRH9L._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=100",
            tags: ["vacuum", "cleaner", "home", "offer"]
        },
        "101": {
            title: "Grand Gaming Days Offers on Accessories and Storage Devices",
            image: "https://m.media-amazon.com/images/I/416x-scGWgL._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=101",
            tags: ["gaming", "accessories", "storage", "offer"]
        },
        "102": {
            title: "adidas & campus Footwear",
            image: "https://m.media-amazon.com/images/I/31EXkIBVKUL._AC_SY200_.jpg",
            price: "₹1,699",
            category: "deals",
            link: "sepprod.html?id=102",
            tags: ["footwear", "shoes", "adidas", "campus"]
        },
        "103": {
            title: "Apple AirPods Max with Active Noise Cancellation (ANC) – Space Grey",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQgILCXWetuT79ToILn_mFqCBsTq-Sla1dwFjZYZUfVwzZJ86uivsJU1DylzPFWrKp2lddOBrCTrZ-mNeqC-0UrxA2QDMCzUWIcKl62AyFGTzgvlAeZKT3",
            price: "₹97,500",
            category: "audio",
            link: "sepprod.html?id=103",
            tags: ["airpods", "apple", "headphones", "noise-cancelling"]
        },
        "104": {
            title: "Apple Watch Ultra 2nd Generation",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrTT7xXOEqKTmowjsN5KQpQQDmRMKQ7SDwMHHbaj4GVibh29_9u3E6ceDfwtiL18h4RTEG7FC3lJXpIdK_nUOmWsg4ydyo5lYZvX7cmA0FH0maUceeqmYa",
            price: "₹59,891.18",
            category: "wearables",
            link: "sepprod.html?id=104",
            tags: ["apple-watch", "smartwatch", "fitness", "premium"]
        },
        "105": {
            title: "Dell MS3320W Mobile Wireless Mouse",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQxvFG2YG_czmD7ga9wRB6piqb6YBvy3AQyxWYYvs_6eQA0vE5UrlfvR8ouOMM8Ap_qzlAe7qWWukVKM7LO6KKfZGRxmVXnSRFhf9x3d7uv2csuPKKn2SJ",
            price: "₹1,911.18",
            category: "accessories",
            link: "sepprod.html?id=105",
            tags: ["mouse", "wireless", "dell", "office"]
        },
        "106": {
            title: "Zebronics NTC2000 Laptop Cooling Pad",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6UbdWstAtBL9CAhJu7iB1oRNjgXo9-5jNIiOmy5_fdytdcQrmdRYqfPd4tH11SUJicR3bN3pNMXb6ISajYkL_M6c6f4Wj52CTew8Ad78ABwMSdskkIOSm",
            price: "₹6,271.97",
            category: "accessories",
            link: "sepprod.html?id=106",
            tags: ["cooling-pad", "laptop", "accessory", "gaming"]
        },
        "107": {
            title: "Gigabyte Aorus Gen5 12000 2TB NVMe SSD",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaUqGhe1XFQeBBuQwgnkBxnyzn2awtXHF5_F-iizmk6PRaAxrxXCPBwCAxoISbddTUAy2QcwrzUEz_7pYpIxWvIzdocX0nNz9gAppdJvZq9gjQIT19tq-I",
            price: "₹77,104.38",
            category: "components",
            link: "sepprod.html?id=107",
            tags: ["ssd", "storage", "nvme", "gen5"]
        },
        "108": {
            title: "Thrustmaster T.Flight Stick X Joystick",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6rfzUxdZozEAT6Tj5J7jry5dVewQO4qc1vDLGCWwLAwswGJBwM5VreKrYA_7uNmepY7aeJW3isuj-FCt-eU0XGxE25tndhd4-S-fzHh_E4bommFZxLDqSBA",
            price: "₹19,887.01",
            category: "gaming",
            link: "sepprod.html?id=108",
            tags: ["joystick", "gaming", "flight-sim", "thrustmaster"]
        },
        "109": {
            title: "Portronics Key7 Combo Wireless Keyboard & Mouse Set",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeKlbBqTz2IzFDjl9JpzemYYRw6veJe44bXA9ACkSgbIGD5eMe-gLdLoQ1XaZxGs8H2KaWm_fNCnY8vnbKI7ojPoEWuOD_4gvT3wSn52nwZEG0P76Qo5Hg",
            price: "₹98,619.10",
            category: "accessories",
            link: "sepprod.html?id=109",
            tags: ["keyboard", "mouse", "combo", "wireless"]
        },
        "110": {
            title: "Stuffcool Click 20000mAh Magnetic Wireless Powerbank",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUa1z6AR1x3AE7K-1-_AO2P_pa0xeyoc5eDxn87xcUNgdd7sAlRFOIkYs-Jhc8yP3TwSBmUzmMuJW4TZGWDa3RKmfP5pnZSmeN96pSeqHNueUHmkPcNQzUaw",
            price: "₹10,00,000",
            category: "accessories",
            link: "sepprod.html?id=110",
            tags: ["powerbank", "wireless", "magnetic", "high-capacity"]
        },
        "111": {
            title: "RUIZU X02 MP3 Player",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8JG-KezDTrlKfjM3C2IyNltddj-d-jzbRPclWrT-mbwG_rutQyKDyDRRdb0Z5MXVf73QFXzbXf4V3fJToljSWbJsSaBLTNTDl0IYI0c8xA2i8PrPVcm_RHA",
            price: "₹99,037.08",
            category: "audio",
            link: "sepprod.html?id=111",
            tags: ["mp3", "player", "portable", "music"]
        },
        "112": {
            title: "Apple AirPods 4",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQqA--XBYYmomlL7FUYM1ujw0vsOOJC9NEBmn4kbpl4XNAEeddH7hsU44PoTjt5Uc_xHnBzjFCScTJqLb3pYO0R0XO4anB-49Ecg1BvtyqaoognXHKhMyKxA",
            price: "₹2,09,000",
            category: "audio",
            link: "sepprod.html?id=112",
            tags: ["airpods", "apple", "wireless", "earbuds"]
        },
        "113": {
            title: "JBL Boombox 3 Portable Bluetooth Speaker",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToa40R277H_wdk31lsJhhWkbVWYnBxxSa4bJCKjdajLp_tlO9q3ZpP_0tjtTMVYlNOAoLzOWOGb8IphpTGeoQoRJJfl6vwaUa3ZGAYKYbfxQsNb5F3aeSg",
            price: "₹93,500",
            category: "audio",
            link: "sepprod.html?id=113",
            tags: ["speaker", "jbl", "portable", "bluetooth"]
        },
        "114": {
            title: "Nitho Hexagon Wireless Controller",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT9vZ93ie6A99g6f9tC8sgPQ7GqQ_O_hgi6EDJBXM14hKzQhRxAdB9qFl7wAZQOdqQjzhmTzniO2SQTfPbOdRH-4cCEySIx8lhlIJMfJH38aKWlDnX2VRyI",
            price: "₹77,079",
            category: "gaming",
            link: "sepprod.html?id=114",
            tags: ["controller", "gaming", "wireless", "hexagon"]
        }
    };

function searchProducts(query) {
    const searchTerm = query.toLowerCase().replace(/ /g, ''); // Remove spaces
    return Object.values(productsDatabase).filter(product => {
        const title = product.title.toLowerCase().replace(/ /g, '');
        const tags = product.tags?.join('').toLowerCase() || '';
        return title.includes(searchTerm) || tags.includes(searchTerm);
    });
}

// Keep rest of your existing code
  

// DOM Elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const resultsContainer = document.getElementById('resultsContainer');
const noResults = document.getElementById('no-results');
const searchQueryDisplay = document.getElementById('searchQuery');
const resultsCount = document.getElementById('resultsCount');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on search results page
    if (window.location.pathname.includes('search.html')) {
        displaySearchResults();
    }
    
    // Setup search form if it exists
    if (searchForm) {
        setupSearchForm();
    }
});

// Setup search form functionality
function setupSearchForm() {
    // Form submission handler
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });
    
    // Input event for suggestions
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        showSuggestions(query);
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target)) {
            searchSuggestions.style.display = 'none';
        }
    });
}

// Display search results on search page
function displaySearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (!query) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display search query
    searchQueryDisplay.textContent = query;
    
    // Get and display results
    const results = searchProducts(query);
    
    if (results.length === 0) {
        noResults.style.display = 'block';
        if (resultsContainer) resultsContainer.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        if (resultsContainer) {
            resultsContainer.style.display = 'grid';
            resultsContainer.innerHTML = '';
            
            // Show results count
            resultsCount.textContent = `${results.length} ${results.length === 1 ? 'product' : 'products'} found`;
            
            // Add each product to results
            results.forEach(product => {
                const productCard = createProductCard(product);
                resultsContainer.appendChild(productCard);
            });
        }
    }
}

// Search products in database
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    const results = [];
    
    // Convert object to array and filter
    for (const [id, product] of Object.entries(productsDatabase)) {
        // Search in title
        if (product.title.toLowerCase().includes(searchTerm)) {
            results.push({ id, ...product });
            continue;
        }
        
        // Search in category
        if (product.category.toLowerCase().includes(searchTerm)) {
            results.push({ id, ...product });
            continue;
        }
        
        // Search in tags
        if (product.tags && product.tags.some(tag => 
            tag.toLowerCase().includes(searchTerm))) {
            results.push({ id, ...product });
        }
    }
    
    return results;
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Format rating
    const ratingHtml = product.rating 
        ? `<div class="rating">
              ${product.rating} ${product.ratingCount ? `<span class="rating-count">(${product.ratingCount})</span>` : ''}
           </div>`
        : '<div class="rating">Not rated yet</div>';
    
    // Price HTML
    const priceHtml = product.originalPrice 
        ? `<div class="price">
              <span class="current-price">${product.price}</span>
              <span class="original-price">${product.originalPrice}</span>
              ${product.discount ? `<span class="discount">${product.discount}</span>` : ''}
           </div>`
        : `<div class="price">${product.price}</div>`;
    
    // Stock HTML
    const stockHtml = product.stock 
        ? `<div class="stock ${product.stock.includes('In Stock') ? 'in-stock' : 'out-of-stock'}">
              ${product.stock}
           </div>`
        : '';
    
    // Delivery HTML
    const deliveryHtml = product.delivery 
        ? `<div class="delivery">${product.delivery}</div>`
        : '';
    
    // Color options HTML
    const colorsHtml = product.colors && product.colors.length > 0
        ? `<div class="color-options">
              ${product.colors.map(color => 
                  `<span class="color-dot" style="background-color: ${color}"></span>`
              ).join('')}
           </div>`
        : '';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <h3>${product.title}</h3>
        ${ratingHtml}
        ${priceHtml}
        ${stockHtml}
        ${deliveryHtml}
        ${colorsHtml}
        <a href="${product.link}" class="view-product">View Details</a>
    `;
    
    return card;
}

// Show search suggestions
function showSuggestions(query) {
    if (!searchSuggestions) return;
    if (query.length < 2) {
        searchSuggestions.style.display = 'none';
        return;
    }
    
    const suggestions = getSuggestions(query);
    
    if (suggestions.length === 0) {
        searchSuggestions.style.display = 'none';
        return;
    }
    
    searchSuggestions.innerHTML = '';
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'suggestion-item';
        suggestionElement.textContent = suggestion;
        suggestionElement.addEventListener('click', function() {
            searchInput.value = suggestion;
            searchSuggestions.style.display = 'none';
            searchForm.submit();
        });
        searchSuggestions.appendChild(suggestionElement);
    });
    
    searchSuggestions.style.display = 'block';
}

// Get search suggestions
function getSuggestions(query) {
    const searchTerm = query.toLowerCase();
    const suggestions = new Set();
    
    // Get suggestions from product titles
    for (const product of Object.values(productsDatabase)) {
        if (product.title.toLowerCase().includes(searchTerm)) {
            suggestions.add(product.title);
        }
    }
    
    // Get suggestions from categories
    for (const product of Object.values(productsDatabase)) {
        if (product.category.toLowerCase().includes(searchTerm)) {
            suggestions.add(product.category);
        }
    }
    
    // Get suggestions from tags
    for (const product of Object.values(productsDatabase)) {
        if (product.tags) {
            product.tags.forEach(tag => {
                if (tag.toLowerCase().includes(searchTerm)) {
                    suggestions.add(tag);
                }
            });
        }
    }
    
    return Array.from(suggestions).slice(0, 5); // Return max 5 suggestions
}
// Temporary debug - remove after testing
console.log("All Products in Database:", productsDatabase);
console.log("Testing search for 'phone':", searchProducts("phone"));