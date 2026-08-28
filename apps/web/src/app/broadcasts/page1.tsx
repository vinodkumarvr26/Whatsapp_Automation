"use client";

import React from "react";

export default function HomeDashboardPreview() {
  return (
    <div className="flex min-h-screen bg-[#F5F2EB] text-slate-900 font-sans">
      {/* Shared Navigation Sidebar - Deep Peacock Blue */}
      <aside className="w-64 bg-[#0F4C81] text-slate-100 flex flex-col justify-between p-5 shrink-0 hidden md:flex border-r border-[#1A5B6E]">
        <div className="space-y-6">
          {/* TechNexus Community Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1 shadow-sm shrink-0">
              <div className="w-full h-full rounded-full border-2 border-emerald-500 border-t-rose-500 border-r-amber-500 border-b-blue-500" />
            </div>
            <div>
              <h2 className="font-bold text-white text-base leading-tight">TechNexus</h2>
              <span className="text-[11px] text-blue-200 font-medium">Community</span>
            </div>
          </div>

          <nav className="space-y-1.5 pt-2">
            <a href="/" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold bg-[#1A5B6E] text-white shadow-sm border border-blue-400/30">
              🏠 Home Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:bg-[#1A5B6E] hover:text-white transition-all">
              💬 Inbox
            </a>
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:bg-[#1A5B6E] hover:text-white transition-all">
              👥 Contacts
            </a>
            <a href="/broadcasts" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:bg-[#1A5B6E] hover:text-white transition-all">
              📢 Broadcasts
            </a>
            <a href="/templates" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:bg-[#1A5B6E] hover:text-white transition-all">
              📄 Templates
            </a>
          </nav>
        </div>

        <div className="border-t border-blue-800/60 pt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white">LY</div>
          <div className="truncate">
            <p className="text-xs font-bold text-white truncate">Lekhashree Y C</p>
            <p className="text-[10px] text-blue-200 truncate">Workspace Lead</p>
          </div>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Community Hub Overview</h1>
            <p className="text-xs text-slate-600 mt-1">Manage active discussions, quick broadcasts, and audience segments.</p>
          </div>
          <a
            href="/broadcasts"
            className="px-5 py-2.5 bg-[#0F4C81] hover:bg-[#1A5B6E] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
          >
            📢 Create New Broadcast
          </a>
        </div>

        {/* Quick Launch Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border-2 border-slate-800 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F4C81] flex items-center justify-center text-xl font-bold shrink-0">
              💬
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Unread Inbox Messages</h3>
              <p className="text-2xl font-black text-[#0F4C81] mt-1">18 Priority</p>
              <a href="#" className="text-xs font-bold text-blue-700 hover:underline mt-2 inline-block">Jump to Shared Inbox →</a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-slate-800 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold shrink-0">
              👥
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Total Audience Contacts</h3>
              <p className="text-2xl font-black text-slate-900 mt-1">1,465 Members</p>
              <a href="#" className="text-xs font-bold text-emerald-700 hover:underline mt-2 inline-block">View Audience Directory →</a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-slate-800 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center text-xl font-bold shrink-0">
              ⚡
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Approved Meta Templates</h3>
              <p className="text-2xl font-black text-amber-900 mt-1">12 Active</p>
              <a href="/templates" className="text-xs font-bold text-amber-800 hover:underline mt-2 inline-block">Manage Template Keys →</a>
            </div>
          </div>
        </div>

        {/* 2-Column Dashboard Hub Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT PANEL: Broadcast Stream */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border-2 border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-3">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Recent Broadcast Dispatches
              </h2>
              <span className="text-xs font-bold text-[#0F4C81] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                Live Status
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border-2 border-slate-800 bg-[#F5F2EB] flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Annual Tech Summit 2026 Pass</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Audience Tag: <span className="font-semibold text-slate-800">All Registered Attendees (850)</span></p>
                  <span className="text-[11px] text-slate-500 block mt-1">Dispatched Today at 14:30</span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full border border-emerald-400">
                  Completed
                </span>
              </div>

              <div className="p-4 rounded-xl border-2 border-slate-800 bg-white flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">VIP Speaker Networking Dinner</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Audience Tag: <span className="font-semibold text-slate-800">VIP Speakers & Mentors (45)</span></p>
                  <span className="text-[11px] text-slate-500 block mt-1">Scheduled for Tomorrow at 10:00 AM</span>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full border border-amber-400">
                  Scheduled
                </span>
              </div>

              <div className="p-4 rounded-xl border-2 border-slate-800 bg-white flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Post-Event Feedback Survey</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Audience Tag: <span className="font-semibold text-slate-800">Checked-In Guests (420)</span></p>
                  <span className="text-[11px] text-slate-500 block mt-1">Dispatched 2 days ago</span>
                </div>
                <span className="px-3 py-1 bg-slate-200 text-slate-800 font-bold text-xs rounded-full border border-slate-400">
                  Archived
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Audience Segments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-800 pb-2">
                Active Audience Segments
              </h2>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-300">
                  <span className="text-xs font-bold text-slate-800">🏷️ All Registered Attendees</span>
                  <span className="text-xs font-bold bg-[#0F4C81] text-white px-2 py-0.5 rounded-md">850</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-300">
                  <span className="text-xs font-bold text-slate-800">🏷️ Checked-In Guests</span>
                  <span className="text-xs font-bold bg-[#0F4C81] text-white px-2 py-0.5 rounded-md">420</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-300">
                  <span className="text-xs font-bold text-slate-800">🏷️ Pending RSVPs</span>
                  <span className="text-xs font-bold bg-[#0F4C81] text-white px-2 py-0.5 rounded-md">120</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-300">
                  <span className="text-xs font-bold text-slate-800">🏷️ VIP Speakers & Mentors</span>
                  <span className="text-xs font-bold bg-[#0F4C81] text-white px-2 py-0.5 rounded-md">45</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F2EB] p-5 rounded-2xl border-2 border-slate-800 space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase">Need to dispatch a quick alert?</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Clicking Broadcasts lets you choose dynamic tags, pick pre-approved templates, and preview live messages before sending.
              </p>
              <a
                href="/broadcasts"
                className="inline-block mt-2 text-xs font-bold text-[#0F4C81] hover:underline"
              >
                Go to Campaign Broadcast setup →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}