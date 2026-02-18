
import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Plus,
  Search,
  Shield,
  ShieldOff,
  Home,
  Briefcase,
  User,
  Settings,
  Filter,
  CheckCircle2,
  ChevronRight,
  LogOut,
  Bell,
  Globe,
  CreditCard,
  Building,
  Star,
  MoreVertical,
  Trash2,
  Edit3,
  X,
  Sparkles,
  Loader2,
  Clock,
  AlertCircle,
  Camera,
  Image as ImageIcon,
  ChevronDown
} from 'lucide-react';

// --- TYPES ---

export enum MembershipStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  ACTION_REQUIRED = 'ACTION_REQUIRED'
}

export enum Category {
  AIRLINES = 'Airlines',
  HOTELS = 'Hotels',
  CABS = 'Cabs',
  ALL = 'All'
}

export interface Membership {
  id: string;
  providerName: string;
  category: Category;
  membershipId: string;
  status: MembershipStatus;
  isPrimary: boolean;
  logoUrl?: string;
  frequentFlyerProgram?: string;
  tier?: string;
  corporateCode?: string;
}


// Added missing interface for AddMembershipForm component props
export interface AddMembershipFormProps {
  initialData?: Membership;
  onSave: (data: Partial<Membership>) => void;
  onClose: () => void;
}

// --- CONSTANTS ---

const POPULAR_PROVIDERS = {
  [Category.AIRLINES]: ['United Airlines', 'Delta Air Lines', 'American Airlines', 'Southwest Airlines', 'Lufthansa', 'Emirates', 'Qatar Airways', 'British Airways'],
  [Category.HOTELS]: ['Marriott Bonvoy', 'Hilton Honors', 'Hyatt World', 'IHG One Rewards', 'Accor Live Limitless', 'Wyndham Rewards'],
  [Category.CABS]: ['Uber', 'Lyft', 'Hertz', 'Avis','Sixt']
};

const PROGRAMS_MAP: Record<string, string> = {
  'United Airlines': 'MileagePlus',
  'Delta Air Lines': 'SkyMiles',
  'American Airlines': 'AAdvantage',
  'Marriott Bonvoy': 'Bonvoy Rewards',
  'Hilton Honors': 'Honors',
  'Hyatt World': 'World of Hyatt'
};

const INITIAL_MEMBERSHIPS: Membership[] = [
  {
    id: '1',
    providerName: 'United Airlines',
    category: Category.AIRLINES,
    membershipId: 'UA-9988776655',
    status: MembershipStatus.VERIFIED,
    isPrimary: true,
    logoUrl: './companyLogos/United Airlines.png',
    frequentFlyerProgram: 'MileagePlus'
  },
  {
    id: '2',
    providerName: 'Marriott Bonvoy',
    category: Category.HOTELS,
    membershipId: 'MB-123456789',
    status: MembershipStatus.PENDING,
    isPrimary: true,
    logoUrl: './companyLogos/Marriott Bonvoy.png',
    tier: 'Gold Elite'
  },
  {
    id: '3',
    providerName: 'Uber',
    category: Category.CABS,
    membershipId: 'UB-TRAVEL-001',
    status: MembershipStatus.ACTION_REQUIRED,
    isPrimary: true,
    logoUrl: './companyLogos/uber.png',
    corporateCode: 'CORP-AMEX-2024'
  }
];

const CATEGORIES = [Category.ALL, Category.AIRLINES, Category.HOTELS, Category.CABS];

// --- UTILS ---

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString().split(',')[1] || '');
    reader.onerror = (error) => reject(error);
  });
};

// --- AI SERVICE ---



async function extractMembershipFromImage(base64Data: string, mimeType: string) {

}

// --- SUB-COMPONENTS ---

