import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
  import React from 'react';
  import { useTheme } from "next-themes";
  
  const DiabloAccordion = ({question, answer}) => {
    const { theme } = useTheme();
    return (
      <>
        {theme === "light" ? (
        <Accordion allowMultiple className="drop-shadow-xl">
        <AccordionItem m={3} color='#FFFFFF' backgroundColor='#F97316'>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className="font-medium">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='#000000' backgroundColor='#FFFFFF'>
            {answer}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      ):(
        <Accordion allowMultiple className="drop-shadow-xl">
        <AccordionItem m={3} color='orange' backgroundColor='#000000'>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className="font-medium">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='white'>
            {answer}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      )}
    </>
    )
};

export default DiabloAccordion;
