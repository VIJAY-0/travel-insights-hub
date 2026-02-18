// import React, { useMemo, useState } from "react";
// import {
//   ChevronRight,
//   ArrowRight,
//   RefreshCcw,
//   Plane,
//   Hotel,
//   Car,
//   CheckCircle2,
//   Leaf,
//   MessageCircle,
//   Loader2,
// } from "lucide-react";

// /* -------------------------------------------
//  Types
// --------------------------------------------*/

// type Step = "flight" | "hotel" | "transport" | "confirm";

// interface Option {
//   id: string;
//   title: string;
//   subtitle: string;
//   price: number;
//   meta?: string;
//   sustainability?: number;
// }

// /* -------------------------------------------
//  Mock data (replace by API)
// --------------------------------------------*/

// const flightOptions: Option[] = [
//   { id: "f1", title: "United Airlines · SFO → JFK", subtitle: "06:30 – 14:55 · 1 stop", price: 540, sustainability: 72 },
//   { id: "f2", title: "Delta · SFO → JFK", subtitle: "07:10 – 15:40 · 1 stop", price: 565, sustainability: 65 },
//   { id: "f3", title: "American · SFO → JFK", subtitle: "08:05 – 16:35 · 1 stop", price: 510, sustainability: 58 },
// ];

// const hotelOptions: Option[] = [
//   { id: "h1", title: "Marriott Downtown", subtitle: "4.6 ★ · 0.4 mi from meeting", price: 290 },
//   { id: "h2", title: "Hyatt Place", subtitle: "4.4 ★ · 0.6 mi from meeting", price: 255 },
//   { id: "h3", title: "Hilton Midtown", subtitle: "4.5 ★ · 0.3 mi from meeting", price: 305 },
// ];

// const transportOptions: Option[] = [
//   { id: "t1", title: "Airport → Hotel", subtitle: "Executive Sedan", price: 75 },
//   { id: "t2", title: "Airport → Hotel", subtitle: "Premium SUV", price: 95 },
//   { id: "t3", title: "Airport → Hotel", subtitle: "Standard Sedan", price: 60 },
// ];

// /* -------------------------------------------
//  Component
// --------------------------------------------*/

// export const AutoPilotBookingView: React.FC = () => {
//   const [step, setStep] = useState<Step>("flight");
//   const [optimizing, setOptimizing] = useState(false);

//   const [flight, setFlight] = useState<Option>(flightOptions[0]);
//   const [hotel, setHotel] = useState<Option>(hotelOptions[0]);
//   const [transport, setTransport] = useState<Option>(transportOptions[0]);

//   const TOTAL_BUDGET = 900;

//   const total = useMemo(
//     () => flight.price + hotel.price + transport.price,
//     [flight, hotel, transport]
//   );

//   const overBudget = total > TOTAL_BUDGET;

//   const goNext = async () => {
//     setOptimizing(true);
//     await new Promise((r) => setTimeout(r, 700));
//     setOptimizing(false);

//     if (step === "flight") setStep("hotel");
//     else if (step === "hotel") setStep("transport");
//     else if (step === "transport") setStep("confirm");
//   };

//   /* -------------------------------------------
//    UI helpers
//   --------------------------------------------*/

//   const StepIcon = (s: Step) => {
//     if (s === "flight") return Plane;
//     if (s === "hotel") return Hotel;
//     if (s === "transport") return Car;
//     return CheckCircle2;
//   };

//   const steps: Step[] = ["flight", "hotel", "transport", "confirm"];

//   return (
//     <div className="w-full h-full flex flex-col bg-[#F8F9FA]">

//       {/* ALERT */}
//       <div className="px-4 py-2 bg-[#FF0000] text-white text-[11px] font-bold text-center tracking-wider">
//         TRAVEL / MEETING ALERT – AutoPilot flow active
//       </div>

//       {/* STEPPER */}
//       <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
//         {steps.map((s, i) => {
//           const Icon = StepIcon(s);
//           const active = step === s;
//           const completed = steps.indexOf(step) > i;

//           return (
//             <div key={s} className="flex items-center flex-1">
//               <div
//                 className={`flex flex-col items-center gap-1 flex-1`}
//               >
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center
//                     ${active ? "bg-[#2B78C5] text-white" :
//                       completed ? "bg-green-500 text-white" :
//                         "bg-gray-100 text-gray-400"}`}
//                 >
//                   <Icon size={16} />
//                 </div>
//                 <span className="text-[9px] font-bold uppercase text-gray-400">
//                   {s}
//                 </span>
//               </div>

//               {i !== steps.length - 1 && (
//                 <ArrowRight size={14} className="text-blue-300" />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* BODY */}
//       <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

//         {optimizing && (
//           <div className="flex flex-col items-center py-10 gap-3">
//             <Loader2 className="animate-spin text-[#2B78C5]" />
//             <p className="text-xs font-bold text-[#2B78C5] tracking-widest uppercase">
//               Optimizing...
//             </p>
//           </div>
//         )}

//         {!optimizing && step === "flight" && (
//           <SelectionStep
//             title="Auto-selected Flight"
//             icon={Plane}
//             selected={flight}
//             alternatives={flightOptions}
//             onSwap={setFlight}
//             showSustainability
//           />
//         )}

