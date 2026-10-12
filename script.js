const gamesData = [
    {
        id: 1,
        title: "Sekiro: Shadows Die Twice",
        category: "Action",
        isFree: false,
        image: "images/0.jpg",
        shortDesc: "นินจาแขนเดียวดวลดาบสุดโหด เน้นจังหวะปัดป้องเพอร์เฟกต์ในยุคสงครามญี่ปุ่น",
        longDesc: "Sekiro: Shadows Die Twice ผลงานระดับ Masterpiece จาก FromSoftware ที่จะให้คุณรับบทเป็น หมาป่าแขนเดียว นินจาที่ต้องออกเดินทางในยุคเซ็นโกคุเพื่อชิงตัวเจ้านายคืน เกมนี้ไม่มีระบบอัปเลเวลแบบ RPG ทั่วไป แต่เน้นที่ ฝีมือผู้เล่น ในการจับจังหวะการโจมตีของศัตรูเพื่อสวนกลับด้วยท่าสังหารที่รุนแรง พร้อมใช้แขนกลสารพัดประโยชน์ในการสำรวจโลกและสู้กับบอสสุดหิน",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/814380/", type: "steam" },
        ],
        min: { os: "Windows 7 / 8 / 10", cpu: "Intel Core i3-2100", ram: "4 GB", gpu: "GTX 760", storage: "25 GB SSD" },
        rec: { os: "Windows 7 / 8 / 10", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 970", storage: "25 GB SSD" }

    },
    {
        id: 2,
        title: "God of War (2018)",
        category: "Action",
        isFree: false,
        image: "images/2.jpg",
        shortDesc: "เทพเจ้าสงครามรุ่นใหญ่กับลูกชาย ผจญภัยล้างบางตำนานนอร์สด้วยขวานน้ำแข็ง",
        longDesc: "God of War (2018) คือการเริ่มต้นใหม่ของ Kratos หลังจากการล้างแค้นเหล่าเทพโอลิมปัสสิ้นสุดลง เขาได้ย้ายมาใช้ชีวิตเรียบง่ายในดินแดนแห่งตำนานนอร์ส (แถบสแกนดิเนเวีย) และต้องรับบทบาทเป็นพ่อเพื่อดูแล Atreus ลูกชายของเขา ทั้งคู่ต้องออกเดินทางไปยังยอดเขาที่สูงที่สุดเพื่อโปรยเถ้ากระดูกของภรรยาที่เสียชีวิตไป เกมเปลี่ยนรูปแบบจากมุมมองมุมกว้างมาเป็นแบบข้ามไหล่ (Over-the-shoulder) พร้อมระบบการต่อสู้ที่ดุดันและเนื้อเรื่องที่กินใจ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/1593500/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/god-of-war", type: "epic" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-2500k", ram: "8 GB", gpu: "GTX 960 (4 GB)", storage: "70 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5-6600k", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "70 GB SSD" }
    },
    {
        id: 3,
        title: "Elden Ring",
        category: "Action",
        isFree: false,
        image: "images/10.jpg",
        shortDesc: "มหากาพย์ผู้มัวหมองผจญภัยในโลกกว้างสุดอันตราย เพื่อรวบรวมเศษเสี้ยววงแหวนเอลเดนและเถลิงยศเป็นราชา",
        longDesc: "Elden Ring คือเกมแอ็คชัน RPG แบบ Open World ที่มีความยากเป็นเอกลักษณ์ ผลงานชิ้นเอกจากการร่วมมือระหว่าง FromSoftware และ George R.R. Martin (ผู้เขียน Game of Thrones) คุณจะได้รับบทเป็น ผู้มัวหมอง (Tarnished) ที่ต้องออกสำรวจดินแดนมัชฌิมา (The Lands Between) เพื่อปราบเหล่ากึ่งเทพและรวบรวมเศษของ Elden Ring เกมให้อิสระในการสำรวจสูงมาก มีอาวุธ เวทมนตร์ และบอสลับซ่อนอยู่มากมาย พร้อมระบบขี่ม้าต่อสู้ที่ช่วยให้การเดินทางในโลกกว้างลื่นไหลขึ้น",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/1245620/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-8400", ram: "12 GB", gpu: "GTX 1060 (3 GB)", storage: "60 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-8700K", ram: "16 GB", gpu: "GTX 1070 (8 GB)", storage: "60 GB SSD" }
    },
    {
        id: 4,
        title: "Devil May Cry 5",
        category: "Action",
        isFree: false,
        image: "images/12.jpg",
        shortDesc: "สามนักล่าปีศาจผนึกกำลังใช้ท่าคอมโบสุดเท่กวาดล้างกองทัพอสูรในเมืองที่ล่มสลาย",
        longDesc: "Devil May Cry 5 เป็นเกมแนว Hack and Slash ที่เน้นความมันส์และ ความเท่ (Style) ในการต่อสู้ เรื่องราวสานต่อจากภาค 4 เมื่อต้นไม้ยักษ์จากนรกปรากฏขึ้นใจกลางเมือง Red Grave คุณจะได้สลับบทบาทเล่นเป็น 3 ตัวละครที่มีสไตล์ต่างกันอย่างสิ้นเชิง ได้แก่ Nero นินจาแขนกลสารพัดประโยชน์, V ชายลึกลับที่ใช้สัตว์อสูรต่อสู้แทนตัว และ Dante นักล่าปีศาจรุ่นเก๋าที่มาพร้อมคลังแสงอาวุธสุดล้ำ เกมนี้ใช้ RE Engine ทำให้กราฟิกสวยงามสมจริงและลื่นไหลมาก",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/601150/", type: "steam" }
        ],
        min: { os: "Windows 7 / 8.1 / 10", cpu: "Intel Core i5-4460", ram: "8 GB", gpu: "GTX 760", storage: "35 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-3770", ram: "8 GB", gpu: "GTX 1060 (6GB)", storage: "35 GB SSD" }
    },
    {
        id: 5,
        title: "Grand Theft Auto V (GTA V)",
        category: "Action",
        isFree: false,
        image: "images/8.jpg",
        shortDesc: "สามอาชญากรต่างขั้วร่วมมือกันทำภารกิจปล้นสุดระห่ำในเมืองจำลองลอสซานโตสที่เต็มไปด้วยอิสระ",
        longDesc: "GTA V เล่าเรื่องราวของสามตัวละครหลักที่มีนิสัยต่างกันสุดขั้วอย่าง Michael อดีตโจรปล้นธนาคารที่อยากเกษียณ, Franklin เด็กหนุ่มข้างถนนที่อยากยกระดับตัวเอง และ Trevor คนคลั่งสติหลุด เกมให้อิสระเราสลับตัวละครไปมาเพื่อทำภารกิจหรือใช้ชีวิตในเมือง Los Santos (จำลองจาก LA) คุณสามารถทำอะไรก็ได้ตั้งแต่ขับรถเล่น ทำธุรกิจ จนถึงวางแผนปล้นครั้งใหญ่ นอกจากนี้ยังมีโหมด GTA Online ที่ให้เราสร้างตัวละครไปเล่นกับเพื่อนทั่วโลกได้ด้วย",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/271590/?l=thai", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/grand-theft-auto-v", type: "epic" },
            { name: "Official", url: "https://www.rockstargames.com/gta-v", type: "official" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core 2 Quad Q6600", ram: "4 GB", gpu: "NVIDIA 9800 GT (1 GB)", storage: "110 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5-3470", ram: "8 GB", gpu: "GTX 660 (2 GB)", storage: "110 GB SSD" }
    },
    {
        id: 6,
        title: "Red Dead Redemption 2",
        category: "Action",
        isFree: false,
        image: "images/6.jpg",
        shortDesc: "มหากาพย์คาวบอยนอกกฎหมายกับการดิ้นรนเอาชีวิตรอดในยุคที่ความป่าเถื่อนกำลังถูกแทนที่ด้วยกฎหมาย",
        longDesc: "Red Dead Redemption 2 คือเกมแนวแอ็คชันผจญภัยโอเพ่นเวิลด์จากผู้สร้าง GTA V คุณจะได้รับบทเป็น Arthur Morgan สมาชิกกลุ่มโจร Van der Linde ในช่วงปลายยุคคาวบอย ตัวเกมจะพาคุณสำรวจโลกที่กว้างใหญ่และมีรายละเอียดสูงมาก ตั้งแต่ป่าเขาที่หนาวเหน็บไปจนถึงเมืองที่เริ่มมีอุตสาหกรรม จุดเด่นคือเนื้อเรื่องที่เข้มข้นสะเทือนอารมณ์ และระบบเกมที่สมจริงสุดๆ เช่น การล่าสัตว์ การดูแลปืน การมีปฏิสัมพันธ์กับ NPC ที่เปลี่ยนไปตามการกระทำของเรา",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/red-dead-redemption-2", type: "epic" },
            { name: "Official", url: "https://www.rockstargames.com/reddeadredemption2/pc", type: "official" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 770 (2 GB)", storage: "150 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-4770K", ram: "8 GB", gpu: "GTX 1060 (6 GB)", storage: "150 GB SSD" }
    },
    {
        id: 7,
        title: "The Last of Us Part I",
        category: "Action",
        isFree: false,
        image: "images/11.jpg",
        shortDesc: "การเดินทางสุดสะเทือนใจของชายวัยกลางคนกับเด็กสาวผ่านอเมริกาที่ล่มสลายและเต็มไปด้วยเชื้อราสยองขวัญ",
        longDesc: "The Last of Us Part I คือการนำตัวเกมต้นฉบับมาสร้างใหม่ทั้งหมด (Remake) ด้วยเอนจินล่าสุดเพื่อให้ภาพสมจริงระดับยุคปัจจุบัน เรื่องราวเกิดขึ้นหลังจากโลกล่มสลายด้วยเชื้อรากลายพันธุ์ที่เปลี่ยนคนให้กลายเป็นสัตว์ประหลาด Joel ชายผู้บอบช้ำจากอดีตได้รับภารกิจให้พาตัว Ellie เด็กสาวผู้มีภูมิคุ้มกัน เดินทางข้ามประเทศที่เต็มไปด้วยอันตราย ทั้งจากพวกกลายพันธุ์และกลุ่มมนุษย์ที่โหดเหี้ยม เพื่อความหวังสุดท้ายในการสร้างวัคซีน เกมเน้นการลอบเร้น การบริหารทรัพยากร และเนื้อเรื่องที่บีบคั้นหัวใจ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/1888930/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/en-US/p/the-last-of-us-part-1", type: "epic" },
        ],
        min: { os: "Windows 10", cpu: "Intel Core i7-4770K", ram: "16 GB", gpu: "GTX 1050 Ti (4 GB)", storage: "100 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "ntel Core i7-8700", ram: "16 GB", gpu: "RTX 2060 (6 GB)", storage: "100 GB SSD" }
    },
    {
        id: 8,
        title: "Uncharted 4: A Thief's End",
        category: "Action",
        isFree: false,
        image: "images/1.jpg",
        shortDesc: "เนธาน เดรก หวนคืนวงการล่าสมบัติเพื่อช่วยพี่ชาย ออกตามหาขุมทรัพย์โจรสลัดในตำนานที่สาบสูญ",
        longDesc: "Uncharted 4: A Thief's End คือภาคปิดตำนานของนักล่าสมบัติชื่อดัง Nathan Drake ที่พยายามใช้ชีวิตปกติกับภรรยา แต่ต้องกลับเข้าสู่วงการอีกครั้งเมื่อ Sam พี่ชายที่เขาคิดว่าตายไปแล้วปรากฏตัวขึ้นพร้อมคำขอความช่วยเหลือ ทั้งคู่ต้องออกเดินทางไปทั่วโลก ตั้งแต่มาดากัสการ์ไปจนถึงเกาะโจรสลัดลึกลับ Libertalia เพื่อค้นหาสมบัติของกัปตันเฮนรี่ เอเวอรี่ เกมโดดเด่นด้วยฉากแอ็คชันราวกับภาพยนตร์ฮอลลีวูด กราฟิกที่สวยงามระดับท็อป และเนื้อเรื่องที่เน้นความสัมพันธ์ของตัวละครอย่างลึกซึ้ง",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/1888930/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/en-US/p/the-last-of-us-part-1", type: "epic" },
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-4430", ram: "8 GB", gpu: "GTX 960 (4 GB)", storage: "126 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Corei7-4770", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "126 GB SSD" }
    },
    {
        id: 9,
        title: "The Witcher 3: Wild Hunt",
        category: "Action",
        isFree: false,
        image: "images/9.jpg",
        shortDesc: "นักล่าอสูรผู้กลายพันธุ์ออกเดินทางข้ามทวีปที่เต็มไปด้วยสงครามและปีศาจ เพื่อตามหาเด็กสาวในคำทำนาย",
        longDesc: "The Witcher 3: Wild Hunt คุณจะได้รับบทเป็น Geralt of Rivia นักล่ามอนสเตอร์รับจ้าง (Witcher) ผู้มีพลังเหนือมนุษย์ ภารกิจหลักคือการตามหา Ciri ลูกบุญธรรมที่กำลังถูกตามล่าโดยกลุ่มนักรบวิญญาณ Wild Hunt เกมนี้โดดเด่นอย่างมากในเรื่อง การเลือก ซึ่งทุกการตัดสินใจของคุณจะส่งผลกระทบต่อเนื้อเรื่องและโลกในเกมอย่างมหาศาล โลกในเกมกว้างใหญ่มาก เต็มไปด้วยเควสต์ย่อยที่มีเนื้อหาเข้มข้น มอนสเตอร์ที่น่ากลัว และความงดงามของทัศนียภาพสไตล์ยุโรปยุคกลาง",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/292030/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/the-witcher-3-wild-hunt", type: "epic" },  
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-2500K", ram: "4 GB", gpu: "GTX 660", storage: "50 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-3770", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "50 GB SSD" }
    },
    {
        id: 10,
        title: "Spider-Man: Miles Morales",
        category: "Action",
        isFree: false,
        image: "images/3.jpg",
        shortDesc: "สไปเดอร์แมนมือใหม่หัดขับ ฝึกใช้พลังไฟฟ้าและพรางตัวปกป้องย่านแฮร์เล็มจากสงครามแก๊งอาชญากร",
        longDesc: "Spider-Man: Miles Morales สานต่อเรื่องราวจากภาคแรก โดยครั้งนี้เราจะได้เล่นเป็น Miles Morales เด็กหนุ่มที่เพิ่งได้รับพลังแมงมุมมาไม่นาน ในขณะที่ Peter Parker ต้องไปต่างประเทศ ไมล์สจึงต้องรับหน้าที่ดูแลเมืองนิวยอร์กเพียงลำพังในช่วงเทศกาลคริสต์มาส เขาต้องเผชิญกับความขัดแย้งระหว่างบริษัทพลังงานยักษ์ใหญ่กับกลุ่มอาชญากรไฮเทค จุดเด่นคือพลังที่ต่างจากภาคแรกอย่าง Venom Blast (พลังไฟฟ้าซ็อต) และการล่องหน (Camouflage) พร้อมบรรยากาศเมืองหิมะที่สวยงามมาก",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/en-US/p/marvels-spider-man-miles-morales", type: "epic" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i3-4160", ram: "8 GB", gpu: "GTX 950", storage: "75 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5-4670K", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "75 GB SSD" }
    },
        {
        id: 11,
        title: "Black Myth: Wukong",
        category: "Action-Adventure",
        isFree: false,
        image: "images/13.jpg",
        shortDesc: "สวมบท ผู้ถูกเลือก (The Destined One) ออกเดินทางตามรอยตำนานไซอิ๋ว สู้กับเทพและปีศาจด้วยวิชากระบองและการแปลงกาย",
        longDesc: "เกมแอ็กชัน RPG ที่หยิบยกเอาพงศาวดารจีนชื่อดังมาตีความใหม่ในโทนที่จริงจังและมืดหม่น จุดเด่นคือการต่อสู้ที่รวดเร็วและท้าทาย คุณสามารถใช้คาถาอาคม (เช่น คาถาหยุดเวลา, คาถาแยกร่าง) และการ แปลงร่าง เป็นปีศาจที่เคยปราบได้เพื่อใช้สกิลของมัน งานภาพในเกมถูกถ่ายทอดออกมาอย่างวิจิตรบรรจง โดยเฉพาะการลงรายละเอียดของขนตัวละครและสภาพแวดล้อมที่ดูสมจริงระดับภาพยนตร์",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/2358720/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/black-myth-wukong-87a72b", type: "epic" }
        ],
        min: { os: "Windows 10 / 11", cpu: "Intel Core i5-8400", ram: "16 GB", gpu: "GTX 1060 (6GB)", storage: "130 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-14700K", ram: "32 GB", gpu: "RTX 4080 Super", storage: "130 GB SSD" }

    },
    {
        id: 12,
        title: "Horizon Zero Dawn",
        category: "Action-Adventure",
        isFree: false,
        image: "images/14.jpg",
        shortDesc: "สวมบท Aloy นักล่าสาวในโลกอนาคตที่ล่มสลาย ออกตามหาความลับของอดีตท่ามกลางเหล่าจักรกลสัตว์ป่าขนาดยักษ์",
        longDesc: "เรื่องราวเกิดขึ้นในโลกที่มนุษย์กลับไปใช้ชีวิตแบบชนเผ่า แย่งชิงพื้นที่กับหุ่นยนต์ที่วิวัฒนาการเหมือนสัตว์ป่า เราจะได้รับบทเป็น Aloy เด็กสาวกำพร้าที่ถูกขับออกจากเผ่า เธอต้องออกเดินทางเพื่อค้นหาว่า เกิดอะไรขึ้นกับโลกใบเก่า? และ เธอเป็นใคร จุดเด่นคือการใช้ธนูและกับดักเพื่อทำลายชิ้นส่วนหุ่นยนต์ (เช่น ยิงถังเชื้อเพลิงให้ระเบิด หรือยิงเกราะให้หลุด) บนงานภาพแนวธรรมชาติที่สวยงามและกว้างใหญ่มาก",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/1151640/", type: "steam" }
        ],
        min: { os: "Windows 10 / 11", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 780 (3GB)", storage: "100 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-7700K", ram: "16 GB", gpu: "RTX 3060 Ti", storage: "100 GB SSD" }
    },
    {
        id: 13,
        title: "Cyberpunk 2077",
        category: "Action-Adventure",
        isFree: false,
        image: "images/15.jpg",
        shortDesc: "สวมบท V ทหารรับจ้างในเมืองแห่งอนาคต Night City ที่เต็มไปด้วยแสงสีและอาชญากรรม เพื่อตามหาชิปอมตะที่แลกมาด้วยชีวิต",
        longDesc: "เกมแนว Open World Action-Adventure RPG จากผู้สร้าง The Witcher 3 เราจะได้ปรับแต่งตัวละครและสไตล์การเล่นได้อย่างอิสระ ไม่ว่าจะเป็นสายบู๊ระห่ำ สายแฮกเกอร์ หรือลอบเร้น เนื้อเรื่องจะเข้มข้นขึ้นเมื่อคุณต้องใช้ร่างร่วมกับ Keanu Reeves (Johnny Silverhand) จุดเด่นคือบรรยากาศเมืองที่หนาแน่น รายละเอียดสูง และทางเลือกที่ส่งผลต่อฉากจบ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/2131650/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i7-6700", ram: "12 GB", gpu: "GTX 1060 (6GB)", storage: "70 GB SSD" },
        rec: { os: "Windows 10", cpu: "Intel Core i9-14900K", ram: "32 GB", gpu: "RTX 4080 Super", storage: "70 GB" }
    },
    {
        id: 14,
        title: "Control",
        category: "Action-Adventure",
        isFree: false,
        image: "images/16.jpg",
        shortDesc: "สวมบทผู้อำนวยการคนใหม่ขององค์กรลับรัฐบาล ใช้พลังจิตและปืนที่เปลี่ยนรูปร่างได้ ต่อสู้กับสิ่งลี้ลับภายในตึกอาถรรพ์ที่บิดเบี้ยว",
        longDesc: "เราจะได้รับบทเป็น Jesse Faden ที่เดินทางมายังตึก Oldest House เพื่อตามหาน้องชายที่หายไป แต่กลับต้องรับตำแหน่งผู้อำนวยการของ FBC (Federal Bureau of Control) โดยไม่เต็มใจ เธอต้องใช้พลังเหนือธรรมชาติ เช่น การยกสิ่งของขว้างใส่ศัตรู (Launch) หรือการลอยตัว (Levitate) เพื่อปราบ The Hiss พลังงานชั่วร้ายที่ยึดครองตึก จุดเด่นคือระบบฟิสิกส์ที่ทำลายข้าวของในฉากได้กระจุยกระจายและงานศิลป์สไตล์สถาปัตยกรรม Brutalist ที่เท่สุดๆ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/870780/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-4690", ram: "8 GB", gpu: "GTX 1060", storage: "42 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-12700K", ram: "16 GB", gpu: "RTX 3080", storage: "42 GB SSD" }
    },
    {
        id: 15,
        title: "Assassin’s Creed Valhalla",
        category: "Action-Adventure",
        isFree: false,
        image: "images/17.jpg",
        shortDesc: "สวมบท Eivor ผู้นำเผ่าไวกิ้ง ล่องเรือนาร์บุกยึดครองดินแดนอังกฤษ สร้างนิคม และเผชิญหน้ากับความขัดแย้งของเหล่าภาคีลับ",
        longDesc: "เราจะได้ออกเดินทางจากนอร์เวย์ที่หนาวเหน็บมุ่งสู่เกาะอังกฤษในยุคมืด จุดเด่นคือระบบ Raids (การเข้าปล้นสะดมหมู่บ้านและอาราม) ระบบการสร้างบ้านเรือนเพื่ออัปเกรดตัวละคร และการต่อสู้ที่ดุดันสไตล์ไวกิ้ง (ถือขวานคู่หรือโล่คู่ก็ได้) พร้อมเนื้อเรื่องที่เชื่อมโยงกับตำนานเทพนอร์สอย่าง Odin และ Valhalla บนงานภาพที่โชว์ทุ่งหญ้าและแสงแดดของอังกฤษได้สวยงามระดับหัวแถว",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/2208920/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-4460", ram: "8 GB", gpu: "GTX 960 (4GB)", storage: "160 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-9700K", ram: "16 GB", gpu: "RTX 3080", storage: "160 GB SSD" }
    },
    {
        id: 16,
        title: "Beyond Good & Evil",
        category: "Action-Adventure",
        isFree: false,
        image: "images/18.jpg",
        shortDesc: "สวมบท Jade นักข่าวสาวสายลุยและหมูป่าจอมซ่า ออกสืบหาความจริงเบื้องหลังการรุกรานของมนุษย์ต่างดาวผ่านการถ่ายภาพและการต่อสู้",
        longDesc: "เรื่องราวเกิดขึ้นบนดาว Hillys ที่ถูกรุกรานโดยพวก DomZ เราจะได้รับบทเป็น Jade ช่างภาพอิสระที่ต้องร่วมมือกับลุง Pey'j (มนุษย์หมู) เพื่อเปิดโปงทฤษฎีสมคบคิดระดับดวงดาว จุดเด่นคือระบบเกมที่หลากหลาย ทั้งการไขปริศนา, การต่อสู้ด้วยไม้พลอง, การลอบเร้น, การขับเรือโฮเวอร์คราฟต์แข่ง และที่สำคัญที่สุดคือการ ถ่ายรูปสัตว์ประหลาดและหลักฐาน เพื่อหาเงินและดำเนินเนื้อเรื่อง เป็นเกมที่มีเสน่ห์และดนตรีประกอบที่เพราะมากครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2556990/Beyond_Good__Evil__20th_Anniversary_Edition/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i3-2120", ram: "8 GB", gpu: "GTX 960", storage: "20 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5-4690K", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "20 GB SSD" }
    },
    {
        id: 17,
        title: "Middle-Earth: Shadow of Mordor",
        category: "Action-Adventure",
        isFree: false,
        image: "images/19.jpg",
        shortDesc: "รับบทนักรบผู้ฟื้นจากความตาย ผสานร่างกับวิญญาณเอลฟ์ ออกล้างแค้นกองทัพซอรอนด้วยพลังเหนือมนุษย์ในดินแดนมอร์ดอร์",
        longDesc: "เรื่องราวเกิดขึ้นระหว่างเหตุการณ์ใน The Hobbit และ The Lord of the Rings เราจะได้รับบทเป็น Talion นายกองผู้พิทักษ์ประตูทมิฬที่ถูกฆ่าล้างครอบครัว แต่เขาได้รับการคืนชีพโดยวิญญาณเอลฟ์ลึกลับ (Celebrimbor) ทั้งสองต้องร่วมร่างกันเพื่อทำลายกองทัพ Uruk จากภายใน จุดเด่นคือระบบ Nemesis System ที่ทำให้ศัตรูระดับหัวหน้ามีจดจำการต่อสู้กับเราได้ ถ้ามันฆ่าเราได้มันจะเลื่อนยศและเก่งขึ้น หรือถ้ามันหนีไปได้มันจะกลับมาล้างแค้นพร้อมแผลเป็นจากการสู้ครั้งก่อน",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/241930/Middleearth_Shadow_of_Mordor/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-750", ram: "3 GB", gpu: "GTX 460", storage: "55 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-3770", ram: "8 GB", gpu: "GTX 1650", storage: "55 GB SSD" }
    },
    {
        id: 18,
        title: "Tiny Tina’s Wonderlands",
        category: "Action-Adventure",
        isFree: false,
        image: "images/20.jpg",
        shortDesc: "ตะลุยโลกบอร์ดเกมแฟนตาซีสุดเพี้ยน ยิงเวทมนตร์ ปากระสุน และสร้างตัวละครข้ามสายอาชีพเพื่อปราบจอมมาร Dragon Lord",
        longDesc: "เกมแนวยิงมุมมองบุคคลที่หนึ่ง (FPS) ผสม Loot-Shooter โดยเล่าเรื่องผ่านการเล่นเกมกระดาน Bunkers & Badasses จุดเด่นคือระบบสร้างตัวละครที่คุณสามารถเลือกผสม 2 อาชีพเข้าด้วยกันได้ (Multiclass) เปลี่ยนจากระเบิดมือมาเป็นการใช้ เวทมนตร์ ที่มีเอฟเฟกต์อลังการ และการใช้อาวุธประชิดตัวที่มีความหมายมากขึ้น พร้อมบรรยากาศฉากที่เป็นสไตล์ Dungeons & Dragons แต่กวนประสาทตามสไตล์ Borderlands",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1286680/Tiny_Tinas_Wonderlands/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/tiny-tinas-wonderlands", type: "epic" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-3570", ram: "6 GB", gpu: "GTX 960 (4GB)", storage: "75 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-4770", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "75 GB SSD" }
    },
    {
        id: 19,
        title: "Dishonored Series",
        category: "Action-Adventure",
        isFree: false,
        image: "images/21.jpg",
        shortDesc: "สวมบทมือสังหารผู้ถูกใส่ร้าย ใช้พลังวิเศษจากเทพเจ้าลึกลับและการลอบเร้น เพื่อชำระแค้นและกู้คืนอำนาจในเมืองสไตล์ Steampunk",
        longDesc: "คุณจะได้สวมบทเป็น Corvo (และ Emily ในภาค 2) องครักษ์ที่ถูกใส่ร้ายว่าสังหารจักรพรรดินี คุณได้รับพลังจาก Outsider เช่น การวาร์ป (Blink), การหยุดเวลา, หรือการสิงร่างสัตว์ จุดเด่นคือระบบ Play Your Way ที่โลกในเกมจะเปลี่ยนไปตามวิธีที่คุณเล่น (ถ้าฆ่าเยอะ เมืองจะเน่าเฟะและมีหนูระบาดมากขึ้น) ทุกภารกิจมีทางไปมากกว่า 5-10 ทางเสมอ ทั้งการลอบเร้นแบบเงียบๆ หรือบู๊แหลกก็ได้ พร้อมเนื้อเรื่องที่เข้มข้นและงานภาพสไตล์ภาพวาดสุดงดงาม",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/agecheck/app/403640/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-2400", ram: "8 GB", gpu: "GTX 660 (2GB)", storage: "50 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-4770", ram: "16 GB", gpu: "GTX 1060 (6 GB)", storage: "50 GB SSD" }
    },
    {
        id: 20,
        title: "Terraria",
        category: "Action-Adventure",
        isFree: false,
        image: "images/22.jpg",
        shortDesc: "ขุด สร้าง สู้ และสำรวจในโลก 2D ไร้ขอบเขต ปราบตั้งแต่ลูกตาปีศาจไปจนถึงเทพเจ้าจากดวงจันทร์",
        longDesc: "เกมแนว Sandbox Action-Adventure ที่ให้คุณเริ่มต้นด้วยจอบและดาบสั้นๆ เพื่อขุดหาแร่ สร้างบ้านให้ NPC มาอยู่ และเผชิญหน้ากับบอสสุดโหด จุดเด่นคือระบบ Progression ที่ชัดเจนมาก เมื่อคุณปราบ Wall of Flesh เกมจะเปลี่ยนเข้าสู่โหมด Hardmode ที่มีศัตรูใหม่ แร่ใหม่ และอาวุธที่เวอร์วังกว่าเดิม (เช่น ดาบที่ยิงดาวตกได้หรือปืนฉลาม) เป็นเกมที่เล่นได้นานหลายร้อยชั่วโมงโดยไม่เบื่อครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/105600/Terraria/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i3-4160", ram: "4 GB", gpu: "GTX 950", storage: "1 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5-4670K", ram: "8 GB", gpu: "GTX 1060 (6 GB)", storage: "1 GB SSD" }
    },
    {
        id: 21,
        title: "Rocket League",
        category: "Sports",
        isFree: false,
        image: "images/23.jpg",
        shortDesc: "ฟุตบอลผสมผสานกับรถแข่งพลังเทอร์โบ ขับทะยานไปยิงประตูในสังเวียนสุดล้ำ",
        longDesc: "ฉีกกฎเกมฟุตบอลแบบเดิมๆ ด้วยการขับรถแข่งพลังขับเคลื่อนสูงผาดโผนไปในสนามเพื่อทำประตูฝ่ายตรงข้าม ตัวเกมเน้นฟิสิกส์ที่สมจริง การกระโดด การบิน (Aerial) และการร่วมมือกันแบบทีม จุดเด่นคือการควบคุมที่ต้องใช้ทักษะสูงแต่สนุกมากเมื่อทำประตูได้ และมีโหมดการเล่นที่หลากหลายตั้งแต่อันดับธรรมดาไปจนถึงการแข่งขันระดับโลกครับ",
        stores: [
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/rocket-league", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "2.5 GHz Dual core", ram: "4 GB", gpu: "NVIDIA GeForce GTX 760", storage: "20 GB" },
        rec: { os: "Windows 10 64-bit", cpu: "3.0+ GHz Quad core", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060", storage: "20 GB" }
    },
    {
        id: 22,
        title: "EA SPORTS FC 26",
        category: "Sports",
        isFree: false,
        image: "images/24.jpg",
        shortDesc: "สัมผัสประสบการณ์ฟุตบอลที่สมจริงที่สุดในโลก พร้อมนักเตะ สโมสร และลีกลิขสิทธิ์แท้ครบครัน",
        longDesc: "ภาคต่อของเกมฟุตบอลระดับโลกที่ยกระดับความสมจริงด้วยเทคโนโลยี HyperMotion V และระบบ PlayStyles ที่ปรับปรุงใหม่ ตัวเกมมาพร้อมกับโหมดขวัญใจมหาชนอย่าง Football Ultimate Team, Career Mode ที่มีสถานการณ์จำลองแบบ Manager Live Challenges และโหมด Clubs ที่เพิ่มความลึกในการปรับแต่งตัวละคร จุดเด่นคือการควบคุมที่ลื่นไหลและการเคลื่อนไหวของนักเตะที่ถอดแบบมาจากสนามจริงมากกว่า 20,000 คนครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/3405690/EA_SPORTS_FC_26/", type: "steam" }
        ],
        min: { os: "Windows 10 - 64-Bit", cpu: "Intel Core i5-6600K / AMD Ryzen 5 1600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570", storage: "100 GB SSD" },
        rec: { os: "Windows 10 / 11 - 64-Bit", cpu: "Intel Core i7-6700 / AMD Ryzen 7 2700X", ram: "12 GB", gpu: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 5600 XT", storage: "100 GB SSD" }
    },
    {
        id: 23,
        title: "Football Manager 26",
        category: "Sports",
        isFree: false,
        image: "images/25.jpg",
        shortDesc: "ก้าวเข้าสู่บทบาทผู้จัดการทีมฟุตบอลอาชีพ วางแผนกลยุทธ์ และบริหารทีมมุ่งสู่ความสำเร็จ",
        longDesc: "สุดยอดเกมจำลองการจัดการฟุตบอลที่ลงลึกทุกรายละเอียด ตั้งแต่การวางแท็กติกการเล่น การสรรหานักเตะดาวรุ่ง (Wonderkids) ไปจนถึงการบริหารความสัมพันธ์ภายในทีม ภาคนี้มาพร้อมกับการยกระดับเอนจินกราฟิกใหม่และระบบการวิเคราะห์ข้อมูลที่แม่นยำยิ่งขึ้น ให้คุณได้สัมผัสความกดดันในวันแข่งและการตัดสินใจที่ชี้ชะตาอนาคตของสโมสรอย่างแท้จริงครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/3405700/Football_Manager_26/", type: "steam" }
        ],
        min: { os: "Windows 10 / 11 - 64-bit", cpu: "Intel Core i3-530 / AMD Phenom II X4 965", ram: "4 GB", gpu: "NVIDIA GeForce GTS 450 / AMD Radeon HD 5770", storage: "20 GB" },
        rec: { os: "Windows 10 / 11 - 64-bit", cpu: "Intel Core i5-9600 / AMD Ryzen 5 3600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "20 GB" }
    },
    {
        id: 24,
        title: "NBA 2K26",
        category: "Sports",
        isFree: false,
        image: "images/26.jpg",
        shortDesc: "สัมผัสประสบการณ์บาสเกตบอล NBA ที่สมจริงที่สุด พร้อมโหมด MyCAREER และ MyTEAM ระดับตำนาน",
        longDesc: "ก้าวเข้าสู่สนามบาสเกตบอลที่ยิ่งใหญ่ที่สุดในโลกด้วยกราฟิกและระบบฟิสิกส์ที่พัฒนาขึ้นไปอีกขั้น ภาคนี้เน้นการควบคุมลูกบอลที่ละเอียดขึ้นและการป้องกันที่สมจริง มาพร้อมกับโหมดเนื้อเรื่อง MyCAREER ที่เข้มข้น และการสะสมการ์ดนักเตะใน MyTEAM เพื่อสร้างทีมในฝันของคุณ จุดเด่นคือบรรยากาศในสนามและการพากย์ที่ทำให้รู้สึกเหมือนกำลังชมการแข่งขันถ่ายทอดสดจริงๆ ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/3405710/NBA_2K26/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/nba-2k26", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i3-9100 / AMD Ryzen 3 1200", ram: "8 GB", gpu: "NVIDIA GeForce GTX 960 / AMD Radeon RX 570", storage: "150 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-10600 / AMD Ryzen 5 3600", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700", storage: "150 GB SSD" }
    },
    {
        id: 25,
        title: "F1® 25",
        category: "Sports",
        isFree: false,
        image: "images/27.jpg",
        shortDesc: "เกมแข่งรถสูตรหนึ่งอย่างเป็นทางการ สัมผัสความเร็วเหนือระดับและการบริหารทีมเพื่อเป็นแชมป์โลก",
        longDesc: "เข้าสู่โลกแห่งความเร็วของการแข่งขัน Formula 1 ฤดูกาลล่าสุด พบกับรถและนักแข่งที่อัปเดตใหม่ครบทุกทีม ภาคนี้ยกระดับระบบการขับขี่ให้สมจริงยิ่งขึ้นด้วย Precision Drive และการบริหารจัดการยางที่ละเอียดกว่าเดิม มาพร้อมโหมด Career ที่คุณสามารถสร้างประวัติศาสตร์ให้กับตัวเอง หรือจะแข่งแบบออนไลน์เพื่อวัดฝีมือกับคนทั่วโลกในสังเวียนที่ความไวเป็นเรื่องชี้ชะตาครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2861610/F1_25/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/f1-25", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i3-2130 / AMD FX 4300", ram: "8 GB", gpu: "NVIDIA GTX 1050 Ti / AMD RX 470", storage: "100 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-9600K / AMD Ryzen 5 2600X", ram: "16 GB", gpu: "NVIDIA RTX 2070 / AMD RX 6700 XT", storage: "100 GB SSD" }
    },
    {
        id: 26,
        title: "Golf With Your Friends",
        category: "Sports",
        isFree: false,
        image: "images/28.jpg",
        shortDesc: "ออกรอบมินิกอล์ฟสุดฮากับเพื่อนๆ ในสนามสุดแปลกแหวกแนวที่รองรับผู้เล่นได้สูงสุดถึง 12 คน",
        longDesc: "เกมกอล์ฟแนวปาร์ตี้ที่เน้นความสนุกและการแกล้งกัน สนามกอล์ฟแต่ละแห่งจะมีธีมที่แตกต่างกันไป ตั้งแต่ป่าลึกไปจนถึงสถานีอวกาศ คุณสามารถใช้ไอเทมแกล้งเพื่อน เช่น วางระเบิด ลบร่องรอย หรือเปลี่ยนลูกกอล์ฟเพื่อนให้เป็นรูปทรงอื่น จุดเด่นคือการเล่นที่เข้าใจง่ายแต่ท้าทายด้วยกลไกของแต่ละด่าน และสามารถสร้างสนามของตัวเองขึ้นมาเพื่อเล่นกับเพื่อนได้ด้วยครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/431240/Golf_With_Your_Friends/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/golf-with-your-friends-890a8a", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i3-2100 / AMD FX-6300", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5870", storage: "4 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-6700K / AMD Ryzen 5 1500X", ram: "8 GB", gpu: "NVIDIA GeForce GTX 670 / AMD Radeon R9 280", storage: "4 GB" }
    },
    {
        id: 27,
        title: "Golf It!",
        category: "Sports",
        isFree: false,
        image: "images/29.jpg",
        shortDesc: "มินิกอล์ฟสุดสร้างสรรค์ที่เน้นประสบการณ์การตีที่สมจริงและระบบสร้างด่านที่ไร้ขีดจำกัด",
        longDesc: "เกมกอล์ฟแนวปาร์ตี้ที่โดดเด่นด้วยระบบการตีลูกตามแรงเหวี่ยงของเมาส์ ทำให้การควบคุมน้ำหนักเป็นเรื่องสำคัญมาก มาพร้อมกับสนามที่มีธีมสวยงามหลากหลาย และจุดเด่นที่สุดคือ Editor Mode ที่ให้ผู้เล่นสร้างสนามกอล์ฟสุดพิสดารของตัวเองและแชร์ให้เพื่อนๆ ทั่วโลกได้เล่น เป็นเกมที่เน้นความเฮฮาและการประชันฝีมือในหมู่เพื่อนฝูงครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/571740/Golf_It/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/golf-it-69450c", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "2.0 GHz Dual Core", ram: "4 GB", gpu: "Intel HD 4600 / NVIDIA GeForce GTX 460", storage: "12 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "3.0 GHz Quad Core", ram: "8 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290X", storage: "12 GB" }
    },
    {
        id: 28,
        title: "PGA TOUR 2K25",
        category: "Sports",
        isFree: false,
        image: "images/30.jpg",
        shortDesc: "สัมผัสประสบการณ์กอล์ฟระดับมือโปรในสนาม PGA TOUR ของจริง พร้อมการปรับแต่งตัวละคร MyPLAYER ที่ลุ่มลึก",
        longDesc: "สุดยอดเกมจำลองการเล่นกอล์ฟที่เน้นความสมจริงและลิขสิทธิ์แท้จาก PGA TOUR คุณจะได้ออกรอบในสนามชื่อดังระดับโลกและปะทะฝีมือกับเหล่านักกอล์ฟมืออาชีพ ภาคนี้มาพร้อมกับระบบการควบคุมที่แม่นยำยิ่งขึ้น โหมด MyCAREER ที่น่าตื่นเต้น และระบบการออกแบบสนาม (Course Designer) ที่ให้คุณสร้างสรรค์สนามกอล์ฟในฝันเพื่อแบ่งปันกับผู้เล่นคนอื่นๆ ทั่วโลกครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2789810/PGA_TOUR_2K25/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/pga-tour-2k25", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4690 / AMD FX-8370", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480", storage: "30 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-6700 / AMD Ryzen 7 1700", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700", storage: "30 GB SSD" }
    },
    {
        id: 29,
        title: "WWE 2K25",
        category: "Sports",
        isFree: false,
        image: "images/31.jpg",
        shortDesc: "สัมผัสความมันส์บนสังเวียนมวยปล้ำระดับโลกด้วยกราฟิกสุดสมจริงและรายชื่อนักมวยปล้ำในตำนานแบบจัดเต็ม",
        longDesc: "ภาคต่อของเกมมวยปล้ำที่ยิ่งใหญ่ที่สุด กลับมาพร้อมกับการยกเครื่องระบบเกมเพลย์ให้ลื่นไหลยิ่งขึ้น พบกับโหมด Showcase ที่จะพาคุณไปสัมผัสช่วงเวลาสำคัญในประวัติศาสตร์ WWE รวมถึงโหมด MyRISE ที่ให้คุณสร้างเส้นทางอาชีพของตัวเอง และโหมด MyFACTION สำหรับการสร้างทีมสุดแกร่ง จุดเด่นคือการนำเสนอที่เหมือนกับการรับชมรายการสดทางโทรทัศน์ พร้อมระบบการปรับแต่งตัวละครที่ละเอียดที่สุดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2789830/WWE_2K25/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/wwe-2k25", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-3550 / AMD FX 8150", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480", storage: "90 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-4790 / AMD Ryzen 5 3600", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT", storage: "90 GB SSD" }
    },
    {
        id: 30,
        title: "Maximum Football (2025)",
        category: "Sports",
        isFree: false,
        image: "images/32.jpg",
        shortDesc: "เกมอเมริกันฟุตบอลที่เน้นระบบฟิสิกส์และการปรับแต่งทีมอย่างอิสระ มอบประสบการณ์สมจริงในสไตล์คุณ",
        longDesc: "สัมผัสประสบการณ์อเมริกันฟุตบอลยุคใหม่ที่สร้างขึ้นบน Unreal Engine 5 ตัวเกมเน้นความสมจริงของระบบฟิสิกส์และการปะทะที่แม่นยำ จุดเด่นที่สุดคืออิสระในการปรับแต่ง (Customization) ที่ให้คุณสร้างทีม โลโก้ และตัวละครได้เองตั้งแต่ระดับรากหญ้าไปจนถึงระดับอาชีพ รวมถึงระบบการบริหารทีมที่ลุ่มลึกทั้งโหมด Dynasty และโหมดออนไลน์ที่พร้อมให้คุณวัดฝีมือกับผู้เล่นทั่วโลกครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1691280/Maximum_Football/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/maximum-football-704983", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K / AMD Ryzen 5 1600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "25 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-8700K / AMD Ryzen 7 3700X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT", storage: "25 GB SSD" }
    },
    {
        id: 31,
        title: "Forza Horizon 5",
        category: "Racing",
        isFree: false,
        image: "images/33.jpg",
        shortDesc: "ออกผจญภัยในโลกกว้างสุดตระการตาของประเทศเม็กซิโกด้วยรถยนต์ที่สวยงามและหลากหลายที่สุดในโลก",
        longDesc: "สัมผัสประสบการณ์การขับขี่แบบ Open World ที่ยิ่งใหญ่ที่สุด นำเสนอภูมิประเทศที่หลากหลายตั้งแต่ทะเลทรายอันร้อนระอุ ภูเขาไฟที่ยังมีพลัง ไปจนถึงป่าดงดิบและเมืองประวัติศาสตร์ ภาคนี้มาพร้อมกับระบบสภาพอากาศที่เปลี่ยนแปลงตามฤดูกาลและแคมเปญ Horizon Adventure ที่ให้คุณสร้างตำนานนักแข่งในแบบของตัวเอง พร้อมกิจกรรมออนไลน์มากมายที่เล่นร่วมกับเพื่อนได้ไร้ขีดจำกัดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/", type: "steam" }
        ],
        min: { os: "Windows 10 (19H1)", cpu: "Intel Core i5-4460 / AMD Ryzen 3 1200", ram: "8 GB", gpu: "NVIDIA GTX 970 / AMD RX 470", storage: "110 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-10700K / AMD Ryzen 7 3800XT", ram: "16 GB", gpu: "NVIDIA RTX 3060 Ti / AMD RX 6700 XT", storage: "110 GB SSD" }
    },
    {
        id: 32,
        title: "Assetto Corsa Competizione",
        category: "Racing",
        isFree: false,
        image: "images/34.jpg",
        shortDesc: "สุดยอดเกมจำลองการแข่งรถ GT3 ที่สมจริงที่สุด ยกระดับมาตรฐานความสมจริงด้วยลิขสิทธิ์แท้จาก Blancpain GT Series",
        longDesc: "เกมแข่งรถสาย Sim-Racing ที่เน้นความสมจริงขั้นสูงสุด พัฒนาด้วย Unreal Engine 4 เพื่อให้ได้บรรยากาศในสนามแข่งและสภาพอากาศที่แม่นยำ ตัวเกมถอดแบบรถแข่ง GT3 และสนามชื่อดังระดับโลกมาอย่างละเอียดทุกพิกัดด้วยเทคโนโลยี Laser-Scan จุดเด่นคือระบบฟิสิกส์ของยางและการไหลเวียนอากาศที่ซับซ้อน มอบประสบการณ์การขับขี่ที่ท้าทายและดื่มด่ำเหมือนนั่งอยู่ในห้องคนขับจริงๆ ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/805550/Assetto_Corsa_Competizione/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/assetto-corsa-competizione", type: "epic" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4460 / AMD FX-8120", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 7770", storage: "50 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-8600K / AMD Ryzen 5 2600X", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 580", storage: "50 GB SSD" }
    },
    {
        id: 33,
        title: "DiRT Rally 2.0",
        category: "Racing",
        isFree: false,
        image: "images/35.jpg",
        shortDesc: "ท้าทายขีดจำกัดการขับขี่บนเส้นทางออฟโรดที่อันตรายที่สุดจากทั่วทุกมุมโลกในสุดยอดเกมแรลลี่สมจริง",
        longDesc: "นำเสนอประสบการณ์การแข่งรถแรลลี่ที่ดุดันและสมจริงที่สุด คุณจะได้ควบรถแข่งไอคอนิกจากทุกยุคสมัยผ่านสนามแข่งในนิวซีแลนด์ อาร์เจนตินา สเปน โปแลนด์ ออสเตรเลีย และสหรัฐอเมริกา ระบบฟิสิกส์การควบคุมรถที่ได้รับการปรับปรุงใหม่และระบบพื้นผิวสนามที่เปลี่ยนแปลงได้ (Track Degradation) จะทำให้ทุกการเข้าโค้งเป็นเรื่องชี้ชะตา นอกจากนี้ยังมีโหมด FIA World Rallycross Championship ให้ได้ประชันความเร็วกันอย่างดุเดือดด้วยครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/603230/DiRT_Rally_20/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i3-2130 / AMD FX-4300", ram: "8 GB", gpu: "NVIDIA GTX 460 / AMD HD 7750", storage: "100 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-8600K / AMD Ryzen 5 2600X", ram: "8 GB", gpu: "NVIDIA GTX 1070 / AMD RX 580", storage: "100 GB SSD" }
    },
    {
        id: 34,
        title: "GRID Legends",
        category: "Racing",
        isFree: false,
        image: "images/36.jpg",
        shortDesc: "สัมผัสความตื่นเต้นของการแข่งขันรถยนต์ความเร็วสูงที่ผสมผสานดราม่าจากเนื้อเรื่องเข้มข้นและการขับขี่สุดระทึก",
        longDesc: "เกมแข่งรถสไตล์แอ็คชั่นที่มาพร้อมกับโหมดเนื้อเรื่อง 'Driven to Glory' ซึ่งใช้เทคนิคการถ่ายทำแบบเสมือนจริง พบกับการแข่งขันที่หลากหลายตั้งแต่รถบรรทุกขนาดใหญ่ไปจนถึงรถล้ำสมัย ระบบ Driven-by-Design ช่วยให้คุณสร้างสนามแข่งในฝันและแชร์กับเพื่อนได้ และที่สำคัญคือระบบมัลติเพลเยอร์แบบ Cross-platform ที่ทำให้คุณเข้าถึงการแข่งขันได้ทันทีโดยไม่ต้องรอโหลดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1307710/GRID_Legends/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/grid-legends", type: "epic" }
        ],
        min: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i3-2130 / AMD FX-4300", ram: "8 GB", gpu: "NVIDIA GTX 950 / AMD Radeon RX 460", storage: "50 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-8600K / AMD Ryzen 5 2600X", ram: "16 GB", gpu: "NVIDIA GTX 1080 / AMD Radeon RX 590", storage: "50 GB SSD" }
    },
    {
        id: 35,
        title: "Wreckfest",
        category: "Racing",
        isFree: false,
        image: "images/37.jpg",
        shortDesc: "ปลดปล่อยสัญชาตญาณนักทำลายในสนามแข่งรถสุดเถื่อนที่เน้นระบบฟิสิกส์การพังทลายที่สมจริงที่สุด",
        longDesc: "ผลงานจากผู้สร้าง FlatOut ที่จะพาคุณไปสัมผัสการแข่งรถสไตล์ Derby ที่ไร้กฎเกณฑ์ จุดเด่นอยู่ที่เอนจินการจำลองความเสียหายของตัวรถที่ละเอียดและสมจริง ทุกการชนจะส่งผลต่อรูปทรงและสมรรถนะของรถอย่างชัดเจน มีรถให้เลือกหลากหลายตั้งแต่รถเก่าจากยุค 70 ไปจนถึงรถตัดหญ้าและรถบัส พร้อมโหมดปรับแต่งรถเพื่อเพิ่มความทนทานหรือความเร็ว เพื่อเป้าหมายเดียวคือการเป็นคันสุดท้ายที่เหลือรอดในสนามครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/228380/Wreckfest/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/wreckfest", type: "epic" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i3 2.8 GHz / AMD Phenom II 3.2 GHz", ram: "8 GB", gpu: "NVIDIA GeForce GTX 560 / AMD Radeon HD 7770", storage: "32 GB" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5 3.5 GHz / AMD FX 8350", ram: "16 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 380", storage: "32 GB" }
    },
    {
        id: 36,
        title: "Hot Wheels Unleashed 2: Turbocharged",
        category: "Racing",
        isFree: false,
        image: "images/38.jpg",
        shortDesc: "ซิ่งไปกับรถของเล่นสุดเท่บนรางสีส้มในตำนาน พร้อมทักษะใหม่และการกระโดดสุดเร้าใจ",
        longDesc: "กลับมาอีกครั้งกับความมันส์ในโลกของ Hot Wheels ที่เพิ่มระบบใหม่ๆ อย่างการกระโดด (Jump) และการพุ่งชนด้านข้าง (Lateral Dash) ทำให้การแข่งบนรางมีความหลากหลายและต้องใช้ชั้นเชิงมากขึ้น พบกับรถมากกว่า 130 คัน ซึ่งรวมถึงรถมอเตอร์ไซค์และรถ ATV เป็นครั้งแรก ตัวเกมนำเสนอสภาพแวดล้อมใหม่ 5 แห่งที่สวยงาม และระบบ Skill Tree สำหรับอัปเกรดรถแต่ละคันให้เหมาะกับสไตล์การขับขี่ของคุณครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2051120/Hot_Wheels_Unleashed_2__Turbocharged/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/hot-wheels-unleashed-2-turbocharged", type: "epic" }
        ],
        min: { os: "Windows 10 64-Bit", cpu: "Intel Core i5-4590 / AMD FX-4350", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 460", storage: "30 GB" },
        rec: { os: "Windows 10 / 11 64-Bit", cpu: "Intel Core i9-9900K / AMD Ryzen 7 2700X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2070 Super / AMD Radeon RX 6800 XT", storage: "30 GB SSD" }
    },
    {
        id: 37,
        title: "Trackmania Turbo",
        category: "Racing",
        isFree: false,
        image: "images/39.jpg",
        shortDesc: "สัมผัสความเร็วเหนือจินตนาการในสนามแข่งสุดผาดโผนที่มีให้เล่นมากกว่า 200 สนาม พร้อมระบบสร้างด่านแบบสุ่ม",
        longDesc: "เกมแข่งรถสไตล์อาร์เคดที่เน้นความเร็วและความแม่นยำในการทำเวลา ตัวเกมมาพร้อมกับสนามแข่งที่ออกแบบมาอย่างบ้าคลั่ง ทั้งลูปตีลังกาและการกระโดดสูงเสียดฟ้าใน 4 สภาพแวดล้อมที่แตกต่างกัน จุดเด่นคือโหมด Double Driver ที่ให้ผู้เล่นสองคนควบคุมรถคันเดียวกัน และระบบ Trackbuilder ที่สามารถสร้างสนามใหม่ๆ ขึ้นมาได้อย่างไม่จำกัดเพียงแค่กดปุ่มเดียวครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/375900/Trackmania_Turbo/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Dual Core from Intel or AMD at 2 GHz", ram: "2 GB", gpu: "Video card must be 512 MB or more and should be a DirectX 10 - compliant", storage: "5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Core i5 2.4 GHz / AMD Phenom II X4 940", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5850", storage: "5 GB" }
    },
    {
        id: 38,
        title: "Burnout Paradise Remastered",
        category: "Racing",
        isFree: false,
        image: "images/40.jpg",
        shortDesc: "กลับมาอีกครั้งกับตำนานการแข่งรถสายทำลายล้างใน Paradise City ที่ถูกปรับโฉมใหม่ให้คมชัดระดับ 4K",
        longDesc: "สัมผัสสุดยอดเกมแข่งรถสไตล์อาร์เคดแบบ Open World ที่ให้คุณซิ่งไปได้ทุกที่ ตั้งแต่ถนนในตัวเมืองไปจนถึงเส้นทางบนภูเขาที่อันตราย ภาค Remastered นี้รวม DLC หลักทั้งหมดไว้ครบถ้วน รวมถึง Big Surf Island และรถมอเตอร์ไซค์ จุดเด่นคือระบบฟิสิกส์การชนที่สะใจและโหมดมัลติเพลเยอร์ที่เชื่อมต่อกับเพื่อนได้อย่างไร้รอยต่อ เพื่อประชันความเร็วและสร้างความพินาศบนท้องถนนครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1238080/Burnout_Paradise_Remastered/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel i3 2120 / AMD Phenom II 450", ram: "4 GB", gpu: "NVIDIA GT 450 / AMD Radeon HD 5750", storage: "8 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel i5 3570K / AMD FX-6350", ram: "8 GB", gpu: "NVIDIA GTX 750 Ti / AMD Radeon R7 265", storage: "8 GB" }
    },
    {
        id: 39,
        title: "EA SPORTS WRC",
        category: "Racing",
        isFree: false,
        image: "images/41.jpg",
        shortDesc: "สร้างรถแรลลี่ในฝันของคุณและสัมผัสประสบการณ์การแข่งรถออฟโรดที่ยิ่งใหญ่ที่สุดจากทีมสร้าง DiRT Rally",
        longDesc: "เกมแรลลี่อย่างเป็นทางการของ FIA World Rally Championship พัฒนาโดย Codemasters ด้วยขุมพลัง Unreal Engine ทำให้สามารถสร้างด่านแรลลี่ที่ยาวและมีรายละเอียดสูงกว่าเดิม พบกับระบบ Builder ที่ให้คุณออกแบบและสร้างรถแข่งของตัวเองได้ตั้งแต่เริ่ม รวมถึงรถแรลลี่ในประวัติศาสตร์และปัจจุบันมากกว่า 70 คัน พร้อมระบบฟิสิกส์การควบคุมที่สมจริงและปรับแต่งได้ตามระดับฝีมือครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1849250/EA_SPORTS_WRC/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/ea-sports-wrc", type: "epic" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-8400 / AMD Ryzen 5 2600X", ram: "8 GB", gpu: "NVIDIA GTX 1060 / AMD Radeon RX 590", storage: "95 GB SSD" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5-10600K / AMD Ryzen 7 3700X", ram: "16 GB", gpu: "NVIDIA RTX 2070 / AMD Radeon RX 5700 XT", storage: "95 GB SSD" }
    },
    {
        id: 40,
        title: "Need for Speed Heat",
        category: "Racing",
        isFree: false,
        image: "images/42.jpg",
        shortDesc: "ซิ่งระห่ำไปกับชีวิตสองด้านใน Palm City กลางวันแข่งเพื่อชื่อเสียง กลางคืนซิ่งหนีตำรวจเพื่อสร้างบารมี",
        longDesc: "สัมผัสประสบการณ์การแข่งรถบนถนนที่เต็มไปด้วยอะดรีนาลีน ในตอนกลางวันคุณจะได้เข้าแข่งใน Speedhunter Showdown เพื่อเก็บเงินรางวัลมาแต่งรถ แต่เมื่ออาทิตย์ตกดิน กฎกติกาจะเปลี่ยนไป คุณต้องลงแข่งในสนามใต้ดินเพื่อเพิ่มค่า Reputation พร้อมกับคอยหลบหลีกหรือปะทะกับกองกำลังตำรวจสุดโหดที่พร้อมจะจับกุมคุณทุกเมื่อ ตัวเกมมาพร้อมระบบปรับแต่งรถที่ลุ่มลึกและบรรยากาศเมืองสไตล์ไมอามี่ที่สวยงามครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1105630/Need_for_Speed_Heat/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/need-for-speed-heat", type: "epic" }
        ],
        min: { os: "Windows 10", cpu: "Intel Core i5-3570 / AMD FX-6350", ram: "8 GB", gpu: "NVIDIA GeForce GTX 760 / AMD Radeon 7970", storage: "50 GB" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i7-4790 / AMD Ryzen 3 1300X", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480", storage: "50 GB SSD" }
    },
    {
        id: 41,
        title: "Baldur's Gate 3",
        category: "RPG",
        isFree: false,
        image: "images/43.jpg",
        shortDesc: "สุดยอดเกม RPG แห่งยุคจากจักรวาล Dungeons & Dragons ที่ทุกการตัดสินใจของคุณจะเปลี่ยนชะตากรรมของโลก",
        longDesc: "รวบรวมปาร์ตี้ของคุณแล้วกลับสู่ Forgotten Realms ในเรื่องราวแห่งมิตรภาพ การทรยศ การเสียสละ และการเอาตัวรอด คุณได้รับพลังอันลึกลับจากตัวอ่อนที่ถูกฝังอยู่ในสมอง จงเลือกว่าจะต่อต้านความมืดมิดหรือจะโอบรับมันเพื่อกลายเป็นปีศาจขั้นสุดยอด ด้วยระบบการเล่นที่เปิดกว้างและอิสระในการแก้ปัญหาที่หลากหลาย ทำให้เกมนี้กลายเป็นมาตรฐานใหม่ของเกมแนวสวมบทบาทครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel I5 4690 / AMD FX 8350", ram: "8 GB", gpu: "NVIDIA GTX 970 / RX 480 (4GB+ VRAM)", storage: "150 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel i7 8700K / AMD r5 3600", ram: "16 GB", gpu: "NVIDIA RTX 2060 Super / RX 5700 XT (8GB+ VRAM)", storage: "150 GB SSD" }
    },
    {
        id: 42,
        title: "Divinity: Original Sin II",
        category: "RPG",
        isFree: false,
        image: "images/44.jpg",
        shortDesc: "เกม RPG ระดับตำนานที่ให้คุณสร้างตัวละครและออกผจญภัยในโลกที่ทุกองค์ประกอบธาตุตอบสนองต่อการกระทำของคุณ",
        longDesc: "สัมผัสประสบการณ์การเล่นเกมแนวสวมบทบาทที่ลุ่มลึกและอิสระที่สุดเท่าที่เคยมีมา คุณสามารถเล่นเป็นหนึ่งในตัวละครที่มีเนื้อเรื่องเฉพาะตัว (Origin Characters) หรือสร้างตัวละครเองได้ ระบบการต่อสู้เป็นแบบ Turn-based ที่เน้นการใช้สภาพแวดล้อมและพลังธาตุให้เป็นประโยชน์ เช่น การร่ายฝนใส่ไฟให้กลายเป็นหมอก หรือการทำให้พื้นเปียกเพื่อช็อตไฟฟ้าใส่ศัตรู รองรับการเล่น Co-op สูงสุดถึง 4 คนครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/", type: "steam" }
        ],
        min: { os: "Windows 7 SP1 64-bit / 10 64-bit", cpu: "Intel Core i5 หรือเทียบเท่า", ram: "4 GB", gpu: "NVIDIA GeForce GTX 550 / ATI Radeon HD 6000", storage: "60 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 หรือเทียบเท่า", ram: "8 GB", gpu: "NVIDIA GeForce GTX 770 / AMD R9 280", storage: "60 GB SSD" }
    },
    {
        id: 43,
        title: "Dragon Age: Origins",
        category: "RPG",
        isFree: false,
        image: "images/45.jpg",
        shortDesc: "ปฐมบทของมหากาพย์เกม RPG จาก BioWare ที่คุณต้องรวบรวมกองทัพเพื่อต่อกรกับหายนะโบราณที่กำลังกลืนกินโลก",
        longDesc: "ในฐานะหนึ่งใน Grey Wardens คนสุดท้ายที่เหลืออยู่ คุณต้องออกเดินทางไปทั่วอาณาจักร Ferelden เพื่อยุติสงครามกลางเมืองและรวบรวมเผ่าพันธุ์ต่างๆ มาต่อสู้กับกองทัพ Darkspawn จุดเด่นอยู่ที่ระบบ 'Origin' ซึ่งจุดเริ่มต้นของตัวละครจะส่งผลต่อเนื้อเรื่องและความสัมพันธ์ของเพื่อนร่วมทีมอย่างลุ่มลึก พร้อมระบบการต่อสู้แบบวางแผนที่เข้มข้นและเต็มไปด้วยการตัดสินใจเชิงศีลธรรมที่ไม่มีคำว่าถูกหรือผิดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/17450/Dragon_Age_Origins/", type: "steam" }
        ],
        min: { os: "Windows XP / Vista / 7", cpu: "Intel Core 2 Single 1.6 GHz / AMD Sempron 2.0 GHz", ram: "1 GB", gpu: "NVIDIA GeForce 6600 GT / ATI Radeon X1550", storage: "20 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core 2 Quad 2.4 GHz / AMD Phenom II X3 2.8 GHz", ram: "2 GB", gpu: "NVIDIA GeForce 8800 GTS / ATI Radeon HD 3850", storage: "20 GB" }
    },
    {
        id: 44,
        title: "Fallout: New Vegas",
        category: "RPG",
        isFree: false,
        image: "images/46.jpg",
        shortDesc: "สัมผัสความร้อนระอุของทะเลทราย Mojave และความขัดแย้งระหว่างกลุ่มมหาอำนาจในเมืองแห่งบาปที่โลกล่มสลาย",
        longDesc: "เรื่องราวเริ่มต้นเมื่อคุณถูกยิงหัวและทิ้งให้ตายกลางทะเลทรายในฐานะคนส่งของ หลังจากรอดชีวิตมาได้ คุณต้องออกตามหาผู้ที่ทำร้ายคุณและเข้าไปพัวพันกับสงครามแย่งชิงเขื่อน Hoover Dam ระหว่างกลุ่ม NCR, Legion และ Mr. House จุดเด่นคือระบบการเลือกที่ส่งผลกระทบวงกว้าง (Reputation system) และบทสนทนาที่เฉียบคมซึ่งทำให้เกมนี้ถูกยกย่องว่าเป็นหนึ่งในภาคที่ดีที่สุดของซีรีส์ Fallout ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/22380/Fallout_New_Vegas/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/fallout-new-vegas--ultimate-edition", type: "epic" }
        ],
        min: { os: "Windows 7 / 8 / 10", cpu: "Dual Core 2.0 GHz", ram: "2 GB", gpu: "NVIDIA GeForce 6 series / ATI 1300XT series", storage: "10 GB" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core i5 / AMD Phenom II", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 / ATI Radeon HD 5850", storage: "10 GB" }
    },
    {
        id: 45,
        title: "Mount & Blade II: Bannerlord",
        category: "RPG",
        isFree: false,
        image: "images/47.jpg",
        shortDesc: "สวมบทบาทขุนศึกในยุคกลาง สร้างกองทัพขยายอาณาจักร และบัญชาการรบในสนามสงครามขนาดมหึมา",
        longDesc: "ภาคต่อของเกม RPG แนว Sandbox ในตำนานที่ผสมผสานการวางแผนกลยุทธ์และการต่อสู้แบบ Action เข้าด้วยกันอย่างลงตัว คุณจะได้เริ่มต้นจากสามัญชนคนธรรมดา พัฒนาฝีมือ สร้างกลุ่มทหารรับจ้าง จนก้าวขึ้นเป็นเจ้าเมืองหรือกษัตริย์ จุดเด่นคือระบบเศรษฐกิจที่สมจริงและการสู้รบที่รองรับทหารนับพันในสนามแข่ง พร้อมระบบปรับแต่งอาวุธและชุดเกราะที่ลุ่มลึกครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/mount-and-blade-ii-bannerlord", type: "epic" }
        ],
        min: { os: "Windows 7 (64-bit only)", cpu: "Intel Core i3-8100 / AMD Ryzen 3 1200", ram: "6 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7850", storage: "60 GB" },
        rec: { os: "Windows 10 / 11 (64-bit only)", cpu: "Intel Core i5-9600K / AMD Ryzen 5 3600X", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "60 GB SSD" }
    },
    {
        id: 46,
        title: "Tyranny",
        category: "RPG",
        isFree: false,
        image: "images/48.jpg",
        shortDesc: "ในโลกที่ฝ่ายอธรรมเป็นผู้ชนะสงคราม คุณคือผู้รักษากฎที่มีอำนาจตัดสินชะตากรรมของผู้คนภายใต้การปกครองของ Kyros",
        longDesc: "เกม RPG แนวเน้นเนื้อเรื่องจาก Obsidian Entertainment ที่นำเสนอพล็อตเรื่องแปลกใหม่ เมื่อฝ่ายอธรรมยึดครองโลกได้สำเร็จ คุณจะได้รับบทเป็น Fatebinder เจ้าหน้าที่ผู้รักษากฎที่มีอำนาจตัดสินความเป็นความตาย ทุกคำพูดและการตัดสินใจของคุณจะส่งผลกระทบอย่างรุนแรงต่อความสัมพันธ์ระหว่างกลุ่มและการเมืองในโลกที่ล่มสลาย ตัวเกมเน้นระบบการร่ายเวทมนตร์ที่คุณสามารถออกแบบเองได้และความเป็นเหตุเป็นผลของเนื้อเรื่องที่เข้มข้นมากครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/362960/Tyranny/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/tyranny", type: "epic" }
        ],
        min: { os: "Windows 7 64-bit or newer", cpu: "Intel Core 2 Quad Q9505 / AMD Athlon II X4 840", ram: "6 GB", gpu: "ATI Radeon HD 5770 / NVIDIA GeForce GTS 450", storage: "15 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i3-2100 / AMD Phenom II X4 955", ram: "8 GB", gpu: "Radeon HD 6850 / NVIDIA GeForce GTX 560", storage: "15 GB" }
    },
    {
        id: 47,
        title: "Battle Brothers",
        category: "RPG",
        isFree: false,
        image: "images/49.jpg",
        shortDesc: "นำทัพกลุ่มทหารรับจ้างในโลกแฟนตาซียุคกลางสุดโหด ที่ทุกการตัดสินใจและทุกความตายล้วนมีความหมาย",
        longDesc: "เกมแนว Tactical RPG ผสมผสานการจัดการแบบ Sandbox คุณจะต้องจ้างทหาร, ฝึกฝน, และจัดหาอาวุธให้ลูกทีมของคุณเพื่อออกทำภารกิจในโลกที่สุ่มขึ้นมาใหม่ทุกครั้งที่เล่น ระบบการต่อสู้เป็นแบบ Turn-based บนแผนที่หกเหลี่ยมที่เน้นกลยุทธ์ขั้นสูง ความยากของเกมนี้อยู่ที่ความสมจริงและความโหดร้าย หากทหารของคุณตายในสมรภูมิ พวกเขาจะจากไปถาวร (Permadeath) ทำให้คุณต้องวางแผนทุกย่างก้าวอย่างรอบคอบครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/365360/Battle_Brothers/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/battle-brothers-b3531b", type: "epic" }
        ],
        min: { os: "Windows 7 / 8 / 10", cpu: "2.0 GHz", ram: "1 GB", gpu: "OpenGL 3.3 compatible (512 MB VRAM)", storage: "2 GB" },
        rec: { os: "Windows 10 / 11", cpu: "2.5 GHz or higher", ram: "2 GB", gpu: "OpenGL 3.3 compatible (1024 MB VRAM)", storage: "2 GB" }
    },
    {
        id: 48,
        title: "Baldur's Gate II: Enhanced Edition",
        category: "RPG",
        isFree: false,
        image: "images/50.jpg",
        shortDesc: "สานต่อตำนานบุตรแห่ง Bhaal ในสุดยอดเกม RPG คลาสสิกที่ถูกยกย่องว่าดีที่สุดตลอดกาลภาคหนึ่ง",
        longDesc: "เรื่องราวเริ่มต้นจากการที่คุณถูกจองจำและทรมานโดยจอมเวทผู้ชั่วร้าย Jon Irenicus คุณต้องออกเดินทางผ่านอาณาจักร Amn เพื่อค้นหาความจริงและเผชิญหน้ากับโชคชะตาที่ถูกกำหนดไว้ในสายเลือด ตัวเกมในเวอร์ชัน Enhanced Edition นี้ได้รวมภาคเสริม Throne of Bhaal และเพิ่มตัวละครใหม่ๆ พร้อมทั้งปรับปรุงระบบให้รองรับหน้าจอความละเอียดสูงและคอมพิวเตอร์ยุคใหม่ได้เป็นอย่างดีครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/257350/Baldurs_Gate_II_Enhanced_Edition/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/baldurs-gate-2-enhanced-edition", type: "epic" }
        ],
        min: { os: "Windows 7 / 8 / 10 / 11 64-bit", cpu: "Dual Core Processor", ram: "1 GB", gpu: "OpenGL 2.0 compatible", storage: "4 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i3 หรือเทียบเท่า", ram: "2 GB", gpu: "NVIDIA GeForce GTX 460 หรือเทียบเท่า", storage: "4 GB" }
    },
    {
        id: 49,
        title: "Pillars of Eternity II: Deadfire",
        category: "RPG",
        isFree: false,
        image: "images/51.jpg",
        shortDesc: "ล่องเรือข้ามมหาสมุทรในเกม RPG ภาคต่อสุดยิ่งใหญ่ เพื่อตามล่าเทพเจ้าที่ตื่นจากการหลับใหลและทวงคืนวิญญาณของคุณ",
        longDesc: "รับบทเป็น Watcher ออกผจญภัยในหมู่เกาะ Deadfire ที่กว้างใหญ่และเต็มไปด้วยอันตราย ภาคนี้มาพร้อมระบบการเดินเรือที่คุณต้องบริหารจัดการลูกเรือและปรับแต่งเรือเพื่อใช้ในการสำรวจและต่อสู้ทางทะเล ตัวเกมนำเสนอระบบการต่อสู้ที่เลือกได้ทั้งแบบ Real-time with Pause หรือ Turn-based พร้อมเนื้อเรื่องที่เข้มข้นและการตัดสินใจที่ส่งผลกระทบต่อความสัมพันธ์ของขั้วอำนาจต่าง ๆ ในโลกอีโอราครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/560130/Pillars_of_Eternity_II_Deadfire/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/pillars-of-興ternity-ii-deadfire", type: "epic" }
        ],
        min: { os: "Windows 7 / 8 / 10 64-bit", cpu: "Intel Core i3-2100 / AMD Phenom II X4 955", ram: "8 GB", gpu: "NVIDIA GeForce GTX 460 / Radeon HD 5770", storage: "45 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-2400 / AMD Phenom II X6 1100T", ram: "16 GB", gpu: "NVIDIA GeForce GTX 960 / Radeon R9 280", storage: "45 GB" }
    },
    {
        id: 50,
        title: "Underrail",
        category: "RPG",
        isFree: false,
        image: "images/52.jpg",
        shortDesc: "เกมแนว Old-school Turn-based RPG ในโลกอนาคตที่มนุษยชาติต้องลงไปอาศัยอยู่ใต้ดินเพื่อเอาชีวิตรอด",
        longDesc: "Underrail นำเสนอประสบการณ์การเล่นที่ท้าทายในสไตล์คลาสสิก โดยเน้นไปที่การสำรวจและระบบการต่อสู้ที่เข้มข้น คุณจะได้รับบทเป็นพลเมืองในระบบรถไฟใต้ดินที่กว้างใหญ่ (Underrail) ท่ามกลางความขัดแย้งของกลุ่มมหาอำนาจและสิ่งมีชีวิตกลายพันธุ์ จุดเด่นคือระบบการสร้างตัวละครที่ลุ่มลึก การคราฟต์ไอเทม และบรรยากาศที่กดดันแต่เต็มไปด้วยอิสระในการตัดสินใจครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/250520/Underrail/", type: "steam" }
        ],
        min: { os: "Windows 7 / 8 / 10", cpu: "1.6 GHz", ram: "2 GB", gpu: "Shader Model 2.0 compatible", storage: "5 GB" },
        rec: { os: "Windows 10 / 11", cpu: "2.0 GHz", ram: "4 GB", gpu: "NVIDIA GeForce GT 640 / Radeon HD 7750", storage: "5 GB" }
    },
    {
        id: 51,
        title: "Europa Universalis V (Project Caesar)",
        category: "Strategy",
        isFree: false,
        image: "images/53.jpg",
        shortDesc: "ก้าวเข้าสู่ยุคสมัยแห่งการเปลี่ยนแปลงในเกมวางแผนประวัติศาสตร์ที่ลุ่มลึกและทะเยอทะยานที่สุดจาก Paradox",
        longDesc: "ภาคต่อของเกม Grand Strategy ระดับตำนานที่ให้คุณควบคุมประเทศใดก็ได้ในโลกผ่านช่วงเวลาหลายศตวรรษ ในภาคนี้มีการยกเครื่องระบบประชากร (Pop System) ให้มีความละเอียดสูงขึ้น ระบบเศรษฐกิจและการเมืองที่ซับซ้อนกว่าเดิม และแผนที่ที่มีความละเอียดของพื้นที่ (Locations) มากที่สุดในซีรีส์ เพื่อมอบประสบการณ์การบริหารประเทศที่สมจริงและเต็มไปด้วยกลยุทธ์เหนือชั้นครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/236850/Europa_Universalis_IV/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i3-10100 / AMD Ryzen 3 3100", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "20 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-12600K / AMD Ryzen 5 5600X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600", storage: "20 GB SSD" }
    },
    {
        id: 52,
        title: "Old World",
        category: "Strategy",
        isFree: false,
        image: "images/54.jpg",
        shortDesc: "เกมวางแผนกลยุทธ์แนวประวัติศาสตร์ยุคโบราณที่ผสมผสานระบบ 4X เข้ากับระบบการบริหารความสัมพันธ์ของราชวงศ์",
        longDesc: "ผลงานจากหัวหน้าทีมออกแบบ Civilization IV ที่จะพาคุณไปสัมผัสการสร้างอาณาจักรในยุคคลาสสิก จุดเด่นที่แตกต่างคือระบบ 'Orders' ที่จำกัดจำนวนการสั่งการในแต่ละเทิร์น และระบบตัวละครที่เน้นการสืบทอดอำนาจผ่านราชวงศ์ คุณต้องแต่งงาน เลี้ยงดูทายาท และรับมือกับเหตุการณ์ดราม่าภายในครอบครัวไปพร้อมกับการขยายดินแดนและทำสงครามเพื่อความยิ่งใหญ่ของอาณาจักรครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/597180/Old_World/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/old-world", type: "epic" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel i5-4460 / AMD FX-8350", ram: "8 GB", gpu: "NVIDIA GTX 770 / AMD R9 290", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel i5-8600K / AMD Ryzen 5 3600", ram: "16 GB", gpu: "NVIDIA GTX 1060 / AMD RX 580", storage: "10 GB SSD" }
    },
    {
        id: 53,
        title: "Endless Legend 2 (Rumored/TBA)",
        category: "Strategy",
        isFree: false,
        image: "images/55.jpg",
        shortDesc: "ภาคต่อที่แฟนๆ รอคอยของเกมวางแผน 4X แฟนตาซีสุดล้ำลึกที่มาพร้อมกับเผ่าพันธุ์และระบบนิเวศที่เป็นเอกลักษณ์",
        longDesc: "แม้จะยังไม่มีการประกาศอย่างเป็นทางการ แต่ซีรีส์ Endless Legend เป็นที่รู้จักในด้านการนำเสนอเกมวางแผนที่มีสไตล์งานศิลป์โดดเด่นและเนื้อเรื่องที่ซับซ้อน ผู้เล่นจะได้ควบคุมหนึ่งในเผ่าพันธุ์ที่มีความสามารถแตกต่างกันอย่างสิ้นเชิงเพื่อแย่งชิงอำนาจบนดาว Auriga ที่กำลังจะล่มสลาย คาดว่าในภาคใหม่จะมีการยกระดับกราฟิกและระบบการทูตที่ลุ่มลึกขึ้นกว่าเดิมครับ",
        stores: [
            { name: "Steam ", url: "https://store.steampowered.com/publisher/Amplitude", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5 (Gen 10) / AMD Ryzen 5", ram: "8 GB", gpu: "NVIDIA GTX 1050 Ti / AMD RX 570", storage: "30 GB SSD" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 (Gen 12) / AMD Ryzen 7", ram: "16 GB", gpu: "NVIDIA RTX 3060 / AMD RX 6700 XT", storage: "30 GB SSD" }
    },
    {
        id: 54,
        title: "StarCraft II",
        category: "Strategy",
        isFree: false,
        image: "images/56.jpg",
        shortDesc: "สุดยอดเกมวางแผนการรบแบบ Real-time (RTS) ระดับตำนานที่ตัดสินกันด้วยไหวพริบและความเร็ว",
        longDesc: "มหากาพย์สงครามแห่งจักรวาลระหว่างสามเผ่าพันธุ์: Terran มนุษย์ผู้ปรับตัวเก่ง, Zerg สิ่งมีชีวิตกลายพันธุ์ที่เน้นจำนวน และ Protoss เผ่าพันธุ์ล้ำสมัยที่มีพลังจิตอันทรงพลัง ตัวเกมโดดเด่นด้วยระบบ Multiplayer ที่สมดุลที่สุดในโลก และแคมเปญเนื้อเรื่องที่เข้มข้นน่าติดตาม ปัจจุบันเปิดให้เล่นฟรีในส่วนของเนื้อเรื่องแรกและโหมดออนไลน์ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2513280/StarCraft_II/", type: "steam" },
            { name: "Battle.net", url: "https://us.shop.battle.net/en-us/product/starcraft-ii", type: "other" }
        ],
        min: { os: "Windows 7 / 8 / 10", cpu: "Intel Core 2 Duo / AMD Athlon 64 X2 5600+", ram: "2 GB", gpu: "NVIDIA GeForce 7600 GT / ATI Radeon HD 2600 XT", storage: "30 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5 / AMD FX series หรือดีกว่า", ram: "4 GB", gpu: "NVIDIA GeForce GTX 650 / AMD Radeon HD 7790 หรือดีกว่า", storage: "30 GB" }
    },
    {
        id: 55,
        title: "Supreme Commander",
        category: "Strategy",
        isFree: false,
        image: "images/57.jpg",
        shortDesc: "สงคราม RTS ขนาดมหึมาที่ให้คุณบัญชาการยูนิตนับพันบนแผนที่ขนาดใหญ่ยักษ์ด้วยระบบการซูมเข้าออกอย่างไร้รอยต่อ",
        longDesc: "สัมผัสประสบการณ์เกมวางแผนการรบที่ขึ้นชื่อเรื่องสเกลงานสร้างที่ใหญ่ที่สุดภาคหนึ่ง ผู้เล่นจะได้รับบทเป็นผู้บัญชาการหุ่นรบยักษ์ (ACU) ที่ต้องสร้างฐานทัพและบริหารทรัพยากรเพื่อสร้างกองทัพบก เรือ และอากาศเข้าห้ำหั่นกัน จุดเด่นคือระบบ Strategic Zoom ที่ช่วยให้คุณสลับการมองเห็นจากยูนิตตัวเดียวไปเป็นภาพรวมทั้งสนามรบได้ทันทีครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/9350/Supreme_Commander/", type: "steam" },
            { name: "Official", url: "https://www.square-enix-games.com/en_US/games/supreme_commander", type: "official" }
        ],
        min: { os: "Windows XP / Vista / 7", cpu: "1.8 GHz Processor", ram: "512 MB", gpu: "128 MB video RAM (NVIDIA 6200 / ATI 9600)", storage: "8 GB" },
        rec: { os: "Windows 10 / 11", cpu: "3.0 GHz Intel หรือเทียบเท่า", ram: "1 GB", gpu: "256 MB video RAM (NVIDIA 7600 / ATI X1800)", storage: "8 GB" }
    },
    {
        id: 56,
        title: "Battlefleet Gothic: Armada 2",
        category: "Strategy",
        isFree: false,
        image: "images/58.jpg",
        shortDesc: "บัญชาการกองยานรบสุดยิ่งใหญ่จากจักรวาล Warhammer 40,000 ในมหาสงครามกลางอวกาศที่เต็มไปด้วยกลยุทธ์",
        longDesc: "เกมวางแผนการรบแบบ Real-time ที่ให้คุณควบคุมกองเรืออวกาศขนาดมหึมา เข้าห้ำหั่นกันในสงครามระดับกาแล็กซี ภาคนี้มาพร้อมกับเผ่าพันธุ์ดั้งเดิมครบทั้ง 12 เผ่าจากเกมกระดานดั้งเดิม พร้อมแคมเปญเนื้อเรื่องที่เข้มข้น 3 แคมเปญ (Tyranids, Necrons และ Imperium) ระบบการเล่นถูกปรับปรุงให้ใหญ่ขึ้นและดุดันกว่าภาคแรกอย่างมากครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/573100/Battlefleet_Gothic_Armada_2/", type: "steam" },
            { name: "Official", url: "https://www.focus-entmt.com/en/games/battlefleet-gothic-armada-2", type: "official" }
        ],
        min: { os: "Windows 7 / 8 / 10 (64-bit)", cpu: "Intel Core i5-3450 / AMD FX-6300", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870 (2 GB)", storage: "50 GB" },
        rec: { os: "Windows 10 / 11 (64-bit)", cpu: "Intel Core i7-3820 / AMD Ryzen 5 2600", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 (4 GB)", storage: "50 GB" }
    },
    {
        id: 57,
        title: "XCOM 2",
        category: "Action-Adventure",
        isFree: false,
        image: "images/59.jpg",
        shortDesc: "นำกองกำลังต่อต้านมนุษยชาติเข้าทำสงครามกองโจรเพื่อปลดแอกโลกจากการปกครองของเอเลี่ยน",
        longDesc: "ภาคต่อของเกมวางแผนระดับรางวัลที่พลิกสถานการณ์ให้คุณกลายเป็นผู้ถูกล่า ในโลกที่เอเลี่ยนยึดครองสำเร็จ คุณต้องบริหารฐานทัพเคลื่อนที่ (The Avenger) วิจัยเทคโนโลยีใหม่ และนำหน่วยรบออกปฏิบัติภารกิจแบบ Turn-based ที่มีความเสี่ยงสูง ทุกการตัดสินใจมีผลต่อความเป็นตายของลูกทีม และแผนที่ที่ถูกสุ่มขึ้นใหม่ทำให้การเล่นทุกครั้งมีความท้าทายไม่ซ้ำกันครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/268500/XCOM_2/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/xcom-2", type: "epic" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core 2 Duo E4700 / AMD Phenom 9950", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5770 (1 GB)", storage: "45 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-3000 series / AMD FX-8120", ram: "8 GB", gpu: "NVIDIA GeForce GTX 770 / AMD Radeon HD 7970 (2 GB)", storage: "45 GB" }
    },
    {
        id: 58,
        title: "Starship Troopers: Terran Command",
        category: "Strategy",
        isFree: false,
        image: "images/60.jpg",
        shortDesc: "นำกองทัพ Mobile Infantry เข้าห้ำหั่นกับฝูงแมลง Arachnid ในเกมวางแผนการรบสุดระทึกจากจักรวาลหนังไซไฟชื่อดัง",
        longDesc: "เกมแนว Real-time Strategy ที่เน้นการป้องกันและการใช้ยุทธวิธีบนพื้นที่สูงต่ำ คุณต้องควบคุมกองทัพทหารราบเพื่อต่อต้านฝูงแมลงจำนวนมหาศาลที่พยายามจะกลืนกินอาณานิคมมนุษย์ ตัวเกมเน้นความสำคัญของการจัดวางตำแหน่งยูนิต (Line of Fire) เพื่อให้การยิงสนับสนุนมีประสิทธิภาพสูงสุด พร้อมเนื้อเรื่องแคมเปญที่ถ่ายทอดบรรยากาศแบบต้นฉบับภาพยนตร์มาอย่างครบถ้วนครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1202130/Starship_Troopers_Terran_Command/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/starship-troopers-terran-command", type: "epic" },
        ],
        min: { os: "Windows 7 / 8 / 10 / 11 64-bit", cpu: "Intel Core i5 หรือเทียบเท่า", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 560", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 หรือเทียบเท่า", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1070 หรือเทียบเท่า", storage: "10 GB" }
    },
    {
        id: 59,
        title: "Eador: Masters of the Broken World",
        category: "Strategy",
        isFree: false,
        image: "images/61.jpg",
        shortDesc: "เกมวางแผน Turn-based สุดลุ่มลึกที่ผสมผสานระบบ 4X และ RPG เข้าด้วยกันในโลกแฟนตาซีที่แตกสลาย",
        longDesc: "คุณจะได้รับบทเป็น Master ผู้ทรงพลังที่ต้องแย่งชิงชิ้นส่วนของโลกที่แตกเป็นเสี่ยงๆ (Shards) กลับมาเป็นหนึ่งเดียว ตัวเกมโดดเด่นด้วยระบบการบริหารเมืองที่ซับซ้อน การสำรวจดันเจี้ยน และการต่อสู้บนแผนที่หกเหลี่ยมสไตล์คลาสสิก ทุกการตัดสินใจของคุณส่งผลต่อความเชื่อมั่นของประชาชนและเส้นทางเนื้อเรื่องที่แตกต่างกันครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/232050/Eador_Masters_of_the_Broken_World/", type: "steam" }
        ],
        min: { os: "Windows XP / Vista / 7", cpu: "Intel Pentium 2.0 GHz / AMD Athlon 2000+", ram: "2 GB", gpu: "GeForce 7300 / Radeon 9200", storage: "2 GB" },
        rec: { os: "Windows 10 / 11", cpu: "Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 5200+", ram: "4 GB", gpu: "GeForce 8800GT / Radeon HD 2900PRO", storage: "2 GB" }
    },
    {
        id: 60,
        title: "Northgard: Definitive Edition",
        category: "Action-Adventure",
        isFree: false,
        image: "images/62.jpg",
        shortDesc: "นำเผ่าไวกิ้งของคุณออกสำรวจและยึดครองดินแดนลึกลับแห่งใหม่ในเกมวางแผนกลยุทธ์ที่อิงจากตำนานนอร์ส",
        longDesc: "หลังจากออกเรือสำรวจมานานหลายปี เหล่าไวกิ้งได้ค้นพบ Northgard ดินแดนที่เต็มไปด้วยสมบัติและความอันตราย คุณต้องบริหารทรัพยากรอย่างจำกัดเพื่อเอาชีวิตรอดจากฤดูหนาวที่โหดร้าย ต่อสู้กับเหล่ายักษ์และนักรบผู้ล่วงลับ โดยในเวอร์ชัน Definitive Edition นี้จะรวมเนื้อหาเสริมและระบบการเล่นที่สมบูรณ์ที่สุดเอาไว้ พร้อมโหมดแคมเปญที่เข้มข้นและระบบมัลติเพลเยอร์ที่เน้นชั้นเชิงครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/466560/Northgard/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/northgard", type: "epic" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel 2.0GHz Core 2 Duo หรือเทียบเท่า", ram: "1 GB", gpu: "NVIDIA GeForce 450 GTS / Radeon HD 5750", storage: "1 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel i5 3.1 GHz Quad core", ram: "2 GB", gpu: "NVIDIA GeForce GTX 660 / Radeon HD 7850", storage: "1 GB" }
    },
    {
        id: 61,
        title: "Microsoft Flight Simulator 2024",
        category: "Simulation",
        isFree: false,
        image: "images/63.jpg",
        shortDesc: "สัมผัสประสบการณ์การบินที่สมจริงที่สุดในโลกด้วยเทคโนโลยีล้ำสมัยและระบบอาชีพนักบินที่ลุ่มลึก",
        longDesc: "ก้าวเข้าสู่ยุคใหม่ของการจำลองการบินที่ไม่ได้มีแค่การบินจากจุด A ไป B แต่เพิ่มระบบอาชีพนักบินเต็มรูปแบบ เช่น การดับเพลิงทางอากาศ การค้นหาและกู้ภัย และการขนส่งสินค้าทางไกล ตัวเกมมาพร้อมกับรายละเอียดโลกที่สูงขึ้นด้วยระบบ Digital Twin และการจำลองสภาพอากาศที่สมจริงที่สุดเท่าที่เคยมีมาครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2537590/Microsoft_Flight_Simulator_2024/", type: "steam" },
            { name: "Official", url: "https://www.xbox.com/th-TH/games/microsoft-flight-simulator-2024", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "AMD Ryzen 5 2600X / Intel Core i7-6800K", ram: "16 GB", gpu: "Radeon RX 5700 / GeForce GTX 970", storage: "50 GB (SSD Recommended)" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "AMD Ryzen 7 7900X / Intel Core i7-14700K", ram: "64 GB", gpu: "Radeon RX 7900 XT / GeForce RTX 4080", storage: "50 GB (SSD Recommended)" }
    },
    {
        id: 62,
        title: "Farming Simulator 25",
        category: "Simulation",
        isFree: false,
        image: "images/64.jpg",
        shortDesc: "สร้างฟาร์มในฝันของคุณด้วยเทคโนโลยีการเกษตรล่าสุด พร้อมสัมผัสประสบการณ์การทำฟาร์มที่สมจริงและหลากหลายกว่าเดิม",
        longDesc: "ก้าวเข้าสู่โลกแห่งการเกษตรยุคใหม่ที่เพิ่มความหลากหลายด้วยพืชพรรณใหม่ๆ เช่น ข้าว พร้อมฉากหลังที่สวยงามทั้งในเอเชีย อเมริกาเหนือ และยุโรป ภาคนี้มีการอัปเกรดกราฟิกและฟิสิกส์ให้สมจริงยิ่งขึ้น รวมถึงระบบสภาพอากาศและเครื่องจักรลิขสิทธิ์แท้กว่า 400 รายการ ให้คุณได้บริหารจัดการฟาร์มเพียงลำพังหรือร่วมมือกับเพื่อนในโหมดมัลติเพลเยอร์ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2301650/Farming_Simulator_25/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/farming-simulator-25", type: "epic" },
            { name: "Official", url: "https://www.farming-simulator.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6400 / AMD Ryzen 5 1600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470 (4GB VRAM)", storage: "45 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-10700 / AMD Ryzen 7 3800X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT (8GB VRAM)", storage: "45 GB SSD" }
    },
    {
        id: 63,
        title: "Cities: Skylines",
        category: "Simulation",
        isFree: false,
        image: "images/65.jpg",
        shortDesc: "เกมสร้างเมืองระดับตำนานที่ให้อิสระในการออกแบบและบริหารจัดการมหานครในฝันอย่างไร้ขีดจำกัด",
        longDesc: "รับบทเป็นนายกเทศมนตรีเพื่อสร้างและบริหารเมือง ตั้งแต่การวางผังถนน การจัดการสาธารณูปโภค ไปจนถึงการกำหนดนโยบายภาษี ตัวเกมนำเสนอระบบจำลองการจราจรและเศรษฐกิจที่ลุ่มลึก พร้อมทั้งรองรับการปรับแต่ง (Modding) อย่างเต็มรูปแบบ ซึ่งช่วยให้ผู้เล่นสามารถสร้างสรรค์เมืองที่มีเอกลักษณ์เฉพาะตัวได้อย่างไม่รู้จบครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/255710/Cities_Skylines/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/cities-skylines", type: "epic" },
            { name: "Official", url: "https://www.paradoxinteractive.com/games/cities-skylines", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i3-2100 / AMD Phenom II X4 945", ram: "4 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870 (2 GB)", storage: "4 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-3470 / AMD FX-6300", ram: "6 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870 (2 GB)", storage: "4 GB" }
    },
    {
        id: 64,
        title: "Euro Truck Simulator 2",
        category: "Simulation",
        isFree: false,
        image: "images/66.jpg",
        shortDesc: "เดินทางข้ามยุโรปในฐานะราชาแห่งท้องถนน ผู้ส่งมอบสินค้าสำคัญข้ามระยะทางไกลนับพันกิโลเมตร",
        longDesc: "สัมผัสประสบการณ์การขับรถบรรทุกที่สมจริงที่สุด ท่องเที่ยวไปตามถนนในสหราชอาณาจักร เบลเยียม เยอรมนี อิตาลี เนเธอร์แลนด์ โปแลนด์ และอีกมากมาย สร้างบริษัทขนส่งของตัวเอง ซื้อโรงจอดรถ จ้างคนขับ และปรับแต่งรถบรรทุกของคุณให้มีเอกลักษณ์ เพื่อก้าวขึ้นเป็นเจ้าแห่งการขนส่งในทวีปยุโรปครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/", type: "steam" },
            { name: "Official", url: "https://eurotrucksimulator2.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i5-6400 / AMD Ryzen 3 1200", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon RX 460 (2 GB)", storage: "25 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-9600 / AMD Ryzen 5 3600", ram: "12 GB", gpu: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 590 (6 GB)", storage: "25 GB SSD" }
    },
    {
        id: 65,
        title: "PowerWash Simulator",
        category: "Simulation",
        isFree: false,
        image: "images/67.jpg",
        shortDesc: "ปลดปล่อยความเครียดด้วยเสียงน้ำแรงดันสูงและเปลี่ยนสิ่งที่สกปรกที่สุดให้กลับมาสะอาดเอี่ยมอ่อง",
        longDesc: "สุดยอดเกมผ่อนคลายที่ให้คุณสวมบทบาทเป็นเจ้าของธุรกิจรับฉีดล้างทำความสะอาด ขจัดคราบฝังลึกจากสวนสาธารณะ ยานพาหนะ ไปจนถึงสถานีอวกาศ ด้วยระบบฟิสิกส์ของน้ำที่สมจริงและเสียงที่ช่วยให้คุณเพลิดเพลินจนลืมเวลา สามารถเล่นคนเดียวหรือร่วมมือกับเพื่อนในโหมด Co-op เพื่อช่วยกันฉีดล้างความสกปรกให้หมดไปครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1290000/PowerWash_Simulator/", type: "steam" },
            { name: "Official", url: "https://futurlab.co.uk/game/powerwash-simulator-2/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel i5-1800 (หรือเทียบเท่า)", ram: "8 GB", gpu: "NVIDIA GeForce GTX 760 (หรือเทียบเท่า)", storage: "6 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel i7-7700K / AMD Ryzen 5 1600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480", storage: "6 GB" }
    },
    {
        id: 66,
        title: "Two Point Campus",
        category: "Simulation",
        isFree: false,
        image: "images/68.jpg",
        shortDesc: "บริหารจัดการมหาวิทยาลัยในฝันสุดเพี้ยนที่เต็มไปด้วยหลักสูตรประหลาดและการใช้ชีวิตของเหล่านักศึกษา",
        longDesc: "จากผู้สร้าง Two Point Hospital สู่การบริหารสถานศึกษาที่คุณสามารถสร้างได้ตั้งแต่โครงสร้างอาคารไปจนถึงการจ้างบุคลากร เปิดสอนหลักสูตรที่ไม่เหมือนใคร เช่น โรงเรียนอัศวิน หรือการปรุงอาหารยักษ์ ดูแลความพึงพอใจของนักศึกษาและสร้างสภาพแวดล้อมที่เอื้อต่อการเรียนรู้ (และความสนุก) เพื่อสร้างมหาวิทยาลัยอันดับหนึ่งของโลกครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1649080/Two_Point_Campus/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/two-point-campus", type: "epic" },
            { name: "Official", url: "https://www.twopointcampus.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i3 6100 / AMD FX-4350", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 6850 (1 GB)", storage: "6 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5 6600 / AMD Ryzen 1600X", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 (4 GB)", storage: "6 GB" }
    },
    {
        id: 67,
        title: "Supermarket Simulator",
        category: "Simulation",
        isFree: false,
        image: "images/69.jpg",
        shortDesc: "สวมบทบาทเป็นเจ้าของซูเปอร์มาร์เก็ต บริหารจัดการร้านค้าตั้งแต่การสั่งของ จัดชั้นวาง ไปจนถึงการเป็นแคชเชียร์",
        longDesc: "เกมจำลองสถานการณ์การบริหารร้านค้าในมุมมองบุคคลที่หนึ่งที่คุณต้องเริ่มจากร้านเล็กๆ และขยายกิจการให้ยิ่งใหญ่ คุณจะได้วางผังร้านค้า ออกแบบชั้นวางสินค้า สั่งซื้อสินค้าผ่านคอมพิวเตอร์ กำหนดราคาขายเพื่อทำกำไร และจัดการกับลูกค้าที่หลั่งไหลเข้ามา ความสนุกอยู่ที่การบริหารจัดการสต็อกสินค้าไม่ให้ขาดช่วงและการชำระหนี้เพื่อขยายพื้นที่ร้านค้าครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2670630/Supermarket_Simulator/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-3570 / AMD FX-6350", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7850 (2 GB)", storage: "5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-7600K / AMD Ryzen 5 1600X", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 (6 GB)", storage: "5 GB" }
    },
    {
        id: 68,
        title: "Foundry",
        category: "Simulation",
        isFree: false,
        image: "images/70.jpg",
        shortDesc: "สร้างโรงงานอัตโนมัติในโลก Voxel 3D ขนาดมหึมาที่คุณสามารถขุด เจาะ และออกแบบได้อย่างอิสระ",
        longDesc: "เกมแนว First-person factory building ที่ผสมผสานการสร้างโรงงานเข้ากับโลกที่ทำลายและปรับแต่งได้ทุกตารางนิ้ว คุณต้องเริ่มจากการขุดทรัพยากรด้วยมือ พัฒนาไปสู่ระบบสายพานลำเลียง เครือข่ายท่อส่ง และการใช้เครื่องจักรที่ซับซ้อนเพื่อผลิตสินค้าจำนวนมหาศาล เป้าหมายคือการขยายขอบเขตทางเทคโนโลยีและบริหารจัดการพลังงานในโลกที่ไม่มีที่สิ้นสุดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/983870/FOUNDRY/", type: "steam" },
            { name: "Official", url: "https://www.foundrygame.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4460 / AMD Ryzen 3 1200", ram: "8 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon RX 470 (4 GB)", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 (8 GB)", storage: "10 GB SSD" }
    },
    {
        id: 68,
        title: "Foundry",
        category: "Simulation",
        isFree: false,
        image: "images/70.jpg",
        shortDesc: "สร้างโรงงานอัตโนมัติในโลก Voxel 3D ขนาดมหึมาที่คุณสามารถขุด เจาะ และออกแบบได้อย่างอิสระ",
        longDesc: "เกมแนว First-person factory building ที่ผสมผสานการสร้างโรงงานเข้ากับโลกที่ทำลายและปรับแต่งได้ทุกตารางนิ้ว คุณต้องเริ่มจากการขุดทรัพยากรด้วยมือ พัฒนาไปสู่ระบบสายพานลำเลียง เครือข่ายท่อส่ง และการใช้เครื่องจักรที่ซับซ้อนเพื่อผลิตสินค้าจำนวนมหาศาล เป้าหมายคือการขยายขอบเขตทางเทคโนโลยีและบริหารจัดการพลังงานในโลกที่ไม่มีที่สิ้นสุดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/983870/FOUNDRY/", type: "steam" },
            { name: "Official", url: "https://www.foundrygame.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4460 / AMD Ryzen 3 1200", ram: "8 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon RX 470 (4 GB)", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 (8 GB)", storage: "10 GB SSD" }
    },
    {
        id: 69,
        title: "Little Sim World",
        category: "Simulation",
        isFree: false,
        image: "images/71.jpg",
        shortDesc: "เกมจำลองชีวิตในลอนดอนแบบ 2D Open World ที่มอบอิสระให้คุณใช้ชีวิตและออกแบบสไตล์ของตัวเองได้อย่างเต็มที่",
        longDesc: "สัมผัสชีวิตในเมืองหลวงที่เต็มไปด้วยรายละเอียด คุณสามารถสร้างตัวละคร เลือกอาชีพ ตกแต่งบ้าน และปฏิสัมพันธ์กับผู้คนในเมืองได้อย่างอิสระ ตัวเกมโดดเด่นด้วยระบบความต้องการของตัวละครที่สมจริง สภาพอากาศที่เปลี่ยนแปลงตามเวลา และบรรยากาศเมืองลอนดอนที่ถูกถ่ายทอดออกมาในสไตล์งานศิลป์ที่สวยงามและมีเอกลักษณ์ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1429880/Little_Sim_World/", type: "steam" },
            { name: "Official", url: "https://www.littlesimworld.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i3 / AMD Ryzen 3", ram: "4 GB", gpu: "DirectX 11 Compatible GPU", storage: "2 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5 / AMD Ryzen 5", ram: "8 GB", gpu: "NVIDIA GTX 1050 / AMD RX 560", storage: "2 GB" }
    },
    {
        id: 70,
        title: "Galacticare",
        category: "Simulation",
        isFree: false,
        image: "images/72.jpg",
        shortDesc: "บริหารโรงพยาบาลในอวกาศเพื่อรักษาเผ่าพันธุ์เอเลี่ยนสุดแปลกประหลาดทั่วกาแล็กซี",
        longDesc: "รับหน้าที่ออกแบบและบริหารจัดการสถานพยาบาลนอกโลกที่ต้องรับมือกับคนไข้หลากหลายเผ่าพันธุ์และโรคภัยสุดล้ำที่คุณไม่เคยเห็นมาก่อน คุณต้องจ้างแพทย์ฝีมือดี (หรือที่ดูแปลกๆ) มาทำงาน วิจัยเทคโนโลยีการรักษา และเผชิญกับสถานการณ์ฉุกเฉินในระดับดวงดาว โดยมีเป้าหมายเพื่อสร้างเครือข่ายโรงพยาบาลที่ครอบคลุมไปทั่วจักรวาลครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2324590/Galacticare/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/galacticare-837877", type: "epic" },
            { name: "Official", url: "https://galacticare.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4690K / AMD Ryzen 3 1300X", ram: "8 GB", gpu: "NVIDIA GeForce GTX 960 / AMD Radeon R9 380", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-6700K / AMD Ryzen 5 1500X", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "10 GB" }
    },
    {
        id: 71,
        title: "Return of the Obra Dinn",
        category: "Adventure",
        isFree: false,
        image: "images/73.jpg",
        shortDesc: "ไขปริศนาการหายสาบสูญของลูกเรือบนเรือเดินสมุทรผ่านงานภาพสไตล์ 1-bit สุดเอกลักษณ์",
        longDesc: "ในฐานะเจ้าหน้าที่ประเมินความเสียหายของบริษัท East India Company คุณต้องขึ้นไปบนเรือ Obra Dinn ที่ลอยมาติดฝั่งโดยไม่มีคนเป็นเหลืออยู่เลย ด้วยนาฬิกาพกพิเศษ 'Memento Mortem' คุณจะสามารถย้อนกลับไปดูวินาทีสุดท้ายก่อนตายของลูกเรือแต่ละคน เพื่อระบุชื่อ สาเหตุการตาย และรวบรวมความจริงทั้งหมดที่เกิดขึ้นบนเรือลำนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/", type: "steam" },
            { name: "Official", url: "https://obradinn.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i5 2.0 GHz หรือเทียบเท่า", ram: "4 GB", gpu: "Discrete GPU", storage: "2 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 2.8 GHz หรือเทียบเท่า", ram: "8 GB", gpu: "NVIDIA GeForce GTX 750 หรือเทียบเท่า", storage: "2 GB" }
    },
    {
        id: 72,
        title: "Obduction",
        category: "Adventure",
        isFree: false,
        image: "images/74.jpg",
        shortDesc: "ออกสำรวจโลกต่างดาวที่ลึกลับและสวยงามในเกมผจญภัยไขปริศนาจากผู้สร้างเกมระดับตำนานอย่าง Myst",
        longDesc: "เมื่อคุณถูกลักพาตัวโดยวัตถุลึกลับจากฟากฟ้าและตื่นขึ้นมาในสถานที่ที่ผสมผสานระหว่างโลกมนุษย์และสถาปัตยกรรมต่างดาว คุณต้องออกสำรวจสภาพแวดล้อมที่แปลกตา ไขปริศนาที่ซับซ้อน และค้นหาความลับที่ซ่อนอยู่เพื่อหาทางกลับบ้าน ทุกทางเลือกที่คุณตัดสินใจจะส่งผลต่อบทสรุปของเรื่องราวในโลกที่เต็มไปด้วยความพิศวงนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/306760/Obduction/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/obduction", type: "epic" },
            { name: "Official", url: "https://obduction.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i5-2500 หรือเทียบเท่า", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7700 (1 GB)", storage: "20 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5-4590 หรือเทียบเท่า", ram: "16 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290 (4 GB)", storage: "20 GB (SSD Recommended)" }
    },
    {
        id: 73,
        title: "Heaven's Vault",
        category: "Adventure",
        isFree: false,
        image: "images/75.jpg",
        shortDesc: "รับบทเป็นนักโบราณคดีออกสำรวจเนบิวลาเพื่อตามหาความลับของอารยธรรมที่สาบสูญและถอดรหัสภาษาโบราณ",
        longDesc: "ร่วมเดินทางไปกับ Aliya Elasra และหุ่นยนต์คู่ใจ Six ออกสำรวจซากปรักหักพังในอวกาศ ตัวเกมมีความโดดเด่นที่ระบบการถอดรหัสอักษรภาพ (Hieroglyphics) ซึ่งการตีความของคุณจะส่งผลต่อเนื้อเรื่องและการค้นพบความจริงเกี่ยวกับประวัติศาสตร์ของจักรวาล เป็นเกมผจญภัยที่เน้นการอ่านและวิเคราะห์ในโลกที่สวยงามครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/774201/Heavens_Vault/", type: "steam" },
            { name: "Official", url: "https://www.inklestudios.com/heavensvault/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i5-2500K / AMD Phenom II X4 940", ram: "4 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870", storage: "5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-3770 / AMD FX-8350", ram: "8 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290", storage: "5 GB" }
    },
    {
        id: 74,
        title: "The Book of Unwritten Tales",
        category: "Adventure",
        isFree: false,
        image: "images/76.jpg",
        shortDesc: "ออกผจญภัยในโลกแฟนตาซีสุดเพี้ยนเพื่อปกป้องความลับของอาวุธในตำนานที่อาจเปลี่ยนชะตากรรมของสงคราม",
        longDesc: "ในโลกที่สงครามระหว่างพันธมิตรและฝ่ายอสูรดำเนินมาอย่างยาวนาน คุณจะได้ควบคุมตัวละคร 4 ตัวที่มีเอกลักษณ์เฉพาะตัว เพื่อไขปริศนาและขัดขวางแผนการร้ายของฝ่ายอธรรม ตัวเกมเต็มไปด้วยอารมณ์ขัน การล้อเลียนภาพยนตร์และเกม RPG ชื่อดัง พร้อมปริศนาที่ต้องใช้ไหวพริบในสไตล์เกมผจญภัยดั้งเดิมครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/215160/The_Book_of_Unwritten_Tales/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/the-book-of-unwritten-tales", type: "epic" },
            { name: "Official", url: "https://kingart-games.com/games/7-the-book-of-unwritten-tales", type: "official" }
        ],
        min: { os: "Windows XP / Vista / 7", cpu: "2.0 GHz CPU", ram: "1 GB", gpu: "DirectX 9.0c compatible with 256 MB VRAM", storage: "2.5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "2.5 GHz Multi-core CPU", ram: "2 GB", gpu: "DirectX 9.0c compatible with 512 MB VRAM", storage: "2.5 GB" }
    },
    {
        id: 75,
        title: "Dreamfall Chapters",
        category: "Adventure",
        isFree: false,
        image: "images/77.jpg",
        shortDesc: "บทสรุปการผจญภัยข้ามโลกคู่ขนานระหว่างวิทยาศาสตร์และเวทมนตร์ ที่ทุกการตัดสินใจของคุณจะเปลี่ยนเส้นทางแห่งโชคชะตา",
        longDesc: "เรื่องราวสานต่อการเดินทางของ Zoë Castillo และ Kian Alvane ในโลกสองใบที่แตกต่างกันอย่างสิ้นเชิง คือ Stark เมืองแห่งเทคโนโลยีล้ำสมัยในอนาคต และ Arcadia ดินแดนแห่งเวทมนตร์และจินตนาการ คุณต้องออกสำรวจ แก้ไขปริศนา และทำการตัดสินใจที่ยากลำบากซึ่งจะส่งผลกระทบต่อตอนจบของซีรีส์ระดับตำนานนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/239030/Dreamfall_Chapters/", type: "steam" },
            { name: "Official", url: "https://www.redthreadgames.com/dreamfall-chapters", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core 2 Duo 2.0 GHz", ram: "4 GB", gpu: "Intel HD Graphics 4000", storage: "12 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Quad Core i5 2.5 GHz", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7850", storage: "12 GB" }
    },
    {
        id: 76,
        title: "Saltsea Chronicles",
        category: "Adventure",
        isFree: false,
        image: "images/78.jpg",
        shortDesc: "ออกล่องเรือไปในโลกหลังน้ำท่วมใหญ่เพื่อตามหากัปตันที่หายไปและสร้างมิตรภาพในหมู่เกาะที่เต็มไปด้วยความลับ",
        longDesc: "รับบทเป็นกลุ่มลูกเรือที่ต้องบริหารจัดการความสัมพันธ์และออกสำรวจหมู่เกาะ Saltsea ที่เต็มไปด้วยวัฒนธรรมที่แปลกตา คุณจะได้ไขปริศนาผ่านการพูดคุย การตัดสินใจเลือกเส้นทาง และการเล่นมินิเกมไพ่ 'Spoils' โดยจุดเด่นอยู่ที่เนื้อเรื่องจะปรับเปลี่ยนไปตามสมาชิกที่คุณเลือกให้ไปสำรวจในแต่ละเกาะครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1406080/Saltsea_Chronicles/", type: "steam" },
            { name: "Official", url: "https://saltseachronicles.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "2GHz Quad Core", ram: "8 GB", gpu: "Intel HD 615 / NVIDIA GeForce GT 730", storage: "4 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "2.8GHz Quad Core", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 460", storage: "4 GB" }
    },
    {
        id: 77,
        title: "Perfect Tides",
        category: "Adventure",
        isFree: false,
        image: "images/79.jpg",
        shortDesc: "สัมผัสชีวิตวัยรุ่นช่วงปี 2000 ผ่านเรื่องราวการเติบโต มิตรภาพ และการค้นหาตัวเองบนเกาะที่เงียบเหงา",
        longDesc: "รับบทเป็น Mara White นักเขียนวัยรุ่นที่อาศัยอยู่บนเกาะท่องเที่ยวที่วุ่นวายในฤดูร้อนแต่เงียบเหงาในฤดูหนาว ตัวเกมจะพาคุณสำรวจชีวิตประจำวัน การเผชิญหน้ากับความแปลกแยกในครอบครัว และการหลบหนีโลกความจริงไปสู่สังคมออนไลน์ยุคบุกเบิก ผ่านงานภาพสไตล์ Pixel Art ที่สวยงามและบทสนทนาที่บีบคั้นอารมณ์ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1172800/Perfect_Tides/", type: "steam" },
            { name: "Official", url: "https://www.perfecttides.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core 2 Duo", ram: "4 GB", gpu: "DirectX 9.0c compatible", storage: "2 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i3", ram: "8 GB", gpu: "NVIDIA GeForce GTX 660", storage: "2 GB" }
    },
    {
        id: 78,
        title: "Graveyard Keeper",
        category: "Adventure",
        isFree: false,
        image: "images/80.jpg",
        shortDesc: "เกมจำลองการจัดการสุสานสไตล์ยุคกลางที่เต็มไปด้วยจริยธรรมสีเทาและการผจญภัยไขความลับเพื่อหาทางกลับบ้าน",
        longDesc: "รับบทเป็นผู้ดูแลสุสานในโลกแฟนตาซีที่คุณต้องบริหารจัดการทรัพยากร สร้างสิ่งอำนวยความสะดวก และทำทุกวิถีทางเพื่อลดต้นทุน (แม้จะต้องทำเรื่องผิดศีลธรรมบ้างก็ตาม) พร้อมทั้งออกสำรวจดันเจี้ยน ทำเควสต์ให้ชาวบ้าน และรวบรวมวัตถุดิบเพื่อประกอบพิธีกรรมลึกลับที่จะช่วยส่งคุณกลับสู่โลกปัจจุบันครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/599140/Graveyard_Keeper/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/graveyard-keeper", type: "epic" },
            { name: "Official", url: "https://www.graveyardkeeper.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i5 1.5 GHz", ram: "4 GB", gpu: "DirectX 10 compatible with 1 GB VRAM", storage: "1 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5 2.5 GHz", ram: "8 GB", gpu: "DirectX 11 compatible with 2 GB VRAM", storage: "1 GB" }
    },
    {
        id: 79,
        title: "1348: Ex Voto",
        category: "Adventure",
        isFree: false,
        image: "images/81.jpg",
        shortDesc: "ออกสำรวจเมืองที่ถูกทำลายด้วยกาฬโรคในศตวรรษที่ 14 เพื่อไขปริศนาความลี้ลับที่อยู่เหนือธรรมชาติ",
        longDesc: "เรื่องราวเกิดขึ้นในปี ค.ศ. 1348 ช่วงเวลาที่ยุโรปกำลังเผชิญกับความตายจากโรคระบาด คุณจะได้ออกเดินทางไปในดินแดนที่ล่มสลาย สำรวจซากปรักหักพัง และเผชิญหน้ากับความศรัทธาที่บิดเบี้ยว ตัวเกมเน้นการเล่าเรื่องผ่านบรรยากาศที่กดดันและการไขปริศนาเพื่อหาคำตอบของเหตุการณ์ประหลาดที่เกิดขึ้นรอบตัวครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1826080/1348_Ex_Voto/", type: "steam" },
            { name: "Official", url: "https://www.6monthsstudio.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4590 / AMD FX 8350", ram: "8 GB", gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-6700K / AMD Ryzen 5 1600", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 580", storage: "10 GB" }
    },
    {
        id: 80,
        title: "Demi and the Fractured Dream",
        category: "Adventure",
        isFree: false,
        image: "images/82.jpg",
        shortDesc: "ออกทะยานไปในโลกแห่งความฝันที่แตกสลายด้วยการเคลื่อนที่ที่พริ้วไหวและการต่อสู้สุดท้าทาย",
        longDesc: "รับบทเป็น Demi ฮีโร่สาวที่ต้องออกเดินทางผ่านดินแดนที่พังทลายในโลกแห่งจินตนาการ ตัวเกมโดดเด่นด้วยระบบการเคลื่อนที่ ทั้งการกระโดดสองชั้น การพุ่งตัว และการใช้ตะขอเกี่ยวเพื่อผ่านอุปสรรคอย่างรวดเร็ว คุณจะได้เผชิญหน้ากับศัตรูที่ดุร้ายและบอสขนาดมหึมา พร้อมทั้งเปิดเผยเรื่องราวที่ซ่อนอยู่ภายในเศษเสี้ยวความฝันที่แตกกระจายครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1523410/Demi_and_the_Fractured_Dream/", type: "steam" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5 / AMD Ryzen 5", ram: "8 GB", gpu: "NVIDIA GeForce GTX 960 / AMD Radeon R9 280", storage: "5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 / AMD Ryzen 7", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "5 GB" }
    },
    {
        id: 81,
        title: "ARK: Survival Evolved",
        category: "Adventure",
        isFree: false,
        image: "images/83.jpg",
        shortDesc: "เอาชีวิตรอดบนเกาะลึกลับที่เต็มไปด้วยไดโนเสาร์และสัตว์ดึกดำบรรพ์ สร้างฐานทัพ และก้าวข้ามขีดจำกัดของเทคโนโลยี",
        longDesc: "คุณตื่นขึ้นมาบนชายหาดของเกาะที่ลึกลับชื่อว่า ARK โดยไม่มีอะไรติดตัวเลย คุณต้องล่าสัตว์ เก็บเกี่ยวทรัพยากร ประดิษฐ์ไอเทม ปลูกพืช วิจัยเทคโนโลยี และสร้างที่พักอาศัยเพื่อเอาตัวรอดจากสภาพอากาศและสัตว์ร้าย จุดเด่นคือการจับและฝึกฝนไดโนเสาร์กว่า 100 ชนิดมาเป็นพาหนะหรือช่วยในการต่อสู้ พร้อมทั้งร่วมมือกับผู้เล่นอื่นเพื่อครอบครองดินแดนและค้นหาความจริงที่ซ่อนอยู่ของเกาะแห่งนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/ark", type: "epic" },
            { name: "Official", url: "https://playark.com/", type: "official" }
        ],
        min: { os: "Windows 7/8.1/10 64-bit", cpu: "Intel Core i5-2400 / AMD FX-8320", ram: "8 GB", gpu: "NVIDIA GTX 670 2GB / AMD Radeon HD 7870 2GB", storage: "60 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X", ram: "16 GB", gpu: "NVIDIA GTX 1060 6GB / AMD Radeon RX 480 8GB", storage: "60 GB (SSD Recommended)" }
    },
    {
        id: 82,
        title: "Valheim",
        category: "Survival",
        isFree: false,
        image: "images/84.jpg",
        shortDesc: "เกมเอาชีวิตรอดและสำรวจในโลกที่ได้รับแรงบันดาลใจจากตำนานไวกิ้ง พิสูจน์ตัวเองต่อหน้าเทพเจ้าโอดิน",
        longDesc: "คุณคือวิญญาณนักรบที่ถูกส่งไปยังดินแดนที่สิบของโลกต้นไม้ Yggdrasil เพื่อกำจัดเหล่าศัตรูของโอดิน คุณต้องเริ่มจากการสร้างเครื่องมือพื้นฐาน สร้างบ้านเรือน ไปจนถึงการต่อเรือเพื่อล่องทะเลไปยังดินแดนใหม่ๆ จุดเด่นอยู่ที่ระบบการต่อสู้ที่ต้องใช้ชั้นเชิง การสร้างฐานที่ยืดหยุ่น และการอัญเชิญบอสสุดโหดมาต่อสู้เพื่อความก้าวหน้าในเทคโนโลยีครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/892970/Valheim/", type: "steam" },
            { name: "Official", url: "https://www.valheimgame.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "2.6 GHz Quad Core", ram: "8 GB", gpu: "NVIDIA GeForce GTX 950 / AMD Radeon R9 280", storage: "1 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5 3GHz / AMD Ryzen 5", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "1 GB" }
    },
    {
        id: 83,
        title: "The Forest",
        category: "Survival",
        isFree: false,
        image: "images/85.jpg",
        shortDesc: "เอาชีวิตรอดจากเหตุการณ์เครื่องบินตกในป่าลึกที่เต็มไปด้วยมนุษย์กินคนกลายพันธุ์ สร้างฐานทัพและตามหาลูกชายที่หายไป",
        longDesc: "ในฐานะผู้รอดชีวิตเพียงคนเดียวจากเหตุการณ์เครื่องบินตก คุณต้องเผชิญกับโลกที่อันตรายในป่ากว้างใหญ่ คุณต้องตัดไม้เพื่อสร้างที่พัก ก่อไฟเพื่อประทังความหนาว และออกหาอาหารเพื่อความอยู่รอด พร้อมทั้งรับมือกับเผ่าพันธุ์มนุษย์กินคนที่มีพฤติกรรมคล้ายมนุษย์และน่าสะพรึงกลัว คุณจะเลือกใช้ชีวิตอย่างสงบในฐานที่แข็งแกร่ง หรือจะบุกเข้าไปในถ้ำลึกเพื่อค้นหาความจริงเกี่ยวกับสิ่งที่เกิดขึ้นครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/242760/The_Forest/", type: "steam" },
            { name: "Official", url: "https://endnightgame.com/games/the-forest", type: "official" }
        ],
        min: { os: "Windows 7", cpu: "Intel Dual-Core 2.4 GHz", ram: "4 GB", gpu: "NVIDIA GeForce 8800GT", storage: "5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Quad Core Processor", ram: "4 GB", gpu: "NVIDIA GeForce GTX 560", storage: "5 GB" }
    },
    {
        id: 84,
        title: "Raft",
        category: "Survival",
        isFree: false,
        image: "images/86.jpg",
        shortDesc: "ผจญภัยเอาชีวิตรอดบนแพลำน้อยกลางมหาสมุทรอันกว้างใหญ่ ขยายที่พักและระวังฉลามจอมหิวโหย",
        longDesc: "คุณตื่นขึ้นมาบนแพไม้เล็กๆ กลางทะเลที่ไม่มีจุดสิ้นสุด โดยมีเพียงขอเกี่ยวพลาสติกเก่าๆ เป็นอุปกรณ์ชิ้นเดียว คุณต้องเก็บขยะที่ลอยมากับน้ำเพื่อนำมาคราฟต์สิ่งของ ขยายแพให้เป็นบ้านลอยน้ำที่มั่นคง ปลูกพืช ดื่มน้ำสะอาด และต่อสู้กับฉลามที่คอยจ้องจะพังแพของคุณ พร้อมออกสำรวจเกาะและสถานีวิจัยที่ถูกทิ้งร้างเพื่อตามหาเศษเสี้ยวของอารยธรรมที่หายไปครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/648800/Raft/", type: "steam" },
            { name: "Official", url: "https://www.raft-game.com/", type: "official" }
        ],
        min: { os: "Windows 7 64-bit", cpu: "Intel Core i5 2.6 GHz หรือเทียบเท่า", ram: "6 GB", gpu: "NVIDIA GeForce GTX 700 series หรือเทียบเท่า", storage: "10 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5 3.0 GHz หรือเทียบเท่า", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 หรือเทียบเท่า", storage: "10 GB" }
    },
    {
        id: 85,
        title: "Don't Starve",
        category: "Survival",
        isFree: false,
        image: "images/87.jpg",
        shortDesc: "เอาชีวิตรอดในโลกศิลปะสไตล์กอทิกที่เต็มไปด้วยวิทยาศาสตร์ เวทมนตร์ และสัตว์ประหลาดสุดประหลาด",
        longDesc: "รับบทเป็น Wilson นักวิทยาศาสตร์สุภาพบุรุษที่ถูกกับดักของปีศาจส่งมายังโลกที่รกร้างและอันตราย คุณต้องเรียนรู้ที่จะใช้สภาพแวดล้อมรอบตัว เก็บเกี่ยวทรัพยากร และสร้างสิ่งของเพื่อเอาชีวิตรอดจากความหิวโหย ความมืด และเหล่าศัตรูที่ไม่เป็นมิตร โดยมีเป้าหมายคือการหาทางกลับบ้านและที่สำคัญที่สุดคือ 'อย่าหิวตาย' ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/219740/Dont_Starve/", type: "steam" },
            { name: "Official", url: "https://www.klei.com/games/dont-starve", type: "official" }
        ],
        min: { os: "Windows 7 / 8 / 10", cpu: "1.7+ GHz หรือดีกว่า", ram: "1 GB", gpu: "Radeon HD 5450 หรือดีกว่า (256MB VRAM)", storage: "750 MB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "2.0 GHz หรือดีกว่า", ram: "4 GB", gpu: "NVIDIA GeForce GTX 460 หรือดีกว่า", storage: "1 GB" }
    },
    {
        id: 86,
        title: "Green Hell",
        category: "Survival",
        isFree: false,
        image: "images/88.jpg",
        shortDesc: "จำลองการเอาชีวิตรอดที่สมจริงที่สุดในป่าดงดิบอาเมซอนที่คุณต้องเผชิญกับทั้งอันตรายทางกายและสภาวะทางจิตใจ",
        longDesc: "คุณถูกทิ้งไว้กลางป่าลึกโดยไม่มีอุปกรณ์หรืออาหาร สิ่งเดียวที่คุณมีคือวิทยุสื่อสารและทักษะการเอาตัวรอด คุณต้องคราฟต์สิ่งของ สร้างที่พัก ล่าสัตว์ และดูแลสุขภาพทั้งร่างกาย (รวมถึงการตรวจเช็คบาดแผลและพยาธิ) และสุขภาพจิตใจภายใต้แรงกดดันมหาศาล เพื่อตามหาคนรักที่หายไปและหาทางออกจากนรกสีเขียวแห่งนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/815370/Green_Hell/", type: "steam" },
            { name: "Official", url: "https://greenhell-game.com/", type: "official" }
        ],
        min: { os: "Windows 7/8/10 64-bit", cpu: "3.2 GHz Dual Core Processor", ram: "4 GB", gpu: "GeForce GTX 660 / Radeon RX 460 (2GB VRAM)", storage: "8 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "3.2 GHz Quad Core Processor", ram: "8 GB", gpu: "GeForce GTX 970 / Radeon RX 580 (4GB VRAM)", storage: "8 GB" }
    },
    {
        id: 87,
        title: "Icarus",
        category: "Survival",
        isFree: false,
        image: "images/89.jpg",
        shortDesc: "เผชิญหน้ากับความโหดร้ายของดาวเคราะห์ต่างดาวในเกมเอาชีวิตรอดแบบทำภารกิจแข่งกับเวลา",
        longDesc: "คุณคือนักสำรวจที่ต้องลงจากสถานีอวกาศมายังดาว Icarus เพื่อเก็บเกี่ยวทรัพยากรล้ำค่าและทำภารกิจให้สำเร็จภายใต้เวลาที่จำกัด คุณต้องสร้างเครื่องมือ ล่าสัตว์ และเอาชนะสภาพอากาศที่รุนแรง หากคุณพลาดรถรับส่งกลับอวกาศ ทุกอย่างที่คุณสร้างและสะสมมาจะสูญหายไป ความท้าทายคือการบริหารเวลาและการพัฒนาเทคโนโลยีเพื่อความอยู่รอดในระยะยาวครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1149460/ICARUS/", type: "steam" },
            { name: "Official", url: "https://surviveicarus.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-8400 / AMD Ryzen 5 2600", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 580", storage: "70 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-9700K / AMD Ryzen 7 3700X", ram: "32 GB", gpu: "NVIDIA GeForce RTX 3060ti / AMD Radeon RX 6700 XT", storage: "70 GB (SSD Recommended)" }
    },
    {
        id: 88,
        title: "Muck",
        category: "Survival",
        isFree: false,
        image: "images/90.jpg",
        shortDesc: "เอาชีวิตรอดในเกาะที่เต็มไปด้วยทรัพยากรและศัตรูสุดโหด ในเกมแนว Survival-Roguelike ที่เน้นความรวดเร็วและท้าทาย",
        longDesc: "คุณถูกส่งมายังเกาะปริศนาที่ตอนกลางวันดูสงบสุข แต่ตอนกลางคืนจะเต็มไปด้วยสัตว์ประหลาด คุณต้องรีบสะสมทรัพยากร คราฟต์อาวุธ ชุดเกราะ และสร้างฐานทัพให้แข็งแกร่งที่สุดก่อนที่บอสจะปรากฏตัว จุดเด่นคือระบบไอเทมเสริมพลัง (Power-ups) ที่จะทำให้ตัวละครของคุณเก่งขึ้นอย่างก้าวกระโดด แต่ศัตรูก็จะเก่งขึ้นตามเวลาที่ผ่านไปเช่นกันครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1623320/Muck/", type: "steam" }
        ],
        min: { os: "Windows 7", cpu: "Dual Core 2.0 GHz", ram: "2 GB", gpu: "Intel HD 520", storage: "100 MB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i5", ram: "4 GB", gpu: "GeForce GTX 660", storage: "100 MB" }
    },
    {
        id: 89,
        title: "Palworld",
        category: "Survival",
        isFree: false,
        image: "images/91.jpg",
        shortDesc: "ออกสำรวจโลกกว้างร่วมกับเหล่า 'Pal' สิ่งมีชีวิตปริศนา ในเกมเอาชีวิตรอดที่ผสมผสานการคราฟต์และการต่อสู้สุดมันส์",
        longDesc: "สัมผัสประสบการณ์การเอาชีวิตรอดในโลกที่เต็มไปด้วยสิ่งมีชีวิตลึกลับที่เรียกว่า Pal คุณสามารถจับพวกมันมาช่วยในการต่อสู้ ทำฟาร์ม สร้างฐาน หรือแม้แต่ทำงานในโรงงาน ตัวเกมมีระบบความหิว สภาพอากาศ และศัตรูที่ดุร้าย ซึ่งคุณต้องบริหารจัดการทรัพยากรและพัฒนาเทคโนโลยีเพื่อสร้างอาวุธและอุปกรณ์ที่ทันสมัยเพื่อครอบครองดินแดนแห่งนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1623730/Palworld/", type: "steam" },
            { name: "Official", url: "https://www.pocketpair.jp/palworld", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-3570K 3.4 GHz", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1050 (2GB)", storage: "40 GB (SSD Required)" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i9-9900K 3.6 GHz", ram: "32 GB", gpu: "NVIDIA GeForce RTX 2070", storage: "40 GB (SSD Required)" }
    },
    {
        id: 90,
        title: "Enshrouded",
        category: "Survival",
        isFree: false,
        image: "images/92.jpg",
        shortDesc: "ทวงคืนอาณาจักรที่ล่มสลายในโลกกว้างที่ถูกหมอกพิษกลืนกิน สร้างฐานทัพที่ยิ่งใหญ่และปลดปล่อยพลังของ Flameborn",
        longDesc: "คุณคือความหวังสุดท้ายของเผ่าพันธุ์ที่ต้องเอาชีวิตรอดในอาณาจักร Embervale ที่ล่มสลาย ตัวเกมโดดเด่นด้วยระบบการสร้างฐานที่ละเอียดสูง (Voxel-based) และการต่อสู้สไตล์ Action RPG คุณต้องออกค้นหาทรัพยากร คราฟต์ชุดเกราะระดับตำนาน และบุกเข้าไปใน 'Shroud' หรือหมอกมรณะเพื่อกำจัดบอสที่แข็งแกร่งและเปิดเผยความลับของโลกใบนี้ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1203620/Enshrouded/", type: "steam" },
            { name: "Official", url: "https://enshrouded.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6400 / AMD Ryzen 5 1500X", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 580 (4GB)", storage: "60 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-8700 / AMD Ryzen 7 2700X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2070 Super / AMD Radeon RX 6700 XT", storage: "60 GB" }
    },
    {
        id: 91,
        title: "Nightingale",
        category: "Survival",
        isFree: false,
        image: "images/93.jpg",
        shortDesc: "ออกเดินทางข้ามมิติสู่ดินแดนแห่งมนตราและอันตราย ในเกมเอาชีวิตรอดสไตล์แฟนตาซีวิคตอเรียนที่งดงาม",
        longDesc: "คุณคือ Realmwalker ที่ติดอยู่ในมิติต่างๆ หลังจากเครือข่ายประตูมิติพังทลาย คุณต้องเอาชีวิตรอดด้วยการคราฟต์อุปกรณ์ สร้างที่พัก และต่อสู้กับสิ่งมีชีวิตลึกลับ จุดเด่นอยู่ที่ระบบ Realm Cards ที่ให้คุณกำหนดสภาพแวดล้อม ทรัพยากร และความท้าทายของมิติถัดไปที่คุณจะก้าวเข้าไป เพื่อหาทางกลับสู่เมือง Nightingale เมืองสุดท้ายของมวลมนุษย์ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1922010/Nightingale/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/nightingale", type: "epic" },
            { name: "Official", url: "https://www.playnightingale.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4430", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1060 (6GB)", storage: "70 GB (SSD Required)" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i9-9900K", ram: "16 GB", gpu: "NVIDIA GeForce RTX 3070", storage: "70 GB (SSD Required)" }
    },
    {
        id: 92,
        title: "Battlefield 2042",
        category: "Shooter",
        isFree: false,
        image: "images/94.jpg",
        shortDesc: "สัมผัสประสบการณ์สงครามเต็มรูปแบบในโลกอนาคตอันใกล้ พร้อมการสู้รบสเกลยักษ์ที่รองรับผู้เล่นจำนวนมาก",
        longDesc: "ก้าวเข้าสู่สมรภูมิในปี 2042 ที่โลกตกอยู่ในภาวะวิกฤต เกมภาคนี้นำเสนอแผนที่ขนาดมหึมาและระบบสภาพอากาศที่เปลี่ยนแปลงได้ตลอดเวลา เช่น พายุทอร์นาโดที่ทำลายล้างทุกอย่างในฉาก โดยเน้นการเล่นแบบ Multiplayer เป็นหลักผ่านโหมด All-Out Warfare, Hazard Zone และ Battlefield Portal ที่ให้คุณสร้างประสบการณ์การรบในแบบของตัวเองครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1517290/Battlefield_2042/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/battlefield-2042", type: "epic" },
            { name: "Official", url: "https://www.ea.com/games/battlefield/battlefield-2042", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5 6600K / AMD Ryzen 5 1600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560", storage: "100 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 4790 / AMD Ryzen 7 2700X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT", storage: "100 GB (SSD Recommended)" }
    },
    {
        id: 93,
        title: "Helldivers 2",
        category: "Shooter",
        isFree: false,
        image: "images/95.jpg",
        shortDesc: "เข้าร่วมกองกำลัง Helldivers เพื่อต่อสู้เพื่ออิสรภาพทั่วกาแล็กซี ในเกมยิงมุมมองบุคคลที่สามที่เน้นการเล่นแบบทีม",
        longDesc: "รับบทเป็นนักรบแห่ง Super Earth ออกเดินทางไปยังดาวเคราะห์ต่างๆ เพื่อกำจัดภัยคุกคามจากทั้งฝูงแมลงยักษ์ Terminids และหุ่นยนต์สังหาร Automaton ตัวเกมเน้นความร่วมมือในทีมและการใช้ 'Stratagems' เพื่อเรียกการสนับสนุนทางอากาศหรืออาวุธหนัก แต่ต้องระวังให้ดี เพราะระบบ Friendly Fire ในเกมนี้เปิดอยู่ตลอดเวลา ทำให้ความวุ่นวายและความฮาเกิดขึ้นได้เสมอครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/553850/HELLDIVERS_2/", type: "steam" },
            { name: "Official", url: "https://www.playstation.com/en-us/games/helldivers-2/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i7-4790K / AMD Ryzen 5 1500X", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470", storage: "100 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-9700K / AMD Ryzen 7 3700X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600 XT", storage: "100 GB (SSD Recommended)" }
    },
    {
        id: 94,
        title: "BPM: Bullets Per Minute",
        category: "Shooter",
        isFree: false,
        image: "images/96.jpg",
        shortDesc: "ต่อสู้ในดันเจี้ยนสไตล์นรกแตกที่ทุกการกระทำของคุณ ไม่ว่าจะเป็นการยิง รีโหลด หรือกระโดด ต้องตรงตามจังหวะเพลงร็อกสุดมันส์",
        longDesc: "รับบทเป็น Valkyrie ผู้ทรงพลัง ออกสำรวจดันเจี้ยนที่สุ่มขึ้นมาทุกครั้งที่เล่นเพื่อกำจัดเหล่าอสูรกายจากนรก จุดเด่นที่สุดคือทุกอย่างในเกมจะถูกขับเคลื่อนด้วยดนตรีสไตล์ Metal หากคุณยิงตรงจังหวะ ความเสียหายจะรุนแรงขึ้นและคอมโบจะต่อเนื่อง เป็นการผสมผสานระหว่างทักษะการเล็งและความรู้สึกด้านจังหวะดนตรีที่ท้าทายและดุเดือดครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1286350/BPM_BULLETS_PER_MINUTE/", type: "steam" },
            { name: "Official", url: "https://www.aweinteractive.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4590 / AMD FX 8350", ram: "8 GB", gpu: "NVIDIA GTX 960 / AMD Radeon R9 280", storage: "25 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7 / AMD Ryzen 7", ram: "16 GB", gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 580", storage: "25 GB" }
    },
    {
        id: 95,
        title: "BioShock Infinite",
        category: "Shooter",
        isFree: false,
        image: "images/97.jpg",
        shortDesc: "ออกเดินทางสู่เมืองลอยฟ้า Columbia ในบทบาทของ Booker DeWitt เพื่อช่วยเหลือหญิงสาวปริศนานามว่า Elizabeth",
        longDesc: "เรื่องราวเกิดขึ้นในปี ค.ศ. 1912 คุณจะได้รับภารกิจให้ไปพาตัว Elizabeth หญิงสาวที่ถูกกักขังไว้ในเมืองลอยฟ้าที่ดูสวยงามแต่แฝงไปด้วยความขัดแย้งทางการเมืองและความเชื่อสุดโต่ง ตัวเกมผสมผสานการยิงปืนเข้ากับพลังพิเศษ (Vigors) และการเคลื่อนที่ผ่านรางเลื่อน (Sky-Lines) ที่รวดเร็ว พร้อมบทสรุปที่ขึ้นชื่อว่าหักมุมและตราตรึงใจที่สุดเกมหนึ่งในประวัติศาสตร์ครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/8870/BioShock_Infinite/", type: "steam" },
            { name: "Epic Games", url: "https://store.epicgames.com/th/p/bioshock-infinite-the-complete-edition", type: "epic" },
            { name: "Official", url: "https://2k.com/en-US/game/bioshock-infinite/", type: "official" }
        ],
        min: { os: "Windows 7 Service Pack 1 64-bit", cpu: "Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz", ram: "2 GB", gpu: "DirectX 11 Compatible (ATI Radeon HD 3870 / NVIDIA 8800 GT)", storage: "20 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Quad Core Processor", ram: "4 GB", gpu: "AMD Radeon HD 6950 / NVIDIA GeForce GTX 560", storage: "30 GB" }
    },
    {
        id: 96,
        title: "Hunt: Showdown 1896",
        category: "Shooter",
        isFree: false,
        image: "images/98.jpg",
        shortDesc: "ออกล่าอสูรกายและเผชิญหน้ากับนักล่าคนอื่นในสมรภูมิยุค 1896 ที่เต็มไปด้วยอันตรายและความกดดัน",
        longDesc: "สัมผัสประสบการณ์เกมยิงมุมมองบุคคลที่สามที่เน้นความตึงเครียด คุณต้องออกตามรอยบอสอสูรกายในหนองน้ำอันกว้างใหญ่เพื่อรับเงินรางวัล แต่ความท้าทายที่แท้จริงคือนักล่าคนอื่นๆ ที่จ้องจะแย่งชิงรางวัลจากคุณ ตัวเกมโดดเด่นด้วยระบบเสียงที่สมจริงมาก ทุกฝีเท้าและการกระทำของคุณอาจเผยตำแหน่งให้ศัตรูรู้ การอัปเกรดเป็นเวอร์ชัน 1896 มาพร้อมกับเอนจิ้นกราฟิกใหม่และแผนที่ที่ละเอียดกว่าเดิมครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/594650/Hunt_Showdown_1896/", type: "steam" },
            { name: "Official", url: "https://www.huntshowdown.com/", type: "official" }
        ],
        min: { os: "Windows 10 64-bit", cpu: "Intel Core i5-6600K / AMD Ryzen 5 1600", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1650 Super / AMD Radeon RX 590", storage: "60 GB (SSD Required)" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Intel Core i7-8700K / AMD Ryzen 7 2700X", ram: "16 GB", gpu: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT", storage: "60 GB (SSD Required)" }
    },
    {
        id: 97,
        title: "Halo Infinite",
        category: "Shooter",
        isFree: false,
        image: "images/99.jpg",
        shortDesc: "สวมชุดเกราะของ Master Chief ออกสำรวจวงแหวน Halo ที่กว้างใหญ่เพื่อเผชิญหน้ากับศัตรูที่โหดเหี้ยมที่สุด",
        longDesc: "เมื่อความหวังทั้งหมดสูญสิ้นและชะตากรรมของมนุษยชาติแขวนอยู่บนเส้นด้าย Master Chief พร้อมที่จะเผชิญหน้ากับศัตรูที่ไร้ความปรานีที่สุดเท่าที่เขาเคยเจอมา ภาคนี้โดดเด่นด้วยการให้อิสระในการสำรวจโลกกว้างบน Zeta Halo และอุปกรณ์ใหม่อย่าง Grappleshot ที่ช่วยให้การเคลื่อนที่และการต่อสู้มีความพริ้วไหวและสนุกเร้าใจยิ่งขึ้นครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/1240440/Halo_Infinite/", type: "steam" },
            { name: "Official", url: "https://www.halowaypoint.com/games/halo-infinite", type: "official" }
        ],
        min: { os: "Windows 10 RS5 64-bit", cpu: "AMD Ryzen 5 1600 / Intel i5-4440", ram: "8 GB", gpu: "AMD RX 570 / Nvidia GTX 1050 Ti", storage: "50 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "AMD Ryzen 7 3700X / Intel i7-9700k", ram: "16 GB", gpu: "Radeon RX 5700 XT / Nvidia RTX 2070", storage: "50 GB" }
    },
    {
        id: 98,
        title: "Straftat",
        category: "Shooter",
        isFree: false,
        image: "images/100.jpg",
        shortDesc: "เกมยิงดวลปืนแบบ 1v1 ที่รวดเร็วและรุนแรง มาพร้อมกับแผนที่มากกว่า 70 แบบและสไตล์งานภาพสุดจัดจ้าน",
        longDesc: "สัมผัสประสบการณ์การดวลปืนที่ตัดสินกันในเสี้ยววินาที Straftat เน้นการเล่นที่เรียบง่ายแต่ดุดัน คุณจะถูกส่งเข้าไปในแผนที่ขนาดเล็กที่ถูกออกแบบมาอย่างมีเอกลักษณ์พร้อมกับอาวุธที่หลากหลาย เกมนี้เน้นไปที่ทักษะการเคลื่อนที่และการยิงที่แม่นยำ เหมาะสำหรับคนที่ชอบความตื่นเต้นในระยะเวลาสั้นๆ และต้องการท้าทายฝีมือกับผู้เล่นคนอื่นแบบตัวต่อตัวครับ",
        stores: [
            { name: "Steam", url: "https://store.steampowered.com/app/2266780/Straftat/", type: "steam" }
        ],
        min: { os: "Windows 10", cpu: "Dual Core 2.4 GHz", ram: "4 GB", gpu: "NVIDIA GeForce GTX 960", storage: "5 GB" },
        rec: { os: "Windows 10 / 11 64-bit", cpu: "Quad Core 3.0 GHz", ram: "8 GB", gpu: "NVIDIA GeForce GTX 1060", storage: "5 GB" }
    },
];

