const StatusBadge: React.FC<{ status: MembershipStatus }> = ({ status }) => {
  const config = {
    [MembershipStatus.VERIFIED]: { label: 'Verified', icon: CheckCircle2, color: 'text-green-600 bg-green-50 border-green-100' },
    [MembershipStatus.PENDING]: { label: 'Pending', icon: Clock, color: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
    [MembershipStatus.ACTION_REQUIRED]: { label: 'Action Required', icon: AlertCircle, color: 'text-red-600 bg-red-50 border-red-100' }
  };
  const current = config[status];
  const Icon = current.icon;
  return (
    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${current.color}`}>
      <Icon size={12} strokeWidth={2.5} />
      <span>{current.label}</span>
    </div>
  );
};

const MembershipCard: React.FC<{ membership: Membership; isPrivacyMode: boolean; onDelete: (id: string) => void; onEdit: (m: Membership) => void; onSetPrimary: (m: Membership) => void; }> = ({ membership, isPrivacyMode, onDelete, onEdit, onSetPrimary }) => {
  const [showActions, setShowActions] = useState(false);
  const maskId = (id: string) => isPrivacyMode ? '•••• •••• ' + id.slice(-4) : id;
  const getCategoryDetail = () => {
    switch (membership.category) {
      case Category.AIRLINES: return membership.frequentFlyerProgram;
      case Category.HOTELS: return membership.tier;
      case Category.CABS: return membership.corporateCode;
      default: return '';
    }
  };

  return (
    <div className={`relative bg-white rounded-2xl p-4 shadow-sm border-2 transition-all group ${membership.isPrimary ? 'border-[#2B78C5]' : 'border-transparent hover:border-gray-200'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
            {membership.logoUrl ? <img src={membership.logoUrl} className="w-8 h-8 object-contain" alt="" /> : <span className="text-xl font-bold text-gray-300">{membership.providerName[0]}</span>}
          </div>
          <div>
            <h3 className="font-bold text-[#333333] flex items-center gap-2">
              {membership.providerName}
              {membership.isPrimary && <div className="text-[9px] text-[#2B78C5] bg-blue-50 px-1 py-0.5 rounded font-bold uppercase">Primary</div>}
            </h3>
            <p className="text-xs text-gray-400 font-medium">{getCategoryDetail()}</p>
          </div>
        </div>
        <button onClick={() => setShowActions(!showActions)} className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 md:opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ID</p><p className={`font-mono text-sm tracking-widest ${isPrivacyMode ? 'blur-[3px]' : ''}`}>{maskId(membership.membershipId)}</p></div>
        <StatusBadge status={membership.status} />
      </div>
      {showActions && (
        <div className="absolute top-2 right-2 bg-white shadow-2xl border border-gray-100 rounded-xl py-2 w-44 z-30 animate-in fade-in zoom-in duration-150">
          <button onClick={() => { onEdit(membership); setShowActions(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><Edit3 size={16} /> Edit Details</button>
          {!membership.isPrimary && <button onClick={() => { onSetPrimary(membership); setShowActions(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"><Star size={16} /> Make Primary</button>}
          <div className="h-px bg-gray-100 my-1 mx-2" />
          <button onClick={() => { onDelete(membership.id); setShowActions(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"><Trash2 size={16} /> Remove</button>
        </div>
      )}
      {showActions && <div className="fixed inset-0 z-20" onClick={() => setShowActions(false)} />}
    </div>
  );
};


const AddMembershipForm: React.FC<AddMembershipFormProps> = ({ initialData, onSave, onClose }) => {
  const [formData, setFormData] = useState<Partial<Membership>>(initialData || { category: Category.AIRLINES });
  const [isScanning, setIsScanning] = useState(false);
  const [scanText, setScanText] = useState('');
  const [showAIScanner, setShowAIScanner] = useState(false);
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const providerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (providerRef.current && !providerRef.current.contains(event.target as Node)) {
        setShowProviderDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAIScan = async () => {
    if (!scanText.trim()) return;
    setIsScanning(true);
    try {
      const result = "";
      applyAIResult(result);
      setShowAIScanner(false);
    } catch (error) {
      alert("AI Extraction failed.");
    } finally {
      setIsScanning(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsScanning(true);
    try {
      const base64 = await fileToBase64(file);
      const result = await extractMembershipFromImage(base64, file.type);
      applyAIResult(result);
      setShowAIScanner(false);
    } catch (error) {
      alert("Visual AI Scan failed.");
    } finally {
      setIsScanning(false);
    }
  };

  const applyAIResult = (result: any) => {
    const cat = Object.values(Category).find(c => c.toLowerCase() === result.category?.toLowerCase()) || Category.AIRLINES;
    setFormData({
      ...formData,
      providerName: result.providerName,
      membershipId: result.membershipId,
      category: cat as Category,
      frequentFlyerProgram: cat === Category.AIRLINES ? result.extraField : '',
      tier: cat === Category.HOTELS ? result.extraField : '',
      corporateCode: cat === Category.CABS ? result.extraField : '',
      logoUrl: `https://logo.clearbit.com/${result.providerName?.toLowerCase().replace(/\s+/g, '')}.com`
    });
  };

  const selectProvider = (name: string) => {
    setFormData({
      ...formData,
      providerName: name,
      frequentFlyerProgram: PROGRAMS_MAP[name] || formData.frequentFlyerProgram,
      logoUrl: `https://logo.clearbit.com/${name.toLowerCase().replace(/\s+/g, '')}.com`
    });
    setShowProviderDropdown(false);
  };

  const isFormValid = formData.providerName && formData.membershipId;

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg">
        <h2 className="text-sm font-bold text-[#2B78C5]">{initialData?.id ? 'Edit' : 'Add'} Membership</h2>
        <button onClick={onClose} className="p-1.5 hover:bg-gray-200 rounded-full transition-all shadow">
          <X size={20} />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Scan Section */}
        {!initialData?.id && (
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setShowAIScanner(!showAIScanner)}
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 text-[#2B78C5] font-semibold text-xs hover:scale-105 transition-transform shadow-lg"
            >
              <Sparkles size={14} /> {showAIScanner ? 'Hide Smart Scan' : 'Smart Scan'}
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-green-50 border border-green-300 text-green-700 font-semibold text-xs hover:scale-105 transition-transform shadow-lg"
            >
              <Camera size={14} /> Scan Card
            </button>
            <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleImageUpload} capture="environment" />
          </div>
        )}

        {/* AI Scanner */}
        {showAIScanner && (
          <div className="space-y-2 p-3 bg-gray-50 rounded-xl border border-gray-200 shadow-inner animate-in slide-in-from-top-2 duration-300">
            <textarea
              className="w-full p-2 text-xs border rounded-lg outline-none min-h-[80px] resize-none focus:ring-2 focus:ring-[#2B78C5] shadow-sm"
              placeholder="Paste text here..."
              value={scanText}
              onChange={(e) => setScanText(e.target.value)}
            />
            <button
              onClick={handleAIScan}
              disabled={isScanning}
              className="w-full bg-[#2B78C5] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#1A4B82] transition-colors shadow-md"
            >
              {isScanning ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />} Extract
            </button>
          </div>
        )}

        {/* Loading */}
        {isScanning && (
          <div className="flex flex-col items-center justify-center p-6 space-y-2">
            <Loader2 className="animate-spin text-blue-500" size={28} />
            <p className="text-xs font-bold text-blue-500 uppercase tracking-widest animate-pulse">
              AI is analyzing...
            </p>
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-3">
          {/* Category */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Category</label>
            <div className="grid grid-cols-3 gap-2">
              {[Category.AIRLINES, Category.HOTELS, Category.CABS].map(c => (
                <button
                  key={c}
                  onClick={() => setFormData({ ...formData, category: c })}
                  className={`p-2 rounded-lg text-xs font-bold border transition-all ${formData.category === c
                      ? 'bg-[#2B78C5] text-white border-[#2B78C5] shadow-md'
                      : 'bg-white border-gray-200 text-gray-500 shadow-sm'
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Provider Name */}
          <div className="space-y-1 relative" ref={providerRef}>
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Provider</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select or type..."
                value={formData.providerName || ''}
                onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                onFocus={() => setShowProviderDropdown(true)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#2B78C5] text-sm shadow-sm"
              />
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>

            {showProviderDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 shadow-lg rounded-lg max-h-48 overflow-y-auto z-50 animate-in slide-in-from-top-2 duration-300">
                {POPULAR_PROVIDERS[formData.category as Category]
                  .filter(p => p.toLowerCase().includes((formData.providerName || '').toLowerCase()))
                  .map(p => {
                    const logoUrl = `./companyLogos/${p}.png`;
                    return (
                      <button
                        key={p}
                        onClick={() => selectProvider(p)}
                        className="w-full flex items-center gap-3 px-3 py-2 hover:bg-blue-50 text-sm font-medium border-b border-gray-50 last:border-0"
                      >
                        <img src={logoUrl} alt={p} className="w-5 h-5 object-contain rounded-sm" onError={(e) => (e.currentTarget.style.display = 'none')} />
                        <span>{p}</span>
                      </button>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Membership ID */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Membership ID</label>
            <input
              type="text"
              placeholder="ID Number"
              value={formData.membershipId || ''}
              onChange={(e) => setFormData({ ...formData, membershipId: e.target.value })}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#2B78C5] text-sm shadow-sm"
            />
          </div>

          {/* Conditional Fields */}
          {formData.category === Category.AIRLINES && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Flyer Program</label>
              <input
                type="text"
                placeholder="e.g. MileagePlus"
                value={formData.frequentFlyerProgram || ''}
                onChange={(e) => setFormData({ ...formData, frequentFlyerProgram: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#2B78C5] text-sm shadow-sm"
              />
            </div>
          )}

          {formData.category === Category.HOTELS && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Status Tier</label>
              <input
                type="text"
                placeholder="e.g. Platinum"
                value={formData.tier || ''}
                onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#2B78C5] text-sm shadow-sm"
              />
            </div>
          )}

          {formData.category === Category.CABS && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Corporate Code (Optional)</label>
              <input
                type="text"
                placeholder="e.g. AMEX-2024"
                value={formData.corporateCode || ''}
                onChange={(e) => setFormData({ ...formData, corporateCode: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#2B78C5] text-sm shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="mt-4">
          <button
            onClick={() => onSave(formData)}
            disabled={!isFormValid || isScanning}
            className="w-full bg-[#2B78C5] text-white py-2.5 rounded-lg font-bold hover:bg-[#1A4B82] transition-colors shadow-lg text-sm"
          >
            {initialData?.id ? 'Update Membership' : 'Save Membership'}
          </button>
        </div>
      </div>
    </div>
  );
};




// --- MAIN APP ---

export const LoyaltyMembership: React.FC = () => {

  const [memberships, setMemberships] = useState<Membership[]>(INITIAL_MEMBERSHIPS);
  const [currentView, setCurrentView] = useState<ViewMode>('list');
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMembership, setEditingMembership] = useState<Membership | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMemberships = useMemo(() => {
    return memberships.filter(m => {
      const matchesCategory = selectedCategory === Category.ALL || m.category === selectedCategory;
      const matchesSearch = m.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.membershipId.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [memberships, selectedCategory, searchQuery]);

  const verifiedMemberships = useMemo(() => memberships.filter(m => m.status === MembershipStatus.VERIFIED), [memberships]);

  const handleSave = (data: Partial<Membership>) => {
    if (data.id) {
      setMemberships(prev => prev.map(m => m.id === data.id ? { ...m, ...data } as Membership : m));
    } else {
      const newM: Membership = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
        status: MembershipStatus.VERIFIED,
        isPrimary: !memberships.some(m => m.category === data.category),
        logoUrl: data.logoUrl || `https://logo.clearbit.com/${data.providerName?.toLowerCase().replace(/\s+/g, '')}.com`
      } as Membership;
      setMemberships(prev => [newM, ...prev]);
    }
    setIsFormOpen(false);
    setEditingMembership(undefined);
  };

  const handleSetPrimary = (membership: Membership) => {
    setMemberships(prev => prev.map(m => m.category === membership.category ? { ...m, isPrimary: m.id === membership.id } : m));
  };

  const handleDelete = (id: string) => { if (confirm('Remove membership?')) setMemberships(prev => prev.filter(m => m.id !== id)); };

  const renderNav = () => (
    <div className="flex items-center gap-6">
      {[{ id: 'list', label: 'Home', icon: Home }, { id: 'verified', label: 'Verified', icon: CheckCircle2 }, { id: 'profile', label: 'Profile', icon: User }, { id: 'settings', label: 'Settings', icon: Settings }].map(n => (
        <button key={n.id} onClick={() => setCurrentView(n.id as ViewMode)} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${currentView === n.id ? 'bg-blue-50 text-[#2B78C5]' : 'text-gray-400 hover:text-gray-600'}`}>
          <n.icon size={16} /> <span className="hidden sm:inline uppercase tracking-widest">{n.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 md:pb-8">

      {/* Top actions (uses default navbar above) */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 flex justify-end">
          <button
            onClick={() => {
              setEditingMembership(undefined);
              setIsFormOpen(true);
            }}
            className="bg-[#2B78C5] text-white px-4 py-2.5 rounded-xl
                     font-bold text-sm flex items-center gap-2
                     hover:bg-[#1A4B82] shadow-xl shadow-blue-100"
          >
            <Plus size={18} />
            Add New
          </button>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {currentView === 'list' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800">My Memberships</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl outline-none shadow-sm text-sm" />
                </div>
                <div className="flex gap-1 overflow-x-auto hide-scrollbar">
                  {CATEGORIES.map(c => (
                    <button key={c} onClick={() => setSelectedCategory(c)} className={`px-4 py-2 rounded-xl text-[10px] font-bold whitespace-nowrap uppercase tracking-widest border transition-all ${selectedCategory === c ? 'bg-[#2B78C5] text-white border-[#2B78C5] shadow-md' : 'bg-white border-gray-100 text-gray-400'}`}>{c}</button>
                  ))}
                </div>
              </div>
            </div>
            {filteredMemberships.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-3xl border border-gray-100 flex flex-col items-center">
                <Filter size={48} className="text-gray-100 mb-4" />
                <h3 className="text-lg font-bold text-gray-400">No active memberships</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMemberships.map(m => <MembershipCard key={m.id} membership={m} isPrivacyMode={isPrivacyMode} onDelete={handleDelete} onEdit={(m) => { setEditingMembership(m); setIsFormOpen(true); }} onSetPrimary={handleSetPrimary} />)}
              </div>
            )}
          </div>
        )}

        {currentView === 'verified' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#2B78C5] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-lg"><CheckCircle2 size={32} /></div>
                  <h2 className="text-2xl font-black">Verification Vault</h2>
                </div>
                <p className="text-blue-50 text-sm leading-relaxed max-w-lg">All memberships listed below are synchronized with the Global Distribution System. Your status is automatically applied at the time of booking.</p>
              </div>
              <Sparkles className="absolute -bottom-10 -right-10 text-white/10 w-64 h-64" />
            </div>
            <div className="grid gap-4">
              {verifiedMemberships.map(m => (
                <div key={m.id} className="bg-white rounded-2xl p-5 flex items-center justify-between border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <img src={m.logoUrl} className="w-12 h-12 object-contain rounded-xl p-1 bg-gray-50" alt="" />
                    <div>
                      <p className="font-bold text-base">{m.providerName}</p>
                      <p className="text-xs text-gray-400 font-mono tracking-tight">{m.membershipId}</p>
                    </div>
                  </div>
                  <StatusBadge status={m.status} />
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'profile' && (
          <div className="max-w-xl mx-auto space-y-8">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-[#2B78C5] text-4xl font-black border-[6px] border-white shadow-xl">JD</div>
                <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
              </div>
              <h2 className="mt-4 text-2xl font-black text-gray-800">John Quincy Doe</h2>
              <p className="text-gray-400 font-medium">Enterprise Tier Traveler</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
              {[{ icon: Building, label: 'Organization', val: 'OmVrti Corp' }, { icon: User, label: 'Legal Name', val: 'JOHN Q. DOE' }, { icon: Globe, label: 'Home Base', val: 'San Francisco (SFO)' }].map(i => (
                <div key={i.label} className="flex items-center gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400"><i.icon size={20} /></div>
                  <div className="flex-1"><p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{i.label}</p><p className="font-bold text-gray-700">{i.val}</p></div>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-50">
                <button className="w-full flex items-center justify-between py-2 text-red-500 font-bold text-sm"><span className="flex items-center gap-2"><LogOut size={18} /> Log Out</span> <ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'settings' && (
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-black text-gray-800">Loyalty Memberships</h2>
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl">
              <button onClick={() => setIsPrivacyMode(!isPrivacyMode)} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${isPrivacyMode ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>{isPrivacyMode ? <ShieldOff size={24} /> : <Shield size={24} />}</div>
                  <div className="text-left"><p className="font-bold">Privacy Mode</p><p className="text-xs text-gray-400">Hide sensitive IDs in public views</p></div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isPrivacyMode ? 'bg-red-500' : 'bg-gray-200'}`}><div className={`w-4 h-4 bg-white rounded-full transition-transform ${isPrivacyMode ? 'translate-x-6' : ''}`} /></div>
              </button>
              {[{ icon: Bell, label: 'Smart Alerts', desc: 'Sync & expiry notifications', color: 'bg-yellow-50 text-yellow-600' }, { icon: CreditCard, label: 'Wallet Sync', desc: 'Auto-apply company credit cards', color: 'bg-green-50 text-green-600' }].map(s => (
                <button key={s.label} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 border-t border-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${s.color}`}><s.icon size={24} /></div>
                    <div className="text-left"><p className="font-bold">{s.label}</p><p className="text-xs text-gray-400">{s.desc}</p></div>
                  </div>
                  <ChevronRight size={20} className="text-gray-300" />
                </button>
              ))}
            </div>
            <p className="text-center text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">Build 24.11.02 • Enterprise Cloud</p>
          </div>
        )}
      </main>

      <MobileBottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        setIsFormOpen={setIsFormOpen}
        setEditingMembership={setEditingMembership}
      />

      {/* Form Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center md:justify-center p-0 md:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsFormOpen(false)} />
          <div className="relative w-full md:max-w-2xl h-[92vh] md:h-auto animate-in slide-in-from-bottom md:zoom-in duration-300">
            <AddMembershipForm initialData={editingMembership} onClose={() => setIsFormOpen(false)} onSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoyaltyMembership




type ViewMode = "list" | "verified" | "profile" | "settings";

interface MobileBottomNavProps {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  setIsFormOpen: (open: boolean) => void;
  setEditingMembership: (id: string | undefined) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  setCurrentView,
  setIsFormOpen,
  setEditingMembership,
}) => {
  const leftItems = [
    { id: "list", label: "Home", icon: Home },
    { id: "verified", label: "Verified", icon: CheckCircle2 },
  ];

  const rightItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Setup", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around md:hidden px-4 z-40">
      {/* Left buttons */}
      {leftItems.map((n) => (
        <button
          key={n.id}
          onClick={() => setCurrentView(n.id as ViewMode)}
          className={`flex flex-col items-center gap-1 ${currentView === n.id ? "text-[#2B78C5]" : "text-gray-400"
            }`}
        >
          <n.icon size={22} />
          <span className="text-[10px] font-bold uppercase">{n.label}</span>
        </button>
      ))}

      {/* Central Add Button */}
      <div className="-mt-12">
        <button
          onClick={() => {
            setEditingMembership(undefined);
            setIsFormOpen(true);
          }}
          className="w-16 h-16 bg-[#2B78C5] rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-300 border-[6px] border-white active:scale-90 transition-transform"
        >
          <Plus size={32} />
        </button>
      </div>

      {/* Right buttons */}
      {rightItems.map((n) => (
        <button
          key={n.id}
          onClick={() => setCurrentView(n.id as ViewMode)}
          className={`flex flex-col items-center gap-1 ${currentView === n.id ? "text-[#2B78C5]" : "text-gray-400"
            }`}
        >
          <n.icon size={22} />
          <span className="text-[10px] font-bold uppercase">{n.label}</span>
        </button>
      ))}
    </nav>
  );
};