//         {!optimizing && step === "hotel" && (
//           <SelectionStep
//             title="Recommended Hotel"
//             icon={Hotel}
//             selected={hotel}
//             alternatives={hotelOptions}
//             onSwap={setHotel}
//           />
//         )}

//         {!optimizing && step === "transport" && (
//           <SelectionStep
//             title="Ground Transport"
//             icon={Car}
//             selected={transport}
//             alternatives={transportOptions}
//             onSwap={setTransport}
//           />
//         )}

//         {!optimizing && step === "confirm" && (
//           <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">

//             <h3 className="text-lg font-black text-gray-800">
//               Your trip is all set!
//             </h3>

//             <div className="space-y-2 text-sm">
//               <SummaryRow label="Flight" value={flight.title} />
//               <SummaryRow label="Hotel" value={hotel.title} />
//               <SummaryRow label="Transport" value={transport.subtitle} />
//             </div>

//             <div className="pt-2 border-t space-y-2">
//               <div className="flex justify-between font-bold">
//                 <span>Total</span>
//                 <span>${total}</span>
//               </div>
//             </div>

//             <button className="w-full py-3 rounded-xl bg-green-600 text-white font-bold">
//               View Trip
//             </button>

//             <button className="w-full py-3 rounded-xl bg-[#2B78C5] text-white font-bold">
//               Add to Calendar
//             </button>

//             <button className="w-full py-3 rounded-xl bg-red-600 text-white font-bold">
//               Cancel Bookings
//             </button>
//           </div>
//         )}
//       </div>

//       {/* FOOTER BAR */}
//       {step !== "confirm" && (
//         <div className="sticky bottom-0 bg-white border-t px-4 py-3 space-y-2">

//           <div className="flex justify-between text-xs font-bold">
//             <span>Total</span>
//             <span className={overBudget ? "text-red-600" : ""}>
//               ${total} / ${TOTAL_BUDGET}
//             </span>
//           </div>

//           {overBudget && (
//             <p className="text-[10px] text-red-600 font-bold uppercase">
//               Budget guardrail exceeded
//             </p>
//           )}

//           <button
//             disabled={overBudget}
//             onClick={goNext}
//             className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2
//               ${overBudget
//                 ? "bg-gray-200 text-gray-400"
//                 : "bg-[#2B78C5] text-white"
//               }`}
//           >
//             Continue
//             <ChevronRight size={18} />
//           </button>

//           {/* Sinva AI bubble (overlay entry) */}
//           <button className="w-full py-2 text-xs font-bold text-[#2B78C5] flex items-center justify-center gap-2">
//             <MessageCircle size={14} />
//             Ask Sinva AI why this option was chosen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// /* -------------------------------------------
//  Reusable cards
// --------------------------------------------*/

// const SelectionStep: React.FC<{
//   title: string;
//   icon: React.FC<any>;
//   selected: Option;
//   alternatives: Option[];
//   onSwap: (o: Option) => void;
//   showSustainability?: boolean;
// }> = ({
//   title,
//   icon: Icon,
//   selected,
//   alternatives,
//   onSwap,
//   showSustainability,
// }) => {

//   const [showSwap, setShowSwap] = useState(false);

//   return (
//     <div className="space-y-3">

//       <div className="flex items-center gap-2">
//         <Icon size={18} className="text-[#2B78C5]" />
//         <h3 className="text-base font-black text-gray-800">
//           {title}
//         </h3>
//       </div>

//       {/* Main card */}
//       <div className="bg-white rounded-2xl p-4 shadow-sm border space-y-2">

//         <p className="font-bold text-sm">{selected.title}</p>
//         <p className="text-xs text-gray-400">{selected.subtitle}</p>

//         {showSustainability && (
//           <div className="flex items-center gap-2 text-xs text-green-600 font-bold">
//             <Leaf size={14} />
//             Sustainability score: {selected.sustainability}
//           </div>
//         )}

//         <div className="flex items-center justify-between pt-2">
//           <span className="font-bold">${selected.price}</span>
//           <button
//             onClick={() => setShowSwap(!showSwap)}
//             className="text-xs font-bold text-[#2B78C5] flex items-center gap-1"
//           >
//             <RefreshCcw size={12} />
//             Change
//           </button>
//         </div>
//       </div>

//       {/* Alternatives */}
//       {showSwap && (
//         <div className="space-y-2">
//           {alternatives
//             .filter(a => a.id !== selected.id)
//             .slice(0, 3)
//             .map(a => (
//               <button
//                 key={a.id}
//                 onClick={() => {
//                   onSwap(a);
//                   setShowSwap(false);
//                 }}
//                 className="w-full bg-white border rounded-xl p-3 text-left shadow-sm"
//               >
//                 <p className="text-sm font-bold">{a.title}</p>
//                 <div className="flex justify-between text-xs text-gray-400">
//                   <span>{a.subtitle}</span>
//                   <span className="font-bold text-gray-700">${a.price}</span>
//                 </div>
//               </button>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const SummaryRow: React.FC<{ label: string; value: string }> = ({
//   label,
//   value,
// }) => (
//   <div className="flex justify-between text-xs">
//     <span className="text-gray-400 font-bold uppercase">{label}</span>
//     <span className="font-medium text-right max-w-[60%]">{value}</span>
//   </div>
// );