function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

let currentPage = 1;
const gamesPerPage = 15;

let filteredGames = shuffle([...gamesData]); 

function renderGames() {
    const gameGrid = document.getElementById('gameGrid');
    if (!gameGrid) return;
    gameGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const paginatedGames = filteredGames.slice(startIndex, endIndex);

    paginatedGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => openModal(game);
        
        const priceTag = game.isFree ? 
            '<span class="badge" style="background:#4caf50; color:#fff;">FREE TO PLAY</span>' : 
            `<span class="badge">${game.category}</span>`;

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="card-img">
            <div class="card-content">
                ${priceTag}
                <h3 class="card-title">${game.title}</h3>
                <p class="card-short-desc">${game.shortDesc}</p>
                <button class="btn-card">ดูรายละเอียด</button>
            </div>
        `;
        gameGrid.appendChild(card);
    });

    updatePagination();
}

function updatePagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    if (!pageNumbers) return;
    pageNumbers.innerHTML = '';

    const paginationBar = document.querySelector('.pagination');
    if (paginationBar) {
        paginationBar.style.display = totalPages <= 1 ? 'none' : 'flex';
    }

    const range = 1; 

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - range && i <= currentPage + range)) {
            
            if (i === totalPages && currentPage < totalPages - range - 1) {
                const dots = document.createElement('span');
                dots.innerText = '•••';
                dots.className = 'page-dots';
                pageNumbers.appendChild(dots);
            }

            const pageSpan = document.createElement('span');
            pageSpan.innerText = i;
            pageSpan.className = `page-num ${i === currentPage ? 'active' : ''}`;
            pageSpan.onclick = () => {
                currentPage = i;
                renderGames();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            if (i === 1 && currentPage > range + 2) {
                pageNumbers.appendChild(pageSpan);
                const dots = document.createElement('span');
                dots.innerText = '•••';
                dots.className = 'page-dots';
                pageNumbers.appendChild(dots);
                continue;
            }
            pageNumbers.appendChild(pageSpan);
        }
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = (currentPage === 1);
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderGames();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    }

    if (nextBtn) {
        nextBtn.disabled = (currentPage === totalPages || totalPages === 0);
        nextBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderGames();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    }
}

function filterGames(category) {

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    currentPage = 1;

    if (category === 'all') {
        filteredGames = shuffle([...gamesData]); 
    } else if (category === 'Free') {
        filteredGames = shuffle(gamesData.filter(g => g.isFree));
    } else {
        filteredGames = shuffle(gamesData.filter(g => 
            g.category === category || (category === 'FPS' && g.category === 'Action')
        ));
    }

    renderGames();
}


document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();

    filteredGames = gamesData.filter(g => g.title.toLowerCase().includes(term));
    currentPage = 1;
    renderGames();
});

const modal = document.getElementById('specModal');

function generateSpecHTML(specs) {
    return `
        <div class="spec-row"><span class="spec-key">OS</span> <span class="spec-val">${specs.os}</span></div>
        <div class="spec-row"><span class="spec-key">CPU</span> <span class="spec-val">${specs.cpu}</span></div>
        <div class="spec-row"><span class="spec-key">RAM</span> <span class="spec-val">${specs.ram}</span></div>
        <div class="spec-row"><span class="spec-key">GPU</span> <span class="spec-val">${specs.gpu}</span></div>
        <div class="spec-row"><span class="spec-key">Storage</span> <span class="spec-val">${specs.storage}</span></div>
    `;
}

function openModal(game) {
    document.getElementById('modalTitle').innerText = game.title;
    document.getElementById('modalDesc').innerText = game.longDesc;
    
    const storeContainer = document.getElementById('modalStores');
    storeContainer.innerHTML = '';
    game.stores.forEach(store => {
        const btn = document.createElement('a');
        btn.href = store.url;
        btn.target = "_blank";
        btn.className = `store-btn ${store.type}`;
        
        let icon = 'fa-gamepad';
        if(store.type === 'steam') icon = 'fa-steam';
        if(store.type === 'epic') icon = 'fa-solid fa-basket-shopping';
        if(store.type === 'official') icon = 'fa-solid fa-tag';
        
        btn.innerHTML = `<i class="fab ${icon}"></i> ${store.name}`;
        storeContainer.appendChild(btn);
    });

    document.getElementById('minSpecs').innerHTML = generateSpecHTML(game.min);
    document.getElementById('recSpecs').innerHTML = generateSpecHTML(game.rec);
    
    let shopSection = document.getElementById('pcShopSection');
    if (!shopSection) {
        shopSection = document.createElement('div');
        shopSection.id = 'pcShopSection';
        document.querySelector('.modal-body').appendChild(shopSection);
    }
    
    shopSection.innerHTML = `
        <div class="section-title" style="margin-top: 30px;">
            <i class="fas fa-microchip"></i> แนะนำแหล่งจัดสเปค / ซื้อคอมพิวเตอร์
        </div>
        <div class="store-links">
            <a href="https://www.ihavecpu.com/" target="_blank" class="store-btn pc-shop">
                <i class="fas fa-desktop"></i> I HAVE CPU
            </a>
            <a href="https://www.advice.co.th/" target="_blank" class="store-btn pc-shop1">
                <i class="fas fa-store"></i> Advice
            </a>
            <a href="https://www.jib.co.th/web/" target="_blank" class="store-btn pc-shop2">
                <i class="fa-solid fa-cart-shopping"></i> JIB
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

const bttBtn = document.getElementById('backToTop');
if (bttBtn) {
    bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
let currentSlide = 0;
let autoSlideInterval;

function updateSlidePosition() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.carousel-item');
    
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });

    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    startAutoSlide();
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveSlide(1), 5000);
}

window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});
renderGames();

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dotContainer = document.getElementById('carouselDots');

    const featuredGames = shuffle([...gamesData]).slice(0, 5);

    track.innerHTML = '';
    dotContainer.innerHTML = '';

featuredGames.forEach((game, index) => {

    const slide = document.createElement('div');
    slide.className = 'carousel-item';
    slide.onclick = () => openModal(game); 


    slide.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="carousel-caption">
            <h2>${game.title}</h2>
            <p>${game.shortDesc}</p>
        </div>
    `;
    track.appendChild(slide);


    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = (e) => {
        e.stopPropagation();
        goToSlide(index);
    };
    dotContainer.appendChild(dot);
});


    document.getElementById('nextSlide').onclick = (e) => { e.stopPropagation(); moveSlide(1); };
    document.getElementById('prevSlide').onclick = (e) => { e.stopPropagation(); moveSlide(-1); };

    startAutoSlide();
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    updateSlidePosition();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlidePosition();
}

function updateSlidePosition() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.carousel-item');

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });

    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    startAutoSlide();
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveSlide(1), 4000);
}


window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});
