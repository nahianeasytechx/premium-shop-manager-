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
    "shopNumber": "SH-001",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-4\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 2,
    "shopNumber": "SH-002",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-7\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 3,
    "shopNumber": "SH-003",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 4,
    "shopNumber": "SH-004",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 5,
    "shopNumber": "SH-005",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-8\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 6,
    "shopNumber": "SH-006",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-9\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 7,
    "shopNumber": "SH-007",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-2\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 8,
    "shopNumber": "SH-008",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-1\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 9,
    "shopNumber": "SH-009",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-10\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 10,
    "shopNumber": "SH-010",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 11,
    "shopNumber": "SH-011",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 12,
    "shopNumber": "SH-012",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 13,
    "shopNumber": "SH-013",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 13'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 14,
    "shopNumber": "SH-014",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 13'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 15,
    "shopNumber": "SH-015",
    "floor": 0,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 16,
    "shopNumber": "SH-016",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 17,
    "shopNumber": "SH-017",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 18,
    "shopNumber": "SH-018",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 19,
    "shopNumber": "SH-019",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 20,
    "shopNumber": "SH-020",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 21,
    "shopNumber": "SH-021",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 22,
    "shopNumber": "SH-022",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 23,
    "shopNumber": "SH-023",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-2\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 24,
    "shopNumber": "SH-024",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 25,
    "shopNumber": "SH-025",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 26,
    "shopNumber": "SH-026",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 27,
    "shopNumber": "SH-027",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 28,
    "shopNumber": "SH-028",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 29,
    "shopNumber": "SH-029",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-4\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 30,
    "shopNumber": "SH-030",
    "floor": 0,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 31,
    "shopNumber": "SH-031",
    "floor": 0,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 32,
    "shopNumber": "SH-032",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-4\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 33,
    "shopNumber": "SH-033",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 34,
    "shopNumber": "SH-034",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 35,
    "shopNumber": "SH-035",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 36,
    "shopNumber": "SH-036",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 37,
    "shopNumber": "SH-037",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 38,
    "shopNumber": "SH-038",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-2\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 39,
    "shopNumber": "SH-039",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 40,
    "shopNumber": "SH-040",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 41,
    "shopNumber": "SH-041",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 42,
    "shopNumber": "SH-042",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 43,
    "shopNumber": "SH-043",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 44,
    "shopNumber": "SH-044",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 45,
    "shopNumber": "SH-045",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 46,
    "shopNumber": "SH-046",
    "floor": 0,
    "category": "Retail",
    "sqft": "19'-8\" x 11'-8\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 47,
    "shopNumber": "SH-047",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 48,
    "shopNumber": "SH-048",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 49,
    "shopNumber": "SH-049",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 50,
    "shopNumber": "SH-050",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 51,
    "shopNumber": "SH-051",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 52,
    "shopNumber": "SH-052",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 53,
    "shopNumber": "SH-053",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 54,
    "shopNumber": "SH-054",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-2\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 55,
    "shopNumber": "SH-055",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 56,
    "shopNumber": "SH-056",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 57,
    "shopNumber": "SH-057",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 58,
    "shopNumber": "SH-058",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 59,
    "shopNumber": "SH-059",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 60,
    "shopNumber": "SH-060",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-4\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 61,
    "shopNumber": "SH-061",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 62,
    "shopNumber": "SH-062",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 63,
    "shopNumber": "SH-063",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 64,
    "shopNumber": "SH-064",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 65,
    "shopNumber": "SH-065",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 66,
    "shopNumber": "SH-066",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 67,
    "shopNumber": "SH-067",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-2\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 68,
    "shopNumber": "SH-068",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-1\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 69,
    "shopNumber": "SH-069",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 70,
    "shopNumber": "SH-070",
    "floor": 0,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 71,
    "shopNumber": "SH-071",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 72,
    "shopNumber": "SH-072",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 73,
    "shopNumber": "SH-073",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 74,
    "shopNumber": "SH-074",
    "floor": 0,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 75,
    "shopNumber": "SH-075",
    "floor": 0,
    "category": "Retail",
    "sqft": "14'-1\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 76,
    "shopNumber": "SH-076",
    "floor": 0,
    "category": "Retail",
    "sqft": "14'-1\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 77,
    "shopNumber": "SH-077",
    "floor": 0,
    "category": "Retail",
    "sqft": "12'-1\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 78,
    "shopNumber": "SH-078",
    "floor": 0,
    "category": "Retail",
    "sqft": "12'-1\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 79,
    "shopNumber": "SH-079",
    "floor": 0,
    "category": "Retail",
    "sqft": "12'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 80,
    "shopNumber": "SH-080",
    "floor": 0,
    "category": "Retail",
    "sqft": "16'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 81,
    "shopNumber": "SH-081",
    "floor": 0,
    "category": "Retail",
    "sqft": "12'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 82,
    "shopNumber": "SH-082",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-3\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 83,
    "shopNumber": "SH-083",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 84,
    "shopNumber": "SH-084",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 85,
    "shopNumber": "SH-085",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 86,
    "shopNumber": "SH-086",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-1\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 87,
    "shopNumber": "SH-087",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 88,
    "shopNumber": "SH-088",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-1\" x 17'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 89,
    "shopNumber": "SH-089",
    "floor": 0,
    "category": "Retail",
    "sqft": "11'-0\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 90,
    "shopNumber": "SH-090",
    "floor": 0,
    "category": "Retail",
    "sqft": "13'-10\" x 17'-3\"",
    "status": "available",
    "price": 45000
  },
  // Ground Floor end 

  // First Floor Start 
  
  {
    "id": 91,
    "shopNumber": "SH-101",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-2\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 92,
    "shopNumber": "SH-102",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 93,
    "shopNumber": "SH-103",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 94,
    "shopNumber": "SH-104",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-4\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 95,
    "shopNumber": "SH-105",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 96,
    "shopNumber": "SH-106",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 97,
    "shopNumber": "SH-107",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 98,
    "shopNumber": "SH-108",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 99,
    "shopNumber": "SH-109",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 100,
    "shopNumber": "SH-110",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-2\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 101,
    "shopNumber": "SH-111",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-1\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 102,
    "shopNumber": "SH-112",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 103,
    "shopNumber": "SH-113",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 104,
    "shopNumber": "SH-114",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 105,
    "shopNumber": "SH-115",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 106,
    "shopNumber": "SH-116",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 107,
    "shopNumber": "SH-117",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 108,
    "shopNumber": "SH-122",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 109,
    "shopNumber": "SH-123",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 110,
    "shopNumber": "SH-124",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 111,
    "shopNumber": "SH-125",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 112,
    "shopNumber": "SH-126",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 113,
    "shopNumber": "SH-127",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 114,
    "shopNumber": "SH-128",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 115,
    "shopNumber": "SH-130",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 116,
    "shopNumber": "SH-132",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 117,
    "shopNumber": "SH-133",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 118,
    "shopNumber": "SH-134",
    "floor": 1,
    "category": "Retail",
    "sqft": "22'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 119,
    "shopNumber": "SH-135",
    "floor": 1,
    "category": "Retail",
    "sqft": "22'-0\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 120,
    "shopNumber": "SH-136",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 121,
    "shopNumber": "SH-141",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 122,
    "shopNumber": "SH-144",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 123,
    "shopNumber": "SH-145",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 124,
    "shopNumber": "SH-146",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 125,
    "shopNumber": "SH-147",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 126,
    "shopNumber": "SH-148",
    "floor": 1,
    "category": "Retail",
    "sqft": "19'-6\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 127,
    "shopNumber": "SH-149",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 128,
    "shopNumber": "SH-150",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 129,
    "shopNumber": "SH-151",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 130,
    "shopNumber": "SH-152",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 131,
    "shopNumber": "SH-153",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 132,
    "shopNumber": "SH-154",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 133,
    "shopNumber": "SH-155",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 134,
    "shopNumber": "SH-157",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 135,
    "shopNumber": "SH-158",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 136,
    "shopNumber": "SH-159",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 137,
    "shopNumber": "SH-160",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 138,
    "shopNumber": "SH-161",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 139,
    "shopNumber": "SH-162",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 140,
    "shopNumber": "SH-163",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 141,
    "shopNumber": "SH-164",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 142,
    "shopNumber": "SH-166",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 143,
    "shopNumber": "SH-167",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 144,
    "shopNumber": "SH-168",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 145,
    "shopNumber": "SH-169",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 146,
    "shopNumber": "SH-170",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-6\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 147,
    "shopNumber": "SH-171",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 148,
    "shopNumber": "SH-172",
    "floor": 1,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 149,
    "shopNumber": "SH-173",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 150,
    "shopNumber": "SH-174",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 151,
    "shopNumber": "SH-175",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 152,
    "shopNumber": "SH-176",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 153,
    "shopNumber": "SH-177",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 154,
    "shopNumber": "SH-178",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 155,
    "shopNumber": "SH-179",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 156,
    "shopNumber": "SH-180",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 157,
    "shopNumber": "SH-181",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 158,
    "shopNumber": "SH-182",
    "floor": 1,
    "category": "Retail",
    "sqft": "14'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 159,
    "shopNumber": "SH-183",
    "floor": 1,
    "category": "Retail",
    "sqft": "14'-3\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 160,
    "shopNumber": "SH-184",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-3\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 161,
    "shopNumber": "SH-185",
    "floor": 1,
    "category": "Retail",
    "sqft": "11'-4\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 162,
    "shopNumber": "SH-186",
    "floor": 1,
    "category": "Retail",
    "sqft": "10'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 163,
    "shopNumber": "SH-187",
    "floor": 1,
    "category": "booked",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 164,
    "shopNumber": "SH-188",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 165,
    "shopNumber": "SH-189",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 166,
    "shopNumber": "SH-190",
    "floor": 1,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 167,
    "shopNumber": "SH-191",
    "floor": 1,
    "category": "Retail",
    "sqft": "14'-4\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },

  // 1st Floor end
  // 2nd Floor start
  
  {
    "id": 168,
    "shopNumber": "SH-201",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 169,
    "shopNumber": "SH-202",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 170,
    "shopNumber": "SH-203",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 171,
    "shopNumber": "SH-204",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-4\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 172,
    "shopNumber": "SH-205",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 173,
    "shopNumber": "SH-206",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 174,
    "shopNumber": "SH-207",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 175,
    "shopNumber": "SH-208",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 176,
    "shopNumber": "SH-209",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 177,
    "shopNumber": "SH-210",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 178,
    "shopNumber": "SH-211",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 179,
    "shopNumber": "SH-212",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-8\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 180,
    "shopNumber": "SH-213",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-2\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 181,
    "shopNumber": "SH-214",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-6\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 182,
    "shopNumber": "SH-215",
    "floor": 2,
    "category": "Retail",
    "sqft": "8'-10\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 183,
    "shopNumber": "SH-216",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 184,
    "shopNumber": "SH-217",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 185,
    "shopNumber": "SH-218",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 14'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 186,
    "shopNumber": "SH-219",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 187,
    "shopNumber": "SH-220",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 188,
    "shopNumber": "SH-221",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 189,
    "shopNumber": "SH-222",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 190,
    "shopNumber": "SH-223",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 191,
    "shopNumber": "SH-224",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 192,
    "shopNumber": "SH-225",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 193,
    "shopNumber": "SH-226",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 194,
    "shopNumber": "SH-227",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 195,
    "shopNumber": "SH-228",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 196,
    "shopNumber": "SH-229",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 197,
    "shopNumber": "SH-230",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 198,
    "shopNumber": "SH-231",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 199,
    "shopNumber": "SH-232",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 200,
    "shopNumber": "SH-233",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 201,
    "shopNumber": "SH-234",
    "floor": 2,
    "category": "Retail",
    "sqft": "19'-6\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 202,
    "shopNumber": "SH-235",
    "floor": 2,
    "category": "Retail",
    "sqft": "19'-8\" x 12'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 203,
    "shopNumber": "SH-236",
    "floor": 2,
    "category": "Retail",
    "sqft": "19'-8\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 204,
    "shopNumber": "SH-237",
    "floor": 2,
    "category": "Retail",
    "sqft": "19'-6\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 205,
    "shopNumber": "SH-238",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 206,
    "shopNumber": "SH-239",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 207,
    "shopNumber": "SH-240",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 208,
    "shopNumber": "SH-241",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 209,
    "shopNumber": "SH-242",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 210,
    "shopNumber": "SH-243",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 211,
    "shopNumber": "SH-244",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 212,
    "shopNumber": "SH-245",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 213,
    "shopNumber": "SH-246",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 214,
    "shopNumber": "SH-247",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 215,
    "shopNumber": "SH-248",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 216,
    "shopNumber": "SH-249",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 217,
    "shopNumber": "SH-250",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-7\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 218,
    "shopNumber": "SH-251",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 219,
    "shopNumber": "SH-252",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 220,
    "shopNumber": "SH-253",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 221,
    "shopNumber": "SH-254",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-9\" x 12'-7\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 222,
    "shopNumber": "SH-255",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 223,
    "shopNumber": "SH-256",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-8\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 224,
    "shopNumber": "SH-257",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 225,
    "shopNumber": "SH-258",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 226,
    "shopNumber": "SH-259",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 227,
    "shopNumber": "SH-260",
    "floor": 2,
    "category": "Retail",
    "sqft": "9'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 228,
    "shopNumber": "SH-261",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 229,
    "shopNumber": "SH-262",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-10\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 230,
    "shopNumber": "SH-263",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-6\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 231,
    "shopNumber": "SH-264",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-6\" x 12'-7\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 232,
    "shopNumber": "SH-265",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 233,
    "shopNumber": "SH-266",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 234,
    "shopNumber": "SH-267",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 235,
    "shopNumber": "SH-268",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 236,
    "shopNumber": "SH-269",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 237,
    "shopNumber": "SH-270",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 238,
    "shopNumber": "SH-271",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-7\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 239,
    "shopNumber": "SH-272",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-0\" x 12'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 240,
    "shopNumber": "SH-273",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 241,
    "shopNumber": "SH-274",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-3\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 242,
    "shopNumber": "SH-275",
    "floor": 2,
    "category": "Retail",
    "sqft": "10'-0\" x 12'-3\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 243,
    "shopNumber": "SH-276",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-3\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 244,
    "shopNumber": "SH-277",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-3\" x 24'-5\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 245,
    "shopNumber": "SH-278",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-4\" x 24'-5\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 246,
    "shopNumber": "SH-279",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-0\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 247,
    "shopNumber": "SH-280",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-0\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 248,
    "shopNumber": "SH-281",
    "floor": 2,
    "category": "Retail",
    "sqft": "12'-0\" x 12'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 249,
    "shopNumber": "SH-282",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-4\" x 12'-2\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 250,
    "shopNumber": "SH-283",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-3\" x 12'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 251,
    "shopNumber": "SH-284",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-3\" x 12'-2\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 252,
    "shopNumber": "SH-285",
    "floor": 2,
    "category": "Retail",
    "sqft": "14'-0\" x 12'-2\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 253,
    "shopNumber": "SH-286",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 254,
    "shopNumber": "SH-287",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 255,
    "shopNumber": "SH-288",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 256,
    "shopNumber": "SH-289",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 257,
    "shopNumber": "SH-290",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 258,
    "shopNumber": "SH-291",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 259,
    "shopNumber": "SH-292",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 260,
    "shopNumber": "SH-293",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "booked",
    "price": 45000
  },
  {
    "id": 261,
    "shopNumber": "SH-294",
    "floor": 2,
    "category": "Retail",
    "sqft": "11'-0\" x 21'-4\"",
    "status": "available",
    "price": 45000
  },
  {
    "id": 262,
    "shopNumber": "SH-295",
    "floor": 2,
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

export const categories = ['Retail', 'Food', 'Service'];
export const floors = [0, 1, 2];
