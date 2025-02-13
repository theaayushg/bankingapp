import React from 'react'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'

// import { Button } from "@/components/ui/button"
import {
//   Form,
  FormControl,
//   FormDescription,
  FormField,
//   FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const CustomInput = ({ form, name, label, placeholder }) => {
  return (
    <FormField
        control={form.control}
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