import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Sparkles,
  Camera,
  Loader2,
  ChevronDown
} from "lucide-react";

import { Membership, Category } from "../types";
import { POPULAR_PROVIDERS, PROGRAMS_MAP } from "../constants";
import { fileToBase64 } from "../utils";

/* ------------------------------------------------------------------ */
/*  API / AI STUBS (plug your backend here later)                      */
/* ------------------------------------------------------------------ */

async function extractMembershipFromImage(
  _base64: string,
  _mime: string
) {
  // TODO: replace with real API
  return {
    providerName: "United Airlines",
    membershipId: "UA-12345678",
    category: "Airlines",
    extraField: "MileagePlus"
  };
}

/* ------------------------------------------------------------------ */

interface Props {
  initial?: Membership;
  onSave(data: Partial<Membership>): void;
  onClose(): void;
}

export const AddMembershipForm: React.FC<Props> = ({
  initial,
  onSave,
  onClose
}) => {

  const [formData, setFormData] = useState<Partial<Membership>>(
    initial ?? {
      category: Category.AIRLINES
    }
  );

  const [isScanning, setIsScanning] = useState(false);
  const [showAIScanner, setShowAIScanner] = useState(false);
  const [scanText, setScanText] = useState("");

  const [showProviderDropdown, setShowProviderDropdown] =
    useState(false);

  const providerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ---------------------------------------------------- */
  /*  Close provider dropdown on outside click            */
  /* ---------------------------------------------------- */

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        providerRef.current &&
        !providerRef.current.contains(e.target as Node)
      ) {
        setShowProviderDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ---------------------------------------------------- */

  const applyAIResult = (result: any) => {

    const cat =
      Object.values(Category).find(
        c => c.toLowerCase() === result.category?.toLowerCase()
      ) ?? Category.AIRLINES;

    setFormData(prev => ({
      ...prev,
      providerName: result.providerName,
      membershipId: result.membershipId,
      category: cat as Category,
      frequentFlyerProgram:
        cat === Category.AIRLINES ? result.extraField : "",
      tier:
        cat === Category.HOTELS ? result.extraField : "",
      corporateCode:
        cat === Category.CABS ? result.extraField : "",
      logoUrl: result.providerName
        ? `/companyLogos/${result.providerName}.png`
        : prev.logoUrl
    }));
  };

  /* ---------------------------------------------------- */
  /*  Text AI Scan                                        */
  /* ---------------------------------------------------- */

  const handleAIScan = async () => {
    if (!scanText.trim()) return;

    setIsScanning(true);

    try {
      // stub result
      const result = {
        providerName: "United Airlines",
        membershipId: "UA-77889900",
        category: "Airlines",
        extraField: "MileagePlus"
      };

      applyAIResult(result);
      setShowAIScanner(false);
      setScanText("");
    } catch {
      alert("AI extraction failed.");
    } finally {
      setIsScanning(false);
    }
  };

  /* ---------------------------------------------------- */
  /*  Image scan                                          */
  /* ---------------------------------------------------- */

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];
    if (!file) return;

    setIsScanning(true);

    try {
      const base64 = await fileToBase64(file);
      const result = await extractMembershipFromImage(
        base64,
        file.type
      );

      applyAIResult(result);
      setShowAIScanner(false);
    } catch {
      alert("Visual scan failed.");
    } finally {
      setIsScanning(false);
    }
  };

  /* ---------------------------------------------------- */

  const selectProvider = (name: string) => {

    setFormData(prev => ({
      ...prev,
      providerName: name,
      frequentFlyerProgram:
        PROGRAMS_MAP[name] ?? prev.frequentFlyerProgram,
      logoUrl: `/companyLogos/${name}.png`
    }));

    setShowProviderDropdown(false);
  };

  const isFormValid =
    Boolean(formData.providerName) &&
    Boolean(formData.membershipId);

  /* ---------------------------------------------------- */

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

      {/* ------------------------------------------------ */}
      {/* Header                                           */}
      {/* ------------------------------------------------ */}

      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-sm font-bold text-[#2B78C5]">
          {initial?.id ? "Edit" : "Add"} Membership
        </h2>

        <button
          onClick={onClose}
          className="p-1.5 hover:bg-gray-200 rounded-full"
        >
          <X size={18} />
        </button>
      </div>

      {/* ------------------------------------------------ */}
      {/* Body                                             */}
      {/* ------------------------------------------------ */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* ---------------------------------------------- */}
        {/* Scan actions (only for add)                    */}
        {/* ---------------------------------------------- */}

        {!initial?.id && (
          <div className="grid grid-cols-2 gap-2">

            <button
              onClick={() => setShowAIScanner(v => !v)}
              className="flex items-center justify-center gap-2 p-2 rounded-xl
                         bg-blue-50 border border-blue-200 text-[#2B78C5]
                         font-semibold text-xs"
            >
              <Sparkles size={14} />
              {showAIScanner ? "Hide Smart Scan" : "Smart Scan"}
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-2 p-2 rounded-xl
                         bg-green-50 border border-green-200 text-green-700
                         font-semibold text-xs"
            >
              <Camera size={14} />
              Scan Card
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
            />
          </div>
        )}

        {/* ---------------------------------------------- */}
        {/* Text AI scanner                                */}
        {/* ---------------------------------------------- */}

        {showAIScanner && (
          <div className="space-y-2 p-3 bg-gray-50 rounded-xl border">

            <textarea
              value={scanText}
              onChange={e => setScanText(e.target.value)}
              className="w-full p-2 text-xs border rounded-lg resize-none min-h-[80px]"
              placeholder="Paste membership text here…"
            />

            <button
              disabled={isScanning}
              onClick={handleAIScan}
              className="w-full bg-[#2B78C5] text-white py-2 rounded-lg
                         text-sm font-bold flex items-center justify-center gap-2"
            >
              {isScanning ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Sparkles size={14} />
              )}
              Extract
            </button>
          </div>
        )}

        {/* ---------------------------------------------- */}
        {/* Loading indicator                              */}
        {/* ---------------------------------------------- */}

        {isScanning && (
          <div className="flex flex-col items-center py-6 gap-2">
            <Loader2
              size={28}
              className="animate-spin text-blue-500"
            />
            <p className="text-xs font-bold text-blue-500">
              AI is analysing…
            </p>
          </div>
        )}

        {/* ---------------------------------------------- */}
        {/* Category                                       */}
        {/* ---------------------------------------------- */}

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-600 uppercase">
            Category
          </label>

          <div className="grid grid-cols-3 gap-2">
            {[Category.AIRLINES, Category.HOTELS, Category.CABS].map(
              c => (
                <button
                  key={c}
                  onClick={() =>
                    setFormData(p => ({ ...p, category: c }))
                  }
                  className={`p-2 rounded-lg text-xs font-bold border
                    ${
                      formData.category === c
                        ? "bg-[#2B78C5] text-white border-[#2B78C5]"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                >
                  {c}
                </button>
              )
            )}
          </div>
        </div>

        {/* ---------------------------------------------- */}
        {/* Provider                                       */}
        {/* ---------------------------------------------- */}

        <div
          ref={providerRef}
          className="space-y-1 relative"
        >
          <label className="text-xs font-bold text-gray-600 uppercase">
            Provider
          </label>

          <div className="relative">
            <input
              value={formData.providerName ?? ""}
              onFocus={() => setShowProviderDropdown(true)}
              onChange={e =>
                setFormData(p => ({
                  ...p,
                  providerName: e.target.value
                }))
              }
              placeholder="Select or type…"
              className="w-full p-2.5 bg-gray-50 border border-gray-200
                         rounded-lg outline-none text-sm"
            />

            <ChevronDown
              size={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {showProviderDropdown && (
            <div className="absolute left-0 right-0 mt-1 bg-white border
                            shadow-lg rounded-lg max-h-48 overflow-y-auto z-50">

              {(POPULAR_PROVIDERS[
                formData.category as Category
              ] ?? [])
                .filter(p =>
                  p
                    .toLowerCase()
                    .includes(
                      (formData.providerName ?? "").toLowerCase()
                    )
                )
                .map(p => (
                  <button
                    key={p}
                    onClick={() => selectProvider(p)}
                    className="w-full flex items-center gap-3 px-3 py-2
                               hover:bg-blue-50 text-sm"
                  >
                    <img
                      src={`/companyLogos/${p}.png`}
                      className="w-5 h-5 object-contain"
                      onError={e =>
                        (e.currentTarget.style.display = "none")
                      }
                    />
                    {p}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* ---------------------------------------------- */}
        {/* Membership ID                                  */}
        {/* ---------------------------------------------- */}

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-600 uppercase">
            Membership ID
          </label>

          <input
            value={formData.membershipId ?? ""}
            onChange={e =>
              setFormData(p => ({
                ...p,
                membershipId: e.target.value
              }))
            }
            className="w-full p-2.5 bg-gray-50 border border-gray-200
                       rounded-lg outline-none text-sm"
            placeholder="ID number"
          />
        </div>

        {/* ---------------------------------------------- */}
        {/* Conditional fields                             */}
        {/* ---------------------------------------------- */}

        {formData.category === Category.AIRLINES && (
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Flyer Program
            </label>

            <input
              value={formData.frequentFlyerProgram ?? ""}
              onChange={e =>
                setFormData(p => ({
                  ...p,
                  frequentFlyerProgram: e.target.value
                }))
              }
              className="w-full p-2.5 bg-gray-50 border border-gray-200
                         rounded-lg text-sm"
              placeholder="e.g. MileagePlus"
            />
          </div>
        )}

        {formData.category === Category.HOTELS && (
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Status Tier
            </label>

            <input
              value={formData.tier ?? ""}
              onChange={e =>
                setFormData(p => ({
                  ...p,
                  tier: e.target.value
                }))
              }
              className="w-full p-2.5 bg-gray-50 border border-gray-200
                         rounded-lg text-sm"
              placeholder="e.g. Gold"
            />
          </div>
        )}

        {formData.category === Category.CABS && (
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Corporate Code (optional)
            </label>

            <input
              value={formData.corporateCode ?? ""}
              onChange={e =>
                setFormData(p => ({
                  ...p,
                  corporateCode: e.target.value
                }))
              }
              className="w-full p-2.5 bg-gray-50 border border-gray-200
                         rounded-lg text-sm"
              placeholder="e.g. AMEX-2024"
            />
          </div>
        )}

        {/* ---------------------------------------------- */}
        {/* Save                                           */}
        {/* ---------------------------------------------- */}

        <div className="pt-3">
          <button
            disabled={!isFormValid || isScanning}
            onClick={() => onSave(formData)}
            className="w-full bg-[#2B78C5] text-white py-2.5 rounded-lg
                       font-bold text-sm disabled:opacity-50"
          >
            {initial?.id ? "Update Membership" : "Save Membership"}
          </button>
        </div>
      </div>
    </div>
  );
};
