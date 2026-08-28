"use client";

import React, { useState } from "react";

export default function BroadcastPage() {
  // Hardcoded States for Templates
  const [selectedTemplate, setSelectedTemplate] = useState("event_qr_pass");
  const [selectedTag, setSelectedTag] = useState("all_attendees");
  const [customMessage, setCustomMessage] = useState(
    "Hello {{1}}! Here is your entry pass for {{2}}. Show this QR code at the entrance."
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          WhatsApp Campaign Broadcasts
        </h1>
        <p className="text-sm text-slate-500">
          Create campaigns, select audience tags, preview WhatsApp templates, and dispatch broadcasts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT PANEL: 1. Campaign Creation Interface & 2. Tag Selection Dropdowns */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b pb-3 border-slate-100">
            1. Campaign Setup
          </h2>

          {/* Campaign Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Campaign Name
            </label>
            <input
              type="text"
              defaultValue="Annual Tech Summit 2026 Pass"
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-blue-500"
              placeholder="e.g. VIP Dinner Invitation"
            />
          </div>

          {/* Tag Selection Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              2. Select Audience Tag
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-blue-500 bg-white"
            >
              <option value="all_attendees">🏷️ Tag: All Registered Attendees (850)</option>
              <option value="checked_in">🏷️ Tag: Checked-In Guests (420)</option>
              <option value="vip_speakers">🏷️ Tag: VIP Speakers & Mentors (45)</option>
              <option value="pending_rsvp">🏷️ Tag: Pending RSVPs (120)</option>
            </select>
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Select Message Template
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => {
                setSelectedTemplate(e.target.value);
                if (e.target.value === "event_qr_pass") {
                  setCustomMessage("Hello {{1}}! Here is your entry pass for {{2}}. Show this QR code at the entrance.");
                } else if (e.target.value === "schedule_update") {
                  setCustomMessage("Hi {{1}}, urgent update! Keynote session for {{2}} has been shifted to Hall B at 3:00 PM.");
                } else {
                  setCustomMessage("Hey {{1}}, thank you for attending {{2}}! Please rate your experience here: https://forms.gle/xyz");
                }
              }}
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-blue-500 bg-white"
            >
              <option value="event_qr_pass">Template: Event QR Ticket Pass</option>
              <option value="schedule_update">Template: Urgent Schedule Alert</option>
              <option value="feedback_survey">Template: Post-Event Feedback</option>
            </select>
          </div>

          {/* Dynamic Template Variables */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
              Template Body (Editable Variables)
            </label>
            <textarea
              rows={4}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-blue-500 text-slate-700"
            />
          </div>

          {/* 4. Dispatch Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => alert("Broadcast Dispatched to WhatsApp API!")}
              className="flex-1 bg-[#4A90E2] hover:bg-blue-600 text-white font-medium py-3 rounded-xl shadow-sm text-sm transition-all"
            >
              🚀 Dispatch Broadcast Now
            </button>
            <button
              onClick={() => alert("Campaign Scheduled Successfully!")}
              className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-sm transition-all"
            >
              ⏱️ Schedule
            </button>
          </div>
        </div>

        {/* RIGHT PANEL: 3. Message Template Previewer */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-800 border-b pb-3 border-slate-100 mb-4">
              3. WhatsApp Message Previewer
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Live hardcoded mockup of how this broadcast appears in recipient's WhatsApp chat:
            </p>

            {/* WhatsApp Phone Mockup Screen */}
            <div className="bg-[#E5DDD5] rounded-2xl p-4 border border-slate-300 min-h-[320px] shadow-inner flex flex-col justify-end">
              <div className="bg-white rounded-xl p-3.5 shadow-sm max-w-[88%] space-y-2 border-l-4 border-[#25D366]">
                <span className="text-[11px] font-bold text-[#25D366] uppercase tracking-wider block">
                  Official WhatsApp Template
                </span>
                <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                  {customMessage
                    .replace("{{1}}", "Rahul Sharma")
                    .replace("{{2}}", "Annual Tech Summit 2026")}
                </p>
                <div className="flex justify-end items-center gap-1 text-[10px] text-slate-400">
                  <span>14:32</span>
                  <span className="text-blue-500 font-bold">✓✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-700">
            <strong>Target Tag:</strong> {selectedTag} <br />
            <strong>Total Recipients:</strong> 850 Contacts
          </div>
        </div>
      </div>
    </div>
  );
}