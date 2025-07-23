import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { User } from 'lucide-react';

type Props = {
    control: Control<any>
}

const InputField = ({ control }: Props) => {
    return (
        <FormField
            control={control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div className="relative w-full">
                            <User className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Nom"
                                {...field}
                                className="w-full p-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 focus:border-transparent transition-all"
                            />
                        </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                </FormItem>
            )}
        />
    );
}


export default InputField