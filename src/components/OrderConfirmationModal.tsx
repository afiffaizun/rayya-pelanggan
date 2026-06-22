/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  CreditCard,
  ChevronDown,
  RefreshCw,
  PlusSquare,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { WaterType, PaymentMethod } from "../types";

interface OrderConfirmationModalProps {
  qty: number;
  waterType: WaterType;
  paymentMethod: PaymentMethod;
  price: number;
  address: string;
  recipientName: string;
  onConfirm: (address: string, paymentMethod: PaymentMethod, recipientName: string) => void;
  onCancel: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  qty,
  waterType,
  paymentMethod: initialPaymentMethod,
  price,
  address: initialAddress,
  recipientName: initialRecipientName,
  onConfirm,
  onCancel,
}) => {
  const [editAddress, setEditAddress] = useState(initialAddress);
  const [editPaymentMethod, setEditPaymentMethod] =
    useState<PaymentMethod>(initialPaymentMethod);
  const [editRecipientName, setEditRecipientName] = useState(initialRecipientName);

  const unitPrice = waterType === WaterType.REFILL ? 6000 : 18000;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-white flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100 bg-white shrink-0">
        <button
          onClick={onCancel}
          className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-[#0b5ce5] stroke-[2.5]" />
        </button>
        <span className="text-[16px] font-bold text-slate-800 tracking-tight">
          Konfirmasi Pesanan
        </span>
        <div className="w-8" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-6 space-y-4">
        {/* Ringkasan Pesanan */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm space-y-3">
          <h4 className="text-[13px] font-extrabold text-slate-800 flex items-center gap-1.5">
            <RefreshCw className="w-4 h-4 text-slate-500" /> Ringkasan Pesanan
          </h4>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[12px]">
              <div className="flex items-center gap-2 text-slate-500">
                {waterType === WaterType.REFILL ? (
                  <RefreshCw className="w-4 h-4 text-cyan-500" />
                ) : (
                  <PlusSquare className="w-4 h-4 text-blue-500" />
                )}
                <span className="font-medium">Tipe Air</span>
              </div>
              <span className="font-extrabold text-slate-800">
                {waterType === WaterType.REFILL
                  ? "Isi Ulang (Refill)"
                  : "Galon Baru + Air"}
              </span>
            </div>

            <div className="flex items-center justify-between text-[12px]">
              <span className="text-slate-500 font-medium ml-6">Jumlah</span>
              <span className="font-extrabold text-slate-800">
                {qty} Galon
              </span>
            </div>

            <div className="flex items-center justify-between text-[12px]">
              <span className="text-slate-500 font-medium ml-6">
                Harga Satuan
              </span>
              <span className="font-semibold text-slate-600">
                Rp {unitPrice.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="border-t border-slate-100 pt-2.5 flex items-center justify-between">
              <span className="text-[13px] font-extrabold text-slate-800">
                Total
              </span>
              <span className="text-[16px] font-extrabold text-[#0b5ce5]">
                Rp {price.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>

        {/* Metode Pembayaran (Editable) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm space-y-2">
          <h4 className="text-[13px] font-extrabold text-slate-800 flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-slate-500" /> Metode Pembayaran
          </h4>
          <div className="relative">
            <select
              value={editPaymentMethod}
              onChange={(e) =>
                setEditPaymentMethod(e.target.value as PaymentMethod)
              }
              className="w-full h-12 pl-4 pr-10 rounded-xl bg-slate-50 text-[13px] font-semibold text-slate-700 border border-slate-200 outline-none appearance-none transition-colors focus:border-[#0b5ce5]"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="E-Wallet (OVO/Gopay)">
                E-Wallet (OVO/Gopay)
              </option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-slate-600" />
            </span>
          </div>
        </div>

        {/* Nama Penerima (Editable) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm space-y-2">
          <h4 className="text-[13px] font-extrabold text-slate-800 flex items-center gap-1.5">
            <User className="w-4 h-4 text-slate-500" /> Nama Penerima
          </h4>
          <div className="flex items-start gap-2">
            <User className="w-4 h-4 text-[#0b5ce5] mt-0.5 shrink-0" />
            <input
              type="text"
              value={editRecipientName}
              onChange={(e) => setEditRecipientName(e.target.value)}
              placeholder="Masukkan nama penerima..."
              className="flex-1 h-10 px-3 text-[12px] leading-relaxed text-slate-600 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#0b5ce5] transition-colors"
            />
          </div>
        </div>

        {/* Alamat Pengantaran (Editable) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm space-y-2">
          <h4 className="text-[13px] font-extrabold text-slate-800 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-500" /> Alamat Pengantaran
          </h4>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#0b5ce5] mt-0.5 shrink-0" />
            <textarea
              value={editAddress}
              onChange={(e) => setEditAddress(e.target.value)}
              placeholder="Masukkan alamat pengantaran..."
              className="flex-1 min-h-[60px] px-3 py-2 text-[12px] leading-relaxed text-slate-600 bg-slate-50 border border-slate-200 rounded-lg outline-none resize-none focus:border-[#0b5ce5] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="px-5 py-4 border-t border-slate-100 bg-white shrink-0 space-y-2">
        <button
          onClick={() => onConfirm(editAddress, editPaymentMethod, editRecipientName)}
          className="w-full h-11 rounded-xl bg-[#0b5ce5] hover:bg-blue-700 text-white font-bold text-[13px] flex items-center justify-center transition-all active:scale-[0.98] shadow-md shadow-blue-500/10"
        >
          Konfirmasi Pesanan
        </button>
        <button
          onClick={onCancel}
          className="w-full h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[13px] flex items-center justify-center transition-colors"
        >
          Kembali
        </button>
      </div>
    </motion.div>
  );
};
