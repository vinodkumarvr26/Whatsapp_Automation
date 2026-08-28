"use client";

import { useState } from "react";

export default function BroadcastsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Module Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Broadcast Campaigns</h1>
            <p className="text-sm text-slate-500 mt-1">
              Create, schedule, and send automated WhatsApp bulk messages.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            + New Broadcast
          </button>
        </div>

        {/* Campaign Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center text-slate-500 text-sm font-medium">
              <span>Total Messages Sent</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md text-xs font-semibold">+12%</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 mt-3">2,845</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center text-slate-500 text-sm font-medium">
              <span>Delivery Rate</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md text-xs font-semibold">99.1%</span>
            </div>
            <p className="text-3xl font-extrabold text-emerald-600 mt-3">98.4%</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center text-slate-500 text-sm font-medium">
              <span>Active Campaigns</span>
              <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-semibold font-mono">LIVE</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 mt-3">4</p>
          </div>
        </div>

        {/* Campaign Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-800 text-lg">
            Recent Broadcasts
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase text-xs font-semibold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Campaign Name</th>
                  <th className="px-6 py-4">Audience</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80 transition">
                  <td className="px-6 py-4 font-semibold text-slate-900">Promo Flash Sale</td>
                  <td className="px-6 py-4 text-slate-600">VIP Customers (320)</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Today, 4:15 PM</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition">
                  <td className="px-6 py-4 font-semibold text-slate-900">Weekly Newsletter</td>
                  <td className="px-6 py-4 text-slate-600">All Leads (1,200)</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                      Scheduled
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Tomorrow, 10:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Creation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900">New Broadcast Campaign</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Campaign Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Festival Offer"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Message Body
                </label>
                <textarea
                  rows={3}
                  placeholder="Type your broadcast message..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow transition"
              >
                Send Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}