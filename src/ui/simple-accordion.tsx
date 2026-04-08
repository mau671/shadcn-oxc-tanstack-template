import { Accordion, Paragraph, Square } from "tamagui";

interface AccordionItemData {
  title: string;
  value: string;
  body: string;
}

interface SimpleAccordionProps {
  items: AccordionItemData[];
}

export const SimpleAccordion = ({ items }: SimpleAccordionProps) => {
  return (
    <Accordion overflow="hidden" type="multiple" width="100%">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.title}
          value={item.title}
          mb={index < items.length - 1 ? -1 : 0}
        >
          <Accordion.Trigger
            flexDirection="row"
            justify="space-between"
            borderWidth={1}
            borderColor="$borderColor"
          >
            {({ open }: { open: boolean }) => (
              <>
                <Paragraph>
                  {item.title}: {item.value}
                </Paragraph>
                <Square transparent rotate={open ? "180deg" : "0deg"}>
                  <Paragraph color="$color">v</Paragraph>
                </Square>
              </>
            )}
          </Accordion.Trigger>
          <Accordion.HeightAnimator>
            <Accordion.Content
              exitStyle={{ opacity: 0 }}
              borderWidth={1}
              borderTopWidth={0}
              borderColor="$borderColor"
            >
              <Paragraph>{item.body}</Paragraph>
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
