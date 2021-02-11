const products = [
  {
    _id: 1,
    vendor: "Vendor 1",
    title: "Product One",
    images: ["/images/product1.jpeg", "/images/product1.jpeg"],
    price: "150.00",
    category: "Category One",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 2,
    vendor: "Vendor 2",
    title: "Product Two",
    images: ["/images/product2.jpeg"],
    price: "250.00",
    category: "Category Two",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 10,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 3,
    vendor: "Vendor 3",
    title: "Product Three",
    images: [
      "/images/product3.jpeg",
      "/images/product3.jpeg",
      "/images/product3.jpeg",
    ],
    price: "350.00",
    category: "Category Three",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 3,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 2,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 4,
    vendor: "Vendor 4",
    title: "Product Four",
    images: ["/images/product4.jpeg"],
    price: "450.00",
    category: "Category Four",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 5,
    vendor: "Vendor 5",
    title: "Product Five",
    images: ["/images/product5.jpeg", "/images/product5.jpeg"],
    price: "550.00",
    category: "Category Five",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
    ],
  },
  {
    _id: 6,
    vendor: "Vendor 6",
    title: "Product Six",
    images: [
      "/images/product6.jpeg",
      "/images/product6.jpeg",
      "/images/product6.jpeg",
      "/images/product6.jpeg",
    ],
    price: "350.00",
    category: "Category Six",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 7,
    vendor: "Vendor 7",
    title: "Product Seven",
    images: ["/images/product7.jpeg"],
    price: "250.00",
    category: "Category Seven",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 8,
    vendor: "Vendor 8",
    title: "Product Eight",
    images: ["/images/product8.jpeg"],
    price: "650.00",
    category: "Category Eight",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 9,
    vendor: "Vendor 9",
    title: "Product Nine",
    images: ["/images/product9.jpeg", "/images/product9.jpeg"],
    price: "450.00",
    category: "Category Nine",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 10,
    vendor: "Vendor 10",
    title: "Product Ten",
    images: ["/images/product10.jpeg", "/images/product10.jpeg"],
    price: "550.00",
    category: "Category Ten",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 11,
    vendor: "Vendor 11",
    title: "Product Eleven",
    images: [
      "/images/product11.jpeg",
      "/images/product11.jpeg",
      "/images/product11.jpeg",
    ],
    price: "1150.00",
    category: "Category Eleven",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
  {
    _id: 12,
    vendor: "Vendor 12",
    title: "Product Twelve",
    images: ["/images/product12.jpeg", "/images/product12.jpeg"],
    price: "850.00",
    category: "Category Twelve",
    description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
    specifications: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
      "Chemistry: Ni-CD",
      "Voltage: 12V",
      "AmpHours: 2000mAh",
      "Dimensions: 109.75x79.55x62.20mm",
      "4.5 inch HD Screen",
      "Android 4.4 KitKat OS",
      "1.4 GHz Quad Core™ Processor",
      "20 MP front Camera",
    ],
    quantityInStock: 5,
    reviews: [
      {
        body: "Great product",
        author: "John Doe",
        value: 5,
        date: "2020-04-23",
      },
      {
        body: "Gets the job done",
        author: "Jane Doe",
        value: 4,
        date: "2020-04-25",
      },
      {
        body: "Just perfect",
        author: "Jeff Bezos",
        value: 5,
        date: "2020-06-04",
      },
    ],
  },
];

export default products;
