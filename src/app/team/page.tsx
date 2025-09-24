"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  phone?: string;
};

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchTeam() {
      const snapshot = await getDocs(collection(db, "team"));
      const members = snapshot.docs.map(doc => doc.data() as TeamMember);
      setTeam(members);
    }
    fetchTeam();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center">Meet Our Security Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 flex flex-col items-center border-t-4 border-blue-400 animate-section-in">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-24 w-24 rounded-full object-cover mb-4 border-4 border-blue-400 shadow-lg"
                />
                <h2 className="text-xl font-bold text-blue-200 mb-1">{member.name}</h2>
                <span className="text-blue-400 font-semibold mb-2">{member.role}</span>
                <p className="text-gray-200 text-center text-sm mb-3">{member.bio}</p>
                <div className="text-xs text-gray-300 text-center">
                  {member.email && (
                    <div>
                      <span className="font-bold text-blue-400">Email:</span> {member.email}
                    </div>
                  )}
                  {member.phone && (
                    <div>
                      <span className="font-bold text-blue-400">Phone:</span> {member.phone}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}