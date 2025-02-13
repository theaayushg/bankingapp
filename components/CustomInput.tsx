import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// import { Button } from "@/components/ui/button"
import {
//   Form,
  FormControl,
//   FormDescription,
  FormField,
//   FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Control } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: 'email' | 'password',
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder } : CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className="form-item">
                <FormLabel className="form-label">
                    {label}
                </FormLabel>
                <div className="flex w-full flex-col">
                <FormControl>
                    <Input 
                        placeholder={placeholder}
                        className="input-class"
                        type='password'
                        {...field}/>
                                
                </FormControl>
                <FormMessage
                    className="form-message mt-2" />
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput