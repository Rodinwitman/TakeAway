'use client'

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Key } from "lucide-react";
import { Control } from "react-hook-form";

type Props = {
  control: Control<any>;
  showPassword: boolean;
  handleShowPassword: () => void;
};

const PasswordField = ({ control, showPassword, handleShowPassword }: Props) => (
  <FormField
    control={control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <div className="relative w-full">
            <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="*********"
              {...field}
              className="w-full pl-10 pr-12 py-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 transition-all"
            />
          </div>
        </FormControl>
        <FormMessage className="text-xs text-red-500" />
      </FormItem>
    )}
  />
);

export default PasswordField;
