function generateProductHTML(category, name, weight, price, imageUrl) {
    const displayCat = category.charAt(0).toUpperCase() + category.slice(1).replace('mens', "Men's Collection");
    const finalImageUrl = imageUrl || `images/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`;
    const weightHtml = weight
        ? `<div class="weight">${weight}</div>`
        : `<div class="weight" style="display:none;">N/A</div>`;

    return `
        <div class="product-card" data-category="${category}" data-name="${name.toLowerCase()}">
            <div class="card-image">
                <div class="image-loader"></div>
                <img src="${finalImageUrl}" alt="${name} - ${displayCat}" loading="lazy" onload="this.previousElementSibling.style.display='none'; this.style.opacity='1';" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="image-fallback" style="display:none;">Image Unavailable</div>
            </div>
            <div class="card-overlay">
                <button class="view-btn buy-now-btn" aria-label="Buy ${name}">Buy Now</button>
            </div>
            <div class="card-info">
                <div class="category">${displayCat}</div>
                <h3>${name}</h3>
                ${weightHtml}
                <div class="price">${price}</div>
            </div>
        </div>`;
}

const GRAMS_PER_TOLA = 11.664;
const GOLD_24K_PER_TOLA = 518500;
const SILVER_PER_TOLA = 12000;
const DIAMOND_PER_CARAT = 275000;

const GOLD_22K_PER_GRAM = (GOLD_24K_PER_TOLA * 0.9166) / GRAMS_PER_TOLA;
const SILVER_PER_GRAM = SILVER_PER_TOLA / GRAMS_PER_TOLA;

const formatPKR = (value) => `Rs. ${Math.round(value).toLocaleString('en-PK')}`;
const formatWeight = (grams) => `Weight: ${grams} Grams`;

const calcGoldPrice = (weight, makingPct = 0.14) => {
    const metal = weight * GOLD_22K_PER_GRAM;
    const making = metal * makingPct;
    return metal + making;
};

const calcSilverPrice = (weight, makingPct = 0.12) => {
    const metal = weight * SILVER_PER_GRAM;
    const making = metal * makingPct;
    return metal + making;
};

const calcDiamondPrice = (goldWeight, carat, makingPct = 0.16) => {
    const goldPart = calcGoldPrice(goldWeight, 0.12);
    const diamondPart = carat * DIAMOND_PER_CARAT;
    const setting = diamondPart * makingPct;
    return goldPart + diamondPart + setting;
};

