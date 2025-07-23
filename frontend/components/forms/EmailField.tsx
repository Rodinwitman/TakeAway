'use client'

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Control } from "react-hook-form";

type Props = {
  control: Control<any>; // ou plus précisément si tu as un type de form
};

const EmailField = ({ control }: Props) => (
  <FormField
    control={control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="email"
              placeholder="xxxxxxxx@gmail.com"
              {...field}
              className="w-full pl-10 pr-10 py-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 focus:border-transparent transition-all"
            />
          </div>
        </FormControl>
        <FormMessage className="text-xs text-red-500" />
      </FormItem>
    )}
  />
);

export default EmailField;
