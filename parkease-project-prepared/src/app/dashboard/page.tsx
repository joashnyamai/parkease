'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('map');
  
  // Mock data for parking spots
  const nearbySpots = [
    { id: 1, name: 'City Center Parking', distance: '0.3 miles', price: '£2.50/hr', available: 12 },
    { id: 2, name: 'Station Parking Lot', distance: '0.5 miles', price: '£3.00/hr', available: 5 },
    { id: 3, name: 'Shopping Mall Garage', distance: '0.8 miles', price: '£1.80/hr', available: 25 },
  ];
  
  // Mock data for recent transactions
  const recentTransactions = [
    { id: 101, location: 'City Center Parking', date: '2025-05-25', amount: '£7.50', duration: '3 hours' },
    { id: 102, location: 'Station Parking Lot', date: '2025-05-22', amount: '£6.00', duration: '2 hours' },
    { id: 103, location: 'Market Square', date: '2025-05-20', amount: '£4.50', duration: '1.5 hours' },
  ];

  return (
    <div className="min-h-screen bg-[var(--neutral-light)]">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container-custom py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[var(--primary-blue)]">ParkEase</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[var(--secondary-teal)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center">
              <span className="font-medium text-sm">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - User Info & Virtual Card */}
          <div className="lg:col-span-1">
            <div className="card mb-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center">
                  <span className="font-medium">JD</span>
                </div>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-600">john.doe@example.com</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Subscription: <span className="font-medium text-[var(--secondary-teal)]">Active</span></p>
                <p className="text-sm text-gray-600">Next billing: May 26, 2025</p>
              </div>
            </div>

            {/* Virtual Card */}
            <div className="card bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-teal)] text-white">
              <h3 className="text-lg font-semibold mb-4">ParkEase Card</h3>
              <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-lg tracking-wider mb-1">•••• •••• •••• 4242</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs opacity-80">CARD HOLDER</p>
                    <p className="text-sm">JOHN DOE</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80">EXPIRES</p>
                    <p className="text-sm">05/28</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-20 text-sm py-1 px-3">
                  Add to Wallet
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-20 text-sm py-1 px-3">
                  Manage Card
                </button>
              </div>
            </div>
          </div>

          {/* Middle & Right Columns - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="flex border-b">
                <button 
                  className={`flex-1 py-4 px-6 text-center ${activeTab === 'map' ? 'border-b-2 border-[var(--secondary-teal)] text-[var(--secondary-teal)]' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('map')}
                >
                  Find Parking
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center ${activeTab === 'bookings' ? 'border-b-2 border-[var(--secondary-teal)] text-[var(--secondary-teal)]' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('bookings')}
                >
                  My Bookings
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center ${activeTab === 'history' ? 'border-b-2 border-[var(--secondary-teal)] text-[var(--secondary-teal)]' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('history')}
                >
                  History
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'map' && (
              <>
                {/* Map Placeholder */}
                <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map Would Appear Here</p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <input 
                        type="text" 
                        placeholder="Search for parking spots..." 
                        className="input-field flex-grow"
                      />
                      <button className="ml-2 bg-[var(--secondary-teal)] text-white p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex space-x-2 mb-4">
                      <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Near Me</button>
                      <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Available Now</button>
                      <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Price ▼</button>
                    </div>
                  </div>
                </div>

                {/* Nearby Parking Spots */}
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">Nearby Parking Spots</h3>
                  </div>
                  <div className="divide-y">
                    {nearbySpots.map(spot => (
                      <div key={spot.id} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{spot.name}</h4>
                            <p className="text-sm text-gray-600">{spot.distance} • {spot.price}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-[var(--success-green)]">{spot.available} spots</p>
                            <button className="mt-1 text-sm text-[var(--secondary-teal)] hover:underline">Book Now</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Current & Upcoming Bookings</h3>
                </div>
                <div className="p-6 text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mb-4">You don't have any active bookings</p>
                  <button className="btn-primary">Find Parking</button>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Recent Transactions</h3>
                </div>
                <div className="divide-y">
                  {recentTransactions.map(transaction => (
                    <div key={transaction.id} className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{transaction.location}</h4>
                          <p className="text-sm text-gray-600">{transaction.date} • {transaction.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{transaction.amount}</p>
                          <button className="mt-1 text-sm text-[var(--secondary-teal)] hover:underline">View Receipt</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t text-center">
                  <button className="text-sm text-[var(--secondary-teal)] hover:underline">View All Transactions</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 lg:hidden">
        <div className="flex justify-around">
          <button className="flex flex-col items-center px-4 py-2 text-[var(--secondary-teal)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xs mt-1">Map</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-xs mt-1">Card</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">Bookings</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
