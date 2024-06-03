"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Exercise1 from "../exercises/Exercise1";
import Exercise2 from "../exercises/Exercise2";
import Exercise3 from "../exercises/Exercise3";
import Exercise4 from "../exercises/Exercise4";

export default function Home() {
  return (
    <main className="flex min-h-screen py-20 justify-center">
      <div className=" max-w-4xl w-full">
        <Accordion type="single" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>1 - Exercício useState</AccordionTrigger>
            <AccordionContent>
              <Exercise1 />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2 - Exercício useEffect</AccordionTrigger>
            <AccordionContent>
              <Exercise2 />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3 - Exercício useMemo</AccordionTrigger>
            <AccordionContent>
              <Exercise3 />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>4 - Exercício Custom Hook</AccordionTrigger>
            <AccordionContent>
              <Exercise4 />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
