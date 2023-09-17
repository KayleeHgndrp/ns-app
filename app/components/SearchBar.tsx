'use client'

import { useState, FormEvent } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./inputs/Input";

interface SearchStationProps {
    getSearchResults: (station: any) => void; // Vervang 'any' door het juiste type van 'coin'
}

export default function SearchBar({ getSearchResults }: SearchStationProps) {
    const [query, setQuery] = useState<string>(''); 

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: {
        errors,
      },
      reset
    } = useForm<FieldValues>({
      defaultValues: {
        search: '',
      }
    })

    const search = watch('search')

    return (
        <div className="flex flex-col mt-6 md:flex-row gap-4 rounded-md">
            <Input 
               id="title"
               label="Title"
               disabled={false}
               register={register}
               errors={errors}
               required
               placeholder="Typ uw station"
            />
            <Button 
                label="Zoek station" 
                onClick={()=> {}}
            />
        </div>

    );
}