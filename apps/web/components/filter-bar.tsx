"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const QUICK = ["Semua", "MG 1/100", "RG 1/144", "PG 1/60", "HG 1/144"];

const GROUPS = [
  { title: "Grade", options: ["HG 1/144", "RG 1/144", "MG 1/100", "PG 1/60"] },
  {
    title: "Seri",
    options: [
      "Universal Century",
      "Iron-Blooded Orphans",
      "Witch from Mercury",
      "SEED",
    ],
  },
  {
    title: "Gaya",
    options: ["Clean / straight", "Weathered", "Battle damage", "Cel shading"],
  },
  { title: "Teknik", options: ["Airbrush", "Scribing", "Masking", "LED"] },
  { title: "Status", options: ["Resmi", "Pihak ketiga", "Bootleg / KW"] },
];

export function FilterBar() {
  const [active, setActive] = useState(QUICK[0]);

  return (
    <section
      className="flex items-center gap-2 py-4"
      aria-label="Kategori dan filter"
    >
      <div className="flex flex-1 gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {QUICK.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            aria-pressed={active === item}
            className={cn(
              "h-8 shrink-0 rounded-full border px-3 text-[12.5px] font-medium transition-colors",
              active === item
                ? "border-foreground bg-foreground text-white"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="h-8 shrink-0 gap-1.5">
            <SlidersHorizontal />
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="max-h-[82vh]">
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
            <SheetDescription>
              Pilih kategori untuk mempersempit feed.
            </SheetDescription>
          </SheetHeader>

          <form id="filter-form" className="overflow-y-auto px-4 pb-2">
            {GROUPS.map((group) => (
              <fieldset key={group.title} className="mb-4">
                <legend className="mb-2 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {group.title}
                </legend>
                {group.options.map((option) => (
                  <label
                    key={option}
                    className="flex min-h-10 items-center gap-2.5 text-sm"
                  >
                    <input type="checkbox" className="size-4 accent-primary" />
                    {option}
                  </label>
                ))}
              </fieldset>
            ))}
          </form>

          <SheetFooter className="flex-row gap-2">
            <Button
              type="reset"
              form="filter-form"
              variant="outline"
              className="h-10 flex-1"
            >
              Reset
            </Button>
            <SheetClose asChild>
              <Button className="h-10 flex-1">Terapkan</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
}
