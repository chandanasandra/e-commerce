export const orders = [
  {
    orderId: "ORD123456",
    customerId: "CUST001",
    customerName: "Amit Sharma",
    customerEmail: "amit.sharma@example.com",
    customerPhone: "+91 9876543210",
    shippingAddress: {
      addressLine1: "123 Green Valley Apartments",
      addressLine2: "Sector 22",
      city: "Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India"
    },
    billingAddress: {
      addressLine1: "123 Green Valley Apartments",
      addressLine2: "Sector 22",
      city: "Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India"
    },
    items: [
      {
        productId: "PROD001",
        title: "Men Printed Pure Cotton Straight Kurta",
        brand: "Majestic Man",
        size: "M",
        quantity: 2,
        unitPrice: 499,
        totalPrice: 998
      },
      {
        productId: "PROD002",
        title: "Men Embroidered Jacquard Straight Kurta",
        brand: "SG LEMAN",
        size: "L",
        quantity: 1,
        unitPrice: 799,
        totalPrice: 799
      }
    ],
    totalAmount: "₹1,797",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    orderDate: "2024-11-10T15:30:00Z",
    deliveryDate: "2024-11-14T18:00:00Z"
  },
  {
    orderId: "ORD123457",
    customerId: "CUST002",
    customerName: "Sneha Patil",
    customerEmail: "sneha.patil@example.com",
    customerPhone: "+91 7890123456",
    shippingAddress: {
      addressLine1: "45 Sunrise Villa",
      addressLine2: "Hinjewadi",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411057",
      country: "India"
    },
    billingAddress: {
      addressLine1: "10 Tech Boulevard",
      addressLine2: "Kothrud",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411038",
      country: "India"
    },
    items: [
      {
        productId: "PROD002",
        title: "Men Embroidered Jacquard Straight Kurta",
        brand: "SG LEMAN",
        size: "S",
        quantity: 3,
        unitPrice: 799,
        totalPrice: 2397
      }
    ],
    totalAmount: "₹2,397",
    paymentStatus: "Pending",
    orderStatus: "Processing",
    orderDate: "2024-11-11T12:15:00Z",
    deliveryDate: "2024-11-17T12:00:00Z"
  },
  {
    orderId: "ORD123458",
    customerId: "CUST003",
    customerName: "Rahul Verma",
    customerEmail: "rahul.verma@example.com",
    customerPhone: "+91 9988776655",
    shippingAddress: {
      addressLine1: "56 Galaxy Tower",
      addressLine2: "MG Road",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560001",
      country: "India"
    },
    billingAddress: {
      addressLine1: "101 Sky Apartments",
      addressLine2: "Whitefield",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560066",
      country: "India"
    },
    items: [
      {
        productId: "PROD001",
        title: "Men Printed Pure Cotton Straight Kurta",
        brand: "Majestic Man",
        size: "L",
        quantity: 1,
        unitPrice: 499,
        totalPrice: 499
      }
    ],
    totalAmount: "₹499",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    orderDate: "2024-11-08T10:45:00Z",
    deliveryDate: "2024-11-12T14:30:00Z"
  },
  {
    orderId: "ORD123459",
    customerId: "CUST004",
    customerName: "Meena Roy",
    customerEmail: "meena.roy@example.com",
    customerPhone: "+91 9123456789",
    shippingAddress: {
      addressLine1: "Flat 101, Harmony Apartments",
      addressLine2: "Salt Lake City",
      city: "Kolkata",
      state: "West Bengal",
      postalCode: "700091",
      country: "India"
    },
    billingAddress: {
      addressLine1: "Flat 101, Harmony Apartments",
      addressLine2: "Salt Lake City",
      city: "Kolkata",
      state: "West Bengal",
      postalCode: "700091",
      country: "India"
    },
    items: [
      {
        productId: "PROD002",
        title: "Men Embroidered Jacquard Straight Kurta",
        brand: "SG LEMAN",
        size: "M",
        quantity: 1,
        unitPrice: 799,
        totalPrice: 799
      }
    ],
    totalAmount: "₹799",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    orderDate: "2024-11-09T09:00:00Z",
    deliveryDate: "2024-11-13T18:00:00Z"
  },
  {
    orderId: "ORD123460",
    customerId: "CUST005",
    customerName: "Vishal Kumar",
    customerEmail: "vishal.kumar@example.com",
    customerPhone: "+91 8901234567",
    shippingAddress: {
      addressLine1: "12 Maple Lane",
      addressLine2: "Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560034",
      country: "India"
    },
    billingAddress: {
      addressLine1: "12 Maple Lane",
      addressLine2: "Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560034",
      country: "India"
    },
    items: [
      {
        productId: "PROD001",
        title: "Men Printed Pure Cotton Straight Kurta",
        brand: "Majestic Man",
        size: "L",
        quantity: 2,
        unitPrice: 499,
        totalPrice: 998
      }
    ],
    totalAmount: "₹998",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    orderDate: "2024-11-05T17:00:00Z",
    deliveryDate: "2024-11-10T15:00:00Z"
  },
  {
    orderId: "ORD123461",
    customerId: "CUST006",
    customerName: "Priya Singh",
    customerEmail: "priya.singh@example.com",
    customerPhone: "+91 8012345678",
    shippingAddress: {
      addressLine1: "12 Greenfield Park",
      addressLine2: "Viman Nagar",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411014",
      country: "India"
    },
    billingAddress: {
      addressLine1: "12 Greenfield Park",
      addressLine2: "Viman Nagar",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411014",
      country: "India"
    },
    items: [
      {
        productId: "PROD002",
        title: "Men Embroidered Jacquard Straight Kurta",
        brand: "SG LEMAN",
        size: "S",
        quantity: 1,
        unitPrice: 799,
        totalPrice: 799
      }
    ],
    totalAmount: "₹799",
    paymentStatus: "Pending",
    orderStatus: "Processing",
    orderDate: "2024-11-07T13:30:00Z",
    deliveryDate: "2024-11-12T18:30:00Z"
  },
  {
    orderId: "ORD123462",
    customerId: "CUST007",
    customerName: "Arjun Kapoor",
    customerEmail: "arjun.kapoor@example.com",
    customerPhone: "+91 7023456789",
    shippingAddress: {
      addressLine1: "25 Sunset Boulevard",
      addressLine2: "Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      postalCode: "500034",
      country: "India"
    },
    billingAddress: {
      addressLine1: "25 Sunset Boulevard",
      addressLine2: "Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      postalCode: "500034",
      country: "India"
    },
    items: [
      {
        productId: "PROD001",
        title: "Men Printed Pure Cotton Straight Kurta",
        brand: "Majestic Man",
        size: "M",
        quantity: 1,
        unitPrice: 499,
        totalPrice: 499
      }
    ],
    totalAmount: "₹499",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    orderDate: "2024-11-04T16:45:00Z",
    deliveryDate: "2024-11-09T14:15:00Z"
  },
  {
    orderId: "ORD123463",
    customerId: "CUST008",
    customerName: "Ritika Mehta",
    customerEmail: "ritika.mehta@example.com",
    customerPhone: "+91 8324567890",
    shippingAddress: {
      addressLine1: "8 Rose Garden",
      addressLine2: "Andheri West",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400058",
      country: "India"
    },
    billingAddress: {
      addressLine1: "8 Rose Garden",
      addressLine2: "Andheri West",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400058",
      country: "India"
    },
    items: [
      {
        productId: "PROD002",
        title: "Men Embroidered Jacquard Straight Kurta",
        brand: "SG LEMAN",
        size: "L",
        quantity: 2,
        unitPrice: 799,
        totalPrice: 1598
      }
    ],
    totalAmount: "₹1,598",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    orderDate: "2024-11-06T19:10:00Z",
    deliveryDate: "2024-11-11T13:00:00Z"
  },
  {
    orderId: "ORD123464",
    customerId: "CUST009",
    customerName: "Nikita Singh",
    customerEmail: "nikita.singh@example.com",
    customerPhone: "+91 7412589630",
    shippingAddress: {
      addressLine1: "11 Oakwood Avenue",
      addressLine2: "Kolkata",
      city: "Kolkata",
      state: "West Bengal",
      postalCode: "700045",
      country: "India"
    },
    billingAddress: {
      addressLine1: "11 Oakwood Avenue",
      addressLine2: "Kolkata",
      city: "Kolkata",
      state: "West Bengal",
      postalCode: "700045",
      country: "India"
    },
    items: [
      {
        productId: "PROD001",
        title: "Men Printed Pure Cotton Straight Kurta",
        brand: "Majestic Man",
        size: "M",
        quantity: 2,
        unitPrice: 499,
        totalPrice: 998
      }
    ],
    totalAmount: "₹998",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    orderDate: "2024-11-02T11:20:00Z",
    deliveryDate: "2024-11-08T15:00:00Z"
  }
];
