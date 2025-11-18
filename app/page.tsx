'use client';

import { useState, useEffect } from 'react';
import { Check, Star, Shield, Zap, Lock, Clock, Award, Users, TrendingUp } from 'lucide-react';

const COUNTDOWN_START_SECONDS = 300;

const reviews = [
  { 
    name: "Amit Sharma", 
    city: "Delhi", 
    text: "Bhai website ekdum fast hai! Videos bina buffer ke chalti hain. Paisa vasool service!", 
    rating: 5 
  },
  { 
    name: "Priya Singh", 
    city: "Mumbai", 
    text: "Quality superb hai. HD videos instantly mil gayi. Customer support bhi helpful tha.", 
    rating: 5 
  },
  { 
    name: "Karan Patel", 
    city: "Ahmedabad", 
    text: "Sach bolu toh expect nahi kiya tha ki itna smooth hoga. Download speed bhi zabardast!", 
    rating: 5 
  },
  { 
    name: "Neha Verma", 
    city: "Lucknow", 
    text: "Videos ka collection kaafi bada hai. Har category ka content mil jata hai. Highly recommended!", 
    rating: 5 
  },
  { 
    name: "Rohit Yadav", 
    city: "Bangalore", 
    text: "Subscription bilkul worth hai. Daily new videos mil jaati hain. Overall experience 10/10.", 
    rating: 5 
  },
  { 
    name: "Simran Kaur", 
    city: "Chandigarh", 
    text: "Interface simple aur clean hai. Jo chahiye tha woh seconds me mil gaya. Bahut hi useful site!", 
    rating: 5 
  },
];


