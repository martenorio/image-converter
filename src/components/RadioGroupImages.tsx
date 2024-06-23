import React, { FC } from "react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils";
import { EImageType } from "image-conversion";
import listOfFormats from "./../utils/FormatsTransform";
interface Props {
  formatToConvert: EImageType | undefined,
  setFormatToConvert: (value: EImageType) => void
}

export const RadioGroupImages: FC<Props> = ({ formatToConvert, setFormatToConvert }) => {
  return (
    <RadioGroup value={formatToConvert} onValueChange={(value) => setFormatToConvert(value as EImageType)} className="flex gap-7">
      {
        listOfFormats.map((f, i) => (
          <React.Fragment key={i}>
            <RadioGroupItem
              value={f.value}
              id={f.label}
              className="peer sr-only"
            />
            <Label
              role="label"
              htmlFor={f.label}
              className={cn((f.value === formatToConvert) ? "border-primary" : "border-muted", "flex flex-col items-center justify-between rounded-md border-2 bg-popover p-4 hover:bg-accent hover:text-accent-foregroun")}
            >
              <img src={f.img} alt="mb-3 h-6 w-6" />
              {f.label}
            </Label>
          </React.Fragment>
        ))
      }
    </RadioGroup>
  )
}
