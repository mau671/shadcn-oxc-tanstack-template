import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tokenNotes = [
  {
    title: "Spacing",
    value: "Use tokenized spacing",
    body: "Use shared spacing tokens so page rhythm stays consistent.",
  },
  {
    title: "Theme colors",
    value: "Prefer semantic colors",
    body: "Prefer semantic variables before hard-coded color values.",
  },
  {
    title: "Typography",
    value: "Start from defaults",
    body: "Use the preset typography scale first, then customize as needed.",
  },
];

const TokenNotesPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>Token notes</CardTitle>
    </CardHeader>
    <CardContent>
      <Accordion type="multiple" className="w-full">
        {tokenNotes.map((item) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>
              {item.title}: {item.value}
            </AccordionTrigger>
            <AccordionContent>{item.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardContent>
  </Card>
);

export const Route = createFileRoute("/workbench/tokens")({
  component: TokenNotesPage,
});