const imageLinks = {
    'Royal Gold Ring': 'https://manubhai.in/SocialMedia/post_artworks/2307202011442572.jpg',
    'Traditional Bangles': 'https://www.jiomart.com/images/product/original/rvm0juduhf/lucky-jewellery-gold-plated-leaf-design-golden-color-traditional-ethnic-2-pcs-bangles-set-for-women-195-j1bg-265-2-210-product-images-rvm0juduhf-0-202403061805.jpg',
    'Classic Gold Chain': 'https://cdn.shopify.com/s/files/1/0761/1215/files/22ct-yellow-gold-filed-spiga-chain-with-lobster-clasp_5.jpg?v=1708613976',
    'Wedding Set': 'https://www.lookethnic.com/cdn/shop/products/LECOHR0164.jpg?v=1552318733',
    'Gold Pendant': 'https://www.caratlane.com/blog/wp-content/uploads/2024/10/Trendy-22k-Gold-Pendants-for-everyday-styling.jpg',
    'Gold Locket': 'https://i.ebayimg.com/images/g/rEwAAOSwXhNmflxe/s-l1200.jpg',
    'Gold Bracelet': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8XwBRvA1N4VVzwOtM0rftyIkaynCsqmHqg&s',
    'Pure Gold Coin': 'https://storage.googleapis.com/blog-bucket-staging/Media/6ae4ba8d-large_jos-alukkas-gold-gold-coin-jam2gk-b5hp.png',
    'Antique Gold Ring': 'https://razajewellers.pk/wp-content/uploads/2024/09/3.1-2-scaled.jpg',
    'Gold Earrings': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQcYU8TAU30Cv5V-MG5W16r39bsIEqUK6zA&s',
    'Solitaire Studs': 'https://lahoriyaan.com/cdn/shop/files/E4A2WHITEJPG.jpg?v=1693508051',
    'Engagement Ring': 'https://razajewellers.pk/wp-content/uploads/2024/02/IMG_2732-scaled-large.jpg',
    'Diamond Necklace': 'https://media.debeers.com/i/debeers/N102230_20?fmt=auto&fmt.webp.qlt=65&fmt.jp2.qlt=40&fmt.jpeg.qlt=65&$new-plp-grid-desktop-1-1-3000-poi$',
    'Tennis Bracelet': 'https://asset.swarovski.com/images/$size_1000/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5648936_png/matrix-tennis-bracelet--round-cut--white--rhodium-plated-swarovski-5648936.png',
    'Princess Ring': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iftquFyHhFA8gZ_PJ468BnxCpXvPmnGWgQ&s',
    'Diamond Pendant': 'https://abwholesale.pk/cdn/shop/files/O1CN01mGYgWe1ynqUUPkbUT__2216183496624-0-cib.jpg?v=1733480950https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMk90p1HppaLiJt0hWIq-q6tf-aboGItUQQ&s',
    'Nose Pin': 'https://www.zanvari.com/cdn/shop/products/DiamondNosePin.jpg?v=1647028927&width=1080',
    'Wedding Band': 'https://www.patialadiamonds.com/cdn/shop/products/AM21D12A.jpg?v=1649932225&width=2048',
    'Diamond Hoops': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXIUfRkdnDqZzn_UfcBQ5B_7o3ipe7TSG8A&s',
    'Luxury Diamond Watch': 'https://m.media-amazon.com/images/I/712GPUC20oS._AC_SL1000_.jpg',
    'Sterling Silver Chain': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNxDfyO6Iy-IQXM5s0xQTr6bwch1oWXMP4Q&s',
    'Silver Ring': 'https://u-mercari-images.mercdn.net/photos/m19789046589_5.jpg',
    'Silver Payal': 'https://kickyandperky.com/cdn/shop/files/SILANKCH014-4.jpg?v=1754912620',
    'Silver Earrings': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfduhxYW_goyC5Ex-hePaCgiwUGX8QV8X-xw&s',
    'Silver Locket': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SLRaoBicc8IzyNHKs7i7Dk-ARvkkxCxW1Q&s',
    'Silver Anklet Pair': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoSpFUTrD5HZpiR_BwOwert54mDsotX2M4Q&s',
    'Stone Ring': 'https://touch925.com/cdn/shop/files/BFGR173_2_2146d064-983a-4479-97e0-f2f0d7cc57a8.webp?v=1751727912&width=2000',
    'Silver Bridal Set': 'https://images.laceandfavour.com/_cache/_products/1700x1700/ivory-and-co-sorbonne-silver-bridal-jewellery-set.jpg',
    'Silver Bracelet': 'https://vonejewellery.in/cdn/shop/files/81_1_f5a9416d-9558-492f-8906-d071484dc067.jpg?v=1742205737',
    'Kundan Bridal Set': 'https://blingbag.co.in/cdn/shop/files/EmeraldShreyaniBridalJewellerySet_9.jpg?v=1753867967&width=1080',
    'Fancy Earrings': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSf6TVds0S3RRngrGIBz20cTEZIdVrq-tEQ&s',
    'Choker Set': 'https://www.lalueur.pk/cdn/shop/files/Naureen-_CS-44_-Purple_3.jpg?v=1764918691&width=1000',
    'Velvet Bangles': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoW9i5JFUx_KPcVSFEgDfsTrF0nd-kGlrGw&s',
    'Golden Kara': 'https://dappershop.pk/cdn/shop/files/golden_steel_kara_bracelet_for_men_boys_in_Pakistan_3.jpg?v=1727267931&width=1946',
    'Beaded Mala': 'https://kolhapurithusi.in/cdn/shop/files/2-layer-plain-beads-mala.jpg?v=1722339488',
    'Nath': 'https://5.imimg.com/data5/IR/WM/MY-25237243/rajputi-bridal-nath.jpg',
    'Matha Patti': 'https://static-01.daraz.pk/p/5f7e0a547dc347a197e818332f1f9c71.jpg',
    'Hand Panja': 'https://5.imimg.com/data5/SELLER/Default/2024/10/457356533/OA/VP/PA/209109667/fashion-jewelry.jpg',
    'Daily Wear Chain': 'https://www.caratlane.com/blog/wp-content/uploads/2025/03/stylish-22k-gold-chains-for-daily-wear.jpg',
    'Gold Wrist Watch': 'https://jabeens.shop/cdn/shop/files/DSC00116.jpg?v=1755282313&width=4000',
    'Men,s Signet Ring': 'https://etrnlrings.com/cdn/shop/products/Rectangle-Signet-Gold_1200x.jpg?v=1607623148',
    'Heavy Silver Chain': 'https://static-01.daraz.pk/p/c26eff9a6fd4d72e80238a202cd5bdfe.jpg',
    'Platinum Band': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAc5lr5hnfmyCZrDV4-Xg8w3DWYKcSLn78g&s',
    'Silver Bracelet (Kara)': 'https://dappershop.pk/cdn/shop/files/Silver_Braided_Kara_Bracelet_For_Men_Online_In_Pakistan_1.jpg?v=1752585436&width=1445',
    'Gold Tie Pin': 'https://dappershop.pk/cdn/shop/files/Golden_tie_pin_for_men_suit_online_in_pakistan_3.jpg?v=1725977006&width=1946',
    'Diamond Cufflinks': 'https://jacobandco.shop/cdn/shop/files/118.jpg?v=1710524844',
    'Black Onyx Ring': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcbUM2Wg8cnG4k4TcJ7Shjef24iYJZmcuYg&s',
    'Leather & Gold Bracelet': 'https://michaelkjewelers.com/cdn/shop/products/SLB492_2700x.jpg?v=1623796542',
    'Lion Head Gold Ring': 'https://i.etsystatic.com/16356700/r/il/89a0a2/3129517939/il_fullxfull.3129517939_s9g8.jpg',
    'diamond neclace':'https://i.pinimg.com/1200x/8d/5a/35/8d5a3582c75c9b88e255d773e4632f83.jpg ',
    'diamond Gold ring':'https://www.patialadiamonds.com/cdn/shop/products/1ad2bc790715400fb309f8b54dfc2cad.thumbnail.0000000000.jpg?v=1676803207&width=1080',
};
const sourceProducts = [
    ['gold', 'Royal Gold Ring', imageLinks['Royal Gold Ring']],
    ['gold', 'Traditional Bangles', imageLinks['Traditional Bangles']],
    ['gold', 'Classic Gold Chain', imageLinks['Classic Gold Chain']],
    ['gold', 'Wedding Set', imageLinks['Wedding Set']],
    ['gold', 'Gold Pendant', imageLinks['Gold Pendant']],
    ['gold', 'Gold Locket', imageLinks['Gold Locket']],
    ['gold', 'Gold Bracelet', imageLinks['Gold Bracelet']],
    ['gold', 'Pure Gold Coin', imageLinks['Pure Gold Coin']],
    ['gold', 'Antique Gold Ring', imageLinks['Antique Gold Ring']],
    ['gold', 'Gold Earrings', imageLinks['Gold Earrings']],
    ['diamond', 'Solitaire Studs', imageLinks['Solitaire Studs']],
    ['diamond', 'Engagement Ring', imageLinks['Engagement Ring']],
    ['diamond', 'Diamond Necklace', imageLinks['Diamond Necklace']],
    ['diamond', 'Tennis Bracelet', imageLinks['Tennis Bracelet']],
    ['diamond', 'Princess Ring', imageLinks['Princess Ring']],
    ['diamond', 'Diamond Pendant', imageLinks['Diamond Pendant']],
    ['diamond', 'Nose Pin', imageLinks['Nose Pin']],
    ['diamond', 'Wedding Band', imageLinks['Wedding Band']],
    ['diamond', 'Diamond Hoops', imageLinks['Diamond Hoops']],
    ['diamond', 'Luxury Diamond Watch', imageLinks['Luxury Diamond Watch']],
    ['silver', 'Sterling Silver Chain', imageLinks['Sterling Silver Chain']],
    ['silver', 'Silver Ring', imageLinks['Silver Ring']],
    ['silver', 'Silver Payal', imageLinks['Silver Payal']],
    ['silver', 'Silver Earrings', imageLinks['Silver Earrings']],
    ['silver', 'Silver Locket', imageLinks['Silver Locket']],
    ['silver', 'Silver Anklet Pair', imageLinks['Silver Anklet Pair']],
    ['silver', 'Stone Ring', imageLinks['Stone Ring']],
    ['silver', 'Silver Bridal Set', imageLinks['Silver Bridal Set']],
    ['silver', 'Silver Bracelet', imageLinks['Silver Bracelet']],
    ['artificial', 'Kundan Bridal Set', imageLinks['Kundan Bridal Set']],
    ['artificial', 'Fancy Earrings', imageLinks['Fancy Earrings']],
    ['artificial', 'Choker Set', imageLinks['Choker Set']],
    ['artificial', 'Velvet Bangles', imageLinks['Velvet Bangles']],
    ['artificial', 'Golden Kara', imageLinks['Golden Kara']],
    ['artificial', 'Beaded Mala', imageLinks['Beaded Mala']],
    ['artificial', 'Nath', imageLinks['Nath']],
    ['artificial', 'Matha Patti', imageLinks['Matha Patti']],
    ['artificial', 'Hand Panja', imageLinks['Hand Panja']],
    ['artificial', 'Daily Wear Chain', imageLinks['Daily Wear Chain']],
   
    ['premium', 'diamond neclace', imageLinks['diamond neclace']],
    ['premium', 'diamond Gold ring', imageLinks['diamond Gold ring']],
  
    ['mens collection', 'Gold Wrist Watch', imageLinks['Gold Wrist Watch']],
    ['mens collection', 'Men,s Signet Ring', imageLinks['Men,s Signet Ring']],
    ['mens collection', 'Heavy Silver Chain', imageLinks['Heavy Silver Chain']],
    ['mens collection', 'Platinum Band', imageLinks['Platinum Band']],
    ['mens collection', 'Silver Bracelet (Kara)', imageLinks['Silver Bracelet (Kara)']],
    ['mens collection', 'Gold Tie Pin', imageLinks['Gold Tie Pin']],
    ['mens collection', 'Diamond Cufflinks', imageLinks['Diamond Cufflinks']],
    ['mens collection', 'Black Onyx Ring', imageLinks['Black Onyx Ring']],
    ['mens collection', 'Leather & Gold Bracelet', imageLinks['Leather & Gold Bracelet']],
    ['mens collection', 'Lion Head Gold Ring', imageLinks['Lion Head Gold Ring']]
];

