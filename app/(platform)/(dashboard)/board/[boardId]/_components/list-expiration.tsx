"use client";
import { Calendar } from "@/components/ui/calendar";
import { List } from "@prisma/client";
import { ElementRef, SetStateAction, useEffect, useRef, useState } from "react";


import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { updateExpiryDate } from "@/action/update-expiryDate";
import { string } from "zod";
import { cn } from "@/lib/utils";
import { CalendarCheck2 } from "lucide-react";

interface ListExpirationProps {
    data: List,
}

export const ListExpiration =  ({data}: ListExpirationProps) => {
  const [isExpired, setIsExpired] = useState(false);
  const [isNearExpiry, setIsNearExpiry] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [expiryDate, setExpiryDate] = useState<Date | undefined>(data.expiryDate ? new Date(data.expiryDate): undefined);

  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (data.expiryDate) {
      const now = new Date().getTime();
      const expiryDate = new Date(data.expiryDate).getTime();
      const diffTime = expiryDate - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      console.log(diffDays)

      setIsExpired(diffDays < 0);
      setIsNearExpiry(diffDays <= 7 && diffDays >= 0);
    }
  }, [data.expiryDate])

  const { execute } = useAction(updateExpiryDate, {
    onSuccess: data => {
        toast.success('Expiration date was set')
        setIsEditing(false)
    },
    onError: error => {
        toast.error(error);
    }
  })

//   const parseDate = (dateString: string): Date | undefined => {
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) {
//       return undefined; // Return undefined for invalid dates
//     }
//     return date;
//   };
  
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setExpiryDate(date);
      setIsEditing(false);
      console.log(`Saving new expiry date: ${date.toISOString()}`);
      // TODO: Save the updated expiry date
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (formData: FormData) => {
    if(expiryDate) {
      const id = formData.get('id') as string;
      const boardId = formData.get('boardId') as string;
      const expiryDate = formData.get('expiryDate') as string;

      console.log('handleSubmit was submitted. Date:', expiryDate);
      console.log(id, expiryDate, boardId)
      
      try {
        const result = await execute({
          id,
          expiryDate,
          boardId,
        });
        console.log('Result from execute: ', result, 'id: ',id, 'boardId: ', boardId, 'expiryDate: ', expiryDate)
      } catch (error) {
        console.error('Error during execute: ', error)
      }
    }
    
  }

//   if(isEditing) {
//     return (
//         <div onClick={enableEditing}>
//             <Calendar
//                 mode="single" 
//                 selected={parseDate(expiryDate)}
//                 onSelect={() => {}}
//             />
//         </div>
//     )
//   }

  return (
    <div className={`List p-4 rounded-lg`}>
      {data.expiryDate && (
        <span className={cn("text-[11px] text-neutral-400 flex", isExpired ? "text-red-500" : isNearExpiry ? "text-orange-500" : "" )}><CalendarCheck2 className="w-4 h-4 mr-2"/> {new Date(data.expiryDate).toLocaleDateString()}</span>
      )}
      <div className="flex flex-col items-start">
        <Popover>
          <PopoverTrigger asChild>
            <Button size='sm' className="text-[10px] text-neutral-500 font-bold" variant='ghost' onClick={handleEditClick}>Select expiry date</Button>
          </PopoverTrigger>
          <PopoverContent align="center" side="bottom" sideOffset={10} className="w-80 p-4">
              <form action={handleSubmit} ref={formRef}>
                  <input hidden name="id" value={data.id} />
                  <input hidden name="boardId" value={data.boardId} />
                  <input hidden name="expiryDate" value={expiryDate ? expiryDate.toISOString() : ''} />
                  <Calendar
                      mode="single"
                      selected={expiryDate ? new Date(expiryDate) : undefined}
                      onSelect={handleDateSelect}
                  />
                  <div>
                      <Button type='submit'>Save</Button>
                      <PopoverClose asChild>
                          <Button className="mt-4">Close</Button>
                      </PopoverClose>
                  </div>
              </form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
