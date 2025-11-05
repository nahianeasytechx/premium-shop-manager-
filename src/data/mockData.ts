export interface Shop {
  id: number;
  shopNumber: string;
  floor: number;
  category: string;
  sqft: string;
  status: 'available' | 'booked';
  price: number;
}

export interface Booking {
  id: number;
  shopId: number;
  name: string;
  profession: string;
  mobile: string;
  address: string;
  bookingMoney: number;
  date: string;
}

export const shops: Shop[] = [
  {
    "id": 1,
    "shopNumber": "SH-101",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-4\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 2,
    "shopNumber": "SH-102",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 3,
    "shopNumber": "SH-103",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 4,
    "shopNumber": "SH-104",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 5,
    "shopNumber": "SH-105",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-8\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 6,
    "shopNumber": "SH-106",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 7,
    "shopNumber": "SH-107",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-2\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 8,
    "shopNumber": "SH-108",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-1\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 9,
    "shopNumber": "SH-109",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 10,
    "shopNumber": "SH-110",
    "floor": 1,
    "category": "Food",
    "sqft": "9'-10\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 11,
    "shopNumber": "SH-111",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 12,
    "shopNumber": "SH-112",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 13,
    "shopNumber": "SH-113",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 14,
    "shopNumber": "SH-114",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 15,
    "shopNumber": "SH-115",
    "floor": 1,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 16,
    "shopNumber": "SH-116",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 17,
    "shopNumber": "SH-117",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 18,
    "shopNumber": "SH-118",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 19,
    "shopNumber": "SH-119",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 20,
    "shopNumber": "SH-120",
    "floor": 1,
    "category": "Food",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 21,
    "shopNumber": "SH-121",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 22,
    "shopNumber": "SH-122",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-1\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 23,
    "shopNumber": "SH-123",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-2\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 24,
    "shopNumber": "SH-124",
    "floor": 1,
    "category": "Food",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 25,
    "shopNumber": "SH-125",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 26,
    "shopNumber": "SH-126",
    "floor": 1,
    "category": "Food",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 27,
    "shopNumber": "SH-127",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 28,
    "shopNumber": "SH-128",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 29,
    "shopNumber": "SH-129",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-4\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 30,
    "shopNumber": "SH-130",
    "floor": 1,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 31,
    "shopNumber": "SH-131",
    "floor": 1,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 32,
    "shopNumber": "SH-132",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-4\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 33,
    "shopNumber": "SH-133",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 34,
    "shopNumber": "SH-134",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 35,
    "shopNumber": "SH-135",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 36,
    "shopNumber": "SH-136",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-8\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 37,
    "shopNumber": "SH-137",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 38,
    "shopNumber": "SH-138",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-2\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 39,
    "shopNumber": "SH-139",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 40,
    "shopNumber": "SH-140",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-10\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 41,
    "shopNumber": "SH-141",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 42,
    "shopNumber": "SH-142",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 43,
    "shopNumber": "SH-143",
    "floor": 1,
    "category": "Service",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 44,
    "shopNumber": "SH-144",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 45,
    "shopNumber": "SH-145",
    "floor": 1,
    "category": "Saloon",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 46,
    "shopNumber": "SH-146",
    "floor": 1,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 47,
    "shopNumber": "SH-147",
    "floor": 1,
    "category": "Saloon",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 48,
    "shopNumber": "SH-148",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 49,
    "shopNumber": "SH-149",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 50,
    "shopNumber": "SH-150",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 51,
    "shopNumber": "SH-151",
    "floor": 1,
    "category": "Saloon",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 52,
    "shopNumber": "SH-152",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 53,
    "shopNumber": "SH-153",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 54,
    "shopNumber": "SH-154",
    "floor": 1,
    "category": "Saloon",
    "sqft": "10'-2\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 55,
    "shopNumber": "SH-155",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 56,
    "shopNumber": "SH-156",
    "floor": 1,
    "category": "Saloon",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 57,
    "shopNumber": "SH-157",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 58,
    "shopNumber": "SH-158",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 59,
    "shopNumber": "SH-159",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 60,
    "shopNumber": "SH-160",
    "floor": 1,
    "category": "Saloon",
    "sqft": "10'-4\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 61,
    "shopNumber": "SH-161",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 62,
    "shopNumber": "SH-162",
    "floor": 1,
    "category": "Saloon",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 63,
    "shopNumber": "SH-163",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 64,
    "shopNumber": "SH-164",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 65,
    "shopNumber": "SH-165",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 66,
    "shopNumber": "SH-166",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 67,
    "shopNumber": "SH-167",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-2\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 68,
    "shopNumber": "SH-168",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 69,
    "shopNumber": "SH-169",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 70,
    "shopNumber": "SH-170",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 71,
    "shopNumber": "SH-171",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 72,
    "shopNumber": "SH-172",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 73,
    "shopNumber": "SH-173",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 74,
    "shopNumber": "SH-174",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 75,
    "shopNumber": "SH-175",
    "floor": 1,
    "category": "Retail",
    "sqft": "14'-1\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 76,
    "shopNumber": "SH-176",
    "floor": 1,
    "category": "Retail",
    "sqft": "14'-1\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 77,
    "shopNumber": "SH-177",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-1\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 78,
    "shopNumber": "SH-178",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-1\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 79,
    "shopNumber": "SH-179",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 80,
    "shopNumber": "SH-180",
    "floor": 1,
    "category": "Retail",
    "sqft": "16'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 81,
    "shopNumber": "SH-181",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 82,
    "shopNumber": "SH-182",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-3\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 83,
    "shopNumber": "SH-183",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 84,
    "shopNumber": "SH-184",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 85,
    "shopNumber": "SH-185",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 86,
    "shopNumber": "SH-186",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-1\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 87,
    "shopNumber": "SH-187",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 88,
    "shopNumber": "SH-188",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-1\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 89,
    "shopNumber": "SH-189",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 90,
    "shopNumber": "SH-190",
    "floor": 1,
    "category": "Retail",
    "sqft": "13'-10\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  // Ground Floor end 

  // First Floor Start 
  
  {
    "id": 91,
    "shopNumber": "SH-201",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-2\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 92,
    "shopNumber": "SH-202",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 93,
    "shopNumber": "SH-203",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 94,
    "shopNumber": "SH-204",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-4\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 95,
    "shopNumber": "SH-205",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 96,
    "shopNumber": "SH-206",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 97,
    "shopNumber": "SH-207",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 98,
    "shopNumber": "SH-208",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 99,
    "shopNumber": "SH-209",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 100,
    "shopNumber": "SH-210",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-2\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 101,
    "shopNumber": "SH-211",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-1\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 102,
    "shopNumber": "SH-212",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 103,
    "shopNumber": "SH-213",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 104,
    "shopNumber": "SH-214",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 105,
    "shopNumber": "SH-215",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 106,
    "shopNumber": "SH-216",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 107,
    "shopNumber": "SH-217",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 108,
    "shopNumber": "SH-222",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 109,
    "shopNumber": "SH-223",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 110,
    "shopNumber": "SH-224",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 111,
    "shopNumber": "SH-225",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 112,
    "shopNumber": "SH-226",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 113,
    "shopNumber": "SH-227",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 114,
    "shopNumber": "SH-228",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 115,
    "shopNumber": "SH-230",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 116,
    "shopNumber": "SH-232",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 117,
    "shopNumber": "SH-233",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 118,
    "shopNumber": "SH-234",
    "floor": 2,
    "category": "Retail",
    "sqft": "22'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 119,
    "shopNumber": "SH-235",
    "floor": 2,
    "category": "Retail",
    "sqft": "22'-0\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 120,
    "shopNumber": "SH-236",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 121,
    "shopNumber": "SH-241",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 122,
    "shopNumber": "SH-244",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 123,
    "shopNumber": "SH-245",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 124,
    "shopNumber": "SH-246",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 125,
    "shopNumber": "SH-247",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 126,
    "shopNumber": "SH-248",
    "floor": 2,
    "category": "Retail",
    "sqft": "19'-6\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 127,
    "shopNumber": "SH-249",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 128,
    "shopNumber": "SH-250",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 129,
    "shopNumber": "SH-251",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 130,
    "shopNumber": "SH-252",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 131,
    "shopNumber": "SH-253",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 132,
    "shopNumber": "SH-254",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 133,
    "shopNumber": "SH-255",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 134,
    "shopNumber": "SH-257",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 135,
    "shopNumber": "SH-258",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 136,
    "shopNumber": "SH-259",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 137,
    "shopNumber": "SH-260",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 138,
    "shopNumber": "SH-261",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 139,
    "shopNumber": "SH-262",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 140,
    "shopNumber": "SH-263",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 141,
    "shopNumber": "SH-264",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 142,
    "shopNumber": "SH-266",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 143,
    "shopNumber": "SH-267",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 144,
    "shopNumber": "SH-268",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 145,
    "shopNumber": "SH-269",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 146,
    "shopNumber": "SH-270",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-6\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 147,
    "shopNumber": "SH-271",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 148,
    "shopNumber": "SH-272",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 149,
    "shopNumber": "SH-273",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 150,
    "shopNumber": "SH-274",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 151,
    "shopNumber": "SH-275",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 152,
    "shopNumber": "SH-276",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 153,
    "shopNumber": "SH-277",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 154,
    "shopNumber": "SH-278",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 155,
    "shopNumber": "SH-279",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 156,
    "shopNumber": "SH-280",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 157,
    "shopNumber": "SH-281",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 158,
    "shopNumber": "SH-282",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 159,
    "shopNumber": "SH-283",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-3\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 160,
    "shopNumber": "SH-284",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-3\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 161,
    "shopNumber": "SH-285",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-4\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 162,
    "shopNumber": "SH-286",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 163,
    "shopNumber": "SH-287",
    "floor": 2,
    "category": "booked",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 164,
    "shopNumber": "SH-288",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 165,
    "shopNumber": "SH-289",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 166,
    "shopNumber": "SH-290",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 167,
    "shopNumber": "SH-291",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-4\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },

  // 1st Floor end
  // 2nd Floor start
  
  {
    "id": 168,
    "shopNumber": "SH-301",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 169,
    "shopNumber": "SH-302",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 170,
    "shopNumber": "SH-303",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 171,
    "shopNumber": "SH-304",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-4\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 172,
    "shopNumber": "SH-305",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 173,
    "shopNumber": "SH-306",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 174,
    "shopNumber": "SH-307",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 175,
    "shopNumber": "SH-308",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 176,
    "shopNumber": "SH-309",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 177,
    "shopNumber": "SH-310",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 178,
    "shopNumber": "SH-311",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 179,
    "shopNumber": "SH-312",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 180,
    "shopNumber": "SH-313",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-2\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 181,
    "shopNumber": "SH-314",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-6\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 182,
    "shopNumber": "SH-315",
    "floor": 3,
    "category": "Retail",
    "sqft": "8'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 183,
    "shopNumber": "SH-316",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 184,
    "shopNumber": "SH-317",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 185,
    "shopNumber": "SH-318",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 186,
    "shopNumber": "SH-319",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 187,
    "shopNumber": "SH-320",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 188,
    "shopNumber": "SH-321",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 189,
    "shopNumber": "SH-322",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 190,
    "shopNumber": "SH-323",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 191,
    "shopNumber": "SH-324",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 192,
    "shopNumber": "SH-325",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 193,
    "shopNumber": "SH-326",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 194,
    "shopNumber": "SH-327",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 195,
    "shopNumber": "SH-328",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 196,
    "shopNumber": "SH-329",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 197,
    "shopNumber": "SH-330",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 198,
    "shopNumber": "SH-331",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 199,
    "shopNumber": "SH-332",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 200,
    "shopNumber": "SH-333",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 201,
    "shopNumber": "SH-334",
    "floor": 3,
    "category": "Retail",
    "sqft": "19'-6\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 202,
    "shopNumber": "SH-335",
    "floor": 3,
    "category": "Retail",
    "sqft": "19'-8\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 203,
    "shopNumber": "SH-336",
    "floor": 3,
    "category": "Retail",
    "sqft": "19'-8\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 204,
    "shopNumber": "SH-337",
    "floor": 3,
    "category": "Retail",
    "sqft": "19'-6\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 205,
    "shopNumber": "SH-338",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 206,
    "shopNumber": "SH-339",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 207,
    "shopNumber": "SH-340",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 208,
    "shopNumber": "SH-341",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 209,
    "shopNumber": "SH-342",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 210,
    "shopNumber": "SH-343",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 211,
    "shopNumber": "SH-344",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 212,
    "shopNumber": "SH-345",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 213,
    "shopNumber": "SH-346",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 214,
    "shopNumber": "SH-347",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 215,
    "shopNumber": "SH-348",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 216,
    "shopNumber": "SH-349",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 217,
    "shopNumber": "SH-350",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 218,
    "shopNumber": "SH-351",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 219,
    "shopNumber": "SH-352",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 220,
    "shopNumber": "SH-353",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 221,
    "shopNumber": "SH-354",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 222,
    "shopNumber": "SH-355",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 223,
    "shopNumber": "SH-356",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 224,
    "shopNumber": "SH-357",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 225,
    "shopNumber": "SH-358",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 226,
    "shopNumber": "SH-359",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 227,
    "shopNumber": "SH-360",
    "floor": 3,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 228,
    "shopNumber": "SH-361",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 229,
    "shopNumber": "SH-362",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 230,
    "shopNumber": "SH-363",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-6\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 231,
    "shopNumber": "SH-364",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-6\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 232,
    "shopNumber": "SH-365",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 233,
    "shopNumber": "SH-366",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 234,
    "shopNumber": "SH-367",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 235,
    "shopNumber": "SH-368",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 236,
    "shopNumber": "SH-369",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 237,
    "shopNumber": "SH-370",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 238,
    "shopNumber": "SH-371",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 239,
    "shopNumber": "SH-372",
    "floor": 3,
    "category": "Retail",
    "sqft": "14'-0\" x 12'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 240,
    "shopNumber": "SH-373",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 241,
    "shopNumber": "SH-374",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 242,
    "shopNumber": "SH-375",
    "floor": 3,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 243,
    "shopNumber": "SH-376",
    "floor": 3,
    "category": "Retail",
    "sqft": "14'-3\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 244,
    "shopNumber": "SH-377",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-3\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 245,
    "shopNumber": "SH-378",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-4\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 246,
    "shopNumber": "SH-379",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 247,
    "shopNumber": "SH-380",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 248,
    "shopNumber": "SH-381",
    "floor": 3,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 249,
    "shopNumber": "SH-382",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-4\" x 12'-2\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 250,
    "shopNumber": "SH-383",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-3\" x 12'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 251,
    "shopNumber": "SH-384",
    "floor": 3,
    "category": "Retail",
    "sqft": "14'-3\" x 12'-2\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 252,
    "shopNumber": "SH-385",
    "floor": 3,
    "category": "Retail",
    "sqft": "14'-0\" x 12'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 253,
    "shopNumber": "SH-386",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 254,
    "shopNumber": "SH-387",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 255,
    "shopNumber": "SH-388",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 256,
    "shopNumber": "SH-389",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 257,
    "shopNumber": "SH-390",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 258,
    "shopNumber": "SH-391",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 259,
    "shopNumber": "SH-392",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 260,
    "shopNumber": "SH-393",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 261,
    "shopNumber": "SH-394",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 262,
    "shopNumber": "SH-395",
    "floor": 3,
    "category": "Retail",
    "sqft": "11'-3\" x 21'-4\"",
    "status": "available",
    "price": 45000
  }


];

export const bookings: Booking[] = [
  {
    id: 1,
    shopId: 2,
    name: 'John Doe',
    profession: 'Restaurant Owner',
    mobile: '+1 234 567 8900',
    address: '123 Main St, New York',
    bookingMoney: 10000,
    date: '2025-10-15',
  },
  {
    id: 2,
    shopId: 5,
    name: 'Jane Smith',
    profession: 'Boutique Owner',
    mobile: '+1 234 567 8901',
    address: '456 Oak Ave, Los Angeles',
    bookingMoney: 12000,
    date: '2025-10-18',
  },
  {
    id: 3,
    shopId: 7,
    name: 'Mike Johnson',
    profession: 'Electronics Dealer',
    mobile: '+1 234 567 8902',
    address: '789 Pine Rd, Chicago',
    bookingMoney: 11000,
    date: '2025-10-20',
  },
  {
    id: 4,
    shopId: 10,
    name: 'Sarah Williams',
    profession: 'Cafe Owner',
    mobile: '+1 234 567 8903',
    address: '321 Elm St, Houston',
    bookingMoney: 15000,
    date: '2025-10-22',
  },
  {
    id: 5,
    shopId: 13,
    name: 'David Brown',
    profession: 'Clothing Store',
    mobile: '+1 234 567 8904',
    address: '654 Maple Dr, Phoenix',
    bookingMoney: 13000,
    date: '2025-10-25',
  },
];

export const categories = ['Retail', 'Food', 'Service','Saloon'];
export const floors = [1, 2, 3];