const goldSpecs = {
    'Royal Gold Ring': { weight: 5.2, making: 0.13 },
    'Traditional Bangles': { weight: 28, making: 0.12 },
    'Classic Gold Chain': { weight: 18, making: 0.11 },
    'Wedding Set': { weight: 52, making: 0.15 },
    'Gold Pendant': { weight: 7, making: 0.14 },
    'Gold Locket': { weight: 6, making: 0.14 },
    'Gold Bracelet': { weight: 16, making: 0.12 },
    'Pure Gold Coin': { weight: 11.664, making: 0.03 },
    'Antique Gold Ring': { weight: 9, making: 0.18 },
    'Gold Earrings': { weight: 8, making: 0.14 },
    'Gold Wrist Watch': { weight: 24, making: 0.10 },
    'Men,s Signet Ring': { weight: 10, making: 0.12 },
    'Gold Tie Pin': { weight: 4, making: 0.12 },
    'Leather & Gold Bracelet': { weight: 6, making: 0.10 },
    'Lion Head Gold Ring': { weight: 11, making: 0.15 }
};

const silverSpecs = {
    'Sterling Silver Chain': { weight: 20, making: 0.10 },
    'Silver Ring': { weight: 6, making: 0.12 },
    'Silver Payal': { weight: 40, making: 0.10 },
    'Silver Earrings': { weight: 10, making: 0.12 },
    'Silver Locket': { weight: 8, making: 0.10 },
    'Silver Anklet Pair': { weight: 38, making: 0.10 },
    'Stone Ring': { weight: 7, making: 0.12 },
    'Silver Bridal Set': { weight: 65, making: 0.11 },
    'Nose Pin': { weight: 2, making: 0.12 },
    'Silver Bracelet': { weight: 18, making: 0.10 },
    'Heavy Silver Chain': { weight: 45, making: 0.10 },
    'Silver Bracelet (Kara)': { weight: 30, making: 0.10 }
};

const diamondSpecs = {
    'Solitaire Studs': { goldWeight: 3.2, carat: 0.6, setting: 0.18 },
    'Engagement Ring': { goldWeight: 4.5, carat: 0.8, setting: 0.18 },
    'Diamond Necklace': { goldWeight: 22, carat: 2.8, setting: 0.16 },
    'Tennis Bracelet': { goldWeight: 14, carat: 1.8, setting: 0.16 },
    'Princess Ring': { goldWeight: 5, carat: 1.0, setting: 0.18 },
    'Diamond Pendant': { goldWeight: 6, carat: 0.7, setting: 0.16 },
    'Nose Pin': { goldWeight: 1.2, carat: 0.12, setting: 0.20 },
    'Wedding Band': { goldWeight: 7, carat: 0.5, setting: 0.16 },
    'Diamond Hoops': { goldWeight: 9, carat: 1.4, setting: 0.16 },
    'Luxury Diamond Watch': { goldWeight: 35, carat: 3.5, setting: 0.14 },
    'Diamond Cufflinks': { goldWeight: 12, carat: 0.9, setting: 0.16 }
};

const artificialPrices = {
    'Kundan Bridal Set': 18500,
    'Fancy Earrings': 3200,
    'Choker Set': 6500,
    'Velvet Bangles': 2400,
    'Golden Kara': 2800,
    'Beaded Mala': 2200,
    'Nath': 1800,
    'Matha Patti': 2600,
    'Hand Panja': 2100,
    'Daily Wear Chain': 1900,
    'Platinum Band': 45000,
    'Black Onyx Ring': 12000
};

function getComputedData(category, name) {
    if (category === 'gold' || category === 'premium') {
        const spec = goldSpecs[name] || { weight: 6, making: 0.13 };
        return {
            weight: formatWeight(spec.weight),
            price: formatPKR(calcGoldPrice(spec.weight, spec.making))
        };
    }

    if (category === 'silver') {
        const spec = silverSpecs[name] || { weight: 8, making: 0.11 };
        return {
            weight: formatWeight(spec.weight),
            price: formatPKR(calcSilverPrice(spec.weight, spec.making))
        };
    }

    if (category === 'diamond') {
        const spec = diamondSpecs[name] || { goldWeight: 4, carat: 0.4, setting: 0.16 };
        return {
            weight: `Weight: ${spec.goldWeight}g + ${spec.carat}ct`,
            price: formatPKR(calcDiamondPrice(spec.goldWeight, spec.carat, spec.setting))
        };
    }

    if (category === 'artificial') {
        return {
            weight: '',
            price: formatPKR(artificialPrices[name] || 2500)
        };
    }

    if (category === 'mens collection') {
        if (name.includes('Silver')) {
            const spec = silverSpecs[name] || { weight: 20, making: 0.10 };
            return {
                weight: formatWeight(spec.weight),
                price: formatPKR(calcSilverPrice(spec.weight, spec.making))
            };
        }

        if (name.includes('Gold') || name.includes('Ring')) {
            const spec = goldSpecs[name] || { weight: 8, making: 0.13 };
            return {
                weight: formatWeight(spec.weight),
                price: formatPKR(calcGoldPrice(spec.weight, spec.making))
            };
        }

        if (name.includes('Diamond')) {
            const spec = diamondSpecs[name] || { goldWeight: 8, carat: 0.8, setting: 0.16 };
            return {
                weight: `Weight: ${spec.goldWeight}g + ${spec.carat}ct`,
                price: formatPKR(calcDiamondPrice(spec.goldWeight, spec.carat, spec.setting))
            };
        }

        return {
            weight: '',
            price: formatPKR(artificialPrices[name] || 15000)
        };
    }

    return {
        weight: '',
        price: formatPKR(10000)
    };
}

const products = sourceProducts.map(([category, name, imageUrl]) => {
    const computed = getComputedData(category, name);
    return [category, name, computed.weight, computed.price, imageUrl];
});

const gridContainer = document.querySelector('.grid-container');
if (gridContainer) {
    gridContainer.innerHTML = products.map((p) => generateProductHTML(...p)).join('');
}
