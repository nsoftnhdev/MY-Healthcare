export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "National Identity Card",
  "Military ID Card",
  "Passport",
  "Medical Insurance Card/Policy",
  "Driver's License",
  "Birth Certificate",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Banner",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Jane Foster",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Stephen",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Milius",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr. Shaw",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr. Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr. Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Tompkins",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};