export default function Home() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_START_SECONDS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isExpired = timeLeft === 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-radial from-red-950/20 via-black to-black pointer-events-none" />

      <div className="relative z-10">
        <header className="border-b border-red-950/30 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6 text-[#d62b2b]" />
              <span className="text-xl font-bold">Videos Hub</span>
            </div>
            <a
              href="#pricing"
              className="px-6 py-2.5 bg-[#d62b2b] hover:bg-[#b62424] rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
            >
              Get Access
            </a>
          </div>
        </header>

        <div
          className={`${isExpired ? 'bg-red-950/30' : 'bg-[#d62b2b]'} transition-all duration-300`}
          role="timer"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold text-lg">Limited Time Offer</span>
              </div>
              {isExpired ? (
                <span className="font-semibold text-red-200">Offer Expired</span>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Ends in:</span>
                  <div className="flex gap-2">
                    <div className="bg-black/30 rounded px-3 py-1.5 min-w-[3rem] text-center">
                      <div className="text-xl font-bold tabular-nums">{isClient ? String(minutes).padStart(2, '0') : '05'}</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-80">Min</div>
                    </div>
                    <div className="bg-black/30 rounded px-3 py-1.5 min-w-[3rem] text-center">
                      <div className="text-xl font-bold tabular-nums">{isClient ? String(seconds).padStart(2, '0') : '00'}</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-80">Sec</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <main>
          <section className="relative overflow-hidden py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-900/30 rounded-full mb-8 text-sm">
                  <Zap className="w-4 h-4 text-[#ff7a17]" />
                  <span className="text-red-200">Instant Digital Delivery</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Unlock Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d62b2b] to-[#ff7a17]">Leaked Content</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed">
                  Access exclusive materials, private methods, and insider strategies that aren't available anywhere else.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://payleaks.bolt.host/399"
                    className="px-8 py-4 bg-[#d62b2b] hover:bg-[#b62424] rounded-lg font-bold text-lg transition-all duration-200 shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 hover:scale-105"
                  >
                    Get Instant Access
                  </a>
                  <a
                    href="#features"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold text-lg transition-all duration-200"
                  >
                    Learn More
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#ff7a17]" />
                    <span>Instant Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#2f7bf6]" />
                    <span>10,000+ Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 bg-gradient-to-b from-black to-red-950/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-900/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#d62b2b]/10 rounded-xl flex items-center justify-center mb-6">
                    <Lock className="w-7 h-7 text-[#d62b2b]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Exclusive Access</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Gain entry to private content and methods that are kept behind closed doors.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-950/20 to-black border border-orange-900/30 rounded-2xl p-8 hover:border-orange-900/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#ff7a17]/10 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-[#ff7a17]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant Delivery</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get immediate access to all materials within seconds of purchase.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-950/20 to-black border border-blue-900/30 rounded-2xl p-8 hover:border-blue-900/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#2f7bf6]/10 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-[#2f7bf6]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Join thousands who have already transformed their approach with our content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Trust <span className="text-[#d62b2b]">Videos Hub</span>?</h2>
                <p className="text-xl text-gray-400">
                  We've built a reputation on delivering authentic, high-quality content that provides real value.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#16a34a]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-gray-400">Secure Payments</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2f7bf6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#2f7bf6]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ff7a17]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#ff7a17]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">&lt;60s</div>
                  <div className="text-gray-400">Delivery Time</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#f2b705]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#f2b705]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">4.9/5</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 bg-gradient-to-b from-black to-red-950/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Choose Your <span className="text-[#d62b2b]">Package</span></h2>
                <p className="text-xl text-gray-400">
                  Select the tier that matches your needs. All packages include instant access.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-900/50 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Premium</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-black">₹299</span>
                    </div>
                    <p className="text-gray-400">Essential leaked content</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">20,000+ Videos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Bonus Library</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Priority Delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Unlimited Downloads</span>
                    </li>
                  </ul>
                  <a
                    href="https://payleaks.bolt.host/299"
                    className={`block w-full py-4 rounded-lg font-bold text-center transition-all duration-200 ${
                      isExpired
                        ? 'bg-gray-700 cursor-not-allowed opacity-50'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                    aria-disabled={isExpired}
                    onClick={(e) => isExpired && e.preventDefault()}
                  >
                    Get Premium
                  </a>
                </div>

                <div className="bg-gradient-to-br from-[#f2b705]/20 to-black border-2 border-[#f2b705] rounded-2xl p-8 relative hover:border-[#f2b705]/80 transition-all duration-300 transform md:-translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#f2b705] to-[#ff7a17] text-black px-6 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Award className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                  <div className="text-center mb-8 mt-4">
                    <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-black text-[#f2b705]">₹399</span>
                    </div>
                    <p className="text-gray-400">Complete access package</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">40,000+ Videos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Everything Unlocked</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Lifetime Access + Updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">24/7 VIP Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Exclusive Bonuses</span>
                    </li>
                  </ul>
                  <a
                    href="https://payleaks.bolt.host/399"
                    className={`block w-full py-4 rounded-lg font-bold text-center transition-all duration-200 ₹{
                      isExpired
                        ? 'bg-gray-700 cursor-not-allowed opacity-50'
                        : 'bg-gradient-to-r from-[#d62b2b] to-[#ff7a17] hover:from-[#b62424] hover:to-[#e66d15] shadow-xl shadow-red-900/30'
                    }`}
                    aria-disabled={isExpired}
                    onClick={(e) => isExpired && e.preventDefault()}
                  >
                    Get Ultimate
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-950/20 to-black border border-purple-900/30 rounded-2xl p-8 hover:border-purple-900/50 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Exclusive</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-black">₹499</span>
                    </div>
                    <p className="text-gray-400">VIP insider access</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">60,000+ Videos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Newly Leaked Videos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Daily New Video Updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">24/7 VIP Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">All Exclusive Bonuses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Private Telegram Community Access</span>
                    </li>
                  </ul>
                  <a
                    href="https://payleaks.bolt.host/499"
                    className={`block w-full py-4 rounded-lg font-bold text-center transition-all duration-200 ${
                      isExpired
                        ? 'bg-gray-700 cursor-not-allowed opacity-50'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                    aria-disabled={isExpired}
                    onClick={(e) => isExpired && e.preventDefault()}
                  >
                    Get Exclusive
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Our <span className="text-[#d62b2b]">Customers</span> Say</h2>
                <p className="text-xl text-gray-400">
                  Join thousands of satisfied customers who've transformed their results.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#f2b705] text-[#f2b705]" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#d62b2b] to-[#ff7a17] rounded-full flex items-center justify-center font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.city}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-black to-red-950/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-2xl p-12 text-center">
                <Shield className="w-16 h-16 text-[#16a34a] mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Help?</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our support team is ready to assist you with any questions.
                </p>
                <a
                  href="mailto:support@example.com"
                  className="inline-block px-8 py-4 bg-[#2f7bf6] hover:bg-[#2565c9] rounded-lg font-bold transition-all duration-200 shadow-lg shadow-blue-900/30"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#d62b2b] to-[#ff7a17] rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl font-black mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl sm:text-2xl mb-10 opacity-90">
                    Join 10,000+ customers and unlock premium content today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://payleaks.bolt.host/299"
                      className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                        isExpired
                          ? 'bg-gray-700 cursor-not-allowed opacity-50'
                          : 'bg-black hover:bg-gray-900 shadow-2xl'
                      }`}
                      aria-disabled={isExpired}
                      onClick={(e) => isExpired && e.preventDefault()}
                    >
                      Premium - ₹299
                    </a>
                    <a
                      href="https://payleaks.bolt.host/399"
                      className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 border-2 ${
                        isExpired
                          ? 'bg-gray-700 border-gray-600 cursor-not-allowed opacity-50'
                          : 'bg-white text-[#d62b2b] border-white hover:bg-gray-100 shadow-2xl'
                      }`}
                      aria-disabled={isExpired}
                      onClick={(e) => isExpired && e.preventDefault()}
                    >
                      Ultimate - ₹399
                    </a>
                    <a
                      href="https://payleaks.bolt.host/499"
                      className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                        isExpired
                          ? 'bg-gray-700 cursor-not-allowed opacity-50'
                          : 'bg-black hover:bg-gray-900 shadow-2xl'
                      }`}
                      aria-disabled={isExpired}
                      onClick={(e) => isExpired && e.preventDefault()}
                    >
                      Exclusive - ₹499
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-black border-t border-red-950/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-6 h-6 text-[#d62b2b]" />
                  <span className="text-xl font-bold">PayLeaks</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Premium leaked content and insider methods delivered instantly.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield className="w-5 h-5 text-[#16a34a]" />
                  <span>Secure & Trusted Platform</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="mailto:support@example.com"
                      className="hover:text-white transition-colors"
                    >
                      @scstact on telegram
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-red-950/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div>&copy; 2024 VideosHub. All rights reserved.</div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#16a34a]" />
                <span>SSL Secured | Encrypted Transactions</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
