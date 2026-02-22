"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface blogSearchInputs {
  allTags: string[];
  className: string;
  setallTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTags: string[];
  setselectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Blogsearch: React.FC<blogSearchInputs> = ({
  allTags,
  setallTags,
  selectedTags,
  setselectedTags,
  className,
}) => {
  function removeTag(value: string) {
    let newSelectedTags = selectedTags.slice();
    let newAllTags = allTags.slice();
    newAllTags.push(value);
    newSelectedTags.splice(newSelectedTags.indexOf(value), 1);
    setselectedTags(newSelectedTags);
    setallTags(newAllTags);
  }
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            variant="ghost"
            aria-expanded={open}
            className={twMerge(className, "px-0")}
          >
            Filter with tags
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Find tags..." className="h-9" />
            <CommandList>
              <CommandEmpty>No tag found.</CommandEmpty>
              <CommandGroup>
                {allTags.map((tag) => (
                  <CommandItem
                    key={tag}
                    value={tag}
                    onSelect={() => {
                      let newSelectedTags = selectedTags.slice();
                      let newAllTags = allTags.slice();
                      newSelectedTags.push(tag);
                      newAllTags.splice(newAllTags.indexOf(tag), 1);
                      // Sorting the selected tags because it is a requirement
                      // for the function that displays filtered blogs
                      newSelectedTags.sort((a, b) => {
                        if (a > b) {
                          return 1;
                        } else {
                          return -1;
                        }
                      });
                      setselectedTags(newSelectedTags);
                      setallTags(newAllTags);
                      setOpen(false);
                    }}
                  >
                    {tag}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex gap-1">
        {selectedTags.map((value) => (
          <span
            className="m-0 p-1 text-text opacity-70 rounded font-mono bg-secondary text-sm"
            key={value}
          >
            <span className="m-0 px-1">{"#" + value}</span>
            <button
              onClick={() => removeTag(value)}
              className="m-0 cursor-pointer px-2 font-bold hover:bg-red-400"
            >
              X
            </button>
          </span>
        ))}
      </div>
    </>
  );
};
export default Blogsearch;
