"use client";

import Link from 'next/link'; // Import bilkul sahi tha!
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  // Dummy data jo real-time mein backend/database se aayega baad mein
  const [leads, setLeads] = useState([
    { id: 1, name: "Ranjit Bhardwaj ", email: "ranjit@gmail.com", company: "Amazon", status: "low Priority", meeting: "Not Booked" },
    { id: 2, name: "Nikita Mishra", email: "nikita@gmail.com", company: "Flipkart", status: "low Priority", meeting: "Not Booked" },
    { id: 3, name: "Amit Sharma", email: "amit@tcs.com", company: "TCS", status: "High Priority", meeting: "22 May, 3:00 PM" },
    { id: 4, name: "Sneha Reddy", email: "sneha@infosys.com", company: "Infosys", status: "High Priority", meeting: "25 May, 11:30 AM" },
    { id: 5, name: "Rahul Verma", email: "rahul@gmail.com", company: "Freelancer", status: "Low Priority", meeting: "Not Booked" },
    { id: 6, name: "Rahul Verma", email: "rahul@gmail.com", company: "Freelancer", status: "Low Priority", meeting: "Not Booked" }
  ]);
   
  const chartData = [
    { name: 'Mon', leads: 4 },
    { name: 'Tue', leads: 8 },
    { name: 'Wed', leads: 15 },
    { name: 'Thu', leads: 22 },
    { name: 'Fri', leads: 34 },
    { name: 'Sat', leads: 42 },
    { name: 'Sun', leads: 48 },
  ];
 
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-8">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <div>
          {/* Back Button aur Title ko row mein lane ke liye flex wrap kiya */}
          <div className="flex items-center gap-4">
            {/* YAHA BUTTON ADD KIYA HAI */}
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/20">
              ← Back to Chat
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              DealFlow AI Command Center
            </h1>
          </div>
          <p className="text-gray-400 text-sm mt-2 sm:ml-[110px]">Track and manage your AI-qualified leads in real-time.</p>
        </div>
        <div className="bg-slate-800 px-4 py-2 rounded-xl text-sm border border-slate-700-none">
          Status: <span className="text-green-400 font-semibold">Live Monitoring</span>
        </div>
      </div>

      {/* Analytics Mini Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50">
          <p className="text-gray-400 text-sm font-medium">Total Chats Processed</p>
          <p className="text-3xl font-extrabold mt-2 text-blue-400">1,240</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50">
          <p className="text-gray-400 text-sm font-medium">AI Qualified Leads</p>
          <p className="text-3xl font-extrabold mt-2 text-indigo-400">48</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50">
          <p className="text-gray-400 text-sm font-medium">Meetings Booked Automatically</p>
          <p className="text-3xl font-extrabold mt-2 text-green-400">18</p>
        </div>
      </div>

      {/* NEW: GRAPH CHART SECTION */}
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 mb-8">
        <h2 className="text-xl font-bold mb-4">Leads Acquisition Performance (This Week)</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#fff' }} />
              <Area type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Leads Table Card */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-700/50">
          <h2 className="text-xl font-bold">Recent Leads Captured by AI</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-750 border-b border-slate-700 text-gray-400 text-sm">
                <th className="p-4 pl-6">Name</th>
                <th className="p-4">Company</th>
                <th className="p-4">Email</th>
                <th className="p-4">AI Score Status</th>
                <th className="p-4 pr-6">Calendly Meeting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-750 text-sm text-gray-300">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 pl-6 font-medium text-white">{lead.name}</td>
                  <td className="p-4">{lead.company}</td>
                  <td className="p-4 text-gray-400">{lead.email}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      lead.status === 'High Priority' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-gray-400 font-mono text-xs">{lead.meeting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}