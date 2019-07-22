const products = [
  {
    availableSizes: ["S", "XS"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "4 MSL",
    id: 12,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 12064273040195392,
    style: "Black with custom print",
    title: "Cat Tee Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
  },
  {
    availableSizes: ["M"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 13,
    installments: 5,
    isFreeShipping: true,
    price: 29.45,
    sku: 51498472915966370,
    style: "Front print and paisley print",
    title: "Dark Thug Blue-Navy T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
  },
  {
    availableSizes: ["X", "L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "GPX Poly 1",
    id: 14,
    installments: 3,
    isFreeShipping: true,
    price: 9,
    sku: 10686354557628304,
    style: "Front tie dye print",
    title: "Sphynx Tie Dye Wine T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"
  },
  {
    availableSizes: ["X", "L", "XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "Treino 2014",
    id: 15,
    installments: 5,
    isFreeShipping: true,
    price: 14,
    sku: 11033926921508488,
    style: "Black T-Shirt with front print",
    title: "Skuul",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg"
  },
  {
    availableSizes: ["X", "L"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 11,
    installments: 3,
    isFreeShipping: true,
    price: 13.25,
    sku: 39876704341265610,
    style: "Wine",
    title: "Wine Skul T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg"
  },
  {
    availableSizes: ["X", "L", "XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº",
    id: 0,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 8552515751438644,
    style: "Branco com listras pretas",
    title: "Cat Tee Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg"
  },
  {
    availableSizes: ["X", "L", "XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº",
    id: 1,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 18644119330491310,
    style: "Preta com listras brancas",
    title: "Sphynx Tie Dye Grey T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg"
  },
  {
    availableSizes: ["X", "L"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº",
    id: 2,
    installments: 7,
    isFreeShipping: true,
    price: 14.9,
    sku: 11854078013954528,
    style: "Branco com listras pretas",
    title: "Danger Knife Grey",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg"
  },
  {
    availableSizes: ["X", "L"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "2014 s/nº",
    id: 3,
    installments: 7,
    isFreeShipping: true,
    price: 14.9,
    sku: 876661122392077,
    style: "Preto com listras brancas",
    title: "White DGK Script Tee",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg"
  },
  {
    availableSizes: ["XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº - Jogador",
    id: 4,
    installments: 12,
    isFreeShipping: false,
    price: 25.9,
    sku: 9197907543445676,
    style: "Branco com listras pretas",
    title: "Born On The Streets",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg"
  },
  {
    availableSizes: ["X", "L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 + Camiseta 1º Mundial",
    id: 5,
    installments: 9,
    isFreeShipping: false,
    price: 10.9,
    sku: 10547961582846888,
    style: "Preto",
    title: "Tso 3D Short Sleeve T-Shirt A",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg"
  },
  {
    availableSizes: ["XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "Goleiro 13/14",
    id: 6,
    installments: 0,
    isFreeShipping: true,
    price: 49.9,
    sku: 6090484789343891,
    style: "Branco",
    title: "Man Tie Dye Cinza Grey T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg"
  },
  {
    availableSizes: ["S"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "1977 Infantil",
    id: 7,
    installments: 4,
    isFreeShipping: true,
    price: 22.5,
    sku: 18532669286405344,
    style: "Preto com listras brancas",
    title: "Crazy Monkey Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg"
  },
  {
    availableSizes: ["XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 8,
    installments: 4,
    isFreeShipping: false,
    price: 18.7,
    sku: 5619496040738316,
    style: "Azul escuro",
    title: "Tso 3D Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg"
  },
  {
    availableSizes: ["L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 9,
    installments: 5,
    isFreeShipping: true,
    price: 134.9,
    sku: 11600983276356164,
    style: "",
    title: "Crazy Monkey Grey",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg"
  },
  {
    availableSizes: ["L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 10,
    installments: 9,
    isFreeShipping: true,
    price: 49,
    sku: 27250082398145996,
    style: "",
    title: "On The Streets Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg"
  }
];

export default products;