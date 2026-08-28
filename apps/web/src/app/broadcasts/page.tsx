"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function BroadcastsPage() {
  const [campaignName, setCampaignName] = useState("Annual Tech Summit 2026 Pass");
  const [audienceTag, setAudienceTag] = useState("All Registered Attendees (850)");
  const [selectedTemplate, setSelectedTemplate] = useState("Event QR Ticket Pass");
  const [param1, setParam1] = useState("Rahul Sharma");
  const [param2, setParam2] = useState("Annual Tech Summit 2026");

  return (
    <div className="flex min-h-screen bg-[#F5F2EB] text-slate-900 font-sans">
      {/* Shared Navigation Sidebar - Deep Peacock Blue Theme */}
      <aside className="w-64 bg-[#0F4C81] text-slate-100 flex flex-col justify-between p-5 shrink-0 hidden md:flex border-r border-[#1A5B6E]">
        <div className="space-y-6">
          {/* Brand Header with TechNexus Community Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/logo-transparent.png"
                alt="TechNexus Community logo"
                width={36}
                height={36}
                priority
              />
            </div>
            <div>
              <h2 className="font-bold text-white text-base leading-tight">
                TechNexus Community
              </h2>
              <span className="text-[11px] text-blue-200 font-medium">
                
              </span>
            </div>
          </div>

          {/* Clean Navigation */}
          <nav className="space-y-1.5 pt-2">
            <a
              href="#"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:bg-[#1A5B6E] hover:text-white transition-all"
            >
              💬 Inbox
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:bg-[#1A5B6E] hover:text-white transition-all"
            >
              👥 Contacts
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold bg-[#1A5B6E] text-white shadow-sm border border-blue-400/30"
            >
              📢 Broadcasts
            </a>
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="border-t border-blue-800/60 pt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white">
            LY
          </div>
          <div className="truncate">
            <p className="text-xs font-bold text-white truncate">Admin</p>
            <p className="text-[10px] text-blue-200 truncate">Workspace</p>
          </div>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Simple Top Header (No robotic subtitles) */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-4">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            WhatsApp Broadcasts
          </h1>
          <button className="bg-[#0F4C81] hover:bg-[#1A5B6E] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all">
            + New Campaign
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Campaign Configuration Form (Dark High-Contrast Inputs) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border-2 border-slate-300 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
              Campaign Configuration
            </h2>

            {/* Campaign Name */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Campaign Name
              </label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full border-2 border-slate-800 bg-slate-50 text-slate-900 rounded-xl p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0F4C81] transition-all"
              />
            </div>

            {/* Select Audience Tag */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Audience Segment
              </label>
              <select
                value={audienceTag}
                onChange={(e) => setAudienceTag(e.target.value)}
                className="w-full border-2 border-slate-800 bg-slate-50 text-slate-900 rounded-xl p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0F4C81] transition-all"
              >
                <option>All Registered Attendees (850)</option>
                <option>Checked-In Guests (420)</option>
                <option>VIP Speakers (45)</option>
              </select>
            </div>

            {/* Select Message Template */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Message Template
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full border-2 border-slate-800 bg-slate-50 text-slate-900 rounded-xl p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0F4C81] transition-all"
              >
                <option>Event QR Ticket Pass</option>
                <option>Schedule & Venue Announcement</option>
                <option>Feedback Survey Reminder</option>
              </select>
            </div>

            {/* Dynamic Parameter Test Inputs */}
            <div className="bg-[#F5F2EB] p-4 rounded-xl border-2 border-slate-300 space-y-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Template Dynamic Variables
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 mb-1">
                    {"{{1}}"} Recipient Name
                  </label>
                  <input
                    type="text"
                    value={param1}
                    onChange={(e) => setParam1(e.target.value)}
                    className="w-full border-2 border-slate-800 bg-white text-slate-900 rounded-lg p-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 mb-1">
                    {"{{2}}"} Event Title
                  </label>
                  <input
                    type="text"
                    value={param2}
                    onChange={(e) => setParam2(e.target.value)}
                    className="w-full border-2 border-slate-800 bg-white text-slate-900 rounded-lg p-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => alert("Broadcast scheduled successfully!")}
              className="w-full bg-[#0F4C81] hover:bg-[#1A5B6E] text-white font-bold py-3.5 rounded-xl shadow-md text-sm transition-all"
            >
              Dispatch Broadcast →
            </button>
          </div>

          {/* RIGHT: Live Preview Frame (No robotic captions) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border-2 border-slate-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Live Preview
                </h2>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                  WhatsApp Web
                </span>
              </div>

              {/* Realistic Mobile View Canvas */}
              <div className="bg-[#E5DDD5] rounded-3xl p-4 border-4 border-slate-800 min-h-[380px] shadow-inner flex flex-col justify-end">
                <div className="bg-white rounded-xl overflow-hidden shadow-md max-w-[95%] border-l-4 border-[#25D366]">
                  <div className="px-3.5 pt-3.5 text-xs font-bold text-slate-900 uppercase tracking-wider text-emerald-700">
                    🎟️ {selectedTemplate}
                  </div>

                  <div className="p-3.5 space-y-2">
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      Hello {param1 || "{{1}}"}! Here is your entry pass for{" "}
                      {param2 || "{{2}}"}. Show this pass at the main gate.
                    </p>

                    <p className="text-[10px] text-slate-500">
                      TechNexus Community • Reply STOP to unsubscribe
                    </p>

                    <div className="flex justify-end items-center gap-1 text-[10px] text-slate-400">
                      <span>22:15</span>
                      <span className="text-blue-500 font-bold">✓✓</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 p-2.5 text-center bg-slate-50">
                    <span className="text-xs font-bold text-blue-600">
                      🔗 View QR Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#F5F2EB] rounded-xl border border-slate-300 text-xs text-slate-800 font-medium">
              Targeting: <strong>{audienceTag}</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}