import img from '../../public/images/patient/patient1.png'
const patientsData = [
  {
    category: "Nearest Patients",
    patients: [
      { 
        id: 1, 
        name: "Ahmed Abdelfattah", 
        doctor: "Dr. Shruti Kedia", 
        location: "Mansoura", 
        image:img 
      },
      { 
        id: 2, 
        name: "Fatma Hassan", 
        doctor: "Dr. Omar Adel", 
        location: "Cairo", 
        image: img
      },
      { 
        id: 3, 
        name: "Mohamed Ezz", 
        doctor: "Dr. Mariam Khaled", 
        location: "Alexandria", 
        image: img
      },
      { 
        id: 4, 
        name: "Yara Mostafa", 
        doctor: "Dr. Tamer Hosny", 
        location: "Giza", 
        image:img 
      },
    ],
  },
  {
    category: "All Patients",
    patients: [
      { 
        id: 5, 
        name: "Ali Mostafa", 
        doctor: "Dr. Amr Ibrahim", 
        location: "Zagazig", 
        image: img
      },
      { 
        id: 6, 
        name: "Salma Nabil", 
        doctor: "Dr. Dalia Hassan", 
        location: "Asyut", 
        image: img
      },
      { 
        id: 7, 
        name: "Eman Hassan", 
        doctor: "Dr. Youssef ", 
        location: "Port Said", 
        image: img
      },
      { 
        id: 8, 
        name: "Ziad Adel", 
        doctor: "Dr. Laila Omar", 
        location: "Suez", 
        image: img 
      },
      { 
        id: 9, 
        name: "Hassan Ayman", 
        doctor: "Dr. Ahmed Khaled", 
        location: "Ismailia", 
        image: img
      },
      { 
        id: 10, 
        name: "Lina Hossam", 
        doctor: "Dr. Rana Ahmed", 
        location: "Luxor", 
        image:img 
      },
      { 
        id: 11, 
        name: "Kareem Saeed", 
        doctor: "Dr. Nour Hisham", 
        location: "Fayoum", 
        image: img 
      },
      { 
        id: 12, 
        name: "Hana Sami", 
        doctor: "Dr. Samir Ali", 
        location: "Tanta", 
        image: img
      },
    ],
  },
]

export default patientsData
