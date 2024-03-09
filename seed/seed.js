import mongoose from 'mongoose';
// import socialModel from '../models/socialModel.js';
import socialModel from '../models/socialModel.js';
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const data = [
    {
        socialMedia: "email",
        accountName: "hmiff.unsyiah@gmail.com"
    }
    // {
    //     socialMedia: "instagram",
    //     accountName: "hmif.fmipausk",    
    //     socialMediaUrl: "https://www.instagram.com/hmif.fmipausk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        
    // },
    // {
    //     socialMedia: "linkedin",
    //     accountName: "Himpunan Mahasiswa Informatika Syiah Kuala",
    //     socialMediaUrl: "https://www.linkedin.com/company/himpunan-mahasiswa-informatika-universitas-syiah-kuala/mycompany/"
        
    // },
    // {
    //     socialMedia: "github",
    //     accountName: "Himpunan Mahasiswa Informatika USK",
    //     socialMediaUrl: "https://github.com/Himpunan-Mahasiswa-Informatika"
    // },
    // {
    //     socialMedia: "youtube",
    //     accountName: "Himpunan Mahasiswa Informatika USK",
    //     socialMediaUrl: "https://www.youtube.com/@hmif_usk"
    // },
    // {
    //     socialMedia: "twitter",
    //     accountName: "HMIF_USK",
    //     socialMediaUrl: "https://x.com/HMIF_USK?s=20"
    // },
    // {
    //     socialMedia: "phone",
    //     accountName: "+6281 2312 3123",
    //     socialMediaUrl: "https://api.whatsapp.com/send?phone="
    // },
    // {
    //     socialMedia: "email",
    //     accountName: "hmif.fmipa@usk.ac.id",
    //     socialMediaUrl: "https://mail.google.com/mail/?view=cm&to="
    // },
];

socialModel.insertMany(data)
  .then(() => {
    console.log('Data seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
